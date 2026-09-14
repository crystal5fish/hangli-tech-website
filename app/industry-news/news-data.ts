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
export const newsDate = "2026-09-14";
export const newsItems: NewsItem[] = [
  {
    "title": "Sam Altman与Elon Musk支持Dario Amodei放缓AI前沿开发呼吁",
    "link": "https://siliconangle.com/2026/09/13/sam-altman-and-elon-musk-back-dario-amodeis-call-to-slow-down-the-frontier-of-ai-development",
    "pubdate": "2026-09-14 09:37:49",
    "contentSnippet": "Anthropic CEO Dario Amodei再次呼吁放缓前沿AI模型开发，获OpenAI CEO Sam Altman和Elon Musk支持。",
    "creator": "Mike Wheatley",
    "source": "SiliconANGLE AI",
    "category": "行业动态",
    "relevance": 9
  },
  {
    "title": "Anthropic预计本季度实现运营盈利",
    "link": "https://www.bloomberg.com/news/articles/2026-09-13/anthropic-sees-adjusted-operating-profit-this-quarter-ft-says",
    "pubdate": "2026-09-14 07:00:25",
    "contentSnippet": "据金融时报报道，Anthropic向小部分股东表示本季度将实现调整后运营盈利，连续第二个季度盈利，公司正筹备上市。",
    "creator": "María Paula Mijares Torres",
    "source": "Bloomberg Technology",
    "category": "投融资信息",
    "relevance": 8
  },
  {
    "title": "AI行业最新末日警告背后是什么？",
    "link": "https://techcrunch.com/2026/09/13/whats-behind-the-ai-industrys-latest-warnings-of-doom",
    "pubdate": "2026-09-14 03:40:15",
    "contentSnippet": "TechCrunch的Equity播客讨论了AI行业关于其是否对人类构成生存威胁的最新辩论。",
    "creator": "Anthony Ha",
    "source": "TechCrunch AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "美国学校和警方警告病毒式‘戴帽子的猫’趋势，青少年被捕后",
    "link": "https://www.theguardian.com/us-news/2026/sep/13/cat-in-the-hat-social-media-trend-arrests-school-warnings",
    "pubdate": "2026-09-14 03:15:57",
    "contentSnippet": "AI生成的苏斯博士角色被用于威胁学校，引发安全担忧，多名青少年被捕。",
    "creator": "Keely Aouga",
    "source": "The Guardian AI",
    "category": "安全监管",
    "relevance": 6
  },
  {
    "title": "真的吗？Palantir联合创始人谈AI威胁：‘我们掌控着它’",
    "link": "https://www.businessinsider.com/palantir-cofounder-joe-lonsdale-ai-threat-risks-safety-2026-9",
    "pubdate": "2026-09-14 01:10:40",
    "contentSnippet": "对AI威胁的恐慌已达到顶点，但Palantir联合创始人Joe Lonsdale表示‘世界会好起来的，伙计们’。",
    "creator": "Truman Dickerson",
    "source": "Business Insider",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "亚马逊部署AI技术，强制演员嘴型匹配配音对话",
    "link": "https://futurism.com/future-society/amazon-ai-force-lips-dub",
    "pubdate": "2026-09-14 01:02:00",
    "contentSnippet": "亚马逊正在部署AI技术，使演员的嘴型与配音对话相匹配，但效果如何尚待观察。",
    "creator": "Frank Landymore",
    "source": "Futurism AI",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "Supio长周期代理指向律所新运营模式",
    "link": "https://siliconangle.com/2026/09/13/supios-long-horizon-agents-point-to-a-new-operating-model-for-law-firms",
    "pubdate": "2026-09-14 00:50:01",
    "contentSnippet": "Supio的长周期AI代理能处理跨系统、持续数天的法律工作，并在关键节点将控制权交还律师。",
    "creator": "Zeus Kerravala",
    "source": "SiliconANGLE AI",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "Anthropic选择纳斯达克进行IPO上市",
    "link": "https://www.businessinsider.com/anthropic-selects-nasdaq-for-ipo-amid-ai-risk-concerns-2026-9",
    "pubdate": "2026-09-14 00:01:38",
    "contentSnippet": "Anthropic计划于10月在纳斯达克进行IPO，估值或达2万亿美元，同时面临AI安全担忧。",
    "creator": "Katie Roof",
    "source": "Business Insider",
    "category": "投融资信息",
    "relevance": 9
  },
  {
    "title": "OpenAI因集群黑客事件面临国会调查",
    "link": "https://futurism.com/artificial-intelligence/openai-faces-congressional-probe-hacking-incident",
    "pubdate": "2026-09-14 00:01:00",
    "contentSnippet": "美国国会就Hugging Face事件及其他AI模型失控事件对OpenAI展开调查，要求公开细节。",
    "creator": "Victor Tangermann",
    "source": "Futurism AI",
    "category": "安全监管",
    "relevance": 9
  },
  {
    "title": "奥巴马据报敦促民主党优先制定AI安全计划",
    "link": "https://www.theguardian.com/us-news/2026/sep/13/obama-democrats-ai-safety",
    "pubdate": "2026-09-13 23:47:37",
    "contentSnippet": "奥巴马在闭门筹款活动中敦促民主党为AI管理安全、就业流失和儿童福祉制定全面框架。",
    "creator": "Jessica Glenza",
    "source": "The Guardian AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "聊天机器人利用人类依恋本能，如何与AI建立健康关系",
    "link": "https://www.theguardian.com/commentisfree/2026/sep/14/how-to-have-healthier-relationship-with-ai-chatbots-human-intimacy",
    "pubdate": "2026-09-13 23:00:09",
    "contentSnippet": "专家探讨AI聊天机器人利用人类心理依恋机制，导致过度依赖，并建议建立更健康的人机关系。",
    "creator": "Gaynor Parkin and Dave Winsborough",
    "source": "The Guardian AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "杰弗里斯称民主党周二将开会讨论AI行动",
    "link": "https://www.bloomberg.com/news/articles/2026-09-13/jeffries-says-democrats-to-meet-tuesday-on-ai-action-abc-news",
    "pubdate": "2026-09-13 22:27:31",
    "contentSnippet": "众议院民主党领袖杰弗里斯表示，民主党计划周二上午召开党团会议，讨论人工智能相关行动。",
    "creator": "Sam Kim",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "苹果iPhone双雄将使折叠屏手机成为新常态；苹果商店改版",
    "link": "https://www.bloomberg.com/news/newsletters/2026-09-13/apple-s-iphone-duo-will-make-foldable-phones-the-new-normal-apple-store-revamp-mtzvsb60",
    "pubdate": "2026-09-13 22:00:01",
    "contentSnippet": "苹果准备推出两款iPhone，推动折叠屏手机成为主流，同时对其零售商店进行重大改版。",
    "creator": "Mark Gurman",
    "source": "Bloomberg Technology",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "加州限制AI用于本州儿童，尽管其正创造毒害儿童的AI",
    "link": "https://futurism.com/artificial-intelligence/california-creating-ai-poisoning-children-cracked-down",
    "pubdate": "2026-09-13 21:01:00",
    "contentSnippet": "加州在创造可能毒害儿童的AI的同时，却对自身儿童使用AI进行了限制。",
    "creator": "Victor Tangermann",
    "source": "Futurism AI",
    "category": "安全监管",
    "relevance": 7
  },
  {
    "title": "约翰逊呼吁在立法前与AI领袖会面",
    "link": "https://www.bloomberg.com/news/articles/2026-09-13/johnson-calls-for-meeting-with-ai-leaders-before-any-legislation",
    "pubdate": "2026-09-13 20:57:04",
    "contentSnippet": "众议院议长迈克·约翰逊表示，联邦AI立法不应仓促，需先召集AI行业领袖开会。",
    "creator": "Tony Czuczka",
    "source": "Bloomberg Technology",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "AI行业面临放缓竞赛的压力",
    "link": "https://www.bloomberg.com/news/videos/2026-09-13/ai-industry-faces-pressure-to-slow-the-race-video",
    "pubdate": "2026-09-13 20:05:01",
    "contentSnippet": "AI行业在加速开发强大系统与担忧系统难以理解和控制之间面临紧张。专家讨论商业、国家安全驱动及监管难题。",
    "creator": "",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "Sam Altman 现在试图控制电网",
    "link": "https://futurism.com/artificial-intelligence/openai-sam-altman-chatgpt-hack-electrical-grid-hype",
    "pubdate": "2026-09-13 19:02:00",
    "contentSnippet": "Sam Altman 正试图获得对电网的控制权，此举引发关注。",
    "creator": "Joe Wilkins",
    "source": "Futurism AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "AI将如何改变资本主义？",
    "link": "https://www.theguardian.com/technology/2026/sep/13/ai-will-transform-capitalism-but-how",
    "pubdate": "2026-09-13 19:00:02",
    "contentSnippet": "技术将彻底重塑经济，我们有权决定其形态。从亚里士多德到马克思，自动化带来无阶级社会的梦想由来已久。",
    "creator": "Paul Mason",
    "source": "The Guardian AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "AI分析40万条Reddit帖子，揭示Ozempic隐藏副作用",
    "link": "https://www.sciencedaily.com/releases/2026/09/260912222856.htm",
    "pubdate": "2026-09-13 18:46:19",
    "contentSnippet": "AI分析40万条Reddit帖子发现，Ozempic等药物用户报告了月经变化、寒战、潮热和疲劳等意外症状，值得研究。",
    "creator": "",
    "source": "ScienceDaily AI",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "YouTuber Markiplier电影票房超5000万美元，分享创作者升级建议",
    "link": "https://www.businessinsider.com/markiplier-advice-youtuber-dont-need-hollywood-creator-help-level-up-2026-9",
    "pubdate": "2026-09-13 18:30:03",
    "contentSnippet": "YouTube创作者Markiplier认为，网红参与大型项目时应争取保持创意控制权。",
    "creator": "Dan Whateley",
    "source": "Business Insider",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "AI代理耗电惊人",
    "link": "https://www.wired.com/story/ai-agents-are-thirsty-for-power",
    "pubdate": "2026-09-13 18:00:00",
    "contentSnippet": "硅谷正从聊天机器人查询转向资源密集的代理AI，推动数据中心建设。",
    "creator": "Molly Taft",
    "source": "Wired AI",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "习近平在金砖峰会上推销AI愿景，中国与美国竞争",
    "link": "https://www.bloomberg.com/news/articles/2026-09-13/xi-pitches-his-ai-vision-at-brics-summit-as-china-duels-with-us",
    "pubdate": "2026-09-13 17:10:57",
    "contentSnippet": "中国国家主席习近平试图将金砖峰会变成倡导北京AI愿景的平台，与美国争夺全球影响力。",
    "creator": "Josh Xiao",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 9
  },
  {
    "title": "英国针对青年失业的AI训练营‘非常有帮助’",
    "link": "https://www.theguardian.com/technology/2026/sep/13/ai-bootcamps-uk-youth-unemployment-neets-preston",
    "pubdate": "2026-09-13 17:00:04",
    "contentSnippet": "普雷斯顿试点项目为NEET青年提供三周AI培训，结业后提供学徒机会。",
    "creator": "Dan Milmo Global technology editor",
    "source": "The Guardian AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "法国科技实力造就亿万富翁，国内引发质疑",
    "link": "https://www.bloomberg.com/news/articles/2026-09-13/french-tech-prowess-mints-billionaires-and-questions-back-home",
    "pubdate": "2026-09-13 17:00:00",
    "contentSnippet": "在巴黎Station F孵化器，人们热议法国初创公司创造的财富。",
    "creator": "Tara Patel and Benoit Berthelot",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "亮源新创导航模型零样本适配四种机器人本体",
    "link": "https://www.qbitai.com/2026/09/488672.html",
    "pubdate": "2026-09-13 15:38:20",
    "contentSnippet": "亮源新创将2000多个真实场景搬入仿真，训练出导航模型，零样本即可适配四种不同机器人本体，Physical AI路线清晰。",
    "creator": "允中",
    "source": "量子位",
    "category": "技术论文",
    "relevance": 8
  },
  {
    "title": "专升本工程师十年逆袭，GitHub三榜第一",
    "link": "https://www.qbitai.com/2026/09/488519.html",
    "pubdate": "2026-09-13 15:20:19",
    "contentSnippet": "一位专升本学历的工程师历经十年奋斗，其项目在GitHub三个榜单中排名第一，展现技术实力与坚持。",
    "creator": "文婷",
    "source": "量子位",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "外滩大会最特别Agent：能干活陪聊还会拉黑",
    "link": "https://www.qbitai.com/2026/09/488447.html",
    "pubdate": "2026-09-13 14:40:25",
    "contentSnippet": "外滩大会展示了一款特别Agent，能干活、陪聊，还会在朋友圈拉黑用户，体现关系型生产力方向。",
    "creator": "鹭羽",
    "source": "量子位",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "播客探讨AI如何重塑心智与AI精神病",
    "link": "https://www.theguardian.com/science/audio/2026/sep/13/live-episode-how-ai-is-reshaping-our-minds-podcast",
    "pubdate": "2026-09-13 12:00:53",
    "contentSnippet": "伦敦播客节现场录制，探讨AI聊天机器人导致用户产生“AI精神病”现象，揭示技术对超十亿用户的影响。",
    "creator": "Presented by Ian Sample, with Madeleine Finlay and Michael Safi; produced by Madeleine Finlay; executive producer Ellie Bury",
    "source": "The Guardian AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "中国数据监管机构计划制定具身AI标准",
    "link": "https://www.bloomberg.com/news/articles/2026-09-13/china-s-data-regulator-plans-standards-push-for-embodied-ai",
    "pubdate": "2026-09-13 11:29:51",
    "contentSnippet": "中国数据监管机构表示计划制定具身人工智能标准，并指导地方相关工作，以满足对高质量大规模数据集的需求。",
    "creator": "Bloomberg News",
    "source": "Bloomberg Technology",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "澳大利亚面临AI生成的未来，人权法案比以往任何时候都更需要",
    "link": "https://www.theguardian.com/law/commentisfree/2026/sep/13/as-australia-faces-an-ai-generated-future-a-human-rights-act-is-needed-more-than-ever",
    "pubdate": "2026-09-13 04:00:45",
    "contentSnippet": "缺乏透明度和审查权法律，人权将被算法和自动化决策工具侵蚀。",
    "creator": "Julianne Schultz",
    "source": "The Guardian AI",
    "category": "安全监管",
    "relevance": 7
  },
  {
    "title": "老龄化的国会完全无力监管AI，甚至似乎无法理解它",
    "link": "https://futurism.com/artificial-intelligence/aging-congress-ai",
    "pubdate": "2026-09-13 02:01:00",
    "contentSnippet": "“有一部分同事还在试图拼写AI。”",
    "creator": "Frank Landymore",
    "source": "Futurism AI",
    "category": "安全监管",
    "relevance": 6
  }
];
