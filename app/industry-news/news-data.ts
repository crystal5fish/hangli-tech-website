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
export const newsDate = "2026-08-18";
export const newsItems: NewsItem[] = [
  {
    "title": "AI房地产科技公司EliseAI洽谈融资，估值37亿美元",
    "link": "https://www.businessinsider.com/eliseai-housing-ai-new-round-of-funding-valuation-2026-8",
    "pubdate": "2026-08-18 07:34:30",
    "contentSnippet": "EliseAI正洽谈新一轮融资，估值达37亿美元，Andreessen Horowitz参与。",
    "creator": "Katie Roof",
    "source": "Business Insider",
    "category": "投融资信息",
    "relevance": 6
  },
  {
    "title": "Databricks特征存储实现亚秒级特征服务",
    "link": "https://www.databricks.com/blog/how-databricks-feature-store-serves-features-sub-second-freshness",
    "pubdate": "2026-08-18 07:10:00",
    "contentSnippet": "Databricks特征存储支持亚秒级特征服务，确保机器学习模型接收最新信号，提升欺诈检测等场景的实时性。",
    "creator": "",
    "source": "Databricks",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "前OpenAI高管称AI可治愈所有疾病",
    "link": "https://www.businessinsider.com/fidji-simo-ai-curing-diseases-cancer-pots-dario-amodei-2026-8",
    "pubdate": "2026-08-18 06:28:42",
    "contentSnippet": "Fidji Simo赞同Anthropic CEO观点，认为AI能治愈所有疾病，但需正确数据基础设施支持。",
    "creator": "Lloyd Lee",
    "source": "Business Insider",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "AI自动化初创公司Relay关闭，员工加入谷歌Chrome团队",
    "link": "https://techcrunch.com/2026/08/17/ai-automation-startup-relay-shuts-down-staff-joins-googles-chrome-team",
    "pubdate": "2026-08-18 05:27:05",
    "contentSnippet": "AI自动化初创公司Relay关闭，创始人Jacob Bank表示员工将加入谷歌Chrome团队，并透露在Chrome中集成AI的计划。",
    "creator": "Lucas Ropek",
    "source": "TechCrunch AI",
    "category": "投融资信息",
    "relevance": 8
  },
  {
    "title": "亚马逊最后一英里配送模式面临挑战",
    "link": "https://www.bloomberg.com/news/videos/2026-08-17/big-take-how-amazon-landed-on-mamdani-s-labor-agenda-video",
    "pubdate": "2026-08-18 05:22:27",
    "contentSnippet": "纽约市长候选人Mamdani挑战亚马逊依赖分包商的配送模式，此举可能影响美国企业广泛采用分包商的做法。",
    "creator": "",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "Pornhub母公司支付1.2亿美元和解儿童性虐待诉讼",
    "link": "https://www.404media.co/pornhubs-parent-company-to-pay-120-million-to-settle-child-sexual-abuse-lawsuits",
    "pubdate": "2026-08-18 05:04:53",
    "contentSnippet": "Pornhub母公司Mindgeek同意支付1.2亿美元，和解关于其平台托管和传播未成年人虐待视频的集体诉讼。",
    "creator": "Samantha Cole",
    "source": "404 Media",
    "category": "安全监管",
    "relevance": 7
  },
  {
    "title": "墨西哥探索监管儿童社交媒体使用",
    "link": "https://www.bloomberg.com/news/articles/2026-08-17/mexico-explores-ways-to-regulate-social-media-among-children",
    "pubdate": "2026-08-18 04:29:41",
    "contentSnippet": "墨西哥正探索监管儿童和青少年使用社交媒体，类似澳大利亚和巴西的做法，政府主导讨论Instagram和TikTok等平台的危害。",
    "creator": "Alex Vasquez",
    "source": "Bloomberg Technology",
    "category": "安全监管",
    "relevance": 7
  },
  {
    "title": "最高法院驳回Verizon对FCC罚款的退款请求",
    "link": "https://arstechnica.com/tech-policy/2026/08/supreme-court-rejects-verizon-bid-for-47-million-refund-of-fcc-fine",
    "pubdate": "2026-08-18 04:00:20",
    "contentSnippet": "美国最高法院驳回Verizon要求退还4700万美元FCC罚款的请求，但运营商仍声称出售设备位置数据不违法。",
    "creator": "Jon Brodkin",
    "source": "Ars Technica",
    "category": "安全监管",
    "relevance": 6
  },
  {
    "title": "谷歌以1000万美元购买Spirit Airlines旧数据以改进AI",
    "link": "https://www.businessinsider.com/google-buys-spirit-airlines-data-ai-model-development-2026-8",
    "pubdate": "2026-08-18 03:49:25",
    "contentSnippet": "谷歌以1000万美元竞标获得Spirit Airlines数据，用于AI训练，科技公司竞相获取训练数据。",
    "creator": "Charles Rollet",
    "source": "Business Insider",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "同一集群，利用率提升33点：改变的是顺序",
    "link": "https://huggingface.co/blog/Dharma-AI/gpu-management-pt2",
    "pubdate": "2026-08-18 03:46:21",
    "contentSnippet": "Hugging Face文章探讨通过调整任务顺序，使同一集群利用率提升33个百分点。",
    "creator": "",
    "source": "Hugging Face",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "Anthropic年化收入超650亿美元，IPO前增长迅猛",
    "link": "https://www.bloomberg.com/news/articles/2026-08-17/anthropic-revenue-run-rate-surpasses-65-billion-ahead-of-ipo",
    "pubdate": "2026-08-18 03:37:45",
    "contentSnippet": "Anthropic年化收入超650亿美元，较去年底增长七倍以上，为IPO做准备。",
    "creator": "Natasha Mascarenhas, Rebecca Torrence and Shirin Ghaffary",
    "source": "Bloomberg Technology",
    "category": "投融资信息",
    "relevance": 9
  },
  {
    "title": "约翰·格鲁伯称Claude的AI水印“明显冒犯”",
    "link": "https://www.businessinsider.com/john-gruber-claude-watermark-perversion-offensive-ai-2026-8",
    "pubdate": "2026-08-18 03:09:55",
    "contentSnippet": "Anthropic为Claude输出添加水印，科技博主约翰·格鲁伯批评此举可能优先考虑可追溯性而非写作质量。",
    "creator": "Ben Shimkus",
    "source": "Business Insider",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "Bedrock将自动驾驶技术引入建筑工地",
    "link": "https://www.bloomberg.com/news/videos/2026-08-17/bedrock-brings-autonomous-driving-to-construction-video",
    "pubdate": "2026-08-18 02:34:30",
    "contentSnippet": "Bedrock Robotics改造挖掘机等重型机械，配备摄像头、激光雷达和英伟达计算，实现自主操作，已获首批商业部署。",
    "creator": "",
    "source": "Bloomberg Technology",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "AI建设进入风险更高阶段，Parnassus首席投资官称",
    "link": "https://www.bloomberg.com/news/videos/2026-08-17/ai-buildout-entering-a-riskier-phase-says-parnassus-cio-video",
    "pubdate": "2026-08-18 02:26:40",
    "contentSnippet": "Parnassus投资公司CIO Todd Ahlsten表示，AI基础设施支出激增进入风险期，传统软件公司如Salesforce等面临压力。",
    "creator": "",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "阿里巴巴Qwen 3.8 27B模型瞄准边缘AI",
    "link": "https://aibusiness.com/generative-ai/alibaba-qwen-3-8-27b-model-targets-edge-ai",
    "pubdate": "2026-08-18 02:11:27",
    "contentSnippet": "该模型可在笔记本电脑上本地运行，展示阿里巴巴继续引领开源的计划。",
    "creator": "Esther Shittu",
    "source": "AI Business",
    "category": "模型发布",
    "relevance": 9
  },
  {
    "title": "肯塔基中学开学首日发放AI生成教材，出现严重幻觉错误",
    "link": "https://futurism.com/artificial-intelligence/kentucky-middle-school-ai",
    "pubdate": "2026-08-18 02:04:18",
    "contentSnippet": "AI生成教材出现地图标注错误和胡言乱语，引发对AI教育应用的质疑。",
    "creator": "Joe Wilkins",
    "source": "Futurism AI",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "theCUBE播客：AI泡沫争论升温，新云收益挑战怀疑者",
    "link": "https://siliconangle.com/2026/08/17/ai-bubble-neoclouds-thecubepod",
    "pubdate": "2026-08-18 01:49:22",
    "contentSnippet": "AI泡沫辩论新转折，分析师认为破裂点可能遥远，英伟达CEO承诺5000亿美元。",
    "creator": "Devony Hof",
    "source": "SiliconANGLE AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "OpenAI在Mac上推出ChatGPT和Codex的计算机历史功能",
    "link": "https://www.techrepublic.com/article/ews-openai-computer-history-chatgpt-mac-activity",
    "pubdate": "2026-08-18 01:20:31",
    "contentSnippet": "OpenAI的计算机历史将Mac活动转化为可搜索记忆，介绍工作原理、适用人群及隐私风险。",
    "creator": "Aminu Abdullahi",
    "source": "TechRepublic AI",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "Andreessen Horowitz因董事任职问题遭美司法部反垄断调查",
    "link": "https://www.bloomberg.com/news/articles/2026-08-17/andreessen-horowitz-focus-of-doj-probe-over-board-directors",
    "pubdate": "2026-08-18 01:13:50",
    "contentSnippet": "美国司法部对风投公司Andreessen Horowitz展开反垄断调查，涉及其合伙人是否不当担任竞争性AI公司董事。",
    "creator": "Josh Sisco, Natasha Mascarenhas and Sarah Frier",
    "source": "Bloomberg Technology",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "Anthropic CEO称开放权重AI无法分散权力",
    "link": "https://www.techrepublic.com/article/news-dario-amodei-open-weight-ai-decentralization",
    "pubdate": "2026-08-18 00:59:33",
    "contentSnippet": "Anthropic CEO达里奥·阿莫迪认为，在先进芯片和算力仍集中的情况下，开放权重AI无法实现权力分散。",
    "creator": "Aminu Abdullahi",
    "source": "TechRepublic AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "OpenAI总裁建议企业立即采取十项措施应对AI网络威胁",
    "link": "https://www.businessinsider.com/openai-president-greg-brockman-10-cybersecurity-tips-hugging-face-2026-8",
    "pubdate": "2026-08-18 00:55:04",
    "contentSnippet": "OpenAI联合创始人格雷格·布罗克曼警告企业需升级网络安全，并列出十项紧急应对措施。",
    "creator": "Brent D. Griffiths",
    "source": "Business Insider",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "谷歌使Gemini可见水印变为可选，保留隐形标识",
    "link": "https://www.techrepublic.com/article/news-google-gemini-visible-watermarks-optional",
    "pubdate": "2026-08-18 00:53:37",
    "contentSnippet": "谷歌允许Gemini用户禁用可见AI水印，同时保留SynthID隐形标记和C2PA凭证以确保透明度。",
    "creator": "Aminu Abdullahi",
    "source": "TechRepublic AI",
    "category": "产品发布",
    "relevance": 6
  },
  {
    "title": "Groq融资3.5亿美元转型Neocloud业务",
    "link": "https://techcrunch.com/2026/08/17/groq-raises-350m-to-fuel-its-pivot-from-ai-chips-to-neocloud",
    "pubdate": "2026-08-18 00:15:12",
    "contentSnippet": "Groq以35亿美元估值融资3.5亿美元，从AI芯片转向Neocloud，并扩展Nvidia数据中心。",
    "creator": "Rebecca Bellan",
    "source": "TechCrunch AI",
    "category": "投融资信息",
    "relevance": 8
  },
  {
    "title": "Higgsfield融资4亿美元，估值达54亿美元",
    "link": "https://siliconangle.com/2026/08/17/higgsfield-raises-400m-at-5-4-billion-valuation-to-scale-video-and-image-generation-platform",
    "pubdate": "2026-08-17 23:50:29",
    "contentSnippet": "AI视频和图像生成平台Higgsfield完成4亿美元B轮融资，估值翻倍至54亿美元，由DST Global领投。",
    "creator": "Kyt Dotson",
    "source": "SiliconANGLE AI",
    "category": "投融资信息",
    "relevance": 8
  },
  {
    "title": "ChatGPT新功能可记录用户所有键盘输入",
    "link": "https://futurism.com/artificial-intelligence/new-chatgpt-feature-collects-every-keystroke-you-make",
    "pubdate": "2026-08-17 23:37:49",
    "contentSnippet": "ChatGPT新功能可学习用户电脑上的所有操作，引发隐私担忧。",
    "creator": "Frank Landymore",
    "source": "Futurism AI",
    "category": "产品发布",
    "relevance": 9
  },
  {
    "title": "Wispr融资2.8亿美元，开发AI语音转文字平台",
    "link": "https://siliconangle.com/2026/08/17/wispr-raises-280m-to-power-up-natural-speech-to-text-using-ai",
    "pubdate": "2026-08-17 23:20:58",
    "contentSnippet": "AI听写平台Wispr完成2.8亿美元B轮融资，估值20亿美元，由Menlo Ventures领投。",
    "creator": "Kyt Dotson",
    "source": "SiliconANGLE AI",
    "category": "投融资信息",
    "relevance": 8
  },
  {
    "title": "英伟达投资软银数据中心开发商15亿美元",
    "link": "https://techcrunch.com/2026/08/17/nvidia-investing-1-5b-in-softbank-data-center-developer-behind-openai-project",
    "pubdate": "2026-08-17 23:16:24",
    "contentSnippet": "英伟达投资软银数据中心开发商15亿美元，确保其芯片为OpenAI数据中心提供算力。",
    "creator": "Tim De Chant",
    "source": "TechCrunch AI",
    "category": "投融资信息",
    "relevance": 9
  },
  {
    "title": "专家证人用ChatGPT撰写报告为公司辩护",
    "link": "https://www.404media.co/show-how-3m-is-0-at-fault-expert-witness-used-chatgpt-to-write-report-defending-company-in-deadly-explosion-lawsuit",
    "pubdate": "2026-08-17 22:56:24",
    "contentSnippet": "在造成三人死亡的爆炸诉讼中，专家证人使用ChatGPT生成报告，涉及6100万美元索赔。",
    "creator": "Jason Koebler",
    "source": "404 Media",
    "category": "安全监管",
    "relevance": 7
  },
  {
    "title": "开放权重AI能否给OpenAI和Anthropic估值带来压力？",
    "link": "https://www.techrepublic.com/article/news-open-weight-ai-openai-anthropic-valuations",
    "pubdate": "2026-08-17 22:49:06",
    "contentSnippet": "开放权重AI无需超越前沿模型，即可考验OpenAI和Anthropic高估值背后的增长和利润假设。",
    "creator": "TechRepublic Staff",
    "source": "TechRepublic AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "LG将于2027年发布搭载英伟达芯片的人形机器人",
    "link": "https://aibusiness.com/robotics/lg-release-nvidia-powered-humanoid-in-2027",
    "pubdate": "2026-08-17 21:50:10",
    "contentSnippet": "该机器人是两家公司扩大合作的一部分，旨在将物理AI从概念推向实际部署。",
    "creator": "Scarlett Evans",
    "source": "AI Business",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "Sainsbury's暂停AI扫描，因误判顾客为扒手",
    "link": "https://www.theguardian.com/technology/2026/aug/17/humiliated-sainsburys-store-pauses-ai-scanning-after-false-shoplifting-accusation",
    "pubdate": "2026-08-17 21:21:25",
    "contentSnippet": "超市连锁店称是人为错误而非Facewatch技术导致顾客被错误驱逐，已暂停使用AI面部扫描。",
    "creator": "Helena Horton",
    "source": "The Guardian AI",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "追踪珍本书籍发现亚马逊AI训练设施",
    "link": "https://www.404media.co/we-tracked-a-shipment-of-rare-books-it-ended-at-an-amazon-ai-training-facility",
    "pubdate": "2026-08-17 21:16:09",
    "contentSnippet": "404 Media在珍本书籍中放置追踪器，发现亚马逊设施扫描并销毁书籍用于AI训练。",
    "creator": "Emanuel Maiberg",
    "source": "404 Media",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "Palona融资2000万美元，为实体企业提供AI自动化",
    "link": "https://siliconangle.com/2026/08/17/palona-raises-20m-in-funding-to-bring-ai-automation-to-brick-and-mortar-businesses",
    "pubdate": "2026-08-17 21:00:40",
    "contentSnippet": "AI初创公司Palona AI完成2000万美元A轮融资，由Ardenwood Ventures领投，用于构建实体业务智能运营层。",
    "creator": "Mike Wheatley",
    "source": "SiliconANGLE AI",
    "category": "投融资信息",
    "relevance": 7
  },
  {
    "title": "马来西亚数据中心增长激增，柔佛容量紧张",
    "link": "https://www.techrepublic.com/article/news-data-center-johor-apac-malaysia",
    "pubdate": "2026-08-17 20:37:29",
    "contentSnippet": "柔佛数据中心管道达8542兆瓦，但托管空置率仅0.7%，电网和水资源限制使实际部署能力受限。",
    "creator": "TechRepublic Staff",
    "source": "TechRepublic AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "Hexaware推出零摩擦企业框架整合AI服务",
    "link": "https://siliconangle.com/2026/08/17/hexaware-bundles-ai-services-zero-friction-enterprise-framework",
    "pubdate": "2026-08-17 20:00:58",
    "contentSnippet": "Hexaware Technologies推出零摩擦企业框架，整合现代化、网络安全、工程、运营、质量和企业软件实践，旨在解决大型技术栈中的累积问题。",
    "creator": "Duncan Riley",
    "source": "SiliconANGLE AI",
    "category": "产品发布",
    "relevance": 6
  },
  {
    "title": "AI卫星与人工智能革新野火检测",
    "link": "https://www.theguardian.com/us-news/2026/aug/17/satellites-ai-wildfire-detection",
    "pubdate": "2026-08-17 20:00:53",
    "contentSnippet": "新型卫星和AI技术帮助消防员在野火蔓延前发现并扑灭火灾，FireSat卫星网络计划部署50颗卫星用于早期检测。",
    "creator": "Ben Tracy of Climate Central",
    "source": "The Guardian AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "半导体巨头今年积极投资初创企业",
    "link": "https://news.crunchbase.com/venture/semiconductor-giants-nvda-intc-backing-ai-robotics-starups-2026",
    "pubdate": "2026-08-17 19:00:24",
    "contentSnippet": "AI支出推动半导体行业收益和估值创纪录，巨头们加大对AI和机器人初创公司的投资。",
    "creator": "Joanna Glasner",
    "source": "Crunchbase News",
    "category": "投融资信息",
    "relevance": 8
  },
  {
    "title": "SuperApp推出团队AI协作共享空间",
    "link": "https://siliconangle.com/2026/08/17/superapp-launches-shared-space-ai-models-teams-collaborate-work",
    "pubdate": "2026-08-17 18:00:24",
    "contentSnippet": "SuperApp（原Instabase）发布同名旗舰产品，提供类似Slack的界面和文档库，支持团队协作。",
    "creator": "Kyt Dotson",
    "source": "SiliconANGLE AI",
    "category": "产品发布",
    "relevance": 6
  },
  {
    "title": "共生知行发布人形机器人赛车Demo",
    "link": "https://www.qbitai.com/2026/08/474537.html",
    "pubdate": "2026-08-17 17:30:49",
    "contentSnippet": "具身智能初创公司共生知行发布双足人形机器人驾驶卡丁车的Demo，测试全身智能。",
    "creator": "量子位的朋友们",
    "source": "量子位",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "人形机器人打乒乓球，完整打完11分制比赛",
    "link": "https://www.qbitai.com/2026/08/474518.html",
    "pubdate": "2026-08-17 17:04:37",
    "contentSnippet": "两台人形机器人在无遥控、无人喂球的情况下，完整打完一场11分制的乒乓球比赛。",
    "creator": "听雨",
    "source": "量子位",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "当孩子的机器人朋友去世时会发生什么？",
    "link": "https://www.technologyreview.com/2026/08/17/1141568/moxie-when-kids-robot-best-friend-dies",
    "pubdate": "2026-08-17 17:00:00",
    "contentSnippet": "文章探讨儿童与社交机器人Moxie建立情感联系，以及机器人生命周期结束对孩子的影响。",
    "creator": "Sara Harrison",
    "source": "MIT Technology Review",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "菲尔兹奖得主：AI靠“抬杠”突破数学猜想",
    "link": "https://www.qbitai.com/2026/08/474381.html",
    "pubdate": "2026-08-17 16:36:07",
    "contentSnippet": "菲尔兹奖得主指出，AI在数学领域最出圈的突破是通过寻找反例来挑战现有猜想。",
    "creator": "梦瑶",
    "source": "量子位",
    "category": "技术论文",
    "relevance": 8
  },
  {
    "title": "范式PhanRouter上线智谱GLM-5.3，即日开放调用",
    "link": "https://www.qbitai.com/2026/08/474361.html",
    "pubdate": "2026-08-17 16:26:25",
    "contentSnippet": "智谱GLM-5.3首发上线范式PhanRouter，并即日开放调用。",
    "creator": "量子位的朋友们",
    "source": "量子位",
    "category": "产品发布",
    "relevance": 9
  },
  {
    "title": "科学家将DNA转化为存储设备，功耗降低100倍",
    "link": "https://www.sciencedaily.com/releases/2026/08/260816044853.htm",
    "pubdate": "2026-08-17 16:06:45",
    "contentSnippet": "研究人员将合成DNA与半导体结合，制造出超低功耗存储设备，可同时存储和处理信息，有望提升AI能效。",
    "creator": "",
    "source": "ScienceDaily AI",
    "category": "技术论文",
    "relevance": 8
  },
  {
    "title": "世界模型进入“有声时代”：24FPS画面+48kHz立体声实时生成",
    "link": "https://www.qbitai.com/2026/08/474334.html",
    "pubdate": "2026-08-17 15:39:56",
    "contentSnippet": "世界模型实现24FPS画面和48kHz立体声实时生成，即将完全开源。",
    "creator": "思邈",
    "source": "量子位",
    "category": "产品发布",
    "relevance": 9
  },
  {
    "title": "8年追踪研究发现：屏幕时间与青少年认知能力呈正相关",
    "link": "https://www.sciencedaily.com/releases/2026/08/260815064803.htm",
    "pubdate": "2026-08-17 14:41:08",
    "contentSnippet": "芬兰一项为期8年的研究发现，屏幕时间较多的儿童在青少年时期认知处理能力更强，挑战了常见假设。",
    "creator": "",
    "source": "ScienceDaily AI",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "微软AI计划或因芯片短缺受阻",
    "link": "https://www.theguardian.com/technology/2026/aug/17/are-microsofts-ai-plans-being-held-back-by-a-shortage-of-chips",
    "pubdate": "2026-08-17 12:00:46",
    "contentSnippet": "《卫报》调查发现，微软宣称的AI能力与其实际运营的先进芯片数量存在明显差距，可能制约其AI发展。",
    "creator": "Aisha Down and Ed Zitron",
    "source": "The Guardian AI",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "时间序列基础模型中的预测崩溃现象",
    "link": "https://arxiv.org/abs/2608.14106",
    "pubdate": "2026-08-17 12:00:00",
    "contentSnippet": "研究发现，在预测1000只美股的小时收益时，预测结果近乎平坦且排序不佳，称为预测崩溃。该现象与目标可预测性相关，并揭示了校准与排序之间的权衡。",
    "creator": "Shu Wan, Miles Ma, Hank Zhu, Guangqi Liu, Stephen Wang, Qingsong Wen, Huan Liu",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "鲁棒XGBoosting回归研究",
    "link": "https://arxiv.org/abs/2608.13590",
    "pubdate": "2026-08-17 12:00:00",
    "contentSnippet": "研究XGBoost对垂直异常值和杠杆点的鲁棒性，提出基于M、S和τ估计的MM-XGBoost两步法，在鲁棒性和预测精度间取得最佳平衡。",
    "creator": "Iris Arag\\'on Mladosich, Christophe Croux",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "分布强化学习中分位数时序差分学习的在线推断",
    "link": "https://arxiv.org/abs/2608.12973",
    "pubdate": "2026-08-17 12:00:00",
    "contentSnippet": "本文研究分布强化学习中分位数时序差分学习的统计推断，建立泛函中心极限定理，并提出基于随机缩放的在线推断方法，降低内存需求。",
    "creator": "Zijie Cheng, Yang Peng, Zhihua Zhang",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "基于贝叶斯样本推断的生成建模",
    "link": "https://arxiv.org/abs/2502.07580",
    "pubdate": "2026-08-17 12:00:00",
    "contentSnippet": "本文提出贝叶斯样本推断（BSI）生成模型，从迭代高斯后验推断视角统一扩散模型，实验表明BSI优于贝叶斯流网络等模型。",
    "creator": "Marten Lienen, Marcel Kollovieh, Stephan G\\\"unnemann",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "扩散模型的强化学习设计：统一路径空间视角",
    "link": "https://arxiv.org/abs/2608.14430",
    "pubdate": "2026-08-17 12:00:00",
    "contentSnippet": "论文提出统一路径空间框架，将扩散模型的不同强化学习算法统一起来，推导出策略梯度估计器，并恢复现有方法的结构。",
    "creator": "Yixian Xu, Yuanrui Zhang, Shengjie Luo, Liwei Wang, Di He",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "QUASAR：损失感知重建降低量化感知训练损失下限",
    "link": "https://arxiv.org/abs/2608.13966",
    "pubdate": "2026-08-17 12:00:00",
    "contentSnippet": "提出QUASAR方法，在训练循环中持续进行轻量损失感知重建，降低量化感知训练的损失下限，提升模型质量。",
    "creator": "Vincent Counathe, Ben Athiwaratkun, Christopher De Sa, Tianyi Zhang",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "非光滑回归中原始对偶算法的泛化误差估计",
    "link": "https://arxiv.org/abs/2608.13870",
    "pubdate": "2026-08-17 12:00:00",
    "contentSnippet": "研究非光滑回归中原始对偶算法的轨迹泛化误差估计，提出基于Stein导数收缩的协方差无关估计器，适用于L1惩罚最小绝对偏差等。",
    "creator": "Kai Tan, Pierre C Bellec",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "基于能量的表格异常检测：能量与重建互补",
    "link": "https://arxiv.org/abs/2608.14186",
    "pubdate": "2026-08-17 12:00:00",
    "contentSnippet": "研究重新审视深度玻尔兹曼机在表格异常检测中的应用，发现其平均场能量与重建分数结合效果优于同类方法，在两个基准上验证了有效性。",
    "creator": "Junichiro Niimi",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "物理信息DeepONets学习非定常动脉瘤血流动力学",
    "link": "https://arxiv.org/abs/2608.13629",
    "pubdate": "2026-08-17 12:00:00",
    "contentSnippet": "提出改进的多输入多输出物理信息DeepONets模型，用于预测理想化腹主动脉瘤几何中的非定常流动，采用聚合注入策略。",
    "creator": "Oscar L. Cruz-Gonzalez, Val\\'erie Deplano, Badih Ghattas",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "转化神经科学与个性化神经健康的数据驱动技术",
    "link": "https://arxiv.org/abs/2608.13749",
    "pubdate": "2026-08-17 12:00:00",
    "contentSnippet": "综述用于检测神经退行性疾病早期脑变化的数据驱动技术，涵盖四大方法论支柱，强调个性化、机制化、临床可操作的脑健康模型。",
    "creator": "Vishal Subedi, Shashipraba N. K. Rajakaruna, Pratyusha Sarkar, Subhankar Chattoraj, Anjali Khasa, Siddhartha Nandy, Hamza Farooq, Animikh Biswas, Sanjay Chaudhuri, Asim K. Dey, Karuna Joshi, Christophe Lenglet, Ansu Chatterjee",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "高维非参数变点检测的低秩二次密度投影方法",
    "link": "https://arxiv.org/abs/2608.13922",
    "pubdate": "2026-08-17 12:00:00",
    "contentSnippet": "提出基于低秩二次密度投影的变点检测方法，用矩阵均值估计替代密度估计，扫描矩阵CUSUM，适用于高维分布变化检测。",
    "creator": "Guoqing Zhang, Zhaixin Chen",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "跨会话边界的上下文学习状态交接",
    "link": "https://arxiv.org/abs/2608.14528",
    "pubdate": "2026-08-17 12:00:00",
    "contentSnippet": "研究探讨大语言模型应用中会话交接的方法论和理论性质，提出任务相关上下文学习状态的转移，并分析记忆约束的影响。",
    "creator": "Masahiro Kato, Taka Kato",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "L-FNO：用于随机事件动力学的洛伦兹傅里叶神经算子",
    "link": "https://arxiv.org/abs/2608.13562",
    "pubdate": "2026-08-17 12:00:00",
    "contentSnippet": "提出洛伦兹傅里叶神经算子，结合FNO风格协变量路径和洛伦兹谱核，用于稀疏事件序列的似然训练，提升事件预测。",
    "creator": "Songhee Kang, Jihoon Kang",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "基于精神病学问卷启发的全局可解释性框架",
    "link": "https://arxiv.org/abs/2602.23459",
    "pubdate": "2026-08-17 12:00:00",
    "contentSnippet": "本文提出REFINE框架，通过预处理解耦预测，利用随访信息学习非线性项目对齐，提高问卷数据预测的可解释性。",
    "creator": "Eric V. Strobl",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "节点分裂SVM生存树分离空间与临床风险",
    "link": "https://arxiv.org/abs/2608.13847",
    "pubdate": "2026-08-17 12:00:00",
    "contentSnippet": "提出非参数两阶段方法，用临床生存树和空间树分离生存数据的空间风险与临床特征，生成分段常数的空间风险图。",
    "creator": "Drew Lazar, Aye Aye Maung",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "更多正确数据何时有害？插入稳定性与维度理论局限",
    "link": "https://arxiv.org/abs/2608.14020",
    "pubdate": "2026-08-17 12:00:00",
    "contentSnippet": "研究插入稳定性对单调对抗者的免疫性，证明插入稳定学习者在添加正确数据时风险不增，并探讨维度理论的局限。",
    "creator": "Joseph Sankoorikal Johny",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "生成式模型驱动的分布值结果推断",
    "link": "https://arxiv.org/abs/2608.14542",
    "pubdate": "2026-08-17 12:00:00",
    "contentSnippet": "提出生成式推断框架，利用辅助生成模型改进分布值参数的推断，通过桥接表示将非线性问题转化为均值函数估计。",
    "creator": "Yijiao Zhang, Hongzhe Li",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "高斯过程超参数优化的最大似然估计脆弱性研究",
    "link": "https://arxiv.org/abs/2608.13793",
    "pubdate": "2026-08-17 12:00:00",
    "contentSnippet": "论文评估了最大似然估计在高斯过程训练中的脆弱性，指出假设不满足时模型泛化能力差，即使GP也易过拟合。",
    "creator": "Tyler R. Johnson, Kian Ben-Jacob, Christopher P. Muller, Ramin Bostanabad",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "收益预测中的非平稳性与复杂度权衡",
    "link": "https://arxiv.org/abs/2512.23596",
    "pubdate": "2026-08-17 12:00:00",
    "contentSnippet": "研究非平稳市场中模型复杂度与训练窗口长度的权衡，提出自适应选择程序，在美股行业组合上提升样本外R²。",
    "creator": "Agostino Capponi, Chengpiao Huang, J. Antonio Sidaoui, Kaizheng Wang, Jiacheng Zou",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "分布鲁棒贝叶斯扩散控制中的对偶性与策略评估",
    "link": "https://arxiv.org/abs/2506.19294",
    "pubdate": "2026-08-17 12:00:00",
    "contentSnippet": "本文提出分布鲁棒贝叶斯控制（DRBC）公式，通过强对偶性将鲁棒先验评估降维，实现实用策略评估与学习。",
    "creator": "Jose Blanchet, Jiayi Cheng, Yuewei Ling, Hao Liu, Yang Liu",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "智能制造中的深度视觉：MODERN框架用于智能质量监控与诊断",
    "link": "https://arxiv.org/abs/2608.13937",
    "pubdate": "2026-08-17 12:00:00",
    "contentSnippet": "提出MODERN深度学习框架，结合残差网络和迁移学习，用于工业质量控制中的缺陷监控和故障区域识别。",
    "creator": "Yicheng Kang, Yuling Jiao, Xin Geng, Mahesh Nagarajan",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "离线深度Q*估计与扩散模型",
    "link": "https://arxiv.org/abs/2608.14401",
    "pubdate": "2026-08-17 12:00:00",
    "contentSnippet": "提出一种新框架，利用条件扩散模型估计奖励和转移核，从而在离线强化学习中估计最优动作价值函数Q*。",
    "creator": "Xiaohong Chen, Yuling Jiao, Lican Kang, Jerry Zhijian Yang, Chen Zhong",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "利用最优传输势的多边缘流匹配",
    "link": "https://arxiv.org/abs/2606.05327",
    "pubdate": "2026-08-17 12:00:00",
    "contentSnippet": "本文提出多边缘流匹配方法，结合动态最优传输势，软性引导流匹配，实现无模拟的高效算法。",
    "creator": "Raghav Kansal, David Crair, Nghia Nguyen, Scott Pope, Bradley Parry",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "澳大利亚青少年社交媒体禁令报告被指含AI幻觉",
    "link": "https://www.theguardian.com/australia-news/2026/aug/17/australia-social-media-ban-report-ai-hallucinations-ntwnfb",
    "pubdate": "2026-08-17 10:58:05",
    "contentSnippet": "卫报分析发现澳大利亚年龄保证技术试验报告包含不存在的学术链接，作者承认使用ChatGPT编辑但否认引用错误由AI幻觉造成。",
    "creator": "Josh Taylor and Nick Evershed",
    "source": "The Guardian AI",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "Stripe据报以超70亿美元收购AI模型路由器OpenRouter",
    "link": "https://siliconangle.com/2026/08/16/stripe-reportedly-finalizes-deal-to-buy-ai-model-router-openrouter-for-more-than-7b",
    "pubdate": "2026-08-17 06:35:47",
    "contentSnippet": "据彭博社报道，Stripe已同意以超过70亿美元收购OpenRouter，后者为开发者提供访问400多个AI模型的统一接口。",
    "creator": "Duncan Riley",
    "source": "SiliconANGLE AI",
    "category": "投融资信息",
    "relevance": 9
  },
  {
    "title": "卫报观点：AI改变面试世界，缺失人性因素",
    "link": "https://www.theguardian.com/commentisfree/2026/aug/16/the-guardian-view-on-the-changed-world-of-job-interviews-missing-the-human-factor",
    "pubdate": "2026-08-17 01:30:31",
    "contentSnippet": "英国近半数求职者遭遇AI面试官，引发挫败感。安迪·伯纳姆对线上招聘的担忧适用于更广泛的AI化招聘流程。",
    "creator": "Editorial",
    "source": "The Guardian AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "专家警告：AI垃圾内容正在腐蚀儿童大脑",
    "link": "https://futurism.com/artificial-intelligence/experts-gnet-ai-fruit-slop-corrupting-violence-extremism",
    "pubdate": "2026-08-17 01:02:00",
    "contentSnippet": "专家指出，基于暴力的AI垃圾内容强化了对暴力本身的迷恋，可能对儿童产生不良影响。",
    "creator": "Joe Wilkins",
    "source": "Futurism AI",
    "category": "安全监管",
    "relevance": 7
  },
  {
    "title": "Facebook充斥仇视伊斯兰的AI垃圾内容，呼吁对穆斯林美国人施暴",
    "link": "https://futurism.com/artificial-intelligence/facebook-ai-slop-violence-muslim-americans",
    "pubdate": "2026-08-16 22:38:08",
    "contentSnippet": "Facebook上出现大量由AI生成的仇视伊斯兰内容，煽动对穆斯林美国人的暴力，引发担忧。",
    "creator": "Joe Wilkins",
    "source": "Futurism AI",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "深度伪造阿尔巴尼斯用于名人骗局，澳大利亚人被骗740万澳元",
    "link": "https://www.theguardian.com/australia-news/2026/aug/17/deepfake-anthony-albanese-used-in-celebrity-scams-duping-australians-out-of-74m-asic-warns",
    "pubdate": "2026-08-16 22:01:27",
    "contentSnippet": "澳大利亚监管机构警告，利用总理阿尔巴尼斯等名人深度伪造的虚假投资骗局激增，已致澳人损失740万澳元。",
    "creator": "Tory Shepherd",
    "source": "The Guardian AI",
    "category": "安全监管",
    "relevance": 9
  }
];
