import fs from "node:fs/promises";
import { XMLParser } from "fast-xml-parser";

const root = new URL("../", import.meta.url);
const sources = JSON.parse(await fs.readFile(new URL("data/news-sources.json", root), "utf8"));
const outputFile = new URL("app/industry-news/news-data.ts", root);
const archiveDir = new URL("public/news/", root);
const archiveIndexFile = new URL("public/news/index.json", root);
const hours = Number(process.env.NEWS_LOOKBACK_HOURS || 36);
const cutoff = Date.now() - hours * 60 * 60 * 1000;
const parser = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: "@_", textNodeName: "#text" });

const array = (value) => value == null ? [] : Array.isArray(value) ? value : [value];
const text = (value) => {
  if (value == null) return "";
  if (typeof value === "string" || typeof value === "number") return String(value);
  return String(value["#text"] ?? value._ ?? value.href ?? "");
};
const stripHtml = (value) => text(value).replace(/<[^>]+>/g, " ").replace(/&nbsp;|&#160;/g, " ").replace(/&amp;/g, "&").replace(/\s+/g, " ").trim();
const linkOf = (item) => {
  if (typeof item.link === "string") return item.link;
  const links = array(item.link);
  return text(links.find((link) => link?.["@_rel"] === "alternate")?.["@_href"] ?? links[0]?.["@_href"] ?? item.guid ?? item.id);
};

async function fetchSource(source) {
  const response = await fetch(source.url, { headers: { "user-agent": "Hangli-AI-Brief/1.0" }, signal: AbortSignal.timeout(20000) });
  if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
  const xml = parser.parse(await response.text());
  const entries = [...array(xml?.rss?.channel?.item), ...array(xml?.feed?.entry), ...array(xml?.["rdf:RDF"]?.item)];
  return entries.map((item) => {
    const rawDate = text(item.pubDate ?? item.published ?? item.updated ?? item["dc:date"]);
    const timestamp = Date.parse(rawDate);
    return {
      title: stripHtml(item.title),
      link: linkOf(item),
      pubdate: Number.isFinite(timestamp) ? new Date(timestamp).toISOString() : new Date().toISOString(),
      contentSnippet: stripHtml(item.description ?? item.summary ?? item.content ?? item["content:encoded"]).slice(0, 900),
      creator: stripHtml(item.creator ?? item.author?.name ?? item["dc:creator"]),
      source: source.name,
      sourceType: source.type,
    };
  }).filter((item) => item.title && item.link && Date.parse(item.pubdate) >= cutoff);
}

async function mapLimit(values, limit, worker) {
  const results = [];
  for (let index = 0; index < values.length; index += limit) {
    const batch = values.slice(index, index + limit);
    results.push(...await Promise.allSettled(batch.map(worker)));
  }
  return results;
}

const fetched = await mapLimit(sources, 8, fetchSource);
const failures = fetched.map((result, index) => result.status === "rejected" ? `${sources[index]?.name}: ${result.reason?.message}` : null).filter(Boolean);
const seen = new Set();
const rawItems = fetched.flatMap((result) => result.status === "fulfilled" ? result.value : [])
  .filter((item) => seen.has(item.link) ? false : (seen.add(item.link), true))
  .sort((a, b) => Date.parse(b.pubdate) - Date.parse(a.pubdate));

function fallback(item) {
  const haystack = `${item.title} ${item.contentSnippet}`.toLowerCase();
  let category = "行业动态";
  if (/release|launch|model|模型|gpt|gemini|claude|qwen|llama/.test(haystack)) category = "模型发布";
  if (/product|app|tool|feature|产品|应用|工具/.test(haystack)) category = "产品发布";
  if (/fund|invest|acqui|融资|投资|收购/.test(haystack)) category = "投融资信息";
  if (/policy|regulat|safety|security|版权|监管|安全|政策/.test(haystack)) category = "安全监管";
  if (/paper|research|arxiv|论文|研究/.test(haystack) || item.sourceType === "技术论文") category = "技术论文";
  const relevance = /\bai\b|artificial intelligence|machine learning|llm|大模型|人工智能|智能体|gpt|gemini|claude|qwen|llama/i.test(haystack) ? 7 : 2;
  return { ...item, category, relevance };
}

async function enrichBatch(batch) {
  const apiKey = process.env.LLM_API_KEY || process.env.DEEPSEEK_API_KEY;
  if (!apiKey) return batch.map(fallback);
  const endpoint = process.env.LLM_BASE_URL || "https://api.deepseek.com/chat/completions";
  const model = process.env.LLM_MODEL || "deepseek-chat";
  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "content-type": "application/json", authorization: `Bearer ${apiKey}` },
    body: JSON.stringify({
      model,
      temperature: 0.1,
      response_format: { type: "json_object" },
      messages: [
        { role: "system", content: "你是AI行业编辑。返回JSON对象 {items:[...]}，items顺序与输入一致。每项只含 title,summary,category,relevance。title和summary必须使用简体中文，标题简洁准确，summary不超过70个汉字；category只能是模型发布、产品发布、行业动态、投融资信息、安全监管、技术论文、其他；relevance为0-10整数。不要删除任何输入。" },
        { role: "user", content: JSON.stringify(batch.map(({ title, contentSnippet, source, sourceType }) => ({ title, contentSnippet, source, sourceType }))) },
      ],
    }),
    signal: AbortSignal.timeout(60000),
  });
  if (!response.ok) throw new Error(`LLM ${response.status}: ${await response.text()}`);
  const data = await response.json();
  const parsed = JSON.parse(data.choices[0].message.content);
  if (!Array.isArray(parsed.items) || parsed.items.length !== batch.length) throw new Error("LLM 返回条数不一致");
  return batch.map((item, index) => ({ ...item, title: parsed.items[index].title || item.title, contentSnippet: parsed.items[index].summary || item.contentSnippet, category: parsed.items[index].category || "其他", relevance: Number(parsed.items[index].relevance) || 0 }));
}

