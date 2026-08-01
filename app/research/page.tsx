import type { Metadata } from "next";
import Link from "next/link";
import { researchReports } from "./reports";

export const metadata: Metadata = {
  title: "专题研究｜航理科技",
  description: "航理科技围绕人工智能、产业应用与前沿技术持续发布的深度专题研究。",
};

export default function ResearchPage() {
  return (
    <>
      <header className="site-nav page-shell research-nav">
        <div className="nav-inner">
          <Link className="wordmark" href="/" aria-label="返回航理科技首页"><span aria-hidden="true" />航理</Link>
          <nav className="nav-links" aria-label="主导航">
            <Link href="/">首页</Link>
            <Link href="/#about">关于航理</Link>
            <Link className="current" href="/research/">专题研究</Link>
            <Link href="/industry-news/">行业资讯</Link>
          </nav>
          <a className="nav-contact" href="mailto:aohanyue0226@sina.com">研究合作 <span aria-hidden="true">↗</span></a>
        </div>
      </header>

      <main className="research-main">
        <section className="research-mast page-shell">
          <div className="research-mast-meta">
            <span>HANGli RESEARCH / 专题研究</span>
            <span>ISSUE 001—</span>
          </div>
          <div className="research-mast-grid">
            <h1>研究复杂问题，<br /><em>连接技术与现实。</em></h1>
            <div className="research-intro">
              <b>持续更新</b>
              <p>围绕人工智能、产业应用与前沿科技，以公开证据形成可读、可核验、可用于行动的研究。</p>
            </div>
          </div>
        </section>

        <section className="research-list page-shell" aria-label="专题研究报告列表">
          <div className="research-list-head">
            <span>全部报告 / ALL REPORTS</span>
            <b>{String(researchReports.length).padStart(2, "0")}</b>
          </div>
          {researchReports.map((report) => (
            <article className="research-card" key={report.slug}>
              <div className="research-card-index">
                <span>{report.issue}</span>
                <time dateTime={report.date}>{report.date.replaceAll("-", " / ")}</time>
              </div>
              <div className="research-card-copy">
                <div className="research-tags">{report.topics.map((topic) => <span key={topic}>{topic}</span>)}</div>
                <h2>{report.title}<em>{report.subtitle}</em></h2>
                <p>{report.summary}</p>
                <div className="research-card-meta"><span>{report.readTime}</span><span>公开资料研究</span></div>
              </div>
              <a className="research-open" href={report.href} aria-label={`阅读专题：${report.title}——${report.subtitle}`}>
                <span>阅读全文</span><b>↗</b>
              </a>
            </article>
          ))}
          <div className="research-next">
            <span>NEXT / 002</span>
            <p>下一篇专题正在研究中。新的报告会持续加入此列表，无需改变页面结构。</p>
          </div>
        </section>
      </main>

      <footer className="news-footer research-footer">
        <div className="page-shell"><span className="wordmark footer-wordmark"><span aria-hidden="true" />航理</span><p>企业 AI 应用创新伙伴 · 专题研究</p><span>© {new Date().getFullYear()} 航理科技</span></div>
      </footer>
    </>
  );
}
