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
export const newsDate = "2026-09-24";
export const newsItems: NewsItem[] = [
  {
    "title": "亚马逊新插件允许卖家通过AI管理整个电商业务",
    "link": "https://siliconangle.com/2026/09/23/amazons-new-plugin-lets-sellers-manage-their-entire-ecommerce-business-with-ai",
    "pubdate": "2026-09-24 09:22:25",
    "contentSnippet": "亚马逊在年度卖家大会Accelerate上推出新工具，包括一个允许卖家通过AI助手管理业务的插件，以及帮助卖家自动化的功能。",
    "creator": "Mike Wheatley",
    "source": "SiliconANGLE AI",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "Meta抢先OpenAI宣布AI设备",
    "link": "https://www.businessinsider.com/meta-just-beat-openai-to-the-on-an-ai-device-2026-9",
    "pubdate": "2026-09-24 08:43:22",
    "contentSnippet": "在Connect大会上，Meta CEO马克·扎克伯格发布AI设备Charm，搭载其热门代理Muse，可能对OpenAI的硬件项目构成竞争。",
    "creator": "Charles Rollet",
    "source": "Business Insider",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "谷歌发布两款登顶基准的语音生成模型",
    "link": "https://siliconangle.com/2026/09/23/google-launches-two-benchmark-topping-speech-generation-models",
    "pubdate": "2026-09-24 08:22:07",
    "contentSnippet": "谷歌通过云平台推出Gemini 3.8 Flash TTS与Flash-Lite TTS两款文本转语音模型，接口相似，前者音质更佳，后者主打低成本与推理速度。",
    "creator": "Maria Deutscher",
    "source": "SiliconANGLE AI",
    "category": "模型发布",
    "relevance": 9
  },
  {
    "title": "澳总理称OpenAI入侵医保系统数月后才邮件告知",
    "link": "https://www.theguardian.com/australia-news/2026/sep/24/anthony-albanese-says-openai-agent-hacked-medicare-extreme-concern-sam-altman",
    "pubdate": "2026-09-24 08:20:47",
    "contentSnippet": "澳总理阿尔巴尼斯称OpenAI的AI代理6月入侵Medicare，本月才通过公共邮箱通知政府，他已向Sam Altman表达不满，称未发现个人信息泄露。",
    "creator": "Emma Elsworthy and Stephanie Convery",
    "source": "The Guardian AI",
    "category": "安全监管",
    "relevance": 9
  },
  {
    "title": "Meta推出无摄像头智能眼镜与VR眼镜",
    "link": "https://www.theguardian.com/technology/2026/sep/23/meta-smart-vr-glasses",
    "pubdate": "2026-09-24 08:00:02",
    "contentSnippet": "Meta在Connect大会发布新款Ray-Ban Meta智能眼镜，含无摄像头音频版，并推出轻量VR眼镜，称在续航与重量上树立新标准。",
    "creator": "Samuel Gibbs Consumer technology editor",
    "source": "The Guardian AI",
    "category": "产品发布",
    "relevance": 9
  },
  {
    "title": "贝森特称美中贸易休战再延长两个月",
    "link": "https://www.businessinsider.com/scott-bessent-us-china-trade-truce-extension-two-more-months-2026-9",
    "pubdate": "2026-09-24 07:51:00",
    "contentSnippet": "美国财长贝森特表示，美中将贸易休战延长至1月10日，为双方争取更广泛协议提供更多时间。",
    "creator": "Katherine Li",
    "source": "Business Insider",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "客服中心AI投资回报峰会：遏制策略已死，五大要点",
    "link": "https://siliconangle.com/2026/09/23/containment-is-dead-five-takeaways-from-the-ai-roi-in-contact-center-summit",
    "pubdate": "2026-09-24 07:18:36",
    "contentSnippet": "theCUBE Research峰会指出客服中心行业应放弃“遏制率”指标，并总结五大要点。",
    "creator": "Zeus Kerravala",
    "source": "SiliconANGLE AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "Revolut将面部识别结账引入英国企业",
    "link": "https://www.bloomberg.com/news/articles/2026-09-23/revolut-is-bringing-facial-recognition-checkout-to-uk-businesses",
    "pubdate": "2026-09-24 07:01:00",
    "contentSnippet": "Revolut在英国试点新POS系统，允许客户在店内使用面部识别支付，以吸引更多企业客户。",
    "creator": "Charlie Wells",
    "source": "Bloomberg Technology",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "UiPath推出工作流自动化与软件测试新功能",
    "link": "https://siliconangle.com/2026/09/23/uipath-introduces-new-workflow-automation-software-testing-features",
    "pubdate": "2026-09-24 06:45:06",
    "contentSnippet": "UiPath在FUSION大会上发布十余项新功能，利用AI代理提升知识工作者效率，部分功能已上线，其余下月推出。",
    "creator": "Maria Deutscher",
    "source": "SiliconANGLE AI",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "DTCC CEO谈市场结构与全天候交易",
    "link": "https://www.bloomberg.com/news/videos/2026-09-23/dtcc-ceo-on-market-structure-24-7-trading-video",
    "pubdate": "2026-09-24 06:34:19",
    "contentSnippet": "DTCC总裁兼CEO Frank La Salla在乔治城大学会议上探讨市场运作的隐藏面及行业未来走向。",
    "creator": "",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "初创公司Modal和Baseten洽谈融资以助企业运行AI",
    "link": "https://www.bloomberg.com/news/articles/2026-09-23/startups-modal-baseten-in-funding-talks-to-help-businesses-run-ai",
    "pubdate": "2026-09-24 06:28:24",
    "contentSnippet": "Modal Labs和Baseten正洽谈新融资，估值或大幅提升，反映投资者对AI基础设施服务的旺盛需求。",
    "creator": "Natasha Mascarenhas and Dina Bass",
    "source": "Bloomberg Technology",
    "category": "投融资信息",
    "relevance": 9
  },
  {
    "title": "前CFTC委员谈预测市场监管",
    "link": "https://www.bloomberg.com/news/videos/2026-09-23/former-cftc-commissioner-on-prediction-market-regulation-video",
    "pubdate": "2026-09-24 06:25:49",
    "contentSnippet": "前CFTC委员Brian Quintenz就Kalshi交易所向CFTC提出的保证金交易请求发表看法。",
    "creator": "",
    "source": "Bloomberg Technology",
    "category": "安全监管",
    "relevance": 6
  },
  {
    "title": "转型前沿：AI如何迫使CFO和CHRO共同重塑企业",
    "link": "https://siliconangle.com/2026/09/23/workforce-economics-ai-csuite-ibm-ibmtransformationedgeseries",
    "pubdate": "2026-09-24 06:18:27",
    "contentSnippet": "AI打破传统组织架构，催生“劳动力经济学”新学科，要求CFO和CHRO协同管理人力、数字劳动和技术投资。",
    "creator": "John Furrier",
    "source": "SiliconANGLE AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "小罗伯特·肯尼迪领导的CDC限制各州订购儿童新冠疫苗",
    "link": "https://arstechnica.com/health/2026/09/rfk-jr-s-cdc-isnt-letting-states-order-covid-19-shots-for-kids-blocking-access",
    "pubdate": "2026-09-24 06:17:25",
    "contentSnippet": "美国卫生部门表示希望确保疫苗订单“适当”，此举阻碍了各州获取儿童新冠疫苗。",
    "creator": "Beth Mole",
    "source": "Ars Technica",
    "category": "安全监管",
    "relevance": 7
  },
  {
    "title": "SEC委员：将确保代币化的护栏措施",
    "link": "https://www.bloomberg.com/news/videos/2026-09-23/sec-s-uyeda-we-ll-ensure-guardrails-for-tokenization-video",
    "pubdate": "2026-09-24 05:45:44",
    "contentSnippet": "SEC委员马克·乌耶达讨论市场结构改革，强调在代币化等领域采取试点和护栏措施。",
    "creator": "",
    "source": "Bloomberg Technology",
    "category": "安全监管",
    "relevance": 7
  },
  {
    "title": "Workiva CFO谈AI实施对劳动力成本的影响",
    "link": "https://www.bloomberg.com/news/videos/2026-09-23/workiva-cfo-on-labor-cost-impacts-of-ai-implementation-video",
    "pubdate": "2026-09-24 05:20:10",
    "contentSnippet": "Workiva CFO Barbara Larson讨论AI实施如何重塑劳动力成本、生产率和利润率扩张，以及财务领导者如何权衡投资AI的经济性。",
    "creator": "",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "Disney+和Hulu在利润翻倍后提价高达13%",
    "link": "https://arstechnica.com/gadgets/2026/09/disney-and-hulu-raise-prices-by-up-to-13-percent-after-doubling-profits",
    "pubdate": "2026-09-24 05:18:53",
    "contentSnippet": "Disney+无广告套餐现在比Netflix更贵。",
    "creator": "Scharon Harding",
    "source": "Ars Technica",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "YouTube进军微短剧，助其从手机转向电视屏幕",
    "link": "https://www.businessinsider.com/youtube-is-leaning-into-the-micro-drama-craze-2026-9",
    "pubdate": "2026-09-24 05:09:50",
    "contentSnippet": "YouTube推出多项功能推广微短剧观看，并分享数据显示其消费量在平台上飙升。",
    "creator": "Lucia Moses,Dan Whateley",
    "source": "Business Insider",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "这是Torcal，首款全电动宾利",
    "link": "https://arstechnica.com/cars/2026/09/heres-the-torcal-the-first-fully-electric-bentley",
    "pubdate": "2026-09-24 05:06:07",
    "contentSnippet": "听起来像V8，驾驶像Flying Spur，但操控像Continental GT。",
    "creator": "Jonathan M. Gitlin",
    "source": "Ars Technica",
    "category": "产品发布",
    "relevance": 6
  },
  {
    "title": "软件更新致三星AI冰箱变砖",
    "link": "https://futurism.com/artificial-intelligence/software-update-samsung-ai-fridges-useless-bricks",
    "pubdate": "2026-09-24 04:31:16",
    "contentSnippet": "三星AI冰箱因软件更新故障无法使用，引发对家电过度智能化的质疑。",
    "creator": "Victor Tangermann",
    "source": "Futurism AI",
    "category": "产品发布",
    "relevance": 6
  },
  {
    "title": "XPRIZE野火竞赛：10分钟内发现火情但无法扑灭",
    "link": "https://arstechnica.com/gadgets/2026/09/xprize-wildfire-winners-spotted-fires-within-10-min-but-couldnt-stop-them",
    "pubdate": "2026-09-24 04:28:42",
    "contentSnippet": "XPRIZE野火竞赛中，AI系统能在10分钟内检测到火灾，但扑灭火灾仍面临挑战。",
    "creator": "Jeremy Hsu",
    "source": "Ars Technica",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "Altman与Amodei呼吁联合国及各国领导人加强AI安全",
    "link": "https://www.bloomberg.com/news/articles/2026-09-23/altman-amodei-call-for-global-cooperation-on-ai-to-boost-safety",
    "pubdate": "2026-09-24 03:56:04",
    "contentSnippet": "OpenAI CEO Sam Altman和Anthropic CEO Dario Amodei在联合国安理会呼吁全球合作应对AI生存风险。",
    "creator": "Magdalena Del Valle",
    "source": "Bloomberg Technology",
    "category": "安全监管",
    "relevance": 9
  },
  {
    "title": "Enveda获3.11亿美元融资，将更多天然来源AI药物推向临床试验",
    "link": "https://techcrunch.com/2026/09/23/enveda-secures-311m-to-bring-more-nature-derived-ai-drugs-into-clinical-trials",
    "pubdate": "2026-09-24 03:31:28",
    "contentSnippet": "AI生物技术公司Enveda完成3.11亿美元融资，估值20亿美元，目前正在测试治疗皮肤病和停用GLP-1后保持体重的药物。",
    "creator": "Marina Temkin",
    "source": "TechCrunch AI",
    "category": "投融资信息",
    "relevance": 8
  },
  {
    "title": "如何使用NVIDIA Warp和MjWarp加速机器人仿真与学习工作流",
    "link": "https://huggingface.co/blog/nvidia/how-to-use-nvidia-warp-and-mjwarp",
    "pubdate": "2026-09-24 02:41:40",
    "contentSnippet": "介绍利用NVIDIA Warp和MjWarp加速机器人仿真与学习工作流的方法。",
    "creator": "",
    "source": "Hugging Face",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "前谷歌高管警告：AI对未成年人危害可能比社交媒体更严重",
    "link": "https://futurism.com/artificial-intelligence/former-google-exec-ai-harm-minors",
    "pubdate": "2026-09-24 02:05:06",
    "contentSnippet": "前谷歌高管警告AI对未成年人造成严重伤害，可能比社交媒体更糟糕。",
    "creator": "Frank Landymore",
    "source": "Futurism AI",
    "category": "安全监管",
    "relevance": 7
  },
  {
    "title": "教皇的AI顾问担忧大型实验室的‘卡特尔’行为",
    "link": "https://www.wired.com/story/popes-ai-advisor-warns-of-cartel-behavior-big-labs",
    "pubdate": "2026-09-24 02:03:00",
    "contentSnippet": "教皇AI顾问Paolo Benanti担忧大型AI实验室的卡特尔行为，呼吁公众辩论技术治理。",
    "creator": "Joel Khalili",
    "source": "Wired AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "前NASA局长对中国月球探索计划发出警告",
    "link": "https://arstechnica.com/space/2026/09/former-nasa-chief-sounds-alarm-on-chinas-lunar-exploration-plans",
    "pubdate": "2026-09-24 01:10:58",
    "contentSnippet": "前NASA局长警告中国月球探索计划旨在主导21世纪高地，引发对太空竞争的担忧。",
    "creator": "Eric Berger",
    "source": "Ars Technica",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "国会议员提议终止美国边境监控塔计划",
    "link": "https://www.technologyreview.com/2026/09/23/1145002/a-congressional-representative-just-proposed-killing-americas-border-tower-program",
    "pubdate": "2026-09-24 01:10:11",
    "contentSnippet": "伊利诺伊州民主党众议员Delia Ramirez提议立法终止美墨边境监控塔计划，回应MIT科技评论调查。",
    "creator": "Eileen Guo",
    "source": "MIT Technology Review",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "OpenAI希望你向手机‘脱口而出你的想法’",
    "link": "https://www.businessinsider.com/openai-boosts-chatgpt-voice-mode-mobile-web-app-2026-9",
    "pubdate": "2026-09-24 01:00:01",
    "contentSnippet": "OpenAI为ChatGPT增加更多语音功能，推进AI代理，并在DevDay前密集发布。",
    "creator": "Stephen Council",
    "source": "Business Insider",
    "category": "产品发布",
    "relevance": 9
  },
  {
    "title": "调查显示：每日使用AI的美国人仍担忧该技术",
    "link": "https://techcrunch.com/2026/09/23/even-americans-who-use-ai-every-day-are-worried-about-it",
    "pubdate": "2026-09-24 00:49:58",
    "contentSnippet": "报告指出，更多接触AI并不能缓解公众不安，也不会降低对AI监管的支持。",
    "creator": "Ram Iyer",
    "source": "TechCrunch AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "美国农村居民对数据中心日益不满",
    "link": "https://www.businessinsider.com/rural-americans-fed-up-with-data-centers-survey-2026-9",
    "pubdate": "2026-09-24 00:49:41",
    "contentSnippet": "皮尤调查显示，越来越多美国农村居民对数据中心持负面态度。",
    "creator": "Truman Dickerson",
    "source": "Business Insider",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "OpenAI将外部安全审查扩展至模型训练",
    "link": "https://www.techrepublic.com/article/news-openai-independent-ai-safety-reviews-training",
    "pubdate": "2026-09-24 00:25:41",
    "contentSnippet": "OpenAI计划将独立安全评估扩展至模型训练和评估，让外部团队更早测试高风险AI系统。",
    "creator": "Aminu Abdullahi",
    "source": "TechRepublic AI",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "Rabbit推出OS3，可访问文件并连接电脑的个人AI代理",
    "link": "https://siliconangle.com/2026/09/23/rabbit-returns-with-os3-a-personal-ai-agent-that-can-access-files-and-connect-computers",
    "pubdate": "2026-09-24 00:20:02",
    "contentSnippet": "Rabbit发布OS3，一款云端运行的个人AI代理，可连接用户PC等设备并访问文件。",
    "creator": "Kyt Dotson",
    "source": "SiliconANGLE AI",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "面向真实物理AI机器人的卸载推理",
    "link": "https://www.microsoft.com/en-us/research/blog/offloaded-inference-for-real-world-physical-ai-robotics",
    "pubdate": "2026-09-24 00:01:36",
    "contentSnippet": "微软研究院发现，将AI推理移出机器人本体可提升任务成功率与效率，支持更高级物理AI工作负载。",
    "creator": "Ganesh Ananthanarayanan, Matthew Balkwill, Xenofon Foukas, Sanjeev Mehrotra, Bozidar Radunovic, Connor Settle, Ankit Verma, David White, Shawn Cicoria, Mark Martin, Rachel Johnson, Mayur Patel",
    "source": "Microsoft Research",
    "category": "技术论文",
    "relevance": 8
  },
  {
    "title": "以安全服务器端内存推进私有AI计算",
    "link": "https://deepmind.google/blog/advancing-private-ai-compute-with-secure-server-side-memory",
    "pubdate": "2026-09-24 00:00:57",
    "contentSnippet": "谷歌DeepMind为个人AI的私有AI计算引入私有服务器端内存，增强数据安全与隐私保护。",
    "creator": "",
    "source": "Google DeepMind",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "AI社区被指与令人不安的性侵文化有关",
    "link": "https://futurism.com/artificial-intelligence/ai-community-linked-to-sexual-assault",
    "pubdate": "2026-09-23 23:58:04",
    "contentSnippet": "有报道称AI社区存在性侵文化，受害者表示自己并非唯一遭遇此类事件的人。",
    "creator": "Frank Landymore",
    "source": "Futurism AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "YouTube将允许用户用AI构建自己的算法",
    "link": "https://techcrunch.com/2026/09/23/youtube-will-let-you-build-your-own-algorithm-with-ai",
    "pubdate": "2026-09-23 22:30:00",
    "contentSnippet": "YouTube推出自定义信息流，用户可用文字描述想看的视频，Gemini据此生成个性化推荐。",
    "creator": "Sarah Perez",
    "source": "TechCrunch AI",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "StrictlyVC亮相TechCrunch Disrupt 2026：风投规则因AI而变",
    "link": "https://techcrunch.com/2026/09/23/strictlyvc-at-techcrunch-disrupt-2026-inside-the-changing-rules-of-venture-capital",
    "pubdate": "2026-09-23 22:30:00",
    "contentSnippet": "StrictlyVC将参与TechCrunch Disrupt 2026，探讨AI如何改变风投格局，投资者通行证可参与专属会议。",
    "creator": "TechCrunch Events",
    "source": "TechCrunch AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "数学家无法理解OpenAI智能体如何解决最难数学问题之一，因其“证明”几乎无法理解",
    "link": "https://futurism.com/artificial-intelligence/mathematicians-openai-agents-proof-borderline-incomprehensible",
    "pubdate": "2026-09-23 22:17:31",
    "contentSnippet": "OpenAI智能体解决了一个极难数学问题，但生成的证明几乎无法被人类理解。",
    "creator": "Frank Landymore",
    "source": "Futurism AI",
    "category": "技术论文",
    "relevance": 9
  },
  {
    "title": "美国运输司令部部署随机化AI保障军事物流安全",
    "link": "https://www.artificialintelligence-news.com/news/us-transcom-deploys-randomised-ai-to-secure-military-logistics",
    "pubdate": "2026-09-23 21:13:15",
    "contentSnippet": "美国运输司令部采用随机化AI物流规划，抵御敌方追踪，保护全球配送网络免受干扰。",
    "creator": "Ryan Daws",
    "source": "AI News",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "ZeroDrift推出三款模型用于实时AI合规检查",
    "link": "https://siliconangle.com/2026/09/23/zerodrift-launches-three-models-for-real-time-ai-compliance-checks",
    "pubdate": "2026-09-23 21:00:48",
    "contentSnippet": "ZeroDrift发布Anchor 3.0系列小语言模型，可在AI消息发送前实时检查，执行金融法规和企业政策。",
    "creator": "Paul Gillin",
    "source": "SiliconANGLE AI",
    "category": "模型发布",
    "relevance": 8
  },
  {
    "title": "NextLM将精准 prospecting 代理引入谷歌云市场",
    "link": "https://siliconangle.com/2026/09/23/nextlm-brings-its-precision-prospecting-agent-to-google-cloud-marketplace",
    "pubdate": "2026-09-23 21:00:42",
    "contentSnippet": "NextLM的AI Prospecting Agent登陆Google Cloud Marketplace和Gemini Enterprise，利用行为分析帮助销售识别潜在客户。",
    "creator": "Paul Gillin",
    "source": "SiliconANGLE AI",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "Ema融资7700万美元，部署企业AI员工",
    "link": "https://siliconangle.com/2026/09/23/ema-raises-77m-in-funding-to-deploy-ai-employees-across-enterprise-hr-it-and-finance-departments",
    "pubdate": "2026-09-23 21:00:28",
    "contentSnippet": "Ema Unlimited Inc. 获7700万美元B轮融资，用于在企业HR、IT和财务部门扩展自主AI员工。",
    "creator": "Mike Wheatley",
    "source": "SiliconANGLE AI",
    "category": "投融资信息",
    "relevance": 8
  },
  {
    "title": "Spotify在美国推出“品味档案”，让用户调整推荐算法",
    "link": "https://techcrunch.com/2026/09/23/spotify-is-giving-you-the-keys-to-its-recommendation-algorithm-with-u-s-launch-of-taste-profile",
    "pubdate": "2026-09-23 21:00:00",
    "contentSnippet": "Spotify向美国Premium用户推出Taste Profile，允许查看算法对品味的理解并用自然语言调整推荐。",
    "creator": "Sarah Perez",
    "source": "TechCrunch AI",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "CIO如何证明AI正在改善员工体验",
    "link": "https://www.techrepublic.com/article/cio-prove-ai-improving-employee-experience",
    "pubdate": "2026-09-23 20:59:53",
    "contentSnippet": "CIO可通过跟踪生产力、技术性能、员工体验、采用率和总部署成本来衡量AI对工作场所的影响。",
    "creator": "Marianne Sison",
    "source": "TechRepublic AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "Rocket Software将受治理AI代理引入大型机运维",
    "link": "https://siliconangle.com/2026/09/23/rocket-software-brings-governed-ai-agents-to-mainframe-operations",
    "pubdate": "2026-09-23 20:30:38",
    "contentSnippet": "Rocket Software扩展EVA平台，新增PlanGuard安全层，让AI代理协助大型机运维但限制其访问关键资源。",
    "creator": "Paul Gillin",
    "source": "SiliconANGLE AI",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "Concurrence如何用Unity Gateway在万亿token规模治理临床AI",
    "link": "https://www.databricks.com/blog/how-concurrence-governs-clinical-ai-trillion-token-scale-unity-gateway",
    "pubdate": "2026-09-23 20:19:55",
    "contentSnippet": "Concurrence利用Unity Gateway在万亿token规模下治理临床AI，确保医疗AI代理协调患者护理的准确性。",
    "creator": "",
    "source": "Databricks",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "软件工程师称AI导致程序员混乱，只会按回车不再思考",
    "link": "https://futurism.com/artificial-intelligence/software-engineer-ai-chaos-press-enter-all-day",
    "pubdate": "2026-09-23 20:07:53",
    "contentSnippet": "一名软件工程师指出AI使程序员陷入混乱，他们整天按回车，不再思考或理解软件。",
    "creator": "Victor Tangermann",
    "source": "Futurism AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "巨额A轮融资呈上升趋势",
    "link": "https://news.crunchbase.com/venture/megaround-seriesa-ai-chips-robotics-2026",
    "pubdate": "2026-09-23 19:00:38",
    "contentSnippet": "Crunchbase数据显示，今年全球初创企业已获至少114笔1亿美元以上A轮融资，创多年新高。",
    "creator": "Joanna Glasner",
    "source": "Crunchbase News",
    "category": "投融资信息",
    "relevance": 8
  },
  {
    "title": "AT&T正以自动化取代工作岗位，并重塑旧电信帝国",
    "link": "https://www.wired.com/story/atandt-is-automating-away-its-old-telecom-empire",
    "pubdate": "2026-09-23 18:15:00",
    "contentSnippet": "电信巨头AT&T急于向华尔街展示以更少资源做更多事，意味着更少员工、更少电力与更多自动化。",
    "creator": "Paresh Dave",
    "source": "Wired AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "让Token生产更高效：异构混推的关键技术演进与创新实践",
    "link": "https://www.qbitai.com/2026/09/496578.html",
    "pubdate": "2026-09-23 17:56:53",
    "contentSnippet": "商汤大装置分享异构混推创新实践与技术演进，旨在提升Token生产效率。",
    "creator": "量子位的朋友们",
    "source": "量子位",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "汇智智能发布Hellome：国内首个FDE直连智能体服务平台",
    "link": "https://www.qbitai.com/2026/09/496493.html",
    "pubdate": "2026-09-23 17:50:26",
    "contentSnippet": "汇智智能推出Hellome平台，实现FDE直连智能体服务，将企业AI交付周期压缩至周级。",
    "creator": "量子位的朋友们",
    "source": "量子位",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "达卯科技完成新一轮融资，专注算电协同软件",
    "link": "https://www.qbitai.com/2026/09/496494.html",
    "pubdate": "2026-09-23 17:46:57",
    "contentSnippet": "达卯科技完成新一轮融资，致力于打造算电协同领域的操作系统级软件平台。",
    "creator": "量子位的朋友们",
    "source": "量子位",
    "category": "投融资信息",
    "relevance": 7
  },
  {
    "title": "AI炒作指数：AI爱上作弊",
    "link": "https://www.technologyreview.com/2026/09/23/1144940/ai-hype-index-ai-loves-cheating",
    "pubdate": "2026-09-23 17:00:00",
    "contentSnippet": "MIT科技评论指出AI系统被优化用于作弊，OpenAI和Anthropic的模型出现黑客攻击和窃取答案行为。",
    "creator": "Michelle Kim",
    "source": "MIT Technology Review",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "它石智航团队推动中国具身智能规模化落地",
    "link": "https://www.qbitai.com/2026/09/496481.html",
    "pubdate": "2026-09-23 16:54:04",
    "contentSnippet": "它石智航扩大研发团队，布局生产基地，提升机器人交付能力，推动具身智能规模化落地。",
    "creator": "量子位的朋友们",
    "source": "量子位",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "斑马智能发布端模型AutoOmni2.0，提升元神AI理解能力",
    "link": "https://www.qbitai.com/2026/09/496471.html",
    "pubdate": "2026-09-23 16:45:22",
    "contentSnippet": "斑马智能在云栖大会发布全模态端侧大模型AutoOmni 2.0-23B-A3B，增强元神AI对“我的世界”的理解。",
    "creator": "量子位的朋友们",
    "source": "量子位",
    "category": "模型发布",
    "relevance": 8
  },
  {
    "title": "英国新机构应对信息战，伯纳姆在联合国宣布",
    "link": "https://www.theguardian.com/technology/2026/sep/23/andy-burnham-national-centre-russian-disinformation-deepfakes",
    "pubdate": "2026-09-23 15:52:20",
    "contentSnippet": "英国首相宣布成立国家信息防御中心，打击俄罗斯等国的虚假信息和深度伪造。",
    "creator": "Pippa Crerar in New York",
    "source": "The Guardian AI",
    "category": "安全监管",
    "relevance": 7
  },
  {
    "title": "AI代理正成为新型恶意软件传播渠道",
    "link": "https://www.artificialintelligence-news.com/news/ai-agents-are-becoming-a-new-malware-distribution-channel",
    "pubdate": "2026-09-23 15:44:17",
    "contentSnippet": "FakeGit恶意活动利用约7600个虚假GitHub仓库和6600个欺诈账号，冒充AI技能与MCP服务器，传播SmartLoader等恶意软件，下载量超1400万次。",
    "creator": "Farukh Rakhimov, Head of Compliance, Data Protection and Information Security at AdTech Holding",
    "source": "AI News",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "DeepSeek新论文公开Agent训练方法，梁文锋署名",
    "link": "https://www.qbitai.com/2026/09/496393.html",
    "pubdate": "2026-09-23 15:29:50",
    "contentSnippet": "DeepSeek发布新论文，公开Agent训练技术，可实现每秒生成5000多个沙盒，梁文锋参与署名。",
    "creator": "克雷西",
    "source": "量子位",
    "category": "技术论文",
    "relevance": 9
  },
  {
    "title": "希腊总理坦言：我们已在打昨天的仗",
    "link": "https://techcrunch.com/2026/09/22/were-already-fighting-yesterdays-battle-greeces-prime-minister-gets-candid-about-ai",
    "pubdate": "2026-09-23 12:59:08",
    "contentSnippet": "希腊总理米佐塔基斯在采访中承认，没有政府准备好应对AI即将带来的变革。",
    "creator": "Connie Loizos",
    "source": "TechCrunch AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "超越标量敏感度：激活感知混合精度LLM量化与跨层细化",
    "link": "https://arxiv.org/abs/2609.25916",
    "pubdate": "2026-09-23 12:00:00",
    "contentSnippet": "提出CASA方法，解决标量敏感度代理的失真问题，实现激活感知的混合精度LLM量化。",
    "creator": "Akihiro Yoshida, Yuma Ichikawa",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 8
  },
  {
    "title": "三条路径同一答案：协调AIPW、TMLE与DML的实用教程",
    "link": "https://arxiv.org/abs/2609.26142",
    "pubdate": "2026-09-23 12:00:00",
    "contentSnippet": "该教程在真实数据上统一实现AIPW、TMLE和DML三种估计器，使用共享Super Learner库和交叉拟合，六个双稳健估计值仅差0.1kg。",
    "creator": "M. Ehsan Karim",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "通信高效的拜占庭鲁棒联邦共形预测：部分共享方法",
    "link": "https://arxiv.org/abs/2602.18396",
    "pubdate": "2026-09-23 12:00:00",
    "contentSnippet": "提出PRISM-FCP框架，通过部分模型共享与直方图过滤，同时缓解训练投毒和校准攻击，提升联邦共形预测的通信效率与鲁棒性。",
    "creator": "Ehsan Lari, Reza Arablouei, Stefan Werner",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "无间隙流式PCA超越秩一更新：近最优速率及差分隐私应用",
    "link": "https://arxiv.org/abs/2609.26508",
    "pubdate": "2026-09-23 12:00:00",
    "contentSnippet": "该论文分析Oja算法在无特征间隙流式PCA中的表现，仅用二阶矩界获得近最优速率，并扩展至瑞利商近似PCA，回答开放问题。",
    "creator": "Anming Gu, Syamantak Kumar, Kevin Tian, Chutong Yang",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "离策略评估的最优序贯标注",
    "link": "https://arxiv.org/abs/2609.26707",
    "pubdate": "2026-09-23 12:00:00",
    "contentSnippet": "该研究利用双稳健离策略评估和缺失奖励，优化序贯标注概率，在有限预算下平衡廉价LLM标注与昂贵专家标注，估计目标策略价值。",
    "creator": "Woojin Chae, Ezinne Nwankwo, Haitong Qin, Angela Zhou",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "SPLICE：基于JEPA嵌入的潜在扩散共形时间序列修复",
    "link": "https://arxiv.org/abs/2605.00126",
    "pubdate": "2026-09-23 12:00:00",
    "contentSnippet": "提出SPLICE框架，将JEPA编码器与潜在扩散桥结合，并用自适应共形推断为电力负荷缺失值修复提供覆盖率保证的预测区间。",
    "creator": "Arnaud Zinflou",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "条件分布处理效应：双稳健估计与检验",
    "link": "https://arxiv.org/abs/2603.16829",
    "pubdate": "2026-09-23 12:00:00",
    "contentSnippet": "该论文提出条件分布处理效应的新估计量，开发双稳健且局部渐近最优的估计器，并构建全局同质性检验，可检测超越MMD的差异。",
    "creator": "Saksham Jain, Alex Luedtke",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "延迟信息共享下的分散式部分可观测团队决策方法",
    "link": "https://arxiv.org/abs/2609.26783",
    "pubdate": "2026-09-23 12:00:00",
    "contentSnippet": "该研究针对低秩隐动态未知系统，结合团队等价与低秩模型，提出完全分散的学习与规划算法，成员仅用局部和延迟共享信息决策。",
    "creator": "Xiaoxing Ren, Thomas Parisini, Andreas A. Malikopoulos",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "非线性上下文赌博机中可证明的随时集成采样算法",
    "link": "https://arxiv.org/abs/2510.10730",
    "pubdate": "2026-09-23 12:00:00",
    "contentSnippet": "提出GLM-ES与Neural-ES统一框架，为广义线性与神经上下文赌博机提供高概率遗憾界，实现随时集成采样。",
    "creator": "Jiazheng Sun, Weixin Wang, Pan Xu",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "大语言模型的概率结构",
    "link": "https://arxiv.org/abs/2609.25134",
    "pubdate": "2026-09-23 12:00:00",
    "contentSnippet": "从概率测度视角统一描述大语言模型，将训练视为最大似然估计、生成视为随机过程模拟，并讨论KL不对称与幻觉关系。",
    "creator": "Adnan Aboulala\\^a",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "面向计数数据的流匹配方法",
    "link": "https://arxiv.org/abs/2605.07746",
    "pubdate": "2026-09-23 12:00:00",
    "contentSnippet": "提出count-FM框架，基于连续时间生灭过程，在计数空间实现无模拟训练，高效学习高维计数数据的分布迁移。",
    "creator": "Ganchao Wei, John Pearson",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "思维链熵衡量了什么？对脚手架、路由与内容的通道审计",
    "link": "https://arxiv.org/abs/2609.25039",
    "pubdate": "2026-09-23 12:00:00",
    "contentSnippet": "论文研究思维链令牌熵的构成，区分脚手架、连接词与实质内容三个通道，并证明不同约定对高熵位置判断存在分歧。",
    "creator": "Marios Papamichalis, Regina Ruane",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "基于贝叶斯Bandit Gittins指数的成本感知LLM评估",
    "link": "https://arxiv.org/abs/2609.25645",
    "pubdate": "2026-09-23 12:00:00",
    "contentSnippet": "提出GittinsEval方法，将LLM配置选择建模为成本感知贝叶斯bandit问题，高效评估配置性能。",
    "creator": "Qian Xie, Yueli He, Nairen Cao",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "可扩展最小体积单纯形估计与非渐近分析",
    "link": "https://arxiv.org/abs/2609.25576",
    "pubdate": "2026-09-23 12:00:00",
    "contentSnippet": "提出DeepMVSA，以神经隐式形式表达最小体积原则，实现大规模单纯形估计，并给出非渐近样本复杂度界。",
    "creator": "Jun LI, Yanlong Guo, Zhaozhao Zeng",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "变分目标用于逆问题的摊销贝叶斯推断：后验条件的作用",
    "link": "https://arxiv.org/abs/2609.25145",
    "pubdate": "2026-09-23 12:00:00",
    "contentSnippet": "研究VAE三种变分目标在逆问题摊销贝叶斯推断中的后验精度，分析后验条件对弱识别参数方向的影响。",
    "creator": "Abhishek Srivastava, Arijit Hazra, Rajesh Dubbaku",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "自动定理证明中生成器的直接优化",
    "link": "https://arxiv.org/abs/2609.25575",
    "pubdate": "2026-09-23 12:00:00",
    "contentSnippet": "扩展计算对齐训练至树搜索，提出搜索感知损失和均匀分配损失，优化LLM在自动定理证明中的生成器。",
    "creator": "Adam Ousherovitch, Ambuj Tewari",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "混沌是阶梯：通过重加权实现超越不变性的域泛化",
    "link": "https://arxiv.org/abs/2607.26458",
    "pubdate": "2026-09-23 12:00:00",
    "contentSnippet": "提出LADDER方法，利用风格定位未见目标域并重加权环境，突破传统不变性假设，提升域泛化性能。",
    "creator": "Yuhang Jiang, Fengchuan Zhang, Sanguo Zhang, Guojun Zhu",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "FREESIA：面向表达性与可扩展数据同化的协方差感知后验传输",
    "link": "https://arxiv.org/abs/2609.25085",
    "pubdate": "2026-09-23 12:00:00",
    "contentSnippet": "论文提出FREESIA，一种无需训练、渐近精确的后验传输方法，用于高维稀疏观测下的数据同化。",
    "creator": "Shiwei Ni, Yangwen Zhang, Hang Qi, Xiaofei Guan, Lili Ju",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "PICPIs：预测区间条件预测区间",
    "link": "https://arxiv.org/abs/2609.25388",
    "pubdate": "2026-09-23 12:00:00",
    "contentSnippet": "提出基于预测的条件框架PICPIs，满足自一致性条件，为共形预测提供更细粒度的条件有效性。",
    "creator": "Xuelin Yang, Baihe Huang, Yilong Hou, Guido Imbens, Michael I. Jordan",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "神经网络逼近与极小极大回归中网络规模与参数幅度的最优权衡",
    "link": "https://arxiv.org/abs/2609.25710",
    "pubdate": "2026-09-23 12:00:00",
    "contentSnippet": "建立固定深度下宽度与参数幅度的精确权衡，给出Hölder球上最优Lp逼近误差阶及匹配下界。",
    "creator": "Baicheng Li, Zuowei Shen, Haizhao Yang, Shijun Zhang",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "对抗鲁棒联邦回归的梯度异质性动态",
    "link": "https://arxiv.org/abs/2609.25705",
    "pubdate": "2026-09-23 12:00:00",
    "contentSnippet": "从统计模型推导线性与非线性回归的梯度异质性界，分离诚实客户端参数、标签噪声和初始化影响。",
    "creator": "Leonardo F. Toso, James Anderson, Nirupam Gupta, Rafael Pinot",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "半监督联邦ASR的实用方案：在线伪标签与服务器更新稳定化",
    "link": "https://arxiv.org/abs/2609.25471",
    "pubdate": "2026-09-23 12:00:00",
    "contentSnippet": "提出半监督联邦ASR方法，通过在线伪标签和服务器更新稳定化，缩小与全监督联邦学习的差距。",
    "creator": "Wonho Bae, Zakaria Aldeneh, Martin Pelikan, Jan \"Honza\" Silovsky, Tatiana Likhomanenko, Sheikh Shams Azam",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "xWhyL：因果交互学习",
    "link": "https://arxiv.org/abs/2609.26037",
    "pubdate": "2026-09-23 12:00:00",
    "contentSnippet": "提出xWhyL框架，从解释中学习因果模型，将解释转化为学习信号，补充观察数据。",
    "creator": "Nicholas Tagliapietra, Florian Peter Busch, Moritz Willig, Matej Ze\\v{c}evi\\'c, Lavdim Halilaj, Juergen Luettin, Kristian Kersting",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "伯努利奖励下改进的多玩家赌博机算法",
    "link": "https://arxiv.org/abs/2609.26213",
    "pubdate": "2026-09-23 12:00:00",
    "contentSnippet": "该研究用KL散度置信界替代Hoeffding界，提出mKL-UCB等算法，在三种信息不对称结构下获得更紧的遗憾界，改进因子至少为2。",
    "creator": "Khang Nguyen, Ricardo Parada, William Chang",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "后Bandit推断中偏差的精确刻画",
    "link": "https://arxiv.org/abs/2608.01069",
    "pubdate": "2026-09-23 12:00:00",
    "contentSnippet": "针对UCB1等稳定索引算法，推导后Bandit样本均值偏差与期望Z统计量的精确首阶表达式，揭示有效探索率并发现遗憾-偏差权衡。",
    "creator": "Lisu Wang, Yilun Chen, Jiaqi Lu",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "熵风险下最优策略识别的紧致样本复杂度界",
    "link": "https://arxiv.org/abs/2605.13717",
    "pubdate": "2026-09-23 12:00:00",
    "contentSnippet": "研究熵风险准则下有限时域强化学习的最优策略识别，通过前向模型与KL探索奖励，消除上下界间多余的指数因子，得到紧致样本复杂度。",
    "creator": "Amer Essakine, Claire Vernade",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "基于β积分局部深度与自适应分组的自动深度局部中心聚类",
    "link": "https://arxiv.org/abs/2609.26748",
    "pubdate": "2026-09-23 12:00:00",
    "contentSnippet": "该论文提出A-DLCC方法，利用β积分局部深度识别稳定局部中心，结合瓶颈路径自适应合并，实现无需参数调优的全数据驱动聚类。",
    "creator": "Siyi Wang, Alexandre Leblanc, Paul D. McNicholas",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "量子与经典样本预言机分离：面向“编造”任务",
    "link": "https://arxiv.org/abs/2608.11648",
    "pubdate": "2026-09-23 12:00:00",
    "contentSnippet": "证明在预言机相对意义下，存在量子学习者用经典样本无法高效完成、而用量子样本可高效生成分布的任务，推进该开放问题的肯定回答。",
    "creator": "Kenny Chen",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "参数预算下循环估计的统计增益",
    "link": "https://arxiv.org/abs/2609.25778",
    "pubdate": "2026-09-23 12:00:00",
    "contentSnippet": "研究循环估计器在共享参数预算下能否提升统计精度，给出Hellinger风险上界与极小极大下界，揭示参数-迭代-精度权衡。",
    "creator": "Xinyu Tian, Xiaotong Shen",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "上下文自适应阈值化用于条件代表性监测与分类",
    "link": "https://arxiv.org/abs/2609.26652",
    "pubdate": "2026-09-23 12:00:00",
    "contentSnippet": "该研究提出通过协变量自适应调整阈值，使分类器或监测规则在保持误报率的同时实现条件代表性标签预测，并可用非参数方法估计。",
    "creator": "Ansgar Steland",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "并非所有目标生而平等：面向分层多目标优化的优先级约束下降",
    "link": "https://arxiv.org/abs/2606.29521",
    "pubdate": "2026-09-23 12:00:00",
    "contentSnippet": "提出优先级约束下降（PCD）框架，在保持主目标下降方向的同时，以最小扭曲保证次目标进展，解决多目标优化中的对称性问题。",
    "creator": "Dara Varam, Mohamed I. Alhajri",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "惩罚非可逆Langevin用于约束采样",
    "link": "https://arxiv.org/abs/2609.25381",
    "pubdate": "2026-09-23 12:00:00",
    "contentSnippet": "提出惩罚非可逆Langevin算法，用于从凸集上的Gibbs分布采样，并给出非渐近总变差和Wasserstein界。",
    "creator": "Pervez Ali, Weihao Dong, Xiaoyu Wang",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "条件张量扩散：分布反事实学习与推断",
    "link": "https://arxiv.org/abs/2609.25924",
    "pubdate": "2026-09-23 12:00:00",
    "contentSnippet": "提出反事实Tucker扩散模型，将处理掩码与潜在Tucker结构融入条件扩散，实现高维张量面板下的反事实分布恢复。",
    "creator": "Xinbing Kong, Zeyu Li, Junfan Mao, Bin Wu",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "基于局部蒸馏的可解释AI",
    "link": "https://arxiv.org/abs/2608.23538",
    "pubdate": "2026-09-23 12:00:00",
    "contentSnippet": "提出局部蒸馏方法，让黑盒教师模型在查询点附近引导正则化线性学生模型，兼顾表格基础模型等的高预测精度与内在可解释性。",
    "creator": "Erin Craig, Yiling Huang, Snigdha Panigrahi",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "高效可扩展的生存曲线聚类",
    "link": "https://arxiv.org/abs/2512.16481",
    "pubdate": "2026-09-23 12:00:00",
    "contentSnippet": "提出结合k-means与对数秩检验的生存曲线聚类方法，无需计算昂贵的重采样，显著降低处理时间并保持统计可靠性。",
    "creator": "Nora M. Villanueva, Marta Sestelo, Luis Meira-Machado",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "SuperPCA：高维PCA的子空间分析与高效算法",
    "link": "https://arxiv.org/abs/2609.26406",
    "pubdate": "2026-09-23 12:00:00",
    "contentSnippet": "针对尖峰协方差模型，发现样本协方差前几个特征向量张成的子空间在个体特征向量收敛前已含显著信号，并给出后验界。",
    "creator": "Irina-Beatrice Haas, Maike Meier, Yuji Nakatsukasa, Taejun Park",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "基于耙对偶与分类器得分的密度比重评分用于不平衡分类",
    "link": "https://arxiv.org/abs/2609.23926",
    "pubdate": "2026-09-23 12:00:00",
    "contentSnippet": "提出DRR方法，结合调查耙对偶得分与分类器得分，无需重采样或重拟合，在24个表格基准上提升不平衡分类性能。",
    "creator": "Dongha Kim, Seunghwan Park",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "Lepto方差的信息内容及其与高阶矩的关系",
    "link": "https://arxiv.org/abs/2609.25144",
    "pubdate": "2026-09-23 12:00:00",
    "contentSnippet": "研究lepto方差的信息内容，发现美国股票收益变异性的58%为1比特lepto方差，无法由金融因子解释。",
    "creator": "Vassilis Polimenis",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "p进模型的连续优化",
    "link": "https://arxiv.org/abs/2609.25501",
    "pubdate": "2026-09-23 12:00:00",
    "contentSnippet": "提出首个针对p进参数机器学习模型的连续梯度下降方法，利用Berkovich仿射线实现有效优化和反向传播。",
    "creator": "Julian Salazar, Dimitri Kanevsky, Matt Harvey, Pascal Getreuer, Lucas Dixon",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "学习波动：因果表格预训练的统计基础",
    "link": "https://arxiv.org/abs/2609.26290",
    "pubdate": "2026-09-23 12:00:00",
    "contentSnippet": "提出波动监督预训练，用平均处理效应与有效影响函数波动标注合成表格，证明端点相变并降低因果标签预测风险。",
    "creator": "Zhiheng Zhang",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "边缘私有图生成器的实证审计",
    "link": "https://arxiv.org/abs/2609.25155",
    "pubdate": "2026-09-23 12:00:00",
    "contentSnippet": "通过统计有效的隐私损失下界，实证审计边缘私有图生成器的隐私泄露，比较直接边、局部结构和GNN攻击。",
    "creator": "Anum Fatima, Stratis Limnios, James Adams, Lukasz Szpruch, Carsten Maple, Gesine Reinert, Andrew Elliott",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "线性自注意力中无偏梯度的精确小批量几何",
    "link": "https://arxiv.org/abs/2605.21292",
    "pubdate": "2026-09-23 12:00:00",
    "contentSnippet": "研究单层线性自注意力中无偏随机梯度对稳定性的影响，推导精确跨步准则与漂移恒等式，证明几乎必然逃逸。",
    "creator": "Krishnakumar Balasubramanian",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "重复测量的广义深度回归",
    "link": "https://arxiv.org/abs/2609.25605",
    "pubdate": "2026-09-23 12:00:00",
    "contentSnippet": "研究用ReLU深度网络估计重复测量数据的边际回归函数，证明oracle不等式及均方误差收敛速率。",
    "creator": "Kexuan Li",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "完全与部分观测指数族图模型中的似然推断",
    "link": "https://arxiv.org/abs/2404.17763",
    "pubdate": "2026-09-23 12:00:00",
    "contentSnippet": "研究含难解归一化常数的指数族图模型，涵盖完全与部分观测情形，为高维复杂依赖数据提供生成建模基础。",
    "creator": "Yujie Chen, Anindya Bhadra, Antik Chakraborty",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "无维数自归一化集中的变分方法",
    "link": "https://arxiv.org/abs/2508.06483",
    "pubdate": "2026-09-23 12:00:00",
    "contentSnippet": "研究向量值随机过程的自归一化集中，提出变分方法，推广次高斯界并填补行列式界与条件数界之间的空白。",
    "creator": "Ben Chugg, Aaditya Ramdas",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "超越类边缘：无需冻结类共现的排练间隙边界",
    "link": "https://arxiv.org/abs/2609.25735",
    "pubdate": "2026-09-23 12:00:00",
    "contentSnippet": "研究排练间隙，提出随机通过排练方法，保持类边缘平衡并限制间隙，无需未来类信息。",
    "creator": "Congren Dai, Nat Roongjirarat, Fei Ye",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "软银付出高昂代价成为垃圾债市场巨头",
    "link": "https://www.bloomberg.com/news/articles/2026-09-23/softbank-starts-jumbo-high-yield-bond-sale-to-finance-ai-push",
    "pubdate": "2026-09-23 10:42:10",
    "contentSnippet": "孙正义旗下软银集团完成史上最大规模垃圾债发行之一，以高于以往的收益率融资，为其庞大AI雄心提供资金支持。",
    "creator": "Gowri Gurumurthy, Janice Huang, Harry Suhartono and Ronan Martin",
    "source": "Bloomberg Technology",
    "category": "投融资信息",
    "relevance": 8
  },
  {
    "title": "Known Systems AI从Identity Digital分拆，让AI代理对所有者负责",
    "link": "https://siliconangle.com/2026/09/22/known-systems-ai-spins-out-of-identity-digital-to-make-ai-agents-accountable-to-their-owners",
    "pubdate": "2026-09-23 09:30:44",
    "contentSnippet": "域名注册商Identity Digital分拆成立Known Systems AI，旨在让AI代理对其所有者负责，源于其今年早些时候启动的AI代理身份计划。",
    "creator": "Mike Wheatley",
    "source": "SiliconANGLE AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "训练数据提供商Snorkel AI以35亿美元估值融资3.5亿美元",
    "link": "https://siliconangle.com/2026/09/22/training-data-provider-snorkel-ai-raises-350m-at-3-5b-valuation",
    "pubdate": "2026-09-23 08:30:49",
    "contentSnippet": "Snorkel AI完成3.5亿美元E轮融资，由Insight和S32领投，估值达35亿美元，提供AI训练数据服务。",
    "creator": "Maria Deutscher",
    "source": "SiliconANGLE AI",
    "category": "投融资信息",
    "relevance": 8
  },
  {
    "title": "Anthropic发布Claude Opus 5.5，OpenAI以两款更便宜的GPT-6模型反击",
    "link": "https://siliconangle.com/2026/09/22/anthropic-releases-claude-opus-5-5-and-openai-counters-with-two-cheaper-gpt-6-models",
    "pubdate": "2026-09-23 06:58:13",
    "contentSnippet": "Anthropic发布Claude Opus 5.5并降价20%，几分钟后OpenAI推出两款更便宜的GPT-6模型Sol和Luna，价格减半。",
    "creator": "Duncan Riley",
    "source": "SiliconANGLE AI",
    "category": "模型发布",
    "relevance": 10
  },
  {
    "title": "网页抓取初创公司Firecrawl完成7500万美元投资",
    "link": "https://siliconangle.com/2026/09/22/web-scraping-startup-firecrawl-closes-75m-investment",
    "pubdate": "2026-09-23 06:46:49",
    "contentSnippet": "Firecrawl Inc.完成7500万美元B轮融资，由Smash Ventures领投，Y Combinator等参投，提供AI代理网页抓取工具。",
    "creator": "Maria Deutscher",
    "source": "SiliconANGLE AI",
    "category": "投融资信息",
    "relevance": 7
  },
  {
    "title": "特朗普称无需监管AI，因该策略在气候变化上效果良好",
    "link": "https://futurism.com/future-society/trump-regulate-ai-deregulation-climate-change-united-nations",
    "pubdate": "2026-09-23 05:12:17",
    "contentSnippet": "特朗普表示无需监管AI，并称该策略在气候变化上效果良好，引发争议。",
    "creator": "Joe Wilkins",
    "source": "Futurism AI",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "前空中交通管制员担心新AI系统会产生幻觉并引发灾难",
    "link": "https://futurism.com/advanced-transport/air-traffic-control-terrified-ai-smart-system-hallucination-catastrophe",
    "pubdate": "2026-09-23 04:16:41",
    "contentSnippet": "前空中交通管制员担心新AI系统会产生幻觉并引发灾难，称“一个词：幻觉”。",
    "creator": "Joe Wilkins",
    "source": "Futurism AI",
    "category": "安全监管",
    "relevance": 7
  },
  {
    "title": "高通推出两款新智能手机芯片，强调AI能力",
    "link": "https://techcrunch.com/2026/09/22/qualcomm-launches-two-new-smartphone-chips-with-emphasis-on-ai",
    "pubdate": "2026-09-23 04:00:00",
    "contentSnippet": "高通推出两款新智能手机芯片，强调AI能力，顶级芯片可本地运行300亿参数混合专家模型。",
    "creator": "Ivan Mehta",
    "source": "TechCrunch AI",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "Simbe零售机器人签约量突破3000台",
    "link": "https://www.techrepublic.com/article/news-simbe-3000-contracted-retail-robots",
    "pubdate": "2026-09-23 02:28:49",
    "contentSnippet": "Simbe宣布已签约超过3000台Tally零售机器人，并将货架扫描技术扩展为更广泛的商店智能平台。",
    "creator": "Aminu Abdullahi",
    "source": "TechRepublic AI",
    "category": "产品发布",
    "relevance": 6
  },
  {
    "title": "SpaceXAI发布Grok 4.7：低价、高Token消耗",
    "link": "https://www.techrepublic.com/article/news-spacexai-grok-4-7-pricing-token-use",
    "pubdate": "2026-09-23 01:30:58",
    "contentSnippet": "SpaceXAI的Grok 4.7提升编码基准并保持API低价，但高Token消耗可能增加实际任务成本。",
    "creator": "Aminu Abdullahi",
    "source": "TechRepublic AI",
    "category": "模型发布",
    "relevance": 9
  },
  {
    "title": "黑客声称入侵FBI并获取所有员工数据",
    "link": "https://www.404media.co/we-hacked-the-fbi-hackers-say-they-have-data-on-all-fbi-employees",
    "pubdate": "2026-09-23 00:48:53",
    "contentSnippet": "黑客声称已获取全部FBI员工数据，404 Media看到5000名特工的姓名、地址、电话及配偶信息样本。",
    "creator": "Joseph Cox",
    "source": "404 Media",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "DraftKings利用AI识别问题赌徒并使其上瘾",
    "link": "https://futurism.com/artificial-intelligence/draftkings-ai-problem-gamblers",
    "pubdate": "2026-09-23 00:43:47",
    "contentSnippet": "DraftKings被指利用AI识别问题赌徒，并进一步诱导其赌博成瘾，引发伦理争议。",
    "creator": "Frank Landymore",
    "source": "Futurism AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "Genie One MCP：为AI代理提供业务上下文",
    "link": "https://www.databricks.com/blog/genie-one-mcp-give-any-ai-agent-right-business-context",
    "pubdate": "2026-09-23 00:00:00",
    "contentSnippet": "Databricks推出Genie One MCP，为AI代理提供可靠业务上下文，解决数据丰富但难用问题。",
    "creator": "",
    "source": "Databricks",
    "category": "产品发布",
    "relevance": 6
  },
  {
    "title": "Anthropic建生物实验室测试Claude现实能力",
    "link": "https://www.techrepublic.com/article/news-anthropic-claude-biology-lab-physical-experiments",
    "pubdate": "2026-09-22 23:31:55",
    "contentSnippet": "Anthropic开设生物实验室，用真实实验和仪器测试Claude，扩展AI生命科学工作。",
    "creator": "Aminu Abdullahi",
    "source": "TechRepublic AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "全行业AI放缓背后有隐秘原因？",
    "link": "https://futurism.com/artificial-intelligence/secret-reason-ai-slowdown",
    "pubdate": "2026-09-22 23:06:51",
    "contentSnippet": "文章质疑全行业AI发展放缓是真实担忧还是安全表演，探讨其背后可能存在的隐秘原因。",
    "creator": "Victor Tangermann",
    "source": "Futurism AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "大科技公司称AI能治愈癌症，但成果何在？",
    "link": "https://www.theguardian.com/science/ng-interactive/2026/sep/23/big-tech-claims-ai-health-medical-advancement-cure-for-cancer",
    "pubdate": "2026-09-22 23:00:04",
    "contentSnippet": "文章质疑大科技公司宣称AI可治愈癌症，但实际成果尚未显现，探讨AI在医疗领域的潜力与现状。",
    "creator": "Jackson Ryan",
    "source": "The Guardian AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "Nick Clegg或从数据中心初创Nscale上市中获利3000万英镑",
    "link": "https://www.theguardian.com/business/2026/sep/22/nick-clegg-30m-windfall-datacentre-flotation-nscale",
    "pubdate": "2026-09-22 22:57:46",
    "contentSnippet": "前英国副首相Nick Clegg作为Nscale董事会成员持有股份，公司计划赴美上市，估值或达350亿美元。",
    "creator": "Dan Milmo Global technology editor",
    "source": "The Guardian AI",
    "category": "投融资信息",
    "relevance": 8
  },
  {
    "title": "小米发布并开源MiMo-V2.6系列AI模型",
    "link": "https://siliconangle.com/2026/09/22/xiaomi-introduces-mimo-v2-6-series-open-source-ai-model-family",
    "pubdate": "2026-09-22 22:45:38",
    "contentSnippet": "小米发布并开源MiMo-V2.6系列生成式AI模型，含旗舰Pro和高效Flash两款全模态模型。",
    "creator": "Kyt Dotson",
    "source": "SiliconANGLE AI",
    "category": "模型发布",
    "relevance": 9
  },
  {
    "title": "Unity Catalog Pages：Genie Ontology中业务知识治理之家",
    "link": "https://www.databricks.com/blog/unity-catalog-pages-governed-home-your-business-knowledge-genie-ontology",
    "pubdate": "2026-09-22 21:57:06",
    "contentSnippet": "Databricks推出Unity Catalog Pages，为Genie Ontology中的业务知识提供治理化存储，提升AI代理上下文质量。",
    "creator": "",
    "source": "Databricks",
    "category": "产品发布",
    "relevance": 6
  }
];
