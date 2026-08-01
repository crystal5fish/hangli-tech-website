export type ResearchReport = {
  slug: string;
  issue: string;
  date: string;
  title: string;
  subtitle: string;
  summary: string;
  topics: string[];
  readTime: string;
  href: string;
};

export const researchReports: ResearchReport[] = [
  {
    slug: "palantir-military-ai",
    issue: "REPORT 001",
    date: "2026-08-01",
    title: "从数据到决策",
    subtitle: "Palantir 如何重塑军事 AI",
    summary:
      "系统研究 Palantir 在情报融合、联合指挥、目标工作、战术边缘和后勤战备等军事场景中的产品体系、解决方案、商业路径与治理边界。",
    topics: ["军事 AI", "Palantir", "大模型", "决策系统"],
    readTime: "约 25 分钟",
    href: "/research/palantir-military-ai.html",
  },
];
