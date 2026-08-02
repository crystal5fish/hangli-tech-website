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
const allowedCategories = new Set(["模型发布", "产品发布", "行业动态", "投融资信息", "安全监管", "技术论文", "其他"]);

const array = (value) => value == null ? [] : Array.isArray(value) ? value : [value];
const text = (value) => {
  if (value == null) return "";
  if (typeof value === "string" || typeof value === "number") return String(value);
  return String(value["#text"] ?? value._ ?? value.href ?? "");
};
const stripHtml = (value) => text(value).replace(/<[^>]+>/g, " ").replace(/&nbsp;|&#160;/g, " ").replace(/&amp;/g, "&").replace(/\s+/g, " ").trim();
const normalizeUrl = (value) => {
  try {
    const url = new URL(value);
    for (const key of [...url.searchParams.keys()]) {
      if (/^(utm_|ref$|source$|fbclid$|gclid$)/i.test(key)) url.searchParams.delete(key);
    }
    url.hash = "";
    url.pathname = url.pathname.replace(/\/$/, "");
    return url.toString();
  } catch {
    return String(value).trim();
  }
};
const normalizeText = (value) => String(value).toLowerCase()
  .replace(/&(?:#8217|#x2019|amp);/g, "")
  .replace(/[\s\p{P}\p{S}]+/gu, "");
const bigrams = (value) => {
  const normalized = normalizeText(value);
  const result = new Set();
  for (let index = 0; index < normalized.length - 1; index += 1) result.add(normalized.slice(index, index + 2));
  return result;
};
const titleSimilarity = (left, right) => {
  const a = bigrams(left);
  const b = bigrams(right);
  if (!a.size || !b.size) return 0;
  let intersection = 0;
  for (const token of a) if (b.has(token)) intersection += 1;
  return intersection / Math.min(a.size, b.size);
};
const hasChinese = (value) => /[\u3400-\u9fff]/.test(String(value));
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
      link: normalizeUrl(linkOf(item)),
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
if (!rawItems.length) {
  throw new Error(`全部 ${sources.length} 个信息源均未返回可处理内容；任务停止，现有日报不会被覆盖`);
}

function parseJsonContent(content) {
  const cleaned = String(content).trim().replace(/^\`\`\`(?:json)?\s*/i, "").replace(/\s*\`\`\`$/, "");
  return JSON.parse(cleaned);
}

async function enrichBatch(batch, attempt = 1) {
  const apiKey = process.env.LLM_API_KEY || process.env.DEEPSEEK_API_KEY;
  if (!apiKey) throw new Error("缺少 DEEPSEEK_API_KEY；为避免发布英文原文，任务已停止");
  const endpoint = process.env.LLM_BASE_URL || "https://api.deepseek.com/chat/completions";
  const model = process.env.LLM_MODEL || "deepseek-chat";
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "content-type": "application/json", authorization: `Bearer ${apiKey}` },
      body: JSON.stringify({
        model,
        temperature: 0,
        response_format: { type: "json_object" },
        messages: [
          { role: "system", content: "你是严谨的大模型行业编辑。返回JSON对象 {items:[...]}，items数量和顺序必须与输入完全一致。每项仅包含 title、summary、category、relevance、eventKey。title和summary必须使用简体中文，专有名词可保留英文；title简洁准确，summary不超过70个汉字。category只能是模型发布、产品发布、行业动态、投融资信息、安全监管、技术论文、其他。relevance为0-10整数。eventKey用8-30个简体中文字符概括“核心主体+核心事件”，忽略媒体措辞和评论角度；不同媒体报道同一事件时eventKey必须相同。例如有关Sam Altman推荐父母用ChatGPT的报道，eventKey统一为“SamAltman推荐ChatGPT育儿”。" },
          { role: "user", content: JSON.stringify(batch.map(({ title, contentSnippet, source, sourceType }) => ({ title, contentSnippet, source, sourceType }))) },
        ],
      }),
      signal: AbortSignal.timeout(90000),
    });
    if (!response.ok) throw new Error(`LLM ${response.status}: ${await response.text()}`);
    const data = await response.json();
    const parsed = parseJsonContent(data.choices?.[0]?.message?.content);
    if (!Array.isArray(parsed.items) || parsed.items.length !== batch.length) throw new Error("LLM 返回条数不一致");
    return batch.map((item, index) => {
      const result = parsed.items[index];
      const category = allowedCategories.has(result.category) ? result.category : "其他";
      if (!hasChinese(result.title) || !hasChinese(result.summary) || !hasChinese(result.eventKey)) {
        throw new Error(`第 ${index + 1} 条未完成中文翻译`);
      }
      return {
        ...item,
        title: String(result.title).trim(),
        contentSnippet: String(result.summary).trim(),
        category,
        relevance: Math.max(0, Math.min(10, Math.round(Number(result.relevance) || 0))),
        eventKey: normalizeText(result.eventKey),
      };
    });
  } catch (error) {
    if (attempt < 3) {
      console.warn(`DeepSeek 批次处理失败，第 ${attempt} 次重试：${error.message}`);
      return enrichBatch(batch, attempt + 1);
    }
    throw error;
  }
}

async function findDuplicateGroups(items, attempt = 1) {
  if (items.length < 2) return [];
  const apiKey = process.env.LLM_API_KEY || process.env.DEEPSEEK_API_KEY;
  const endpoint = process.env.LLM_BASE_URL || "https://api.deepseek.com/chat/completions";
  const model = process.env.LLM_MODEL || "deepseek-chat";
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "content-type": "application/json", authorization: `Bearer ${apiKey}` },
      body: JSON.stringify({
        model,
        temperature: 0,
        response_format: { type: "json_object" },
        messages: [
          { role: "system", content: "你负责对当天AI资讯做全局事件去重。判断标准是是否报道同一个现实世界事件，而不是标题字面是否相似；同一人物的同一次发言、同一产品的同一次发布、同一事故或研究即为重复。返回JSON对象 {duplicateGroups:[[id,...]]}，只列出确实重复的组，每组至少2个id，不要把仅主题相近但事件不同的报道合并。" },
          { role: "user", content: JSON.stringify(items.map((item, id) => ({ id, title: item.title, summary: item.contentSnippet, source: item.source, eventKey: item.eventKey }))) },
        ],
      }),
      signal: AbortSignal.timeout(90000),
    });
    if (!response.ok) throw new Error(`LLM ${response.status}: ${await response.text()}`);
    const parsed = parseJsonContent((await response.json()).choices?.[0]?.message?.content);
    if (!Array.isArray(parsed.duplicateGroups)) throw new Error("LLM 未返回重复事件分组");
    return parsed.duplicateGroups.map((group) => [...new Set(group.map(Number))])
      .filter((group) => group.length >= 2 && group.every((id) => Number.isInteger(id) && id >= 0 && id < items.length));
  } catch (error) {
    if (attempt < 3) {
      console.warn(`DeepSeek 全局去重失败，第 ${attempt} 次重试：${error.message}`);
      return findDuplicateGroups(items, attempt + 1);
    }
    throw error;
  }
}

const enriched = [];
for (let index = 0; index < rawItems.length; index += 8) {
  const batch = rawItems.slice(index, index + 8);
  enriched.push(...await enrichBatch(batch));
}

const newsDate = new Date().toLocaleDateString("en-CA", { timeZone: "Asia/Shanghai" });
const sourceRank = (item) => ({ "厂商官方": 5, "研究机构": 4, "技术论文": 4, "技术社区": 3, "国际媒体": 2, "中文媒体": 2 }[item.sourceType] ?? 1);
const candidates = enriched
  .filter((item) => Number(item.relevance) >= 6)
  .filter((item) => hasChinese(item.title) && hasChinese(item.contentSnippet))
  .sort((a, b) => sourceRank(b) - sourceRank(a) || b.relevance - a.relevance || b.contentSnippet.length - a.contentSnippet.length);
const duplicateGroups = await findDuplicateGroups(candidates);
const globallyDuplicateIds = new Set(duplicateGroups.flatMap((group) => group.slice(1)));
const uniqueEvents = [];
for (const [candidateId, candidate] of candidates.entries()) {
  if (globallyDuplicateIds.has(candidateId)) continue;
  const duplicate = uniqueEvents.some((kept) =>
    (candidate.eventKey && candidate.eventKey === kept.eventKey)
    || (candidate.eventKey && kept.eventKey && titleSimilarity(candidate.eventKey, kept.eventKey) >= 0.7)
    || titleSimilarity(candidate.title, kept.title) >= 0.55
  );
  if (!duplicate) uniqueEvents.push(candidate);
}
const items = uniqueEvents
  .sort((a, b) => Date.parse(b.pubdate) - Date.parse(a.pubdate))
  .map((item) => {
  const publishable = { ...item };
  delete publishable.sourceType;
  delete publishable.eventKey;
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
console.log(JSON.stringify({ date: newsDate, sources: sources.length, fetched: rawItems.length, relevant: candidates.length, deduplicated: candidates.length - items.length, articles: items.length, failedSources: failures }, null, 2));
