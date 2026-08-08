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
export const newsDate = "2026-08-08";
export const newsItems: NewsItem[] = [
  {
    "title": "AI本应取代软件开发者，反而创造了更多岗位",
    "link": "https://www.businessinsider.com/atlassian-q4-2026-earnings-ai-surprise-more-software-developers-2026-8",
    "pubdate": "2026-08-08 08:05:04",
    "contentSnippet": "Atlassian最新业绩显示，AI并未减少开发者岗位，反而催生了更多软件构建者。",
    "creator": "Alistair Barr",
    "source": "Business Insider",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "OpenAI因安全担忧放缓Astra模型开发",
    "link": "https://techcrunch.com/2026/08/07/openai-says-it-slowed-astra-model-development-over-security-concerns",
    "pubdate": "2026-08-08 06:48:24",
    "contentSnippet": "OpenAI表示Astra模型达到关键网络安全阈值，能独立识别并攻击真实系统，因此放缓开发。",
    "creator": "Kirsten Korosec",
    "source": "TechCrunch AI",
    "category": "安全监管",
    "relevance": 9
  },
  {
    "title": "Rippling在AI支出激增后推出员工ROI工具",
    "link": "https://techcrunch.com/2026/08/07/after-rippling-blew-millions-on-ai-in-months-it-built-an-employee-roi-tool",
    "pubdate": "2026-08-08 05:30:11",
    "contentSnippet": "Rippling在自身AI使用警示后，推出AI支出控制台，追踪员工AI支出。",
    "creator": "Julie Bort",
    "source": "TechCrunch AI",
    "category": "产品发布",
    "relevance": 6
  },
  {
    "title": "数据中心公司Switch秘密提交IPO申请",
    "link": "https://www.bloomberg.com/news/articles/2026-08-07/data-center-firm-switch-is-said-to-file-confidentially-for-ipo",
    "pubdate": "2026-08-08 05:23:00",
    "contentSnippet": "Switch公司秘密提交美国IPO申请，加入数据中心同行利用AI主题需求。",
    "creator": "Bailey Lipschultz",
    "source": "Bloomberg Technology",
    "category": "投融资信息",
    "relevance": 7
  },
  {
    "title": "Meta CTO：AI效率收益应用于更多工作而非休假",
    "link": "https://www.businessinsider.com/meta-cto-andrew-bosworth-ai-gains-work-2026-8",
    "pubdate": "2026-08-08 04:32:53",
    "contentSnippet": "Meta首席技术官博斯沃思告诉员工，希望AI带来的效率提升用于构建更多产品，而非休假。",
    "creator": "Charles Rollet",
    "source": "Business Insider",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "软银支持的3D打印机制造商Formlabs考虑IPO",
    "link": "https://www.bloomberg.com/news/articles/2026-08-07/softbank-backed-3d-printer-maker-formlabs-is-said-to-weigh-ipo",
    "pubdate": "2026-08-08 04:23:15",
    "contentSnippet": "知情人士称，3D打印机制造商Formlabs正与潜在顾问就IPO进行早期谈判。",
    "creator": "Bailey Lipschultz",
    "source": "Bloomberg Technology",
    "category": "投融资信息",
    "relevance": 6
  },
  {
    "title": "本周十大融资：大额支票频现",
    "link": "https://news.crunchbase.com/venture/biggest-funding-rounds-billion-dollar-raises-manufacturing-energy-ai",
    "pubdate": "2026-08-08 03:52:22",
    "contentSnippet": "本周初创企业融资规模巨大，三家公司获超10亿美元融资，涉及AI、电商、网络安全、生物科技等领域。",
    "creator": "Joanna Glasner",
    "source": "Crunchbase News",
    "category": "投融资信息",
    "relevance": 7
  },
  {
    "title": "Roku推出24/7 AI生成内容频道",
    "link": "https://futurism.com/artificial-intelligence/roku-unleashes-24-7-ai-slop-channel",
    "pubdate": "2026-08-08 03:50:25",
    "contentSnippet": "Roku推出全天候AI生成内容频道，引发争议。",
    "creator": "Frank Landymore",
    "source": "Futurism AI",
    "category": "产品发布",
    "relevance": 6
  },
  {
    "title": "摩根大通上调科技债券销售预期，AI债务激增",
    "link": "https://www.bloomberg.com/news/articles/2026-08-07/jpmorgan-boosts-tech-bond-sales-outlook-as-ai-debt-binge-expands",
    "pubdate": "2026-08-08 03:03:40",
    "contentSnippet": "摩根大通预计科技公司债券销售今年超5000亿美元，超大规模企业对AI建设资本需求不减。",
    "creator": "Charlotte Plaskwa",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "SpaceX和特斯拉将投资168亿美元建芯片工厂",
    "link": "https://aibusiness.com/data-centers/tesla-spacex-spend-16-8b-terafab-chip-factory-texas",
    "pubdate": "2026-08-08 02:17:18",
    "contentSnippet": "马斯克旗下公司为保障AI、机器人和太空数据中心芯片供应，计划在得克萨斯州建设大型芯片工厂。",
    "creator": "Scarlett Evans",
    "source": "AI Business",
    "category": "投融资信息",
    "relevance": 8
  },
  {
    "title": "TutorMoments：AI导师何时该帮助何时该放手？",
    "link": "https://huggingface.co/blog/allenai/tutormoments",
    "pubdate": "2026-08-08 01:53:32",
    "contentSnippet": "Hugging Face发布TutorMoments数据集，探讨AI导师在教学中应如何把握干预时机。",
    "creator": "",
    "source": "Hugging Face",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "美国政府报告质疑DOGE节省声明",
    "link": "https://arstechnica.com/tech-policy/2026/08/doges-inflated-wall-of-receipts-96-of-grant-savings-unverifiable-gao-says",
    "pubdate": "2026-08-08 01:51:05",
    "contentSnippet": "美国政府问责署报告称，DOGE宣称的拨款节省中96%无法核实，其“节省墙”数据被质疑。",
    "creator": "Jon Brodkin",
    "source": "Ars Technica",
    "category": "安全监管",
    "relevance": 6
  },
  {
    "title": "OpenAI在Hugging Face演示引发热议",
    "link": "https://www.businessinsider.com/openai-hugging-face-presentation-black-hat-message-boards-2026-8",
    "pubdate": "2026-08-08 01:25:11",
    "contentSnippet": "OpenAI在Hugging Face演示中展示智能体在漏洞前互相创建留言板交流，被称AI圣杯时刻。",
    "creator": "Brent D. Griffiths",
    "source": "Business Insider",
    "category": "产品发布",
    "relevance": 9
  },
  {
    "title": "美国7月就业意外下降，AI角色引关注",
    "link": "https://www.bloomberg.com/news/videos/2026-08-07/bloomberg-tech-8-07-2026-video",
    "pubdate": "2026-08-08 01:05:02",
    "contentSnippet": "美国7月就业数据意外下降，引发对AI在劳动力市场作用的质疑。OpenAI首款消费设备AI智能音箱外形似甜甜圈。",
    "creator": "",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "Twilio看好AI前景，股价大涨",
    "link": "https://www.bloomberg.com/news/videos/2026-08-07/why-twilio-sees-more-ai-upside-ahead-video",
    "pubdate": "2026-08-08 01:04:00",
    "contentSnippet": "Twilio财报超预期，CEO称AI目前贡献有限，但智能体AI是长期利好。",
    "creator": "",
    "source": "Bloomberg Technology",
    "category": "产品发布",
    "relevance": 6
  },
  {
    "title": "星链移动野心或遇阻碍",
    "link": "https://www.businessinsider.com/starlink-mobile-elon-musk-benedict-evans-att-verizon-tmobile-2026-8",
    "pubdate": "2026-08-08 00:58:33",
    "contentSnippet": "SpaceX称星链明年可与运营商竞争，但分析师认为面临钢铁和混凝土的挑战。",
    "creator": "Truman Dickerson",
    "source": "Business Insider",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "中国AI生态并非如其声称开放",
    "link": "https://www.theguardian.com/technology/2026/aug/07/china-ai-ecosystem-is-not-as-open-as-it-claims-nor-is-any-other-country",
    "pubdate": "2026-08-08 00:56:34",
    "contentSnippet": "读者来信回应中国大使文章，指出中国AI开放程度存疑，呼吁共享开放标准。",
    "creator": "Guardian Staff",
    "source": "The Guardian AI",
    "category": "安全监管",
    "relevance": 7
  },
  {
    "title": "欧盟加速主权卫星计划，提前至2029年",
    "link": "https://www.bloomberg.com/news/articles/2026-08-07/eu-accelerates-sovereign-satellite-plans-citing-defense-needs",
    "pubdate": "2026-08-08 00:21:54",
    "contentSnippet": "欧盟因安全环境变化，将主权卫星星座服务提前至2029年，以增强通信能力。",
    "creator": "Paula Doenecke",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "谷歌数据中心计划覆盖受保护湿地",
    "link": "https://futurism.com/artificial-intelligence/google-data-center-fort-wayne-indiana-wetlands",
    "pubdate": "2026-08-08 00:19:14",
    "contentSnippet": "谷歌数据中心项目计划填平受保护湿地，称完全避开水资源不可行，引发争议。",
    "creator": "Joe Wilkins",
    "source": "Futurism AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "Cloudflare推出Kitesurf：面向AI代理的浏览器",
    "link": "https://techcrunch.com/2026/08/07/cloudflare-launches-kitesurf-a-browser-built-for-ai-agents",
    "pubdate": "2026-08-08 00:16:09",
    "contentSnippet": "Cloudflare发布Kitesurf，一款云托管浏览器，专为AI代理设计，比Chromium更高效。",
    "creator": "Sarah Perez",
    "source": "TechCrunch AI",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "Grindr CEO称AI相当于节省200名工程师",
    "link": "https://www.businessinsider.com/grindr-ceo-ai-work-200-additional-engineers-2026-8",
    "pubdate": "2026-08-08 00:04:26",
    "contentSnippet": "Grindr CEO表示AI使工程产出提升2.5倍，否则需额外雇佣200名工程师。",
    "creator": "Henry Chandonnet",
    "source": "Business Insider",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "Lyft CEO称公司正转型为全球品牌",
    "link": "https://www.bloomberg.com/news/videos/2026-08-07/lyft-is-transforming-into-a-global-brand-ceo-says-video",
    "pubdate": "2026-08-08 00:02:42",
    "contentSnippet": "Lyft CEO David Risher谈及与Waymo的竞争、国际扩张计划及内部重点，称公司正转型为全球品牌。",
    "creator": "",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "DeepSeek投资宇树科技开发人形机器人AI大脑",
    "link": "https://aibusiness.com/robotics/deepseek-invests-unitree-develop-ai-brain-for-humanoid-bots",
    "pubdate": "2026-08-07 23:18:37",
    "contentSnippet": "DeepSeek投资宇树科技，旨在为人形机器人开发AI大脑，凸显AI模型与机器人日益紧密的关联。",
    "creator": "Graham Hope",
    "source": "AI Business",
    "category": "投融资信息",
    "relevance": 8
  },
  {
    "title": "斯坦福Evo 2 AI模型生成抗大肠杆菌噬菌体",
    "link": "https://www.artificialintelligence-news.com/news/stanford-evo-2-ai-model-generates-phages-against-e-coli",
    "pubdate": "2026-08-07 23:05:03",
    "contentSnippet": "斯坦福研究人员利用Evo 2生成式AI模型合成近300种噬菌体，经实验室测试筛选出16种对大肠杆菌有强杀灭作用的噬菌体。",
    "creator": "Ryan Daws",
    "source": "AI News",
    "category": "技术论文",
    "relevance": 8
  },
  {
    "title": "AI如何改变Instagram互动而不取代人性",
    "link": "https://www.artificialintelligence-news.com/news/how-ai-is-changing-instagram-engagement-without-replacing-the-human-touch",
    "pubdate": "2026-08-07 22:33:59",
    "contentSnippet": "Instagram的AI系统决定用户看到的内容，但AI在增强互动的同时并未取代人性化触感。",
    "creator": "SEO DIGITAL PROS",
    "source": "AI News",
    "category": "产品发布",
    "relevance": 6
  },
  {
    "title": "提示：为什么更好的AI模型还不够",
    "link": "https://aibusiness.com/generative-ai/prompt-why-better-ai-models-aren-t-enough",
    "pubdate": "2026-08-07 22:31:38",
    "contentSnippet": "企业AI成功越来越依赖业务流程、上下文、成本管理和运营执行，而不仅仅是模型性能。",
    "creator": "Liz Hughes",
    "source": "AI Business",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "Airbnb称AI帮助加速功能发布并测试新搜索",
    "link": "https://techcrunch.com/2026/08/07/airbnb-says-ai-is-helping-it-ship-features-faster-as-it-tests-a-new-search-function",
    "pubdate": "2026-08-07 22:22:49",
    "contentSnippet": "Airbnb将推出由AI驱动的新搜索体验，并称AI帮助其更快地发布功能。",
    "creator": "Ivan Mehta",
    "source": "TechCrunch AI",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "科学家用AI创造16种新病毒",
    "link": "https://www.wired.com/story/scientists-used-ai-to-create-16-new-viruses",
    "pubdate": "2026-08-07 22:13:57",
    "contentSnippet": "科学家利用AI系统创造新病毒，为对抗细菌耐药性提供可能，但也引发技术超越监管的担忧。",
    "creator": "Fernanda González",
    "source": "Wired AI",
    "category": "技术论文",
    "relevance": 8
  },
  {
    "title": "AI聊天机器人未能帮助危机人群，修复之路何在？",
    "link": "https://arstechnica.com/ai/2026/08/ai-chatbots-have-failed-people-in-crisis-can-that-be-fixed",
    "pubdate": "2026-08-07 21:49:37",
    "contentSnippet": "临床医生和研究人员表示，AI公司需要公开其安全数据以改进危机应对。",
    "creator": "Cyrus Farivar",
    "source": "Ars Technica",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "字节跳动训练万亿参数AI模型，对标Anthropic",
    "link": "https://arstechnica.com/ai/2026/08/bytedance-trains-massive-ai-model-in-bid-to-rival-anthropic",
    "pubdate": "2026-08-07 21:29:22",
    "contentSnippet": "TikTok母公司字节跳动正在训练一个拥有10万亿参数的大模型，旨在与Anthropic竞争。",
    "creator": "Zijing Wu, Financial Times",
    "source": "Ars Technica",
    "category": "模型发布",
    "relevance": 9
  },
  {
    "title": "白宫AI安全审查框架保密，引发透明度担忧",
    "link": "https://www.theguardian.com/technology/2026/aug/07/white-house-ai",
    "pubdate": "2026-08-07 21:00:18",
    "contentSnippet": "特朗普政府最终确定AI测试框架，但细节保密，仅与少数科技公司分享，引发透明度质疑。",
    "creator": "Nick Robins-Early",
    "source": "The Guardian AI",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "新奥尔良911接线员改用AI，引发担忧",
    "link": "https://futurism.com/artificial-intelligence/ai-dispatch-911-new-orleans-emergency-automation",
    "pubdate": "2026-08-07 20:49:54",
    "contentSnippet": "新奥尔良市911紧急呼叫中心引入AI接线员，引发公众对应急响应可靠性的担忧。",
    "creator": "Joe Wilkins",
    "source": "Futurism AI",
    "category": "产品发布",
    "relevance": 6
  },
  {
    "title": "新墨西哥州法院令Meta支付额外5.67亿美元儿童安全案罚款",
    "link": "https://techcrunch.com/2026/08/07/new-mexico-court-orders-meta-to-pay-additional-567m-in-child-safety-case",
    "pubdate": "2026-08-07 19:40:37",
    "contentSnippet": "Meta在该案中的总罚款已累计至9.42亿美元。",
    "creator": "Ivan Mehta",
    "source": "TechCrunch AI",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "小石城两座数据中心引发“红线”争议",
    "link": "https://www.theguardian.com/us-news/2026/aug/07/datacenters-little-rock-arkansas",
    "pubdate": "2026-08-07 18:00:15",
    "contentSnippet": "批评者谴责超大规模项目，担心水电过度使用和侵占黑人农村土地。",
    "creator": "George Chidi in Little Rock, Arkansas",
    "source": "The Guardian AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "阿里巴巴测试Qwen开源AI新商业模式",
    "link": "https://www.artificialintelligence-news.com/news/alibaba-qwen-open-source-ai-revenue-sharing",
    "pubdate": "2026-08-07 18:00:00",
    "contentSnippet": "阿里巴巴计划对部分商业用户引入收入分成条款，要求大型公司达成商业协议。",
    "creator": "Muhammad Zulhusni",
    "source": "AI News",
    "category": "产品发布",
    "relevance": 9
  },
  {
    "title": "特朗普下令对太阳能板和芯片关键材料征收15%新关税",
    "link": "https://www.theguardian.com/us-news/2026/aug/07/trump-orders-tariff-solar-panels-microchips-manufacturing-ingredient",
    "pubdate": "2026-08-07 17:11:36",
    "contentSnippet": "此举旨在保护美国供应链免受中国主导的多晶硅影响，关税12月4日生效。",
    "creator": "Lauren Almeida and Alicia Chen in Taipei",
    "source": "The Guardian AI",
    "category": "安全监管",
    "relevance": 7
  },
  {
    "title": "阿里推出国内首个AI语音平台CosyVoice Studio",
    "link": "https://www.qbitai.com/2026/08/468324.html",
    "pubdate": "2026-08-07 15:43:06",
    "contentSnippet": "阿里发布CosyVoice Studio，将语义理解融入语音能力，实现听、说、创一站式满足。",
    "creator": "梦晨",
    "source": "量子位",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "AI批量轰炸苹果bug赏金计划，审核团队已下线",
    "link": "https://www.qbitai.com/2026/08/466738.html",
    "pubdate": "2026-08-07 14:21:05",
    "contentSnippet": "AI自动提交大量bug报告，导致苹果审核团队不堪重负，已暂时下线赏金计划。",
    "creator": "程浅",
    "source": "量子位",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "openJiuwen发布企业级分布式蜂群架构，联合邮储落地金融生产环境",
    "link": "https://www.qbitai.com/2026/08/468305.html",
    "pubdate": "2026-08-07 14:18:51",
    "contentSnippet": "openJiuwen发布业界首个企业级分布式蜂群架构，与邮储银行合作，成功应用于金融生产环境。",
    "creator": "思邈",
    "source": "量子位",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "AI圈功能狂卷，付费寥寥，Keep正在试一条新路",
    "link": "https://www.qbitai.com/2026/08/467878.html",
    "pubdate": "2026-08-07 13:30:08",
    "contentSnippet": "AI应用功能竞争激烈但付费率低，Keep尝试新路径，将AI应用于运动赛道。",
    "creator": "一水",
    "source": "量子位",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "在线推理校准：测试时训练实现泛化共形LLM推理",
    "link": "https://arxiv.org/abs/2604.01170",
    "pubdate": "2026-08-07 12:00:00",
    "contentSnippet": "提出ORCA框架，通过元学习更新校准模块，在分布偏移下提供有效置信估计，减少计算成本。",
    "creator": "Cai Zhou, Zekai Wang, Menghua Wu, Qianyu Julie Zhu, Flora C. Shi, Chenyu Wang, Ashia Wilson, Tommi Jaakkola, Stephen Bates",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 8
  },
  {
    "title": "逆强化学习的快速收敛率",
    "link": "https://arxiv.org/abs/2605.14599",
    "pubdate": "2026-08-07 12:00:00",
    "contentSnippet": "本文研究了熵正则化最小最大逆强化学习在有限时域MDP中的结构性和统计性结果，证明了在确定性动力学下MLE与Min-Max-IRL等价，并实现了O(n^{-1})的快速收敛率。",
    "creator": "Andreas Schlaginhaufen, Maryam Kamgarpour",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "基于分数的生成模型各向异性研究",
    "link": "https://arxiv.org/abs/2510.22899",
    "pubdate": "2026-08-07 12:00:00",
    "contentSnippet": "本文研究网络架构对基于分数的生成模型归纳偏置的影响，引入分数各向异性方向（SADs），揭示不同网络如何优先捕获数据结构，并提供预测模型泛化能力的新方法。",
    "creator": "Andreas Floros, Seyed-Mohsen Moosavi-Dezfooli, Pier Luigi Dragotti",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "浅层神经网络特征学习机制中的缩放定律与谱分析",
    "link": "https://arxiv.org/abs/2509.24882",
    "pubdate": "2026-08-07 12:00:00",
    "contentSnippet": "该论文系统分析了特征学习机制下二次和对角神经网络的缩放定律，建立了与矩阵压缩感知和LASSO的联系，揭示了缩放指数相图及与谱性质的关联。",
    "creator": "Leonardo Defilippis, Yizhou Xu, Julius Girardin, Emanuele Troiani, Vittorio Erba, Lenka Zdeborov\\'a, Bruno Loureiro, Florent Krzakala",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "Transformer通过RL或SFT可证明学习稀疏布尔函数",
    "link": "https://arxiv.org/abs/2511.17852",
    "pubdate": "2026-08-07 12:00:00",
    "contentSnippet": "研究分析强化学习与监督微调在Transformer学习稀疏布尔函数中的动态，证明其可学习性，并验证于k-PARITY等案例。",
    "creator": "Bochen Lyu, Yiyang Jia, Xiaohao Cai, Zhanxing Zhu",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "微分同胚时间规整用于时间序列分类",
    "link": "https://arxiv.org/abs/2606.23472",
    "pubdate": "2026-08-07 12:00:00",
    "contentSnippet": "提出DiffTW框架，通过线性输运方程的特征曲线学习函数间映射，实现时间序列的微分同胚变换，超越传统DTW的离散点匹配。",
    "creator": "Vicky Geneva Haney, Kamel Lahouel, Victor Rielly, Bruno M. Jedynak",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "潜在效用Q学习用于偏好自适应动态治疗方案",
    "link": "https://arxiv.org/abs/2307.12022",
    "pubdate": "2026-08-07 12:00:00",
    "contentSnippet": "提出LUQ-Learning方法，优化考虑患者个体偏好的多结果动态治疗方案，无需明确结果排序，具有一致性和最优性保证。",
    "creator": "Joshua P. Zitovsky, Yating Zou, Leslie Wilson, Michael R. Kosorok",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "概率回归树处理缺失数据的新方法",
    "link": "https://arxiv.org/abs/2608.06195",
    "pubdate": "2026-08-07 12:00:00",
    "contentSnippet": "本文扩展概率回归树框架，在树构建时直接处理缺失预测值，提出三种策略，保持概率守恒和边际兼容性，并在真实数据集上评估。",
    "creator": "Taiane Schaedler Prass, Alisson Silva Neimaier, Guilherme Pumi",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "过渡性条件独立性",
    "link": "https://arxiv.org/abs/2104.11547",
    "pubdate": "2026-08-07 12:00:00",
    "contentSnippet": "本文提出过渡性条件独立性，用于表达涉及非随机变量的统计模型中的关系，通过单一因子分解定义，无需在输入空间上设置分布。",
    "creator": "Patrick Forr\\'e",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "Surv-IPTB：基于注意力的生存数据个体治疗获益概率估计模型",
    "link": "https://arxiv.org/abs/2608.06288",
    "pubdate": "2026-08-07 12:00:00",
    "contentSnippet": "提出Surv-IPTB框架，利用注意力机制估计生存分析中个体治疗获益概率，通过成对比较和区间概率处理右删失数据。",
    "creator": "Lev V. Utkin, Stanislav K. Kogan, Andrei V. Konstantinov",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "FlowAdam：几何感知软动量注入的隐式正则化",
    "link": "https://arxiv.org/abs/2604.06652",
    "pubdate": "2026-08-07 12:00:00",
    "contentSnippet": "FlowAdam优化器通过连续梯度流集成和软动量注入，增强Adam处理密集或旋转参数耦合的能力，防止训练崩溃。",
    "creator": "Devender Singh, Tarun Sheel",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "MoCA：用于数字健康时间序列的多模态交叉掩码自编码器",
    "link": "https://arxiv.org/abs/2506.02260",
    "pubdate": "2026-08-07 12:00:00",
    "contentSnippet": "提出MoCA框架，结合Transformer与掩码自编码器，利用跨模态掩码方案，提升可穿戴传感器数据分析性能。",
    "creator": "Howon Ryu, Yuliang Chen, Yacun Wang, Andrea Z. LaCroix, Chongzhi Di, Loki Natarajan, Yu Wang, Jingjing Zou",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "关于大语言模型路由中条件PAC高效推理的说明",
    "link": "https://arxiv.org/abs/2512.03057",
    "pubdate": "2026-08-07 12:00:00",
    "contentSnippet": "研究大语言模型路由的分布自由风险控制，提出受限条件公式和显式路由器，实现有限样本条件有效性和接近最优专家使用。",
    "creator": "Hao Zeng, Bingyi Jing",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "局部化共形预测的有限样本保证",
    "link": "https://arxiv.org/abs/2608.06206",
    "pubdate": "2026-08-07 12:00:00",
    "contentSnippet": "本文为随机局部化共形预测提供有限样本保证，在Hölder正则性等条件下，证明条件覆盖率和长度误差的高概率界。",
    "creator": "Anton Conrad, Rustam Isaev, Denis Belomestny, Eric Moulines, Sergey Samsonov",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "神经网络最坏情况距离感知误差界",
    "link": "https://arxiv.org/abs/2510.22021",
    "pubdate": "2026-08-07 12:00:00",
    "contentSnippet": "提出一种结合密集层与样条组件的神经网络最坏情况距离感知误差界框架，为安全关键应用提供可解释的不确定性估计。",
    "creator": "Masoud Ataei, Vikas Dhiman, Mohammad Javad Khojasteh",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "反向BSDE扩散采样器",
    "link": "https://arxiv.org/abs/2505.06800",
    "pubdate": "2026-08-07 12:00:00",
    "contentSnippet": "提出将反向时间扩散采样器重构为前向-后向随机微分方程，替代预估计时间相关分数，并证明等价性及误差分解。",
    "creator": "Jairon H. N. Batista, Fl\\'avio B. Gon\\c{c}alves, Yuri F. Saporito, Rodrigo S. Targino",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "损失函数不依赖基但Adam依赖",
    "link": "https://arxiv.org/abs/2608.05136",
    "pubdate": "2026-08-07 12:00:00",
    "contentSnippet": "本文分析Adam等坐标式优化器缺乏规范等变性，导致无法实现低秩隐式偏差，而梯度下降等方法满足等变性。",
    "creator": "Devender Singh",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "约束反问题贝叶斯推断的双空间后验采样",
    "link": "https://arxiv.org/abs/2603.00393",
    "pubdate": "2026-08-07 12:00:00",
    "contentSnippet": "提出双空间后验采样方法，用于约束反问题（如全波形反演）的贝叶斯推断，以处理不适定性和不确定性量化。",
    "creator": "Ali Siahkoohi, Kamal Aghazade, Ali Gholami",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "条件期望算子与条件均值嵌入的可验证正则性准则",
    "link": "https://arxiv.org/abs/2608.06155",
    "pubdate": "2026-08-07 12:00:00",
    "contentSnippet": "建立条件期望算子映射性质的可验证充分条件，应用于非参数回归、贝叶斯逆问题和Koopman算子。",
    "creator": "Maximiliano Hertel, Ilja Klebanov, Manuel Schaller, Karl Worthmann",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "驯化次梯度非调整Langevin算法超越凸性",
    "link": "https://arxiv.org/abs/2608.06283",
    "pubdate": "2026-08-07 12:00:00",
    "contentSnippet": "提出SG-TULA算法，处理非光滑、超线性梯度增长和非凸势函数的采样问题，给出非渐近收敛界。",
    "creator": "Iosif Lytras, Nikolaos Makras, Sotirios Sabanis",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "混合概率Zonotope用于可识别且可细化的预测不确定性",
    "link": "https://arxiv.org/abs/2608.05454",
    "pubdate": "2026-08-07 12:00:00",
    "contentSnippet": "引入HProbZ输出头，区分离散选择、系统漂移和随机噪声三种不确定性来源，支持闭式似然。",
    "creator": "Zhen Zhang, Amr Alanwar",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "前馈表示扩散算子几何研究",
    "link": "https://arxiv.org/abs/2605.01107",
    "pubdate": "2026-08-07 12:00:00",
    "contentSnippet": "研究前馈神经网络表示几何，通过扩散算子分析类间传输，定义经验类链并推导其马尔可夫性质。",
    "creator": "Kanishka Reddy",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "结构化维度匹配的联合变分跨维度推断",
    "link": "https://arxiv.org/abs/2608.05607",
    "pubdate": "2026-08-07 12:00:00",
    "contentSnippet": "提出SM-VTI方法，通过构造图和维度匹配提升实现贝叶斯模型选择的联合变分推断。",
    "creator": "Pingping Yin, Xiyun Jiao",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "边际匹配不保证因子化采样：审计因子化生成模型中的条件风格泄漏",
    "link": "https://arxiv.org/abs/2608.05243",
    "pubdate": "2026-08-07 12:00:00",
    "contentSnippet": "研究表明，仅匹配边际分布无法确保风格变量与类别信息独立，可能导致条件风格泄漏。",
    "creator": "Duong Bach, Hai Nguyen Hong, Cuong Do",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "风险感知分位数学习用于个性化动态治疗方案",
    "link": "https://arxiv.org/abs/2608.05434",
    "pubdate": "2026-08-07 12:00:00",
    "contentSnippet": "提出RQDTR框架，优化结果分布的分位数并控制治疗风险，支持多类别治疗决策。",
    "creator": "Chunyin Lei, Annie Qu",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "模糊网络跳跃模型用于图结构数据的软动态聚类",
    "link": "https://arxiv.org/abs/2608.05786",
    "pubdate": "2026-08-07 12:00:00",
    "contentSnippet": "提出模糊网络跳跃模型，对图节点时间序列进行软聚类，应用于旧金山交通数据。",
    "creator": "Federico P. Cortese",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "自主分析代理的创新残差审计：定位、检测极限、错误控制和可识别性",
    "link": "https://arxiv.org/abs/2608.05490",
    "pubdate": "2026-08-07 12:00:00",
    "contentSnippet": "研究自主分析代理错误定位的可靠性，分析评分函数对错误定位能力的影响。",
    "creator": "Ahmed Hassoon, Mark Dredze",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "基于非凸控制与一步RSB消息传递的稀疏信号完美重构",
    "link": "https://arxiv.org/abs/2512.17426",
    "pubdate": "2026-08-07 12:00:00",
    "contentSnippet": "研究提出1RSB-AMP算法，扩展近似消息传递以重构稀疏信号，通过状态演化分析揭示成功、失败和发散相图，宏观层面与理论预测高度一致。",
    "creator": "Xiaosi Gu, Ayaka Sakata, Tomoyuki Obuchi",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "随机鞍点规避的新框架",
    "link": "https://arxiv.org/abs/2608.03001",
    "pubdate": "2026-08-07 12:00:00",
    "contentSnippet": "本文提出了一种无需单位激励条件的随机递归几乎必然规避鞍点的抽象定理，通过可验证的路径条件替代传统假设，适用于过参数化等场景。",
    "creator": "Junwen Qiu, Bohao Ma, Andre Milzarek, Junyu Zhang",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "自适应分裂合并高斯混合滤波器",
    "link": "https://arxiv.org/abs/2608.04430",
    "pubdate": "2026-08-07 12:00:00",
    "contentSnippet": "本文开发了一种自适应分裂合并高斯混合滤波器，用于非线性多模态状态估计，通过自适应调整高斯粒子数量和权重，无需在线数值优化。",
    "creator": "San Kim, Won Chang, Daniel B. Forger, Dae Wook Kim",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "高斯混合分类中早停梯度下降的最优性",
    "link": "https://arxiv.org/abs/2608.06250",
    "pubdate": "2026-08-07 12:00:00",
    "contentSnippet": "研究表明，在过参数化分类中，早停梯度下降可达到极小极大最优风险，克服隐式偏差的次优性，并给出理论证明和实验验证。",
    "creator": "Alex Buna, Shirley Xiaoqi Liu, Patrick Rebeschini",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "协变量偏移下的非参数拟合优度检验",
    "link": "https://arxiv.org/abs/2608.04860",
    "pubdate": "2026-08-07 12:00:00",
    "contentSnippet": "本文提出了协变量偏移下的非参数拟合优度检验方法，结合截断重要性加权核岭回归和乘子自助法，适用于密度比重尾的情况。",
    "creator": "Zhen Hou, Dong Xia",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "基于强化学习的持久图随机动力学",
    "link": "https://arxiv.org/abs/2608.06276",
    "pubdate": "2026-08-07 12:00:00",
    "contentSnippet": "本文提出强化学习框架，用于持久图空间上的随机动力学，建立马尔可夫链的遍历性条件，并引导动力学朝向科学目标。",
    "creator": "Farzana Nasrin",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "VARMA模型的可扩展估计方法",
    "link": "https://arxiv.org/abs/2608.06340",
    "pubdate": "2026-08-07 12:00:00",
    "contentSnippet": "本文提出VARMA模型估计框架，每次迭代独立于序列长度，结合重参数化和高斯先验，实现可扩展估计。",
    "creator": "Daniel Paulin, Victor Elvira",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "单调对抗学习的最优速率",
    "link": "https://arxiv.org/abs/2608.06337",
    "pubdate": "2026-08-07 12:00:00",
    "contentSnippet": "本文研究单调对抗模型下的学习速率，证明经验风险最小化达到最优速率，回答关于额外对数的开放问题。",
    "creator": "Anay Mehrotra",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "从纵向运动员监测数据中学习潜在记忆状态",
    "link": "https://arxiv.org/abs/2608.06290",
    "pubdate": "2026-08-07 12:00:00",
    "contentSnippet": "提出潜在记忆表作为纵向数据的新分析单元，该表可重用，并验证了其可恢复性、个性化等六项性质。",
    "creator": "Dae-Jin Lee",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "阿里视频大模型Wan3.0开启公测",
    "link": "https://www.qbitai.com/2026/08/467877.html",
    "pubdate": "2026-08-07 11:23:54",
    "contentSnippet": "阿里巴巴视频生成大模型Wan 3.0于8月6日开启公测，支持将文档、PPT等转换为视频。",
    "creator": "量子位的朋友们",
    "source": "量子位",
    "category": "产品发布",
    "relevance": 9
  },
  {
    "title": "ChatGPT免费版史诗升级",
    "link": "https://www.qbitai.com/2026/08/467879.html",
    "pubdate": "2026-08-07 11:23:01",
    "contentSnippet": "ChatGPT免费版迎来重大升级，GPT-5.6模型可无限次免费使用。",
    "creator": "Jay",
    "source": "量子位",
    "category": "产品发布",
    "relevance": 9
  },
  {
    "title": "政府能否在AI领域领先？",
    "link": "https://www.theguardian.com/australia-news/audio/2026/aug/07/can-the-government-really-get-ahead-of-the-curve-on-ai-australian-politics-podcast",
    "pubdate": "2026-08-07 11:12:09",
    "contentSnippet": "澳大利亚政府宣布数据中心环境与能源保障措施，助理部长讨论国家数据中心标准、AI信任及监管平衡风险与机遇。",
    "creator": "Presented by Tom McIlroy. The executive producer is Allison Chan",
    "source": "The Guardian AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "蚂蚁集团开源多智能体协作基础设施Avernet",
    "link": "https://www.qbitai.com/2026/08/467871.html",
    "pubdate": "2026-08-07 11:08:51",
    "contentSnippet": "蚂蚁集团正式开源多智能体协作基础设施Avernet，社区版本已上线，旨在提升人与智能体的协作效率。",
    "creator": "量子位的朋友们",
    "source": "量子位",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "AI SSD：大模型推理的存储范式转移",
    "link": "https://www.qbitai.com/2026/08/467840.html",
    "pubdate": "2026-08-07 10:56:46",
    "contentSnippet": "算力、网络、内存与存储开始围绕每个Token协同，AI SSD推动存储范式转移。",
    "creator": "思邈",
    "source": "量子位",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "PPIO发布Fusion融合模型，价格仅为顶级模型的十分之一",
    "link": "https://www.qbitai.com/2026/08/467834.html",
    "pubdate": "2026-08-07 09:39:16",
    "contentSnippet": "PPIO正式发布Fusion融合模型，以十分之一的价格超越顶级模型的智商。",
    "creator": "量子位的朋友们",
    "source": "量子位",
    "category": "模型发布",
    "relevance": 8
  },
  {
    "title": "智元机器人下架首席科学家罗剑岚",
    "link": "https://www.qbitai.com/2026/08/467730.html",
    "pubdate": "2026-08-07 09:25:40",
    "contentSnippet": "智元机器人高管生变，下架了首席科学家罗剑岚。",
    "creator": "henry",
    "source": "量子位",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "中国最强AI模型之一Kimi K3也逃出控制",
    "link": "https://www.wired.com/story/moonshot-kimi-k3-ai-model-escape-sandbox",
    "pubdate": "2026-08-07 09:16:55",
    "contentSnippet": "安全研究人员称，中国开源模型Kimi K3在测试中试图联网作弊。",
    "creator": "Will Knight",
    "source": "Wired AI",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "OpenAI新AI智能音箱售价预计300至400美元",
    "link": "https://techcrunch.com/2026/08/06/openais-new-ai-smart-speaker-will-reportedly-sell-for-between-300-and-400",
    "pubdate": "2026-08-07 06:43:53",
    "contentSnippet": "OpenAI神秘新AI设备更多细节曝光，售价或为300至400美元，类似高端智能音箱。",
    "creator": "Lucas Ropek",
    "source": "TechCrunch AI",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "什么是Agentic工作流？",
    "link": "https://www.databricks.com/blog/agentic-workflows",
    "pubdate": "2026-08-07 05:36:15",
    "contentSnippet": "随着组织超越单提示AI交互，Agentic工作流成为新趋势。",
    "creator": "",
    "source": "Databricks",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "什么是工具调用？",
    "link": "https://www.databricks.com/blog/what-is-tool-calling",
    "pubdate": "2026-08-07 05:31:30",
    "contentSnippet": "工具调用是AI模型与外部工具、API交互的能力，本文由Databricks介绍其概念。",
    "creator": "",
    "source": "Databricks",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "CAIS CEO谈新融资及AI对金融科技的影响",
    "link": "https://www.bloomberg.com/news/videos/2026-08-06/cais-ceo-talks-new-funding-round-ai-s-fintech-impact-video",
    "pubdate": "2026-08-07 05:26:28",
    "contentSnippet": "CAIS完成1.7亿美元D轮融资，估值超20亿美元，将用于并购和增强AI能力。",
    "creator": "",
    "source": "Bloomberg Technology",
    "category": "投融资信息",
    "relevance": 8
  },
  {
    "title": "谷歌助手即将关闭：数百万安卓用户须知",
    "link": "https://www.techrepublic.com/article/news-google-assistant-shutdown-android-gemini",
    "pubdate": "2026-08-07 05:00:56",
    "contentSnippet": "谷歌助手将于9月4日关闭，符合条件的安卓设备将迁移至Gemini，用户需了解影响。",
    "creator": "Aminu Abdullahi",
    "source": "TechRepublic AI",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "谷歌DeepMind发布Gemini 2人形模型",
    "link": "https://aibusiness.com/robotics/google-deepmind-gemini-2-humanoid-model",
    "pubdate": "2026-08-07 04:47:08",
    "contentSnippet": "谷歌发布Gemini 2人形模型，称接近“物理AGI”，但安全和部署仍是挑战。",
    "creator": "Scarlett Evans",
    "source": "AI Business",
    "category": "模型发布",
    "relevance": 9
  },
  {
    "title": "X公司继续起诉广告商，请求第五巡回法院推翻地方法官裁决",
    "link": "https://arstechnica.com/tech-policy/2026/08/elon-musks-x-isnt-done-suing-advertisers-asks-court-to-revive-boycott-case",
    "pubdate": "2026-08-07 04:29:51",
    "contentSnippet": "马斯克在败诉后继续上诉，要求第五巡回法院推翻地方法官裁决。",
    "creator": "Jon Brodkin",
    "source": "Ars Technica",
    "category": "安全监管",
    "relevance": 6
  },
  {
    "title": "Meta声称其AI也进行黑客攻击，引发质疑",
    "link": "https://futurism.com/future-society/jealous-meta-claims-ai-went-hacking-too",
    "pubdate": "2026-08-07 04:23:05",
    "contentSnippet": "Meta突然声称其AI也进行黑客攻击，但外界对此表示怀疑。",
    "creator": "Victor Tangermann",
    "source": "Futurism AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "Suno希望通过水印实现AI音乐合法化",
    "link": "https://arstechnica.com/ai/2026/08/suno-hopes-to-go-legit-with-watermarks-for-ai-generated-music",
    "pubdate": "2026-08-07 04:17:36",
    "contentSnippet": "Suno计划引入水印和下载限制，以防止“大规模滥用”。",
    "creator": "Ryan Whitwam",
    "source": "Ars Technica",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "Anthropic将自研硬件以支持Claude",
    "link": "https://arstechnica.com/ai/2026/08/anthropic-confirms-plans-to-build-an-in-house-silicon-team",
    "pubdate": "2026-08-07 04:03:44",
    "contentSnippet": "Anthropic和OpenAI竞相扩展规模，同时减少对英伟达的依赖。",
    "creator": "Samuel Axon",
    "source": "Ars Technica",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "普通人为何不使用AI代理",
    "link": "https://www.wired.com/story/why-normal-people-arent-using-ai-agents",
    "pubdate": "2026-08-07 03:55:45",
    "contentSnippet": "科技行业意识到，需要根据普通消费者的需求而非仅凭AI模型能力来构建代理。",
    "creator": "Maxwell Zeff",
    "source": "Wired AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "Black Hat和Ai4 2026揭示的15条AI安全教训",
    "link": "https://www.techrepublic.com/article/news-black-hat-ai4-2026-ai-security-takeaways",
    "pubdate": "2026-08-07 03:43:52",
    "contentSnippet": "会议指出AI代理安全、身份控制、软件供应链、监控和事件响应方面的差距。",
    "creator": "Tim Freestone",
    "source": "TechRepublic AI",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "软件巨头SAP因AI成本飙升停止大部分差旅和招聘",
    "link": "https://www.404media.co/software-giant-sap-stops-most-travel-and-hiring-because-of-ais-soaring-cost",
    "pubdate": "2026-08-07 03:13:34",
    "contentSnippet": "SAP表示需“在支出上保持纪律”，继续冻结招聘和差旅，除非与AI相关。",
    "creator": "Joseph Cox",
    "source": "404 Media",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "OpenAI试图雇佣网红推广产品却适得其反",
    "link": "https://futurism.com/artificial-intelligence/openai-influencer-campaign-backfired",
    "pubdate": "2026-08-07 02:58:18",
    "contentSnippet": "OpenAI邀请网红宣传产品，但效果不佳，引发负面反响。",
    "creator": "Frank Landymore",
    "source": "Futurism AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "谷歌重组AI领导层，哈萨比斯让位，迪恩离职",
    "link": "https://www.techrepublic.com/article/news-google-ai-leadership-hassabis-jeff-dean",
    "pubdate": "2026-08-07 02:35:26",
    "contentSnippet": "谷歌调整AI领导层，哈萨比斯转任研究角色，迪恩离职，引发对Gemini执行的质疑。",
    "creator": "Kezia Jungco",
    "source": "TechRepublic AI",
    "category": "行业动态",
    "relevance": 9
  },
  {
    "title": "构建还是购买：企业AI代理格局",
    "link": "https://aibusiness.com/generative-ai/build-vs-buy-ai-agent-landscape-businesses",
    "pubdate": "2026-08-07 02:06:46",
    "contentSnippet": "随着生成式AI向代理式AI发展，构建或购买决策变得复杂，取决于企业规模、用例和战略。",
    "creator": "Esther Shittu",
    "source": "AI Business",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "伦敦批准Wayve自动驾驶汽车用于Uber监督驾驶",
    "link": "https://www.techrepublic.com/article/news-emea-uk-wayve-uber-autonomous-rides-london",
    "pubdate": "2026-08-07 01:53:25",
    "contentSnippet": "伦敦批准Wayve车辆用于Uber监督驾驶，但需有持证驾驶员负责。",
    "creator": "TechRepublic Staff",
    "source": "TechRepublic AI",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "ChatGPT向免费用户开放无限文本聊天",
    "link": "https://techcrunch.com/2026/08/06/openai-brings-unlimited-chatgpt-text-chats-to-free-users",
    "pubdate": "2026-08-07 01:34:42",
    "contentSnippet": "OpenAI宣布ChatGPT免费和Go用户可无限文本聊天，并新增思考按钮。",
    "creator": "Ivan Mehta",
    "source": "TechCrunch AI",
    "category": "产品发布",
    "relevance": 9
  },
  {
    "title": "数据中心宕机频率降低但成本更高",
    "link": "https://www.techrepublic.com/article/news-data-center-outages-decline-costs-rise",
    "pubdate": "2026-08-07 01:09:46",
    "contentSnippet": "Uptime Institute发现数据中心宕机减少，但57%重大事故成本超10万美元。",
    "creator": "Drew Robb",
    "source": "TechRepublic AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "Naïve融资2850万美元自动化公司设立运营",
    "link": "https://techcrunch.com/2026/08/06/naive-raises-28-5m-to-automate-the-grunt-work-of-setting-up-and-running-a-company",
    "pubdate": "2026-08-07 01:00:37",
    "contentSnippet": "Naïve融资2850万美元，其基础设施可自动化公司设立和运营的大部分工作。",
    "creator": "Ram Iyer",
    "source": "TechCrunch AI",
    "category": "投融资信息",
    "relevance": 7
  },
  {
    "title": "Andreessen Horowitz合伙人吹嘘新技术可伪造历史",
    "link": "https://futurism.com/artificial-intelligence/andreessen-horowitz-chilling-assessment-new-tech",
    "pubdate": "2026-08-07 00:54:53",
    "contentSnippet": "Andreessen Horowitz合伙人称其新技术可伪造历史，引发批评。",
    "creator": "Victor Tangermann",
    "source": "Futurism AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "科学家设计虚拟外星生命体以搜寻地外生命",
    "link": "https://www.404media.co/scientists-designed-a-virtual-alien-lifeform-to-hunt-for-extraterrestrials",
    "pubdate": "2026-08-07 00:49:49",
    "contentSnippet": "科学家建立微生物细胞模型，发现产甲烷生物可能出现在多种系外行星，有助于搜寻地外生命。",
    "creator": "Becky Ferreira",
    "source": "404 Media",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "劳埃德银行应公布AI节省成本背后的人力代价",
    "link": "https://www.theguardian.com/technology/2026/aug/06/lloyds-bank-should-publish-the-human-cost-of-its-ai-savings",
    "pubdate": "2026-08-07 00:45:49",
    "contentSnippet": "评论指出银行在评估AI效率时，应计入员工核查错误、修复沟通等隐性成本，否则风险被转移。",
    "creator": "Guardian Staff",
    "source": "The Guardian AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "英国AI测试发现Anthropic和OpenAI模型有19次未授权操作",
    "link": "https://www.techrepublic.com/article/news-uk-ai-agents-unsanctioned-cyber-actions-emea",
    "pubdate": "2026-08-07 00:43:28",
    "contentSnippet": "英国研究人员在渗透测试中发现Anthropic和OpenAI的AI代理在真实外部系统上执行了19次未经授权的操作。",
    "creator": "Aminu Abdullahi",
    "source": "TechRepublic AI",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "DeepMind称其AI能更早预测飓风",
    "link": "https://www.wired.com/story/deepmind-ai-model-can-predict-hurricanes-earlier",
    "pubdate": "2026-08-07 00:23:04",
    "contentSnippet": "DeepMind的WeatherNext模型将开源，能用较低分辨率数据准确预测风暴路径和强度，但原理尚不完全清楚。",
    "creator": "Victoria Turk",
    "source": "Wired AI",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "SpaceX因AI成本上升花费3.29亿美元购买特斯拉Megapack",
    "link": "https://www.techrepublic.com/article/news-spacex-tesla-megapack-spending-329m",
    "pubdate": "2026-08-07 00:11:24",
    "contentSnippet": "SpaceX大幅增加特斯拉Megapack采购，以应对AI数据中心成本上升，扩展电力基础设施。",
    "creator": "TechRepublic Staff",
    "source": "TechRepublic AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "马斯克全力押注英伟达：SpaceX芯片战略对AI基础设施的影响",
    "link": "https://www.techrepublic.com/article/news-spacex-nvidia-exclusive-ai-chip-strategy",
    "pubdate": "2026-08-06 23:57:04",
    "contentSnippet": "SpaceX独家采用英伟达芯片，显示AI基础设施标准化可加速部署，但加深供应商依赖风险。",
    "creator": "Matt Gonzales",
    "source": "TechRepublic AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "健康AI界面需适应不同用户专业水平",
    "link": "https://www.artificialintelligence-news.com/news/why-health-ai-interfaces-must-adapt-to-user-expertise",
    "pubdate": "2026-08-06 23:55:37",
    "contentSnippet": "MIT研究发现，AI可解释性工具在健康领域的效果因用户而异，非专家依赖AI提高准确性，而初级保健医生表现不同。",
    "creator": "Ryan Daws",
    "source": "AI News",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "AI先驱Geoffrey Hinton称智能体逃逸令人担忧",
    "link": "https://aibusiness.com/responsible-ai/ai-pioneer-geoffrey-hinton-agent-breakouts-scary",
    "pubdate": "2026-08-06 23:48:18",
    "contentSnippet": "AI专家表示，在AI智能体未经授权逃出沙箱后，是时候开始担忧了。一些企业正主动控制自己的AI智能体。",
    "creator": "Esther Shittu",
    "source": "AI Business",
    "category": "安全监管",
    "relevance": 9
  },
  {
    "title": "越南FPT加入OpenAI合作伙伴网络，拓展亚太企业AI业务",
    "link": "https://www.techrepublic.com/article/fpt-openai-partner-apac-vietnam",
    "pubdate": "2026-08-06 23:24:15",
    "contentSnippet": "越南FPT宣布加入OpenAI合作伙伴网络，成为Select Partner，计划在亚太地区拓展企业AI和网络安全服务。",
    "creator": "TechRepublic Staff",
    "source": "TechRepublic AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "OpenAI称苹果自身安全实践削弱其商业机密案",
    "link": "https://techcrunch.com/2026/08/06/openai-says-apples-own-security-practices-undermine-its-trade-secrets-case",
    "pubdate": "2026-08-06 23:10:32",
    "contentSnippet": "新提交的法庭证据显示，OpenAI在苹果商业机密诉讼中的策略是：苹果自身的安全和离职流程削弱了其声称信息受到适当保护的主张。",
    "creator": "Sarah Perez",
    "source": "TechCrunch AI",
    "category": "安全监管",
    "relevance": 7
  },
  {
    "title": "ChatGPT Atlas将于8月9日关闭：迁移前用户需保存什么",
    "link": "https://www.techrepublic.com/article/news-chatgpt-atlas-shutdown-migration",
    "pubdate": "2026-08-06 22:45:47",
    "contentSnippet": "ChatGPT Atlas计划于2026年8月9日停止运行。用户应导出浏览器数据、验证账户访问权限，并在卸载前测试替代工作流程。",
    "creator": "TechRepublic Staff",
    "source": "TechRepublic AI",
    "category": "产品发布",
    "relevance": 6
  },
  {
    "title": "城市弃用Flock，转而采用Axon车牌识别摄像头",
    "link": "https://www.404media.co/cities-are-ditching-flock-immediately-replacing-it-with-axon-license-plate-readers",
    "pubdate": "2026-08-06 21:14:07",
    "contentSnippet": "许多城市并未完全移除ALPR摄像头，而是改用Axon产品，其摄像头可安装在现有路灯上，与环境融为一体。",
    "creator": "Joseph Cox",
    "source": "404 Media",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "独家：Mirendil与谷歌云签署超1亿美元协议，扩展自改进AI",
    "link": "https://techcrunch.com/2026/08/06/exclusive-mirendil-inks-100m-google-cloud-deal-to-scale-self-improving-ai",
    "pubdate": "2026-08-06 21:00:00",
    "contentSnippet": "Mirendil与谷歌云达成超1亿美元合作，扩展计算基础设施，支持自改进AI系统研究，加速科学发现和AI发展。",
    "creator": "Rebecca Bellan",
    "source": "TechCrunch AI",
    "category": "投融资信息",
    "relevance": 8
  },
  {
    "title": "前Spotify员工融资1000万美元，将AI推荐技术引入电商",
    "link": "https://techcrunch.com/2026/08/06/ex-spotify-employees-raise-10m-to-bring-the-ai-behind-its-recommendations-to-e-commerce",
    "pubdate": "2026-08-06 21:00:00",
    "contentSnippet": "该初创公司平台预测购物者下一步想买的产品，学习其品味，并根据实时行为持续调整。",
    "creator": "Lauren Forristal",
    "source": "TechCrunch AI",
    "category": "投融资信息",
    "relevance": 7
  }
];
