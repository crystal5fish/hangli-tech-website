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
export const newsDate = "2026-08-24";
export const newsItems: NewsItem[] = [
  {
    "title": "AI模型平台Hugging Face探索出售，估值或达130亿美元",
    "link": "https://siliconangle.com/2026/08/23/report-ai-model-hub-hugging-face-exploring-sale-at-13b-valuation",
    "pubdate": "2026-08-24 07:05:29",
    "contentSnippet": "据报道，Hugging Face正在探索出售，估值可能超过130亿美元，已聘请银行接洽潜在买家，谈判尚处早期。",
    "creator": "Duncan Riley",
    "source": "SiliconANGLE AI",
    "category": "投融资信息",
    "relevance": 9
  },
  {
    "title": "匿名AI编码模型Ox Alpha来源成谜",
    "link": "https://siliconangle.com/2026/08/23/nobody-knows-who-built-ai-coding-model-ox-alpha-or-where-the-code-goes",
    "pubdate": "2026-08-24 06:37:37",
    "contentSnippet": "自8月20日起，匿名提供者通过OpenRouter免费提供前沿编码模型Ox Alpha，无人知晓其开发者及代码去向。",
    "creator": "Duncan Riley",
    "source": "SiliconANGLE AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "Sam Altman担忧AI被少数强大玩家控制",
    "link": "https://www.businessinsider.com/sam-altman-openai-risks-ai-2026-8",
    "pubdate": "2026-08-24 05:38:35",
    "contentSnippet": "OpenAI CEO Sam Altman表示，对AI失控的担忧可能导致人们用自由换取安全。",
    "creator": "Truman Dickerson",
    "source": "Business Insider",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "约会应用联合创始人因AI假网红丑闻离职",
    "link": "https://futurism.com/artificial-intelligence/dating-app-cofounder-bails-scandal-fake-ai-influencers",
    "pubdate": "2026-08-24 01:06:00",
    "contentSnippet": "约会应用联合创始人在发现应用使用AI生成假网红后离职，该应用被指为“心理战”。",
    "creator": "Frank Landymore",
    "source": "Futurism AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "得州州长称数据中心遭抵制是自食其果",
    "link": "https://www.businessinsider.com/greg-abbott-texas-data-centers-backlash-2026-8",
    "pubdate": "2026-08-24 00:42:33",
    "contentSnippet": "得州州长阿博特最初支持扩建AI数据中心，但当地居民强烈反对，迫使他改变立场。",
    "creator": "Lauren Edmonds",
    "source": "Business Insider",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "为什么每个AI代理都需要组织架构图",
    "link": "https://siliconangle.com/2026/08/23/why-every-ai-agent-needs-an-org-chart",
    "pubdate": "2026-08-24 00:00:52",
    "contentSnippet": "一位首席信息官指出，权限只告诉AI代理能做什么，却未说明意图，因此需要组织架构图来明确职责。",
    "creator": "Dux Raymond Sy",
    "source": "SiliconANGLE AI",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "Flock CEO呼吁妥协，监控技术遭抵制",
    "link": "https://techcrunch.com/2026/08/23/flock-ceo-calls-for-compromise-as-surveillance-company-faces-growing-backlash",
    "pubdate": "2026-08-23 23:30:00",
    "contentSnippet": "Flock Safety的监控技术因可能被滥用而面临公众强烈反对，CEO呼吁各方妥协。",
    "creator": "Anthony Ha",
    "source": "TechCrunch AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "用受版权保护的书籍训练AI合法吗？很复杂",
    "link": "https://techcrunch.com/2026/08/23/is-it-legal-to-train-ai-models-on-copyrighted-books-its-complicated",
    "pubdate": "2026-08-23 23:00:00",
    "contentSnippet": "多数作者在不知情的情况下为AI工具贡献了作品，这可能违法，但法律界定复杂。",
    "creator": "Amanda Silberling",
    "source": "TechCrunch AI",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "数据中心吸走建筑工人，导致住房建设无人可用",
    "link": "https://futurism.com/artificial-intelligence/data-centers-construction-worker-labor-housing-market",
    "pubdate": "2026-08-23 22:05:00",
    "contentSnippet": "专家称许多建筑工人转向数据中心建设，导致住房建筑工人短缺。",
    "creator": "Joe Wilkins",
    "source": "Futurism AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "AI债务炸弹危机？不，这不是安然2.0",
    "link": "https://www.theguardian.com/technology/2026/aug/23/ai-debt-bomb-crisis",
    "pubdate": "2026-08-23 22:00:34",
    "contentSnippet": "专家警告数据中心建设债务危机，但作者认为风险与过去不同且可恢复，无需过度担忧。",
    "creator": "Gene Marks",
    "source": "The Guardian AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "苹果可折叠iPhone细节及零售店变革",
    "link": "https://www.bloomberg.com/news/newsletters/2026-08-23/apple-s-foldable-iphone-details-retail-store-changes-for-new-home-products-mt5vjf61",
    "pubdate": "2026-08-23 22:00:01",
    "contentSnippet": "苹果可折叠iPhone细节曝光，零售店将调整以适配新产品，同时iPhone价格可能上涨。",
    "creator": "Mark Gurman",
    "source": "Bloomberg Technology",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "Meta诉讼：社交媒体诉讼威胁大型科技公司",
    "link": "https://www.bloomberg.com/news/articles/2026-08-23/meta-trial-how-social-media-lawsuits-threaten-big-tech",
    "pubdate": "2026-08-23 22:00:00",
    "contentSnippet": "针对社交媒体巨头的诉讼浪潮指控其平台设计导致青少年伤害，首例人身伤害案陪审团裁定Meta和谷歌疏忽，赔偿600万美元。",
    "creator": "Peter Blumberg",
    "source": "Bloomberg Technology",
    "category": "安全监管",
    "relevance": 9
  },
  {
    "title": "WRC唯一真“人机共生”展台：沉浸式机器人咖啡店",
    "link": "https://www.qbitai.com/2026/08/478319.html",
    "pubdate": "2026-08-23 21:20:00",
    "contentSnippet": "WRC展会上出现唯一真“人机共生”展台，是一家沉浸式机器人咖啡店，强调真实体验。",
    "creator": "衡宇",
    "source": "量子位",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "开发者创建AI水印移除工具引关注",
    "link": "https://www.businessinsider.com/created-viral-ai-watermark-remover-after-anthropics-announcement-2026-8",
    "pubdate": "2026-08-23 19:32:01",
    "contentSnippet": "一位科技企业家开发了开源AI水印移除工具，挑战Anthropic的水印计划，并因此受到大量关注。",
    "creator": "Agnes Applegate",
    "source": "Business Insider",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "香港教授投身具身智能创业",
    "link": "https://www.qbitai.com/2026/08/478289.html",
    "pubdate": "2026-08-23 19:20:13",
    "contentSnippet": "香港多所大学涌现一批教授投身具身智能领域创业，成为独特现象。",
    "creator": "Jay",
    "source": "量子位",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "天使投资人支持宇树科技创始人",
    "link": "https://www.qbitai.com/2026/08/478234.html",
    "pubdate": "2026-08-23 19:17:22",
    "contentSnippet": "一位投资人曾给王兴兴第一笔200万投资，如今担任另一家机器人公司董事长，继续支持具身机器人创业者。",
    "creator": "Jay",
    "source": "量子位",
    "category": "投融资信息",
    "relevance": 8
  },
  {
    "title": "匿名牛来大模型被扒出智谱血缘，或与Cursor有关",
    "link": "https://www.qbitai.com/2026/08/478191.html",
    "pubdate": "2026-08-23 17:56:12",
    "contentSnippet": "匿名模型被指与智谱有关，可能使用开源GLM训练，引发争议。",
    "creator": "衡宇",
    "source": "量子位",
    "category": "模型发布",
    "relevance": 8
  },
  {
    "title": "英伟达AI服务器将涨价15%，1GW数据中心成本激增50亿美元",
    "link": "https://www.qbitai.com/2026/08/478164.html",
    "pubdate": "2026-08-23 17:51:49",
    "contentSnippet": "内存成本飙升导致英伟达AI服务器涨价15%，数据中心成本大幅增加。",
    "creator": "衡宇",
    "source": "量子位",
    "category": "产品发布",
    "relevance": 9
  },
  {
    "title": "全球首次！机器人迎战网球运动员，极限救球",
    "link": "https://www.qbitai.com/2026/08/478093.html",
    "pubdate": "2026-08-23 17:45:27",
    "contentSnippet": "机器人AstraTennis首次对战网球运动员，展示极限救球和快速起身技术。",
    "creator": "衡宇",
    "source": "量子位",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "读博年轻人押注双足人形机器人一体化大脑",
    "link": "https://www.qbitai.com/2026/08/478020.html",
    "pubdate": "2026-08-23 17:29:59",
    "contentSnippet": "几个博士生创业，研发双足人形机器人一体化大脑，展示自动驾驶卡丁车技术，不走硅谷路线。",
    "creator": "衡宇",
    "source": "量子位",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "OpenAI高管警告AI网络攻击威胁",
    "link": "https://www.theguardian.com/technology/2026/aug/23/openai-cyber-attacks-threat-chris-lehane",
    "pubdate": "2026-08-23 16:00:27",
    "contentSnippet": "OpenAI全球事务官Chris Lehane警告需防范AI发起的持续网络攻击，并呼吁制定新安全标准。",
    "creator": "Robert Booth",
    "source": "The Guardian AI",
    "category": "安全监管",
    "relevance": 9
  },
  {
    "title": "上纬新材开启家庭机器人预订",
    "link": "https://www.qbitai.com/2026/08/478017.html",
    "pubdate": "2026-08-23 15:17:41",
    "contentSnippet": "上纬新材宣布个人机器人开启预订，拉开家庭机器人消费时代序幕。",
    "creator": "量子位的朋友们",
    "source": "量子位",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "无界动力深度参与WRC主论坛",
    "link": "https://www.qbitai.com/2026/08/478007.html",
    "pubdate": "2026-08-23 15:12:22",
    "contentSnippet": "无界动力参与世界机器人大会主论坛及多场活动，展示从世界模型到现实生产力的应用。",
    "creator": "量子位的朋友们",
    "source": "量子位",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "人形机器人百米跑9.39秒破纪录",
    "link": "https://www.bloomberg.com/news/articles/2026-08-23/humanoid-robot-beats-usain-bolt-s-100m-world-record-in-beijing",
    "pubdate": "2026-08-23 15:07:21",
    "contentSnippet": "北京世界人形机器人运动会上，人形机器人百米跑9.39秒，超越博尔特世界纪录。",
    "creator": "Bloomberg News",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "阿里拟融资百亿美元加码AI",
    "link": "https://www.bloomberg.com/news/articles/2026-08-23/alibaba-to-raise-10-billion-by-selling-shares-for-ai-expansion",
    "pubdate": "2026-08-23 14:13:28",
    "contentSnippet": "阿里巴巴寻求通过股票出售筹集约102亿美元，以竞争AI全球领导地位，遭投资者Michael Burry批评。",
    "creator": "Trista Xinyi Luo and Dave Sebastian",
    "source": "Bloomberg Technology",
    "category": "投融资信息",
    "relevance": 8
  },
  {
    "title": "DeepSeek取消周末高峰定价",
    "link": "https://www.bloomberg.com/news/articles/2026-08-23/deepseek-ends-weekend-peak-pricing-for-api-users-from-today",
    "pubdate": "2026-08-23 13:57:57",
    "contentSnippet": "DeepSeek宣布自8月23日起，周末API使用不再区分高峰和低谷，统一按低谷价格计费。",
    "creator": "Bloomberg News",
    "source": "Bloomberg Technology",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "哈佛699美元创业训练营提供AI导师化身",
    "link": "https://techcrunch.com/2026/08/22/harvards-699-startup-bootcamp-offers-ai-avatars-of-its-instructors",
    "pubdate": "2026-08-23 05:46:56",
    "contentSnippet": "哈佛商学院Foundry项目使用AI化身在模拟路演和董事会会议中提供反馈。",
    "creator": "Anthony Ha",
    "source": "TechCrunch AI",
    "category": "产品发布",
    "relevance": 6
  },
  {
    "title": "DeepMind校友创立的Inherent称其AI‘队友’在复现研究上超越Anthropic和OpenAI",
    "link": "https://techcrunch.com/2026/08/22/inherent-founded-by-deepmind-alumni-says-its-ai-teammate-just-outperformed-anthropic-and-openai-at-replicating-research",
    "pubdate": "2026-08-23 03:00:00",
    "contentSnippet": "英国AI实验室Inherent发布Faraday，其复现科学论文的能力或成创新基石。",
    "creator": "Anna Heim",
    "source": "TechCrunch AI",
    "category": "模型发布",
    "relevance": 8
  },
  {
    "title": "患者因AI‘接待员’听不懂而跳过就医",
    "link": "https://futurism.com/artificial-intelligence/patients-skipping-doctor-ai-receptionist",
    "pubdate": "2026-08-23 00:07:00",
    "contentSnippet": "AI接待员无法理解患者表述，导致患者挂断电话并放弃预约。",
    "creator": "Frank Landymore",
    "source": "Futurism AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "前沿AI实验室仍不愿说明如何控制失控模型",
    "link": "https://techcrunch.com/2026/08/22/frontier-ai-labs-still-wont-say-how-theyd-contain-a-rogue-model",
    "pubdate": "2026-08-23 00:00:00",
    "contentSnippet": "新研究发现领先AI实验室缺乏公开的失控模型遏制计划，引发对准备工作的质疑。",
    "creator": "Rebecca Bellan",
    "source": "TechCrunch AI",
    "category": "安全监管",
    "relevance": 8
  }
];
