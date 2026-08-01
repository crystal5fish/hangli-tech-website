"use client";

import { useEffect, useMemo, useState } from "react";
import type { NewsItem } from "./news-data";

const categories: NewsItem["category"][] = ["模型发布", "产品发布", "行业动态", "安全监管", "投融资信息", "技术论文", "其他"];

function timeOf(value: string) {
  return value.slice(11, 16);
}

function dateLabel(value: string) {
  const parsed = new Date(`${value}T00:00:00+08:00`);
  const weekday = new Intl.DateTimeFormat("zh-CN", { weekday: "short", timeZone: "Asia/Shanghai" }).format(parsed);
  return { short: value.slice(5).replace("-", "/"), weekday };
}

export default function IndustryNewsClient({ items, date }: { items: NewsItem[]; date: string }) {
  const [activeDate, setActiveDate] = useState(date);
  const [activeItems, setActiveItems] = useState(items);
  const [archiveDates, setArchiveDates] = useState([date]);
  const [loading, setLoading] = useState(false);
  const dateParts = activeDate.split("-");
  const highlights = useMemo(() => [...activeItems]
    .sort((a, b) => b.relevance - a.relevance || b.pubdate.localeCompare(a.pubdate))
    .slice(0, 3), [activeItems]);
  const groups = useMemo(() => categories
    .map((category) => ({ category, items: activeItems.filter((item) => item.category === category) }))
    .filter((group) => group.items.length > 0), [activeItems]);
  const activeIndex = archiveDates.indexOf(activeDate);
  const recentDates = useMemo(() => {
    const latest = new Date(`${archiveDates[0]}T00:00:00+08:00`).getTime();
    const cutoff = latest - 30 * 24 * 60 * 60 * 1000;
    return archiveDates.filter((archiveDate) => new Date(`${archiveDate}T00:00:00+08:00`).getTime() >= cutoff);
  }, [archiveDates]);

  useEffect(() => {
    fetch("/news/index.json", { cache: "no-store" })
      .then((response) => response.ok ? response.json() : Promise.reject())
      .then((data) => setArchiveDates(data.dates?.length ? data.dates : [date]))
      .catch(() => setArchiveDates([date]));
  }, [date]);

  async function loadDate(nextDate: string) {
    if (!nextDate || nextDate === activeDate) return;
    setLoading(true);
    try {
      const response = await fetch(`/news/${nextDate}.json`, { cache: "no-store" });
      if (!response.ok) throw new Error("历史资讯读取失败");
      const data = await response.json();
      setActiveDate(data.date);
      setActiveItems(data.items);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="brief-main">
      <section className="brief-top page-shell">
        <div className="brief-title">
          <div>
            <p>HANGli AI DAILY / 行业资讯</p>
            <h1>AI 每日情报</h1>
          </div>
          <div className="brief-date">
            <strong>{dateParts[2]}</strong>
            <span>{dateParts[0]} / {dateParts[1]}<br />08:00 更新</span>
          </div>
        </div>

        <div className="archive-nav" aria-label="历史资讯日期">
          <button type="button" disabled={activeIndex < 0 || activeIndex >= archiveDates.length - 1 || loading} onClick={() => loadDate(archiveDates[activeIndex + 1])}>← 前一天</button>
          <div className="date-list">
            {recentDates.map((archiveDate) => {
              const label = dateLabel(archiveDate);
              return <button type="button" className={archiveDate === activeDate ? "active" : ""} disabled={loading} onClick={() => loadDate(archiveDate)} key={archiveDate}><b>{label.short}</b><span>{label.weekday}</span></button>;
            })}
          </div>
          <button type="button" disabled={activeIndex <= 0 || loading} onClick={() => loadDate(archiveDates[activeIndex - 1])}>后一天 →</button>
          <span className="archive-status">{loading ? "正在读取…" : `当前共 ${activeItems.length} 条`}</span>
        </div>

        <div className="brief-highlights" aria-label="今日重点信息汇总">
          <div className="highlight-label"><span>当日重点</span><b>{activeItems.length}</b><small>条高相关资讯</small></div>
          {highlights.map((item, index) => (
            <article key={item.link}>
              <span>0{index + 1} / {item.category}</span>
              <h2><a href={item.link} target="_blank" rel="noreferrer">{item.title}</a></h2>
              <p>{item.contentSnippet}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="category-board page-shell" aria-label="按类别整理的资讯">
        {groups.map((group, groupIndex) => (
          <section className="category-column" key={group.category}>
            <header>
              <div><span>{String(groupIndex + 1).padStart(2, "0")}</span><h2>{group.category}</h2></div>
              <b>{group.items.length}</b>
            </header>
            <div className="category-list">
              {group.items.map((item) => (
                <article className="compact-story" key={item.link}>
                  <div className="compact-meta"><span>{item.source}</span><time>{timeOf(item.pubdate)}</time></div>
                  <h3><a href={item.link} target="_blank" rel="noreferrer">{item.title}</a></h3>
                  <p>{item.contentSnippet}</p>
                  <a className="compact-link" href={item.link} target="_blank" rel="noreferrer" aria-label={`阅读：${item.title}`}>↗</a>
                </article>
              ))}
            </div>
          </section>
        ))}
      </section>

      <div className="brief-note page-shell">
        <span>仅收录 AI 相关度 ≥ 6 的信息</span>
        <span>厂商官方 · 国际媒体 · 技术社区 · 中文科技媒体</span>
      </div>
    </main>
  );
}
