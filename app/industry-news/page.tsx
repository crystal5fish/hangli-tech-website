import type { Metadata } from "next";
import Link from "next/link";
import IndustryNewsClient from "./IndustryNewsClient";
import { newsDate, newsItems } from "./news-data";

export const metadata: Metadata = {
  title: "行业资讯｜航理科技",
  description: "每天更新的大模型领域海内外资讯，聚焦模型、产品、技术、产业与监管变化。",
};

export default function IndustryNewsPage() {
  return (
    <>
      <header className="site-nav page-shell news-nav">
        <div className="nav-inner">
          <Link className="wordmark" href="/" aria-label="返回航理科技首页"><span aria-hidden="true" />航理</Link>
          <nav className="nav-links" aria-label="主导航">
            <Link href="/">首页</Link><Link href="/#about">关于航理</Link><Link className="current" href="/industry-news/">行业资讯</Link>
          </nav>
          <a className="nav-contact" href="mailto:aohanyue0226@sina.com">订阅与合作 <span aria-hidden="true">↗</span></a>
        </div>
      </header>
      <IndustryNewsClient items={newsItems} date={newsDate} />
      <footer className="news-footer">
        <div className="page-shell"><span className="wordmark footer-wordmark"><span aria-hidden="true" />航理</span><p>企业 AI 应用创新伙伴 · 行业资讯</p><span>© {new Date().getFullYear()} 航理科技</span></div>
      </footer>
    </>
  );
}