const enriched = [];
for (let index = 0; index < rawItems.length; index += 12) {
  const batch = rawItems.slice(index, index + 12);
  try { enriched.push(...await enrichBatch(batch)); }
  catch (error) { console.warn(error.message); enriched.push(...batch.map(fallback)); }
}

const newsDate = new Date().toLocaleDateString("en-CA", { timeZone: "Asia/Shanghai" });
const hasLlm = Boolean(process.env.LLM_API_KEY || process.env.DEEPSEEK_API_KEY);
const items = enriched
  .filter((item) => Number(item.relevance) >= 6)
  .filter((item) => hasLlm || /[\u3400-\u9fff]/.test(item.title))
  .map((item) => {
  const publishable = { ...item };
  delete publishable.sourceType;
  return {
    ...publishable,
    contentSnippet: String(item.contentSnippet).slice(0, 90),
    pubdate: new Date(item.pubdate).toLocaleString("sv-SE", { timeZone: "Asia/Shanghai" }),
  };
});
const header = `export type NewsItem = {
  title: string;
  link: string;
  pubdate: string;
  contentSnippet: string;
  creator: string;
  relevance: number;
  source: string;
  category: "模型发布" | "产品发布" | "行业动态" | "投融资信息" | "安全监管" | "技术论文" | "其他";
};

// 此文件由 scripts/update-news.mjs 自动生成。
`;
await fs.writeFile(outputFile, `${header}export const newsDate = ${JSON.stringify(newsDate)};\nexport const newsItems: NewsItem[] = ${JSON.stringify(items, null, 2)};\n`);
await fs.mkdir(archiveDir, { recursive: true });
await fs.writeFile(new URL(`${newsDate}.json`, archiveDir), JSON.stringify({ date: newsDate, items }, null, 2));
let archiveDates = [];
try { archiveDates = JSON.parse(await fs.readFile(archiveIndexFile, "utf8")).dates ?? []; } catch {}
archiveDates = [...new Set([newsDate, ...archiveDates])].sort((a, b) => b.localeCompare(a));
await fs.writeFile(archiveIndexFile, JSON.stringify({ dates: archiveDates }, null, 2));
console.log(JSON.stringify({ date: newsDate, sources: sources.length, articles: items.length, failedSources: failures }, null, 2));
