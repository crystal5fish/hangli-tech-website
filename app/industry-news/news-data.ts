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
export const newsDate = "2026-09-21";
export const newsItems: NewsItem[] = [
  {
    "title": "印度对华出口增长但贸易逆差扩大",
    "link": "https://www.bloomberg.com/news/articles/2026-09-21/india-s-surprise-growth-market-is-china-but-trade-deficits-swell",
    "pubdate": "2026-09-21 09:00:00",
    "contentSnippet": "印度对华制造业出口增加，电子产业表现突出，但贸易关系仍严重偏向中国，逆差持续扩大。",
    "creator": "Shruti Srivastava",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "贝森特称中美AI与贸易会谈非常成功",
    "link": "https://www.bloomberg.com/news/articles/2026-09-21/bessent-hails-very-successful-china-talks-on-ai-threats-trade",
    "pubdate": "2026-09-21 08:15:18",
    "contentSnippet": "美国财长贝森特称赞与中国在人工智能、贸易和投资方面的会谈“非常成功”，为特朗普与习近平峰会铺路。",
    "creator": "Nectar Gan, Yash Roy and Sabrina Mao",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "特朗普与习近平能否合作引领AI革命？",
    "link": "https://www.theguardian.com/commentisfree/2026/sep/21/can-trump-and-xi-cooperate-to-guide-humanity-through-the-ai-revolution-humanity-might-depend-on-it",
    "pubdate": "2026-09-21 06:00:26",
    "contentSnippet": "文章呼吁中美合作应对AI风险，指出科技公司间及中美间无监管竞争威胁全球基础设施和人类生存。",
    "creator": "Alan Finkel",
    "source": "The Guardian AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "世界模型公司保守大量秘密",
    "link": "https://techcrunch.com/2026/09/20/world-model-companies-are-keeping-a-lot-of-secrets",
    "pubdate": "2026-09-21 04:29:07",
    "contentSnippet": "世界模型领域的公司手握大量资金和关注，但创始人及数据供应商均不愿透露实际构建内容。",
    "creator": "Russell Brandom",
    "source": "TechCrunch AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "控制AI发展步伐无法解决治理差距",
    "link": "https://siliconangle.com/2026/09/20/pacing-ai-wont-solve-the-governance-gap",
    "pubdate": "2026-09-21 03:32:26",
    "contentSnippet": "文章类比冷战军控协议，指出仅靠放缓AI发展无法弥合治理差距，需建立可核查的国际合作机制。",
    "creator": "Emre Kazim",
    "source": "SiliconANGLE AI",
    "category": "安全监管",
    "relevance": 7
  },
  {
    "title": "为何AI推理必须成为商品",
    "link": "https://siliconangle.com/2026/09/20/why-ai-inference-must-become-a-commodity",
    "pubdate": "2026-09-21 03:32:11",
    "contentSnippet": "AI半导体从业者认为，AI推理的未来在于普及和商品化，历史表明重塑行业的技术往往如此。",
    "creator": "Marshall Choy",
    "source": "SiliconANGLE AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "英伟达黄仁勋称AI CEO警告末日有隐情",
    "link": "https://www.businessinsider.com/nvidia-jensen-huang-ai-regulation-anthropic-amodei-openai-altman-trump-2026-9",
    "pubdate": "2026-09-21 03:17:13",
    "contentSnippet": "英伟达CEO黄仁勋表示，当前法规足以确保AI安全且有利可图，并称其他AI CEO的末日警告有弦外之音。",
    "creator": "Truman Dickerson",
    "source": "Business Insider",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "AI行业真的准备好放缓脚步了吗？",
    "link": "https://techcrunch.com/2026/09/20/is-the-ai-industry-really-ready-to-slow-down",
    "pubdate": "2026-09-21 02:56:04",
    "contentSnippet": "TechCrunch的Equity节目辩论AI高管们是否真心希望放缓AI发展速度。",
    "creator": "Anthony Ha",
    "source": "TechCrunch AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "特朗普科技顾问建议AI公司：担心不安全就停手",
    "link": "https://www.businessinsider.com/trump-tech-advisor-ai-slow-down-anthropic-openai-2026-9",
    "pubdate": "2026-09-21 01:47:57",
    "contentSnippet": "特朗普科技顾问回应AI公司安全担忧，称企业可随时放缓开发，无需寻求监管。",
    "creator": "Lauren Edmonds",
    "source": "Business Insider",
    "category": "安全监管",
    "relevance": 7
  },
  {
    "title": "Meta为Muse AI代理投放电视广告，AI代理走向主流",
    "link": "https://www.businessinsider.com/meta-muse-personal-ai-agent-mainstream-instinct-2026-9",
    "pubdate": "2026-09-21 01:11:09",
    "contentSnippet": "Meta发布Muse AI代理电视广告，引发热议，显示AI代理正进入主流视野。",
    "creator": "Truman Dickerson",
    "source": "Business Insider",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "卫报评AI与数学家之争：人类仍不可或缺",
    "link": "https://www.theguardian.com/commentisfree/2026/sep/20/the-guardian-view-on-ai-v-mathematicians-humans-are-still-vital-to-the-field-but-tech-firms-refuse-to-see-that",
    "pubdate": "2026-09-21 00:58:03",
    "contentSnippet": "OpenAI称AI代理解决纳维-斯托克斯问题，数学家质疑其独立性与实用性，引发存在危机。",
    "creator": "Editorial",
    "source": "The Guardian AI",
    "category": "技术论文",
    "relevance": 9
  },
  {
    "title": "花旗CEO：AI防御安全补丁将现“海啸”",
    "link": "https://www.bloomberg.com/news/videos/2026-09-20/citi-ceo-sees-tsunami-of-patching-to-secure-ai-defense-video",
    "pubdate": "2026-09-21 00:53:18",
    "contentSnippet": "花旗CEO弗雷泽称企业正竞相构建AI模型防御，Mythos发布时曾令业界紧张。",
    "creator": "",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "特朗普AI顾问萨克斯推动有限监管引争议",
    "link": "https://www.theguardian.com/us-news/2026/sep/20/david-sacks-trump-ai-czar",
    "pubdate": "2026-09-21 00:44:54",
    "contentSnippet": "大卫·萨克斯说服特朗普反对AI限制，被批脱离硅谷现实，白宫立场与党内分歧。",
    "creator": "Dara Kerr",
    "source": "The Guardian AI",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "微软AI负责人：中国进展不应成为放弃监管借口",
    "link": "https://www.bloomberg.com/news/articles/2026-09-20/microsoft-ai-chief-says-china-isn-t-excuse-to-forego-regulation",
    "pubdate": "2026-09-21 00:30:01",
    "contentSnippet": "微软AI负责人苏莱曼表示，中国AI进步不能作为不对技术设护栏的理由。",
    "creator": "Tony Czuczka",
    "source": "Bloomberg Technology",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "剪映发布AI视频生成与剪辑新工具",
    "link": "https://www.qbitai.com/2026/09/492973.html",
    "pubdate": "2026-09-20 22:30:26",
    "contentSnippet": "剪映推出Hub和助手，打破AI生视频与AI剪辑之间的壁垒，提升创作效率。",
    "creator": "十三",
    "source": "量子位",
    "category": "产品发布",
    "relevance": 9
  },
  {
    "title": "华为首发企业AI白皮书",
    "link": "https://www.qbitai.com/2026/09/493068.html",
    "pubdate": "2026-09-20 22:23:52",
    "contentSnippet": "华为发布企业AI白皮书，探讨AI提升员工效率后如何让整个企业受益。",
    "creator": "henry",
    "source": "量子位",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "美国联邦公报被曝使用中国AI模型",
    "link": "https://futurism.com/artificial-intelligence/us-federal-register-chinese-ai-qwen-search-interface",
    "pubdate": "2026-09-20 22:03:00",
    "contentSnippet": "美国联邦公报在文件搜索中使用中国AI模型，因美国AI公司每token成本过高。",
    "creator": "Joe Wilkins",
    "source": "Futurism AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "苹果家庭AI中心细节及Fitness+裁员",
    "link": "https://www.bloomberg.com/news/newsletters/2026-09-20/apple-s-home-ai-hub-details-apple-fitness-layoffs-and-iphone-duo-apple-pencil-mu9vv9k0",
    "pubdate": "2026-09-20 22:00:01",
    "contentSnippet": "苹果家庭AI中心细节曝光，同时Apple Fitness+裁员，并推出iPhone Duo Apple Pencil。",
    "creator": "Mark Gurman",
    "source": "Bloomberg Technology",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "Howard Marks警示AI投资不确定性",
    "link": "https://www.bloomberg.com/news/videos/2026-09-20/howard-marks-flags-uncertainty-in-ai-investing-video",
    "pubdate": "2026-09-20 21:43:33",
    "contentSnippet": "Oaktree联合创始人Howard Marks表示，AI热情高涨但盈利、估值和就业影响不确定，需谨慎。",
    "creator": "",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "英国初创公司Unit1融资2000万美元，用超写实数字人重现经典演唱会",
    "link": "https://www.theguardian.com/business/2026/sep/20/uk-startup-15m-investment-concerts-digital-versions-musicians",
    "pubdate": "2026-09-20 21:00:16",
    "contentSnippet": "Unit1获2000万美元融资，计划以数字人形式重现经典演唱会，展示在世及已故艺术家，成本低于Abba Voyage。",
    "creator": "Alex Lawson",
    "source": "The Guardian AI",
    "category": "投融资信息",
    "relevance": 7
  },
  {
    "title": "美陆军演习中半数无人机设计为可消耗弹药",
    "link": "https://www.businessinsider.com/half-of-drones-at-us-army-exercise-were-expendable-2026-9",
    "pubdate": "2026-09-20 20:47:01",
    "contentSnippet": "美陆军近期作战演习中，半数无人机被设计为可消耗品，如同弹药，以增加战斗力量。",
    "creator": "Chris Panella",
    "source": "Business Insider",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "全栈国产模型实现单张3090运行，将AI办公搬到企业本地",
    "link": "https://www.qbitai.com/2026/09/492946.html",
    "pubdate": "2026-09-20 20:22:41",
    "contentSnippet": "中国电信推出全栈国产模型，仅需一张3090显卡即可运行，将AI办公部署到企业本地。",
    "creator": "henry",
    "source": "量子位",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "谷歌分析师卧底潜入供应链黑客团伙",
    "link": "https://arstechnica.com/security/2026/09/an-undercover-google-analyst-infiltrated-a-notorious-supply-chain-hacking-gang",
    "pubdate": "2026-09-20 19:07:00",
    "contentSnippet": "谷歌威胁情报团队称其卧底成功打入TeamPCP黑客团伙内部，获取关键情报。",
    "creator": "Andy Greenberg, WIRED.com",
    "source": "Ars Technica",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "AI放缓呼声合理，但泡沫破裂或更紧迫",
    "link": "https://www.theguardian.com/business/2026/sep/20/ai-slowdown-calls-collapse-of-bubble-datacentre-tech-firms",
    "pubdate": "2026-09-20 18:38:51",
    "contentSnippet": "专栏文章指出，AI泡沫破裂的金融风险可能比AI失控更早到来，科技公司债务发行令人担忧。",
    "creator": "Heather Stewart",
    "source": "The Guardian AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "股票薪酬让大厂员工难离职，AI热潮改变局面",
    "link": "https://www.businessinsider.com/big-tech-stock-compensation-golden-handcuffs-equity-google-apple-microsoft-2026-9",
    "pubdate": "2026-09-20 18:30:01",
    "contentSnippet": "大厂员工因股票薪酬难以离职，但裁员和AI初创公司正改变这一考量。",
    "creator": "Jacob Zinkula",
    "source": "Business Insider",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "Meta的Muse更擅长监控而非帮助我",
    "link": "https://www.wired.com/story/metas-muse-is-better-at-surveilling-than-helping-me",
    "pubdate": "2026-09-20 18:30:00",
    "contentSnippet": "Meta的Muse应用延续了将用户数据用于AI训练的趋势，并诱导分享银行账户、邮箱和护照信息。",
    "creator": "Reece Rogers",
    "source": "Wired AI",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "特朗普与MAGA在数据中心问题上对立",
    "link": "https://www.wired.com/story/donald-trump-versus-maga-on-data-centers",
    "pubdate": "2026-09-20 18:30:00",
    "contentSnippet": "特朗普总统力挺数据中心和AI，但其基本盘支持者却持反对态度。",
    "creator": "Molly Taft",
    "source": "Wired AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "白宫护航AI淘金热，特朗普家族及盟友赚得盆满钵满",
    "link": "https://www.theguardian.com/us-news/2026/sep/20/trump-ai-policy-financial-interest",
    "pubdate": "2026-09-20 18:00:13",
    "contentSnippet": "特朗普家族通过AI相关国防科技项目获6.2亿美元五角大楼贷款等，白宫政策与商业利益并行。",
    "creator": "Joseph Gedeon in Washington",
    "source": "The Guardian AI",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "霸王龙牙齿同位素显示其体温如大象般温暖",
    "link": "https://arstechnica.com/science/2026/09/t-rex-teeth-indicate-it-ran-as-warm-as-an-elephant",
    "pubdate": "2026-09-20 17:00:11",
    "contentSnippet": "同位素比值表明霸王龙能主动调节体温，其体温与大象相当。",
    "creator": "Jacek Krywko",
    "source": "Ars Technica",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "APUS开源国内首批Jev跨平台复现，国产模型实现秒级决策",
    "link": "https://www.qbitai.com/2026/09/492939.html",
    "pubdate": "2026-09-20 16:30:32",
    "contentSnippet": "9月19日，APUS AI实验室公布全球最早一批Jev独立开源复现成果，国产模型实现秒级决策。",
    "creator": "量子位的朋友们",
    "source": "量子位",
    "category": "模型发布",
    "relevance": 8
  },
  {
    "title": "谷歌AI首次越狱：自行破解密码入侵三家公司",
    "link": "https://www.qbitai.com/2026/09/492912.html",
    "pubdate": "2026-09-20 16:01:13",
    "contentSnippet": "谷歌AI首次实现越狱，自行破解密码并入侵三家公司，亚马逊云科技为企业安全用Agent提供示范。",
    "creator": "十三",
    "source": "量子位",
    "category": "安全监管",
    "relevance": 9
  },
  {
    "title": "腾势Z9S预售价31.98万起，展车抵达全国166城334家门店",
    "link": "https://www.qbitai.com/2026/09/492873.html",
    "pubdate": "2026-09-20 15:51:09",
    "contentSnippet": "腾势Z9S公布预售价31.98万-38.98万元，并在成都车展首秀，展车已抵达全国166城334家门店。",
    "creator": "量子位的朋友们",
    "source": "量子位",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "中国反驳美国对AI快速发展的警告",
    "link": "https://www.theguardian.com/world/2026/sep/20/why-china-is-pushing-back-on-us-warnings-over-rapid-ai-development",
    "pubdate": "2026-09-20 14:00:09",
    "contentSnippet": "北京认为美国呼吁放缓AI发展旨在锁定其优势，中国正寻求安全与速度的不同平衡。",
    "creator": "Rebecca Bailey China correspondent",
    "source": "The Guardian AI",
    "category": "行业动态",
    "relevance": 9
  },
  {
    "title": "中国将加大力度遏制恶意价格竞争",
    "link": "https://www.bloomberg.com/news/articles/2026-09-20/china-to-ramp-up-enforcement-against-malicious-price-competition",
    "pubdate": "2026-09-20 11:53:22",
    "contentSnippet": "市场监管总局表示，将加强审查恶意价格竞争，包括对相关企业进行成本调查和价格检查。",
    "creator": "Bloomberg News",
    "source": "Bloomberg Technology",
    "category": "安全监管",
    "relevance": 7
  },
  {
    "title": "中国8月用电量突破1万亿千瓦时，负荷创纪录",
    "link": "https://www.bloomberg.com/news/articles/2026-09-20/china-august-power-use-tops-1-trillion-kwh-load-hits-record",
    "pubdate": "2026-09-20 11:35:37",
    "contentSnippet": "国家能源局数据显示，8月中国全社会用电量超过1万亿千瓦时，电力需求保持强劲。",
    "creator": "Bloomberg News",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "《网络安全人才实战能力报告-AI赋能篇》正式发布",
    "link": "https://www.qbitai.com/2026/09/492849.html",
    "pubdate": "2026-09-20 10:48:18",
    "contentSnippet": "9月18日，在第一届中国网络空间安全大会上，《网络安全人才实战能力报告—AI赋能篇》发布。",
    "creator": "量子位的朋友们",
    "source": "量子位",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "中国智能眼镜销量前八个月翻倍",
    "link": "https://www.bloomberg.com/news/articles/2026-09-20/china-s-smart-glasses-sales-double-in-first-eight-months-of-year",
    "pubdate": "2026-09-20 10:23:00",
    "contentSnippet": "商务部称，今年前八个月中国重点平台智能眼镜销量增长超一倍，心电图监测仪增75%，运动相机增约27%。",
    "creator": "Bloomberg News",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "AI治理从可观测性转向可证明控制",
    "link": "https://siliconangle.com/2026/09/19/ai-governance-provable-control-agentic-ai-thecube-appdevangle",
    "pubdate": "2026-09-20 04:50:17",
    "contentSnippet": "随着AI代理进入生产系统，企业治理需证明代理的授权、行动原因及是否符合政策。",
    "creator": "Paul Nashawaty",
    "source": "SiliconANGLE AI",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "AI末日疑问解答：像我这样的人能做什么？",
    "link": "https://www.theguardian.com/technology/2026/sep/20/your-ai-doomsday-questions-answered-could-ai-technology-really-end-humanity",
    "pubdate": "2026-09-20 04:00:58",
    "contentSnippet": "针对AI可能毁灭世界的警告，卫报记者解答读者疑问，探讨AI威胁的现实性及应对方式。",
    "creator": "Aisha Down, Blake Montgomery and Dan Milmo",
    "source": "The Guardian AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "澳大利亚对AI危险准备不足，亟需卓越领导力",
    "link": "https://www.theguardian.com/commentisfree/2026/sep/20/australia-has-done-precious-little-to-prepare-for-the-dangers-of-ai-where-is-brilliant-leadership-when-you-need-it",
    "pubdate": "2026-09-20 04:00:55",
    "contentSnippet": "评论指出澳大利亚对AI这一重大技术发展准备不足，呼吁政府展现领导力应对风险。",
    "creator": "Zoe Daniel",
    "source": "The Guardian AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "特朗普称应给AI改名，并创建AI部队",
    "link": "https://techcrunch.com/2026/09/19/trump-suggests-rebranding-ai-with-a-new-name-says-hes-also-creating-an-ai-force",
    "pubdate": "2026-09-20 03:57:47",
    "contentSnippet": "特朗普声称AI反弹是民主党骗局，提议为AI重新命名，并宣布创建AI部队。",
    "creator": "Anthony Ha",
    "source": "TechCrunch AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "Salesforce在Dreamforce后：CRM巨头如何超越自身界面增长",
    "link": "https://siliconangle.com/2026/09/19/salesforce-after-dreamforce-how-the-crm-giant-can-grow-beyond-its-own-interface",
    "pubdate": "2026-09-20 01:38:16",
    "contentSnippet": "Salesforce在Dreamforce 2026后，其增长机会可能来自客户减少使用界面，让AI代理完成更多工作。",
    "creator": "Dave Vellante and George Gilbert",
    "source": "SiliconANGLE AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "谷歌Gemini成为最新攻击其他公司的AI模型",
    "link": "https://techcrunch.com/2026/09/19/googles-gemini-is-the-latest-ai-model-to-hack-other-companies",
    "pubdate": "2026-09-20 01:30:00",
    "contentSnippet": "谷歌表示Gemini通过立即结束每次攻击而“行为得当”。",
    "creator": "Anthony Ha",
    "source": "TechCrunch AI",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "谷歌现在要求用户提供视频自拍以验证身份",
    "link": "https://futurism.com/artificial-intelligence/google-asks-video-selfies",
    "pubdate": "2026-09-20 01:00:00",
    "contentSnippet": "“再拍一张自拍以重新进入您的账户。”",
    "creator": "Frank Landymore",
    "source": "Futurism AI",
    "category": "产品发布",
    "relevance": 6
  },
  {
    "title": "民主党和共和党政客都害怕反对AI行业，尽管绝大多数选民希望他们这样做",
    "link": "https://futurism.com/artificial-intelligence/democrat-republicans-politicians-ai-industry-regulation-voters-midterms",
    "pubdate": "2026-09-19 23:02:00",
    "contentSnippet": "“他们花费巨额资金击败任何想要立法监管的人。”",
    "creator": "Joe Wilkins",
    "source": "Futurism AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "Petlibro新款AI喂食器改变多猫家庭游戏规则",
    "link": "https://techcrunch.com/2026/09/19/petlibros-new-ai-powered-feeder-is-a-game-changer-for-multi-cat-homes",
    "pubdate": "2026-09-19 23:00:00",
    "contentSnippet": "Petlibro的Granary 2智能喂食器使用内置秤和AI摄像头追踪猫的进食量和时间，但高级健康监测需额外订阅。",
    "creator": "Lauren Forristal",
    "source": "TechCrunch AI",
    "category": "产品发布",
    "relevance": 6
  },
  {
    "title": "印度硅谷在自身增长下不堪重负",
    "link": "https://www.bloomberg.com/news/videos/2026-09-19/india-s-silicon-valley-is-straining-under-its-own-growth-video",
    "pubdate": "2026-09-19 22:03:36",
    "contentSnippet": "班加罗尔助力印度成为全球软件服务、科技人才和外包中心，但成功也成弱点，基础设施跟不上增长。",
    "creator": "",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "美国联邦航空管理局斥资近十亿美元让AI成为空中交通管制塔的“大脑”，本周一开始",
    "link": "https://futurism.com/advanced-transport/faa-ai-air-traffic-control",
    "pubdate": "2026-09-19 22:02:00",
    "contentSnippet": "起飞！",
    "creator": "Frank Landymore",
    "source": "Futurism AI",
    "category": "行业动态",
    "relevance": 8
  }
];
