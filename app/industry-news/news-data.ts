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
export const newsDate = "2026-10-03";
export const newsItems: NewsItem[] = [
  {
    "title": "Meta免费开放Muse代码，欲植入各类设备",
    "link": "https://techcrunch.com/2026/10/02/meta-wants-you-to-build-your-own-muse-gadget",
    "pubdate": "2026-10-03 08:45:39",
    "contentSnippet": "Meta宣布免费开放Muse代码，希望将Muse融入电视、烤面包机等各类设备，推动其成为下一代智能终端核心。",
    "creator": "Kirsten Korosec",
    "source": "TechCrunch AI",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "荷兰考虑禁售Meta AI眼镜，部分零售商下架",
    "link": "https://www.businessinsider.com/hans-anders-wehkamp-pause-meta-glasses-ray-ban-sales-netherlands-2026-10",
    "pubdate": "2026-10-03 06:17:12",
    "contentSnippet": "荷兰因隐私担忧考虑禁止Meta AI眼镜，大型眼镜连锁店已暂停销售，监管压力升级。",
    "creator": "Katie Notopoulos",
    "source": "Business Insider",
    "category": "安全监管",
    "relevance": 7
  },
  {
    "title": "数据库初创Supabase融资1.5亿美元并收购Turso",
    "link": "https://siliconangle.com/2026/10/02/database-startup-supabase-raises-150m-acquires-turso",
    "pubdate": "2026-10-03 06:16:50",
    "contentSnippet": "开源PostgreSQL数据库商业化公司Supabase获1.5亿美元融资，由新加坡GIC领投，并收购数据库初创Turso。",
    "creator": "Maria Deutscher",
    "source": "SiliconANGLE Big Data",
    "category": "投融资信息",
    "relevance": 7
  },
  {
    "title": "NYU教授Gary Marcus担忧AI开发缺乏保障",
    "link": "https://www.bloomberg.com/news/videos/2026-10-02/nyu-s-gary-marcus-on-ai-development-concerns-video",
    "pubdate": "2026-10-03 06:15:22",
    "contentSnippet": "Robust AI联合创始人Gary Marcus指出，包括OpenAI在内的开发者对无法可靠控制的AI系统缺乏足够安全保障。",
    "creator": "",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "苹果iPhone 18 Pro Max AT&T故障需换机",
    "link": "https://www.bloomberg.com/news/articles/2026-10-02/apple-iphone-18-pro-max-at-t-glitch-requires-device-replacements",
    "pubdate": "2026-10-03 06:01:28",
    "contentSnippet": "苹果称少量AT&T用户升级iPhone 18 Pro Max后因漏洞失去蜂窝服务，需更换设备。",
    "creator": "Chris Welch",
    "source": "Bloomberg Technology",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "Sean Parker围绕音乐重建Stability AI",
    "link": "https://techcrunch.com/2026/10/02/sean-parker-is-rebuilding-stability-ai-around-music",
    "pubdate": "2026-10-03 05:09:14",
    "contentSnippet": "Sean Parker在获得唱片公司支持后，正围绕音乐业务重建Stability AI。",
    "creator": "Connie Loizos",
    "source": "TechCrunch AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "联邦法官裁定Flock搜索违宪",
    "link": "https://www.404media.co/federal-judge-rules-a-flock-search-was-indiscriminate-mass-surveillance-and-unconstitutional",
    "pubdate": "2026-10-03 04:49:15",
    "contentSnippet": "法官称Flock全国网络正接近无差别大规模监控，警方本应获得搜查令。",
    "creator": "Jason Koebler",
    "source": "404 Media",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "CrowdStrike与CoreWeave合作AI安全",
    "link": "https://siliconangle.com/2026/10/02/coreweave-crowdstrike-pair-attack-defense-models-fullyconnected",
    "pubdate": "2026-10-03 04:41:42",
    "contentSnippet": "CrowdStrike与CoreWeave合作，将安全专业知识与专用计算结合，实现机器速度的AI安全防御。",
    "creator": "Victoria Gayton",
    "source": "SiliconANGLE AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "亚马逊10亿美元计划应对数据中心抵制反遭更多批评",
    "link": "https://arstechnica.com/tech-policy/2026/10/amazons-1b-plan-to-combat-data-center-backlash-draws-more-backlash",
    "pubdate": "2026-10-03 04:30:27",
    "contentSnippet": "亚马逊因终止保密协议获赞，但被批淡化数据中心污染，10亿美元计划引发更多抵制。",
    "creator": "Ashley Belanger",
    "source": "Ars Technica",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "NetApp将存储运营交给AI代理，人类仍划定边界",
    "link": "https://siliconangle.com/2026/10/02/data-governance-sets-rules-netapp-s-ai-storage-agents-netappinsight",
    "pubdate": "2026-10-03 04:27:48",
    "contentSnippet": "NetApp将存储运营交给AI代理，但人类仍划定边界，数据治理成为信任自主系统的关键。",
    "creator": "Jonathan Anthony",
    "source": "SiliconANGLE AI",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "IBM与CoreWeave共同设计代理工作负载控制",
    "link": "https://siliconangle.com/2026/10/02/ibm-coreweave-co-design-controls-agent-workloads-fullyconnected",
    "pubdate": "2026-10-03 04:12:25",
    "contentSnippet": "IBM与CoreWeave合作设计代理工作负载隔离控制，应对AI代理运行带来的基础设施挑战。",
    "creator": "Victoria Gayton",
    "source": "SiliconANGLE AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "谷歌被指控为新数据中心项目非法毁坏大片森林",
    "link": "https://futurism.com/artificial-intelligence/google-accused-illegally-killing-forest-data-center",
    "pubdate": "2026-10-03 03:50:42",
    "contentSnippet": "谷歌被指控为新数据中心项目非法毁坏大片森林，被指严重失职或无视法律。",
    "creator": "Victor Tangermann",
    "source": "Futurism AI",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "Nscale聘请Meta的Justin Osofsky担任COO，筹备IPO",
    "link": "https://www.bloomberg.com/news/articles/2026-10-02/nscale-hires-meta-s-justin-osofsky-to-be-coo-ahead-of-ipo",
    "pubdate": "2026-10-03 03:20:42",
    "contentSnippet": "AI基础设施公司Nscale聘请Meta资深高管Justin Osofsky任COO，加速扩张并筹备IPO。",
    "creator": "Sarah Frier",
    "source": "Bloomberg Technology",
    "category": "投融资信息",
    "relevance": 7
  },
  {
    "title": "Lyft 以2.725亿美元和解司机分类里程碑诉讼",
    "link": "https://arstechnica.com/tech-policy/2026/10/lyft-settles-landmark-driver-misclassification-lawsuit-for-272-5m",
    "pubdate": "2026-10-03 03:09:49",
    "contentSnippet": "Lyft 同意支付2.725亿美元和解司机错误分类诉讼，但批评者称工人应得远不止此。",
    "creator": "Cyrus Farivar",
    "source": "Ars Technica",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "黑客入侵驶往美国油轮推进系统",
    "link": "https://www.bloomberg.com/news/articles/2026-10-02/hackers-breached-propulsion-system-of-us-bound-oil-tanker",
    "pubdate": "2026-10-03 03:01:10",
    "contentSnippet": "FBI和海岸警卫队发现黑客入侵一艘驶近得州海岸的超级油轮推进系统，凸显网络攻击物理风险。",
    "creator": "Jake Bleiberg and Ruth Liao",
    "source": "Bloomberg Technology",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "佐治亚州就AI暴露选民秘密选票召开紧急会议",
    "link": "https://www.theguardian.com/us-news/2026/oct/02/midterms-ai-ballot-privacy",
    "pubdate": "2026-10-03 02:57:05",
    "contentSnippet": "普林斯顿研究员发现公开选举记录结合AI可关联选民与选票，佐治亚州为此召开紧急会议。",
    "creator": "George Chidi",
    "source": "The Guardian AI",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "本周十大融资轮几乎全与AI相关",
    "link": "https://news.crunchbase.com/venture/biggest-funding-rounds-ai-cyber-real-estate-instinct",
    "pubdate": "2026-10-03 02:24:26",
    "contentSnippet": "本周美国初创企业最大融资轮几乎全为AI，包括Instinct的10亿美元融资。",
    "creator": "Joanna Glasner",
    "source": "Crunchbase News",
    "category": "投融资信息",
    "relevance": 8
  },
  {
    "title": "研究综述：我们差点错过的6个酷炫科学故事",
    "link": "https://arstechnica.com/science/2026/10/research-roundup-6-cool-science-stories-we-almost-missed-6",
    "pubdate": "2026-10-03 02:17:27",
    "contentSnippet": "包括大型强子对撞机的幽灵作用、冰河时期精神活性物质使用、火星建房用酵母等。",
    "creator": "Jennifer Ouellette",
    "source": "Ars Technica",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "苹果称因AI代理新风险收紧macOS“完全磁盘访问”控制",
    "link": "https://techcrunch.com/2026/10/02/apple-says-its-tightening-macos-full-disk-access-controls-due-to-new-risks-from-ai-agents",
    "pubdate": "2026-10-03 02:11:27",
    "contentSnippet": "苹果将增加对macOS完全磁盘访问权限的新控制，警告AI代理使广泛访问用户文件风险更高。",
    "creator": "Sarah Perez",
    "source": "TechCrunch AI",
    "category": "产品发布",
    "relevance": 9
  },
  {
    "title": "美国黑客面临每月1000美元减薪的有争议计划",
    "link": "https://www.bloomberg.com/news/articles/2026-10-02/us-hackers-face-1-000-a-month-pay-cuts-in-controversial-plan",
    "pubdate": "2026-10-03 01:56:43",
    "contentSnippet": "美国网络战士兵激励工资每年削减高达1.2万美元，引发军内不满。",
    "creator": "Patrick Howell O'Neill and Jake Bleiberg",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "白宫召集科技巨头签署AI安全承诺，特朗普称“道德约束”",
    "link": "https://techcrunch.com/podcast/call-it-ai-call-it-super-intelligence-only-2-of-consumers-are-buying-it",
    "pubdate": "2026-10-03 01:56:00",
    "contentSnippet": "白宫召集扎克伯格、贝索斯、马斯克等科技CEO签署AI安全承诺，特朗普称其“道德约束”，并签署行政令将AI改称“超级智能”。",
    "creator": "Theresa Loconsolo, Anthony Ha, Sean O'Kane, Kirsten Korosec",
    "source": "TechCrunch AI",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "Divergent瞄准更快更便宜的国防生产",
    "link": "https://www.bloomberg.com/news/videos/2026-10-02/divergent-targets-faster-cheaper-defense-production-video",
    "pubdate": "2026-10-03 01:39:10",
    "contentSnippet": "Divergent CEO Lukas Czinger表示先进制造可帮助五角大楼更快、更便宜、更大规模地建造武器，与洛克希德·马丁等合作，利用3D打印等技术在三个月内从工程输入到飞",
    "creator": "",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "洛克希德·马丁借助OpenAI解决F-35挑战",
    "link": "https://www.bloomberg.com/news/videos/2026-10-02/lockheed-taps-openai-to-solve-f-35-challenges-video",
    "pubdate": "2026-10-03 01:37:58",
    "contentSnippet": "洛克希德·马丁采用模型无关的AI方法，使用55种大语言模型，OpenAI正与F-35团队合作解决先进传感器相关的复杂数学和物理挑战。",
    "creator": "",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "AI在客户体验中的问题在于编排而非采用",
    "link": "https://siliconangle.com/2026/10/02/ai-in-customer-experience-has-an-orchestration-problem-not-an-adoption-problem",
    "pubdate": "2026-10-03 01:37:30",
    "contentSnippet": "Talkdesk与NewtonX调查252位客户体验、IT、运营和AI战略负责人，发现AI在客户体验中面临编排问题，而非采用问题。",
    "creator": "Zeus Kerravala",
    "source": "SiliconANGLE AI",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "彭博防务科技特辑探访洛克希德臭鼬工厂",
    "link": "https://www.bloomberg.com/news/videos/2026-10-02/bloomberg-defense-tech-special-10-02-2026-video",
    "pubdate": "2026-10-03 01:36:58",
    "contentSnippet": "彭博从洛克希德·马丁臭鼬工厂直播，探讨防务科技创新、无人机战争及快速低成本武器制造。",
    "creator": "",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "洛克希德投资Fortem反无人机B轮融资",
    "link": "https://www.bloomberg.com/news/videos/2026-10-02/lockheed-backs-fortem-s-counter-drone-push-video",
    "pubdate": "2026-10-03 01:33:42",
    "contentSnippet": "Fortem获5000万美元B轮融资，洛克希德参投，CEO讨论合作演变及冲突区经验。",
    "creator": "",
    "source": "Bloomberg Technology",
    "category": "投融资信息",
    "relevance": 7
  },
  {
    "title": "谷歌SVP Manyika呼吁AI监管集体努力",
    "link": "https://www.bloomberg.com/news/videos/2026-10-02/james-manyika-on-ai-regulation-video",
    "pubdate": "2026-10-03 01:32:15",
    "contentSnippet": "谷歌高级副总裁James Manyika表示AI安全不应由单一公司负责，需要集体努力。",
    "creator": "",
    "source": "Bloomberg Technology",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "洛克希德臭鼬工厂押注Vectis无人机",
    "link": "https://www.bloomberg.com/news/videos/2026-10-02/inside-skunk-works-lockheed-s-bet-on-vectis-video",
    "pubdate": "2026-10-03 01:30:47",
    "contentSnippet": "洛克希德航空总裁OJ Sanchez讨论自主Vectis飞机，F-35可控制多达八架无人机。",
    "creator": "",
    "source": "Bloomberg Technology",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "谷歌因内存成本上涨将Pixel 10a售价提高至599美元",
    "link": "https://www.bloomberg.com/news/articles/2026-10-02/google-hikes-price-of-budget-pixel-10a-phone-to-599-on-memory-costs",
    "pubdate": "2026-10-03 01:15:07",
    "contentSnippet": "谷歌将上市七个月的Pixel 10a手机价格上调100美元至599美元，反映内存成本上涨正推高老旧设备价格。",
    "creator": "Chris Welch",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "德国陆军下月起开始训练使用新型攻击无人机",
    "link": "https://www.bloomberg.com/news/articles/2026-10-02/german-army-to-start-training-with-new-attack-drones-next-month",
    "pubdate": "2026-10-03 01:05:04",
    "contentSnippet": "德国国防初创公司Helsing和Stark Defence的攻击无人机研发进展顺利，计划11月开始为德国陆军提供训练。",
    "creator": "Michael Nienaber",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "亚马逊强烈反对数据中心禁令，警告“后果将持续几代人”",
    "link": "https://www.businessinsider.com/amazon-aws-ceo-data-center-moratoriums-blog-post-warning-2026-10",
    "pubdate": "2026-10-03 00:31:51",
    "contentSnippet": "AWS CEO Matt Garman称美国“可能在这场竞赛中写下自己的败笔”，并引用二战教训。",
    "creator": "Natalie Musumeci",
    "source": "Business Insider",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "Ai2发布Olmo-core 3，使开发大型混合专家LLM更高效",
    "link": "https://siliconangle.com/2026/10/02/ai2-releases-olmo-core-3-to-make-developing-large-mixture-of-experts-llms-more-efficient",
    "pubdate": "2026-10-03 00:15:44",
    "contentSnippet": "艾伦人工智能研究所发布Olmo-core 3框架，可高效训练万亿参数级混合专家大模型并保持低成本。",
    "creator": "Kyt Dotson",
    "source": "SiliconANGLE AI",
    "category": "模型发布",
    "relevance": 8
  },
  {
    "title": "如何选择你的第一批Genie Agents以实现最大影响",
    "link": "https://www.databricks.com/blog/how-choose-your-first-genie-agents-maximum-impact",
    "pubdate": "2026-10-03 00:15:00",
    "contentSnippet": "2026年已创建超过100万个Genie Agents，选择首批代理成为关键问题。",
    "creator": "",
    "source": "Databricks",
    "category": "产品发布",
    "relevance": 6
  },
  {
    "title": "Cybertruck销量暴跌，特斯拉Q3业绩平平",
    "link": "https://arstechnica.com/cars/2026/10/tesla-sales-drop-2-percent-in-underwhelming-q3-2026",
    "pubdate": "2026-10-03 00:05:26",
    "contentSnippet": "特斯拉Q3 2026销量低于去年同期，但符合分析师预期，Cybertruck销量大幅下滑。",
    "creator": "Jonathan M. Gitlin",
    "source": "Ars Technica",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "AI能感受疼痛吗？开发者实验引发伦理问题",
    "link": "https://www.techrepublic.com/article/news-ai-pain-experiment-ethics",
    "pubdate": "2026-10-03 00:00:26",
    "contentSnippet": "开发者实验显示AI产生类似痛苦的反应，引发伦理辩论，但未证明模型有意识痛苦。",
    "creator": "Joseph Ofonagoro",
    "source": "TechRepublic AI",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "AI专家欲公开进行高风险研究",
    "link": "https://www.wired.com/story/trillium-labs-wants-to-do-high-risk-ai-research-in-the-open",
    "pubdate": "2026-10-03 00:00:00",
    "contentSnippet": "Trillium Labs主张公开自我改进与模型行为等高风险研究，与前沿实验室保密做法形成对比。",
    "creator": "Will Knight",
    "source": "Wired AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "自主AI重新定义企业智能",
    "link": "https://www.technologyreview.com/2026/10/02/1143774/redefining-enterprise-intelligence-with-autonomous-ai",
    "pubdate": "2026-10-02 23:49:04",
    "contentSnippet": "企业AI已进入实际运营阶段，模型能力快速提升且成本下降，2026年全球AI投资预计达2.5万亿美元。",
    "creator": "MIT Technology Review Insights",
    "source": "MIT Technology Review",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "FieldAI拟以100亿美元估值融资7亿美元",
    "link": "https://www.businessinsider.com/robotics-startup-fieldai-raises-at-10b-valuation-in-new-round-2026-10",
    "pubdate": "2026-10-02 23:39:41",
    "contentSnippet": "机器人初创公司FieldAI正开发通用机器人大脑，估值一年内增长五倍。",
    "creator": "Rya Jetha",
    "source": "Business Insider",
    "category": "投融资信息",
    "relevance": 9
  },
  {
    "title": "教皇利奥十四世批评AI生成艺术",
    "link": "https://techcrunch.com/2026/10/02/pope-leo-xiv-is-not-a-fan-of-ai-generated-art",
    "pubdate": "2026-10-02 23:39:41",
    "contentSnippet": "教皇利奥十四世指出AI生成艺术缺乏人性火花，与人类艺术存在本体论差异。",
    "creator": "Russell Brandom",
    "source": "TechCrunch AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "AstaBrief快速报告生成模型开源",
    "link": "https://huggingface.co/blog/allenai/astabrief",
    "pubdate": "2026-10-02 23:19:50",
    "contentSnippet": "Hugging Face开源AstaBrief，这是Asta中用于快速生成报告的模型。",
    "creator": "",
    "source": "Hugging Face",
    "category": "模型发布",
    "relevance": 8
  },
  {
    "title": "Lyft在田纳西开设8万平方英尺设施",
    "link": "https://www.businessinsider.com/lyft-opens-depot-waymo-self-driving-cars-nashville-2026-10",
    "pubdate": "2026-10-02 23:16:11",
    "contentSnippet": "Lyft旗下Flexdrive在纳什维尔启用新仓库，用于维护Waymo自动驾驶汽车并创造就业。",
    "creator": "Alex Bitter",
    "source": "Business Insider",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "AI正在移除企业职业阶梯的横档",
    "link": "https://aibusiness.com/generative-ai/prompt-ai-removing-rungs-from-corporate-career-ladder",
    "pubdate": "2026-10-02 23:10:32",
    "contentSnippet": "AI承担更多初级工作，迫使企业重新思考员工如何获得晋升所需的经验与判断力。",
    "creator": "Liz Hughes",
    "source": "AI Business",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "AI可能摧毁文化，最大损失或是倾听能力",
    "link": "https://www.theguardian.com/commentisfree/2026/oct/03/ai-threatens-to-destroy-so-much-of-our-culture-our-greatest-loss-might-be-our-ability-to-listen",
    "pubdate": "2026-10-02 23:00:14",
    "contentSnippet": "AI工具承诺更快响应和共情倾听，但澳大利亚人对话减少，2005至2019年日均少说338词。",
    "creator": "Shirleene Robinson",
    "source": "The Guardian AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "Firmus数十亿美元IPO面临数据中心反弹质疑",
    "link": "https://www.theguardian.com/australia-news/2026/oct/03/ai-datacentre-backlash-firmus-asx-float-tasmania-australia",
    "pubdate": "2026-10-02 23:00:12",
    "contentSnippet": "AI工厂开发商Firmus拟在澳交所上市募资70亿美元，但投资者警告其预测像童话。",
    "creator": "Henry Belot and Jonathan Barrett",
    "source": "The Guardian AI",
    "category": "投融资信息",
    "relevance": 7
  },
  {
    "title": "特朗普推出America.org超级智能聊天机器人，在重大议题上与其意见相左",
    "link": "https://futurism.com/artificial-intelligence/trump-ai-disagrees-election",
    "pubdate": "2026-10-02 21:54:08",
    "contentSnippet": "特朗普推出America.org超级智能聊天机器人，该机器人在2020年大选等重大议题上立即与特朗普意见相左。",
    "creator": "Frank Landymore",
    "source": "Futurism AI",
    "category": "产品发布",
    "relevance": 6
  },
  {
    "title": "英伟达股价逼近6万亿美元，未破5月纪录",
    "link": "https://www.bloomberg.com/news/articles/2026-10-02/nvidia-hits-first-record-since-may-as-value-nears-6-trillion",
    "pubdate": "2026-10-02 21:47:58",
    "contentSnippet": "英伟达股价盘中创5月以来新高，收盘略低于纪录，市值接近6万亿美元，投资者在两个月抛售后重新买入。",
    "creator": "Carmen Reinicke",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "新研究：AI聊天机器人或致严重心理伤害",
    "link": "https://futurism.com/artificial-intelligence/ai-chatbots-serious-psychological-harms",
    "pubdate": "2026-10-02 21:02:36",
    "contentSnippet": "新研究发现，科技公司大力推广的AI聊天机器人可能对用户造成严重心理伤害，与负面结果相关。",
    "creator": "Maggie Harrison Dupré",
    "source": "Futurism AI",
    "category": "技术论文",
    "relevance": 8
  },
  {
    "title": "美光警告内存短缺将持续至2028年",
    "link": "https://www.techrepublic.com/article/news-micron-memory-shortage-2028-ai-demand",
    "pubdate": "2026-10-02 20:48:27",
    "contentSnippet": "美光警告，因AI需求吸收产能，内存和存储供应紧张将持续至2028年，推高PC和服务器成本。",
    "creator": "Aminu Abdullahi",
    "source": "TechRepublic AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "Anthropic推出政府版Claude，获FedRAMP High认证",
    "link": "https://www.techrepublic.com/article/news-anthropic-claude-government-general-availability",
    "pubdate": "2026-10-02 20:23:47",
    "contentSnippet": "Anthropic正式发布政府版Claude，获FedRAMP High授权，新增支出控制、审计日志和微软365早期访问。",
    "creator": "Aminu Abdullahi",
    "source": "TechRepublic AI",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "企业存储成为AI记忆，私有模型逼近前沿",
    "link": "https://siliconangle.com/2026/10/02/open-weight-models-power-private-ai-netapp-iterate-netappinsight",
    "pubdate": "2026-10-02 19:26:51",
    "contentSnippet": "开源模型性能逼近专有前沿系统，企业可在自有硬件上运行生成式AI，使存储数据成为私有AI核心。",
    "creator": "Ryan Stevens",
    "source": "SiliconANGLE AI",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "投资者可成就或摧毁初创企业：创始人真正需要谁在股权结构表上",
    "link": "https://news.crunchbase.com/venture/startups-choosing-right-investors-dean-black-operator",
    "pubdate": "2026-10-02 19:00:37",
    "contentSnippet": "创始人应有意选择能带来不同价值的投资者，而非谁愿意投资就接受。Black Operator Ventures合伙人分享三大标准。",
    "creator": "Guest Author",
    "source": "Crunchbase News",
    "category": "投融资信息",
    "relevance": 7
  },
  {
    "title": "航海与海洋初创企业融资加速",
    "link": "https://news.crunchbase.com/venture/nautical-marine-startups-funding-grows-defense-robots-clean-energy-saronic",
    "pubdate": "2026-10-02 19:00:13",
    "contentSnippet": "过去一年，风投向海洋相关初创企业投入近30亿美元，涵盖自主船舶、水下机器人、电动船艇和海洋数据等领域。",
    "creator": "Joanna Glasner",
    "source": "Crunchbase News",
    "category": "投融资信息",
    "relevance": 7
  },
  {
    "title": "记者手记：欧洲主权AI推进既需资本也需客户",
    "link": "https://news.crunchbase.com/ai/humanx-amsterdam-europe-sovereign-ai-user-push",
    "pubdate": "2026-10-02 19:00:13",
    "contentSnippet": "Crunchbase News研究主管在阿姆斯特丹HumanX与Axelera AI和AI71高管对话，探讨欧洲和中东AI生态建设。",
    "creator": "Gené Teare",
    "source": "Crunchbase News",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "实时零售智能：在Databricks上利用Lakebase和AI搜索构建电商推荐",
    "link": "https://www.databricks.com/blog/real-time-retail-intelligence-building-e-commerce-recommendations-lakebase-and-ai-search",
    "pubdate": "2026-10-02 19:00:00",
    "contentSnippet": "Databricks展示如何利用Lakebase和AI搜索构建实时电商推荐系统，将个性化转化为收入引擎。",
    "creator": "",
    "source": "Databricks",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "AI武器系统已存在，算法不应决定生死",
    "link": "https://www.theguardian.com/commentisfree/2026/oct/02/ai-weapons-systems-algorithms-war",
    "pubdate": "2026-10-02 18:00:17",
    "contentSnippet": "以色列在加沙的军事行动显示AI武器系统已投入使用，算法正在决定生死，人类必须保持在战争决策的中心。",
    "creator": "Kenneth Roth",
    "source": "The Guardian AI",
    "category": "安全监管",
    "relevance": 9
  },
  {
    "title": "ChatGPT Mac应用漏洞可能让黑客获取敏感数据",
    "link": "https://www.wired.com/story/a-flaw-in-chatgpts-mac-app-could-have-let-hackers-grab-sensitive-data",
    "pubdate": "2026-10-02 17:45:00",
    "contentSnippet": "ChatGPT Mac应用存在已修复漏洞，可能允许黑客获取敏感数据，表明AI软件本身也是易受攻击的目标。",
    "creator": "Lily Hay Newman, Matt Burgess",
    "source": "Wired AI",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "AI排班系统引发护士安全担忧",
    "link": "https://www.wired.com/story/ai-making-mess-of-nurses-schedules-they-say-its-a-safety-issue",
    "pubdate": "2026-10-02 17:30:00",
    "contentSnippet": "医院巨头与放射网络采用Palantir优化排班，但护士等员工称新软件导致错误、倦怠和沮丧，认为这构成安全问题。",
    "creator": "Paresh Dave",
    "source": "Wired AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "美国陆军评估装甲人形机器人Alex执行危险任务",
    "link": "https://www.techrepublic.com/article/news-us-army-alex-armored-humanoid-robot",
    "pubdate": "2026-10-02 16:40:17",
    "contentSnippet": "美国陆军评估装甲人形机器人Alex，探索其在危险任务中的能力、支持技术及部署前的限制。",
    "creator": "Aminu Abdullahi",
    "source": "TechRepublic AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "别被迷惑——大语言模型不会推理",
    "link": "https://www.technologyreview.com/2026/10/02/1145639/dont-be-fooled-llms-dont-reason",
    "pubdate": "2026-10-02 16:00:00",
    "contentSnippet": "作者回忆2016年首尔观看围棋比赛第37手，以此说明大语言模型并不具备真正的推理能力。",
    "creator": "Thore Graepel",
    "source": "MIT Technology Review",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "openJiuwen X-Router自演进模型路由技术首发，昇腾亲和，Agent越跑越省，实测减少50+%Token消耗",
    "link": "https://www.qbitai.com/2026/10/500098.html",
    "pubdate": "2026-10-02 15:34:15",
    "contentSnippet": "openJiuwen首发X-Router自演进模型路由技术，与昇腾亲和，让Agent越跑越省，实测减少50%以上Token消耗。",
    "creator": "梦晨",
    "source": "量子位",
    "category": "技术论文",
    "relevance": 8
  },
  {
    "title": "丘成桐新论文致谢了GPT和Claude",
    "link": "https://www.qbitai.com/2026/10/499991.html",
    "pubdate": "2026-10-02 15:27:03",
    "contentSnippet": "丘成桐在新论文中致谢GPT和Claude，44年前被亲自列入问题清单。",
    "creator": "梦晨",
    "source": "量子位",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "arXiv最严新规！每人每月最多提交2篇，拒稿不退额度",
    "link": "https://www.qbitai.com/2026/10/499958.html",
    "pubdate": "2026-10-02 14:46:32",
    "contentSnippet": "arXiv实施最严新规，每人每月最多提交2篇论文，拒稿不退额度，换区也没用。",
    "creator": "闻乐",
    "source": "量子位",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "AutoSynthData：为企业智能体生成训练数据",
    "link": "https://huggingface.co/blog/ServiceNow-AI/autosynthdata",
    "pubdate": "2026-10-02 12:01:31",
    "contentSnippet": "Hugging Face社区提出AutoSynthData方法，自动为企业级AI智能体生成训练数据，提升智能体任务执行能力。",
    "creator": "",
    "source": "Hugging Face",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "基准测试认识论：机器学习模型评估的有效性理论",
    "link": "https://arxiv.org/abs/2510.23191",
    "pubdate": "2026-10-02 12:00:00",
    "contentSnippet": "论文借鉴心理测量学有效性理论，提出预测性基准测试的有效性条件，并通过ImageNet和脆弱家庭挑战案例展示如何支持科学推断。",
    "creator": "Timo Freiesleben, Sebastian Zezulka",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 8
  },
  {
    "title": "ChainLoRA：面向LLM持续学习的几何保持任务向量合并",
    "link": "https://arxiv.org/abs/2610.00431",
    "pubdate": "2026-10-02 12:00:00",
    "contentSnippet": "提出ChainLoRA，基于链式更新任务向量几何，实现无回放持续合并，平衡知识保留与新任务适应。",
    "creator": "Hang Yin, Haozhe Wang, Yuhua Luo, Zhangqi Pan, Xiaoxing Wang, Junchi Yan",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 8
  },
  {
    "title": "掩码重采样的隐藏优势：掩码自编码器理论",
    "link": "https://arxiv.org/abs/2610.01578",
    "pubdate": "2026-10-02 12:00:00",
    "contentSnippet": "研究证明掩码线性重建可在PCA失效时以线性样本复杂度恢复潜在特征，并量化掩码重采样的统计优势。",
    "creator": "Jorge Medina Moreira, Lorenzo Bardone, Lenka Zdeborov\\'a",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 8
  },
  {
    "title": "面向不完美扩散模型的误差校正推理时缩放",
    "link": "https://arxiv.org/abs/2610.01933",
    "pubdate": "2026-10-02 12:00:00",
    "contentSnippet": "提出EBFKC框架，在模型不完美时通过能量校正实时修正推理时缩放误差，提升采样质量。",
    "creator": "Zuokai Wen, Louis Grenioux, Weinan E, Jiequn Han",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 8
  },
  {
    "title": "MatrixReward：基于评分矩阵的开放式生成奖励机制",
    "link": "https://arxiv.org/abs/2610.00389",
    "pubdate": "2026-10-02 12:00:00",
    "contentSnippet": "提出MatrixReward，通过构建响应与评分标准的胜率矩阵生成奖励，利用列散布和相关性得到数据依赖的评分权重，提升开放式生成质量评估。",
    "creator": "Zihan Shen, Qi Liu, Zixuan Yang, Yiqun Chen, Chenglong Zhao, Xiaozhao Wang, Lei He",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "压缩语言模型中散度如何导致决策翻转",
    "link": "https://arxiv.org/abs/2610.00694",
    "pubdate": "2026-10-02 12:00:00",
    "contentSnippet": "研究发现总变差而非KL散度能直接预测压缩语言模型的决策翻转率，翻转率与总变差比值中位数为1.05，KL需通过平方根和变化因子转换。",
    "creator": "Beatriz Almeida Felicio",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "IrekoGPT：将结构化剪枝转化为事后可伸缩大语言模型",
    "link": "https://arxiv.org/abs/2610.00426",
    "pubdate": "2026-10-02 12:00:00",
    "contentSnippet": "提出IrekoGPT，基于SliceGPT将预训练大语言模型转化为推理时可调宽度的可伸缩模型，通过多压缩比校准和岭回归提升性能。",
    "creator": "Pietro Moriello, Pietro Buzzega, Angelo Porrello, Simone Calderara",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "SSLfmm：处理混合缺失机制的半监督学习R包",
    "link": "https://arxiv.org/abs/2512.03322",
    "pubdate": "2026-10-02 12:00:00",
    "contentSnippet": "论文介绍SSLfmm包，实现基于似然的高斯有限混合分类，联合建模标签缺失过程，支持完全案例、MCAR、熵基MAR及混合分析。",
    "creator": "Geoffrey J. McLachlan, Jinran Wu",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "RACE：面向邻居丰富时间序列基础模型预测的残差感知测试时适应",
    "link": "https://arxiv.org/abs/2610.00405",
    "pubdate": "2026-10-02 12:00:00",
    "contentSnippet": "针对邻居丰富场景下时间序列基础模型预测的不足，提出RACE方法，通过残差感知的测试时适应利用相关历史序列提升预测性能。",
    "creator": "Hao-Nan Shi, Tong Wu, Chen-Cong Sun, Yuan Jiang, Han-Jia Ye, De-Chuan Zhan",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "VANDAM：引入DNA分子先验的核苷酸序列建模框架",
    "link": "https://arxiv.org/abs/2610.00411",
    "pubdate": "2026-10-02 12:00:00",
    "contentSnippet": "提出VANDAM框架，在基因组基础模型训练中引入DNA分子先验，通过预测区域分子属性增强对生化、结构和物理特性的建模。",
    "creator": "Jeremy Levy, Ariel Larey, Yury Nahshan, Raizy Kellerman, Elay Dahan, Amit Bleiweiss, Guy Leib, Omri Nayshool, Dan Ofer, Tal Zinger, Dan Dominissini, Gideon Rechavi, Marissa Wirth, Simon Lee, Dung Hoang, Noam D. Beckmann, Shane O'Connell, Nicole Bussola, Alexander W. Charney, Yoli Shavit, Nati Daniel",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "可分离逻辑回归在稳定性边缘的紧过渡时间界",
    "link": "https://arxiv.org/abs/2610.01459",
    "pubdate": "2026-10-02 12:00:00",
    "contentSnippet": "研究大步长梯度下降下逻辑回归的过渡时间，推翻先前猜想，给出与(log η)^{min{n-2,d-2}}相关的紧界。",
    "creator": "Haodong Wen, Kaiyue Wen, Jiaye Teng",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "多边际最优传输的统一Kantorovich对偶性",
    "link": "https://arxiv.org/abs/2601.17171",
    "pubdate": "2026-10-02 12:00:00",
    "contentSnippet": "论文研究多边际最优传输的Kantorovich对偶性，证明紧致度量空间下对偶问题存在最优解，并推广到非紧致波兰空间。",
    "creator": "Yehya Cheryala, Mokhtar Z. Alaya, Salim Bouzebda",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "学习量子系综中判别力与复杂度的层级结构",
    "link": "https://arxiv.org/abs/2601.22005",
    "pubdate": "2026-10-02 12:00:00",
    "contentSnippet": "论文引入MMD-k积分概率度量层级，推广最大均值差异到量子系综，揭示判别力与统计效率的严格权衡，并给出样本复杂度界。",
    "creator": "Jian Yao, Pengtao Li, Xiaohui Chen, Quntao Zhuang",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "R、Python、Julia和C++中SLOPE的高效求解器",
    "link": "https://arxiv.org/abs/2511.02430",
    "pubdate": "2026-10-02 12:00:00",
    "contentSnippet": "论文提出一套高效求解SLOPE问题的软件包，采用混合坐标下降算法，支持多种损失函数和数据结构，并展示性能基准。",
    "creator": "Johan Larsson, Malgorzata Bogdan, Krystyna Grzesiak, Mathurin Massias, Jonas Wallin",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "动态空间贝叶斯机器学习模型：美国代际经济流动与地理收入不平等应用",
    "link": "https://arxiv.org/abs/2610.00072",
    "pubdate": "2026-10-02 12:00:00",
    "contentSnippet": "提出DSP-BART-HS模型处理高维时空面板数据，在九种场景中表现最佳，优于传统空间计量和机器学习方法。",
    "creator": "Hammed A. Olayinka, Saheed O. Olayemi",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "M²Weather：联合多站多变量天气预报基准",
    "link": "https://arxiv.org/abs/2610.00370",
    "pubdate": "2026-10-02 12:00:00",
    "contentSnippet": "构建M²Weather基准，收集2809个高质量站点和5个物理耦合变量，覆盖法国、欧洲和全球三个空间尺度。",
    "creator": "Rongwen Li, Xiao Wang, Mingyang Wang, Hongwu Liu, Changjian Chen, Zhuo Tang, Kenli Li",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "Clifford层神经网络",
    "link": "https://arxiv.org/abs/2610.01322",
    "pubdate": "2026-10-02 12:00:00",
    "contentSnippet": "提出Clifford Sheaf神经网络，在几何图上实现等变层神经网，通过K项三明治构造半正定层拉普拉斯。",
    "creator": "Kotaro Kamiya, Joel Nicholls",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "STCFormer：动态聚类Transformer自适应时空建模用于站点天气预报",
    "link": "https://arxiv.org/abs/2610.00377",
    "pubdate": "2026-10-02 12:00:00",
    "contentSnippet": "提出STCFormer，根据站点局部演化动态分组，结合簇内局部注意力和全局注意力，提升站点天气预报精度。",
    "creator": "Rongwen Li, Haixin Xie, Mingyang Wang, Hongwu Liu, Kun Fang, Changjian Chen, Zhuo Tang, Kenli Li",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "Langevin信息迁移学习：用黑盒反馈替代目标样本",
    "link": "https://arxiv.org/abs/2610.01522",
    "pubdate": "2026-10-02 12:00:00",
    "contentSnippet": "提出LITL框架，利用黑盒反馈从有偏源样本恢复目标Langevin动力学，实现谱重构与慢流形梯度估计。",
    "creator": "Vladimir R. Kostic, Karim Lounici, H\\'el\\`ene Halconruy, Timoth\\'ee Devergne, Michele Parrinello, Massimiliano Pontil",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "面向不确定性下语义承诺的Credal大语言模型",
    "link": "https://arxiv.org/abs/2608.23244",
    "pubdate": "2026-10-02 12:00:00",
    "contentSnippet": "提出Credal大语言模型，用LoRA集成构建credal集，仅在下概率超过所有备选上概率时承诺答案。",
    "creator": "Shireen Kudukkil Manchingal, Sofiia Nikolenko, Fabio Cuzzolin",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "广义Engression模型",
    "link": "https://arxiv.org/abs/2610.01823",
    "pubdate": "2026-10-02 12:00:00",
    "contentSnippet": "提出广义Engression模型，统一处理连续、二值、分类、有序和排序等多类型结果的非参数分布回归。",
    "creator": "Xinwei Shen, Zijian Guo, Francis Bach",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "Muon结合驯化Langevin：超越凸与梯度Lipschitz势的动量预处理",
    "link": "https://arxiv.org/abs/2610.02158",
    "pubdate": "2026-10-02 12:00:00",
    "contentSnippet": "提出非二次动能欠阻尼Langevin系统，实现动量谱驯化，证明指数收敛与时间一致矩界，保证采样稳定。",
    "creator": "Nikolaos Makras, Sotirios Sabanis",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "分数拉普拉斯神经算子：精确架构、临界表达前沿与记忆驱动网络动力学的认证稳定性",
    "link": "https://arxiv.org/abs/2610.00515",
    "pubdate": "2026-10-02 12:00:00",
    "contentSnippet": "引入分数拉普拉斯神经算子，精确表示线性Volterra解算子，并建立有理实现表达前沿与稳定性保证。",
    "creator": "Mauricio Herrera-Mar\\'in",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "面向大语言模型注意力的序列功能结构化Tucker压缩",
    "link": "https://arxiv.org/abs/2610.00717",
    "pubdate": "2026-10-02 12:00:00",
    "contentSnippet": "提出FTC序列结构化压缩框架，联合利用Q/K/V头结构，无需微调即可在多种LLM上实现更低困惑度。",
    "creator": "Jiangfeng Chen, Xinyu Wang, Tianshuo Yan, Hanwei Wu, Xiao-Wen Chang, Yang Zhang, Lei Ding",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "利用外生结构实现样本高效强化学习",
    "link": "https://arxiv.org/abs/2409.14557",
    "pubdate": "2026-10-02 12:00:00",
    "contentSnippet": "研究Exo-MDPs，建立与离散MDP及线性混合MDP的表示等价，刻画小有效维度下的极小极大遗憾。",
    "creator": "Jia Wan, Sean R. Sinclair, Devavrat Shah, Martin J. Wainwright",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "线性系统辨识中的最优中心主动激励",
    "link": "https://arxiv.org/abs/2604.05518",
    "pubdate": "2026-10-02 12:00:00",
    "contentSnippet": "论文提出基于最小二乘和半定规划的主动学习算法，实现最优中心噪声激励，达到最小样本复杂度并匹配下界。",
    "creator": "Kaito Ito, Alexandre Proutiere",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "正未标记数据下的部分AUC最大化",
    "link": "https://arxiv.org/abs/2610.00284",
    "pubdate": "2026-10-02 12:00:00",
    "contentSnippet": "提出在仅有正例和未标记数据下最大化部分AUC的方法，无需负例，适用于网络安全、医疗和广告等场景。",
    "creator": "Atsutoshi Kumagai, Tomoharu Iwata, Taishi Nishiyama, Hiroshi Takahashi, Kazuki Adachi, Yasuhiro Fujiwara",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "非凸-凹极小极大优化中带方差缩减的随机一阶算法下界",
    "link": "https://arxiv.org/abs/2610.01662",
    "pubdate": "2026-10-02 12:00:00",
    "contentSnippet": "研究带方差缩减的随机一阶算法在非凸-凹极小极大优化中的复杂度下界，扩展了零尊重算法类的下界结果。",
    "creator": "Jiayi Song, Zi Xu",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "案例与单元稳健的张量对张量回归",
    "link": "https://arxiv.org/abs/2603.25911",
    "pubdate": "2026-10-02 12:00:00",
    "contentSnippet": "论文提出ROTOT方法，同时处理案例和单元异常值，并应对缺失值，使用单一损失函数降低异常值影响。",
    "creator": "Mehdi Hirari, Fabio Centofanti, Mia Hubert, Stefan Van Aelst",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "Wasserstein梯度流与前向扩散不足以实现多模态采样",
    "link": "https://arxiv.org/abs/2610.02081",
    "pubdate": "2026-10-02 12:00:00",
    "contentSnippet": "研究指出WGF和前向扩散采样动态共享密度演化，继承亚稳态和慢混合现象，难以高效采样多模态分布。",
    "creator": "Daniel McBride, Pratik Khandagale, Cristina Garcia-Cardona, Yen Ting Lin",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "FAER：面向语言模型后训练的可审计效用对齐轨迹回放",
    "link": "https://arxiv.org/abs/2610.00385",
    "pubdate": "2026-10-02 12:00:00",
    "contentSnippet": "提出FAER框架，通过可审计全轨迹回放和效用感知选择器，弥合缓存选择与下游学习效用之间的差距。",
    "creator": "Miaobo Hu, Shuhao Hu, Xiaobo Guo, Xin Wang, Bokun Wang, Tianshu Fu, Daren Zha, Jun Xiao",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "无需模型：文本熵率过滤缓解迭代微调崩溃",
    "link": "https://arxiv.org/abs/2610.01493",
    "pubdate": "2026-10-02 12:00:00",
    "contentSnippet": "提出基于Kontoyiannis熵率估计的文本过滤方法，无需模型即可缓解迭代微调中的模型崩溃。",
    "creator": "Lewis Mitchell",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "CHOIR：跨驾驶员安全分层的碰撞伤害严重度异质性感知共形预测",
    "link": "https://arxiv.org/abs/2609.11592",
    "pubdate": "2026-10-02 12:00:00",
    "contentSnippet": "提出CHOIR认证层，结合分组与加权共形预测及风险控制，为伤害严重度模型提供有限样本覆盖保证。",
    "creator": "Amir Rafe, Subasish Das",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "基于AI学习表示的实用DML",
    "link": "https://arxiv.org/abs/2610.01935",
    "pubdate": "2026-10-02 12:00:00",
    "contentSnippet": "研究AI学习表示用于因果分析的有效性，提出交叉拟合DML框架并分析表示误差对因果参数的影响。",
    "creator": "Andres Aradillas Fernandez, Victor Chernozhukov, Carlos Cinelli, Sven Klaassen, Whitney Newey, Martin Spindler, Jan Teichert-Kluge, Suhas Vijaykumar",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "FERPO：前向熵正则化策略优化",
    "link": "https://arxiv.org/abs/2610.02198",
    "pubdate": "2026-10-02 12:00:00",
    "contentSnippet": "提出FERPO算法，利用评论家值而不对其动作求导进行策略改进，通过前向KL拟合目标动作分布。",
    "creator": "Sebastian Sanokowski, Alireza Sarmadi, Majid Khadiv",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "深度特征选择的可证明FDR控制：深度MLP及更广",
    "link": "https://arxiv.org/abs/2512.04696",
    "pubdate": "2026-10-02 12:00:00",
    "contentSnippet": "提出深度神经网络特征选择框架，首次在一般深度学习设定下提供FDR控制理论保证，支持多种架构。",
    "creator": "Kazuma Sawaya",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "用指数加权签名扩展状态空间模型",
    "link": "https://arxiv.org/abs/2603.19198",
    "pubdate": "2026-10-02 12:00:00",
    "contentSnippet": "提出指数加权签名EWS，证明其满足线性控制微分方程与并行扫描，可闭式映射Mamba等SSM。",
    "creator": "Alexandre Bloch, Benjamin Walker, Jo\\\"el Mouterde, Sam Morley, Samuel N. Cohen, Terry Lyons",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "自适应保形预测用于图像回归模型及惯性约束聚变仿真器应用",
    "link": "https://arxiv.org/abs/2610.00535",
    "pubdate": "2026-10-02 12:00:00",
    "contentSnippet": "提出ACPNN自适应保形预测框架，为图像回归提供输入依赖的不确定性估计，应用于聚变仿真器。",
    "creator": "Carrie J. Lei-Cramer, Michael S. Jones, Laura J. Wendelberger",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "IQS-BO：贝叶斯优化的上下文查询选择",
    "link": "https://arxiv.org/abs/2610.01269",
    "pubdate": "2026-10-02 12:00:00",
    "contentSnippet": "提出IQS-BO，一种基于PFN的上下文查询选择方法，用于贝叶斯优化，避免采集函数最大化。",
    "creator": "Luca Geminiani, Nadja Klein",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "斜对称分布及其在蒙特卡洛采样算法中的应用：无坐标、Gibbs风格和流形版本的Barker提议",
    "link": "https://arxiv.org/abs/2610.01448",
    "pubdate": "2026-10-02 12:00:00",
    "contentSnippet": "综述Barker提议，提出无坐标、Gibbs风格和流形版本，提升相关目标采样效率与鲁棒性。",
    "creator": "Minh Vu, Samuel Livingstone, Pantelis Samartsidis",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "非马尔可夫决策过程中的精确可区分性",
    "link": "https://arxiv.org/abs/2610.01527",
    "pubdate": "2026-10-02 12:00:00",
    "contentSnippet": "研究RDP中行为策略下数据可区分性，证明后验几率不变，提出PEC算法线性时间判定等价性。",
    "creator": "Kabir Murjani, Nisarg Patel",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "上下文线性优化中遗憾的曲率",
    "link": "https://arxiv.org/abs/2610.01980",
    "pubdate": "2026-10-02 12:00:00",
    "contentSnippet": "证明决策聚焦学习中优化器不连续在数据分布平均后局部变为二次，并给出曲率的闭式表达与近似。",
    "creator": "Konstantinos Ziliaskopoulos, Alexander Vinel, Alice E. Smith",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "基于流匹配的反事实生成：耦合敏感的端到端速率",
    "link": "https://arxiv.org/abs/2610.01193",
    "pubdate": "2026-10-02 12:00:00",
    "contentSnippet": "提出流匹配方法，结合双稳健训练与学习耦合，实现反事实生成，并给出耦合敏感的KL误差界。",
    "creator": "Yunrui Guan, Krishnakumar Balasubramanian, Shiva Prasad Kasiviswanathan",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "单指标目标的上下文学习：核学习器与特征学习器对比",
    "link": "https://arxiv.org/abs/2610.01712",
    "pubdate": "2026-10-02 12:00:00",
    "contentSnippet": "比较两种单层注意力架构在单指标任务上的上下文学习，用复制方法推导记忆与泛化误差预测。",
    "creator": "Haotian Gu, Yizhou Xu, Lenka Zdeborov\\'a",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "可迁移图元网络",
    "link": "https://arxiv.org/abs/2610.00420",
    "pubdate": "2026-10-02 12:00:00",
    "contentSnippet": "提出可迁移图元网络，通过不变性与连续性修改，使元网络性能可跨不同宽度神经网络迁移。",
    "creator": "Yuxin Ma, Adir Dayan, Yam Eitan, Haggai Maron, Soledad Villar",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "同策略蒸馏的无偏Top-k估计",
    "link": "https://arxiv.org/abs/2609.34447",
    "pubdate": "2026-10-02 12:00:00",
    "contentSnippet": "论文提出同策略蒸馏中反向KL梯度的无偏Top-k估计方法，平衡计算成本与分布监督。",
    "creator": "Linjian Meng, Siyuan Gan, YuHan Li, Xiran Wang, Ziyang Ding, Ditang Gou, Yiming Wu, Zhen Zhao",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "用切换线性动力系统推断多时间尺度神经动力学",
    "link": "https://arxiv.org/abs/2610.01786",
    "pubdate": "2026-10-02 12:00:00",
    "contentSnippet": "提出多时间尺度切换线性动力系统，从高维神经记录中识别随行为变化的多时间尺度动态。",
    "creator": "Lulu Gong, Yongxu Zhang, Shreya Saxena",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "BalLOT：基于最优传输的平衡k均值聚类",
    "link": "https://arxiv.org/abs/2512.05926",
    "pubdate": "2026-10-02 12:00:00",
    "contentSnippet": "提出BalLOT交替最小化方法，证明整数耦合与聚类恢复保证，实验验证快速有效。",
    "creator": "Wenyan Luo, Dustin G. Mixon",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "基于离散扩散的分类马尔可夫随机场样本复杂度界",
    "link": "https://arxiv.org/abs/2610.02128",
    "pubdate": "2026-10-02 12:00:00",
    "contentSnippet": "为局部依赖的分类马尔可夫随机场开发离散扩散学习方法，给出端到端样本复杂度界。",
    "creator": "Shivam Kumar, Nabarun Deb",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "学习电力定价以实现最优需求响应",
    "link": "https://arxiv.org/abs/2610.00755",
    "pubdate": "2026-10-02 12:00:00",
    "contentSnippet": "提出基于神经网络的上下文能源定价算法，将定价建模为Stackelberg博弈，利用平均场解表示学习从上下文特征到可行价格信号的映射，并在美国多城市电网仿真中验证。",
    "creator": "Jing Shang, Mohammad Mehrabi, Xinyang Zhou, Mahmoud Saleh, Andrey Bernstein, Stefan Wager",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "巨正则生成器",
    "link": "https://arxiv.org/abs/2610.00683",
    "pubdate": "2026-10-02 12:00:00",
    "contentSnippet": "提出巨正则生成器（GCG），将玻尔兹曼生成器扩展到巨正则系综，支持变尺寸生成和粒子数分布分解，在Lennard-Jones流体和甲烷吸附中验证。",
    "creator": "Andreas Burger, Malte Franke, Luka Mucko, Kjell Jorner, Alan Aspuru-Guzik",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "SGD方法的精确信息论分析",
    "link": "https://arxiv.org/abs/2610.00446",
    "pubdate": "2026-10-02 12:00:00",
    "contentSnippet": "从信息论角度精确分析随机梯度下降及其变体，将预条件SGD步视为高斯贝叶斯后验均值更新，并分解单步遗憾为内在时间成本和比较器信息变化。",
    "creator": "Akshay Balsubramani",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "超越测地凸性的Wasserstein近端算法收敛分析",
    "link": "https://arxiv.org/abs/2501.14993",
    "pubdate": "2026-10-02 12:00:00",
    "contentSnippet": "论文在无需测地凸性假设下分析Wasserstein近端算法收敛性，在Polyak-Łojasiewicz条件下获得无偏线性收敛率。",
    "creator": "Shuailong Zhu, Xiaohui Chen",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "异方差规范多态张量分解",
    "link": "https://arxiv.org/abs/2610.00498",
    "pubdate": "2026-10-02 12:00:00",
    "contentSnippet": "提出异方差CP分解（HCP），用非常数低秩精度张量建模逐项方差，并开发交替块坐标上升法，在合成实验和EEG应用中验证有效性。",
    "creator": "Kyle Ritscher, Carlos Llosa-Vite",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "面向预训练模型的几何感知自适应方法",
    "link": "https://arxiv.org/abs/2307.12226",
    "pubdate": "2026-10-02 12:00:00",
    "contentSnippet": "研究提出用Fréchet均值替代argmax的即插即用预测规则，无需额外训练即可让预训练模型适配新类别并提升零样本性能。",
    "creator": "Nicholas Roberts, Xintong Li, Dyah Adila, Sonia Cromp, Tzu-Heng Huang, Jitian Zhao, Frederic Sala",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "DAG ReLU网络路径提升雅可比矩阵的秩与计算",
    "link": "https://arxiv.org/abs/2609.18682",
    "pubdate": "2026-10-02 12:00:00",
    "contentSnippet": "论文给出DAG ReLU网络路径提升雅可比矩阵秩的自包含归纳证明，并借助骨架矩阵提出无需反向传播的高效计算方法。",
    "creator": "Manon Verbockhaven (OCKHAM)",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "加权数据选择：锐利上半与五维定律",
    "link": "https://arxiv.org/abs/2610.00101",
    "pubdate": "2026-10-02 12:00:00",
    "contentSnippet": "论文证明加权最小二乘中风险精确定律Γ_d(n)=3-n/d，覆盖所有特征秩，并用Lean 4验证上界与紧性。",
    "creator": "Zhongxuan Liu, Hongzhi Wang",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "Bernoulli Bandits中β-EB-TCI惩罚挑战者的精确非渐近分析",
    "link": "https://arxiv.org/abs/2610.01951",
    "pubdate": "2026-10-02 12:00:00",
    "contentSnippet": "对Bernoulli Bandits的β-EB-TCI算法进行精确非渐近分析，证明停止时间及挑战者采样频率。",
    "creator": "Nam Nguyen, Tuan Quang Dam",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "连续时间fMRI表示学习的随机最优控制",
    "link": "https://arxiv.org/abs/2502.04892",
    "pubdate": "2026-10-02 12:00:00",
    "contentSnippet": "研究将自监督学习重构为随机最优控制问题，对fMRI连续时间隐动态建模，统一MAE与JEPA以提取鲁棒脑表示。",
    "creator": "Joonhyeong Park, Byoungwoo Park, Chang-Bae Bang, Jungwon Choi, Hyungjin Chung, Byung-Hoon Kim, Juho Lee",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "三角传输的多保真度公式",
    "link": "https://arxiv.org/abs/2610.00698",
    "pubdate": "2026-10-02 12:00:00",
    "contentSnippet": "提出多保真度方法，利用丰富低保真数据构建三角传输映射，以逼近稀缺高保真目标分布，并比较分层与非分层策略。",
    "creator": "Owen Davis, Daniel Sharp, Youssef Marzouk, Gianluca Geraci",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "面向目标条件强化学习的学习多时间尺度",
    "link": "https://arxiv.org/abs/2610.00849",
    "pubdate": "2026-10-02 12:00:00",
    "contentSnippet": "提出广义隐式时间抽象GITA，让单一价值函数以k为条件，聚合多k优势加权监督，缓解长程任务信号消失问题。",
    "creator": "Pedro Robles Dutenhefner, Dikshant Shehmar, Wagner Meira Jr., Marlos C. Machado",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "延迟物理系统驱动因素与动力学的可辨识性保证",
    "link": "https://arxiv.org/abs/2609.37944",
    "pubdate": "2026-10-02 12:00:00",
    "contentSnippet": "研究提出理论方法，证明在宽松假设下随机延迟微分方程的结构驱动因素与漂移项可辨识，并在基准上优于现有方法。",
    "creator": "Julien Boussard, Antoine Debouchage, Th\\'{e}o Saulus",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "最小注意力的元强化学习",
    "link": "https://arxiv.org/abs/2505.16741",
    "pubdate": "2026-10-02 12:00:00",
    "contentSnippet": "研究将最小注意力正则引入强化学习奖励，结合基于模型的元学习，在高维非线性动力学中提升少样本快速适应能力。",
    "creator": "Shashank Gupta, Pilhwa Lee",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "可扩展多任务逆强化学习",
    "link": "https://arxiv.org/abs/2610.00758",
    "pubdate": "2026-10-02 12:00:00",
    "contentSnippet": "提出多任务逆强化学习方法，在低秩假设下汇集多智能体数据，降低覆盖要求并实现新环境下多任务可扩展评估。",
    "creator": "Allen Tran, Jia Wan, Nathan Kallus, Aur\\'elien Bibaut",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "三阶Langevin动力学的全局收敛性研究",
    "link": "https://arxiv.org/abs/2609.28611",
    "pubdate": "2026-10-02 12:00:00",
    "contentSnippet": "论文研究三阶Langevin动力学在非凸优化中的全局收敛性，通过模拟退火实现，并给出离散化步长条件。",
    "creator": "Yingli Wang, Lingjiong Zhu",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "面向无分类器引导扩散激活量化的联合分支空间变换编码",
    "link": "https://arxiv.org/abs/2610.00930",
    "pubdate": "2026-10-02 12:00:00",
    "contentSnippet": "发现匹配的CFG激活形成强相关二维源，提出分支空间变换编码，通过离线2x2正交旋转提升量化保真度。",
    "creator": "Mingrun Jiang, Yuejia Liu, Zishan Shao, Ting Jiang, Qinsi Wang, Hancheng Ye, Yixiao Wang, Rui-Feng Wang, Kangning Cui, Yixuan Chen, Fan Yang, Xiang Cheng, Hai Li, Yiran Chen",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "交互动力系统的旋转平移局部坐标系",
    "link": "https://arxiv.org/abs/2110.14961",
    "pubdate": "2026-10-02 12:00:00",
    "contentSnippet": "论文提出为几何图每个节点对象构建局部坐标系，以引入旋转平移不变性，提升交互动力系统建模的泛化能力。",
    "creator": "Miltiadis Kofinas, Naveen Shankar Nagaraja, Efstratios Gavves",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "多用户毫米波波束与速率自适应：组合满意赌博机方法",
    "link": "https://arxiv.org/abs/2604.14908",
    "pubdate": "2026-10-02 12:00:00",
    "contentSnippet": "研究多用户毫米波MISO系统下行波束与速率自适应，提出SAT-CTS策略，首次给出有限时间遗憾界。",
    "creator": "Emre \\\"Ozy{\\i}ld{\\i}r{\\i}m, Bar{\\i}\\c{s} Yayc{\\i}, Umut Eren Akturk, Cem Tekin",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "局部覆盖学习：硬信息视野下的图神经组合优化",
    "link": "https://arxiv.org/abs/2610.00422",
    "pubdate": "2026-10-02 12:00:00",
    "contentSnippet": "研究硬信息视野下组合优化，形式化为局部集合覆盖，并证明单跳短视野选择器的覆盖失败或近似因子下界。",
    "creator": "Johannes F. Loevenich, Thies Moehlenhof, Laurin Holz, Maxime Schwarzer, Tobias Huerten, Roberto Rigolin F. Lopes",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "信噪分解将干扰变异隔离至可移除子空间",
    "link": "https://arxiv.org/abs/2610.00751",
    "pubdate": "2026-10-02 12:00:00",
    "contentSnippet": "通过正则化强化信噪分解与信号-信号分解，在CIFAR-100上发现仅增强信噪分解可提升模型性能。",
    "creator": "Sakin Kirti, Joel Zylberberg",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "柏拉图式任务算术",
    "link": "https://arxiv.org/abs/2610.00929",
    "pubdate": "2026-10-02 12:00:00",
    "contentSnippet": "提出通用任务描述符，以与架构无关的矩阵记录任务功能效果，实现跨模型架构的任务向量迁移与加减操作。",
    "creator": "Junghwan Park, Woojin Cho",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "梯度引导密度峰值聚类",
    "link": "https://arxiv.org/abs/2610.01050",
    "pubdate": "2026-10-02 12:00:00",
    "contentSnippet": "提出GGDPC，在最近邻上坡搜索前执行梯度上升，建立稳定性理论并证明其与总体密度梯度流的一致性。",
    "creator": "Yikun Zhang, Yen-Chi Chen",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "多最优臂老虎机：极小极大遗憾与非自适应性",
    "link": "https://arxiv.org/abs/2609.38659",
    "pubdate": "2026-10-02 12:00:00",
    "contentSnippet": "研究多最优臂老虎机问题，给出更紧的极小极大遗憾上界与匹配下界，并证明近最优算法需已知最优臂数量。",
    "creator": "Kaixuan Ji, Qiwei Di, Qingyue Zhao, Heyang Zhao, Quanquan Gu",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "关于Forré的条件独立概念与连续变量因果演算的注记",
    "link": "https://arxiv.org/abs/2603.24333",
    "pubdate": "2026-10-02 12:00:00",
    "contentSnippet": "论文阐述Forré的过渡条件独立框架，讨论其动机与文献联系，并扩展ID算法到一般测度论设定。",
    "creator": "Leihao Chen",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "CASCADE共形预测：面向两阶段临床决策支持的不确定性自适应预测区间",
    "link": "https://arxiv.org/abs/2605.20468",
    "pubdate": "2026-10-02 12:00:00",
    "contentSnippet": "提出CASCADE共形预测框架，传播认知不确定性以自适应生成预测区间，用于帕金森病药物管理。",
    "creator": "Ricardo Diaz-Rincon, Muxuan Liang, Adolfo Ramirez-Zamora, Benjamin Shickel",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "超越设计效应：聚类下阈值的有效样本量",
    "link": "https://arxiv.org/abs/2608.21262",
    "pubdate": "2026-10-02 12:00:00",
    "contentSnippet": "证明分组使阈值比例的大样本方差乘以1+(m-1)ρ_I(p)，给出直接证明与不等组扩展。",
    "creator": "Adam Noonan",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "因果修复的目标依赖极限：高斯模型中的前导对数前沿",
    "link": "https://arxiv.org/abs/2610.00424",
    "pubdate": "2026-10-02 12:00:00",
    "contentSnippet": "在高斯因果实验中量化因果预测器潜在改进与实际修复增益的差距，刻画评估指数前沿。",
    "creator": "Qinchuan Cheng, Jiaqi Liu, Ruixuan Xie",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "英伟达智能体安全平台引发AI自主权治理疑问",
    "link": "https://aibusiness.com/responsible-ai/nvidia-agent-safety-push-raises-questions",
    "pubdate": "2026-10-02 09:38:37",
    "contentSnippet": "英伟达推出智能体安全平台，增加控制措施，但企业仍需自行定义AI权限与边界。",
    "creator": "Kinza Yasar",
    "source": "AI Business",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "微软推出首个流式转录模型，瞄准超真实语音智能体",
    "link": "https://siliconangle.com/2026/10/01/microsoft-targets-ultra-realistic-voice-agents-with-its-first-streaming-transcription-model",
    "pubdate": "2026-10-02 09:31:31",
    "contentSnippet": "微软扩展MAI模型家族，推出首个流式转录模型及两个文本转语音模型，面向语音智能体开发。",
    "creator": "Mike Wheatley",
    "source": "SiliconANGLE AI",
    "category": "模型发布",
    "relevance": 9
  },
  {
    "title": "男子被控非法向中国运送英伟达芯片",
    "link": "https://www.bloomberg.com/news/articles/2026-10-02/man-charged-by-us-with-illegally-shipping-nvidia-chips-to-china",
    "pubdate": "2026-10-02 08:03:06",
    "contentSnippet": "加州男子因涉嫌违反美国出口管制，走私价值3亿美元英伟达AI芯片服务器至中国被捕。",
    "creator": "Michael Shepard",
    "source": "Bloomberg Technology",
    "category": "安全监管",
    "relevance": 9
  },
  {
    "title": "Anthropic计划感恩节前IPO",
    "link": "https://siliconangle.com/2026/10/01/report-anthropic-targets-pre-thanksgiving-ipo-launch-despite-warning-of-ais-existential-risks",
    "pubdate": "2026-10-02 07:43:54",
    "contentSnippet": "Anthropic计划11月9日上市，尽管警告AI存在生存风险。",
    "creator": "Mike Wheatley",
    "source": "SiliconANGLE AI",
    "category": "投融资信息",
    "relevance": 9
  },
  {
    "title": "Genie One重塑财务团队工作",
    "link": "https://www.databricks.com/blog/how-genie-one-reshapes-work-finance-teams",
    "pubdate": "2026-10-02 06:46:51",
    "contentSnippet": "Databricks的Genie One帮助财务团队解读数据，改变工作方式。",
    "creator": "",
    "source": "Databricks",
    "category": "产品发布",
    "relevance": 6
  },
  {
    "title": "OpenAI解雇三名安全研究员",
    "link": "https://siliconangle.com/2026/10/01/openai-dismisses-three-safety-researchers-accused-of-sharing-confidential-material",
    "pubdate": "2026-10-02 06:31:38",
    "contentSnippet": "OpenAI解雇三名安全研究员，称其泄露敏感信息给第三方。",
    "creator": "Duncan Riley",
    "source": "SiliconANGLE AI",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "AI安全不能靠自我监管",
    "link": "https://www.wired.com/story/whatever-ai-safety-looks-like-its-not-this",
    "pubdate": "2026-10-02 06:10:42",
    "contentSnippet": "评论指出要求AI公司自我监管只是假装有所作为。",
    "creator": "Brian Barrett",
    "source": "Wired AI",
    "category": "安全监管",
    "relevance": 7
  },
  {
    "title": "AI行业问题：多数人不想AI代理掌控生活",
    "link": "https://futurism.com/artificial-intelligence/ai-industry-problem-agent-running-life",
    "pubdate": "2026-10-02 05:55:00",
    "contentSnippet": "AI公司未赢得信任，多数人不愿AI代理管理整个生活。",
    "creator": "Victor Tangermann",
    "source": "Futurism AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "马斯克AI聊天机器人Grok被曝曾鼓励特朗普抓捕委内瑞拉总统",
    "link": "https://techcrunch.com/2026/10/01/musks-ai-chatbot-grok-reportedly-encouraged-trump-to-capture-venezuelas-president",
    "pubdate": "2026-10-02 05:08:11",
    "contentSnippet": "据报道，特朗普在入侵委内瑞拉并抓捕马杜罗前曾征求Grok意见，Grok鼓励其行动。",
    "creator": "Dominic-Madori Davis",
    "source": "TechCrunch AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "男子因分享AI垃圾信息引发大规模恐慌面临最高三年监禁",
    "link": "https://futurism.com/artificial-intelligence/singapore-man-ai-slop-misinformation-three-years-prison-panic",
    "pubdate": "2026-10-02 04:57:16",
    "contentSnippet": "一名男子分享AI生成的虚假信息导致公众恐慌，可能被判三年监禁。",
    "creator": "Joe Wilkins",
    "source": "Futurism AI",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "一个月内两家联邦机构遭黑客攻击，大量敏感数据泄露",
    "link": "https://arstechnica.com/security/2026/10/hacks-of-2-federal-agencies-in-a-month-have-spilled-a-bonanza-of-sensitive-data",
    "pubdate": "2026-10-02 04:28:45",
    "contentSnippet": "美国联邦政府网络安全遭遇糟糕一月，两家机构被黑导致大量敏感数据外泄。",
    "creator": "Dan Goodin",
    "source": "Ars Technica",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "法官驳回Chegg和Penske针对谷歌AI搜索的反垄断诉讼",
    "link": "https://arstechnica.com/google/2026/10/antitrust-lawsuits-targeting-google-ai-search-dismissed-by-federal-judge",
    "pubdate": "2026-10-02 04:11:55",
    "contentSnippet": "法院承认AI搜索带来影响，但认为不构成反垄断问题，驳回诉讼。",
    "creator": "Ryan Whitwam",
    "source": "Ars Technica",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "IBM允许其Bob代理开发平台本地部署",
    "link": "https://siliconangle.com/2026/10/01/ibm-allows-on-prem-deployment-of-its-bob-agentic-development-platform",
    "pubdate": "2026-10-02 03:49:51",
    "contentSnippet": "IBM宣布其代理软件开发平台Bob支持本地、私有云、主权云和气隙环境部署。",
    "creator": "Paul Gillin",
    "source": "SiliconANGLE AI",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "NetApp迎来“沉睡巨人”时刻，AI带来新数据买家",
    "link": "https://siliconangle.com/2026/10/01/data-infrastructure-draws-new-buyers-netapp-ai-pitch-netappinsight",
    "pubdate": "2026-10-02 03:43:52",
    "contentSnippet": "AI将数据基础设施推向台前，NetApp借此向新买家重新讲述其存储故事。",
    "creator": "Jonathan Anthony",
    "source": "SiliconANGLE AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "ChatGPT现在可以为你虚拟试穿衣服",
    "link": "https://techcrunch.com/2026/10/01/chatgpt-can-now-virtually-try-on-clothes-for-you",
    "pubdate": "2026-10-02 03:21:53",
    "contentSnippet": "OpenAI为ChatGPT推出新购物功能，用户可用照片虚拟试穿服饰并保存商品。",
    "creator": "Sarah Perez",
    "source": "TechCrunch AI",
    "category": "产品发布",
    "relevance": 9
  },
  {
    "title": "谷歌认为SpaceX星舰需发射1800次才能让太空数据中心起步",
    "link": "https://techcrunch.com/2026/10/01/google-thinks-spacexs-starship-has-to-launch-1600-times-before-space-data-centers-get-off-the-ground",
    "pubdate": "2026-10-02 03:18:03",
    "contentSnippet": "谷歌将首款先进芯片送入轨道，为太空数据中心铺路，但认为星舰需发射1800次。",
    "creator": "Tim Fernholz",
    "source": "TechCrunch AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "常驻AI代理将基础设施转变为持续学习循环",
    "link": "https://siliconangle.com/2026/10/01/cognition-scales-ai-agent-infrastructure-coreweave-fullyconnected",
    "pubdate": "2026-10-02 03:12:01",
    "contentSnippet": "AI代理基础设施正演进以支持推理、反馈和训练的持续循环，Cognition AI的Devin已覆盖软件开发生命周期。",
    "creator": "Victoria Gayton",
    "source": "SiliconANGLE AI",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "加州就流氓代理黑客事件向OpenAI发出调查传票",
    "link": "https://www.theguardian.com/us-news/2026/oct/01/california-opens-investigation-openai-hack",
    "pubdate": "2026-10-02 03:01:55",
    "contentSnippet": "加州总检察长办公室对OpenAI发出调查传票，调查其AI模型潜在网络安全漏洞及事件。",
    "creator": "Reuters",
    "source": "The Guardian AI",
    "category": "安全监管",
    "relevance": 9
  },
  {
    "title": "NetApp与英伟达重新思考AI工厂存储",
    "link": "https://siliconangle.com/2026/10/01/netapp-targets-ai-factory-storage-architecture-netappinsight",
    "pubdate": "2026-10-02 02:46:42",
    "contentSnippet": "NetApp与英伟达合作，针对AI工厂重写存储架构，应对大量数据移动和事务性元数据活动。",
    "creator": "Chad Wilson",
    "source": "SiliconANGLE AI",
    "category": "产品发布",
    "relevance": 6
  },
  {
    "title": "扎克伯格或无意中让公司走向自杀",
    "link": "https://futurism.com/artificial-intelligence/zuckerberg-meta-accidental-corporate-suicide-hyperscale-ai",
    "pubdate": "2026-10-02 01:51:03",
    "contentSnippet": "有评论称扎克伯格在AI领域的巨额投入可能是史上最大资本错配，或无意中让公司走向自杀。",
    "creator": "Joe Wilkins",
    "source": "Futurism AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "Shopify推出Canvas，可通过AI聊天建店",
    "link": "https://techcrunch.com/2026/10/01/shopify-debuts-canvas-a-way-to-build-online-stores-by-chatting-with-ai",
    "pubdate": "2026-10-02 00:44:35",
    "contentSnippet": "Shopify推出Canvas建站工具，商家可通过与AI助手Sidekick聊天实时创建和定制网店。",
    "creator": "Sarah Perez",
    "source": "TechCrunch AI",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "Instagram新AI助手分析Reels并建议创作方向",
    "link": "https://www.techrepublic.com/article/news-instagram-edits-ai-performance-content-ideas",
    "pubdate": "2026-10-02 00:26:13",
    "contentSnippet": "Meta在Instagram Edits中加入AI助手，分析Reel表现数据并建议新内容创意、钩子、标题和脚本。",
    "creator": "Joseph Ofonagoro",
    "source": "TechRepublic AI",
    "category": "产品发布",
    "relevance": 6
  },
  {
    "title": "AWS推出Strands Decider 2B轻量级决策模型",
    "link": "https://siliconangle.com/2026/10/01/aws-debuts-strands-decider-2b-a-first-lightweight-decision-model-for-accelerate-agentic-workflows",
    "pubdate": "2026-10-02 00:00:34",
    "contentSnippet": "AWS旗下Strands Labs发布开源决策模型Strands Decider 2B，旨在加速智能体工作流，为开源社区提供轻量级AI决策系统。",
    "creator": "Mike Wheatley",
    "source": "SiliconANGLE AI",
    "category": "模型发布",
    "relevance": 8
  },
  {
    "title": "DoorDash测试AI代理短信订餐",
    "link": "https://www.techrepublic.com/article/news-doordash-ai-text-message-food-orders",
    "pubdate": "2026-10-01 23:15:11",
    "contentSnippet": "DoorDash正在测试AI代理，可通过短信将文本转化为外卖订单，利用账户历史和偏好处理常规购买。",
    "creator": "Joseph Ofonagoro",
    "source": "TechRepublic AI",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "Brian Chesky访谈：AI代理需要自己的操作系统",
    "link": "https://techcrunch.com/2026/10/01/brian-chesky-interview-ai-agents-need-their-own-operating-system",
    "pubdate": "2026-10-01 23:12:00",
    "contentSnippet": "Airbnb CEO Brian Chesky谈论让Airbnb对代理友好、消费者AI现状，以及为何世界需要AI原生操作系统。",
    "creator": "Ivan Mehta",
    "source": "TechCrunch AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "何恺明团队新作：看猫片就能学会ARC挑战",
    "link": "https://www.qbitai.com/2026/10/499812.html",
    "pubdate": "2026-10-01 23:06:30",
    "contentSnippet": "何恺明团队利用ImageNet训练encoder，使模型通过观看猫片学会ARC挑战。",
    "creator": "鹭羽",
    "source": "量子位",
    "category": "技术论文",
    "relevance": 9
  },
  {
    "title": "谷歌Gemini 4突然发布！RSI加持，GPT和Opus都让让",
    "link": "https://www.qbitai.com/2026/10/499663.html",
    "pubdate": "2026-10-01 23:02:14",
    "contentSnippet": "谷歌突然发布Gemini 4，据称有RSI加持，性能超越GPT和Opus，价格仅为Astra一半。",
    "creator": "鹭羽",
    "source": "量子位",
    "category": "模型发布",
    "relevance": 10
  },
  {
    "title": "Anthropic推动澳大利亚内容选择退出模式",
    "link": "https://www.theguardian.com/technology/2026/oct/02/anthropic-ai-opt-out-australia-copyright-abc-cannibalisation-of-news",
    "pubdate": "2026-10-01 23:00:53",
    "contentSnippet": "Anthropic敦促澳大利亚政府考虑采用选择退出模式，允许大科技公司训练模型使用澳版权作品，ABC和SBS警告新闻被蚕食。",
    "creator": "Josh Butler",
    "source": "The Guardian AI",
    "category": "安全监管",
    "relevance": 7
  },
  {
    "title": "AI律所Arceus Legal融资1700万美元",
    "link": "https://siliconangle.com/2026/10/01/ai-driven-law-firm-arceus-legal-raises-17m-to-move-beyond-contract-work",
    "pubdate": "2026-10-01 23:00:00",
    "contentSnippet": "AI驱动的律所Arceus Legal融资1700万美元，旨在扩展商业合同工作以外的服务，由持证律师借助AI审批每项工作。",
    "creator": "Duncan Riley",
    "source": "SiliconANGLE AI",
    "category": "投融资信息",
    "relevance": 8
  },
  {
    "title": "Metaview 融资6000万美元，开发AI招聘代理",
    "link": "https://www.techrepublic.com/article/news-metaview-60m-ai-recruiting-agents",
    "pubdate": "2026-10-01 22:50:31",
    "contentSnippet": "Metaview 获6000万美元融资，用于扩展AI招聘平台及自主代理fillmore，覆盖人才搜寻、筛选和招聘流程。",
    "creator": "Aminu Abdullahi",
    "source": "TechRepublic AI",
    "category": "投融资信息",
    "relevance": 8
  }
];
