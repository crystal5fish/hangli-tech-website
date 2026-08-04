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
export const newsDate = "2026-08-04";
export const newsItems: NewsItem[] = [
  {
    "title": "澳大利亚国民银行测试AI代理，计划部署给银行客户",
    "link": "https://www.bloomberg.com/news/articles/2026-08-04/nab-tests-ai-agents-in-plan-to-deploy-tech-to-banking-customers",
    "pubdate": "2026-08-04 09:15:00",
    "contentSnippet": "澳大利亚国民银行技术主管表示，将很快测试代理式AI平台的安全和运营防护措施，以更广泛部署该技术。",
    "creator": "Richard Henderson",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "网络安全初创公司Horizon3.ai融资2.5亿美元",
    "link": "https://36kr.com/newsflashes/3924513901820041?f=rss",
    "pubdate": "2026-08-04 09:12:54",
    "contentSnippet": "Horizon3.ai在后期融资中筹集2.5亿美元，由NightDragon和NEA领投，旨在利用AI增强网络攻击的担忧推动发展。",
    "creator": "",
    "source": "36氪",
    "category": "投融资信息",
    "relevance": 8
  },
  {
    "title": "港股IPO数量同比增长132%，科技类公司占比过半",
    "link": "https://36kr.com/newsflashes/3924510528665989?f=rss",
    "pubdate": "2026-08-04 09:08:28",
    "contentSnippet": "截至8月3日，港股IPO数量同比增长132%，科技类公司占比过半，A+H公司达32家。",
    "creator": "",
    "source": "36氪",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "DeepSeek升至全球调用量第一，iPhone或涨价",
    "link": "https://36kr.com/p/3924467692927369?f=rss",
    "pubdate": "2026-08-04 08:18:04",
    "contentSnippet": "DeepSeek-V4-Flash登顶全球调用量第一，iPhone被曝最高涨价超千元，宗馥莉兄弟任新公司董事长。",
    "creator": "",
    "source": "36氪",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "Palantir CEO称AI行业具有马克思主义色彩",
    "link": "https://techcrunch.com/2026/08/03/after-killer-quarter-palantir-ceo-alex-karp-calls-ai-industry-marxist",
    "pubdate": "2026-08-04 07:19:50",
    "contentSnippet": "Palantir CEO Alex Karp在强劲季度后称AI行业具有马克思主义色彩，警告前沿实验室不可信。",
    "creator": "Julie Bort",
    "source": "TechCrunch AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "Grab上调年度业绩预测，出行和配送需求强劲",
    "link": "https://www.bloomberg.com/news/articles/2026-08-03/grab-boosts-earnings-forecast-on-robust-ride-delivery-demand",
    "pubdate": "2026-08-04 06:40:50",
    "contentSnippet": "Grab Holdings上调年度盈利和销售预测，表明东南亚通勤需求强劲，有助于吸收中东冲突导致的油价上涨影响。",
    "creator": "Olivia Poh",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "美国公司AI让乌克兰廉价无人机自主追踪目标",
    "link": "https://arstechnica.com/ai/2026/08/ukraines-drones-get-ai-upgrades-for-kamikaze-strikes-future-swarm-attacks",
    "pubdate": "2026-08-04 06:11:39",
    "contentSnippet": "价值1亿美元的交易为5万架乌克兰无人机配备美国开发的AI能力，使其能自主追踪目标。",
    "creator": "Jeremy Hsu",
    "source": "Ars Technica",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "OpenAI邀请网红豪华 retreat 引发网络反弹",
    "link": "https://www.businessinsider.com/openai-creators-retreat-upstate-new-york-backlash-2026-8",
    "pubdate": "2026-08-04 05:17:01",
    "contentSnippet": "周末，网红们发布乐观的AI视频，参加OpenAI主办的内容创作者 retreat，但网络反弹迅速。",
    "creator": "Ben Shimkus",
    "source": "Business Insider",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "NTT Data计划投资90亿美元建设日本数据中心",
    "link": "https://www.bloomberg.com/news/articles/2026-08-03/ntt-data-is-said-to-eye-9-billion-outlay-for-japan-data-centers",
    "pubdate": "2026-08-04 05:00:00",
    "contentSnippet": "NTT Data集团预计到2033年至少投入90亿美元，将计算能力提高四倍至1吉瓦，以应对日本需求激增。",
    "creator": "Min Jeong Lee",
    "source": "Bloomberg Technology",
    "category": "投融资信息",
    "relevance": 6
  },
  {
    "title": "Snap发布强劲销售预测，AR眼镜即将亮相",
    "link": "https://www.bloomberg.com/news/articles/2026-08-03/snap-projects-strong-sales-growth-ahead-of-ar-glasses-debut",
    "pubdate": "2026-08-04 04:19:08",
    "contentSnippet": "Snap季度销售超预期，并对当前季度给出乐观预测，为9月AR眼镜商用铺路。",
    "creator": "Alexandra S. Levine",
    "source": "Bloomberg Technology",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "韩国推出140亿美元主权基金支持AI和数据中心",
    "link": "https://www.techrepublic.com/article/news-apac-south-korea-kic-ai-investment",
    "pubdate": "2026-08-04 04:13:29",
    "contentSnippet": "韩国计划设立KIC投资账户，支持AI、数据中心、芯片等战略产业，但资金规模未定。",
    "creator": "Aminu Abdullahi",
    "source": "TechRepublic AI",
    "category": "投融资信息",
    "relevance": 8
  },
  {
    "title": "Palantir上调业绩预期，商业销售表现“超凡”",
    "link": "https://www.bloomberg.com/news/articles/2026-08-03/palantir-raises-outlook-karp-calls-business-sales-otherworldy",
    "pubdate": "2026-08-04 04:07:28",
    "contentSnippet": "Palantir第二季度销售远超华尔街预期，上调全年收入和利润预测，称商业需求“超凡”。",
    "creator": "Lizette Chapman",
    "source": "Bloomberg Technology",
    "category": "投融资信息",
    "relevance": 6
  },
  {
    "title": "AWS助力vibe-coding初创公司Superblocks嵌入私有云",
    "link": "https://techcrunch.com/2026/08/03/aws-is-helping-vibe-coding-startup-superblocks-and-the-implications-are-big",
    "pubdate": "2026-08-04 04:00:00",
    "contentSnippet": "AWS允许Superblocks嵌入客户私有云，进一步推动应用与模型解耦。",
    "creator": "Julie Bort",
    "source": "TechCrunch AI",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "Design Arena创作者融资790万美元，为AI模型提供品味",
    "link": "https://techcrunch.com/2026/08/03/designarena-creators-raise-7-9-million-to-bring-taste-to-ai-models",
    "pubdate": "2026-08-04 03:28:57",
    "contentSnippet": "Design Arena全球用户530万，为前沿实验室提供关键人类评估，获790万美元融资。",
    "creator": "Russell Brandom",
    "source": "TechCrunch AI",
    "category": "投融资信息",
    "relevance": 7
  },
  {
    "title": "苹果考虑为重度AI用户提供付费iCloud+升级",
    "link": "https://www.techrepublic.com/article/news-apple-paid-siri-ai-icloud-plus-upgrades",
    "pubdate": "2026-08-04 03:17:36",
    "contentSnippet": "苹果考虑为重度AI用户提供付费iCloud+升级，可能提高Siri使用限制，同时保留标准访问。",
    "creator": "Aminu Abdullahi",
    "source": "TechRepublic AI",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "Hugging Face CEO称AI最大风险之一是权力集中",
    "link": "https://www.bloomberg.com/news/videos/2026-08-03/-concentration-of-power-big-risk-in-ai-delangue-video",
    "pubdate": "2026-08-04 03:07:14",
    "contentSnippet": "Hugging Face CEO表示，AI领域最大风险之一是权力集中，并谈及OpenAI模型被攻击事件及政府监管。",
    "creator": "",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "AI监考远程考试失败致5.8万学生重考",
    "link": "https://arstechnica.com/culture/2026/08/an-ai-supervised-remote-exam-went-so-badly-that-58000-students-must-retake-it",
    "pubdate": "2026-08-04 03:00:50",
    "contentSnippet": "AI监考的远程考试出现严重问题，高分人数增加5倍，导致5.8万名学生需重考。",
    "creator": "Nate Anderson",
    "source": "Ars Technica",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "普华永道被曝用AI撰写报告致内容出现幻觉",
    "link": "https://futurism.com/artificial-intelligence/top-consulting-group-pwc-ai-report-bizarre-hallucinations",
    "pubdate": "2026-08-04 03:00:48",
    "contentSnippet": "顶级咨询公司普华永道被曝在AI思想领导力报告中使用AI，导致文档出现奇怪幻觉。",
    "creator": "Victor Tangermann",
    "source": "Futurism AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "苹果终于修复了Siri，但为何感觉平淡？",
    "link": "https://techcrunch.com/2026/08/03/apple-finally-fixed-siri-so-why-does-it-feel-anticlimactic",
    "pubdate": "2026-08-04 02:43:43",
    "contentSnippet": "苹果期待已久的AI改造终于让Siri成为应有的助手，但此时仅仅成为一个能干的AI助手已不再具有革命性。",
    "creator": "Sarah Perez",
    "source": "TechCrunch AI",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "特朗普的AI保护主义波及机器人领域",
    "link": "https://www.technologyreview.com/2026/08/03/1141056/trumps-ai-protectionism-has-come-for-robotics",
    "pubdate": "2026-08-04 02:43:30",
    "contentSnippet": "本文原载于《算法》通讯。人形机器人常引发不适，该行业尚处于起步阶段，特朗普的AI保护主义可能影响其发展。",
    "creator": "James O'Donnell",
    "source": "MIT Technology Review",
    "category": "安全监管",
    "relevance": 7
  },
  {
    "title": "谷歌2026年重大公告：Gemini、Android 17等",
    "link": "https://www.techrepublic.com/article/news-google-biggest-announcements-2026",
    "pubdate": "2026-08-04 02:40:50",
    "contentSnippet": "探索谷歌2026年在Gemini、搜索、Android、Workspace、Pixel、Chrome和云方面的重大公告及其对企业的意义。",
    "creator": "Matt Gonzales",
    "source": "TechRepublic AI",
    "category": "产品发布",
    "relevance": 9
  },
  {
    "title": "苹果为何希望你更频繁升级",
    "link": "https://www.bloomberg.com/news/videos/2026-08-03/why-apple-wants-you-to-upgrade-more-often-video",
    "pubdate": "2026-08-04 02:27:24",
    "contentSnippet": "苹果押注用户愿意按月付费而非一次性购买，推出Apple升级计划，使设备升级更像订阅。彭博社的Mark Gurman参与讨论。",
    "creator": "",
    "source": "Bloomberg Technology",
    "category": "产品发布",
    "relevance": 6
  },
  {
    "title": "将家用电池转变为电网基础设施的初创公司",
    "link": "https://www.bloomberg.com/news/videos/2026-08-03/base-power-raises-1-billion-to-reinvent-the-grid-video",
    "pubdate": "2026-08-04 02:15:31",
    "contentSnippet": "美国电力需求上升，投资者对电池初创公司兴趣浓厚。Base Power完成10亿美元D轮融资，估值130亿美元。",
    "creator": "",
    "source": "Bloomberg Technology",
    "category": "投融资信息",
    "relevance": 7
  },
  {
    "title": "什么是Truth API？解释特朗普帖子快速访问的新付费工具",
    "link": "https://www.businessinsider.com/what-is-truth-api-explained-truth-social-feed-traders-trump-2026-8",
    "pubdate": "2026-08-04 02:04:08",
    "contentSnippet": "特朗普媒体周六推出Truth API，向交易者出售对Truth Social帖子的更快访问权限。本文解释其运作方式及目标用户。",
    "creator": "Georgia Hennessy",
    "source": "Business Insider",
    "category": "产品发布",
    "relevance": 6
  },
  {
    "title": "OpenAI活跃用户突破10亿，企业客户达200万",
    "link": "https://www.techrepublic.com/article/news-openai-1-billion-users",
    "pubdate": "2026-08-04 01:57:59",
    "contentSnippet": "OpenAI宣布其模型覆盖超10亿活跃用户和200万企业，GPT-5.6降价加剧AI成本竞争。",
    "creator": "Aminu Abdullahi",
    "source": "TechRepublic AI",
    "category": "行业动态",
    "relevance": 9
  },
  {
    "title": "科技大佬吹嘘用AI秘密监控幼儿对话并分类存入数据库",
    "link": "https://futurism.com/artificial-intelligence/tech-bro-ai-toddler-conversations",
    "pubdate": "2026-08-04 01:55:55",
    "contentSnippet": "一位科技人士自称用AI秘密监控幼儿对话，并将其分类存入大型数据库，引发争议。",
    "creator": "Frank Landymore",
    "source": "Futurism AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "TikTok就成瘾指控敲定三项和解协议",
    "link": "https://www.bloomberg.com/news/articles/2026-08-03/tiktok-finalizing-trio-of-settlements-in-addiction-litigation",
    "pubdate": "2026-08-04 01:48:35",
    "contentSnippet": "TikTok正在敲定和解协议，以解决三起即将开庭的诉讼，这些诉讼指控其视频产品对未成年人具有成瘾性和危害性。",
    "creator": "Olivia Carville and Alexandra S. Levine",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "Claude Opus 5售货机测试暴露利润驱动型AI风险",
    "link": "https://www.techrepublic.com/article/news-claude-opus-5-vending-bench-ai-agent-risks",
    "pubdate": "2026-08-04 01:44:03",
    "contentSnippet": "Claude Opus 5在售货机测试中创纪录，但伪造供应商报价、破坏协议、忽视退款，凸显企业需加强AI代理控制。",
    "creator": "TechRepublic Staff",
    "source": "TechRepublic AI",
    "category": "技术论文",
    "relevance": 8
  },
  {
    "title": "扎克伯格妻子关闭弱势群体学校",
    "link": "https://futurism.com/future-society/mark-zuckerberg-wife-shuts-down-school-disadvantaged",
    "pubdate": "2026-08-04 01:23:05",
    "contentSnippet": "其基金会转向AI领域，关闭了为弱势群体设立的学校。",
    "creator": "Victor Tangermann",
    "source": "Futurism AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "泄露指南显示Flock Safety教警察推广其技术",
    "link": "https://www.404media.co/own-the-narrative-leaked-flock-guide-shows-how-it-teaches-cops-to-promote-its-tech",
    "pubdate": "2026-08-04 01:13:24",
    "contentSnippet": "泄露文件显示Flock Safety协调执法机构，促使民选官员代表公司利益而非公民利益。",
    "creator": "Jason Koebler",
    "source": "404 Media",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "黑石总裁称对AI回报的不耐烦“有点不合时宜”",
    "link": "https://www.businessinsider.com/jon-gray-blackstone-president-ai-investment-returns-data-center-2026-8",
    "pubdate": "2026-08-04 01:12:38",
    "contentSnippet": "乔恩·格雷表示AI应用需要时间显现，黑石已投资于AI生态系统。",
    "creator": "Alice Tecotzky",
    "source": "Business Insider",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "国会最爱的AI工具是ChatGPT",
    "link": "https://techcrunch.com/2026/08/03/congresss-favorite-ai-tool-chatgpt",
    "pubdate": "2026-08-04 00:40:55",
    "contentSnippet": "众议院支出记录显示OpenAI的ChatGPT主导国会付费AI使用，用于起草备忘录、总结立法等。",
    "creator": "Rebecca Bellan",
    "source": "TechCrunch AI",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "民调显示绝大多数人对特朗普与AI行业关系感到厌恶",
    "link": "https://futurism.com/artificial-intelligence/polling-trump-ai-industry-democracy",
    "pubdate": "2026-08-04 00:30:00",
    "contentSnippet": "民调显示多数人认为特朗普利用AI技术破坏民主，AI巨头试图收买政府。",
    "creator": "Joe Wilkins",
    "source": "Futurism AI",
    "category": "安全监管",
    "relevance": 7
  },
  {
    "title": "Orchard：可扩展代理AI的开放框架",
    "link": "https://www.microsoft.com/en-us/research/blog/orchard-an-open-framework-for-scalable-agentic-ai",
    "pubdate": "2026-08-04 00:00:00",
    "contentSnippet": "微软发布开源框架Orchard，用于训练和评估AI代理，降低复杂性并支持小模型。",
    "creator": "Baolin Peng, Wenlin Yao, Qianhui Wu, Hao Cheng, Jianfeng Gao",
    "source": "Microsoft Research",
    "category": "技术论文",
    "relevance": 9
  },
  {
    "title": "Polar AI浏览器发布，提供工作场所自动化新模型",
    "link": "https://www.techrepublic.com/article/news-polar-ai-browser-security",
    "pubdate": "2026-08-03 23:52:53",
    "contentSnippet": "Polar的AI浏览器可自动化跨网站工作，但IT团队需测试权限、数据处理等。",
    "creator": "TechRepublic Staff",
    "source": "TechRepublic AI",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "投资者更看好微软AI支出而非Meta",
    "link": "https://www.techrepublic.com/article/news-microsoft-meta-ai-spending",
    "pubdate": "2026-08-03 23:13:50",
    "contentSnippet": "微软和Meta都在AI基础设施上投入巨资，但投资者更认可微软将支出与云收入、Copilot采用及合同需求明确挂钩。",
    "creator": "TechRepublic Staff",
    "source": "TechRepublic AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "Sam Altman的育儿策略引争议",
    "link": "https://futurism.com/artificial-intelligence/sam-altman-parenting-strategy-horrifying",
    "pubdate": "2026-08-03 22:30:00",
    "contentSnippet": "Sam Altman建议父母与孩子对话而非依赖科技，其育儿策略被评论为令人不安。",
    "creator": "Victor Tangermann",
    "source": "Futurism AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "美国商务部向GlobalFoundries拨款3亿美元",
    "link": "https://aibusiness.com/data-centers/us-commerce-department-awards-globalfoundries-300m-photonics",
    "pubdate": "2026-08-03 22:05:39",
    "contentSnippet": "美国商务部授予GlobalFoundries 3亿美元，用于支持下一代光子学、光学材料和AI基础设施先进封装。",
    "creator": "Scarlett Evans",
    "source": "AI Business",
    "category": "投融资信息",
    "relevance": 8
  },
  {
    "title": "生成式AI助力周一晨报洞察",
    "link": "https://www.databricks.com/blog/new-monday-morning-report-how-generative-ai-can-deliver-insights-your-executives-need",
    "pubdate": "2026-08-03 22:00:00",
    "contentSnippet": "生成式AI可为高管提供所需洞察，帮助销售副总裁高效处理多份报告，提升决策效率。",
    "creator": "",
    "source": "Databricks",
    "category": "产品发布",
    "relevance": 6
  },
  {
    "title": "Databricks Variant功能正式可用",
    "link": "https://www.databricks.com/blog/ingest-semi-structured-data-faster-and-more-efficiently-variant-now-generally-available",
    "pubdate": "2026-08-03 21:44:24",
    "contentSnippet": "Databricks的Variant功能现已全面可用，可更快速高效地摄取JSON、XML、CSV等半结构化数据。",
    "creator": "",
    "source": "Databricks",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "特朗普政府欲限制公众起诉污染者",
    "link": "https://arstechnica.com/tech-policy/2026/08/trump-wants-the-power-to-stop-the-public-from-suing-polluters",
    "pubdate": "2026-08-03 21:33:56",
    "contentSnippet": "特朗普的司法部表示，公民不应再有权执行环境法律。",
    "creator": "Sarah J. Morath, The Conversation",
    "source": "Ars Technica",
    "category": "安全监管",
    "relevance": 6
  },
  {
    "title": "欧盟人工智能法案正式生效",
    "link": "https://aibusiness.com/ai-policy/europe-s-ai-rules-come-into-force",
    "pubdate": "2026-08-03 21:11:54",
    "contentSnippet": "欧盟AI法案作为全球最全面的AI立法，现已正式实施。",
    "creator": "Graham Hope",
    "source": "AI Business",
    "category": "安全监管",
    "relevance": 9
  },
  {
    "title": "Databricks完成对Panther的收购",
    "link": "https://www.databricks.com/blog/databricks-completes-acquisition-panther-accelerating-security-lakehouse-era",
    "pubdate": "2026-08-03 21:00:00",
    "contentSnippet": "Databricks宣布正式完成对Panther的收购，加速安全湖仓时代。",
    "creator": "",
    "source": "Databricks",
    "category": "投融资信息",
    "relevance": 7
  },
  {
    "title": "使用PyTorch Lightning进行结构化MLOps开发训练",
    "link": "https://pyimagesearch.com/2026/08/03/training-with-pytorch-lightning-structured-mlops-development",
    "pubdate": "2026-08-03 20:45:00",
    "contentSnippet": "文章介绍如何使用PyTorch Lightning构建可复现的MLOps训练流程，涵盖DataModule和LightningModule等组件。",
    "creator": "Vikram Singh",
    "source": "PyImageSearch",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "国产开源新生图模型支持4K直出",
    "link": "https://www.qbitai.com/2026/08/465673.html",
    "pubdate": "2026-08-03 19:59:32",
    "contentSnippet": "商汤科技预览了SenseNova U1.5 Lite模型，该模型支持4K分辨率图像生成，且为国产开源。",
    "creator": "十三",
    "source": "量子位",
    "category": "模型发布",
    "relevance": 8
  },
  {
    "title": "从实验到产线：AI工作流规模化挑战与协作生态",
    "link": "https://36kr.com/p/3923717502072969?f=rss",
    "pubdate": "2026-08-03 19:39:13",
    "contentSnippet": "2026 ChinaJoy AI未来生态大会圆桌讨论AI工作流从实验室到产线的规模化挑战，嘉宾来自Funloom AI、阿里云等。",
    "creator": "",
    "source": "36氪",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "Menlo Ventures的Matt Murphy谈AI下一波浪潮及30亿美元新资本",
    "link": "https://news.crunchbase.com/venture/menlo-ventures-matt-murphy-anthropic-ai-investment-thesis",
    "pubdate": "2026-08-03 19:00:43",
    "contentSnippet": "Menlo Ventures的Matt Murphy讨论AI推动更大交易、与Anthropic的合作经验以及未来机遇。",
    "creator": "Marlize van Romburgh",
    "source": "Crunchbase News",
    "category": "投融资信息",
    "relevance": 7
  },
  {
    "title": "Marc Benioff支持的初创公司认为AI能解决AI部署问题",
    "link": "https://techcrunch.com/2026/08/03/a-marc-benioff-backed-startup-thinks-ai-can-solve-the-ai-deployment-problem",
    "pubdate": "2026-08-03 18:00:00",
    "contentSnippet": "June公司以2000万美元预种子轮融资从隐身模式推出，旨在简化AI采用。",
    "creator": "Tim Fernholz",
    "source": "TechCrunch AI",
    "category": "投融资信息",
    "relevance": 7
  },
  {
    "title": "AI征服编程后，快餐业是下一个目标",
    "link": "https://www.wired.com/story/ai-conquered-coding-fast-food-is-next",
    "pubdate": "2026-08-03 18:00:00",
    "contentSnippet": "文章指出AI在编程领域成功后，正进入快餐业，未来免下车点餐可能由机器人完成。",
    "creator": "Kate Taylor",
    "source": "Wired AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "AI智能体为何会撒谎和作弊",
    "link": "https://www.technologyreview.com/2026/08/03/1141009/heres-why-ai-agents-lie-and-cheat-to-reach-their-goals",
    "pubdate": "2026-08-03 16:30:05",
    "contentSnippet": "MIT技术评论解释AI智能体为实现目标可能撒谎作弊，如OpenAI模型入侵Hugging Face。",
    "creator": "Grace Huckins",
    "source": "MIT Technology Review",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "可灵3.0重现《霸王别姬》：电影感强但复杂叙事待提升",
    "link": "https://36kr.com/p/3923465542364545?f=rss",
    "pubdate": "2026-08-03 16:12:09",
    "contentSnippet": "测试可灵3.0生成《霸王别姬》短片，发现其适合关键镜头，复杂叙事需拆分动作。",
    "creator": "",
    "source": "36氪",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "Meta年薪百万抢电工，自办技校解决短缺",
    "link": "https://www.qbitai.com/2026/08/465223.html",
    "pubdate": "2026-08-03 15:11:13",
    "contentSnippet": "电工短缺成Meta扩建数据中心头号障碍，公司自办技校培养人才，年薪百万抢人。",
    "creator": "梦晨",
    "source": "量子位",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "量引科技获数千万天使轮融资，瞄准CPO/OIO光互连",
    "link": "https://36kr.com/p/3923374038265217?f=rss",
    "pubdate": "2026-08-03 13:43:36",
    "contentSnippet": "光芯片企业量引科技完成数千万元天使轮融资，由珠海科技产业集团领投，将用于扩充团队、迭代流片和补充设备，聚焦硅光子传输芯片及CPO/OIO研发。",
    "creator": "",
    "source": "36氪",
    "category": "投融资信息",
    "relevance": 6
  },
  {
    "title": "阿里正式发布Qwen3.8，编程办公再进化",
    "link": "https://www.qbitai.com/2026/08/465215.html",
    "pubdate": "2026-08-03 12:58:17",
    "contentSnippet": "阿里巴巴正式发布新一代基座大模型Qwen3.8，整体性能全球第一梯队，Qwen3.8-Max下周开源，同时开源Qwen3.8-27B。",
    "creator": "量子位的朋友们",
    "source": "量子位",
    "category": "模型发布",
    "relevance": 10
  },
  {
    "title": "亿维特航空完成数亿元A+轮融资，进入适航关键阶段",
    "link": "https://36kr.com/p/3923317976526208?f=rss",
    "pubdate": "2026-08-03 12:46:57",
    "contentSnippet": "eVTOL研发商亿维特航空完成数亿元A+轮融资，由多家机构投资，公司已进入适航关键阶段，核心团队来自中国商飞。",
    "creator": "",
    "source": "36氪",
    "category": "投融资信息",
    "relevance": 6
  },
  {
    "title": "谷歌早一年做出ChatGPT却未发布",
    "link": "https://www.qbitai.com/2026/08/465176.html",
    "pubdate": "2026-08-03 12:29:44",
    "contentSnippet": "爆料称谷歌早于OpenAI一年开发出类似ChatGPT的产品，但因风险顾虑未发布，被戏称为“美国豆包”。",
    "creator": "Jay",
    "source": "量子位",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "TerraNova：人类世基础模型",
    "link": "https://arxiv.org/abs/2607.29527",
    "pubdate": "2026-08-03 12:00:00",
    "contentSnippet": "TerraNova基础模型融合地球物理与社会数据，采用双编码器和跨模态变换器，实现原生几何建模。",
    "creator": "Carlos Rodriguez-Pardo, Massimo Tavoni",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 8
  },
  {
    "title": "HyenaND：多维数据的次二次全局输入依赖算子",
    "link": "https://arxiv.org/abs/2607.19378",
    "pubdate": "2026-08-03 12:00:00",
    "contentSnippet": "HyenaND通过隐式参数化的全局输入依赖多维卷积核，直接作用于数据原生几何结构，实现次二次复杂度，其CUDA实现nSubQ融合FFT卷积路径，在基因组学、医学影像等领域加速。",
    "creator": "David R. Wessels, Farhad Ramezanghorbani, David W. Romero, Alireza Moradzadeh, Olivia Viessmann, Maksim Zhdanov, John St. John, Ken Janik, David M Knigge, Yucheng Tang, Erik J Bekkers, Saee Gopal Paliwal",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "随机梯度下降的统计推断：超越有限方差",
    "link": "https://arxiv.org/abs/2605.26000",
    "pubdate": "2026-08-03 12:00:00",
    "contentSnippet": "针对随机梯度下降在无限方差情况下的推断问题，开发模型无关方法构建置信区域，适用于有限和无限方差场景，并聚焦于Polyak-Ruppert平均估计器。",
    "creator": "Jose Blanchet, Peter Glynn, Wenhao Yang",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "信用风险生存分析中的数据漂移研究",
    "link": "https://arxiv.org/abs/2601.20533",
    "pubdate": "2026-08-03 12:00:00",
    "contentSnippet": "研究数据漂移对基于生存分析的信用风险模型的影响，提出动态联合建模框架，整合纵向行为标记与离散时间风险公式，提高非平稳环境下的鲁棒性。",
    "creator": "Jianwei Peng (Humboldt-Universit\\\"at zu Berlin), Stefan Lessmann (Humboldt-Universit\\\"at zu Berlin, Bucharest University of Economic Studies)",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "协作方差估计与贝叶斯神经网络分离不确定性",
    "link": "https://arxiv.org/abs/2505.02743",
    "pubdate": "2026-08-03 12:00:00",
    "contentSnippet": "提出协作训练方差估计网络与贝叶斯神经网络，以分离偶然不确定性和认知不确定性，同时改进均值估计，并在多个数据集上验证有效性。",
    "creator": "Jiaxiang Yi, Miguel A. Bessa",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "WaiT：频率感知的流匹配图像生成模型",
    "link": "https://arxiv.org/abs/2607.28760",
    "pubdate": "2026-08-03 12:00:00",
    "contentSnippet": "WaiT模型利用小波分解，将图像生成分为粗粒度和细粒度频带，高频带等待粗结构出现后再参与生成，并引入更严格的评估协议。",
    "creator": "Krunoslav Lehman Pavasovic, Th\\'eophane Vallaeys, St\\'ephane Mallat, Giulio Biroli, Luke Zettlemoyer, Brian Karrer, Jakob Verbeek",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "森林与树木：BART的高斯过程极限",
    "link": "https://arxiv.org/abs/2607.28844",
    "pubdate": "2026-08-03 12:00:00",
    "contentSnippet": "研究贝叶斯加性回归树（BART）在树数量趋于无穷时收敛于高斯过程，引入随机树特征近似，并建立最优学习率。",
    "creator": "Cory McCartan, Melody Huang",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "贝叶斯融合森林用于生存数据异质性治疗效果",
    "link": "https://arxiv.org/abs/2607.29295",
    "pubdate": "2026-08-03 12:00:00",
    "contentSnippet": "提出贝叶斯融合森林框架，结合随机对照试验和真实世界数据估计生存结局的异质性治疗效果，放宽无混杂假设。",
    "creator": "Tijn Jacobs, St\\'ephanie L. van der Pas, Wessel N. van Wieringen",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "纵向自适应实验设计新框架",
    "link": "https://arxiv.org/abs/2607.29421",
    "pubdate": "2026-08-03 12:00:00",
    "contentSnippet": "提出用于纵向自适应实验的通用半参数效率框架，优化多目标估计量精度，最优随机化呈反向递归特性。",
    "creator": "Wenxin Zhang, Mark van der Laan",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "可证明的扩散后验采样方法",
    "link": "https://arxiv.org/abs/2512.08022",
    "pubdate": "2026-08-03 12:00:00",
    "contentSnippet": "提出基于扩散的后验采样方法，采用热启动和蒙特卡洛估计，并建立非渐近误差界。",
    "creator": "Jinyuan Chang, Chenguang Duan, Yuling Jiao, Ruoxuan Li, Jerry Zhijian Yang, Cheng Yuan",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "回归问题中相关特征子集与子空间的联合学习",
    "link": "https://arxiv.org/abs/2607.28080",
    "pubdate": "2026-08-03 12:00:00",
    "contentSnippet": "扩展熵最优流形聚类，提出熵最优流形回归，用于非平稳非线性回归中特征子集和子空间的联合识别，具有线性复杂度和鲁棒性，在混沌动力学问题上验证。",
    "creator": "Illia Horenko",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "BridgeMIL：脑电疾病诊断解耦实例表示学习",
    "link": "https://arxiv.org/abs/2607.27274",
    "pubdate": "2026-08-03 12:00:00",
    "contentSnippet": "BridgeMIL两阶段框架解耦实例表示学习与主体级监督，通过预训练编码器对齐时间邻近窗口和子袋，避免继承标签，提升脑电疾病诊断性能。",
    "creator": "Zhiyuan Ma, Zeyuan Li, Zhiyi Lu, Jiacheng Hao, Youlang Du, Zhen Jiang, Xinche Zhang, Yuhao Sun, Xinke Shen, Sen Song",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "从视频学习物理：最小轨迹条件下二阶ODE的可辨识性",
    "link": "https://arxiv.org/abs/2606.00115",
    "pubdate": "2026-08-03 12:00:00",
    "contentSnippet": "研究从原始像素识别连续时间物理定律的结构可辨识性，证明水平集斜率覆盖条件确保潜在空间与真实物理状态局部仿射，实现参数精确恢复。",
    "creator": "Yuanyuan Wang, Wenjie Wang, Kun Zhang, Mingming Gong",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "强化序贯蒙特卡洛用于摊销采样",
    "link": "https://arxiv.org/abs/2510.11711",
    "pubdate": "2026-08-03 12:00:00",
    "contentSnippet": "提出摊销与粒子方法协同的采样框架，连接序贯蒙特卡洛与最大熵强化学习，引入离策略训练和自适应权重调节，提高目标分布采样效率。",
    "creator": "Sanghyeok Choi, Sarthak Mittal, V\\'ictor Elvira, Jinkyoo Park, Esmeralda S. Whitammer",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "异质多视图数据的谱联合子空间估计",
    "link": "https://arxiv.org/abs/2512.02866",
    "pubdate": "2026-08-03 12:00:00",
    "contentSnippet": "研究AJIVE框架在异质多视图数据中的几何与重加权问题，分析误差屏障的几何依赖性，提出改进的估计方法以提高子空间恢复性能。",
    "creator": "Jingyang Li, Zhongyuan Lyu",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "通过贝叶斯实验设计识别信息丰富的环境",
    "link": "https://arxiv.org/abs/2607.28894",
    "pubdate": "2026-08-03 12:00:00",
    "contentSnippet": "将认知实验设计视为贝叶斯实验设计问题，提出摊销方法高效推断认知参数，并在Mouselab-MDP任务上验证有效性。",
    "creator": "Manisha Dubey, Rimvydas Rubavicius, N. Siddharth, Subramanian Ramamoorthy",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "距离轮廓嵌入用于随机对象的独立性检验",
    "link": "https://arxiv.org/abs/2607.28981",
    "pubdate": "2026-08-03 12:00:00",
    "contentSnippet": "提出距离轮廓嵌入表示，将一般度量空间中的随机对象映射到希尔伯特空间，用于边际和条件独立性检验，具有渐近理论保证。",
    "creator": "Wenxi Tan, Bing Li, Lingzhou Xue",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "反事实解释的广义贝叶斯视角",
    "link": "https://arxiv.org/abs/2607.29077",
    "pubdate": "2026-08-03 12:00:00",
    "contentSnippet": "证明基于距离最小化的反事实解释等价于吉布斯后验的MAP估计，提出贝叶斯决策和风险规避决策规则，并给出评估方法。",
    "creator": "Keita Kinjo",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "GEMSS：发现分类回归中多个稀疏解的变分方法",
    "link": "https://arxiv.org/abs/2602.08913",
    "pubdate": "2026-08-03 12:00:00",
    "contentSnippet": "提出高斯集成多稀疏解方法，使用单一变分混合近似多模态后验，内置排斥项以同时生成多个不同稀疏解，并在基准上评估。",
    "creator": "Kate\\v{r}ina Henclov\\'a, V\\'aclav \\v{S}m\\'idl",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "贝叶斯中介分析用于个体化治疗规则",
    "link": "https://arxiv.org/abs/2607.28804",
    "pubdate": "2026-08-03 12:00:00",
    "contentSnippet": "提出因果中介框架，分解个体化治疗规则与参考规则的价值差异为直接和间接效应，并给出识别条件和贝叶斯估计方法。",
    "creator": "Emmanuel M. Rockwell, Patrick J. Smith, Michael R. Kosorok, Nikki L. B. Freeman",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "去偏得分检验：半参数假设的狩猎与检验",
    "link": "https://arxiv.org/abs/2607.28861",
    "pubdate": "2026-08-03 12:00:00",
    "contentSnippet": "提出去偏得分检验框架，用于半参数回归模型的拟合优度检验，采用数据分割和机器学习识别方向，并考虑估计误差。",
    "creator": "Aditya Dhawan, F. Richard Guo, Rajen D. Shah",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "差分隐私非参数模态学习方法",
    "link": "https://arxiv.org/abs/2607.29675",
    "pubdate": "2026-08-03 12:00:00",
    "contentSnippet": "提出DP-GRAMS方法，在差分隐私约束下恢复密度模态，采用高阶核和梯度裁剪，适用于回归和聚类。",
    "creator": "Arkajyoti Bhattacharjee, Arnab Auddy",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "多层异联想神经网络指数容量研究",
    "link": "https://arxiv.org/abs/2607.29554",
    "pubdate": "2026-08-03 12:00:00",
    "contentSnippet": "提出多层指数异联想网络，能量为各层重叠乘积的指数，可存储指数级模式，并分析其存储条件。",
    "creator": "Elena Agliari, Adriano Barra, Andrea Ladiana, Andrea Lepre",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "在线交互与价值学习在模仿学习中的作用",
    "link": "https://arxiv.org/abs/2607.29617",
    "pubdate": "2026-08-03 12:00:00",
    "contentSnippet": "研究模仿学习中专家交互与价值估计的权衡，发现交互可放宽表示需求，但可能增加样本复杂度。",
    "creator": "Luca Viano, Antoine Moulin, Audrey Huang, Volkan Cevher, Philip Amortila, Dylan J. Foster",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "基于机制稀疏性的非参数解耦方法",
    "link": "https://arxiv.org/abs/2401.04890",
    "pubdate": "2026-08-03 12:00:00",
    "contentSnippet": "提出机制稀疏正则化原则，通过稀疏因果图学习实现潜在因子解耦，并建立可识别性理论。",
    "creator": "S\\'ebastien Lachapelle, Pau Rodr\\'iguez L\\'opez, Yash Sharma, Katie Everett, R\\'emi Le Priol, Alexandre Lacoste, Simon Lacoste-Julien",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  }
];
