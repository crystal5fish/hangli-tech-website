const contactEmail = "aohanyue0226@sina.com";

const questions = [
  "AI 应该应用在哪里？",
  "哪些业务场景真正具有价值？",
  "如何将大模型能力融入实际工作流程？",
  "如何从试点探索走向规模应用？",
];

const problems = [
  {
    title: "AI 方向不明确",
    body: "不知道哪些业务环节适合 AI，大量 AI 需求仍停留在概念阶段。",
  },
  {
    title: "技术与业务脱节",
    body: "业务人员不了解 AI 能力边界，技术团队难以深入理解业务流程。",
  },
  {
    title: "应用价值难验证",
    body: "缺少场景筛选方法与试点验证路径，难以形成可复制经验。",
  },
];

const steps = [
  {
    title: "认知建立",
    body: "理解人工智能发展趋势和应用边界，帮助组织建立 AI 应用共识。",
  },
  {
    title: "场景发现",
    body: "深入分析业务流程，识别高价值 AI 应用机会。",
  },
  {
    title: "方案设计",
    body: "围绕具体业务场景，设计 AI 应用模式，明确数据、流程和技术路径。",
  },
  {
    title: "试点验证",
    body: "推动最小可行应用验证，沉淀可复制经验。",
  },
];

const audiences = [
  {
    no: "01",
    title: "科研院所",
    intro: "面向复杂科研任务探索",
    items: ["AI 辅助研究", "知识管理", "方案设计", "专家智能助手"],
  },
  {
    no: "02",
    title: "央国企及大型企业",
    intro: "把 AI 连接到核心业务",
    items: ["识别 AI 应用机会", "规划应用路线", "推动业务创新"],
  },
  {
    no: "03",
    title: "成长型企业",
    intro: "让创新转化为经营动力",
    items: ["降低运营成本", "提升业务效率", "探索 AI 驱动增长"],
  },
];

const workshopOutputs = [
  "AI 应用机会地图",
  "高价值场景清单",
  "场景优先级分析",
  "AI 应用设计方案",
  "后续实施路线建议",
];

