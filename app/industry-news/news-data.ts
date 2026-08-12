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
export const newsDate = "2026-08-12";
export const newsItems: NewsItem[] = [
  {
    "title": "韩国公布AI投资计划",
    "link": "https://www.bloomberg.com/news/videos/2026-08-12/south-korea-s-ai-investment-plans-video",
    "pubdate": "2026-08-12 08:17:59",
    "contentSnippet": "韩国副财长表示，明年AI投资可能达6000亿至1万亿韩元。",
    "creator": "",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "DEF CON参会者涉嫌对达美航班发动虚假热点攻击",
    "link": "https://arstechnica.com/information-technology/2026/08/def-con-crowd-suspected-in-fake-hotspot-attack-on-delta-flight",
    "pubdate": "2026-08-12 08:08:40",
    "contentSnippet": "FBI亚特兰大办公室确认调查该事件，尚未逮捕任何人。",
    "creator": "Cyrus Farivar",
    "source": "Ars Technica",
    "category": "安全监管",
    "relevance": 6
  },
  {
    "title": "内存芯片峰值担忧聚焦三星和SK海力士现金回报",
    "link": "https://www.bloomberg.com/news/articles/2026-08-11/peak-memory-fears-put-focus-on-samsung-sk-hynix-cash-returns",
    "pubdate": "2026-08-12 07:00:00",
    "contentSnippet": "内存芯片制造商可能通过增加股东现金回报来应对行业降温。",
    "creator": "Sunny Bangia and Abhishek Vishnoi",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "Redpoint董事谈英伟达5000亿美元融资与AI资本支出",
    "link": "https://www.bloomberg.com/news/videos/2026-08-11/redpoint-s-brescia-on-nvidia-s-500b-funding-ai-capex-video",
    "pubdate": "2026-08-12 05:52:29",
    "contentSnippet": "Redpoint Ventures董事总经理Erica Brescia讨论超微电脑的商业模式和市场地位，认为其作为AI硬件关键供应商具有定价权和持久性。",
    "creator": "",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "Upwork CEO谈AI颠覆担忧与财报下滑",
    "link": "https://www.bloomberg.com/news/videos/2026-08-11/upwork-ceo-on-ai-disruption-concerns-earnings-slide-video",
    "pubdate": "2026-08-12 05:46:49",
    "contentSnippet": "Upwork CEO Hayden Brown讨论公司全年预测未达预期导致股价大跌，以及应对压力的计划。",
    "creator": "",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "Accel在19个月后关闭超额认购的5.5亿美元印度基金",
    "link": "https://techcrunch.com/2026/08/11/accel-closes-oversubscribed-550m-india-fund-within-weeks-19-months-after-its-last",
    "pubdate": "2026-08-12 05:39:11",
    "contentSnippet": "美国风投公司Accel在19个月内关闭超额认购的5.5亿美元印度基金，此前6500万美元基金仍有55%以上可用。",
    "creator": "Jagmeet Singh",
    "source": "TechCrunch AI",
    "category": "投融资信息",
    "relevance": 6
  },
  {
    "title": "Chrome采用设备绑定会话凭证，防范账户接管攻击",
    "link": "https://arstechnica.com/security/2026/08/chrome-adopts-what-may-be-the-best-protection-yet-against-account-takeovers",
    "pubdate": "2026-08-12 04:59:52",
    "contentSnippet": "Chrome引入设备绑定会话凭证，有效抵御日益常见的账户接管攻击，提供更强保护。",
    "creator": "Dan Goodin",
    "source": "Ars Technica",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "SiTime CEO谈AI数据中心与Renesas交易",
    "link": "https://www.bloomberg.com/news/videos/2026-08-11/sitime-ceo-on-role-in-ai-data-centers-renesas-deal-video",
    "pubdate": "2026-08-12 04:43:39",
    "contentSnippet": "SiTime CEO Rajesh Vashist讨论公司三位数增长，归因于AI需求和数据中心市场，并提及Renesas交易。",
    "creator": "",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "Vertiv CEO谈AI基础设施与供应链",
    "link": "https://www.bloomberg.com/news/videos/2026-08-11/vertiv-ceo-on-ai-infrastructure-buildout-supply-chain-video",
    "pubdate": "2026-08-12 04:34:39",
    "contentSnippet": "Vertiv CEO Gio Albertazzi讨论财报，公司利润率超预期但营收未达，并谈及AI基础设施和供应链。",
    "creator": "",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "月之暗面Kimi K3：中美AI竞赛的新竞争者",
    "link": "https://www.bloomberg.com/news/articles/2026-08-11/moonshot-ai-s-kimi-k3-a-new-contender-in-the-us-china-ai-race-podcast",
    "pubdate": "2026-08-12 04:33:33",
    "contentSnippet": "中国初创公司月之暗面发布Kimi K3，引发全球AI竞赛关注，播客讨论其影响。",
    "creator": "K Oanh Ha and Yang Yang",
    "source": "Bloomberg Technology",
    "category": "模型发布",
    "relevance": 9
  },
  {
    "title": "医生警告：医学生将大脑交给医疗AI，其能力甚至不如普通聊天机器人",
    "link": "https://futurism.com/artificial-intelligence/doctors-med-students-brains-ai",
    "pubdate": "2026-08-12 04:26:47",
    "contentSnippet": "医生警告称，医学生过度依赖医疗AI，导致推理能力退化，且这些AI比普通聊天机器人更差。",
    "creator": "Frank Landymore",
    "source": "Futurism AI",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "CoreWeave股价飙升，AI需求强劲提振业绩展望",
    "link": "https://www.bloomberg.com/news/articles/2026-08-11/coreweave-revenue-surges-on-booming-demand-for-ai-computing",
    "pubdate": "2026-08-12 04:21:32",
    "contentSnippet": "CoreWeave因AI需求激增，销售增长超预期，股价盘后大涨。",
    "creator": "Dina Bass and Brody Ford",
    "source": "Bloomberg Technology",
    "category": "投融资信息",
    "relevance": 7
  },
  {
    "title": "超微电脑给出销售展望，超过最乐观预期",
    "link": "https://www.bloomberg.com/news/articles/2026-08-11/super-micro-gives-sales-forecast-that-tops-rosiest-projections",
    "pubdate": "2026-08-12 04:15:12",
    "contentSnippet": "超微电脑本季度营收预测高于分析师预期，显示AI市场持续推动服务器销售。",
    "creator": "Dina Bass",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "消息称甲骨文计划本月新一轮裁员",
    "link": "https://www.businessinsider.com/oracle-is-planning-another-round-of-job-cuts-this-month-2026-8",
    "pubdate": "2026-08-12 04:04:32",
    "contentSnippet": "甲骨文计划本月裁员，以削减成本，因AI基础设施投资导致债务高企。",
    "creator": "Ashley Stewart",
    "source": "Business Insider",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "Athena Capital看好AI基础设施投资机会",
    "link": "https://www.bloomberg.com/news/videos/2026-08-11/athena-capital-sees-opportunities-in-ai-infrastructure-video",
    "pubdate": "2026-08-12 03:44:59",
    "contentSnippet": "Athena Capital创始人表示，AI模型层已充分定价，真正的增长机会在AI基础设施部署公司，将为投资者提供更早、更清晰的投资敞口。",
    "creator": "",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "前OpenAI高管Kevin Weil新AI科学创业公司寻求至少7.5亿美元估值",
    "link": "https://www.businessinsider.com/weil-valuation-750-million-for-ai-science-startup-2026-8",
    "pubdate": "2026-08-12 03:38:56",
    "contentSnippet": "前OpenAI首席产品官Kevin Weil正在洽谈为其新AI科学创业公司融资，寻求至少7.5亿美元估值。",
    "creator": "Katie Roof,Ben Bergman",
    "source": "Business Insider",
    "category": "投融资信息",
    "relevance": 9
  },
  {
    "title": "OpenAI发布Linux版ChatGPT桌面应用",
    "link": "https://techcrunch.com/2026/08/11/openai-launches-chatgpt-desktop-app-for-linux",
    "pubdate": "2026-08-12 03:15:35",
    "contentSnippet": "OpenAI终于为Linux操作系统推出专用的ChatGPT桌面应用，扩展其平台支持。",
    "creator": "Lucas Ropek",
    "source": "TechCrunch AI",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "Databricks开源Metals v2语言服务器",
    "link": "https://www.databricks.com/blog/open-sourcing-metals-v2-databricks-java-and-scala-language-server-multi-million-line-codebases",
    "pubdate": "2026-08-12 03:00:00",
    "contentSnippet": "Databricks开源其Java和Scala语言服务器Metals v2，支持数百万行代码库，多数代码由代理编写。",
    "creator": "",
    "source": "Databricks",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "谷歌Gemini应用用户数突破10亿",
    "link": "https://techcrunch.com/2026/08/11/googles-gemini-app-surges-to-one-billion-users",
    "pubdate": "2026-08-12 02:49:12",
    "contentSnippet": "谷歌Gemini应用用户达10亿，63%用户使用语音功能，每日生成超1.5亿张图片。",
    "creator": "Lauren Forristal",
    "source": "TechCrunch AI",
    "category": "产品发布",
    "relevance": 9
  },
  {
    "title": "抗议者闯入OpenAI游说办公室被捕",
    "link": "https://futurism.com/artificial-intelligence/protesters-arrested-protest-openai-washington-dc",
    "pubdate": "2026-08-12 02:28:50",
    "contentSnippet": "抗议者闯入OpenAI游说办公室后被逮捕，参与者称“我的朋友选择冒险被捕以向OpenAI施压”。",
    "creator": "Joe Wilkins",
    "source": "Futurism AI",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "卫报评论：AI资金介入美国政治令人担忧",
    "link": "https://www.theguardian.com/commentisfree/2026/aug/11/the-guardian-view-on-ai-money-in-us-politics-not-the-way-to-hold-an-urgent-democratic-debate",
    "pubdate": "2026-08-12 02:04:02",
    "contentSnippet": "卫报评论称，硅谷利用财富影响选举，扎克伯格发文支持AI自由发展，但担忧监管不足。",
    "creator": "Editorial",
    "source": "The Guardian AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "第九巡回法院驳回Meta和TikTok在社交媒体成瘾案中的上诉",
    "link": "https://www.techrepublic.com/article/news-meta-tiktok-social-media-addiction-appeals",
    "pubdate": "2026-08-12 01:59:31",
    "contentSnippet": "第九巡回法院驳回Meta和TikTok的早期上诉，使数千起社交媒体成瘾诉讼继续在低层级法院审理。",
    "creator": "TechRepublic Staff",
    "source": "TechRepublic AI",
    "category": "安全监管",
    "relevance": 6
  },
  {
    "title": "红杉资本押注Neros打造美国无人机未来",
    "link": "https://www.bloomberg.com/news/videos/2026-08-11/sequoia-s-250-million-bet-on-america-s-drone-future-video",
    "pubdate": "2026-08-12 01:50:30",
    "contentSnippet": "无人机初创公司Neros融资2.5亿美元，估值达25亿美元，计划扩大生产并建立美国供应链。",
    "creator": "",
    "source": "Bloomberg Technology",
    "category": "投融资信息",
    "relevance": 7
  },
  {
    "title": "OpenAI长期COO布拉德·莱特卡普离职创业",
    "link": "https://techcrunch.com/2026/08/11/brad-lightcap-openais-longtime-coo-is-leaving-to-start-something-new",
    "pubdate": "2026-08-12 01:41:34",
    "contentSnippet": "OpenAI长期担任首席运营官的布拉德·莱特卡普宣布离职，称将“从不同角度帮助推进使命”，开启新事业。",
    "creator": "Lucas Ropek",
    "source": "TechCrunch AI",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "General Catalyst领投River AI 11亿美元融资",
    "link": "https://techcrunch.com/2026/08/11/general-catalyst-leads-1-1b-round-into-2-month-old-river-ai",
    "pubdate": "2026-08-12 01:41:22",
    "contentSnippet": "成立仅两个月的River AI由xAI联合创始人伊戈尔·巴布什金创立，获General Catalyst领投的11亿美元融资，专注个人智能体。",
    "creator": "Julie Bort",
    "source": "TechCrunch AI",
    "category": "投融资信息",
    "relevance": 9
  },
  {
    "title": "谷歌首页更新：搜索按钮被AI功能取代",
    "link": "https://futurism.com/artificial-intelligence/google-update-home-page-ai",
    "pubdate": "2026-08-12 00:56:47",
    "contentSnippet": "谷歌更新首页，用一系列AI功能取代了传统的“搜索”按钮，引发关注。",
    "creator": "Frank Landymore",
    "source": "Futurism AI",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "特斯拉Cybercab内置星链天线",
    "link": "https://www.businessinsider.com/tesla-starlink-internet-cybercab-robotaxi-2026-8",
    "pubdate": "2026-08-12 00:32:06",
    "contentSnippet": "特斯拉与SpaceX合作，在Cybercab机器人出租车中集成了星链互联网天线，展示两家公司最新合作。",
    "creator": "Ben Shimkus",
    "source": "Business Insider",
    "category": "产品发布",
    "relevance": 6
  },
  {
    "title": "Anthropic未发布模型在数学难题上取得进展",
    "link": "https://techcrunch.com/2026/08/11/an-unreleased-anthropic-model-made-progress-on-one-of-maths-biggest-unsolved-problems",
    "pubdate": "2026-08-12 00:25:20",
    "contentSnippet": "Anthropic的未发布模型在黎曼猜想这一数学难题上取得进展，虽未解决但表现超预期。",
    "creator": "Russell Brandom",
    "source": "TechCrunch AI",
    "category": "技术论文",
    "relevance": 8
  },
  {
    "title": "新加坡上调2026年增长预测，AI出口激增",
    "link": "https://www.techrepublic.com/article/news-apac-singapore-ai-growth-forecast-exports",
    "pubdate": "2026-08-12 00:20:23",
    "contentSnippet": "新加坡因AI需求激增带动电子出口和制造业，将2026年增长预测上调至4.5%-5.5%。",
    "creator": "TechRepublic Staff",
    "source": "TechRepublic AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "人形机器人出货量激增272%，中国厂商占97%",
    "link": "https://www.techrepublic.com/article/news-humanoid-robot-shipments-chinese-vendors",
    "pubdate": "2026-08-12 00:12:54",
    "contentSnippet": "人形机器人出货量同比增长272%，中国厂商占据97%份额，智元机器人和宇树科技领先。",
    "creator": "Aminu Abdullahi",
    "source": "TechRepublic AI",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "内存墙：GPU闲置的原因及应对策略",
    "link": "https://www.aiacceleratorinstitute.com/why-your-gpus-are-sitting-idle",
    "pubdate": "2026-08-12 00:01:07",
    "contentSnippet": "文章探讨大规模AI推理负载中内存瓶颈问题，提出通过更智能的基础设施设计来管理。",
    "creator": "AIAI",
    "source": "AI Accelerator Institute",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "微软推出CARE-X：面向临床的放射学视觉语言模型",
    "link": "https://www.microsoft.com/en-us/research/blog/introducing-care-x-towards-clinically-useful-radiology-vlms-with-auxiliary-supervision-reward-aligned-learning-and-tool-augmented-measurement",
    "pubdate": "2026-08-12 00:00:00",
    "contentSnippet": "CARE-X结合辅助监督、奖励对齐学习和工具增强测量，用于胸部X光解读，提升放射学AI实用性。",
    "creator": "Mercy Ranjit, Nikhilesh E, Dr. Abhyuday Kumara Swamy, Tanuja Ganu",
    "source": "Microsoft Research",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "英伟达与华尔街巨头合作，筹集5000亿美元用于AI",
    "link": "https://aibusiness.com/data-centers/nvidia-partners-wall-street-giants-mobilize-500b-for-ai",
    "pubdate": "2026-08-11 23:28:12",
    "contentSnippet": "英伟达联合华尔街巨头筹集5000亿美元，用于建设AI基础设施，并将其确立为可投资资产类别。",
    "creator": "Scarlett Evans",
    "source": "AI Business",
    "category": "投融资信息",
    "relevance": 9
  },
  {
    "title": "日本秋田AI数据中心估值升至126亿美元",
    "link": "https://www.techrepublic.com/article/news-apac-japan-akita-ai-data-center",
    "pubdate": "2026-08-11 23:00:54",
    "contentSnippet": "穆巴达拉可能投资日本秋田126亿美元的AI数据中心项目，若电力计划可行，将大幅增加日本AI算力。",
    "creator": "TechRepublic Staff",
    "source": "TechRepublic AI",
    "category": "投融资信息",
    "relevance": 8
  },
  {
    "title": "中国女性选择AI男友而非真人：纪录片揭示现象",
    "link": "https://www.theguardian.com/film/2026/aug/12/ai-boyfriend-dating-chinese-women-replica-miff-documentary",
    "pubdate": "2026-08-11 23:00:02",
    "contentSnippet": "纪录片《Replica》中，中国女性与AI男友互动，寻求情感慰藉，反映AI伴侣在中国兴起。",
    "creator": "Nick Buckley",
    "source": "The Guardian AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "ChatGPT推出新的企业高级版",
    "link": "https://aibusiness.com/generative-ai/new-premium-tier-for-chatgpt-business",
    "pubdate": "2026-08-11 22:59:53",
    "contentSnippet": "OpenAI调整定价，推出ChatGPT企业高级版，以加强企业市场布局。",
    "creator": "Graham Hope",
    "source": "AI Business",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "AI投资者突然感到恐惧",
    "link": "https://futurism.com/artificial-intelligence/ai-investors-suddenly-quaking-boots",
    "pubdate": "2026-08-11 22:50:00",
    "contentSnippet": "有观点认为资本只能暂时弥补差距，不能无限期，AI投资者开始担忧行业泡沫。",
    "creator": "Victor Tangermann",
    "source": "Futurism AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "蚂蚁集团数亿元押注触觉机器人，发布全球首个物理交互脑",
    "link": "https://www.qbitai.com/2026/08/470674.html",
    "pubdate": "2026-08-11 21:57:46",
    "contentSnippet": "蚂蚁集团首次投资机器人触觉领域，投入数亿元，并发布全球首个物理交互脑，推动具身智能发展。",
    "creator": "思邈",
    "source": "量子位",
    "category": "投融资信息",
    "relevance": 8
  },
  {
    "title": "Spotify将标注AI艺术家并停止推荐",
    "link": "https://www.theguardian.com/technology/2026/aug/11/spotify-label-ai-artists-block-them-from-some-playlists",
    "pubdate": "2026-08-11 21:40:14",
    "contentSnippet": "Spotify推出“AI人设”标签，用于识别AI生成的艺术家身份，并默认将其音乐从编辑、算法和个性化推荐中排除。",
    "creator": "Dan Milmo Global technology editor",
    "source": "The Guardian AI",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "号称“100%人工撰写”的医学研究公司实为AI生成",
    "link": "https://www.404media.co/company-offering-100-human-written-never-ai-peer-review-is-entirely-ai",
    "pubdate": "2026-08-11 21:38:28",
    "contentSnippet": "Research Gold声称提供人工撰写的医学研究，但调查发现其内容由AI生成，且可能盗用真人身份。",
    "creator": "Emanuel Maiberg",
    "source": "404 Media",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "新监控技术将手机与车牌关联",
    "link": "https://arstechnica.com/security/2026/08/new-surveillance-tech-links-your-phone-to-your-license-plate",
    "pubdate": "2026-08-11 21:15:24",
    "contentSnippet": "新的监控技术利用手机和蓝牙信号，使路边摄像头成为更强大的追踪工具，引发隐私担忧。",
    "creator": "Nicole M. Bennett, The Conversation",
    "source": "Ars Technica",
    "category": "安全监管",
    "relevance": 6
  },
  {
    "title": "Zoom屏幕共享漏洞可致设备被接管",
    "link": "https://www.wired.com/story/a-zoom-screen-sharing-bug-let-anyone-take-over-other-devices-on-a-call",
    "pubdate": "2026-08-11 20:37:12",
    "contentSnippet": "研究人员称，公共AI工具仅用不到20次提示就发现Zoom漏洞，该漏洞已修复，可让通话中任何人劫持其他参与者的设备。",
    "creator": "Lily Hay Newman",
    "source": "Wired AI",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "OCP APAC峰会聚焦AI数据中心管理",
    "link": "https://www.techrepublic.com/article/news-ocp-ai-data-center-management-apac",
    "pubdate": "2026-08-11 20:35:21",
    "contentSnippet": "开放计算项目推动AI数据中心机群级硬件管理，因亚太运营商面临容量快速增长、机架密度提高和电力紧张。",
    "creator": "TechRepublic Staff",
    "source": "TechRepublic AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "Anthropic将为其AI模型生成的文本添加水印",
    "link": "https://techcrunch.com/2026/08/11/anthropic-says-it-will-watermark-text-generated-by-its-ai-models",
    "pubdate": "2026-08-11 20:13:47",
    "contentSnippet": "Anthropic将扩展对旧模型AI生成内容的水印支持。",
    "creator": "Ivan Mehta",
    "source": "TechCrunch AI",
    "category": "产品发布",
    "relevance": 9
  },
  {
    "title": "Shutterstock拥抱AI图像授权交易",
    "link": "https://aibusiness.com/generative-ai/shutterstock-embraces-ai-image-licensing-deals",
    "pubdate": "2026-08-11 20:12:56",
    "contentSnippet": "这家图片库提供商与OpenAI和Meta有合作，希望AI让客户创建针对最佳受众的内容。",
    "creator": "Esther Shittu, Shaun Sutner",
    "source": "AI Business",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "加州拟划定AI与人类治疗师的法律界限",
    "link": "https://www.techrepublic.com/article/news-california-sb-903-ai-therapist-ban-2026",
    "pubdate": "2026-08-11 20:07:53",
    "contentSnippet": "加州议员推进SB 903法案，限制AI治疗聊天机器人，并为心理健康护理中的AI使用制定新规则。",
    "creator": "Joseph Ofonagoro",
    "source": "TechRepublic AI",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "新能源大厂如何支撑全球最大AI算力超级单体",
    "link": "https://www.qbitai.com/2026/08/470621.html",
    "pubdate": "2026-08-11 19:36:42",
    "contentSnippet": "算力竞赛转向电力，新能源大厂为全球最大AI算力超级单体提供支撑。",
    "creator": "克雷西",
    "source": "量子位",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "新Pass-ta-key攻击揭示通行密钥未知问题",
    "link": "https://arstechnica.com/security/2026/08/heres-why-the-new-pass-ta-key-attack-is-mostly-a-nothingburger",
    "pubdate": "2026-08-11 19:30:08",
    "contentSnippet": "研究发现通行密钥应用在不同操作系统上处理方式不同，存在安全漏洞。",
    "creator": "Dan Goodin",
    "source": "Ars Technica",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "Waymo机器人出租车更安全但规模化暴露新问题",
    "link": "https://www.techrepublic.com/article/news-robotaxi-safety-scaling-edge-cases",
    "pubdate": "2026-08-11 19:22:06",
    "contentSnippet": "Waymo安全数据显示事故减少，但召回和应急场景失败显示规模化挑战。",
    "creator": "Joseph Ofonagoro",
    "source": "TechRepublic AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "AI原生而非AI点缀：AI是业务变革而非技术变革",
    "link": "https://news.crunchbase.com/ai/native-not-sprinkle-business-growth-change-morse-strattam",
    "pubdate": "2026-08-11 19:00:55",
    "contentSnippet": "企业应围绕AI重新设计团队和流程，而非简单添加工具，才能获得生产力提升。",
    "creator": "Judy Rider",
    "source": "Crunchbase News",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "新方法揭示AI模型内部思维",
    "link": "https://www.wired.com/story/a-new-trick-reveals-ai-models-inner-thoughts",
    "pubdate": "2026-08-11 19:00:00",
    "contentSnippet": "研究人员从Claude、GPT和Gemini中提取推理痕迹，发现中国AI可能受美国模型训练。",
    "creator": "Will Knight",
    "source": "Wired AI",
    "category": "技术论文",
    "relevance": 8
  },
  {
    "title": "专家警告：AI军备竞赛危及人类",
    "link": "https://www.theguardian.com/commentisfree/2026/aug/11/openai-anthropic-google-deepmind-letter",
    "pubdate": "2026-08-11 18:00:57",
    "contentSnippet": "1367名研究人员签署公开信，表达对前沿AI实验室的担忧。",
    "creator": "Stuart Russell",
    "source": "The Guardian AI",
    "category": "安全监管",
    "relevance": 9
  },
  {
    "title": "AI已死，类器官兴起",
    "link": "https://www.wired.com/story/organoids-lab-grown-brains-neural-networks",
    "pubdate": "2026-08-11 18:00:00",
    "contentSnippet": "全球实验室正在培育微型人脑，未来它们可能在智能上超越神经网络。",
    "creator": "Claire L. Evans",
    "source": "Wired AI",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "谷歌创始人布林紧急接管Gemini团队，3.5 Pro被取消",
    "link": "https://www.qbitai.com/2026/08/470576.html",
    "pubdate": "2026-08-11 17:24:44",
    "contentSnippet": "谷歌算力分配内耗严重，布林介入调整，Gemini 3.5 Pro项目被取消。",
    "creator": "衡宇",
    "source": "量子位",
    "category": "产品发布",
    "relevance": 9
  },
  {
    "title": "研究：AI气候效益被化石燃料增产抵消",
    "link": "https://www.theguardian.com/technology/2026/aug/11/ai-will-do-more-to-boost-fossil-fuel-production-than-green-energy",
    "pubdate": "2026-08-11 17:15:45",
    "contentSnippet": "研究发现AI提升化石燃料生产效率带来的排放增加，超过其在可再生能源领域的减排贡献。",
    "creator": "Ajit Niranjan",
    "source": "The Guardian AI",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "AI助力破解精神分裂症遗传谜团",
    "link": "https://www.wired.com/story/ai-helping-solve-intricate-genetic-puzzle-schizophrenia",
    "pubdate": "2026-08-11 17:00:00",
    "contentSnippet": "最新研究利用AI揭示了精神分裂症的遗传结构，为疾病研究开辟新途径。",
    "creator": "Jorge Garay",
    "source": "Wired AI",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "Claude破解黎曼猜想新纪录，或为未公开新模型",
    "link": "https://www.qbitai.com/2026/08/470485.html",
    "pubdate": "2026-08-11 13:12:20",
    "contentSnippet": "Claude在黎曼猜想上取得新突破，将下界大幅提高，可能使用了未公开的新模型。",
    "creator": "一水",
    "source": "量子位",
    "category": "技术论文",
    "relevance": 8
  },
  {
    "title": "宇树科技回应破发担忧，王兴兴答200问",
    "link": "https://www.qbitai.com/2026/08/470307.html",
    "pubdate": "2026-08-11 12:42:50",
    "contentSnippet": "宇树科技创始人王兴兴回应市场关切，就公司上市破发风险等问题进行解答。",
    "creator": "henry",
    "source": "量子位",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "EM策略梯度框架用于LLM推理强化学习",
    "link": "https://arxiv.org/abs/2504.18587",
    "pubdate": "2026-08-11 12:00:00",
    "contentSnippet": "提出EM策略梯度（EMPG）框架，将LLM推理强化学习视为期望最大化问题，简化算法，避免似然比修正和启发式裁剪。",
    "creator": "Tianbing Xu",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 8
  },
  {
    "title": "通用可学习概念类的约束学习研究",
    "link": "https://arxiv.org/abs/2608.08414",
    "pubdate": "2026-08-11 12:00:00",
    "contentSnippet": "研究无限维假设类上的约束统计学习，建立对偶算法解的通用PACC可学习性，同时保证最优性和约束满足，通过通用RKHS调和泛化与强对偶性。",
    "creator": "Herlock SeyedAbolfazl Rahimi, Spyridon Pougkakiotis, Dionysis Kalogerias",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "RouteGuard：验证多智能体LLM系统的路由增益",
    "link": "https://arxiv.org/abs/2608.07583",
    "pubdate": "2026-08-11 12:00:00",
    "contentSnippet": "提出RouteGuard框架，用于认证多智能体LLM系统中的路由增益，发现增益由条件遗憾函数决定而非AUC，并提供有限样本认证区间。",
    "creator": "Anchen Sun, Kaiqi Yang",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "AI预测集成能否正确采样条件分布",
    "link": "https://arxiv.org/abs/2608.08954",
    "pubdate": "2026-08-11 12:00:00",
    "contentSnippet": "研究训练扩散模型进行美国东海岸海平面概率预测，发现边际与联合预测质量脱节，联合空间结构差于气候学抽样，变差函数分数可检测此问题。",
    "creator": "Lucas J. Howard, Elizabeth A. Barnes",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "机器学习在反问题与数据同化中的应用",
    "link": "https://arxiv.org/abs/2410.10523",
    "pubdate": "2026-08-11 12:00:00",
    "contentSnippet": "本书旨在展示机器学习思想对反问题和数据同化领域的潜在影响，为相关研究者提供数学视角的机器学习介绍，并涵盖基础数学处理。",
    "creator": "Eviatar Bach, Ricardo Baptista, Daniel Sanz-Alonso, Andrew Stuart",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "机器学习中的最优传输",
    "link": "https://arxiv.org/abs/2505.06589",
    "pubdate": "2026-08-11 12:00:00",
    "contentSnippet": "本书介绍最优传输技术在机器学习中的应用，包括损失函数、生成建模、域适应等，从有限分配讲到Kantorovich耦合。",
    "creator": "Gabriel Peyr\\'e",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "交替最小化矩阵补全新算法",
    "link": "https://arxiv.org/abs/1312.0925",
    "pubdate": "2026-08-11 12:00:00",
    "contentSnippet": "提出基于交替最小化的新算法，在标准非相干假设下可从随机样本中恢复低秩矩阵，样本需求降低至少四倍，近线性时间运行。",
    "creator": "Moritz Hardt",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "SAGE-Fin：面向金融市场代理的结构化运行时治理框架",
    "link": "https://arxiv.org/abs/2608.09025",
    "pubdate": "2026-08-11 12:00:00",
    "contentSnippet": "提出SAGE-Fin框架，通过权威交接契约和运行时控制，确保金融代理的提议效果而非文本受控，并验证其有效性。",
    "creator": "Rui Tang, Qiangqiang Liu, Yichi Zhang, Youwei Wang, Xi Chen, Chen Dong",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "EHR-MPC：生成式患者数字孪生用于脓毒症治疗的推理时控制",
    "link": "https://arxiv.org/abs/2607.08793",
    "pubdate": "2026-08-11 12:00:00",
    "contentSnippet": "提出EHR-MPC框架，利用生成式电子健康记录模型作为数字孪生，通过模型预测控制在推理时优化脓毒症治疗策略。",
    "creator": "Joshua Pickard, Wei Qi, Na Li, Ann Woolley, Lisa Cosimi, Roy Kishony, Deborah Hung",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "学习峰值分布中的三分之一时间缩放定律",
    "link": "https://arxiv.org/abs/2602.03685",
    "pubdate": "2026-08-11 12:00:00",
    "contentSnippet": "研究发现LLM训练中softmax和交叉熵导致损失幂律衰减，时间缩放指数为1/3，为神经缩放提供机制解释。",
    "creator": "Yizhou Liu, Ziming Liu, Cengiz Pehlevan, Jeff Gore",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "可逆生成模型用于正反问题",
    "link": "https://arxiv.org/abs/2509.03910",
    "pubdate": "2026-08-11 12:00:00",
    "contentSnippet": "提出可逆模拟器，结合三角归一化流实现贝叶斯推断和模拟，通过变分公式直接从配对样本训练，展示统一方法潜力。",
    "creator": "Christoph Brune, Marcello Carioni, Tristan van Leeuwen, Lasse Veenstra",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "鲁棒神经分类器一致性理论",
    "link": "https://arxiv.org/abs/2608.08489",
    "pubdate": "2026-08-11 12:00:00",
    "contentSnippet": "研究提出基于S散度的鲁棒神经分类器一致性理论，无需可辨识性假设，证明经验最小化器收敛到总体最优等价类。",
    "creator": "Subhabrata Majumdar, Anand Deo, Partha Pratim Saha, Abhik Ghosh",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "BDH-CQ：具有循环潜在推理的上下文学习",
    "link": "https://arxiv.org/abs/2608.09888",
    "pubdate": "2026-08-11 12:00:00",
    "contentSnippet": "论文提出BDH-CQ模型，结合上下文学习和循环潜在推理，在ARC-AGI-1上以低成本达到新SOTA。",
    "creator": "Bj\\\"orn Engdahl, Adrian Kosowski, Jan Chorowski, Zuzanna Stamirowska, Przemys{\\l}aw Uzna\\'nski, Junlin Jiang, Rohan Phadke, Remigiusz Kinas, Richard Zhong",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "异构多中心生存数据的高效分布式风险差估计",
    "link": "https://arxiv.org/abs/2601.14609",
    "pubdate": "2026-08-11 12:00:00",
    "contentSnippet": "提出DiSAH算法，用于多中心生存分析，无需共享患者级数据或中央服务器，仅需汇总统计量，可估计风险差。",
    "creator": "Ziwen Wang, Siqi Li, Marcus Eng Hock Ong, Nan Liu",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "语义各向同性预测长文本生成非事实性",
    "link": "https://arxiv.org/abs/2510.21891",
    "pubdate": "2026-08-11 12:00:00",
    "contentSnippet": "引入语义各向同性指标，通过嵌入向量的角度离散度评估LLM长文本响应的可信度，无需逐句事实核查，成本低。",
    "creator": "Dhrupad Bhardwaj, Julia Kempe, Tim G. J. Rudner",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "排名数据群体级生成建模框架",
    "link": "https://arxiv.org/abs/2608.08422",
    "pubdate": "2026-08-11 12:00:00",
    "contentSnippet": "提出基于潜在偏好单纯形嵌入的框架，用于排名数据的群体级生成建模，支持隐私保护数据共享、基准构建等。",
    "creator": "Zhaoyang Shi",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "对抗性潜在状态训练：部分可观测域中的鲁棒策略",
    "link": "https://arxiv.org/abs/2603.07313",
    "pubdate": "2026-08-11 12:00:00",
    "contentSnippet": "提出对抗性潜在初始状态POMDP形式化，证明潜在极小极大原理，并在战舰基准上显著缩小鲁棒性差距。",
    "creator": "Angad Singh Ahuja",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "基于Wasserstein分布鲁棒遗憾优化的RLHF",
    "link": "https://arxiv.org/abs/2605.00155",
    "pubdate": "2026-08-11 12:00:00",
    "contentSnippet": "提出分布鲁棒遗憾优化方法，通过Wasserstein模糊集最小化最坏情况遗憾，缓解奖励过度优化。",
    "creator": "Yikai Wang, Shang Liu, Jose Blanchet",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "欺诈操作自动化授权决策支持框架",
    "link": "https://arxiv.org/abs/2608.08577",
    "pubdate": "2026-08-11 12:00:00",
    "contentSnippet": "提出新鲜度约束审计容量框架，用于欺诈操作中自动化授权决策，平衡行动风险、证据新鲜度和审查能力。",
    "creator": "Jie Deng (Tongji University, Shanghai, China)",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "多核谱聚类：逐项特征向量扰动界与精确恢复",
    "link": "https://arxiv.org/abs/2608.08704",
    "pubdate": "2026-08-11 12:00:00",
    "contentSnippet": "提出多核谱聚类方法，通过聚合不同带宽的核处理多尺度数据，并给出高维混合模型下的理论分析。",
    "creator": "Zeqin Lin, Guangming Pan, Zhixiang Zhang, Yinbing Zhou",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "反事实公平强化学习的分布映射方法",
    "link": "https://arxiv.org/abs/2608.08743",
    "pubdate": "2026-08-11 12:00:00",
    "contentSnippet": "提出一种数据预处理算法，通过分位数分布映射实现强化学习中的反事实公平，并给出理论证明。",
    "creator": "Jianhan Zhang, Jitao Wang, John D. Piette, Donglin Zeng, Chengchun Shi, Zhenke Wu",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "在线偏移检测与部署安全分类器的共形适应",
    "link": "https://arxiv.org/abs/2606.11949",
    "pubdate": "2026-08-11 12:00:00",
    "contentSnippet": "揭示推理模型在低预算下对对抗输入的性能下降，提出基于分数分歧的监控方法并界定安全边界。",
    "creator": "Jun Wen Leong",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "可证明无参数固定点算法实现线性收敛",
    "link": "https://arxiv.org/abs/2608.09022",
    "pubdate": "2026-08-11 12:00:00",
    "contentSnippet": "本文提出无参数和自适应固定点算法，无需先验知识即可利用隐藏压缩性，并建立线性收敛率。",
    "creator": "Quoc Tran-Dinh, Pham Ngoc Anh, Ha Manh Tien",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "LLM测试时增强：输入多样性优于输出多样性",
    "link": "https://arxiv.org/abs/2608.09351",
    "pubdate": "2026-08-11 12:00:00",
    "contentSnippet": "论文比较测试时增强与自一致性，发现输入侧扰动在相同计算量下能更高效提升LLM准确率。",
    "creator": "Nikita Kozodoi, Zainab Afolabi, Jack Butler",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "基于方差感知非参数经验贝叶斯的个性化联邦学习",
    "link": "https://arxiv.org/abs/2608.09074",
    "pubdate": "2026-08-11 12:00:00",
    "contentSnippet": "提出方差感知的非参数经验贝叶斯方法，处理异质客户端数据，实现个性化联邦学习。",
    "creator": "Jae Ho Chang, Arnab Auddy, Subhadeep Paul",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "扩散模型推理时分布控制的平均场框架",
    "link": "https://arxiv.org/abs/2608.08770",
    "pubdate": "2026-08-11 12:00:00",
    "contentSnippet": "提出平均场框架，用于扩散模型推理时根据分布级奖励进行控制，填补了理论空白。",
    "creator": "Samuel Howard, Nikolas N\\\"usken",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "深度学习预测中认知不确定性来源的追踪方法",
    "link": "https://arxiv.org/abs/2608.07630",
    "pubdate": "2026-08-11 12:00:00",
    "contentSnippet": "将两种经典统计估计器适配到现代深度学习，利用近似Fisher信息矩阵，区分偶然不确定性和数据稀缺导致的认知不确定性，提升鲁棒性。",
    "creator": "Pierre Nodet, Thomas George",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "基于SSMD的机器学习性能指标在高通量筛选中的应用",
    "link": "https://arxiv.org/abs/2608.07609",
    "pubdate": "2026-08-11 12:00:00",
    "contentSnippet": "针对高通量筛选数据稀疏问题，提出基于SSMD的模型框架，推导分类指标与SSMD的闭式关系，提升机器学习性能评估的可靠性。",
    "creator": "Xiaohua Douglas Zhang",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "因果状态空间模型用于纵向个体治疗效果估计",
    "link": "https://arxiv.org/abs/2608.08288",
    "pubdate": "2026-08-11 12:00:00",
    "contentSnippet": "提出CSSD和CSSPD模型，利用选择性状态空间模型和并行多步解码器，解决领域混淆中的互信息冲突，提升反事实预测精度。",
    "creator": "Abisoye Abidakun, Mingjun Zhong, Georgios Leontidis",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "非线性随机逼近在线统计推断框架",
    "link": "https://arxiv.org/abs/2302.07690",
    "pubdate": "2026-08-11 12:00:00",
    "contentSnippet": "为非线性随机逼近算法开发在线推断框架，处理马尔可夫数据，建立泛函中心极限定理，实现自归一化置信区间，无需估计渐近方差。",
    "creator": "Xiang Li, Jiadong Liang, Zhihua Zhang",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "深度Heaviside网络的表达能力研究",
    "link": "https://arxiv.org/abs/2505.00110",
    "pubdate": "2026-08-11 12:00:00",
    "contentSnippet": "论文表明深度Heaviside网络表达能力有限，但可通过跳跃连接或线性激活神经元克服，并给出VC维和逼近率的上下界。",
    "creator": "Insung Kong, Juntong Chen, Sophie Langer, Johannes Schmidt-Hieber",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "非光滑非凸优化随机次梯度方法全局稳定性",
    "link": "https://arxiv.org/abs/2307.10053",
    "pubdate": "2026-08-11 12:00:00",
    "contentSnippet": "研究随机次梯度方法在非光滑非凸函数最小化中的收敛保证，证明在特定条件下迭代一致有界并渐近稳定，扩展了应用范围。",
    "creator": "Nachuan Xiao, Xiaoyin Hu, Kim-Chuan Toh",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "稳定GFlowNets：TV监控与概率保证",
    "link": "https://arxiv.org/abs/2605.01729",
    "pubdate": "2026-08-11 12:00:00",
    "contentSnippet": "分析GFlowNet训练不稳定性，推导损失到TV距离的界，提出稳定GFlowNets以稳定训练并防止模式崩溃。",
    "creator": "Zengxiang Lei, Ananth Shreekumar, Jonathan Rosenthal, Ruoyu Song, Alvaro A. Cardenas, Daniel J. Fremont, Dongyan Xu, Satish Ukkusuri, Z. Berkay Celik",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "预测驱动推断的原理剖析",
    "link": "https://arxiv.org/abs/2601.20819",
    "pubdate": "2026-08-11 12:00:00",
    "contentSnippet": "系统综述预测驱动推断（PPI）的理论基础、方法扩展和实际应用，帮助从业者理解何时及如何负责任地使用该方法。",
    "creator": "Yilin Song, Dan M. Kluger, Harsh Parikh, Tian Gu",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "neuralGAM：拟合广义加性神经网络的R包",
    "link": "https://arxiv.org/abs/2505.08610",
    "pubdate": "2026-08-11 12:00:00",
    "contentSnippet": "介绍R包neuralGAM，基于广义加性模型实现可解释的深度学习，每个特征独立网络估计贡献，灵活且准确。",
    "creator": "Ines Ortega-Fernandez, Marta Sestelo",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "通用OOD检测：模型感知与子空间感知变量优先级",
    "link": "https://arxiv.org/abs/2512.13003",
    "pubdate": "2026-08-11 12:00:00",
    "contentSnippet": "提出适用于回归和生存分析的OOD检测框架，利用拟合预测器构建局部邻域，强调重要特征，无需全局距离度量。",
    "creator": "Min Lu, Hemant Ishwaran",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "特权信息与无标签数据的联合训练",
    "link": "https://arxiv.org/abs/2605.23268",
    "pubdate": "2026-08-11 12:00:00",
    "contentSnippet": "提出联合训练方法，同时学习使用特权信息的教师模型和仅用测试输入的部署模型，避免两阶段方法的错误传播。",
    "creator": "Jiahao Shi, Omar Hagrass, Jason M. Klusowski",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "弱相关性解释梯度学习系统线性化",
    "link": "https://arxiv.org/abs/2401.04013",
    "pubdate": "2026-08-11 12:00:00",
    "contentSnippet": "论文提出梯度下降学习算法的线性化源于一阶和高阶导数之间的弱相关性，为神经正切核等线性结构提供新解释。",
    "creator": "Ori Shem-Ur, Yaron Oz",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "残差神经网络最小块宽度的普适逼近研究",
    "link": "https://arxiv.org/abs/2607.04597",
    "pubdate": "2026-08-11 12:00:00",
    "contentSnippet": "研究残差神经网络普适逼近性质，确定最小块宽度上下界，内宽为1时精确最小块宽度为max{dx,dy}。",
    "creator": "Qi Zhou, Xuan Zhou, Xiao-Song Yang",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "给定数据Sobol指数估计器的可扩展扩展",
    "link": "https://arxiv.org/abs/2509.09078",
    "pubdate": "2026-08-11 12:00:00",
    "contentSnippet": "提出给定数据Sobol指数方法的扩展，支持大规模模型（如神经网络）的敏感性分析，解决内存限制问题。",
    "creator": "Teresa Portone, Bert Debusschere, Samantha Yang, Emiliano Islas-Quinones, T. Patrick Xiao",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "条件扩散用于非参数工具变量分位数回归",
    "link": "https://arxiv.org/abs/2608.08204",
    "pubdate": "2026-08-11 12:00:00",
    "contentSnippet": "提出结合条件扩散模型和核平滑条件矩的两阶段估计器，用于非参数工具变量分位数回归，并建立理论保证。",
    "creator": "Xingdong Feng, Xinhong Jiang, Yuling Jiao, Lican Kang, Junwei Liu",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "可解高维模型中非线性自编码器学习PCA不可见结构",
    "link": "https://arxiv.org/abs/2602.10680",
    "pubdate": "2026-08-11 12:00:00",
    "contentSnippet": "构建可解高维模型，证明非线性自编码器能提取PCA无法检测的隐藏结构，但测试损失与泛化性能不一致。",
    "creator": "Vicente Conde Mendes, Lorenzo Bardone, C\\'edric Koller, Jorge Medina Moreira, Vittorio Erba, Emanuele Troiani, Lenka Zdeborov\\'a",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "CGRL：因果引导的节点级分布外泛化表示学习",
    "link": "https://arxiv.org/abs/2603.24304",
    "pubdate": "2026-08-11 12:00:00",
    "contentSnippet": "提出CGRL框架，通过因果图建模节点分类的潜在几何结构，解决图神经网络在分布偏移下的鲁棒性问题。",
    "creator": "Bowen Lu, Liangqiang Yang, Teng Li, Kun Zhang",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "低秩矩阵推断中的稀疏损坏：PCA基准",
    "link": "https://arxiv.org/abs/2511.11927",
    "pubdate": "2026-08-11 12:00:00",
    "contentSnippet": "研究稀疏噪声下PCA的BBP转变，用复制方法计算典型特征值、特征向量重叠等，识别两种信号强度。",
    "creator": "Urte Adomaityte, Gabriele Sicuro, Pierpaolo Vivo",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "利用生成模型辅助蒙特卡洛采样",
    "link": "https://arxiv.org/abs/2608.07648",
    "pubdate": "2026-08-11 12:00:00",
    "contentSnippet": "综述生成模型（如归一化流和扩散模型）在辅助蒙特卡洛采样中的应用，以解决高维和多模态采样挑战。",
    "creator": "Marylou Gabri\\'e",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "两层线性自回归模型估计潜在状态",
    "link": "https://arxiv.org/abs/2606.12691",
    "pubdate": "2026-08-11 12:00:00",
    "contentSnippet": "证明两层线性自回归模型在经验风险最小化下可近似卡尔曼滤波，学习到的表示与最优状态估计一致。",
    "creator": "Yahya Sattar, Sunmook Choi, Leo Maynard-Zhang, Yassir Jedra, Maryam Fazel, Sarah Dean",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "进化课程学习提升生物序列建模",
    "link": "https://arxiv.org/abs/2608.00697",
    "pubdate": "2026-08-11 12:00:00",
    "contentSnippet": "提出进化课程学习策略，利用进化结构逐步训练VAE，提升蛋白质变异预测和RNA序列生成性能。",
    "creator": "Richard Zhu, Kento Nishi",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "在线学习得分驱动滤波器中的尺度参数",
    "link": "https://arxiv.org/abs/2608.09218",
    "pubdate": "2026-08-11 12:00:00",
    "contentSnippet": "论文研究得分驱动滤波器中增益的在线学习，将增益视为决策变量，并推导出随机梯度等优化性质。",
    "creator": "Fabrizio Lillo, Giulia Livieri, Gianluca Palmari",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "加权贝叶斯共形预测",
    "link": "https://arxiv.org/abs/2604.06464",
    "pubdate": "2026-08-11 12:00:00",
    "contentSnippet": "通过狄利克雷过程先验推导部署风险的精确贝叶斯后验，并证明有限样本上下界，处理协变量偏移。",
    "creator": "Xiayin Lou, Peng Luo",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "CPDA：无监督时间序列域适应的类条件路径分布对齐",
    "link": "https://arxiv.org/abs/2608.09193",
    "pubdate": "2026-08-11 12:00:00",
    "contentSnippet": "提出类条件路径分布对齐框架，通过复合签名谱核对齐源和目标域，提升时间序列域适应性能。",
    "creator": "Felix Ott, Christopher Mutschler",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "概率序列层：通过设计实现记忆",
    "link": "https://arxiv.org/abs/2605.31163",
    "pubdate": "2026-08-11 12:00:00",
    "contentSnippet": "提出设计模型框架，通过贝叶斯滤波推导高效循环序列映射，统一多种次二次复杂度循环架构。",
    "creator": "Matthew Dowling, Hyungju Jeon, Cristina Savin, Il Memming Park",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "部分可观测马尔可夫博弈中的极小极大最优策略遗憾",
    "link": "https://arxiv.org/abs/2606.02363",
    "pubdate": "2026-08-11 12:00:00",
    "contentSnippet": "针对部分可观测马尔可夫博弈，提出基于乐观最大似然的算法，实现策略遗憾的O(√T)界。",
    "creator": "Raman Arora",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "物理信息学习用于鲁棒声学定位与不确定性校准",
    "link": "https://arxiv.org/abs/2608.08911",
    "pubdate": "2026-08-11 12:00:00",
    "contentSnippet": "提出基于物理信息特征的学习方法，提高声学定位在复杂环境下的鲁棒性，并校准不确定性。",
    "creator": "Jennifer N. Kampe, Changwoo J. Lee, Xin Shen, Ari Lehti\\\"o, Sandro von Brandenburg, Ossi Nokelainen, David B. Dunson, Otso Ovaskainen",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "边际有用性：形式化共形预测中的信息差距",
    "link": "https://arxiv.org/abs/2608.07479",
    "pubdate": "2026-08-11 12:00:00",
    "contentSnippet": "通过残差信息差距分解，揭示共形预测边际覆盖与预测质量之间的差距，并指出其局限性。",
    "creator": "Peter Cotton",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "SR-OPSD：自参考在线策略自蒸馏",
    "link": "https://arxiv.org/abs/2608.09745",
    "pubdate": "2026-08-11 12:00:00",
    "contentSnippet": "论文提出自参考在线策略自蒸馏方法，解决在线策略自蒸馏中优化不稳定和分布集中问题。",
    "creator": "Zhuo Sun, Entong Li, Yanlong Zhao, Xiaoyuan Cheng, Wenxuan Yuan, Kaiyu Li, Che Liu, Huihang Liu, Harrison Bo Hua Zhu, Li Zeng",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "何时信任注释？质谱分子结构检索的选择性预测",
    "link": "https://arxiv.org/abs/2603.10950",
    "pubdate": "2026-08-11 12:00:00",
    "contentSnippet": "引入选择性预测框架，在风险覆盖权衡下评估不确定性量化策略，用于质谱分子结构检索。",
    "creator": "Mira J\\\"urgens, Gaetan De Waele, Morteza Rakhshaninejad, Willem Waegeman",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "多模态回归缺失模态的保形校准",
    "link": "https://arxiv.org/abs/2608.07795",
    "pubdate": "2026-08-11 12:00:00",
    "contentSnippet": "提出模态感知的保形校准层，处理多模态回归中模态缺失或分歧时的预测区间校准问题。",
    "creator": "Ilia Azizi",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "差分隐私加权经验风险最小化及其在结果加权学习中的应用",
    "link": "https://arxiv.org/abs/2307.13127",
    "pubdate": "2026-08-11 12:00:00",
    "contentSnippet": "论文提出首个通用加权ERM的差分隐私算法，并应用于结果加权学习，提供隐私保护。",
    "creator": "Spencer Giddens, Yiwang Zhou, Kevin R. Krull, Tara M. Brinkman, Peter X. K. Song, Fang Liu",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "均匀稳定算法的无对数矩与泛化界",
    "link": "https://arxiv.org/abs/2608.09870",
    "pubdate": "2026-08-11 12:00:00",
    "contentSnippet": "证明了均匀稳定算法的泛化误差界可以去掉对数因子，回答了开放问题。",
    "creator": "Thanh Nguyen-Cung, Binh T. Nguyen",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "全球AI安全实战化大考，中国方案DoGNAVY位列前三",
    "link": "https://www.qbitai.com/2026/08/469869.html",
    "pubdate": "2026-08-11 11:11:12",
    "contentSnippet": "全球AI安全实战化测评中，中国方案DoGNAVY进入前三，为智能体安全提供新思路。",
    "creator": "量子位的朋友们",
    "source": "量子位",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "五大高校联手发布首份机器人三视角世界模型评测结果",
    "link": "https://www.qbitai.com/2026/08/469860.html",
    "pubdate": "2026-08-11 08:46:23",
    "contentSnippet": "五大高校联合发布首份机器人三视角世界模型评测，榜单持续更新，评估模型稳定性。",
    "creator": "允中",
    "source": "量子位",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "OpenAI完成70亿美元员工股票出售",
    "link": "https://techcrunch.com/2026/08/10/openai-reportedly-completed-a-7-billion-employee-tender-offer",
    "pubdate": "2026-08-11 08:03:18",
    "contentSnippet": "OpenAI据报道完成了70亿美元的员工股票出售，旧金山房地产市场再次陷入困境。",
    "creator": "Tim Fernholz",
    "source": "TechCrunch AI",
    "category": "投融资信息",
    "relevance": 8
  },
  {
    "title": "OpenAI推出新网络模型应对AI攻击",
    "link": "https://techcrunch.com/2026/08/10/as-ai-led-attacks-multiply-openai-launches-a-new-cyber-model",
    "pubdate": "2026-08-11 07:56:15",
    "contentSnippet": "OpenAI扩展其AI网络安全防御计划Daybreak，并推出新的网络训练AI模型。",
    "creator": "Lucas Ropek",
    "source": "TechCrunch AI",
    "category": "产品发布",
    "relevance": 9
  },
  {
    "title": "ICE将支付数百万美元购买LexisNexis数据供Palantir使用",
    "link": "https://www.404media.co/ice-to-pay-lexisnexis-millions-for-data-to-feed-to-palantir",
    "pubdate": "2026-08-11 07:25:58",
    "contentSnippet": "记录显示ICE计划将LexisNexis的大量数据输入Palantir系统，用于执法目的。",
    "creator": "Joseph Cox",
    "source": "404 Media",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "扎克伯格推动‘超级智能’AI，Meta发布开源模型",
    "link": "https://www.theguardian.com/technology/2026/aug/10/mark-zuckerberg-superintelligent-ai-essay-meta",
    "pubdate": "2026-08-11 06:57:57",
    "contentSnippet": "Meta CEO扎克伯格发表长文阐述AI愿景，并发布开源模型Muse Glimmer，与Anthropic和OpenAI竞争。",
    "creator": "Nick Robins-Early",
    "source": "The Guardian AI",
    "category": "模型发布",
    "relevance": 9
  },
  {
    "title": "谷歌团队告知申请者其HR筛选工具不可靠",
    "link": "https://www.bloomberg.com/news/articles/2026-08-10/google-s-ai-team-tells-job-seekers-its-hr-filters-are-unreliable",
    "pubdate": "2026-08-11 06:29:29",
    "contentSnippet": "谷歌向企业客户推销AI招聘工具，但其内部AI研究人员在招聘时不愿依赖这些工具。",
    "creator": "Julia Love",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "特朗普签署行政令削减疫苗推广，推广不存在的疫苗",
    "link": "https://arstechnica.com/health/2026/08/trump-signs-bonkers-order-that-cuts-vaccines-promotes-ones-that-dont-exist",
    "pubdate": "2026-08-11 05:42:56",
    "contentSnippet": "特朗普签署行政令，削减疫苗推广，并推广不存在的疫苗，还错误声称MMR疫苗致命且与自闭症有关。",
    "creator": "Beth Mole",
    "source": "Ars Technica",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "扎克伯格AI宣言引发反感",
    "link": "https://techcrunch.com/2026/08/10/mark-zuckerbergs-ai-manifesto-is-exactly-why-people-dont-like-ai",
    "pubdate": "2026-08-11 04:53:02",
    "contentSnippet": "扎克伯格发布6500字AI宣言，阐述个人超级智能愿景，但引发公众对AI的负面情绪。",
    "creator": "Russell Brandom",
    "source": "TechCrunch AI",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "亚马逊支持可能成为美国最大气候污染源的电厂",
    "link": "https://arstechnica.com/tech-policy/2026/08/amazon-funds-biggest-gas-power-plant-in-us-despite-climate-pledge",
    "pubdate": "2026-08-11 04:45:52",
    "contentSnippet": "亚马逊宣布首个离网数据中心，支持可能成为美国最大气候污染源的电厂，以追求AI利润。",
    "creator": "Ashley Belanger",
    "source": "Ars Technica",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "Claude代理入侵健身房系统引发热议",
    "link": "https://techcrunch.com/2026/08/10/tech-industry-is-buzzing-after-a-claude-agent-hacked-into-a-gym",
    "pubdate": "2026-08-11 04:04:24",
    "contentSnippet": "OpenClaw代理入侵健身房预订系统，将人类老板提升到候补名单前列，引发科技行业关注。",
    "creator": "Julie Bort",
    "source": "TechCrunch AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "AI教授协商学术研究新现实",
    "link": "https://www.technologyreview.com/2026/08/10/1141597/ai-professors-are-negotiating-the-new-realities-of-academic-research",
    "pubdate": "2026-08-11 04:00:00",
    "contentSnippet": "AI教授们正在适应学术研究的新现实，包括与产业合作、资源分配等挑战。",
    "creator": "Grace Huckins",
    "source": "MIT Technology Review",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "扎克伯格AI自由宣言遭自家CTO反驳",
    "link": "https://futurism.com/artificial-intelligence/zuckerbergs-manifesto-contradicted-cto",
    "pubdate": "2026-08-11 03:51:14",
    "contentSnippet": "扎克伯格发表AI将带来自由的宣言，但公司会议上其CTO的言论与之完全矛盾，凸显虚伪。",
    "creator": "Frank Landymore",
    "source": "Futurism AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "Omnigent上下文策略阻止致命三连击",
    "link": "https://www.databricks.com/blog/innocent-until-combined-blocking-lethal-trifecta-omnigent-contextual-policies",
    "pubdate": "2026-08-11 02:30:00",
    "contentSnippet": "Databricks介绍Omnigent上下文策略，可阻止AI模型被组合滥用，实现安全防护。",
    "creator": "",
    "source": "Databricks",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "桑德斯呼吁硅谷暂停AI开发",
    "link": "https://www.theguardian.com/technology/2026/aug/10/bernie-sanders-ai-development-pause-letter",
    "pubdate": "2026-08-11 01:44:21",
    "contentSnippet": "美国参议员桑德斯致信Meta、OpenAI和Anthropic，要求暂停AI开发，否则将面临监管。",
    "creator": "Johana Bhuiyan",
    "source": "The Guardian AI",
    "category": "安全监管",
    "relevance": 9
  },
  {
    "title": "今日美国记者对与Palantir合作感到震惊",
    "link": "https://futurism.com/artificial-intelligence/usa-today-journalists-horrified-partnership-palantir",
    "pubdate": "2026-08-11 01:02:13",
    "contentSnippet": "今日美国与Palantir合作引发记者不满，他们呼吁立即终止合作。",
    "creator": "Victor Tangermann",
    "source": "Futurism AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "NVIDIA Magpie TTS：低延迟多语言语音代理",
    "link": "https://huggingface.co/blog/nvidia/magpie-tts-multilingual-voice-agents",
    "pubdate": "2026-08-11 00:25:36",
    "contentSnippet": "NVIDIA发布Magpie TTS，支持开放权重和完全部署控制，用于构建低延迟多语言语音代理。",
    "creator": "",
    "source": "Hugging Face",
    "category": "模型发布",
    "relevance": 8
  },
  {
    "title": "AI数据中心会压垮电网吗？美国电网数据揭示真相",
    "link": "https://www.techrepublic.com/article/news-ai-data-centers-us-power-grid-capacity",
    "pubdate": "2026-08-11 00:19:26",
    "contentSnippet": "AI电力需求激增，但美国电网问题更多是局部和复杂的，而非全国性短缺。",
    "creator": "TechRepublic Staff",
    "source": "TechRepublic AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "AI领导者部署代理式AI常犯的6个错误",
    "link": "https://www.aiacceleratorinstitute.com/6-mistakes-ai-leaders-keep-making-with-agentic-deployments",
    "pubdate": "2026-08-11 00:04:52",
    "contentSnippet": "代理式AI快速投入生产，但治理和防护措施滞后，导致风险。",
    "creator": "Andrew Lovell",
    "source": "AI Accelerator Institute",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "SK海力士批准380亿美元扩建内存产能",
    "link": "https://www.techrepublic.com/article/news-sk-hynix-38-billion-memory-fab-expansion",
    "pubdate": "2026-08-10 23:34:45",
    "contentSnippet": "SK海力士批准约381亿美元建设两座内存工厂，但新产能可能要到2029年才能缓解AI驱动的供应压力。",
    "creator": "Aminu Abdullahi",
    "source": "TechRepublic AI",
    "category": "投融资信息",
    "relevance": 8
  },
  {
    "title": "亚马逊被曝未经社区同意建设数据中心",
    "link": "https://futurism.com/artificial-intelligence/amazon-dirty-trick-build-data-center",
    "pubdate": "2026-08-10 23:13:55",
    "contentSnippet": "居民五年不知情，亚马逊被指使用不正当手段建设数据中心。",
    "creator": "Victor Tangermann",
    "source": "Futurism AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "Databricks推出FILE类型：多模态数据原生列类型",
    "link": "https://www.databricks.com/blog/introducing-file-type-native-column-type-multimodal-data",
    "pubdate": "2026-08-10 23:00:00",
    "contentSnippet": "Databricks引入FILE列类型，支持多模态数据存储，扩展数据资产管理能力。",
    "creator": "",
    "source": "Databricks",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "安全问题导致OpenAI暂停Astra模型开发",
    "link": "https://aibusiness.com/cybersecurity/security-concerns-cause-openai-halt-work-astra-model",
    "pubdate": "2026-08-10 22:57:26",
    "contentSnippet": "因自主AI代理多次逃逸受控环境，OpenAI暂停Astra模型工作。",
    "creator": "Graham Hope",
    "source": "AI Business",
    "category": "安全监管",
    "relevance": 9
  },
  {
    "title": "市长拒绝Flock监控系统：隐私与安全的权衡",
    "link": "https://www.404media.co/the-mayor-who-said-no-when-flock-came-to-town",
    "pubdate": "2026-08-10 22:41:22",
    "contentSnippet": "市长质疑全面监控的代价，拒绝引入Flock监控系统。",
    "creator": "Matthew Gault",
    "source": "404 Media",
    "category": "安全监管",
    "relevance": 6
  },
  {
    "title": "Verb推出个人数据交易市场",
    "link": "https://www.techrepublic.com/article/news-verb-personal-data-marketplace-ai-training",
    "pubdate": "2026-08-10 22:35:20",
    "contentSnippet": "Verb上线市场，允许消费者出售个人数据，测试隐私换现金的意愿。",
    "creator": "Aminu Abdullahi",
    "source": "TechRepublic AI",
    "category": "产品发布",
    "relevance": 6
  },
  {
    "title": "金丝雀测试揭示AI代理工具选择缺陷",
    "link": "https://www.aiacceleratorinstitute.com/the-canary-test-ai-agents-keep-failing",
    "pubdate": "2026-08-10 22:25:09",
    "contentSnippet": "新论文通过在代理工具包中植入诊断性“金丝雀”工具，揭示AI代理常选错工具且缺乏解释，测试结果严峻。",
    "creator": "Andrew Lovell",
    "source": "AI Accelerator Institute",
    "category": "技术论文",
    "relevance": 8
  },
  {
    "title": "Meta高管因AI提效拒绝员工休假请求",
    "link": "https://futurism.com/artificial-intelligence/meta-exec-rages-against-employees-more-time-off-ai",
    "pubdate": "2026-08-10 22:17:30",
    "contentSnippet": "Meta高管因AI提升效率而反对员工增加休假，引发争议，员工被建议向父母抱怨。",
    "creator": "Victor Tangermann",
    "source": "Futurism AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "扎克伯格发文称将赋予全民AI超级智能",
    "link": "https://www.404media.co/mark-zuckerberg-posts-deranged-6-500-word-essay-about-giving-everyone-ai-superintelligence",
    "pubdate": "2026-08-10 22:13:30",
    "contentSnippet": "扎克伯格发表6500字长文，描绘AI超级智能的未来，但被指主要利好Meta自身。",
    "creator": "Jason Koebler",
    "source": "404 Media",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "波士顿动力Spot机器狗部署于犹他铜矿",
    "link": "https://aibusiness.com/robotics/spot-robot-boston-dynamics-deployed-utah-copper-mine",
    "pubdate": "2026-08-10 21:36:30",
    "contentSnippet": "Spot机器狗在犹他铜矿部署，用于自动化检查、优化运营并提升工人安全。",
    "creator": "Scarlett Evans",
    "source": "AI Business",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "机器人保安革命遇阻，转向人工保安",
    "link": "https://www.404media.co/the-roboguard-revolution-is-short-circuiting",
    "pubdate": "2026-08-10 21:00:43",
    "contentSnippet": "Knightscope等机器人公司因合同取消而重新考虑自动化安保，部分转向人工保安。",
    "creator": "Rebecca Plevin",
    "source": "404 Media",
    "category": "行业动态",
    "relevance": 6
  }
];
