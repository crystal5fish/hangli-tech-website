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
export const newsDate = "2026-08-05";
export const newsItems: NewsItem[] = [
  {
    "title": "中信证券：AI叙事证伪，美股软件板块估值修复",
    "link": "https://36kr.com/newsflashes/3925919120259207?f=rss",
    "pubdate": "2026-08-05 09:14:17",
    "contentSnippet": "中信证券研报指出，AI吞噬软件叙事被证伪，传统软件厂商壁垒仍在，AI收入占比提升有望推动估值修复。",
    "creator": "",
    "source": "36氪",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "哲源科技完成近2亿元A2轮融资",
    "link": "https://36kr.com/newsflashes/3925940167325829?f=rss",
    "pubdate": "2026-08-05 09:12:51",
    "contentSnippet": "哲源科技获近2亿元A2轮融资，由圣湘生物领投，用于AI4S平台升级和全球资产布局。",
    "creator": "",
    "source": "36氪",
    "category": "投融资信息",
    "relevance": 8
  },
  {
    "title": "AI应用向实向深，商业化价值闭环正在形成",
    "link": "https://36kr.com/newsflashes/3925916589881476?f=rss",
    "pubdate": "2026-08-05 09:06:46",
    "contentSnippet": "AI应用下沉至多场景，从技术验证迈入收入兑现，商业化闭环正在形成。",
    "creator": "",
    "source": "36氪",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "华泰证券：关注AI应用和国产模型两条主线",
    "link": "https://36kr.com/newsflashes/3925914734066049?f=rss",
    "pubdate": "2026-08-05 09:00:51",
    "contentSnippet": "华泰证券研报称，大模型降价推动竞争转向成本，建议关注AI应用和国产模型。",
    "creator": "",
    "source": "36氪",
    "category": "行业动态",
    "relevance": 9
  },
  {
    "title": "科技新贵下场做VC，产业资本激活创新资本正循环",
    "link": "https://36kr.com/newsflashes/3925914179942529?f=rss",
    "pubdate": "2026-08-05 08:58:20",
    "contentSnippet": "沐曦股份等科技公司设立基金投资一级市场，形成产业资本新循环。",
    "creator": "",
    "source": "36氪",
    "category": "投融资信息",
    "relevance": 6
  },
  {
    "title": "谷歌课堂Gemini扩展至全年龄段学生",
    "link": "https://36kr.com/newsflashes/3925901230356614?f=rss",
    "pubdate": "2026-08-05 08:52:09",
    "contentSnippet": "谷歌宣布自2026年8月10日起，Google Classroom中的Gemini功能向全年龄段学生开放，新增情境化引导提示，支持学习工具生成。",
    "creator": "",
    "source": "36氪",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "AMD高管称开源软件是对抗英伟达的关键优势",
    "link": "https://www.businessinsider.com/amd-q2-2026-earnings-open-source-key-advantage-nvidia-2026-8",
    "pubdate": "2026-08-05 08:44:52",
    "contentSnippet": "AMD高管表示，公司的开源软件是竞争英伟达的关键优势，有助于加速AI芯片开发。",
    "creator": "Rosalie Chan",
    "source": "Business Insider",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "OpenAI披露第三方测试越界事件，模型误连公网",
    "link": "https://36kr.com/newsflashes/3925895163885959?f=rss",
    "pubdate": "2026-08-05 08:36:00",
    "contentSnippet": "OpenAI在第三方安全评估中，模型因配置错误越界接入公网，已叫停测试并封堵，未造成实质影响。",
    "creator": "",
    "source": "36氪",
    "category": "安全监管",
    "relevance": 9
  },
  {
    "title": "白宫与OpenAI、谷歌、Anthropic讨论AI监管框架",
    "link": "https://www.businessinsider.com/openai-google-and-anthropic-white-house-meeting-biggest-questions-2026-8",
    "pubdate": "2026-08-05 07:26:26",
    "contentSnippet": "OpenAI、Anthropic和谷歌在华盛顿会面，审查特朗普政府的AI监管框架，涉及网络安全和监管问题。",
    "creator": "Stephen Council",
    "source": "Business Insider",
    "category": "安全监管",
    "relevance": 9
  },
  {
    "title": "研究：AI生成故事质量优于人类写作",
    "link": "https://www.theguardian.com/technology/2026/aug/05/ai-generated-stories-rated-better-quality-than-human-written-ones-study-finds",
    "pubdate": "2026-08-05 07:01:03",
    "contentSnippet": "研究发现AI生成的故事比人类写的更易读，但并不意味着人类作者过时。",
    "creator": "Nicola Davis Science correspondent",
    "source": "The Guardian AI",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "软银财报考验AI投资热情",
    "link": "https://www.bloomberg.com/news/articles/2026-08-04/softbank-earnings-to-test-appetite-for-ai-bets-beyond-chatgpt",
    "pubdate": "2026-08-05 07:00:00",
    "contentSnippet": "软银集团股价面临考验，投资者寻求其AI价值超越对OpenAI的债务押注的保证。",
    "creator": "Alice French",
    "source": "Bloomberg Technology",
    "category": "投融资信息",
    "relevance": 6
  },
  {
    "title": "Coupang因数据泄露影响亏损扩大",
    "link": "https://www.bloomberg.com/news/articles/2026-08-04/coupang-s-losses-grow-after-fallout-from-data-breach-deepens",
    "pubdate": "2026-08-05 06:21:33",
    "contentSnippet": "Coupang报告亏损超预期，因大规模个人数据泄露在韩国遭重罚，凸显损害。",
    "creator": "Yoolim Lee",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "美股创新高，AI利润丰厚且油价回落",
    "link": "https://www.theguardian.com/business/2026/aug/04/stock-market-records-ai-profits-oil-prices-ease",
    "pubdate": "2026-08-05 04:56:59",
    "contentSnippet": "美股周二创历史新高，标普500涨1.8%，道指涨1.7%，纳指涨2.6%，受AI企业利润和油价回落推动。",
    "creator": "Associated Press",
    "source": "The Guardian AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "管道运营商竞相扩建以应对AI电力需求激增",
    "link": "https://www.bloomberg.com/news/articles/2026-08-04/pipeline-owners-race-to-build-capacity-as-ai-power-demand-jumps",
    "pubdate": "2026-08-05 04:47:42",
    "contentSnippet": "美国管道运营商正竞相扩大产能，为新建数据中心提供电力支持，以应对AI带来的电力需求增长。",
    "creator": "Emma Sanchez",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "OpenAI与美国司法部达成320万美元和解，涉歧视指控",
    "link": "https://www.businessinsider.com/openai-doj-settlement-hiring-us-workers-perm-program-visas-2026-8",
    "pubdate": "2026-08-05 04:36:23",
    "contentSnippet": "OpenAI同意支付320万美元与美国司法部和解，解决关于歧视美国工人的指控，但否认相关说法。",
    "creator": "Brent D. Griffiths",
    "source": "Business Insider",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "得克萨斯州暂停数据中心接入电网以应对需求激增",
    "link": "https://arstechnica.com/ai/2026/08/texas-halts-data-center-connections-to-power-grid-amid-overwhelming-demand",
    "pubdate": "2026-08-05 04:34:28",
    "contentSnippet": "曾称得州为AI“中心”的州长暂停数据中心电网连接。",
    "creator": "Jeremy Hsu",
    "source": "Ars Technica",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "SpaceX是引人注目的投资，Gerber表示",
    "link": "https://www.bloomberg.com/news/videos/2026-08-04/spacex-is-a-compelling-investment-gerber-says-video",
    "pubdate": "2026-08-05 04:29:44",
    "contentSnippet": "SpaceX第二季度营收78亿美元超预期，但AI业务亏损12.6亿美元。Gerber仍认为值得持有。",
    "creator": "",
    "source": "Bloomberg Technology",
    "category": "投融资信息",
    "relevance": 7
  },
  {
    "title": "AMD股价下跌，AI增长前景令投资者失望",
    "link": "https://www.bloomberg.com/news/articles/2026-08-04/amd-sales-outlook-disappoints-investors-after-ai-fueled-rally",
    "pubdate": "2026-08-05 04:19:02",
    "contentSnippet": "AMD因销售前景不佳而下跌，股东期望从AI数据中心扩张中获得更多回报。",
    "creator": "Ian King",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "开放权重AI模型正追赶前沿，安全差距依然存在",
    "link": "https://techcrunch.com/2026/08/04/open-weight-ai-models-are-catching-up-to-the-frontier-the-safety-gap-remains",
    "pubdate": "2026-08-05 04:05:26",
    "contentSnippet": "SaferAI报告发现Z.ai的GLM-5.2接近前沿能力但缺乏安全缓解措施，引发担忧。",
    "creator": "Rebecca Bellan",
    "source": "TechCrunch AI",
    "category": "安全监管",
    "relevance": 9
  },
  {
    "title": "五角大楼反无人机部队推出新在线市场购买防御技术",
    "link": "https://www.businessinsider.com/pentagons-counter-drone-force-online-marketplace-2026-8",
    "pubdate": "2026-08-05 03:55:11",
    "contentSnippet": "五角大楼反无人机部队与Kaizen实验室合作推出新在线市场，用户可根据价格、功能、性能评价和需求查找系统。",
    "creator": "Chris Panella",
    "source": "Business Insider",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "Anthropic与AI云初创公司Volta签署100亿美元协议",
    "link": "https://techcrunch.com/2026/08/04/anthropic-signs-10-billion-deal-with-ai-cloud-startup-volta",
    "pubdate": "2026-08-05 03:48:40",
    "contentSnippet": "Anthropic与AI云初创公司Volta签署100亿美元协议，继续扩大云合作伙伴关系。",
    "creator": "Lucas Ropek",
    "source": "TechCrunch AI",
    "category": "投融资信息",
    "relevance": 9
  },
  {
    "title": "认识Wrinkles：一款揭示周边隐藏故事的应用程序",
    "link": "https://techcrunch.com/2026/08/04/meet-wrinkles-an-ai-app-that-uncovers-the-hidden-stories-of-the-places-around-you",
    "pubdate": "2026-08-05 03:34:34",
    "contentSnippet": "Wrinkles应用在iOS和Android上可用，作为AI驱动的音频导览，揭示隐藏历史和当地故事。",
    "creator": "Aisha Malik",
    "source": "TechCrunch AI",
    "category": "产品发布",
    "relevance": 6
  },
  {
    "title": "众议院小组称数据中心使美国运营商暴露于中国黑客攻击",
    "link": "https://www.bloomberg.com/news/articles/2026-08-04/chinese-telecom-hack-exposed-data-centers-house-report-to-say",
    "pubdate": "2026-08-05 03:22:51",
    "contentSnippet": "美国电信公司连接数据中心的方式存在漏洞，可能导致了Salt Typhoon黑客攻击，众议院委员会表示。",
    "creator": "Kelcee Griffis",
    "source": "Bloomberg Technology",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "2026年科技公司裁员名单：Meta、亚马逊、Visa等",
    "link": "https://www.businessinsider.com/recent-company-layoffs-laying-off-workers-2026",
    "pubdate": "2026-08-05 02:53:22",
    "contentSnippet": "2026年已有超过35家公司裁员，包括Meta、沃尔玛和Visa，受AI和经济环境影响。",
    "creator": "Dominick Reuter,Katherine Li,Shubhangi Goel,Jordan Hart,Roya Shahidi,Aditi Bharade,Brent D. Griffiths,Lloyd Lee,Alex Bitter,Lakshmi Varanasi,Ana Altchek,Madeline Berg,Mary Hanbury,Meghan Morris,Thibault Spirlet,Huileng Tan,Katherine (Tangalakis-Lippert) Ortiz,Ben Shimkus,Georgia Hennessy,Sydney Bradley,Kelsey Vlamis",
    "source": "Business Insider",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "KPMG：亚太地区AI支出增长快于ROI证明",
    "link": "https://www.techrepublic.com/article/news-apac-ai-spending-roi-proof",
    "pubdate": "2026-08-05 01:48:40",
    "contentSnippet": "KPMG称亚太公司大力投资AI，但仅5%已通过业务成果证明投资回报率。",
    "creator": "TechRepublic Staff",
    "source": "TechRepublic AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "特朗普政府拟禁止进口中国数据中心组件",
    "link": "https://www.theguardian.com/technology/2026/aug/04/fcc-ban-china-datacenter-devices",
    "pubdate": "2026-08-05 01:21:33",
    "contentSnippet": "特朗普政府据报起草禁令，禁止进口中国新型数据中心组件，包括光收发器，以应对中国AI发展。",
    "creator": "Nick Robins-Early and agency",
    "source": "The Guardian AI",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "新AI聊天机器人实为一人手动回复所有消息",
    "link": "https://futurism.com/artificial-intelligence/ai-chatbot-one-overworked-guy",
    "pubdate": "2026-08-05 00:59:37",
    "contentSnippet": "新AI聊天机器人被曝背后是一名叫塔克的人手动回复，他清醒且有动力时回复。",
    "creator": "Maggie Harrison Dupré",
    "source": "Futurism AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "微软告知工程师：不追求Tokenmaxxing",
    "link": "https://www.404media.co/microsoft-tells-engineers-tokenmaxxing-is-not-what-we-are-optimizing-for",
    "pubdate": "2026-08-05 00:17:16",
    "contentSnippet": "微软为AI使用引入预算限制，但表示仍要成为AI优先公司，不追求Tokenmaxxing。",
    "creator": "Emanuel Maiberg",
    "source": "404 Media",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "Unity AI网关正式全面可用",
    "link": "https://www.databricks.com/blog/unity-ai-gateway-generally-available",
    "pubdate": "2026-08-05 00:10:09",
    "contentSnippet": "过去六个月AI生产力迅速提升，Unity AI网关现已全面可用。",
    "creator": "",
    "source": "Databricks",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "苹果或于2026年底前推出带摄像头的AirPods",
    "link": "https://www.techrepublic.com/article/news-apple-camera-airpods-2026",
    "pubdate": "2026-08-05 00:03:43",
    "contentSnippet": "苹果可能于2026年底前推出带摄像头的AirPods，利用视觉传感器让Siri更了解用户周围环境。",
    "creator": "Aminu Abdullahi",
    "source": "TechRepublic AI",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "Spotify与Merlin合作扩展AI混音和翻唱项目",
    "link": "https://techcrunch.com/2026/08/04/spotify-adds-merlin-to-its-ai-music-remix-and-covers-effort",
    "pubdate": "2026-08-04 23:50:06",
    "contentSnippet": "Spotify与代表3万多家独立厂牌的Merlin合作，推出AI混音和翻唱付费工具，艺术家可选择加入并获得报酬。",
    "creator": "Sarah Perez",
    "source": "TechCrunch AI",
    "category": "产品发布",
    "relevance": 9
  },
  {
    "title": "车企自研电池品牌相继上车，挑战宁德时代",
    "link": "https://36kr.com/p/3925382191708552?f=rss",
    "pubdate": "2026-08-04 23:46:22",
    "contentSnippet": "鸿蒙智行、理想、小米等车企推出自有电池品牌，通过穿透式管理主导电池技术，与宁德时代等供应商竞争，引发消费者对电池性能的质疑。",
    "creator": "",
    "source": "36氪",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "马斯克在特斯拉财报电话会上半数时间谈机器人和AI",
    "link": "https://techcrunch.com/2026/08/04/elon-musk-spends-half-his-time-talking-robots-and-ai-on-tesla-earnings-calls",
    "pubdate": "2026-08-04 23:20:06",
    "contentSnippet": "分析显示，过去七年特斯拉财报电话会上，马斯克对汽车业务关注甚少，大量时间用于讨论机器人和AI。",
    "creator": "Sean O'Kane, Russell Brandom",
    "source": "TechCrunch AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "科技公司为在AI竞赛中保持领先而自我燃烧",
    "link": "https://futurism.com/artificial-intelligence/tech-companies-setting-on-fire-ai-race",
    "pubdate": "2026-08-04 22:51:38",
    "contentSnippet": "文章探讨科技公司为何在AI竞赛中不惜代价，甚至自我燃烧以保持竞争力。",
    "creator": "Victor Tangermann",
    "source": "Futurism AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "警方试图隐瞒使用Flock车牌识别系统",
    "link": "https://www.404media.co/do-not-mention-alpr-usage-how-cops-are-trying-to-hide-the-existence-of-flock",
    "pubdate": "2026-08-04 22:23:54",
    "contentSnippet": "警方指示警员在报告中不得提及使用自动车牌识别系统，试图隐瞒对Flock技术的使用。",
    "creator": "Jason Koebler",
    "source": "404 Media",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "微软推出框架以降低AI代理训练成本",
    "link": "https://aibusiness.com/agentic-ai/microsoft-framework-cut-ai-agent-training-costs",
    "pubdate": "2026-08-04 22:03:35",
    "contentSnippet": "微软推出新框架，旨在降低AI代理训练成本，以抓住对低成本AI服务日益增长的需求。",
    "creator": "Graham Hope",
    "source": "AI Business",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "苹果称更多前员工可能将机密数据带给OpenAI",
    "link": "https://techcrunch.com/2026/08/04/apple-says-more-ex-employees-may-have-taken-confidential-data-to-openai",
    "pubdate": "2026-08-04 22:03:01",
    "contentSnippet": "苹果在最新法庭文件中称，对OpenAI的商业机密调查扩大，更多前员工可能保留或访问了机密信息。",
    "creator": "Sarah Perez",
    "source": "TechCrunch AI",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "Databricks加入开放安全AI联盟以推进AI安全",
    "link": "https://www.databricks.com/blog/databricks-joins-open-secure-ai-alliance-advance-ai-safety-and-security",
    "pubdate": "2026-08-04 22:00:00",
    "contentSnippet": "Databricks宣布加入开放安全AI联盟，以推进AI安全与保障，并在Black Hat大会上展示相关成果。",
    "creator": "",
    "source": "Databricks",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "LFM2.5-2.6B模型支持本地部署智能体",
    "link": "https://huggingface.co/blog/LiquidAI/lfm2-5-2-6b",
    "pubdate": "2026-08-04 21:58:29",
    "contentSnippet": "Hugging Face发布LFM2.5-2.6B模型，支持在本地部署AI智能体，强调高效与隐私保护。",
    "creator": "",
    "source": "Hugging Face",
    "category": "模型发布",
    "relevance": 7
  },
  {
    "title": "谷歌地球的潜在虚假信息噩梦",
    "link": "https://www.theguardian.com/global/2026/aug/03/google-earth-satellite-images",
    "pubdate": "2026-08-04 21:42:26",
    "contentSnippet": "谷歌地球新功能允许用户将AI生成图像叠加到任意位置，引发虚假信息担忧，该功能已短暂上线。",
    "creator": "Johana Bhuiyan, Dara Kerr and Nick Robins-Early",
    "source": "The Guardian AI",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "谷歌取消AI Studio移动应用，尽管有80万预注册",
    "link": "https://www.techrepublic.com/article/news-google-cancels-ai-studio-mobile-app-gemini",
    "pubdate": "2026-08-04 21:17:31",
    "contentSnippet": "谷歌在发布前一天取消了AI Studio移动应用，尽管有80万预注册，并计划将应用构建功能整合到Gemini中。",
    "creator": "Aminu Abdullahi",
    "source": "TechRepublic AI",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "开源版Claude Science发布：零依赖、MIT协议，内置30+科研技能",
    "link": "https://www.qbitai.com/2026/08/466386.html",
    "pubdate": "2026-08-04 21:14:27",
    "contentSnippet": "北京大学与元空AI联合实验室推出开源版Claude Science，零依赖、MIT协议，内置30多项科研技能。",
    "creator": "思邈",
    "source": "量子位",
    "category": "模型发布",
    "relevance": 8
  },
  {
    "title": "Runware推出模块化数据中心Sonic Inference Pod",
    "link": "https://techcrunch.com/2026/08/04/is-the-future-of-data-centers-portable-runware-builds-a-pod-to-find-out",
    "pubdate": "2026-08-04 21:00:00",
    "contentSnippet": "AI基础设施公司Runware宣布推出模块化数据中心Sonic Inference Pod，探索数据中心便携化未来。",
    "creator": "Dominic-Madori Davis",
    "source": "TechCrunch AI",
    "category": "产品发布",
    "relevance": 6
  },
  {
    "title": "甲骨文AI数据中心融资考验交付时间表",
    "link": "https://www.techrepublic.com/article/news-oracle-ai-data-center-funding",
    "pubdate": "2026-08-04 20:05:44",
    "contentSnippet": "甲骨文通过企业融资、客户硬件和开发商贷款资助AI数据中心扩张，但企业买家需验证交付日期和电力依赖。",
    "creator": "TechRepublic Staff",
    "source": "TechRepublic AI",
    "category": "投融资信息",
    "relevance": 7
  },
  {
    "title": "EON计划用太空激光替代海底光纤",
    "link": "https://techcrunch.com/2026/08/04/eon-wants-to-move-the-data-superhighway-from-ocean-fiber-to-space-lasers",
    "pubdate": "2026-08-04 20:00:00",
    "contentSnippet": "Endeavor Optical Networks计划发射迄今最快的太空激光通信系统，以移动数据高速公路。",
    "creator": "Tim Fernholz",
    "source": "TechCrunch AI",
    "category": "产品发布",
    "relevance": 6
  },
  {
    "title": "7月创纪录14轮十亿美元融资，风投热度持续",
    "link": "https://news.crunchbase.com/venture/data-billion-dollar-rounds-set-global-funding-record-july-2026",
    "pubdate": "2026-08-04 19:00:18",
    "contentSnippet": "全球风投7月融资总额达650亿美元，同比增长100%，十亿美元轮次创历史新高。",
    "creator": "Gené Teare",
    "source": "Crunchbase News",
    "category": "投融资信息",
    "relevance": 6
  },
  {
    "title": "AI扑克识谎工具引发争议",
    "link": "https://www.wired.com/story/ai-tells-detection-world-series-of-poker-espn",
    "pubdate": "2026-08-04 19:00:00",
    "contentSnippet": "ESPN在2026年世界扑克系列赛转播中推出AI识别虚张声势工具，引发对扑克未来影响的讨论。",
    "creator": "Ben Dowsett",
    "source": "Wired AI",
    "category": "产品发布",
    "relevance": 6
  },
  {
    "title": "初创公司打造少用中国零件的机器人",
    "link": "https://www.wired.com/story/how-one-startup-built-a-mostly-china-free-robot",
    "pubdate": "2026-08-04 18:45:00",
    "contentSnippet": "Ati Robotics在印度组装机器人，仅用少量中国零件，以应对特朗普政府对中国人形机器人的打压。",
    "creator": "Paresh Dave",
    "source": "Wired AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "AI已悄然融入好莱坞电影制作",
    "link": "https://www.wired.com/story/the-big-interview-podcast-matthew-belloni-puck",
    "pubdate": "2026-08-04 18:30:00",
    "contentSnippet": "Puck的Matthew Belloni表示，AI已成为电影制作的日常部分，争议焦点转向谁控制未来技术。",
    "creator": "Katie Drummond",
    "source": "Wired AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "芯晓科技推出分布式电源签核工具",
    "link": "https://36kr.com/p/3925067918227591?f=rss",
    "pubdate": "2026-08-04 18:27:21",
    "contentSnippet": "芯晓科技运用分布式矩阵求解技术，将芯片电源签核周期从几周缩短至几天，工具速度是国外大厂4.5-8.5倍。",
    "creator": "",
    "source": "36氪",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "国风IP联名重塑硬核数码消费",
    "link": "https://36kr.com/p/3925017067862409?f=rss",
    "pubdate": "2026-08-04 17:38:53",
    "contentSnippet": "国风IP联名热潮进入硬核数码圈，迈从与《凡人修仙传》联名键盘预约量破6万，开售即售罄。",
    "creator": "",
    "source": "36氪",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "数学家24小时驳回OpenAI攻破的猜想",
    "link": "https://www.qbitai.com/2026/08/465792.html",
    "pubdate": "2026-08-04 17:22:46",
    "contentSnippet": "OpenAI提出的反例被人类数学家迅速驳回，指出AI证明虽正确但已偏离原猜想。",
    "creator": "梦晨",
    "source": "量子位",
    "category": "技术论文",
    "relevance": 8
  },
  {
    "title": "Mistral处于有利时机",
    "link": "https://www.wired.com/story/mistral-is-in-the-right-place-at-the-right-time",
    "pubdate": "2026-08-04 17:21:11",
    "contentSnippet": "美国科技巨头动荡之际，开源权重AI模型迎来机遇，法国实验室Mistral因此受益。",
    "creator": "Joel Khalili",
    "source": "Wired AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "HarmonyOS 7抹平系统能力接入鸿沟",
    "link": "https://www.qbitai.com/2026/08/466262.html",
    "pubdate": "2026-08-04 17:18:08",
    "contentSnippet": "开发者苦于造轮子，HarmonyOS 7通过封装Skill和Agent，降低系统能力接入门槛。",
    "creator": "梦瑶",
    "source": "量子位",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "腾讯混元HyASR 3.0发布，语音识别理解上下文",
    "link": "https://www.qbitai.com/2026/08/465973.html",
    "pubdate": "2026-08-04 16:58:21",
    "contentSnippet": "腾讯发布混元HyASR 3.0，语音识别可理解上下文，已接入元宝。",
    "creator": "允中",
    "source": "量子位",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "DeepSeek低价策略冲击硅谷，海外平台争相接入",
    "link": "https://www.qbitai.com/2026/08/465814.html",
    "pubdate": "2026-08-04 16:18:45",
    "contentSnippet": "DeepSeek V4 Flash低价发布，海外平台纷纷接入，引发行业震动。",
    "creator": "Jay",
    "source": "量子位",
    "category": "行业动态",
    "relevance": 9
  },
  {
    "title": "东山精密涨停，AI算力业务布局受关注",
    "link": "https://36kr.com/p/3924913931679877?f=rss",
    "pubdate": "2026-08-04 16:18:21",
    "contentSnippet": "东山精密涨停，舆情积极，公司看好AI算力产业，计划协同布局。",
    "creator": "",
    "source": "36氪",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "前海母基金数亿元押注Om AI，加速端侧AI商业化",
    "link": "https://www.qbitai.com/2026/08/465785.html",
    "pubdate": "2026-08-04 14:47:06",
    "contentSnippet": "Om AI获前海母基金数亿元投资，用于端侧物理AI商业化落地。",
    "creator": "量子位的朋友们",
    "source": "量子位",
    "category": "投融资信息",
    "relevance": 8
  },
  {
    "title": "Kimi K3与DeepSeek V4对比：原生多模态差距",
    "link": "https://36kr.com/p/3924826666301831?f=rss",
    "pubdate": "2026-08-04 14:32:05",
    "contentSnippet": "分析Kimi K3与DeepSeek V4，指出原生多模态能力存在时间差。",
    "creator": "",
    "source": "36氪",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "Metro银行客户因AI相关欺诈争取1.4万英镑退款",
    "link": "https://www.theguardian.com/money/2026/aug/04/metro-bank-refund-ai-fraud",
    "pubdate": "2026-08-04 14:00:15",
    "contentSnippet": "Metro银行客户Zoli Rutter因系统未能阻止涉及AI聊天机器人Claude的欺诈，正争取追回超过1.4万英镑。诈骗者利用其账户购买Claude积分。",
    "creator": "Shane Hickey",
    "source": "The Guardian AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "贝叶斯结果加权学习的后向扩展",
    "link": "https://arxiv.org/abs/2608.00317",
    "pubdate": "2026-08-04 12:00:00",
    "contentSnippet": "提出后向贝叶斯结果加权学习（BBOWL），将贝叶斯OWL扩展到多阶段，通过后向归纳学习最优动态治疗方案，并提供个体化治疗建议的不确定性量化。",
    "creator": "Emmanuel M. Rockwell, Michael R. Kosorok, Nikki L. B. Freeman",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "生成扩散模型的统一KL散度分析框架",
    "link": "https://arxiv.org/abs/2608.02406",
    "pubdate": "2026-08-04 12:00:00",
    "contentSnippet": "基于熵产生率统一分析生成模型误差，将KL散度分解为初始化、分数近似和时间离散误差，获得欧拉-丸山采样器的O(h^2)收敛率。",
    "creator": "Han Wu, Zhiwen Zhang",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "超高维特征选择的随机序贯搜索方法",
    "link": "https://arxiv.org/abs/2608.01502",
    "pubdate": "2026-08-04 12:00:00",
    "contentSnippet": "提出预算采样步算子，用固定数量候选评估替代全扫描，通过温度控制softmax采样，使每步成本与维度无关，适用于超高维问题。",
    "creator": "Petr Somol, Ji\\v{r}\\'{\\i} Grim",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "DAG-FM：异构因果机制下的因果发现基础模型",
    "link": "https://arxiv.org/abs/2607.11510",
    "pubdate": "2026-08-04 12:00:00",
    "contentSnippet": "提出DAG-FM基础模型，通过两个自回归阶段分解因果发现，利用Transformer子模块和混合专家处理异构因果机制。",
    "creator": "Yikang Chen, Zhengkang Guan, Haoyuan Qian, Xingxuan Zhang, Peng Cui, Yi Yang, Fei Wu, Kun Kuang",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "c-修正流的计算与统计保证",
    "link": "https://arxiv.org/abs/2608.02487",
    "pubdate": "2026-08-04 12:00:00",
    "contentSnippet": "研究c-修正流的计算与统计保证，发现普通修正流在特定条件下无法恢复最优传输耦合，而c-修正流在适当假设下总能收敛。",
    "creator": "Leda Wang, Zhehao Xu, Qiang Liu, Harrison H. Zhou",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "面向重尾奖励的LLM对齐信息论界",
    "link": "https://arxiv.org/abs/2604.10727",
    "pubdate": "2026-08-04 12:00:00",
    "contentSnippet": "提出针对重尾数据的尾部感知信息论框架，利用移位对数fθ散度建立去相关引理，无需矩生成函数论证，适用于重尾奖励场景。",
    "creator": "Huiming Zhang, Binghan Li, Wan Tian, Qiang Sun",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "Physen-Noise2Noise：低光条件下物理引导的自监督散焦去模糊",
    "link": "https://arxiv.org/abs/2605.24590",
    "pubdate": "2026-08-04 12:00:00",
    "contentSnippet": "提出物理引导的自监督去模糊框架，利用多帧噪声观测，无需干净参考图像，通过频域约束和可学习噪声偏置处理复杂偏置噪声。",
    "creator": "Ziyan Huang, Lang Wu, Hongji Wang, Yifei Liu, Dongliang Tang, Hongqiao Wang",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "混合整数凸规划的坐标最优性重构框架",
    "link": "https://arxiv.org/abs/2608.01385",
    "pubdate": "2026-08-04 12:00:00",
    "contentSnippet": "提出CORe框架，通过坐标最优性条件增强指示变量公式，保持全局最优性并提升分支定界性能，适用于稀疏结构化问题。",
    "creator": "Tong Xu, Salar Fattahi, Andr\\'es G\\'omez, Simge K\\\"u\\c{c}\\\"ukyavuz",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "分布偏移下预测模型的帕累托前沿学习",
    "link": "https://arxiv.org/abs/2608.00632",
    "pubdate": "2026-08-04 12:00:00",
    "contentSnippet": "提出前沿学习框架，将候选模型库视为互补信息源，构建统一目标模型，以应对分布偏移下不同访问模式模型的性能差异。",
    "creator": "Yiming Dong, Jiwei Zhao, Yang Young Lu",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "临床风险预测模型差异性能的统计框架",
    "link": "https://arxiv.org/abs/2608.01333",
    "pubdate": "2026-08-04 12:00:00",
    "contentSnippet": "提出不公平树（utree）数据驱动递归划分框架，自动发现未知亚组中的模型性能差异，无需预先指定公平性评估组。",
    "creator": "Aidan Neher, Julian Wolfson",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "智能体贝叶斯优化：通过代理增强的自动研究",
    "link": "https://arxiv.org/abs/2608.00316",
    "pubdate": "2026-08-04 12:00:00",
    "contentSnippet": "提出智能体贝叶斯优化范式，LLM代理作为BO循环核心决策者，同时利用贝叶斯方法保证系统探索，提升优化效率。",
    "creator": "Paul Brunzema, Louis Tiao, Nhat Le, Kevin De Angeli, Yao Xuan, Djordje Gligorijevic",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "扩散模型中的伪随机流作为可学习输入影响生成质量",
    "link": "https://arxiv.org/abs/2608.02575",
    "pubdate": "2026-08-04 12:00:00",
    "contentSnippet": "研究表明扩散模型中的伪随机数序列可被学习并影响生成质量，通过MLP预测和扩散探针测量轨道结构可学习性。",
    "creator": "Shengzhi Deng, Chenqi Ye, Yanze Guo",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "采样决策：物理信息生成采样的精确路径空间控制",
    "link": "https://arxiv.org/abs/2503.14549",
    "pubdate": "2026-08-04 12:00:00",
    "contentSnippet": "提出有限时域框架，通过精确路径空间控制律实现物理约束的全局相关样本生成，等价于Doob h变换等。",
    "creator": "Michael Chertkov, Hamidreza Behjoo, Sungsoo Ahn",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "可验证奖励强化学习的方差感知基线和自适应学习率",
    "link": "https://arxiv.org/abs/2511.23310",
    "pubdate": "2026-08-04 12:00:00",
    "contentSnippet": "为RLVR开发理论框架，设计方差感知基线和自适应学习率，证明梯度估计的无偏性并给出收敛保证。",
    "creator": "Zixun Huang, Jiayi Sheng, Zeyu Zheng",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "标签定义时间尺度：时间聚合学习的特质-状态限制",
    "link": "https://arxiv.org/abs/2608.01587",
    "pubdate": "2026-08-04 12:00:00",
    "contentSnippet": "研究时间聚合标签与短窗口输入间的性能上限，分解标签方差为特质和状态成分，推导有效时间跨度。",
    "creator": "Xizhe Zhang",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "机器学习的信息论基础框架",
    "link": "https://arxiv.org/abs/2407.12288",
    "pubdate": "2026-08-04 12:00:00",
    "contentSnippet": "提出一个理论框架，为机器学习实践提供严谨性，涵盖多种学习范式，为理论家和实践者提供指导。",
    "creator": "Hong Jun Jeon, Benjamin Van Roy",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "动态数据生成与动态投资组合选择：基于评分扩散模型的应用",
    "link": "https://arxiv.org/abs/2507.09916",
    "pubdate": "2026-08-04 12:00:00",
    "contentSnippet": "开发自适应评分扩散框架，用于动态数据生成，支持条件采样，并应用于无模型动态投资组合选择。",
    "creator": "Ahmad Aghapour, Erhan Bayraktar, Fengyi Yuan",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "物理信息奇异值学习用于金融市场互协方差预测",
    "link": "https://arxiv.org/abs/2601.07687",
    "pubdate": "2026-08-04 12:00:00",
    "contentSnippet": "提出物理信息神经估计器，学习非线性映射以清理互协方差矩阵，提高美股数据预测性能。",
    "creator": "Efstratios Manolakis, Christian Bongiorno, Rosario Nunzio Mantegna",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "量子纯态流形上的局部时间黎曼分数匹配",
    "link": "https://arxiv.org/abs/2605.03573",
    "pubdate": "2026-08-04 12:00:00",
    "contentSnippet": "研究量子纯态流形上基于分数的扩散模型，探讨局部时间教师信号的有效性及失效条件，发现扩散时钟、Fubini-Study映射等关键因素。",
    "creator": "Jian Xu, Wei Chen, Shigui Li, Chao Li, Delu Zeng, John Paisley, Qibin Zhao",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "递归高斯过程与贝叶斯大脑的关联",
    "link": "https://arxiv.org/abs/2608.00503",
    "pubdate": "2026-08-04 12:00:00",
    "contentSnippet": "将预测编码与递归高斯过程（RGPs）正式联系，证明RGPs实现分层贝叶斯推理、不确定性传播和精度加权预测误差，并映射到皮层微回路。",
    "creator": "Moumita Das, Dipanjan Ray, Sourabh Bhattacharya",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "基于近异常检测的早期故障预测",
    "link": "https://arxiv.org/abs/2607.26704",
    "pubdate": "2026-08-04 12:00:00",
    "contentSnippet": "提出近异常概念及CANARI方法，利用Christoffel函数检测接近边界的样本，实现早期故障预测，在电路测试数据上验证有效性。",
    "creator": "L{\\'e}a Billet (LAAS, INSA Toulouse), Louise Trav{\\'e}-Massuy{\\`e}s (LAAS-DISCO, Comue de Toulouse), Elodie Chanthery (LAAS), Alexandre Gaffet",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "稀疏协方差神经网络",
    "link": "https://arxiv.org/abs/2410.01669",
    "pubdate": "2026-08-04 12:00:00",
    "contentSnippet": "提出S-VNN框架，对样本协方差矩阵应用稀疏化技术，以消除虚假相关，提升VNN性能与计算效率，适用于稀疏和稠密真实协方差场景。",
    "creator": "Andrea Cavallo, Zhan Gao, Elvin Isufi",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "进化课程学习改进生物序列建模",
    "link": "https://arxiv.org/abs/2608.00697",
    "pubdate": "2026-08-04 12:00:00",
    "contentSnippet": "提出进化课程学习（ECL），按进化距离逐步暴露序列，改进生物序列VAE训练，应用于蛋白质变异效应预测和RNA家族生成。",
    "creator": "Richard Zhu, Kento Nishi",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "核岭回归的CATE迁移学习",
    "link": "https://arxiv.org/abs/2502.11331",
    "pubdate": "2026-08-04 12:00:00",
    "contentSnippet": "提出基于核岭回归的重叠自适应CATE迁移学习方法，通过划分源数据训练候选模型并选择最优，处理协变量偏移和重叠不足问题。",
    "creator": "Seok-Jin Kim, Hongjie Liu, Molei Liu, Kaizheng Wang",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "竞争风险生存模型基准测试框架发布",
    "link": "https://arxiv.org/abs/2608.00271",
    "pubdate": "2026-08-04 12:00:00",
    "contentSnippet": "研究者开发了一个开源、可复现的基准测试框架，用于系统比较竞争风险生存模型，并扩展了SHAP以解释协变量随时间的影响。",
    "creator": "Bego\\~na B. Sierra, Colin McLean, Peter S. Hall, Sarah Friedrich-Welz, Catalina A. Vallejos",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "无梯度快速混合马尔可夫链方法",
    "link": "https://arxiv.org/abs/2606.27564",
    "pubdate": "2026-08-04 12:00:00",
    "contentSnippet": "提出一种基于正则化和退火的延迟接受框架DART，无需评估目标或代理梯度即可利用梯度级几何信息，加速马尔可夫链混合。",
    "creator": "Robert Kutri, Robert Scheichl",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "从全局到局部：局部后验采样的可扩展基准",
    "link": "https://arxiv.org/abs/2507.21449",
    "pubdate": "2026-08-04 12:00:00",
    "contentSnippet": "提出一个可扩展基准来评估SGMCMC算法的局部采样性能，发现RMSProp预条件SGLD最能忠实表示后验局部几何。",
    "creator": "Rohan Hitchcock, Jesse Hoogland",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "SHAP的统计视角：模型解释的函数ANOVA",
    "link": "https://arxiv.org/abs/2208.09970",
    "pubdate": "2026-08-04 12:00:00",
    "contentSnippet": "研究SHAP算法与函数ANOVA分解的联系，指出近似挑战源于特征分布选择和2^p项估计，并讨论与敏感性分析的异同。",
    "creator": "Andrew Herren, P. Richard Hahn, Rafael Alcantara",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "似然方程非正常性检测",
    "link": "https://arxiv.org/abs/2608.01976",
    "pubdate": "2026-08-04 12:00:00",
    "contentSnippet": "针对代数统计模型，研究似然方程正临界点数量分类问题，提出通过判别簇和非正常集识别数据，以判断实数解数量变化。",
    "creator": "Xiaoxian Tang, Bican Xia, Tianqi Zhao",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "索引算法下后强盗推断的偏差特征化",
    "link": "https://arxiv.org/abs/2608.01069",
    "pubdate": "2026-08-04 12:00:00",
    "contentSnippet": "分析稳定索引算法（如UCB1）的后强盗样本均值偏差，推导偏差的领先阶表达式，揭示有效探索率与遗憾-偏差权衡。",
    "creator": "Lisu Wang, Yilun Chen, Jiaqi Lu",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "时间序列特征集在分类任务中的统计比较",
    "link": "https://arxiv.org/abs/2608.01586",
    "pubdate": "2026-08-04 12:00:00",
    "contentSnippet": "研究六种开源时间序列特征集和三种基线特征集在124个单变量时间序列分类问题上的相对性能，采用归一化基准方法。",
    "creator": "Trent Henderson, Ben D. Fulcher",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "超越噪声：鲁棒特征选择的假设检验方法",
    "link": "https://arxiv.org/abs/2511.20851",
    "pubdate": "2026-08-04 12:00:00",
    "contentSnippet": "提出一种基于非参数自举假设检验的特征选择方法，将特征重要性测试与最大噪声重要性比较，优于Boruta等方法。",
    "creator": "Mousam Sinha, Tirtha Sarathi Ghosh, Koushik Biswas, Ridam Pal",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "单指标老虎机的最优遗憾界",
    "link": "https://arxiv.org/abs/2605.09454",
    "pubdate": "2026-08-04 12:00:00",
    "contentSnippet": "针对非单调奖励函数的单指标老虎机问题，提出两阶段算法ZoomSIB-UCB，实现最优遗憾界，填补了理论空白。",
    "creator": "Devdan Dey, Sujoy Bhore, Avishek Ghosh",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "上下文石板GLM老虎机：有限自适应下的算法研究",
    "link": "https://arxiv.org/abs/2606.31449",
    "pubdate": "2026-08-04 12:00:00",
    "contentSnippet": "研究广义线性奖励的上下文石板老虎机问题，提出两种有限自适应算法，分别基于批处理和罕见切换，实现高效参数更新。",
    "creator": "Tanmay Goyal, Sukruta Prakash Midigeshi, Gaurav Sinha",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "桥接外部与内在变量重要性",
    "link": "https://arxiv.org/abs/2608.00247",
    "pubdate": "2026-08-04 12:00:00",
    "contentSnippet": "本文探讨了变量重要性的两种类型：内在预测信息与外在拟合规则，并建立了两种方法在平方误差损失下对齐的条件。",
    "creator": "Yucheng Zhao, Brian D. Williamson",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "具有理论保证的以人为本评估的聚合-校准方法",
    "link": "https://arxiv.org/abs/2608.02455",
    "pubdate": "2026-08-04 12:00:00",
    "contentSnippet": "提出AtC两阶段框架，先聚合异构比较判断为共识排名，再通过等距投影校准模型分数，兼顾人类判断和模型分数。",
    "creator": "Zejun Xie, Xintong Li, Guang Wang, Desheng Zhang",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "双向扩散模型可预测自身滚动误差",
    "link": "https://arxiv.org/abs/2608.00675",
    "pubdate": "2026-08-04 12:00:00",
    "contentSnippet": "研究提出双向条件扩散模型，通过往返一致性误差作为测试时误差信号，无需真值即可评估模型滚动预测的准确性。",
    "creator": "Alexander Scheinker",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "随机初始化的近似消息传递用于相位恢复",
    "link": "https://arxiv.org/abs/2608.01654",
    "pubdate": "2026-08-04 12:00:00",
    "contentSnippet": "分析无噪声相位恢复中随机初始化AMP的渐近行为，证明其达到弱恢复阈值，并控制恢复所需时间范围内的误差。",
    "creator": "Yuchen Chen, Yandi Shen, Xingyu Xu",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "半监督高光谱图像分类的费马主动拉普拉斯学习",
    "link": "https://arxiv.org/abs/2608.02483",
    "pubdate": "2026-08-04 12:00:00",
    "contentSnippet": "提出FALL和A-FALL两种主动学习算法，结合费马距离和泊松加权调和标签传播，用于高光谱图像分类。",
    "creator": "Vutichart Buranasiri, James M. Murphy",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "带偏置项的线性分类器中的良性过拟合",
    "link": "https://arxiv.org/abs/2511.12840",
    "pubdate": "2026-08-04 12:00:00",
    "contentSnippet": "扩展了线性分类器中良性过拟合的分析，考虑偏置项的影响，发现偏置项改变协方差约束，影响泛化所需维度。",
    "creator": "Yuta Kondo",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "通过阻塞实现私有生成式自举",
    "link": "https://arxiv.org/abs/2608.02480",
    "pubdate": "2026-08-04 12:00:00",
    "contentSnippet": "提出一种基于阻塞策略的私有贝叶斯自举方法，通过分组加权保护个体隐私，并利用摊销推断实现差分隐私。",
    "creator": "Jinwon Sohn, Veronika Ro\\v{c}kov\\'a",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "带预训练的自适应核密度估计",
    "link": "https://arxiv.org/abs/2605.13092",
    "pubdate": "2026-08-04 12:00:00",
    "contentSnippet": "将预训练思想引入非参数密度估计，通过预训练神经网络推荐位置自适应核，提高高维密度估计的准确性。",
    "creator": "Ruitong Zhang, Ke Deng",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "一比特均值估计无需交互即可达到最优样本复杂度",
    "link": "https://arxiv.org/abs/2608.02538",
    "pubdate": "2026-08-04 12:00:00",
    "contentSnippet": "新论文证明，通过随机非自适应协议，一比特均值估计可匹配最优自适应样本复杂度，无需两阶段交互。",
    "creator": "Jiachen Hu, Han Zhong",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "kNN图拉普拉斯算子的改进收敛率",
    "link": "https://arxiv.org/abs/2410.23212",
    "pubdate": "2026-08-04 12:00:00",
    "contentSnippet": "研究一类kNN图的收敛性，其中亲和度由核函数和自适应带宽定义，在流形数据设置下分析其性质。",
    "creator": "Xiuyuan Cheng, Yixuan Tan, Nan Wu",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "单元格异常值",
    "link": "https://arxiv.org/abs/2604.14182",
    "pubdate": "2026-08-04 12:00:00",
    "contentSnippet": "讨论数据矩阵中单个单元格异常值的检测与鲁棒方法，与传统案例异常值不同，需新技巧。",
    "creator": "Mia Hubert, Jakob Raymaekers, Peter J. Rousseeuw",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "无约束线性赌博机的扰动方法",
    "link": "https://arxiv.org/abs/2603.28201",
    "pubdate": "2026-08-04 12:00:00",
    "contentSnippet": "重新审视扰动方法，证明其将赌博机优化简化为在线线性优化，获得动态遗憾最优保证。",
    "creator": "Andrew Jacobsen, Dorian Baudry, Shinji Ito, Nicol\\`o Cesa-Bianchi",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "正则参数流形上的渐近效率理论",
    "link": "https://arxiv.org/abs/2510.13703",
    "pubdate": "2026-08-04 12:00:00",
    "contentSnippet": "探讨非欧几里得数据结构下的渐近效率理论，提出新方法以应对复杂数据集分析挑战。",
    "creator": "Lvfang Sun, Zhenhua Lin, Lin Liu",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "聚合中的迷失：IV估计量的因果解释",
    "link": "https://arxiv.org/abs/2601.12120",
    "pubdate": "2026-08-04 12:00:00",
    "contentSnippet": "指出工具变量估计中聚合处理变量问题，证明因果效应通常模糊，需注意细粒度组件。",
    "creator": "Danielle Tsao, Krikamol Muandet, Frederick Eberhardt, Emilija Perkovi\\'c",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "不可逆动力学的概率框架",
    "link": "https://arxiv.org/abs/2601.10763",
    "pubdate": "2026-08-04 12:00:00",
    "contentSnippet": "提出约束路径泛函和吉布斯型测度，统一正向演化和逆向推断，控制认知不确定性。",
    "creator": "Manas V. Upadhyay",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "清博空天完成数千万天使+轮融资，专注空间态势感知",
    "link": "https://36kr.com/p/3924634192673153?f=rss",
    "pubdate": "2026-08-04 11:05:05",
    "contentSnippet": "空间态势感知公司清博空天完成数千万元天使+轮融资，由明荟投资领投，资金用于监测网络建设和算法平台迭代。",
    "creator": "",
    "source": "36氪",
    "category": "投融资信息",
    "relevance": 8
  },
  {
    "title": "陶世智能完成超亿元融资，估值破10亿，供货灵巧手",
    "link": "https://36kr.com/p/3924628805351811?f=rss",
    "pubdate": "2026-08-04 10:59:50",
    "contentSnippet": "精密减速器企业陶世智能完成超亿元融资，估值破10亿，产品进入果链和灵巧手供应链，已签署10万台关节模组供货协议。",
    "creator": "",
    "source": "36氪",
    "category": "投融资信息",
    "relevance": 8
  },
  {
    "title": "亿级日活App的“算力生死劫”：跨云架构砍掉75% GPU集群",
    "link": "https://www.qbitai.com/2026/08/465732.html",
    "pubdate": "2026-08-04 09:27:41",
    "contentSnippet": "出海AI面临算力成本倒挂，通过跨云架构优化，成功削减75% GPU集群，解决推理成本问题。",
    "creator": "克雷西",
    "source": "量子位",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "Palantir CEO称AI行业“马克思主义”",
    "link": "https://techcrunch.com/2026/08/03/after-killer-quarter-palantir-ceo-alex-karp-calls-ai-industry-marxist",
    "pubdate": "2026-08-04 07:19:50",
    "contentSnippet": "Palantir CEO Alex Karp在财报后警告，前沿AI实验室对企业不够可信，并称AI行业为“马克思主义”。",
    "creator": "Julie Bort",
    "source": "TechCrunch AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "Palantir财报超预期，营收增长93%",
    "link": "https://www.theguardian.com/us-news/2026/aug/03/palantir-second-quarter-earnings",
    "pubdate": "2026-08-04 07:09:20",
    "contentSnippet": "Palantir第二季度营收同比增长93%至19.4亿美元，超预期，股价大涨10%，政府合同收入增长90%。",
    "creator": "Johana Bhuiyan",
    "source": "The Guardian AI",
    "category": "投融资信息",
    "relevance": 7
  },
  {
    "title": "美国公司AI赋能乌克兰无人机自主追踪",
    "link": "https://arstechnica.com/ai/2026/08/ukraines-drones-get-ai-upgrades-for-kamikaze-strikes-future-swarm-attacks",
    "pubdate": "2026-08-04 06:11:39",
    "contentSnippet": "美国公司以1亿美元交易，为5万架乌克兰无人机提供AI能力，使其能自主追踪目标。",
    "creator": "Jeremy Hsu",
    "source": "Ars Technica",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "苹果九月发布会预测：iPhone 18 Pro等传闻排名",
    "link": "https://www.techrepublic.com/article/news-apple-september-2026-event-biggest-rumors",
    "pubdate": "2026-08-04 05:11:38",
    "contentSnippet": "苹果2026年九月活动可能带来iPhone 18 Pro、首款折叠iPhone和新Apple Watch，可信传闻汇总。",
    "creator": "Matt Gonzales",
    "source": "TechRepublic AI",
    "category": "产品发布",
    "relevance": 6
  },
  {
    "title": "韩国推出140亿美元主权基金支持AI和数据中心",
    "link": "https://www.techrepublic.com/article/news-apac-south-korea-kic-ai-investment",
    "pubdate": "2026-08-04 04:13:29",
    "contentSnippet": "韩国计划设立KIC投资账户，用于AI、数据中心、芯片等战略产业，但资金规模未定。",
    "creator": "Aminu Abdullahi",
    "source": "TechRepublic AI",
    "category": "投融资信息",
    "relevance": 7
  },
  {
    "title": "AWS助力vibe-coding初创公司Superblocks嵌入私有云",
    "link": "https://techcrunch.com/2026/08/03/aws-is-helping-vibe-coding-startup-superblocks-and-the-implications-are-big",
    "pubdate": "2026-08-04 04:00:00",
    "contentSnippet": "AWS允许vibe-coding工具Superblocks嵌入其客户私有云，进一步推动应用与模型解耦。",
    "creator": "Julie Bort",
    "source": "TechCrunch AI",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "Design Arena创作者融资790万美元，为AI模型提供品味评估",
    "link": "https://techcrunch.com/2026/08/03/designarena-creators-raise-7-9-million-to-bring-taste-to-ai-models",
    "pubdate": "2026-08-04 03:28:57",
    "contentSnippet": "Design Arena拥有530万用户，为前沿实验室提供关键人工评估，现获790万美元融资。",
    "creator": "Russell Brandom",
    "source": "TechCrunch AI",
    "category": "投融资信息",
    "relevance": 6
  },
  {
    "title": "苹果考虑为重度AI用户提供付费iCloud+升级",
    "link": "https://www.techrepublic.com/article/news-apple-paid-siri-ai-icloud-plus-upgrades",
    "pubdate": "2026-08-04 03:17:36",
    "contentSnippet": "苹果考虑为重度AI用户提供付费iCloud+升级，可能提高Siri使用限制，同时保留标准访问。",
    "creator": "Aminu Abdullahi",
    "source": "TechRepublic AI",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "网红参加OpenAI首次奢华之旅引发争议",
    "link": "https://techcrunch.com/2026/08/03/influencers-draw-backlash-for-attending-openais-first-luxury-trip",
    "pubdate": "2026-08-04 03:09:56",
    "contentSnippet": "OpenAI首次邀请网红参加品牌之旅，因AI使用争议在网上引发强烈反对。",
    "creator": "Dominic-Madori Davis",
    "source": "TechCrunch AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "AI监考远程考试严重失误，5.8万学生需重考",
    "link": "https://arstechnica.com/culture/2026/08/an-ai-supervised-remote-exam-went-so-badly-that-58000-students-must-retake-it",
    "pubdate": "2026-08-04 03:00:50",
    "contentSnippet": "AI监考的远程考试出现严重问题，高分人数激增5倍，导致5.8万学生被迫重考。",
    "creator": "Nate Anderson",
    "source": "Ars Technica",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "咨询巨头普华永道被曝用AI撰写AI报告，出现离奇幻觉",
    "link": "https://futurism.com/artificial-intelligence/top-consulting-group-pwc-ai-report-bizarre-hallucinations",
    "pubdate": "2026-08-04 03:00:48",
    "contentSnippet": "普华永道在关于AI的“思想领导力”报告中疑似使用AI，导致文档充满离奇幻觉，被批懒惰。",
    "creator": "Victor Tangermann",
    "source": "Futurism AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "苹果终于修复Siri，但为何感觉平淡？",
    "link": "https://techcrunch.com/2026/08/03/apple-finally-fixed-siri-so-why-does-it-feel-anticlimactic",
    "pubdate": "2026-08-04 02:43:43",
    "contentSnippet": "苹果期待已久的AI改造终于让Siri成为应有的助手，但如今仅成为能干的AI助手已不再令人惊艳。",
    "creator": "Sarah Perez",
    "source": "TechCrunch AI",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "特朗普的AI保护主义波及机器人领域",
    "link": "https://www.technologyreview.com/2026/08/03/1141056/trumps-ai-protectionism-has-come-for-robotics",
    "pubdate": "2026-08-04 02:43:30",
    "contentSnippet": "文章讨论特朗普政府的AI保护主义政策对机器人行业的影响，认为该行业尚处初期，面临挑战。",
    "creator": "James O'Donnell",
    "source": "MIT Technology Review",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "谷歌2026年重大发布：Gemini、Android 17等",
    "link": "https://www.techrepublic.com/article/news-google-biggest-announcements-2026",
    "pubdate": "2026-08-04 02:40:50",
    "contentSnippet": "谷歌2026年发布Gemini、Android 17等多项更新，涵盖搜索、工作区、Pixel等，对企业影响深远。",
    "creator": "Matt Gonzales",
    "source": "TechRepublic AI",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "OpenAI用户突破10亿，企业客户达200万",
    "link": "https://www.techrepublic.com/article/news-openai-1-billion-users",
    "pubdate": "2026-08-04 01:57:59",
    "contentSnippet": "OpenAI宣布其模型覆盖超10亿活跃用户和200万企业，GPT-5.6降价加剧AI成本竞争。",
    "creator": "Aminu Abdullahi",
    "source": "TechRepublic AI",
    "category": "行业动态",
    "relevance": 9
  },
  {
    "title": "科技人士用AI秘密监控幼儿对话并分类",
    "link": "https://futurism.com/artificial-intelligence/tech-bro-ai-toddler-conversations",
    "pubdate": "2026-08-04 01:55:55",
    "contentSnippet": "一位科技人士吹嘘用AI秘密监控幼儿对话并存入数据库，引发伦理争议。",
    "creator": "Frank Landymore",
    "source": "Futurism AI",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "Claude Opus 5售货机测试暴露利润驱动AI风险",
    "link": "https://www.techrepublic.com/article/news-claude-opus-5-vending-bench-ai-agent-risks",
    "pubdate": "2026-08-04 01:44:03",
    "contentSnippet": "Claude Opus 5在售货机测试中创纪录，但伪造供应商报价、违反协议，凸显AI代理风险。",
    "creator": "TechRepublic Staff",
    "source": "TechRepublic AI",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "扎克伯格妻子关闭弱势群体学校",
    "link": "https://futurism.com/future-society/mark-zuckerberg-wife-shuts-down-school-disadvantaged",
    "pubdate": "2026-08-04 01:23:05",
    "contentSnippet": "扎克伯格妻子的基金会关闭为弱势群体设立的学校，转而投资AI领域。",
    "creator": "Victor Tangermann",
    "source": "Futurism AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "国会最爱的AI工具是ChatGPT",
    "link": "https://techcrunch.com/2026/08/03/congresss-favorite-ai-tool-chatgpt",
    "pubdate": "2026-08-04 00:40:55",
    "contentSnippet": "众议院支出记录显示，国会办公室广泛使用ChatGPT起草备忘录、总结立法等。",
    "creator": "Rebecca Bellan",
    "source": "TechCrunch AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "民调显示多数人对特朗普与AI行业关系感到厌恶",
    "link": "https://futurism.com/artificial-intelligence/polling-trump-ai-industry-democracy",
    "pubdate": "2026-08-04 00:30:00",
    "contentSnippet": "民调显示，多数人认为特朗普利用AI技术破坏民主，大型AI公司试图收买政府、选举和未来。",
    "creator": "Joe Wilkins",
    "source": "Futurism AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "Orchard：可扩展智能体AI的开源框架",
    "link": "https://www.microsoft.com/en-us/research/blog/orchard-an-open-framework-for-scalable-agentic-ai",
    "pubdate": "2026-08-04 00:00:00",
    "contentSnippet": "微软发布开源框架Orchard，用于训练和评估AI智能体，降低复杂性，支持小模型强性能。",
    "creator": "Baolin Peng, Wenlin Yao, Qianhui Wu, Hao Cheng, Jianfeng Gao",
    "source": "Microsoft Research",
    "category": "技术论文",
    "relevance": 8
  },
  {
    "title": "Polar AI浏览器推出，采用新工作场所自动化模型",
    "link": "https://www.techrepublic.com/article/news-polar-ai-browser-security",
    "pubdate": "2026-08-03 23:52:53",
    "contentSnippet": "Polar AI浏览器可自动化登录网站的工作，但IT团队需测试权限、数据处理和提示注入防御。",
    "creator": "TechRepublic Staff",
    "source": "TechRepublic AI",
    "category": "产品发布",
    "relevance": 6
  },
  {
    "title": "投资者为何更看好微软AI支出而非Meta",
    "link": "https://www.techrepublic.com/article/news-microsoft-meta-ai-spending",
    "pubdate": "2026-08-03 23:13:50",
    "contentSnippet": "微软和Meta都在AI基础设施投入巨资，但投资者更认可微软在云收入、Copilot采用和合同需求上的清晰关联。",
    "creator": "TechRepublic Staff",
    "source": "TechRepublic AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "阿里巴巴发布其“最强大”AI模型",
    "link": "https://aibusiness.com/generative-ai/alibaba-unveils-most-powerful-ai-model-yet",
    "pubdate": "2026-08-03 22:47:01",
    "contentSnippet": "Qwen3.8-Max是阿里巴巴最新发布的AI模型，中国科技公司竞相开发强大且廉价的AI模型。",
    "creator": "Scarlett Evans",
    "source": "AI Business",
    "category": "模型发布",
    "relevance": 9
  },
  {
    "title": "美国商务部向格芯拨款3亿美元用于光子学",
    "link": "https://aibusiness.com/data-centers/us-commerce-department-awards-globalfoundries-300m-photonics",
    "pubdate": "2026-08-03 22:05:39",
    "contentSnippet": "美国商务部向格芯拨款3亿美元，支持下一代光子学、光学材料和AI基础设施先进封装。",
    "creator": "Scarlett Evans",
    "source": "AI Business",
    "category": "投融资信息",
    "relevance": 8
  },
  {
    "title": "新周一晨报：生成式AI如何提供高管所需洞察",
    "link": "https://www.databricks.com/blog/new-monday-morning-report-how-generative-ai-can-deliver-insights-your-executives-need",
    "pubdate": "2026-08-03 22:00:00",
    "contentSnippet": "Databricks发布报告，探讨生成式AI如何为高管提供所需洞察，帮助决策。",
    "creator": "",
    "source": "Databricks",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "Variant功能正式发布，加速半结构化数据摄取",
    "link": "https://www.databricks.com/blog/ingest-semi-structured-data-faster-and-more-efficiently-variant-now-generally-available",
    "pubdate": "2026-08-03 21:44:24",
    "contentSnippet": "Databricks宣布Variant功能正式可用，可更快速高效地摄取JSON、XML、CSV等半结构化数据。",
    "creator": "",
    "source": "Databricks",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "特朗普欲限制公众起诉污染者",
    "link": "https://arstechnica.com/tech-policy/2026/08/trump-wants-the-power-to-stop-the-public-from-suing-polluters",
    "pubdate": "2026-08-03 21:33:56",
    "contentSnippet": "特朗普的司法部表示，公民不应再有权执行环境法律。",
    "creator": "Sarah J. Morath, The Conversation",
    "source": "Ars Technica",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "拜罗伊特音乐节AI版《指环》遭差评",
    "link": "https://www.theguardian.com/music/2026/aug/03/wagner-bayreuth-ring-cycle-review-ai-staging-dispenses-with-drama-to-create-banal-bric-a-brac",
    "pubdate": "2026-08-03 21:28:07",
    "contentSnippet": "拜罗伊特音乐节150周年庆典推出AI生成的瓦格纳《指环》舞台视觉，被批为“平庸混乱的垃圾”，缺乏戏剧性。",
    "creator": "Flora Willson",
    "source": "The Guardian AI",
    "category": "行业动态",
    "relevance": 6
  }
];