const strengths = [
  {
    title: "懂 AI，更懂业务创新",
    body: "我们不只关注模型能力，更关注 AI 如何真正改变业务流程。",
  },
  {
    title: "懂技术，更懂组织落地",
    body: "帮助组织跨越技术团队与业务团队之间的鸿沟。",
  },
  {
    title: "从方法，到实践",
    body: "不止于概念分享，而是形成可以执行的 AI 应用方案。",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <div className="section-label">{children}</div>;
}

export default function Home() {
  return (
    <>
      <header className="site-nav page-shell">
        <div className="nav-inner">
          <a className="wordmark" href="#top" aria-label="Hong AI 研究室首页">
            <span aria-hidden="true" />Hong AI 研究室
          </a>
          <nav className="nav-links" aria-label="主导航">
            <a href="#about">关于研究室</a>
            <a href="#method">四步方法</a>
            <a href="#workshop">创新工作坊</a>
            <a href="/research.html">专题研究</a>
            <a href="/industry-news/">行业资讯</a>
          </nav>
          <a className="nav-contact" href={`mailto:${contactEmail}`}>
            开始一次对话 <span aria-hidden="true">↗</span>
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero page-shell" aria-labelledby="hero-title">
          <div className="hero-copy hero-reveal">
            <p className="eyebrow">Enterprise AI Application Innovation Partner</p>
            <h1 id="hero-title">
              企业 AI 应用
              <br />
              <span>创新伙伴</span>
            </h1>
            <p className="hero-description">
              帮助传统知识密集型组织发现 AI 价值，
              <br className="desktop-break" />
              加速智能化转型。
            </p>
            <div className="hero-actions">
              <a className="primary-action" href="#method">
                了解我们如何工作 <span aria-hidden="true">↓</span>
              </a>
              <p>从 AI 认知、场景发现<br />到方案设计与应用落地</p>
            </div>
          </div>

          <div className="connection-system" aria-label="连接人工智能技术能力与产业业务创新需求">
            <div className="system-meta">
              <span>Hong AI 研究室</span>
              <span>连接系统 / 001</span>
            </div>
            <div className="connection-map" aria-hidden="true">
              <div className="axis-label">连接</div>
              <div className="connector" />
              <div className="connection-pole pole-a">
                <small>INPUT / A</small>
                <strong>人工智能<br />技术能力</strong>
                <i />
              </div>
              <div className="connection-pole pole-b">
                <i />
                <strong>产业业务<br />创新需求</strong>
                <small>CONTEXT / B</small>
              </div>
            </div>
            <div className="system-footer">
              <b>技术 → 价值</b>
              <span>不是拥有 AI<br />而是创造 AI 价值</span>
            </div>
          </div>
        </section>

        <section className="about section-pad" id="about">
          <div className="page-shell split-section">
            <SectionLabel>01 / 关于 Hong AI 研究室</SectionLabel>
            <div className="section-content">
              <h2 className="statement">
                人工智能正在重新定义
                <em>知识生产、业务决策</em>
                和组织创新方式。
              </h2>
              <p className="about-intro">
                对于科研院所、大型企业和传统组织而言，挑战并不是是否拥有 AI 能力，
                而是如何找到真正值得投入的业务场景。
              </p>
              <div className="question-grid">
                {questions.map((question, index) => (
                  <div className="question" key={question}>
                    <sup>Q / {String(index + 1).padStart(2, "0")}</sup>
                    {question}
                  </div>
                ))}
              </div>
              <div className="mission-line">
                <p>
                  Hong AI 研究室帮助知识密集型组织完成从 AI 认知、场景发现、方案设计到应用落地的全过程创新。
                </p>
                <span>连接技术能力与产业需求，推动 AI 从概念走向业务价值。</span>
              </div>
            </div>
          </div>
        </section>

        <section className="problems section-pad">
          <div className="page-shell">
            <div className="dark-heading">
              <SectionLabel>02 / 问题诊断</SectionLabel>
              <h2>从“拥有 AI 能力”<br />到“创造 AI 价值”</h2>
              <p>越来越多组织已经建设平台、引入工具、开展培训，但落地仍有三道关键鸿沟。</p>
            </div>
            <div className="problem-list">
              {problems.map((problem, index) => (
                <article className="problem-item" key={problem.title}>
                  <span>0{index + 1}</span>
                  <h3>{problem.title}</h3>
                  <p>{problem.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="method section-pad page-shell" id="method">
          <SectionLabel>03 / Hong AI 研究室的方法</SectionLabel>
          <div className="method-title-row">
            <h2>AI 应用创新四步法</h2>
            <p>一条从共识到验证的路径，<br />让每一步都为下一步创造确定性。</p>
          </div>
          <div className="steps">
            {steps.map((step, index) => (
              <article className="step" key={step.title}>
                <b>{String(index + 1).padStart(2, "0")}</b>
                <div className="step-track" aria-hidden="true"><i /></div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="audiences section-pad">
          <div className="page-shell split-section">
            <SectionLabel>04 / 我们服务的组织</SectionLabel>
            <div className="section-content">
              <h2 className="large-heading">面向知识密集型组织</h2>
              <div className="audience-list">
                {audiences.map((audience) => (
                  <article className="audience-card" key={audience.title}>
                    <span>{audience.no}</span>
                    <div>
                      <h3>{audience.title}</h3>
                      <p>{audience.intro}</p>
                    </div>
                    <ul>
                      {audience.items.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="workshop section-pad" id="workshop">
          <div className="page-shell">
            <SectionLabel>05 / 核心产品</SectionLabel>
            <div className="workshop-grid">
              <div className="workshop-copy">
                <p className="eyebrow">Enterprise AI Innovation Workshop</p>
                <h2>企业 AI 应用<br /><em>创新工作坊</em></h2>
                <p>帮助组织在短周期内，完成从 AI 认知到应用方案设计。</p>
                <a className="primary-action light" href={`mailto:${contactEmail}?subject=${encodeURIComponent("咨询 Hong AI 研究室企业 AI 应用创新工作坊")}`}>
                  咨询工作坊 <span aria-hidden="true">↗</span>
                </a>
              </div>
              <div className="output-panel">
                <div className="output-head"><span>工作坊输出</span><span>05 ITEMS</span></div>
                <ol>
                  {workshopOutputs.map((output, index) => (
                    <li key={output}><span>0{index + 1}</span>{output}</li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className="strengths section-pad page-shell">
          <SectionLabel>06 / 我们的优势</SectionLabel>
          <h2 className="large-heading">懂 AI，更懂如何让创新发生。</h2>
          <div className="strength-grid">
            {strengths.map((strength, index) => (
              <article key={strength.title}>
                <span>0{index + 1}</span>
                <h3>{strength.title}</h3>
                <p>{strength.body}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer section-pad" id="contact">
        <div className="page-shell">
          <SectionLabel>07 / 联系 Hong AI 研究室</SectionLabel>
          <h2>探索人工智能时代的<br />组织创新。</h2>
          <a className="footer-mail" href={`mailto:${contactEmail}`}>
            <span>与 Hong AI 研究室开始一次对话</span>
            <strong>{contactEmail}</strong>
            <i aria-hidden="true">↗</i>
          </a>
          <div className="footer-bottom">
            <span className="wordmark footer-wordmark"><span aria-hidden="true" />Hong AI 研究室</span>
            <a className="beian-link" href="https://beian.miit.gov.cn/" target="_blank" rel="noreferrer">京ICP备2026047718号</a>
            <span>© {new Date().getFullYear()} Hong AI 研究室</span>
          </div>
        </div>
      </footer>
    </>
  );
}
