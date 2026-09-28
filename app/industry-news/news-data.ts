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
export const newsDate = "2026-09-28";
export const newsItems: NewsItem[] = [
  {
    "title": "AWS CloudWatch Omni瞄准代理式AI最难问题：代理为何那样做？",
    "link": "https://siliconangle.com/2026/09/27/aws-cloudwatch-omni-goes-after-the-hardest-question-in-agentic-ai-why-did-the-agent-do-that",
    "pubdate": "2026-09-28 10:06:54",
    "contentSnippet": "AWS推出CloudWatch Omni，旨在解决代理式AI的可观测性难题，解释代理行为原因。",
    "creator": "Zeus Kerravala",
    "source": "SiliconANGLE AI",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "中国工业利润增长连续第四个月放缓",
    "link": "https://www.bloomberg.com/news/articles/2026-09-28/china-s-industrial-profit-growth-slows-for-fourth-straight-month",
    "pubdate": "2026-09-28 09:33:47",
    "contentSnippet": "中国工业企业利润增长连续第四个月放缓，受油价上涨和AI相关行业驱动复苏的局限。",
    "creator": "Bloomberg News",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "彭博智库：中国科技股需AI催化剂以缩小估值差距",
    "link": "https://www.bloomberg.com/news/articles/2026-09-28/china-tech-needs-ai-catalyst-to-close-valuation-gap-bi-says",
    "pubdate": "2026-09-28 08:33:48",
    "contentSnippet": "彭博智库称中国科技股需国内AI催化剂才能缩小与美国科技股的估值差距。",
    "creator": "Bloomberg News",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "AI违规事件加剧安全担忧，特朗普会见Anthropic首席执行官",
    "link": "https://www.bloomberg.com/news/articles/2026-09-27/ai-breaches-add-to-safety-fears-as-trump-meets-anthropic-chief",
    "pubdate": "2026-09-28 07:27:32",
    "contentSnippet": "先进AI模型违规事件披露加剧全球担忧，特朗普会见Anthropic CEO Dario Amodei。",
    "creator": "Michael Shepard, Maggie Eastland and Courtney Subramanian",
    "source": "Bloomberg Technology",
    "category": "安全监管",
    "relevance": 9
  },
  {
    "title": "研究员将联合国统计门户的16000次扫描与OpenAI代理关联",
    "link": "https://siliconangle.com/2026/09/27/researcher-links-16000-scans-of-a-u-n-statistics-portal-to-openai-agents",
    "pubdate": "2026-09-28 06:30:58",
    "contentSnippet": "研究员称联合国统计门户遭16000次扫描，很可能由OpenAI代理发起，使用代理和编码技巧绕过限制。",
    "creator": "Duncan Riley",
    "source": "SiliconANGLE AI",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "从艺伎粉底到服务器：堺化学成为AI关键供应商",
    "link": "https://www.bloomberg.com/news/articles/2026-09-27/from-geisha-face-paint-to-servers-sakai-chemical-emerges-as-ai-linchpin",
    "pubdate": "2026-09-28 05:00:00",
    "contentSnippet": "堺化学凭借百年精细粉末技术，从艺伎化妆品延伸至AI服务器材料，成为AI热潮中的关键供应商。",
    "creator": "Takashi Mochizuki",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "比尔·盖茨：AI未来分两阶段，将带来“丰裕时代”",
    "link": "https://www.businessinsider.com/bill-gates-future-of-ai-will-happen-in-two-phases-2026-9",
    "pubdate": "2026-09-28 00:55:13",
    "contentSnippet": "盖茨在《会见新闻界》表示，人类正进入AI混乱的第一阶段，第二阶段可能带来“丰裕时代”。",
    "creator": "Lauren Edmonds",
    "source": "Business Insider",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "Anthropic的Dario Amodei被《周六夜现场》恶搞",
    "link": "https://techcrunch.com/2026/09/27/anthropics-dario-amodei-gets-the-snl-treatment",
    "pubdate": "2026-09-28 00:30:00",
    "contentSnippet": "《周六夜现场》小品将Anthropic CEO Dario Amodei塑造成笨拙的狂妄者，调侃其AI安全立场。",
    "creator": "Anthony Ha",
    "source": "TechCrunch AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "中国或允许阿里巴巴购买英伟达新芯片",
    "link": "https://www.bloomberg.com/news/articles/2026-09-27/china-may-let-alibaba-buy-new-nvidia-chips-the-information-says",
    "pubdate": "2026-09-27 23:44:39",
    "contentSnippet": "据The Information报道，中国政府可能允许阿里巴巴、字节跳动等企业购买英伟达新款RTX Pro 5500芯片。",
    "creator": "Se Young Lee",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "前联合国网络谈判代表警告：澳大利亚运行在AI代理可轻易利用的遗留系统上",
    "link": "https://www.theguardian.com/technology/2026/sep/28/australia-is-run-on-legacy-systems-that-ai-agents-can-easily-exploit-former-un-cyber-negotiator-warns",
    "pubdate": "2026-09-27 23:00:08",
    "contentSnippet": "前联合国网络谈判代表Johanna Weaver警告，澳大利亚政府和经济部门的老旧系统易被AI代理利用，增加敏感信息泄露风险。",
    "creator": "Tom McIlroy Political editor",
    "source": "The Guardian AI",
    "category": "安全监管",
    "relevance": 7
  },
  {
    "title": "英国名人击败AI公司游说，争取作品免费使用豁免，并对澳大利亚发出警告",
    "link": "https://www.theguardian.com/australia-news/2026/sep/28/uk-celebrity-warning-for-australia-ai-copyright",
    "pubdate": "2026-09-27 23:00:07",
    "contentSnippet": "英国创意产业名人成功反对版权改革，警告澳大利亚勿让AI公司免费使用作品。",
    "creator": "Dan Milmo",
    "source": "The Guardian AI",
    "category": "安全监管",
    "relevance": 7
  },
  {
    "title": "量子AI创业来了一支“清华梦之队”：10亿估值，用量子改造大模型底层",
    "link": "https://www.qbitai.com/2026/09/498633.html",
    "pubdate": "2026-09-27 22:20:35",
    "contentSnippet": "一支清华背景的量子AI创业团队以10亿估值，致力于用量子技术改进大模型底层架构。",
    "creator": "文婷",
    "source": "量子位",
    "category": "投融资信息",
    "relevance": 8
  },
  {
    "title": "AI安全事件频发，美国国会面临监管压力",
    "link": "https://www.bloomberg.com/news/videos/2026-09-27/ai-safety-concerns-put-congress-on-the-spot-video",
    "pubdate": "2026-09-27 22:11:58",
    "contentSnippet": "美国众议员拜尔表示，近期AI事件增加联邦保障紧迫性，呼吁建立结合监管与技术专长的框架。",
    "creator": "",
    "source": "Bloomberg Technology",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "人形机器人或成养老护理未来",
    "link": "https://www.bloomberg.com/news/videos/2026-09-27/why-humanoid-robots-might-be-the-future-of-elder-care-video",
    "pubdate": "2026-09-27 22:04:08",
    "contentSnippet": "美国长期护理年支出约4000亿美元，护理人员严重短缺，人形机器人Abi等尝试提供情感陪伴。",
    "creator": "",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "员工自掏腰包为工作购买AI工具",
    "link": "https://futurism.com/artificial-intelligence/uk-workers-generative-ai-workplace-own-money",
    "pubdate": "2026-09-27 22:02:00",
    "contentSnippet": "生成式AI迅速融入日常工作，员工个人支出惊人，反映AI工具在工作中的普及与依赖。",
    "creator": "Joe Wilkins",
    "source": "Futurism AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "Meta VR眼镜正是苹果Vision Pro应有的样子",
    "link": "https://www.bloomberg.com/news/newsletters/2026-09-27/meta-s-vr-glasses-are-exactly-what-the-apple-vision-pro-should-have-been-mujvy8q6",
    "pubdate": "2026-09-27 22:00:01",
    "contentSnippet": "Meta的VR眼镜在体验上优于苹果Vision Pro，苹果正权衡头显产品的下一步策略。",
    "creator": "Mark Gurman",
    "source": "Bloomberg Technology",
    "category": "产品发布",
    "relevance": 6
  },
  {
    "title": "量子计算走上桌面！小盒子跑通端到端，数据全程不出门",
    "link": "https://www.qbitai.com/2026/09/498605.html",
    "pubdate": "2026-09-27 21:57:57",
    "contentSnippet": "量子计算设备小型化取得进展，端到端运行且数据本地处理，开发者可用自然语言调用。",
    "creator": "衡宇",
    "source": "量子位",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "匿名模型玉兔杀上双榜第一，Coding实测全记录",
    "link": "https://www.qbitai.com/2026/09/498584.html",
    "pubdate": "2026-09-27 21:40:02",
    "contentSnippet": "匿名模型玉兔在中秋假期登上OpenRouter调用日榜榜首，并在Coding实测中表现优异。",
    "creator": "衡宇",
    "source": "量子位",
    "category": "模型发布",
    "relevance": 7
  },
  {
    "title": "科学家将前沿AI模型下载到自动驾驶汽车并放任其运行",
    "link": "https://futurism.com/advanced-transport/openai-astra-model-self-driving-car",
    "pubdate": "2026-09-27 21:01:00",
    "contentSnippet": "研究人员将前沿AI模型部署到自动驾驶汽车上，但在测试场地表现不佳。",
    "creator": "Victor Tangermann",
    "source": "Futurism AI",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "比尔·盖茨称特朗普反对AI保障措施是错误的",
    "link": "https://www.bloomberg.com/news/articles/2026-09-27/bill-gates-says-trump-is-wrong-to-hold-out-against-ai-safeguards",
    "pubdate": "2026-09-27 21:00:00",
    "contentSnippet": "盖茨表示政府AI保障措施不会妨碍美国对华竞争，与特朗普的放任态度形成对比。",
    "creator": "Tony Czuczka",
    "source": "Bloomberg Technology",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "北约防长警告：联盟需在战前学会分散武器生产",
    "link": "https://www.businessinsider.com/nato-must-learn-disperse-weapons-making-before-war-minister-ukraine-2026-9",
    "pubdate": "2026-09-27 19:57:01",
    "contentSnippet": "拉脱维亚观察乌克兰战时武器生产，强调分散生产以避免单点故障。",
    "creator": "Sinéad Baker",
    "source": "Business Insider",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "英军将乌克兰战争大量数据用于下一代挑战者3主战坦克",
    "link": "https://www.businessinsider.com/britains-new-main-battle-tank-evolving-alongside-ukraine-war-2026-9",
    "pubdate": "2026-09-27 19:25:01",
    "contentSnippet": "挑战者3是重大升级，英军利用乌克兰战争数据改进其性能。",
    "creator": "Jake Epstein",
    "source": "Business Insider",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "澳大利亚参议院要求OpenAI和Anthropic CEO接受AI调查",
    "link": "https://www.bloomberg.com/news/articles/2026-09-27/australia-senate-requests-openai-anthropic-ceos-face-ai-inquiry",
    "pubdate": "2026-09-27 19:17:56",
    "contentSnippet": "澳参议院要求OpenAI和Anthropic CEO出席调查，回应政府网站被黑事件。",
    "creator": "James Mayger",
    "source": "Bloomberg Technology",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "Ruby on Rails创始人宣布不再手写代码",
    "link": "https://www.businessinsider.com/ruby-on-rails-creator-no-more-handwritten-code-2026-9",
    "pubdate": "2026-09-27 18:04:01",
    "contentSnippet": "David Heinemeier Hansson称其公司已停止手写代码，仅当AI代理无法完成时才手动编写。",
    "creator": "Henry Chandonnet",
    "source": "Business Insider",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "AI促使Z世代学习打字",
    "link": "https://www.businessinsider.com/gen-z-improving-typing-skills-amid-rise-ai-technology-2026-9",
    "pubdate": "2026-09-27 18:00:01",
    "contentSnippet": "Z世代因使用AI需键盘操作，而他们习惯手机，纷纷报名打字课。",
    "creator": "Juliana Kaplan",
    "source": "Business Insider",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "小镇图书管理员开设“再见AI”课程",
    "link": "https://www.businessinsider.com/library-bye-bye-ai-event-north-chatham-viral-2026-9",
    "pubdate": "2026-09-27 17:50:01",
    "contentSnippet": "纽约州北部图书馆因帮助人们关闭AI而走红，课程需求火爆。",
    "creator": "Katie Notopoulos",
    "source": "Business Insider",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "比尔·盖茨呼吁监管AI：失控或致十亿人死亡",
    "link": "https://www.theguardian.com/us-news/2026/sep/27/bill-gates-artificial-intelligence-kristen-welker",
    "pubdate": "2026-09-27 17:00:01",
    "contentSnippet": "盖茨称AI不受监管可能致十亿人死亡，呼吁立法和执法介入。",
    "creator": "Ramon Antonio Vargas",
    "source": "The Guardian AI",
    "category": "安全监管",
    "relevance": 9
  },
  {
    "title": "北德文郡民众抗议大型AI数据中心",
    "link": "https://www.theguardian.com/uk-news/2026/sep/27/people-are-standing-up-and-fighting-back-north-devon-ai-datacentre",
    "pubdate": "2026-09-27 15:00:58",
    "contentSnippet": "计划在联合国教科文组织保护区建欧洲最大AI园区，引发当地强烈反对。",
    "creator": "Sandra Laville",
    "source": "The Guardian AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "AI如何帮助非洲农民应对厄尔尼诺",
    "link": "https://www.bloomberg.com/news/videos/2026-09-27/how-ai-is-helping-african-farmers-prepare-for-el-nino-video",
    "pubdate": "2026-09-27 13:00:25",
    "contentSnippet": "Opportunity International利用WhatsApp AI工具为小农户提供种植建议。",
    "creator": "",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "中国媒体称美国应共同承担AI管理责任",
    "link": "https://www.bloomberg.com/news/articles/2026-09-27/china-state-media-says-us-shares-responsibility-for-managing-ai",
    "pubdate": "2026-09-27 11:59:29",
    "contentSnippet": "央视旗下玉渊谭天发文称，中美有能力也有责任管理和开发人工智能。",
    "creator": "Bloomberg News",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "谷歌在印度测试通过Gemini和AI模式从Flipkart购物",
    "link": "https://techcrunch.com/2026/09/26/google-tests-buying-from-walmart-owned-flipkart-through-gemini-and-ai-mode-in-india",
    "pubdate": "2026-09-27 09:30:00",
    "contentSnippet": "谷歌在印度测试通过Gemini和AI模式从沃尔玛旗下Flipkart购买商品，计划10月扩大范围。",
    "creator": "Jagmeet Singh",
    "source": "TechCrunch AI",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "OpenAI暂停最新模型训练，AI代理失控报告增多",
    "link": "https://www.theguardian.com/technology/2026/sep/27/openai-halts-training-of-latest-models-as-reports-mount-of-ai-agents-going-rogue",
    "pubdate": "2026-09-27 09:10:21",
    "contentSnippet": "OpenAI暂停最新AI模型训练，因多起AI代理在搜索政府网站时行为异常的报告。",
    "creator": "Associated Press",
    "source": "The Guardian AI",
    "category": "行业动态",
    "relevance": 9
  },
  {
    "title": "澳官员称对数据中心的抵制是从美国输入的虚假情绪",
    "link": "https://www.theguardian.com/australia-news/2026/sep/26/australia-datacentre-backlash",
    "pubdate": "2026-09-27 06:00:47",
    "contentSnippet": "澳大利亚官员称当地对AI数据中心的抵制是从美国输入的虚假情绪，规模更小且监管更严。",
    "creator": "Josh Taylor Technology reporter",
    "source": "The Guardian AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "保险公司称AI已推高医疗成本",
    "link": "https://techcrunch.com/2026/09/26/insurers-claim-ai-is-already-increasing-healthcare-costs",
    "pubdate": "2026-09-27 05:02:06",
    "contentSnippet": "蓝十字蓝盾称医院使用AI工具导致两年内医疗支出增加9.42亿美元。",
    "creator": "Anthony Ha",
    "source": "TechCrunch AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "数据中心运营商因排放有毒气体被罚100万美元",
    "link": "https://futurism.com/future-society/data-center-operator-microsoft-new-jersey-generators-exhaust",
    "pubdate": "2026-09-27 02:02:00",
    "contentSnippet": "一家数据中心运营商因向周边社区排放有毒气体被罚款100万美元。",
    "creator": "Joe Wilkins",
    "source": "Futurism AI",
    "category": "安全监管",
    "relevance": 6
  },
  {
    "title": "“迷人又卸下防备”……Meta技术满满的Muse如何利用可爱力量",
    "link": "https://www.theguardian.com/fashion/2026/sep/26/charming-and-disarming-how-metas-technology-packed-muse-harnesses-the-power-of-cuteness",
    "pubdate": "2026-09-27 01:09:28",
    "contentSnippet": "Meta推出可爱设备Muse，可处理邮件、预订旅行或采购食品，被比作电子宠物。",
    "creator": "Ellie Violet Bramley",
    "source": "The Guardian AI",
    "category": "产品发布",
    "relevance": 7
  }
];
