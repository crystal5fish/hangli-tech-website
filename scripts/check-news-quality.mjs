import fs from "node:fs/promises";

const root = new URL("../", import.meta.url);
const newsDate = process.env.NEWS_DATE || new Date().toLocaleDateString("en-CA", { timeZone: "Asia/Shanghai" });
const archive = JSON.parse(await fs.readFile(new URL(`public/news/${newsDate}.json`, root), "utf8"));
const errors = [];
const links = new Set();

for (const [index, item] of archive.items.entries()) {
  const label = `第 ${index + 1} 条（${item.source}）`;
  if (!/[\u3400-\u9fff]/.test(item.title) || !/[\u3400-\u9fff]/.test(item.contentSnippet)) {
    errors.push(`${label}未完成中文翻译：${item.title}`);
  }
  if (/&(?:#\d+|#x[\da-f]+|[a-z]+);/i.test(`${item.title} ${item.contentSnippet}`)) {
    errors.push(`${label}包含未解码的 HTML 实体`);
  }
  if (links.has(item.link)) errors.push(`${label}链接重复：${item.link}`);
  links.add(item.link);
  if (Number(item.relevance) < 6) errors.push(`${label}相关度低于 6`);
}

if (errors.length) {
  throw new Error(`资讯质量检查失败（${errors.length} 项）\n${errors.slice(0, 20).join("\n")}`);
}
console.log(JSON.stringify({ date: newsDate, articles: archive.items.length, chinese: true, duplicateLinks: 0 }, null, 2));
