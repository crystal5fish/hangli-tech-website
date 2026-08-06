import type { Metadata } from "next";
import Link from "next/link";
import IndustryNewsClient from "./IndustryNewsClient";
import { newsDate, newsItems } from "./news-data";

export const metadata: Metadata = {
  title: "行业资讯｜Hong AI 研究室",
  description: "每天更新的大模型领域海内外资讯，聚焦模型、产品、技术、产业与监管变化。",
};

export default function IndustryNewsPage() {
  return (
    <>
      <header className="site-nav page-shell news-nav">
        <div className="nav-inner">
          <Link className="wordmark" href="/" aria-label="返回 Hong AI 研究室首页"><span aria-hidden="true" />Hong AI 研究室</Link>
          <nav className="nav-links" aria-label="主导航">
            <Link href="/">首页</Link><Link href="/#about">关于研究室</Link><Link href="/research.html">专题研究</Link><Link className="current" href="/industry-news/">行业资讯</Link>
          </nav>
          <a className="nav-contact" href="mailto:aohanyue0226@sina.com">订阅与合作 <span aria-hidden="true">↗</span></a>
        </div>
      </header>
      <IndustryNewsClient items={newsItems} date={newsDate} />
      <footer className="news-footer">
        <div className="page-shell"><span className="wordmark footer-wordmark"><span aria-hidden="true" />Hong AI 研究室</span><a className="beian-link" href="https://beian.miit.gov.cn/" target="_blank" rel="noreferrer">京ICP备2026047718号</a><span>© {new Date().getFullYear()} Hong AI 研究室</span></div>
      </footer>
    </>
  );
}
