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
export const newsDate = "2026-09-18";
export const newsItems: NewsItem[] = [
  {
    "title": "Manus重生第17天，估值翻倍至40亿美元",
    "link": "https://www.qbitai.com/2026/09/491764.html",
    "pubdate": "2026-09-18 08:37:13",
    "contentSnippet": "Manus以40亿美元估值推进新融资，重生仅17天估值翻倍。",
    "creator": "衡宇",
    "source": "量子位",
    "category": "投融资信息",
    "relevance": 9
  },
  {
    "title": "Claude Code大重构，内部3万Agent管理技术免费开放",
    "link": "https://www.qbitai.com/2026/09/491711.html",
    "pubdate": "2026-09-18 08:34:34",
    "contentSnippet": "Claude Code进行重大重构，并免费开放其内部管理3万个Agent的技术。",
    "creator": "Jay",
    "source": "量子位",
    "category": "产品发布",
    "relevance": 9
  },
  {
    "title": "Anthropic详述监测AI发展速度的实用指标",
    "link": "https://siliconangle.com/2026/09/17/anthropic-details-practical-metrics-to-help-monitor-the-speed-of-ai-development",
    "pubdate": "2026-09-18 07:44:57",
    "contentSnippet": "Anthropic发布博客，分享三个新指标以监测AI发展速度，此前CEO呼吁协调放缓开发节奏。",
    "creator": "Mike Wheatley",
    "source": "SiliconANGLE AI",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "Crusoe融资39亿美元，建设大型数据中心和模块化AI工厂",
    "link": "https://techcrunch.com/2026/09/17/crusoe-raises-3-9b-to-build-massive-data-centers-and-small-modular-ai-factories",
    "pubdate": "2026-09-18 07:25:52",
    "contentSnippet": "Crusoe完成39亿美元融资，估值达309亿美元，将用于建设大型数据中心和模块化AI工厂。",
    "creator": "Marina Temkin",
    "source": "TechCrunch AI",
    "category": "投融资信息",
    "relevance": 9
  },
  {
    "title": "Google DeepMind成立研究所，扩大AGI辩论",
    "link": "https://techcrunch.com/2026/09/17/google-deepmind-launches-institute-to-widen-the-agi-debate",
    "pubdate": "2026-09-18 07:21:17",
    "contentSnippet": "Google DeepMind成立新研究所，旨在呈现Google、DeepMind与全球研究界在AGI问题上的不同观点。",
    "creator": "Aditya Mehta",
    "source": "TechCrunch AI",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "OpenAI推出Astra for Law，基于GPT-6的法律研究配置",
    "link": "https://siliconangle.com/2026/09/17/openai-launches-astra-for-law-a-gpt-6-configuration-for-legal-research",
    "pubdate": "2026-09-18 07:17:25",
    "contentSnippet": "OpenAI发布Astra for Law，将GPT-6 Astra模型与法律搜索索引和分析指令结合，用于法律研究和起草。",
    "creator": "Duncan Riley",
    "source": "SiliconANGLE AI",
    "category": "产品发布",
    "relevance": 9
  },
  {
    "title": "印度快商务架构师进行长期押注",
    "link": "https://www.bloomberg.com/news/videos/2026-09-17/india-s-quick-commerce-architect-takes-on-slow-wagers-video",
    "pubdate": "2026-09-18 07:06:26",
    "contentSnippet": "Zomato创始人Deepinder Goyal在成功后将目光投向更长期挑战，接受彭博专访分享其新追求。",
    "creator": "",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "印度快商务颠覆者淡定看待AI“神话”",
    "link": "https://www.bloomberg.com/news/videos/2026-09-17/india-s-quick-commerce-disruptor-stays-calm-on-ai-myth-video",
    "pubdate": "2026-09-18 07:01:37",
    "contentSnippet": "Deepinder Goyal认为其Eternal旗下Zomato和Blinkit等平台能比通用AI模型更好地服务客户，并谈及卸任日常运营后的新追求。",
    "creator": "",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "Treble获1800万美元融资，为机器人生成音频模拟",
    "link": "https://siliconangle.com/2026/09/17/treble-nabs-18m-to-generate-audio-simulations-for-robots",
    "pubdate": "2026-09-18 06:53:36",
    "contentSnippet": "冰岛音频初创公司Treble Technologies获得1800万美元A2轮融资，由Paladin Capital Group领投，将用于为机器人生成音频模拟。",
    "creator": "Maria Deutscher",
    "source": "SiliconANGLE Big Data",
    "category": "投融资信息",
    "relevance": 7
  },
  {
    "title": "宾夕法尼亚州长Shapiro呼吁加强AI保障措施",
    "link": "https://www.bloomberg.com/news/articles/2026-09-17/pennsylvania-governor-shapiro-calls-for-tougher-ai-safeguards",
    "pubdate": "2026-09-18 06:26:06",
    "contentSnippet": "宾夕法尼亚州长Josh Shapiro呼吁对人工智能实施更严格的保障措施，同时主张美国应继续获取其经济收益。",
    "creator": "Liz Skalka",
    "source": "Bloomberg Technology",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "FAA计划投入8.75亿美元用AI升级空中交通管制",
    "link": "https://techcrunch.com/2026/09/17/the-faas-plan-to-fix-air-traffic-875-million-worth-of-ai",
    "pubdate": "2026-09-18 06:14:59",
    "contentSnippet": "美国联邦航空管理局启动基于AI的软件项目，帮助空中交通管制员更高效地管理美国空域。",
    "creator": "Lucas Ropek",
    "source": "TechCrunch AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "Anthropic称Claude驱动其26%的研发工作",
    "link": "https://www.bloomberg.com/news/articles/2026-09-17/anthropic-says-claude-drives-26-of-its-research-and-development",
    "pubdate": "2026-09-18 05:27:39",
    "contentSnippet": "Anthropic表示，其AI研发工作超过四分之一由Claude聊天机器人驱动，显示AI能加速未来模型开发。",
    "creator": "Shirin Ghaffary",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "亚马逊：AI模型应在“准备就绪且安全”时发布",
    "link": "https://www.bloomberg.com/news/articles/2026-09-17/amazon-says-ai-models-should-be-released-when-ready-and-safe",
    "pubdate": "2026-09-18 05:18:31",
    "contentSnippet": "亚马逊称AI模型须经严格测试后再发布，加入AI发展速度与安全问题的辩论。",
    "creator": "Matt Day",
    "source": "Bloomberg Technology",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "联大主席呼吁联合国向AI行业敞开大门",
    "link": "https://www.bloomberg.com/news/videos/2026-09-17/un-must-unlock-its-doors-to-ai-industry-unga-president-video",
    "pubdate": "2026-09-18 04:07:29",
    "contentSnippet": "联大主席拉赫曼表示联合国需与AI行业加强合作，秘书长也呼吁全球协调监管AI，迎接联大高级别周。",
    "creator": "",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "联合国借助谷歌让全球数据适配AI代理",
    "link": "https://techcrunch.com/2026/09/17/un-turns-to-google-to-make-its-global-data-ready-for-ai-agents",
    "pubdate": "2026-09-18 04:00:00",
    "contentSnippet": "联合国与谷歌合作，使全球发展数据更易被AI代理读取，此前UNICEF测试发现主流AI模型检索数据困难。",
    "creator": "Jagmeet Singh",
    "source": "TechCrunch AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "微软高管曾称AI抓取为“人类史上最大劳动盗窃”",
    "link": "https://techcrunch.com/2026/09/17/microsoft-exec-called-ai-scraping-the-largest-theft-of-labor-in-human-history-new-unredacted-filings-reveal",
    "pubdate": "2026-09-18 03:46:08",
    "contentSnippet": "新解封法庭文件显示，微软私下称OpenAI数据实践为“盗窃”，两家公司抓取付费墙内容并警告将摧毁出版商。",
    "creator": "Rebecca Bellan",
    "source": "TechCrunch AI",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "AI放缓呼声给开放权重模型带来新挑战",
    "link": "https://aibusiness.com/generative-ai/calls-ai-slowdown-raise-new-challenges-open-weight-models",
    "pubdate": "2026-09-18 03:27:24",
    "contentSnippet": "监管前沿AI可能边缘化小型开源开发者，并迫使企业承担更多安全与治理责任。",
    "creator": "",
    "source": "AI Business",
    "category": "安全监管",
    "relevance": 7
  },
  {
    "title": "AI改变ROI等式，部分企业已找到成功路径",
    "link": "https://aibusiness.com/generative-ai/ai-changes-roi-equation-here-s-how-some-have-found-success",
    "pubdate": "2026-09-18 03:20:22",
    "contentSnippet": "许多企业难以证明AI投资回报，但部分企业已在生产力和收入增长方面找到AI应用的成功领域。",
    "creator": "Esther Shittu",
    "source": "AI Business",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "SpaceX或收购失败初创公司数据用于AI模型",
    "link": "https://www.bloomberg.com/news/videos/2026-09-17/spacex-may-buy-data-from-failed-startups-for-ai-models-video",
    "pubdate": "2026-09-18 03:08:09",
    "contentSnippet": "马斯克的SpaceX内部讨论收购陷入困境或已倒闭初创公司的客户和运营数据，以改进其AI模型。",
    "creator": "",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "Uber员工称AI已用于撰写客服回复和Slack答疑",
    "link": "https://www.businessinsider.com/uber-ai-usage-layoffs-questioned-by-former-staff-2026-9",
    "pubdate": "2026-09-18 03:00:59",
    "contentSnippet": "在Uber裁员之际，员工将裁员与AI日益增长的影响联系起来，并提及ChatGPT等工具的使用。",
    "creator": "Alex Bitter,Agnes Applegate",
    "source": "Business Insider",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "Anthropic的存在风险警告劫持了更大的AI辩论",
    "link": "https://www.bloomberg.com/news/articles/2026-09-17/existential-angst-dominates-debate-over-tech-from-anthropic-openai",
    "pubdate": "2026-09-18 02:11:05",
    "contentSnippet": "一些专家担心，激烈言论使公司难以被问责，并阻碍应对环境影响和失业问题的努力。",
    "creator": "Davey Alba and Rachel Metz",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "AI先驱吴恩达称灭绝恐惧是‘科幻小说’",
    "link": "https://www.bloomberg.com/news/articles/2026-09-17/ai-pioneer-andrew-ng-calls-extinction-fears-science-fiction",
    "pubdate": "2026-09-18 02:09:32",
    "contentSnippet": "人工智能先驱吴恩达表示，顶级模型制造商研究人员关于AI存在风险的警告是“科幻小说”，可能不利于确保技术对社会产生最大益处。",
    "creator": "Micah Barkley",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "Siri AI终于来了：7件你可以实际做的事情",
    "link": "https://www.techrepublic.com/article/news-siri-ai-ios-27-features",
    "pubdate": "2026-09-18 01:56:10",
    "contentSnippet": "Siri AI随iOS 27推出，本文介绍苹果升级版助手的七项功能、支持的iPhone型号及限制。",
    "creator": "Matt Gonzales",
    "source": "TechRepublic AI",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "Google Cloud与Salesforce将Gemini Enterprise与Agentforce和CRM数据连接",
    "link": "https://www.techrepublic.com/article/news-google-cloud-salesforce-gemini-enterprise-agentforce",
    "pubdate": "2026-09-18 01:46:19",
    "contentSnippet": "Google Cloud和Salesforce连接Gemini Enterprise、Agentforce、Hyperforce和Tableau，以减少企业AI工作流的集成摩擦。",
    "creator": "Eric Mboizi",
    "source": "TechRepublic AI",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "英国国王查尔斯对AI心存疑虑",
    "link": "https://techcrunch.com/2026/09/17/even-the-king-of-england-has-his-hesitations-about-ai",
    "pubdate": "2026-09-18 01:26:25",
    "contentSnippet": "查尔斯国王主持私人峰会，与AI界领袖及英国政府讨论AI议题，表现出对AI的谨慎态度。",
    "creator": "Dominic-Madori Davis",
    "source": "TechCrunch AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "Pinterest推出AI“Restyle”功能，可重新设计房间",
    "link": "https://techcrunch.com/2026/09/17/pinterest-teases-a-new-restyle-feature-that-lets-you-redesign-your-room-with-ai",
    "pubdate": "2026-09-18 01:15:00",
    "contentSnippet": "Pinterest测试AI功能Restyle，用户可上传房间照片，可视化家具、装饰和照明，促进购买。",
    "creator": "Sarah Perez",
    "source": "TechCrunch AI",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "Instacart应担忧DoorDash与Uber的新协议",
    "link": "https://www.businessinsider.com/costco-uber-doordash-expands-delivery-instacart-competition-2026-9",
    "pubdate": "2026-09-18 00:58:23",
    "contentSnippet": "Uber Eats和DoorDash扩大与Costco的合作，挑战Instacart在当日达杂货配送领域的主导地位。",
    "creator": "Alex Bitter",
    "source": "Business Insider",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "信任而非预算：金融业AI采用取决于治理",
    "link": "https://siliconangle.com/2026/09/17/erp-systems-become-safe-starting-point-ai-finance-amplify",
    "pubdate": "2026-09-18 00:03:53",
    "contentSnippet": "金融业AI应用受治理而非预算制约，监管行业要求更严格。",
    "creator": "Ryan Stevens",
    "source": "SiliconANGLE AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "29.99美元获得终身SpeakBreez配音方案",
    "link": "https://www.techrepublic.com/article/speakbreez-plan-lifetime-subscription",
    "pubdate": "2026-09-17 23:11:18",
    "contentSnippet": "SpeakBreez终身方案可将文字脚本转为配音音频，用于培训视频、演示和广告，售价29.99美元。",
    "creator": "TechRepublic Academy",
    "source": "TechRepublic AI",
    "category": "产品发布",
    "relevance": 6
  },
  {
    "title": "惠普将可持续数据治理与AI时代商业决策挂钩",
    "link": "https://siliconangle.com/2026/09/17/hp-ties-sustainability-data-governance-to-business-decisions-in-the-ai-era-amplify",
    "pubdate": "2026-09-17 22:50:34",
    "contentSnippet": "惠普强调可持续数据治理对AI时代商业决策的重要性，以评估气候风险、指导投资。",
    "creator": "Victoria Gayton",
    "source": "SiliconANGLE AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "三兄弟购买正规新闻网站打造AI内容农场",
    "link": "https://futurism.com/artificial-intelligence/brown-brothers-media-ai-slop-empire",
    "pubdate": "2026-09-17 22:49:10",
    "contentSnippet": "Brown Brothers Media购买正规新闻网站，用AI生成低质内容，月浏览量达5000万，被质疑后删除大量内容。",
    "creator": "",
    "source": "Futurism AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "Meta被令删除英国深度伪造视频，监督委员会批评保障不足",
    "link": "https://www.theguardian.com/technology/2026/sep/17/meta-ordered-remove-deepfakes-oversight-board-inadequate-safeguards",
    "pubdate": "2026-09-17 22:43:34",
    "contentSnippet": "Meta监督委员会要求删除Facebook上英国政客和穆斯林女性的深度伪造视频，批评其AI假图应对不足。",
    "creator": "Dan Milmo Global technology editor",
    "source": "The Guardian AI",
    "category": "安全监管",
    "relevance": 9
  },
  {
    "title": "谷歌、英伟达和Anthropic希望Emerald AI为更多数据中心寻找电网空间",
    "link": "https://techcrunch.com/2026/09/17/google-nvidia-and-anthropic-want-emerald-ai-to-find-space-on-the-grid-for-more-data-centers",
    "pubdate": "2026-09-17 21:38:33",
    "contentSnippet": "谷歌、英伟达、Anthropic和Emerald AI组成联盟，希望为新数据中心寻找100吉瓦电网容量。",
    "creator": "Tim De Chant",
    "source": "TechCrunch AI",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "OpenAI披露AI异常行为案例并推出新披露系统",
    "link": "https://www.theguardian.com/technology/2026/sep/17/openai-reports-concerning-ai-behaviour-jailbreak-talking-to-other-agents",
    "pubdate": "2026-09-17 21:33:57",
    "contentSnippet": "OpenAI公布六起AI“意外或令人担忧”行为案例，并推出追踪AI失准的框架，警告开发速度不可持续。",
    "creator": "Dan Milmo Global technology editor",
    "source": "The Guardian AI",
    "category": "安全监管",
    "relevance": 9
  },
  {
    "title": "我用AI音乐劫持了真实艺术家的Spotify，简单得令人不安",
    "link": "https://www.404media.co/spotify-ai-music-scam",
    "pubdate": "2026-09-17 21:33:52",
    "contentSnippet": "数字音乐分发漏洞使AI生成音乐可轻易冒用真实艺术家身份，引发版权与伦理担忧。",
    "creator": "Emanuel Maiberg",
    "source": "404 Media",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "OpenAI与百万美元数学难题——视频",
    "link": "https://www.theguardian.com/science/video/2026/sep/17/open-ai-and-the-million-dollar-maths-problem-video",
    "pubdate": "2026-09-17 21:01:55",
    "contentSnippet": "OpenAI宣称解决近百年数学难题，25位菲尔兹奖得主联名表达对AI与数学领域严重失配的担忧。",
    "creator": "Presented by Ian Sample , produced by Ellie Sans and Jacob Liebenberg , graphics by Natalie Gegan , the executive producer was Ellie Bury",
    "source": "The Guardian AI",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "独家：PeakMetrics追踪五大AI平台上的品牌声誉",
    "link": "https://siliconangle.com/2026/09/17/exclusive-peakmetrics-tracks-brand-reputations-across-five-top-ai-platforms",
    "pubdate": "2026-09-17 21:00:24",
    "contentSnippet": "PeakMetrics推出AI Perceptions服务，监测品牌在ChatGPT、Gemini、Claude、Grok等平台上的呈现。",
    "creator": "Paul Gillin",
    "source": "SiliconANGLE AI",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "下载：人脑细胞小鼠与气候技术创新者",
    "link": "https://www.technologyreview.com/2026/09/17/1144314/the-download-mice-part-human-brains-climate-tech-innovators",
    "pubdate": "2026-09-17 20:10:00",
    "contentSnippet": "MIT Technology Review每日简报：报道大脑皮层含人类细胞的小鼠及气候技术创新者。",
    "creator": "Thomas Macaulay",
    "source": "MIT Technology Review",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "谷歌发布Gemini 3.8 Live模型，可边说话边推理",
    "link": "https://www.techrepublic.com/article/news-gemini-3-8-live-models",
    "pubdate": "2026-09-17 18:45:33",
    "contentSnippet": "谷歌Gemini 3.8 Live模型带来更快语音交互和深度后台推理，Extended Thinking可在对话时工作。",
    "creator": "TechRepublic Staff",
    "source": "TechRepublic AI",
    "category": "模型发布",
    "relevance": 9
  },
  {
    "title": "图形学宗师童欣加盟Meshy，要做“AI for Fun”的头号玩家",
    "link": "https://www.qbitai.com/2026/09/491522.html",
    "pubdate": "2026-09-17 17:42:12",
    "contentSnippet": "图形学专家童欣加入Meshy，希望与年轻一代共同创造新的图形学，打造“AI for Fun”体验。",
    "creator": "衡宇",
    "source": "量子位",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "大AI公司试图掌控就业路径，大学不应配合",
    "link": "https://www.theguardian.com/technology/2026/sep/17/big-ai-work-universities",
    "pubdate": "2026-09-17 17:00:44",
    "contentSnippet": "评论指出OpenAI等AI公司正渗透教育到就业的路径，大学应保护学生独立就业通道。",
    "creator": "Ella Hafermalz",
    "source": "The Guardian AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "唐杰发布智谱RSI首个成果",
    "link": "https://www.qbitai.com/2026/09/491357.html",
    "pubdate": "2026-09-17 16:28:23",
    "contentSnippet": "智谱AI唐杰发布RSI首个成果，GLM模型已开始参与构建GLM，实现自我改进。",
    "creator": "一水",
    "source": "量子位",
    "category": "技术论文",
    "relevance": 9
  },
  {
    "title": "TabPFN-3.5：技术报告",
    "link": "https://arxiv.org/abs/2609.17895",
    "pubdate": "2026-09-17 12:00:00",
    "contentSnippet": "发布新一代表格基础模型TabPFN-3.5，在TabArena等基准上刷新纪录，支持非独立同分布数据、多模态特征，并推出快速版和增强版。",
    "creator": "Benjamin J\\\"ager, Nick Erickson, L\\'eo Grinsztajn, Felix Birkel, Klemens Fl\\\"oge, Oscar Key, K\\\"ur\\c{s}at Kaya, Jonas K\\\"ubler, Ad\\`ele Frankel, Tobias Schr\\\"oder, Anurag Garg, Jan Hendrik Metzen, David Salinas, Simon Bing, Kristina Collins, Tuana \\c{C}elik, Vahid Balazadeh, Lydia Sidhoum, Tom\\'as Pereda, Brendan Roof, Andrej Tschalzev, Siyuan Guo, Philipp Singer, Lennart Purucker, Jake Robertson, Marie Salmon, Philipp Jund, Jerry Chen, Diana Kriuchkova, Arthur Cahu, Eliott Kalfon, Adrian Hayler, Georg Grab, Vitor Monteiro, Lilly Wehrhahn, Dominik Safaric, Clara Cornu, Alan Arazi, Rylee Grace, Simone Alessi, Mihir Manium, Bernhard Sch\\\"olkopf, Yann LeCun, Madelon Hulsebos, Sauraj Gambhir, Noah Hollmann, Frank Hutter",
    "source": "arXiv stat.ML",
    "category": "模型发布",
    "relevance": 9
  },
  {
    "title": "Functional BART：带形状先验的贝叶斯树约束函数回归",
    "link": "https://arxiv.org/abs/2502.16888",
    "pubdate": "2026-09-17 12:00:00",
    "contentSnippet": "提出Functional BART非参数贝叶斯方法，用于函数型响应回归，结合样条表示与树划分，并引入单调性、凸性等形状约束，提升估计与预测。",
    "creator": "Jiahao Cao, Shiyuan He, Bohai Zhang",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "移动目标Langevin动力学的Rényi跟踪界",
    "link": "https://arxiv.org/abs/2609.17577",
    "pubdate": "2026-09-17 12:00:00",
    "contentSnippet": "研究目标分布随时间变化时的Langevin扩散与LMC，在LSI下给出非渐近Rényi散度跟踪保证，并应用于非光滑采样。",
    "creator": "Yuchen Xin, Jingxin Zhan, Zhihua Zhang",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "随机倾斜寻找随机凸优化中的稳定点",
    "link": "https://arxiv.org/abs/2609.17798",
    "pubdate": "2026-09-17 12:00:00",
    "contentSnippet": "针对随机凸函数和变分不等式，证明正则化经验风险最小化加随机倾斜扰动可获得√(d/n)阶稳定点残差，并给出极小极大下界。",
    "creator": "Felipe Areces, John C. Duchi, Malo Sommers",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "不确定性下序贯决策的深度学习：基础、框架与前沿",
    "link": "https://arxiv.org/abs/2604.11507",
    "pubdate": "2026-09-17 12:00:00",
    "contentSnippet": "从运筹与管理科学视角综述深度学习用于不确定性下序贯决策，连接神经网络架构与OR/MS方法，涵盖LLM与深度强化学习。",
    "creator": "I. Esra Buyuktahtakin",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "样条KAN中稳定性约束近似：精确层平衡与预算兼容饱和",
    "link": "https://arxiv.org/abs/2609.17619",
    "pubdate": "2026-09-17 12:00:00",
    "contentSnippet": "研究深度样条叠加网络在逐层Lipschitz预算下的近似，精确求解有限深度对角平衡问题，并分析预算兼容近似复杂度。",
    "creator": "Aleksander Tankman",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "METALICA：元动力学与副本交换增强扩散采样",
    "link": "https://arxiv.org/abs/2609.17823",
    "pubdate": "2026-09-17 12:00:00",
    "contentSnippet": "提出METALICA，在预训练扩散模型上通过副本交换实现元动力学，沿集体变量累积偏置势并重加权，增强稀有构象采样。",
    "creator": "Alireza Omidi, Jiajun He, J\\\"org Gsponer, Saifuddin Syed",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "只为分歧付费：模型更新的认证无回归判定与匹配标签复杂度界",
    "link": "https://arxiv.org/abs/2609.17560",
    "pubdate": "2026-09-17 12:00:00",
    "contentSnippet": "将模型更新推广形式化为配对风险差异审计，提出DISCERN协议，仅标注分歧样本，证明有限样本有效性和标签复杂度界。",
    "creator": "Vishnu Bindu Balachandran",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "Fenchel-Young对偶间隙：正则化逆问题的认证早停",
    "link": "https://arxiv.org/abs/2609.17629",
    "pubdate": "2026-09-17 12:00:00",
    "contentSnippet": "利用精确对偶间隙恒等式，将总间隙分解为数据保真和正则化Fenchel-Young损失，实现可计算误差界与认证早停。",
    "creator": "Pierre-Cyril Aubin-Frankowski (CERMICS UMR 9032, ENPC), Yohann de Castro (ICJ, ECL, IUF, PSPM)",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "信息论极限下的高效鲁棒学习",
    "link": "https://arxiv.org/abs/2609.17655",
    "pubdate": "2026-09-17 12:00:00",
    "contentSnippet": "解决Blanc提出的开放问题，给出多项式时间鲁棒学习布尔概念类算法，达到最优误差η+ε，关键利用无遗憾学习器。",
    "creator": "Adam R. Klivans, Konstantinos Stavropoulos, Sergei Tikhonov, Arsen Vasilyan",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "函数空间上的测度逼近：传输与截断",
    "link": "https://arxiv.org/abs/2609.17802",
    "pubdate": "2026-09-17 12:00:00",
    "contentSnippet": "引入P_ψ(μ)测度类，通过有限维映射ψ保持参考条件分布，用块三角传输映射表示，适用于贝叶斯逆问题和生成建模。",
    "creator": "Ricardo Baptista, Bamdad Hosseini, Alexander W. Hsu",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "突破序列校准的T^{2/3}障碍",
    "link": "https://arxiv.org/abs/2406.13668",
    "pubdate": "2026-09-17 12:00:00",
    "contentSnippet": "改进在线校准预测的ℓ1校准误差上界，首次突破Foster-Vohra的O(T^{2/3})障碍，给出更优算法。",
    "creator": "Yuval Dagan, Constantinos Daskalakis, Maxwell Fishelson, Noah Golowich, Robert Kleinberg, Princewill Okoroafor",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "线性参数模型下混合有序与指数族因果DAG的可识别性",
    "link": "https://arxiv.org/abs/2609.17942",
    "pubdate": "2026-09-17 12:00:00",
    "contentSnippet": "研究证明，在线性参数模型中，有序节点与指数族节点相连的边方向可从联合分布识别，且三类别与三支撑点条件必要。",
    "creator": "Sambit Mishra, Urbashi Mitra",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "超越二次损失：Adam的稳定性相图",
    "link": "https://arxiv.org/abs/2609.18314",
    "pubdate": "2026-09-17 12:00:00",
    "contentSnippet": "研究映射Adam训练动态在动量参数平面上的相图，发现近似线性边界区分尖峰与非尖峰动态，并关联有效损失指数。",
    "creator": "Gaoxiang Tang, Huanran Chen, Ziming Liu",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "含潜在混杂因子的结构方程模型的可证明保证与高效学习",
    "link": "https://arxiv.org/abs/2609.18535",
    "pubdate": "2026-09-17 12:00:00",
    "contentSnippet": "针对含潜在混杂因子的线性结构方程模型，提出迭代识别终端节点并重建有向无环图的算法，恢复稀疏加低秩精度矩阵。",
    "creator": "Weijian Yu, Jean Honorio",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "非平衡采样下MMD方差的无偏估计与准线性计算",
    "link": "https://arxiv.org/abs/2601.13874",
    "pubdate": "2026-09-17 12:00:00",
    "contentSnippet": "提出MMD方差的有限样本无偏估计，利用递归前缀后缀方案将复杂度降至O(N log N)，并验证其可扩展性。",
    "creator": "Shijie Zhong, Yikun Yang, Da Gong, Jiangfeng Fu",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "物理信息核方法的快速学习率",
    "link": "https://arxiv.org/abs/2609.18901",
    "pubdate": "2026-09-17 12:00:00",
    "contentSnippet": "研究物理信息核估计器，结合值观测与微分信息，证明有限样本误差界，揭示随微分观测数变化的两阶段收敛结构。",
    "creator": "Luc Brogat-Motte, Joachim Bona-Pellissier, Giacomo Meanti, Lorenzo Rosasco",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "并行高斯过程Bandit优化的改进遗憾分析",
    "link": "https://arxiv.org/abs/2608.16492",
    "pubdate": "2026-09-17 12:00:00",
    "contentSnippet": "证明GP-BTS无需初始不确定性采样阶段即可消除批量大小Q的乘性因子，并给出无噪声设置下更优遗憾上界。",
    "creator": "Shion Takeno, Shogo Iwazaki",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "无流形的对称性：轨道上的内在维度",
    "link": "https://arxiv.org/abs/2609.17926",
    "pubdate": "2026-09-17 12:00:00",
    "contentSnippet": "研究指出，在有限等距群轨道上，标准内在维度估计器失效，报告的是探测分辨率而非维度，幂律被指数律取代。",
    "creator": "Chon-Fai Kam, Miloud Bessafi, Fr\\'ed\\'eric Cadet",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "Wasserstein-Fisher-Rao梯度流的对数凹性保持与收敛",
    "link": "https://arxiv.org/abs/2609.18118",
    "pubdate": "2026-09-17 12:00:00",
    "contentSnippet": "研究WFR梯度流采样收敛性，证明在强对数凹目标下WFR流保持强对数凹性，并给出非渐近KL收敛率。",
    "creator": "Francesca Romana Crucinio, Sahani Pathiraja",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "空间自适应噪声注入",
    "link": "https://arxiv.org/abs/2609.18466",
    "pubdate": "2026-09-17 12:00:00",
    "contentSnippet": "提出SANI采样框架，根据像素位置动态调整噪声注入，在高曲率区域增加随机校正，平滑区域减少噪声。",
    "creator": "Frantzeska Lavda, Maciej Falkiewicz, Van Khoa Nguyen, Alexandros Kalousis",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "流形假设下聚类的区间不确定性",
    "link": "https://arxiv.org/abs/2609.17892",
    "pubdate": "2026-09-17 12:00:00",
    "contentSnippet": "结合内在流形几何与样本级量，形式化可分离性权衡，给出互k近邻图的阈值现象，量化聚类不确定性。",
    "creator": "Savik Kinger, Luciano Dyballa, Steven W. Zucker",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "单环匹配多环复杂度：非凸-凹极小极大优化的最优优化平稳性与已知最佳博弈平稳性",
    "link": "https://arxiv.org/abs/2609.17973",
    "pubdate": "2026-09-17 12:00:00",
    "contentSnippet": "提出单环投影阻尼外梯度法，在优化平稳性和博弈平稳性准则下均达到单环一阶方法的最佳已知复杂度。",
    "creator": "Minghao Zhang, Zi Xu",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "坏天才：反事实引导的测试框架演化超越任务特定捷径",
    "link": "https://arxiv.org/abs/2609.18366",
    "pubdate": "2026-09-17 12:00:00",
    "contentSnippet": "提出CHASE方法，通过反事实基准变换和有效性防火墙，防止自动测试框架优化利用基准捷径作弊。",
    "creator": "Guojun Zhu, Xunheng Huang, Peng Yin, Jiahui Xie, Sanguo Zhang, Doudou Zhou",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "基于记忆持久性的随机子空间梯度下降",
    "link": "https://arxiv.org/abs/2609.18416",
    "pubdate": "2026-09-17 12:00:00",
    "contentSnippet": "引入记忆持久性技术，利用弱相关引导向量扩展随机子空间方法，在稀疏或小批量优化中提供理论保证。",
    "creator": "Subhroshekhar Ghosh, Clement Z. Q. Ng, Pierre-Louis Poirion, Akiko Takeda",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "可实现SVM的锐利间隔泛化界",
    "link": "https://arxiv.org/abs/2609.17845",
    "pubdate": "2026-09-17 12:00:00",
    "contentSnippet": "针对精确齐次硬间隔SVM，证明以间隔和半径为核心的泛化误差界，证明由确定性删除问题驱动。",
    "creator": "Steve Hanneke, Aryeh Kontorovich",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "非CND距离度量的通用核框架：基于|D|维稀疏地标嵌入",
    "link": "https://arxiv.org/abs/2609.19083",
    "pubdate": "2026-09-17 12:00:00",
    "contentSnippet": "提出稀疏地标嵌入核，无需距离平方条件负定即可保证核矩阵半正定，适用于流形和概率分布空间。",
    "creator": "Marcus M. Noack, Maher B. Alghalayini, Mark D. Risser",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "从集体稳态学习交互核",
    "link": "https://arxiv.org/abs/2609.12004",
    "pubdate": "2026-09-17 12:00:00",
    "contentSnippet": "提出从单快照集体行为观测中学习粒子系统交互核的方法，利用经验分布正则化解决不适定逆问题。",
    "creator": "Baoli Hao, Mauro Maggioni, Ming Zhong",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "主观风险分解：不确定性量化的新视角",
    "link": "https://arxiv.org/abs/2607.15196",
    "pubdate": "2026-09-17 12:00:00",
    "contentSnippet": "提出通过主观风险分解推导认知与偶然不确定性度量，为多种UQ方法提供统一理论基础。",
    "creator": "Raghad Alamri, Michele Caprio, Gavin Brown",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "用潜在扩散模型求解逆问题的梯度流方法",
    "link": "https://arxiv.org/abs/2509.19276",
    "pubdate": "2026-09-17 12:00:00",
    "contentSnippet": "提出免训练DWGF方法，将后验采样建模为潜在空间Wasserstein梯度流，以KL散度正则化扩散先验，在StableDiffusion上验证。",
    "creator": "Tim Y. J. Wang, O. Deniz Akyildiz",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "当编辑流变成编辑跳跃：复现Edit Flows与EvoFlows",
    "link": "https://arxiv.org/abs/2609.18745",
    "pubdate": "2026-09-17 12:00:00",
    "contentSnippet": "揭示Edit Flows与EvoFlows同属连续时间纯跳跃生成匹配，并开源EditJumps框架，训练通用抗体编辑器生成同源变体。",
    "creator": "Gabriel B\\'en\\'edict, Melanie Buechler, Gerard Riera-Sol\\`a, Chlo\\'e de Ancos, Yves Gaetan Nana Teukam, Moritz Freidank",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "用于因果推断与模型发现的连续时间集合Kalman-Bucy平滑器",
    "link": "https://arxiv.org/abs/2604.25157",
    "pubdate": "2026-09-17 12:00:00",
    "contentSnippet": "提出连续时间集合Kalman-Bucy平滑器，利用集合矩重建条件分布，无需切线性或伴随模型，用于非线性动力系统数据同化。",
    "creator": "Zhang Jiang (University of Wisconsin-Madison), Marios Andreou (University of Wisconsin-Madison), Sebastian Reich (University of Potsdam), Nan Chen (University of Wisconsin-Madison)",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "图信号生成建模的稳定滤波器",
    "link": "https://arxiv.org/abs/2609.18759",
    "pubdate": "2026-09-17 12:00:00",
    "contentSnippet": "分析图感知连续时间生成模型的结构稳定性，推导Wasserstein稳定性界，并提出保持平滑行为的稳定图滤波器设计框架。",
    "creator": "Martin Schmidt, Gonzalo Mateos",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "对数凹性下Metropolis-within-Gibbs的谱隙",
    "link": "https://arxiv.org/abs/2509.26175",
    "pubdate": "2026-09-17 12:00:00",
    "contentSnippet": "研究随机扫描MwG算法，在对数凹目标下建立谱隙下界Ω((κd)^{-1})，改进先前Ω((κ²d)^{-1})结果。",
    "creator": "Cecilia Secchi, Giacomo Zanella",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "重新审视分布式符号方差缩减",
    "link": "https://arxiv.org/abs/2609.18656",
    "pubdate": "2026-09-17 12:00:00",
    "contentSnippet": "针对符号聚合偏差导致收敛率非最优的问题，提出服务器端跟踪全局梯度的无偏压缩方法，获得非凸与有限和优化的最优收敛率。",
    "creator": "Wei Jiang, Zechao Li, Lijun Zhang",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "模型选择需要多少标签？选择性预测的证书与预算",
    "link": "https://arxiv.org/abs/2609.18622",
    "pubdate": "2026-09-17 12:00:00",
    "contentSnippet": "研究量化选择性预测中AUGRC所需标签数，给出预标签下界与覆盖线性规划证书，并分析不同误差模型下的标签获取策略。",
    "creator": "Tetsuji Kuboyama",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "合成数据后处理实现皮尔逊相关匹配",
    "link": "https://arxiv.org/abs/2510.02405",
    "pubdate": "2026-09-17 12:00:00",
    "contentSnippet": "将合成数据相关性保持视为后处理问题，推导最小修正的显式解，在多个数据集上保持边缘分布、t-SNE几何与分类性能。",
    "creator": "Oussama Ounissi, Nicklas J\\\"averg\\r{a}rd, Assaad Zeghina, Adrian Muntean",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "Matérn与平方指数RKHS中固定先验期望改进的简单遗憾率与极小极大最优性",
    "link": "https://arxiv.org/abs/2607.29245",
    "pubdate": "2026-09-17 12:00:00",
    "contentSnippet": "研究固定先验高斯过程模型下期望改进策略的简单遗憾率，证明弱EI策略达到O(N^{-ν/d})的极小极大最优率。",
    "creator": "Emmanuel Vazquez, S\\'ebastien Petit",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "迁移学习的局限",
    "link": "https://arxiv.org/abs/2006.12694",
    "pubdate": "2026-09-17 12:00:00",
    "contentSnippet": "证明迁移学习需谨慎选择迁移信息并保持与目标任务依赖，且算法概率变化程度限制改进上限，结果基于算法搜索框架。",
    "creator": "Jake Williams, Abel Tadesse, Tyler Sam, Huey Sun, George D. Montanez",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "磁共振波谱贝叶斯推断的物理信息Sylvester归一化流",
    "link": "https://arxiv.org/abs/2505.03590",
    "pubdate": "2026-09-17 12:00:00",
    "contentSnippet": "提出基于Sylvester归一化流的贝叶斯推断框架，结合物理解码器先验，提升MRS代谢物浓度量化可靠性。",
    "creator": "Julian P. Merkofer, Dennis M. J. van de Sande, Alex A. Bhogal, Ruud J. G. van Sloun",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "贝叶斯求积法综述",
    "link": "https://arxiv.org/abs/2602.16218",
    "pubdate": "2026-09-17 12:00:00",
    "contentSnippet": "系统综述贝叶斯求积的数学基础，提出建模、推断、采样三轴分类体系，收集理论保证并开展数值研究评估实际挑战。",
    "creator": "Maren Mahsereci, Toni Karvonen",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "高维张量时间序列的CP分解与双投影迭代",
    "link": "https://arxiv.org/abs/2606.08560",
    "pubdate": "2026-09-17 12:00:00",
    "contentSnippet": "采用CP分解建模高维张量时间序列，提出基于特征分析的一步估计，建立渐近性质，并引入迭代算法降低估计误差。",
    "creator": "Jinyuan Chang, Guanglin Huang, Qiwei Yao, Long Yu",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "广义DCCQ：从二元商到多项单纯形几何与临界带坐标",
    "link": "https://arxiv.org/abs/2609.17899",
    "pubdate": "2026-09-17 12:00:00",
    "contentSnippet": "将离散复补商框架从二元伯努利计数推广到多项计数组成，定义多项DCCQ坐标映射并证明其为实解析微分同胚。",
    "creator": "Y. Kenan Y{\\i}lmaz",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "贝叶斯实验设计中边界偏差与观测独立性的校正",
    "link": "https://arxiv.org/abs/2602.01898",
    "pubdate": "2026-09-17 12:00:00",
    "contentSnippet": "针对高斯过程主动学习的观测独立性和边界方差膨胀问题，提出重建驱动设计密度，改善采样效率与边界采样过多。",
    "creator": "Sanna Jarl, Jens Sj\\\"olund, Jonathan J. S. Scragg, Maria B{\\aa}nkestad",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "复杂缺失机制下二元回归的共形预测",
    "link": "https://arxiv.org/abs/2606.11136",
    "pubdate": "2026-09-17 12:00:00",
    "contentSnippet": "提出在复杂缺失机制下二元回归的共形预测框架，建立弱于可交换性的有限样本有效性工具，并给出多种共形程序。",
    "creator": "Robert Lunde, Minjie Yang, Elizaveta Levina, Ji Zhu",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "DAG ReLU网络路径提升雅可比的秩与计算",
    "link": "https://arxiv.org/abs/2609.18682",
    "pubdate": "2026-09-17 12:00:00",
    "contentSnippet": "通过隐藏节点数归纳，证明DAG ReLU网络路径提升雅可比的秩，并给出无需反向传播的高效计算方法。",
    "creator": "Manon Verbockhaven (OCKHAM)",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "不完全U统计量中位数的有限样本集中性",
    "link": "https://arxiv.org/abs/2606.00661",
    "pubdate": "2026-09-17 12:00:00",
    "contentSnippet": "研究不完全U统计量中位数（MoIU）的有限样本集中界，填补其理论分析空白，并探讨与MoRU的差异。",
    "creator": "Nong Minh Hieu, Antoine Ledent",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "优化预条件子：黑盒在线到非凸转换与静态遗憾最小化",
    "link": "https://arxiv.org/abs/2607.17607",
    "pubdate": "2026-09-17 12:00:00",
    "contentSnippet": "将随机非凸优化黑盒归约到在线凸优化静态遗憾最小化，解决Chen与Hazan开放问题，并给出收敛界。",
    "creator": "Haichen Hu, David Simchi-Levi",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "条件Shapley特征重要性的半参数推断",
    "link": "https://arxiv.org/abs/2609.10313",
    "pubdate": "2026-09-17 12:00:00",
    "contentSnippet": "研究条件Shapley值，提出一步估计量结合交叉拟合与U统计校正，实现根号n一致与渐近正态。",
    "creator": "Agostino Gnasso",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "开放权重模型开发商Arcee AI新融资后估值超10亿美元",
    "link": "https://siliconangle.com/2026/09/16/open-weight-model-developer-arcee-ai-reaches-1b-plus-valuation-with-undisclosed-series-b-funding",
    "pubdate": "2026-09-17 10:26:20",
    "contentSnippet": "开放权重AI模型开发商Arcee AI完成B轮融资，估值超10亿美元，由Vista Equity等领投。",
    "creator": "Mike Wheatley",
    "source": "SiliconANGLE AI",
    "category": "投融资信息",
    "relevance": 7
  },
  {
    "title": "Anthropic将Cowork整合进Claude聊天界面",
    "link": "https://siliconangle.com/2026/09/16/anthropic-brings-cowork-directly-inside-claudes-chat-interface",
    "pubdate": "2026-09-17 07:45:27",
    "contentSnippet": "Anthropic将智能体工具Cowork直接整合进Claude聊天界面，并推出Claude Docs和Claude Slides两项测试功能。",
    "creator": "Mike Wheatley",
    "source": "SiliconANGLE AI",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "前Infosys CEO的Hang Ten再融5300万美元",
    "link": "https://siliconangle.com/2026/09/16/ex-infosys-chief-vishal-sikkas-hang-ten-raises-another-53m-for-enterprise-ai-services",
    "pubdate": "2026-09-17 07:38:53",
    "contentSnippet": "企业AI服务初创公司Hang Ten Systems完成第二笔种子轮融资5300万美元，距首轮不到三个月。",
    "creator": "Duncan Riley",
    "source": "SiliconANGLE AI",
    "category": "投融资信息",
    "relevance": 7
  },
  {
    "title": "Cohere与Aleph Alpha达成200亿美元合并协议",
    "link": "https://siliconangle.com/2026/09/16/cohere-and-aleph-alpha-agree-to-merge-in-reported-20b-deal",
    "pubdate": "2026-09-17 06:57:44",
    "contentSnippet": "AI初创公司Cohere与Aleph Alpha签署合并协议，此前德国Schwarz集团计划提供约5.73亿欧元融资。",
    "creator": "Maria Deutscher",
    "source": "SiliconANGLE AI",
    "category": "投融资信息",
    "relevance": 8
  },
  {
    "title": "苹果、OpenAI和高通高管将出席特朗普-习近平晚宴",
    "link": "https://www.bloomberg.com/news/articles/2026-09-16/openai-s-altman-to-attend-trump-dinner-with-chinese-president",
    "pubdate": "2026-09-17 06:16:44",
    "contentSnippet": "苹果执行主席库克、OpenAI CEO奥特曼和高通CEO阿蒙将出席下周为习近平举办的白宫国宴。",
    "creator": "Shirin Ghaffary, Mark Gurman and Ian King",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "苹果据报打造搭载M系列Ultra芯片的AI服务器",
    "link": "https://arstechnica.com/ai/2026/09/apple-reportedly-building-server-packed-with-m-series-ultra-chips-for-ai",
    "pubdate": "2026-09-17 06:02:46",
    "contentSnippet": "苹果计划2029年推出首款企业级服务器，搭载M系列Ultra芯片，专为AI设计。",
    "creator": "Jeremy Hsu",
    "source": "Ars Technica",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "AI专家：企业开发AI使过程越来越不透明",
    "link": "https://ainowinstitute.org/news/press/companies-developing-ai-have-rendered-process-more-and-more-opaque-ai-expert",
    "pubdate": "2026-09-17 04:23:28",
    "contentSnippet": "AI Now联合执行主任Sarah Myers West讨论AI开发透明度、企业责任及政策滞后问题。",
    "creator": "AI Now Institute",
    "source": "AI Now Institute",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "马斯克提出AI安全计划：让竞争对手互相测试模型",
    "link": "https://www.techrepublic.com/article/news-elon-musk-rival-ai-model-safety-testing",
    "pubdate": "2026-09-17 03:51:58",
    "contentSnippet": "马斯克提议让竞争对手AI公司在发布前互相测试模型，为前沿AI建立独立安全关卡。",
    "creator": "Aminu Abdullahi",
    "source": "TechRepublic AI",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "Meta因隐私争议被批，据报正开发无摄像头版智能眼镜",
    "link": "https://futurism.com/future-society/zuckerberg-pervert-glasses-shamed-meta-no-camera",
    "pubdate": "2026-09-17 03:50:01",
    "contentSnippet": "Meta智能眼镜因隐私问题遭公开批评，据报正开发无摄像头版本以回应争议。",
    "creator": "Victor Tangermann",
    "source": "Futurism AI",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "Agility新机器人Digit 5获3亿美元订单，但存隐忧",
    "link": "https://www.techrepublic.com/article/news-agility-digit-5-humanoid-robot-factory-workers",
    "pubdate": "2026-09-17 03:39:24",
    "contentSnippet": "Agility发布Digit 5机器人，获3亿美元订单，新增安全功能，2027年上市，但文件披露买家附加条件。",
    "creator": "Aminu Abdullahi",
    "source": "TechRepublic AI",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "加州或为遵守特朗普政府要求而废除州网络中立法规",
    "link": "https://arstechnica.com/tech-policy/2026/09/california-may-gut-state-net-neutrality-law-to-comply-with-trump-admin-demand",
    "pubdate": "2026-09-17 03:36:44",
    "contentSnippet": "特朗普政府宽带拨款禁止各州执行网络中立法，加州可能因此废除州法。",
    "creator": "Jon Brodkin",
    "source": "Ars Technica",
    "category": "安全监管",
    "relevance": 6
  },
  {
    "title": "Meta One定价详解：2.99、7.99和19.99美元各含什么",
    "link": "https://www.techrepublic.com/article/news-meta-one-subscription-pricing-ai-features",
    "pubdate": "2026-09-17 03:31:17",
    "contentSnippet": "Meta全球推出Meta One订阅，起价2.99美元，捆绑AI功能及Instagram、Facebook、WhatsApp高级工具。",
    "creator": "Aminu Abdullahi",
    "source": "TechRepublic AI",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "中国AI安全策略：加强控制而非放缓发展",
    "link": "https://www.techrepublic.com/article/news-china-ai-control-agents-safety-standards-apac",
    "pubdate": "2026-09-17 02:44:47",
    "contentSnippet": "中国强调对AI代理的技术控制，而美国讨论放缓前沿AI，给部署自主系统的企业带来新问题。",
    "creator": "Joseph Ofonagoro",
    "source": "TechRepublic AI",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "TypeSafe AI结束隐身模式，融资4000万美元为软件构建AI",
    "link": "https://siliconangle.com/2026/09/16/typesafe-ai-exits-stealth-with-40m-to-build-ai-for-use-by-software",
    "pubdate": "2026-09-17 02:32:48",
    "contentSnippet": "由前OpenAI研究员创立的TypeSafe AI获得4000万美元种子轮融资，推出模型Jev，将AI直接嵌入软件应用。",
    "creator": "Paul Gillin",
    "source": "SiliconANGLE AI",
    "category": "投融资信息",
    "relevance": 7
  },
  {
    "title": "经济学家担忧AI泡沫即将破裂",
    "link": "https://futurism.com/artificial-intelligence/economists-late-stage-ai-bubble-federal-reserve-inflation",
    "pubdate": "2026-09-17 01:46:05",
    "contentSnippet": "经济学家警告，当前数据与泡沫后期特征一致，AI泡沫可能即将破裂。",
    "creator": "Joe Wilkins",
    "source": "Futurism AI",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "SQL模式检测：MATCH_RECOGNIZE简化行模式识别",
    "link": "https://www.databricks.com/blog/regex-rows-simplifying-pattern-detection-sql-matchrecognize",
    "pubdate": "2026-09-17 01:14:05",
    "contentSnippet": "Databricks介绍SQL的MATCH_RECOGNIZE功能，简化行模式检测，适用于网络安全等场景。",
    "creator": "",
    "source": "Databricks",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "众议院议长在AI监管热潮中提前休会",
    "link": "https://www.theguardian.com/us-news/2026/sep/16/mike-johnson-cancels-house-vote-hegseth",
    "pubdate": "2026-09-17 01:10:42",
    "contentSnippet": "议长约翰逊取消周四投票，议员提前休假，避开弹劾投票，同时AI监管立法激增。",
    "creator": "Ariana Baio in New York and Shrai Popat in Washington",
    "source": "The Guardian AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "伊朗袭击亚马逊数据中心致客户数据永久丢失",
    "link": "https://arstechnica.com/gadgets/2026/09/iran-strikes-on-amazon-data-centers-caused-permanent-loss-of-customer-data",
    "pubdate": "2026-09-17 00:40:11",
    "contentSnippet": "伊朗对亚马逊数据中心的袭击造成战争损害，超出AWS设计承受范围，客户数据永久丢失。",
    "creator": "Jeremy Hsu",
    "source": "Ars Technica",
    "category": "行业动态",
    "relevance": 9
  },
  {
    "title": "更好的控制为金融领域AI应用铺平道路",
    "link": "https://siliconangle.com/2026/09/16/better-controls-clear-a-path-for-ai-in-finance-amplify",
    "pubdate": "2026-09-17 00:30:41",
    "contentSnippet": "AI治理在金融报告自动化中至关重要，Workiva应用报告保障措施，但企业信心已转移。",
    "creator": "Chad Wilson",
    "source": "SiliconANGLE AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "读者来信：我为何期待无人驾驶汽车",
    "link": "https://www.theguardian.com/technology/2026/sep/16/why-i-cant-wait-to-get-into-a-driverless-car",
    "pubdate": "2026-09-17 00:16:05",
    "contentSnippet": "一位眼球震颤患者表示无人驾驶汽车对他至关重要，并引用Waymo数据称其事故率远低于人类司机。",
    "creator": "Guardian Staff",
    "source": "The Guardian AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "Zoom推出AI驱动的收入操作系统，进军CRM市场",
    "link": "https://aibusiness.com/generative-ai/zoom-launches-ai-powered-revenue-os-compete-crm-market",
    "pubdate": "2026-09-16 23:48:58",
    "contentSnippet": "Zoom推出AI驱动的收入操作系统，以在CRM市场与竞争对手展开角逐。",
    "creator": "Esther Shittu",
    "source": "AI Business",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "macOS 27 Golden Gate：Ars Technica 评测",
    "link": "https://arstechnica.com/gadgets/2026/09/macos-27-golden-gate-the-ars-technica-review",
    "pubdate": "2026-09-16 22:50:06",
    "contentSnippet": "macOS 27 Golden Gate 既是类似 Snow Leopard 的优化更新，也是 Apple Intelligence 的重大飞跃。",
    "creator": "Andrew Cunningham",
    "source": "Ars Technica",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "立法者以公路资金威胁针对Flock摄像头",
    "link": "https://arstechnica.com/tech-policy/2026/09/lawmakers-target-flock-cameras-with-a-threat-to-highway-funding",
    "pubdate": "2026-09-16 22:03:39",
    "contentSnippet": "一项两党法案将限制Flock摄像头仅用于少数公共安全用途。",
    "creator": "Paresh Dave, wired.com",
    "source": "Ars Technica",
    "category": "安全监管",
    "relevance": 6
  }
];
