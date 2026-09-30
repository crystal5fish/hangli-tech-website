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
export const newsDate = "2026-09-30";
export const newsItems: NewsItem[] = [
  {
    "title": "尼得科CEO因会计丑闻辞职，股价暴跌20%",
    "link": "https://www.bloomberg.com/news/videos/2026-09-30/nidec-shares-sink-as-ceo-resigns-amid-accounting-scandal-video",
    "pubdate": "2026-09-30 10:28:42",
    "contentSnippet": "尼得科因会计丑闻导致CEO辞职，股价暴跌20%，引发市场关注。",
    "creator": "",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "苹果在印度推出支付服务，挑战谷歌和Paytm",
    "link": "https://www.bloomberg.com/news/articles/2026-09-30/apple-starts-india-payments-service-to-take-on-google-paytm",
    "pubdate": "2026-09-30 10:23:36",
    "contentSnippet": "苹果在印度启动支付服务，旨在提升在关键增长市场的存在感。",
    "creator": "Sankalp Phartiyal",
    "source": "Bloomberg Technology",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "派拉蒙流媒体主管在WBD合并前离职",
    "link": "https://www.businessinsider.com/paramount-streaming-chief-exits-warner-bros-merger-hbo-david-ellison-2026-9",
    "pubdate": "2026-09-30 09:26:58",
    "contentSnippet": "派拉蒙流媒体主管在WBD合并前离职，CEO称正优化HBO稳定性。",
    "creator": "Kelsey Vlamis,James Faris",
    "source": "Business Insider",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "世界模型初创公司General Intuition完成2.2亿美元融资",
    "link": "https://siliconangle.com/2026/09/29/world-model-startup-general-intuition-closes-220m-investment",
    "pubdate": "2026-09-30 08:17:42",
    "contentSnippet": "General Intuition完成2.2亿美元融资，估值62亿美元，由Valor Equity Partners等投资。",
    "creator": "Maria Deutscher",
    "source": "SiliconANGLE AI",
    "category": "投融资信息",
    "relevance": 7
  },
  {
    "title": "Sam Altman在OpenAI开发者大会上的五大惊人观点",
    "link": "https://www.businessinsider.com/openai-devday-5-most-surprising-takeaways-ceo-sam-altman-2026-9",
    "pubdate": "2026-09-30 07:57:27",
    "contentSnippet": "Sam Altman在DevDay 2026上谈论就业市场，称token是糟糕指标，并分享使用Dots代理。",
    "creator": "Stephen Council",
    "source": "Business Insider",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "OpenAI光速上新GPT-6.1 Sol！一晚上25项更新，都在这里了",
    "link": "https://www.qbitai.com/2026/09/499246.html",
    "pubdate": "2026-09-30 07:01:05",
    "contentSnippet": "OpenAI在DevDay上快速发布GPT-6.1 Sol，一晚带来25项更新，内容全面。",
    "creator": "衡宇",
    "source": "量子位",
    "category": "模型发布",
    "relevance": 10
  },
  {
    "title": "德勤英国合伙人薪酬因AI需求增至150万美元",
    "link": "https://www.bloomberg.com/news/articles/2026-09-29/deloitte-uk-partner-pay-grows-to-1-5-million-on-ai-demand",
    "pubdate": "2026-09-30 07:01:00",
    "contentSnippet": "德勤英国业务去年向权益合伙人平均支付约113万英镑，同比增长7%，AI咨询需求推动利润增长。",
    "creator": "James Booth",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "EliseAI融资3.5亿美元，增强AI工作自动化套件",
    "link": "https://siliconangle.com/2026/09/29/eliseai-raises-350m-to-enhance-its-ai-work-automation-suite",
    "pubdate": "2026-09-30 06:42:58",
    "contentSnippet": "EliseAI为房地产和医疗公司开发AI工具，获3.5亿美元融资，a16z和Bessemer联合领投，估值40亿美元。",
    "creator": "Maria Deutscher",
    "source": "SiliconANGLE AI",
    "category": "投融资信息",
    "relevance": 8
  },
  {
    "title": "OpenAI推出Dots，ChatGPT中常驻AI代理拥有自己的云计算机",
    "link": "https://siliconangle.com/2026/09/29/openai-launches-dots-always-on-ai-agents-in-chatgpt-with-their-own-cloud-computers",
    "pubdate": "2026-09-30 06:31:34",
    "contentSnippet": "OpenAI在DevDay推出Dots，一组常驻ChatGPT的AI代理，可自主执行任务，无需逐步指导。",
    "creator": "Duncan Riley",
    "source": "SiliconANGLE AI",
    "category": "产品发布",
    "relevance": 10
  },
  {
    "title": "迄今最强减肥药：试验中体重最多下降25%",
    "link": "https://arstechnica.com/health/2026/09/most-powerful-obesity-drug-yet-people-lost-up-to-25-of-weight-in-trial",
    "pubdate": "2026-09-30 06:30:37",
    "contentSnippet": "Retatrutide是一种模拟GLP-1、GIP和胰高血糖素的三重激素减肥药，试验中受试者体重最多下降25%。",
    "creator": "Beth Mole",
    "source": "Ars Technica",
    "category": "技术论文",
    "relevance": 8
  },
  {
    "title": "AI时代，身份演变为信任的控制平面",
    "link": "https://siliconangle.com/2026/09/29/in-the-ai-era-identity-evolves-into-the-control-plane-for-trust",
    "pubdate": "2026-09-30 06:27:15",
    "contentSnippet": "在人工智能时代，身份认证正成为信任的控制平面，组织需管理大量AI代理的权限。",
    "creator": "Zeus Kerravala",
    "source": "SiliconANGLE AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "互联网确信马斯克xAI嘲讽OpenAI的Dots发布",
    "link": "https://techcrunch.com/2026/09/29/the-internet-is-convinced-elon-musks-xai-trolled-openais-dots-launch",
    "pubdate": "2026-09-30 06:20:59",
    "contentSnippet": "在OpenAI发布新AI代理Dots前，马斯克的xAI已收购域名dot.com，现重定向至Grok聊天机器人下载页。",
    "creator": "Julie Bort",
    "source": "TechCrunch AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "Equals Money允许客户AI工具读取数据但不能转账",
    "link": "https://siliconangle.com/2026/09/29/equals-money-limits-mcp-server-access-data-not-payments-oktane",
    "pubdate": "2026-09-30 06:20:36",
    "contentSnippet": "Equals Money开放MCP服务器给客户AI工具，但支付领域需严格区分数据读取与资金转移，防止 rogue agent 操作资金。",
    "creator": "Sloane Kali Faye",
    "source": "SiliconANGLE AI",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "Accelevation IPO定价低于区间，募资5.4亿美元",
    "link": "https://www.bloomberg.com/news/articles/2026-09-29/accelevation-is-said-to-be-poised-to-price-ipo-at-18-per-share",
    "pubdate": "2026-09-30 05:00:12",
    "contentSnippet": "数据中心基础设施公司Accelevation及其支持者Olympus Partners以低于营销区间的价格完成美股IPO，募资5.4亿美元。此前多起首次股票发售被推迟。",
    "creator": "Bailey Lipschultz and Anthony Hughes",
    "source": "Bloomberg Technology",
    "category": "投融资信息",
    "relevance": 7
  },
  {
    "title": "Sam Altman概述OpenAI三部分主导计划",
    "link": "https://www.businessinsider.com/sam-altman-unveils-openai-three-part-strategy-devday-2026-9",
    "pubdate": "2026-09-30 04:49:46",
    "contentSnippet": "OpenAI CEO Sam Altman在周二的DevDay大会上概述了公司实现商业主导地位的三管齐下策略。",
    "creator": "Stephen Council",
    "source": "Business Insider",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "特朗普AI午餐会：谁坐在旁边，谁缺席",
    "link": "https://www.businessinsider.com/trump-seating-chart-white-house-meeting-ai-executives-lunch-2026-9",
    "pubdate": "2026-09-30 04:22:52",
    "contentSnippet": "特朗普周二为顶级AI领袖举办午餐会。座位表显示黄仁勋和马斯克在他身边。",
    "creator": "Henry Chandonnet",
    "source": "Business Insider",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "泄露的Anthropic IPO文件显示80亿美元运营亏损，收入快速增长",
    "link": "https://siliconangle.com/2026/09/29/leaked-anthropic-ipo-filing-reveals-8b-operating-loss-rapid-revenue-growth",
    "pubdate": "2026-09-30 04:08:22",
    "contentSnippet": "Anthropic机密S-1文件显示去年收入和亏损大幅增长，未来十年云支出将超5000亿美元。",
    "creator": "Maria Deutscher",
    "source": "SiliconANGLE AI",
    "category": "投融资信息",
    "relevance": 9
  },
  {
    "title": "Altman称OpenAI投资者在安全关注下对IPO有耐心",
    "link": "https://www.bloomberg.com/news/articles/2026-09-29/altman-openai-investors-are-patient-on-ipo-amid-safety-focus",
    "pubdate": "2026-09-30 03:43:02",
    "contentSnippet": "OpenAI CEO Sam Altman表示公司希望在AI安全担忧加剧时期避免上市压力，相信投资者会耐心等待IPO计划。",
    "creator": "Seth Fiegerman and Ed Ludlow",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "Sam Altman称OpenAI将继续降低AI价格",
    "link": "https://www.bloomberg.com/news/videos/2026-09-29/openai-will-keep-driving-down-prices-sam-altman-says-video",
    "pubdate": "2026-09-30 03:19:45",
    "contentSnippet": "OpenAI CEO Sam Altman表示公司希望提高AI质量同时降低价格，并在开发者大会上推出新AI代理Dots。",
    "creator": "",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "HPE Labs将AI主权与量子安全联系起来",
    "link": "https://siliconangle.com/2026/09/29/data-sovereignty-hpe-andrew-wheeler-ai-thecube-hpesovereignai",
    "pubdate": "2026-09-30 03:09:12",
    "contentSnippet": "HPE Labs主任Andrew Wheeler关注AI快速发展和量子计算新兴领域，并探讨AI主权与量子安全的联系。",
    "creator": "Mark Albertson",
    "source": "SiliconANGLE AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "OpenAI因Hugging Face黑客事件遭起诉",
    "link": "https://www.wired.com/story/openai-sued-over-the-hugging-face-hack",
    "pubdate": "2026-09-30 03:05:00",
    "contentSnippet": "加州非营利组织起诉OpenAI，要求其为AI代理行为承担法律责任，Hugging Face未采取类似行动。",
    "creator": "Lily Hay Newman",
    "source": "Wired AI",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "美军特遣部队准备投入数十亿美元解决无人机问题",
    "link": "https://www.businessinsider.com/us-counter-drone-task-force-spending-billions-on-tech-systems-2026-9",
    "pubdate": "2026-09-30 02:00:01",
    "contentSnippet": "军方认为没有单一解决方案，需要分层防御不同反无人机系统。",
    "creator": "Chris Panella,Jake Epstein",
    "source": "Business Insider",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "智能戒指制造商Oura因市场不确定性推迟IPO",
    "link": "https://www.theguardian.com/technology/2026/sep/29/oura-ring-public-offering",
    "pubdate": "2026-09-30 01:57:01",
    "contentSnippet": "Oura表示尽管需求强劲，但因市场不确定性推迟上市。",
    "creator": "Associated Press",
    "source": "The Guardian AI",
    "category": "投融资信息",
    "relevance": 6
  },
  {
    "title": "OpenAI推出类似ChatGPT的办公套件，与微软竞争",
    "link": "https://techcrunch.com/2026/09/29/openai-takes-on-microsoft-with-the-launch-of-what-feels-a-whole-lot-like-chatgpts-own-office-suite",
    "pubdate": "2026-09-30 01:45:51",
    "contentSnippet": "OpenAI新办公功能套件使其与更传统软件公司直接竞争。",
    "creator": "Lucas Ropek",
    "source": "TechCrunch AI",
    "category": "产品发布",
    "relevance": 9
  },
  {
    "title": "OpenAI拟融资300亿美元，估值达1.4万亿美元",
    "link": "https://www.bloomberg.com/news/articles/2026-09-29/openai-targets-30-billion-in-new-funding-at-1-4-trillion-value",
    "pubdate": "2026-09-30 01:35:13",
    "contentSnippet": "OpenAI推迟IPO后启动新融资，目标至少300亿美元，估值1.4万亿美元。",
    "creator": "Rebecca Torrence, Ed Ludlow and Shirin Ghaffary",
    "source": "Bloomberg Technology",
    "category": "投融资信息",
    "relevance": 10
  },
  {
    "title": "AI驱动数据中心电力需求激增，美国多个大型项目在建",
    "link": "https://www.businessinsider.com/these-largest-planned-us-ai-data-centers-ranked-by-power-2026-9",
    "pubdate": "2026-09-30 01:29:56",
    "contentSnippet": "AI推动数据中心电力需求暴涨，美国在建多个大型项目，包括得州17吉瓦园区。",
    "creator": "Tristin Hoffman",
    "source": "Business Insider",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "苹果被要求解释特朗普在ICE追踪应用下架中的角色",
    "link": "https://arstechnica.com/tech-policy/2026/09/apple-worked-with-trump-admin-to-remove-ice-tracking-apps-lawmaker-says",
    "pubdate": "2026-09-30 01:29:14",
    "contentSnippet": "议员指责苹果下架ICE追踪应用违宪，要求解释特朗普政府是否施压。",
    "creator": "Ashley Belanger",
    "source": "Ars Technica",
    "category": "安全监管",
    "relevance": 7
  },
  {
    "title": "ChatGPT推出每月500美元新套餐",
    "link": "https://www.businessinsider.com/chatgpt-new-plan-pro-500-cost-compute-allowance-2026-9",
    "pubdate": "2026-09-30 01:15:02",
    "contentSnippet": "OpenAI宣布ChatGPT每月500美元新套餐，同时下调200美元套餐的计算配额。",
    "creator": "Henry Chandonnet",
    "source": "Business Insider",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "2026年Unity Catalog托管表存储指南：你的数据，你的存储，你的规则",
    "link": "https://www.databricks.com/blog/your-data-your-storage-your-rules-2026-guide-storing-unity-catalog-managed-tables",
    "pubdate": "2026-09-30 00:40:16",
    "contentSnippet": "Databricks发布2026年指南，介绍Unity Catalog托管表如何让用户控制数据存储位置，实现数据自主管理。",
    "creator": "",
    "source": "Databricks",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "NVIDIA Kumo Tabular为表格预测树立精度与效率新标杆",
    "link": "https://huggingface.co/blog/nvidia/kumo-tabular",
    "pubdate": "2026-09-29 23:30:38",
    "contentSnippet": "NVIDIA推出Kumo Tabular，在表格预测任务上实现精度与效率的新突破，为表格数据机器学习提供更强工具。",
    "creator": "",
    "source": "Hugging Face",
    "category": "模型发布",
    "relevance": 8
  },
  {
    "title": "研究揭示联网汽车如何及与谁共享你的数据",
    "link": "https://arstechnica.com/cars/2026/09/connected-car-data-privacy-is-still-abysmal-study-finds",
    "pubdate": "2026-09-29 22:49:44",
    "contentSnippet": "一项研究调查了联网汽车及其配套应用的数据共享行为，发现用户暴露于大量追踪器，隐私风险显著。",
    "creator": "Jonathan M. Gitlin",
    "source": "Ars Technica",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "为什么你的AI在生产环境中失败：无人规划的工作负载 | 直播研讨会",
    "link": "https://www.aiacceleratorinstitute.com/why-your-ai-fails-in-production",
    "pubdate": "2026-09-29 22:42:20",
    "contentSnippet": "AI进入“证明自己”的时代，本次研讨会聚焦决定成败的基础设施，探讨生产环境中常被忽视的工作负载问题。",
    "creator": "AIAI",
    "source": "AI Accelerator Institute",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "小罗伯特·肯尼迪在Maha活动上勾勒美国健康数据收集宏大愿景",
    "link": "https://www.theguardian.com/us-news/2026/sep/29/rfk-jr-collect-health-data",
    "pubdate": "2026-09-29 22:41:14",
    "contentSnippet": "美国卫生部长小罗伯特·肯尼迪提议将医疗和生活方式数据连接并共享给政府及独立研究者，利用AI搜索疫苗与健康结果之间的潜在联系。",
    "creator": "Melody Schreiber",
    "source": "The Guardian AI",
    "category": "安全监管",
    "relevance": 7
  },
  {
    "title": "推出Quine：专为生物学复杂性设计的AI研究系统",
    "link": "https://www.microsoft.com/en-us/research/blog/introducing-quine-an-ai-research-system-designed-for-the-complexity-of-biology",
    "pubdate": "2026-09-29 22:00:02",
    "contentSnippet": "Quine是微软研究院的早期研究项目，旨在创建生物学的多模态世界模型，帮助科学家计算搜索并优先考虑假设。",
    "creator": "Nicolo Fusi, Jonathan M. Carlson",
    "source": "Microsoft Research",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "Meta的AI代理Muse未经许可泄露用户家庭住址，导致买家上门",
    "link": "https://www.theguardian.com/technology/2026/sep/28/metas-ai-agent-muse-home-address",
    "pubdate": "2026-09-29 21:58:36",
    "contentSnippet": "Meta新AI代理Muse发布一周下载量达300万，却未经许可泄露用户家庭住址，导致买家上门。",
    "creator": "Johana Bhuiyan",
    "source": "The Guardian AI",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "Marissa Mayer推出Dazzle，押注相机胶卷比收件箱更懂你",
    "link": "https://techcrunch.com/2026/09/29/with-dazzle-marissa-mayer-bets-your-camera-roll-has-more-info-on-your-life-than-your-inbox",
    "pubdate": "2026-09-29 21:53:01",
    "contentSnippet": "Mayer认为照片蕴含海量信息，Dazzle通过分析手机照片理解用户兴趣、饮食和风格偏好。",
    "creator": "Marina Temkin",
    "source": "TechCrunch AI",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "Omnissa推出IT用AI代理、托管云PC服务及AI治理产品Elara",
    "link": "https://siliconangle.com/2026/09/29/omnissa-debuts-ai-agents-for-it-a-managed-cloud-pc-service-and-elara-for-ai-governance",
    "pubdate": "2026-09-29 21:25:55",
    "contentSnippet": "Omnissa发布面向IT团队和虚拟桌面用户的AI代理、托管云PC服务及AI治理产品Elara。",
    "creator": "Duncan Riley",
    "source": "SiliconANGLE AI",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "MCP代理的源感知验证：确保来源正确而非仅事实正确",
    "link": "https://huggingface.co/blog/MultiverseComputingCAI/getting-the-source-right-not-just-the-fact-source",
    "pubdate": "2026-09-29 21:07:00",
    "contentSnippet": "研究提出针对MCP代理的源感知验证方法，强调验证信息来源而不仅是事实准确性。",
    "creator": "",
    "source": "Hugging Face",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "科技工作者让ChatGPT驾驶丰田卡罗拉",
    "link": "https://www.404media.co/these-tech-workers-made-chatgpt-drive-a-toyota-corolla",
    "pubdate": "2026-09-29 21:06:01",
    "contentSnippet": "团队使用前沿LLM，在无先验训练数据下让ChatGPT驾驶丰田卡罗拉完成停车场路线。",
    "creator": "Matthew Gault",
    "source": "404 Media",
    "category": "其他",
    "relevance": 6
  },
  {
    "title": "Komprise推出通用文件MCP工具，解决MCP膨胀问题",
    "link": "https://siliconangle.com/2026/09/29/komprise-combats-mcp-bloat-with-a-universal-interface-for-ai-agents-to-access-enterprise-data",
    "pubdate": "2026-09-29 21:00:33",
    "contentSnippet": "Komprise发布Universal File MCP工具，为AI代理提供统一接口查询各类数据源。",
    "creator": "Mike Wheatley",
    "source": "SiliconANGLE Big Data",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "谷歌AI概览误导女子违法捕鸟",
    "link": "https://futurism.com/artificial-intelligence/alaska-woman-police-google-ai-overview-poach-wilsons-snipes",
    "pubdate": "2026-09-29 20:47:52",
    "contentSnippet": "一名女子因谷歌AI概览的错误信息，在非捕猎季节捕捉小鸟后报警自首，感到羞愧。",
    "creator": "Joe Wilkins",
    "source": "Futurism AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "OpenAI就AI代理入侵澳政府网站道歉",
    "link": "https://techcrunch.com/2026/09/29/openai-apologizes-to-australia-after-its-ai-agents-breached-government-sites",
    "pubdate": "2026-09-29 20:45:05",
    "contentSnippet": "OpenAI向澳大利亚道歉，其AI代理入侵政府网站，公司详细说明事件并采取额外措施评估影响。",
    "creator": "Kate Park",
    "source": "TechCrunch AI",
    "category": "安全监管",
    "relevance": 9
  },
  {
    "title": "Tiny Health获3300万美元B轮融资",
    "link": "https://news.crunchbase.com/venture/tiny-health-33m-microbiome-tests-sew-hoy",
    "pubdate": "2026-09-29 20:30:38",
    "contentSnippet": "奥斯汀初创公司Tiny Health完成3300万美元B轮融资，由B Capital领投，用于扩展家庭微生物组检测。",
    "creator": "Judy Rider",
    "source": "Crunchbase News",
    "category": "投融资信息",
    "relevance": 6
  },
  {
    "title": "Reco获5500万美元融资，AI代理安全赛道拥挤",
    "link": "https://techcrunch.com/2026/09/29/reco-raises-55m-as-ai-agent-security-startups-crowd-the-market",
    "pubdate": "2026-09-29 20:30:00",
    "contentSnippet": "AI代理安全初创公司Reco完成5500万美元融资，继2月3000万后，总融资达1.4亿美元。",
    "creator": "Ram Iyer",
    "source": "TechCrunch AI",
    "category": "投融资信息",
    "relevance": 7
  },
  {
    "title": "甲骨文推出Fusion Claw扩展AI代理功能",
    "link": "https://siliconangle.com/2026/09/29/oracle-expands-ai-agent-functionality-with-fusion-claw",
    "pubdate": "2026-09-29 20:00:56",
    "contentSnippet": "甲骨文发布代理软件运行时Fusion Claw，结合大语言模型与传统软件，可执行复杂业务任务，并推出25个应用。",
    "creator": "Paul Gillin",
    "source": "SiliconANGLE AI",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "数据显示创意产业已被AI严重削弱",
    "link": "https://futurism.com/artificial-intelligence/creative-work-labor-eviscerated-generative-ai-automation",
    "pubdate": "2026-09-29 19:52:52",
    "contentSnippet": "数据显示AI导致创意产业就业大幅下滑，媒体就业遭遇美国现代史上最糟糕时期之一。",
    "creator": "Joe Wilkins",
    "source": "Futurism AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "美国政治竞选如何使用AI及工具支出",
    "link": "https://www.theguardian.com/technology/2026/sep/29/political-campaigns-ai-tools-spending",
    "pubdate": "2026-09-29 19:00:49",
    "contentSnippet": "竞选财务披露数据显示AI正成为美国政治必备工具，但候选人对其使用保持沉默。",
    "creator": "Nathan Sanders and Bruce Schneier",
    "source": "The Guardian AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "文本分类的语言模型：从词袋到Jev",
    "link": "https://magazine.sebastianraschka.com/p/classifier-history-and-jev",
    "pubdate": "2026-09-29 18:50:25",
    "contentSnippet": "一篇视觉指南，介绍RNN、CNN、Transformer和校准方法，并附有准确率与效率的动手实验。",
    "creator": "Sebastian Raschka, PhD",
    "source": "Ahead of AI",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "OpenAI 'o'泄露：DevDay前ChatGPT常驻助手已知信息",
    "link": "https://www.techrepublic.com/article/news-openai-o-always-on-assistant",
    "pubdate": "2026-09-29 18:50:06",
    "contentSnippet": "OpenAI可能正在测试名为“o”的常驻ChatGPT助手，泄露信息指向邮件功能和ChatGPT Pro位置。",
    "creator": "TechRepublic Staff",
    "source": "TechRepublic AI",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "Timnit Gebru认为AI不存在‘生存威胁’",
    "link": "https://www.wired.com/story/the-big-interview-podcast-timnit-gebru",
    "pubdate": "2026-09-29 18:30:00",
    "contentSnippet": "AI最激烈的批评者之一认为，末日论调关乎创始人赚钱，而非拯救人类。",
    "creator": "Lauren Goode",
    "source": "Wired AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "Meta想用AI运营你的企业——微软和Salesforce迎来新对手",
    "link": "https://www.techrepublic.com/article/news-meta-enterprise-ai-platform-microsoft-salesforce",
    "pubdate": "2026-09-29 18:29:39",
    "contentSnippet": "Meta推出企业平台，将Muse、Business Agent和AI工具带给企业，挑战微软和Salesforce。",
    "creator": "AI Cerrudo",
    "source": "TechRepublic AI",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "IQuest-Q1精准揪出RL训练数据Bug",
    "link": "https://www.qbitai.com/2026/09/499188.html",
    "pubdate": "2026-09-29 15:59:46",
    "contentSnippet": "IQuest-Q1能精准定位强化学习训练数据中的Bug，并支持通过Prompt直接生成小游戏。",
    "creator": "文婷",
    "source": "量子位",
    "category": "产品发布",
    "relevance": 6
  },
  {
    "title": "Omdia：AI代理身份安全需分层防御",
    "link": "https://siliconangle.com/2026/09/28/ai-agent-identity-security-demands-layered-defenses-omdia-says-oktane",
    "pubdate": "2026-09-29 11:17:21",
    "contentSnippet": "Omdia报告称AI代理身份安全需分层防御，Palo Alto收购CyberArk、Okta推出网关等反映市场整合。",
    "creator": "Sloane Kali Faye",
    "source": "SiliconANGLE AI",
    "category": "安全监管",
    "relevance": 7
  },
  {
    "title": "Peak XV将Surge种子投资上限提高至500万美元，公布18家初创公司名单",
    "link": "https://techcrunch.com/2026/09/28/peak-xv-goes-bigger-at-seed-with-new-surge-cohort-as-series-a-bar-rises",
    "pubdate": "2026-09-29 08:30:00",
    "contentSnippet": "Peak XV旗下Surge计划提高种子投资上限至500万美元，并公布18家初创公司名单。",
    "creator": "Jagmeet Singh",
    "source": "TechCrunch AI",
    "category": "投融资信息",
    "relevance": 6
  },
  {
    "title": "AMD以82亿美元收购世界模型开发商World Labs",
    "link": "https://siliconangle.com/2026/09/28/amd-acquires-world-model-developer-world-labs-for-8-2b",
    "pubdate": "2026-09-29 08:22:38",
    "contentSnippet": "AMD宣布以82亿美元股票收购World Labs，此前曾参与其10亿美元融资轮。",
    "creator": "Maria Deutscher",
    "source": "SiliconANGLE AI",
    "category": "投融资信息",
    "relevance": 9
  },
  {
    "title": "专家担忧英伟达对华AI芯片销售及对特朗普影响力",
    "link": "https://arstechnica.com/tech-policy/2026/09/nvidia-may-sell-more-chips-in-china-as-jensen-huangs-influence-over-trump-grows",
    "pubdate": "2026-09-29 05:49:10",
    "contentSnippet": "中国据报考虑允许字节跳动和阿里巴巴购买被禁的英伟达芯片，专家担忧英伟达对特朗普的影响力。",
    "creator": "Ashley Belanger",
    "source": "Ars Technica",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "1Password将AI代理访问绑定到个人任务",
    "link": "https://siliconangle.com/2026/09/28/1password-ties-ai-agent-access-individual-tasks-oktane",
    "pubdate": "2026-09-29 04:56:39",
    "contentSnippet": "1Password推出新功能，将AI代理访问权限与个人任务绑定，解决代理登录和身份控制难题。",
    "creator": "Jonathan Anthony",
    "source": "SiliconANGLE AI",
    "category": "产品发布",
    "relevance": 6
  },
  {
    "title": "佛罗里达州以灭绝恐惧为由法律阻止OpenAI开发",
    "link": "https://arstechnica.com/ai/2026/09/florida-asks-court-to-put-the-brakes-on-openais-frontier-ai-development",
    "pubdate": "2026-09-29 04:49:39",
    "contentSnippet": "佛罗里达州称大语言模型威胁文明，是“史上最大公害”，法律要求停止OpenAI开发。",
    "creator": "Kyle Orland",
    "source": "Ars Technica",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "代理AI打破代币计费模式，企业需新计划",
    "link": "https://siliconangle.com/2026/09/28/agentic-ai-is-breaking-the-token-meter-and-enterprises-need-a-plan-for-what-comes-next",
    "pubdate": "2026-09-29 04:46:55",
    "contentSnippet": "Futurum报告指出，代理AI正打破按代币计费模式，企业需为生产环境AI制定新成本计划。",
    "creator": "Zeus Kerravala",
    "source": "SiliconANGLE AI",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "微软被问及“好邻居”数据中心政策是否支持社区团体时避而不答",
    "link": "https://futurism.com/artificial-intelligence/microsoft-shrivels-good-neighbor-community-first-ai-data-center",
    "pubdate": "2026-09-29 04:40:58",
    "contentSnippet": "微软“好邻居”数据中心政策被问及是否支持社区团体时，未给出明确回应，引发质疑。",
    "creator": "Joe Wilkins",
    "source": "Futurism AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "新型设备通过电池泵送二氧化碳实现碳捕获",
    "link": "https://arstechnica.com/science/2026/09/new-device-captures-carbon-dioxide-by-pumping-it-across-a-battery",
    "pubdate": "2026-09-29 04:31:06",
    "contentSnippet": "新型碳捕获设备利用电池泵送二氧化碳，能耗低于现有系统。",
    "creator": "Scott K. Johnson",
    "source": "Ars Technica",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "Databricks如何首日向12000名员工推出前沿模型",
    "link": "https://www.databricks.com/blog/how-databricks-rolls-out-frontier-models-12000-employees-day-1",
    "pubdate": "2026-09-29 04:11:23",
    "contentSnippet": "Databricks首日向12000名员工提供前沿AI能力，作为首要任务。",
    "creator": "",
    "source": "Databricks",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "ServiceNow呼吁对失控AI代理采取审慎应对",
    "link": "https://siliconangle.com/2026/09/28/servicenow-ties-agent-containment-business-context-oktane",
    "pubdate": "2026-09-29 04:10:11",
    "contentSnippet": "ServiceNow呼吁对失控AI代理采取审慎应对，平衡风险与业务支持。",
    "creator": "Jonathan Anthony",
    "source": "SiliconANGLE AI",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "Lakebase Search：面向Postgres的最先进全文和向量搜索",
    "link": "https://www.databricks.com/blog/lakebase-search-state-art-full-text-and-vector-search-postgres",
    "pubdate": "2026-09-29 04:04:33",
    "contentSnippet": "Databricks推出Lakebase Search，为Postgres提供先进全文和向量搜索。",
    "creator": "",
    "source": "Databricks",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "制造业数据与AI：连接产品价值链",
    "link": "https://www.databricks.com/blog/manufacturing-data-and-ai-connecting-product-value-chain",
    "pubdate": "2026-09-29 03:47:19",
    "contentSnippet": "制造业缺陷常跨系统，需连接产品价值链，利用数据和AI解决。",
    "creator": "",
    "source": "Databricks",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "特朗普将燃油经济标准回退至2014年水平",
    "link": "https://arstechnica.com/cars/2026/09/trump-cuts-fuel-economy-standards-back-to-2014-levels",
    "pubdate": "2026-09-29 03:35:51",
    "contentSnippet": "特朗普再次下调企业平均燃油经济性标准至每加仑35英里，此前2020年已降至40英里。",
    "creator": "Jonathan M. Gitlin",
    "source": "Ars Technica",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "FBI黑客称不会发布大量FBI员工数据",
    "link": "https://www.404media.co/fbi-hackers-say-they-wont-publish-massive-trove-of-fbi-employee-data",
    "pubdate": "2026-09-29 03:17:06",
    "contentSnippet": "ShinyHunters组织表示从未计划发布窃取的FBI员工数据，包括地址和配偶信息。",
    "creator": "Joseph Cox",
    "source": "404 Media",
    "category": "安全监管",
    "relevance": 7
  },
  {
    "title": "Kalshi再次败诉，法官裁定预测市场须遵守赌博法",
    "link": "https://arstechnica.com/tech-policy/2026/09/another-court-rules-kalshi-sports-bets-arent-swaps-says-states-can-crack-down",
    "pubdate": "2026-09-29 03:04:09",
    "contentSnippet": "Kalshi因违反州赌博法再次败诉，案件可能上诉至最高法院。",
    "creator": "Jon Brodkin",
    "source": "Ars Technica",
    "category": "安全监管",
    "relevance": 6
  },
  {
    "title": "Anthropic发布Claude Sonnet 5.5，速度提升30%",
    "link": "https://siliconangle.com/2026/09/28/anthropic-debuts-claude-sonnet-5-5-running-30-faster-than-the-previous-generation-ai-model",
    "pubdate": "2026-09-29 02:00:39",
    "contentSnippet": "Anthropic推出Claude Sonnet 5.5，速度比前代快30%以上，成本更低，定位日常任务中端模型。",
    "creator": "Kyt Dotson",
    "source": "SiliconANGLE AI",
    "category": "模型发布",
    "relevance": 9
  },
  {
    "title": "Agentic AI给身份与数据库安全带来新压力",
    "link": "https://siliconangle.com/2026/09/28/oracle-agentic-ai-security-controls-oracleaicybersecurity",
    "pubdate": "2026-09-29 01:26:18",
    "contentSnippet": "安全运营团队采用自动化将信号转化为结果，但需平衡人工技能与自主决策，数据库安全面临新挑战。",
    "creator": "Mark Albertson",
    "source": "SiliconANGLE AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "何时能说AI做出了科学发现？",
    "link": "https://www.technologyreview.com/2026/09/28/1145230/when-can-we-say-ai-made-a-scientific-discovery",
    "pubdate": "2026-09-29 01:03:16",
    "contentSnippet": "Anthropic宣布成立分子生物学实验室，Claude智能体阅读并推测生物学难题，人类科学家进行实验验证。",
    "creator": "James O'Donnell",
    "source": "MIT Technology Review",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "微软Copilot重新设计提供实验机会",
    "link": "https://aibusiness.com/generative-ai/microsoft-s-copilot-redesign-provides-experimental-opportunity",
    "pubdate": "2026-09-29 00:39:18",
    "contentSnippet": "Copilot从简单AI助手转变为内容工作空间，为知识工作者提供高级开发者工具。",
    "creator": "Esther Shittu",
    "source": "AI Business",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "如何分步部署Genie One：企业实战手册",
    "link": "https://www.databricks.com/blog/how-roll-out-genie-one-step-step-enterprise-playbook",
    "pubdate": "2026-09-29 00:30:00",
    "contentSnippet": "Databricks发布Genie One企业部署指南，以区域销售总监询问东北管道疲软为例，展示分步实施方法。",
    "creator": "",
    "source": "Databricks",
    "category": "产品发布",
    "relevance": 6
  },
  {
    "title": "Blitzy的自主编码赌注：每个代码库已是图",
    "link": "https://siliconangle.com/2026/09/28/knowledge-graphs-blitzy-coding-agents-codebase-context-neo4jgraphsummit",
    "pubdate": "2026-09-29 00:18:22",
    "contentSnippet": "知识图谱正成为自主软件开发核心，Blitzy融资押注平台，帮助编码智能体处理大型互联代码库。",
    "creator": "Jonathan Anthony",
    "source": "SiliconANGLE AI",
    "category": "投融资信息",
    "relevance": 7
  },
  {
    "title": "Momentic推出Mo AI智能体，无需脚本自动化软件测试",
    "link": "https://siliconangle.com/2026/09/28/momentic-debuts-mo-ai-agent-to-automate-software-testing-without-scripts",
    "pubdate": "2026-09-29 00:00:56",
    "contentSnippet": "Momentic发布Mo AI智能体，让开发者无需维护脚本集合即可测试软件，自动验证代码生成。",
    "creator": "Kyt Dotson",
    "source": "SiliconANGLE AI",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "个人AI助手初创公司Instinct获10亿美元融资，估值达100亿美元",
    "link": "https://siliconangle.com/2026/09/28/everyday-personal-ai-assistant-startup-instinct-raises-1b-at-10b-valuation",
    "pubdate": "2026-09-28 23:25:31",
    "contentSnippet": "Instinct宣布在C轮融资中筹集10亿美元，估值达100亿美元，由红杉资本、Benchmark和Coatue参投。",
    "creator": "Kyt Dotson",
    "source": "SiliconANGLE AI",
    "category": "投融资信息",
    "relevance": 8
  },
  {
    "title": "AI教父警告失控的“智能爆炸”",
    "link": "https://www.theguardian.com/technology/2026/sep/28/ai-godfathers-warn-of-runaway-intelligence-explosion",
    "pubdate": "2026-09-28 23:00:36",
    "contentSnippet": "杰弗里·辛顿和约书亚·本吉奥等AI教父与OpenAI、Anthropic高管联合警告政府准备应对AI“智能爆炸”。",
    "creator": "Dan Milmo Global technology editor",
    "source": "The Guardian AI",
    "category": "行业动态",
    "relevance": 9
  },
  {
    "title": "theCUBE Pod：代理重塑企业系统，CoreWeave持续崛起",
    "link": "https://siliconangle.com/2026/09/28/ai-agents-security-thecubepod",
    "pubdate": "2026-09-28 22:58:18",
    "contentSnippet": "随着AI成熟，安全护栏和计算机系统正在改变，本周讨论聚焦代理失控问题。",
    "creator": "Devony Hof",
    "source": "SiliconANGLE AI",
    "category": "行业动态",
    "relevance": 6
  }
];
