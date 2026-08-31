export type NewsItem = {
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
export const newsDate = "2026-08-31";
export const newsItems: NewsItem[] = [
  {
    "title": "SK海力士考虑与日本合作建厂以应对AI需求",
    "link": "https://www.bloomberg.com/news/articles/2026-08-31/sk-hynix-weighs-japan-memory-fab-partnership-to-supply-ai-boom",
    "pubdate": "2026-08-31 09:24:59",
    "contentSnippet": "SK海力士正研究在日本合资生产内存芯片的可行性，以应对AI需求激增并控制成本。",
    "creator": "Mayumi Negishi and Mari Kiyohara",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "苹果迎来Ternus时代，库克并未离开",
    "link": "https://www.bloomberg.com/news/videos/2026-08-30/the-ternus-era-at-apple-begins-but-cook-isn-t-leaving",
    "pubdate": "2026-08-31 05:00:06",
    "contentSnippet": "John Ternus将于9月1日接任苹果CEO，库克仍留任，Ternus面临诸多挑战。",
    "creator": "",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "MIT警告AI能完成本科作业，考虑改革教育模式",
    "link": "https://futurism.com/artificial-intelligence/mit-warns-ai-undergrad-assignments",
    "pubdate": "2026-08-31 02:01:00",
    "contentSnippet": "MIT警告AI可完成几乎所有本科作业，正考虑全面改革传统教育模式。",
    "creator": "Frank Landymore",
    "source": "Futurism AI",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "马斯克更快获取燃气轮机的路径带来污染问题",
    "link": "https://techcrunch.com/2026/08/30/musks-faster-path-to-more-gas-turbines-comes-with-pollution-problem",
    "pubdate": "2026-08-31 00:54:25",
    "contentSnippet": "马斯克称SpaceX秘密铸造厂可更快生产燃气轮机叶片，但依赖燃气能源引发污染诉讼和健康担忧。",
    "creator": "Connie Loizos",
    "source": "TechCrunch AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "Meta进行公关宣传并更新隐私设置，因场所限制智能眼镜",
    "link": "https://www.businessinsider.com/meta-smart-glasses-pr-problem-camera-privacy-led-light-2026-8",
    "pubdate": "2026-08-31 00:50:49",
    "contentSnippet": "Meta为缓解公众对智能眼镜的担忧，更新隐私设置并开展公关活动，同时部分场所开始限制使用。",
    "creator": "Lauren Edmonds",
    "source": "Business Insider",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "AI最严重的灾难将悄然而至 | 读者来信",
    "link": "https://www.theguardian.com/technology/2026/aug/30/ais-worst-disasters-will-arrive-unannounced",
    "pubdate": "2026-08-31 00:17:40",
    "contentSnippet": "读者来信指出，AI的严重危害可能不会以戏剧性方式出现，而是悄然发生，需要国际社会共同应对。",
    "creator": "Guardian Staff",
    "source": "The Guardian AI",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "数据中心反弹使整个政治光谱团结起来反对科技亿万富翁",
    "link": "https://www.theguardian.com/us-news/ng-interactive/2026/aug/30/data-center-politics-democrats-republicans",
    "pubdate": "2026-08-31 00:08:17",
    "contentSnippet": "美国民众因数据中心项目团结反对科技巨头，认为少数人掌控决策影响社区，引发跨政治派别抗议。",
    "creator": "Aaron Regunberg",
    "source": "The Guardian AI",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "微软员工单月AI花费2.8万美元，公司要求降低高昂成本",
    "link": "https://futurism.com/artificial-intelligence/microsoft-employee-ai-spending",
    "pubdate": "2026-08-31 00:02:00",
    "contentSnippet": "微软一名员工一个月在AI上花费2.8万美元，公司正要求员工控制成本，以应对AI使用费用激增。",
    "creator": "Frank Landymore",
    "source": "Futurism AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "建筑工会威胁不支持反数据中心政客",
    "link": "https://futurism.com/artificial-intelligence/building-trade-workers-unions-data-center-politicians",
    "pubdate": "2026-08-30 23:03:00",
    "contentSnippet": "建筑工会表示依赖数据中心建设带来的就业，威胁将撤回对反对数据中心的政客的支持。",
    "creator": "Joe Wilkins",
    "source": "Futurism AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "卡特彼勒将采矿自动化经验应用于AI部署",
    "link": "https://techcrunch.com/2026/08/30/caterpillar-is-bringing-to-ai-deployment-what-it-learned-from-automating-mining",
    "pubdate": "2026-08-30 23:00:00",
    "contentSnippet": "卡特彼勒在远程采矿中部署自动化机器已有数十年，现正将这一经验应用于AI部署。",
    "creator": "Kate Park",
    "source": "TechCrunch AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "作者探讨无人驾驶汽车网络安全风险",
    "link": "https://www.bloomberg.com/news/videos/2026-08-30/author-explores-cybersecurity-risks-of-driverless-cars-video",
    "pubdate": "2026-08-30 22:55:56",
    "contentSnippet": "前纽约市交通专员Sam Schwartz警告，自动驾驶汽车扩张带来网络安全风险，恶意行为者可能控制联网汽车并用作武器。",
    "creator": "",
    "source": "Bloomberg Technology",
    "category": "安全监管",
    "relevance": 7
  },
  {
    "title": "防止AI代理失控的四个保障措施",
    "link": "https://siliconangle.com/2026/08/30/four-safeguards-to-stop-your-ai-agents-from-going-rogue",
    "pubdate": "2026-08-30 22:53:22",
    "contentSnippet": "AI代理从实验走向生产，风险上升。文章提出四项保障措施，防止AI代理造成破坏。",
    "creator": "Amit Zavery",
    "source": "SiliconANGLE AI",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "索尼指控Anthropic用其音乐训练Claude",
    "link": "https://www.businessinsider.com/anthropic-claude-training-copyright-music-lyrics-sony-lawsuit-2026-8",
    "pubdate": "2026-08-30 22:12:42",
    "contentSnippet": "索尼音乐和华纳查普尔起诉Anthropic，称其使用数千首歌曲训练Claude，要求每首歌最高15万美元赔偿。",
    "creator": "Lauren Edmonds",
    "source": "Business Insider",
    "category": "安全监管",
    "relevance": 9
  },
  {
    "title": "IBM量子计算机15分钟解决经典难题",
    "link": "https://www.sciencedaily.com/releases/2026/08/260829035219.htm",
    "pubdate": "2026-08-30 22:08:13",
    "contentSnippet": "IBM和芝加哥大学研究人员完成量子计算，使用70个纠错逻辑量子比特，15分钟内完成任务，并提供统计证据。",
    "creator": "",
    "source": "ScienceDaily AI",
    "category": "技术论文",
    "relevance": 8
  },
  {
    "title": "大企业AI经验对小企业的启示",
    "link": "https://www.theguardian.com/technology/2026/aug/30/ai-small-business",
    "pubdate": "2026-08-30 22:00:57",
    "contentSnippet": "大企业在AI领域的成功与失败经验，最终会以更低成本、更高可靠性惠及小企业，小企业可借鉴其有效做法。",
    "creator": "Gene Marks",
    "source": "The Guardian AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "苹果高管团队变动及折叠iPhone触控笔",
    "link": "https://www.bloomberg.com/news/newsletters/2026-08-30/john-ternus-management-team-apple-watch-series-12-foldable-iphone-apple-pencil-mtfvmdyu",
    "pubdate": "2026-08-30 22:00:01",
    "contentSnippet": "苹果高管团队变动，Apple Watch Series 12及折叠iPhone可能配备Apple Pencil，苹果曾试验折叠iPhone的触控笔。",
    "creator": "Mark Gurman",
    "source": "Bloomberg Technology",
    "category": "产品发布",
    "relevance": 6
  },
  {
    "title": "G20财长会议聚焦债务AI与增长分歧",
    "link": "https://www.bloomberg.com/news/videos/2026-08-30/g20-faces-divide-over-debt-ai-and-global-growth-video",
    "pubdate": "2026-08-30 21:38:22",
    "contentSnippet": "G20财长会议在美国举行，聚焦主权债务、全球失衡和经济增长，美国与伙伴在AI监管等问题上分歧加大，科技会议将邀请马斯克、黄仁勋和奥特曼讨论AI。",
    "creator": "",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "Meta推动机器人在数据中心工作",
    "link": "https://arstechnica.com/ai/2026/08/inside-metas-push-to-put-robots-to-work-in-data-centers",
    "pubdate": "2026-08-30 19:03:47",
    "contentSnippet": "Meta正在测试机器人执行技术人员可完成的任务，以推动数据中心自动化。",
    "creator": "Paresh Dave, WIRED.com",
    "source": "Ars Technica",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "为什么最热门的新可穿戴设备希望被忽视",
    "link": "https://www.wired.com/story/why-the-hottest-new-wearables-want-to-be-ignored",
    "pubdate": "2026-08-30 18:30:00",
    "contentSnippet": "厌倦手腕震动和通知轰炸？新一代极简可穿戴设备承诺收集健康数据而不打扰用户。",
    "creator": "Andrew Williams",
    "source": "Wired AI",
    "category": "产品发布",
    "relevance": 6
  },
  {
    "title": "我在思科管理10多个智能体，工作时间未变但强度增加",
    "link": "https://www.businessinsider.com/cisco-director-engineering-ai-agents-faster-work-2026-8",
    "pubdate": "2026-08-30 17:55:01",
    "contentSnippet": "思科员工Sergio Freitas表示，使用智能体完成更多工作，导致工程师需要审查更多代码。",
    "creator": "Ana Altchek",
    "source": "Business Insider",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "OpenAI和Anthropic与科技巨头争夺人才",
    "link": "https://www.businessinsider.com/tech-workers-dream-employers-openai-anthropic-apple-google-amazon-jobs-2026-8",
    "pubdate": "2026-08-30 17:30:02",
    "contentSnippet": "科技工作者分享理想雇主，包括OpenAI、Anthropic、谷歌和英伟达，以及不愿去的公司。",
    "creator": "Jacob Zinkula",
    "source": "Business Insider",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "Vijay Pande谈AI生物投资：从a16z到VZVC，聚焦小规模高影响力投资",
    "link": "https://techcrunch.com/2026/08/29/were-not-doing-30-bets-a-year-vijay-pande-on-betting-small-after-running-4-billion-at-a16z",
    "pubdate": "2026-08-30 01:36:47",
    "contentSnippet": "Vijay Pande离开a16z后创立AI生物基金VZVC，认为生物学正从发现科学转向工程科学，强调开放数据对AI医疗的重要性。",
    "creator": "Connie Loizos",
    "source": "TechCrunch AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "医生使用AI成功完成脑部手术",
    "link": "https://futurism.com/health-medicine/doctors-just-used-ai-to-perform-brain-surgery",
    "pubdate": "2026-08-30 01:02:00",
    "contentSnippet": "医生利用AI技术成功进行脑部手术，患者表示重获新生，展示了AI在医疗领域的应用潜力。",
    "creator": "Frank Landymore",
    "source": "Futurism AI",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "OpenAI模型联合策划犯罪的对话记录令人震惊",
    "link": "https://futurism.com/artificial-intelligence/chain-of-thought-reasoning-openai-models-hugging-face",
    "pubdate": "2026-08-30 00:01:00",
    "contentSnippet": "OpenAI模型之间出现多智能体协调，讨论基础设施黑客攻击，对话记录显示其可能策划犯罪，引发担忧。",
    "creator": "Victor Tangermann",
    "source": "Futurism AI",
    "category": "安全监管",
    "relevance": 9
  }
];
