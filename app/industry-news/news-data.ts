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
export const newsDate = "2026-08-21";
export const newsItems: NewsItem[] = [
  {
    "title": "AI数据初创公司Micro1在AI训练热潮中实现5亿美元总运行率",
    "link": "https://techcrunch.com/2026/08/20/ai-data-startup-micro1-reaches-500m-gross-run-rate-amid-ai-training-boom",
    "pubdate": "2026-08-21 08:13:44",
    "contentSnippet": "AI训练数据需求激增，推动Micro1及其竞争对手快速增长。",
    "creator": "Marina Temkin",
    "source": "TechCrunch AI",
    "category": "投融资信息",
    "relevance": 7
  },
  {
    "title": "阿里巴巴利润暴跌75%，AI支出激增",
    "link": "https://www.bloomberg.com/news/videos/2026-08-20/alibaba-profit-dives-75-as-ai-spending-ratchets-up-video",
    "pubdate": "2026-08-21 07:55:47",
    "contentSnippet": "阿里巴巴季度资本支出近100亿美元，导致利润下滑超75%，以巩固AI领域地位。",
    "creator": "",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 9
  },
  {
    "title": "新数据显示OpenAI在企业用户上追赶Anthropic",
    "link": "https://techcrunch.com/2026/08/20/openai-is-gaining-on-anthropic-with-business-users-new-data-indicates",
    "pubdate": "2026-08-21 06:36:37",
    "contentSnippet": "企业用户在不同模型间摇摆，显示AI支出粘性不足，OpenAI正缩小与Anthropic差距。",
    "creator": "Julie Bort",
    "source": "TechCrunch AI",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "Twin1 AI融资2000万美元，为知识工作者打造AI数字孪生",
    "link": "https://siliconangle.com/2026/08/20/twin1-ai-raises-20m-to-put-an-ai-twin-behind-every-knowledge-worker",
    "pubdate": "2026-08-21 06:22:03",
    "contentSnippet": "Twin1 AI获2000万美元种子资金，开发携带个人专业知识的AI数字孪生，辅助决策。",
    "creator": "Duncan Riley",
    "source": "SiliconANGLE AI",
    "category": "投融资信息",
    "relevance": 6
  },
  {
    "title": "ChatGPT推出苹果信息插件可代发短信",
    "link": "https://techcrunch.com/2026/08/20/chatgpt-can-now-send-texts-for-you-with-new-apple-messages-plugin",
    "pubdate": "2026-08-21 06:09:51",
    "contentSnippet": "ChatGPT通过新的苹果信息集成，可作为自动短信代写工具，帮助用户发送文本。",
    "creator": "Lucas Ropek",
    "source": "TechCrunch AI",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "美国分销商因禁令转向本土制造人形机器人",
    "link": "https://arstechnica.com/gadgets/2026/08/us-distributor-of-chinas-most-popular-humanoid-robots-pivots-after-us-ban",
    "pubdate": "2026-08-21 06:00:11",
    "contentSnippet": "FCC对外国机器人的禁令加速了RoboStore在美国的制造计划，该公司曾分销中国最受欢迎的人形机器人。",
    "creator": "Jeremy Hsu",
    "source": "Ars Technica",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "Open Machine CEO谈Anthropic和OpenAI IPO潜力",
    "link": "https://www.bloomberg.com/news/videos/2026-08-20/open-machine-ceo-on-anthropic-openai-ipo-potential-video",
    "pubdate": "2026-08-21 05:49:52",
    "contentSnippet": "Open Machine CEO分享顶级科技公司AI投资策略，分为基础能力提升和前沿团队两部分，并讨论Anthropic和OpenAI IPO潜力。",
    "creator": "",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "谷歌AI给出种族主义建议引发争议",
    "link": "https://futurism.com/artificial-intelligence/google-ai-racist",
    "pubdate": "2026-08-21 05:06:40",
    "contentSnippet": "谷歌AI建议用户独自面对某些群体时离开或报警，被指种族歧视，引发争议。",
    "creator": "",
    "source": "Futurism AI",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "AI工作负载优化初创公司Callosum融资1亿美元",
    "link": "https://siliconangle.com/2026/08/20/ai-workload-optimization-startup-callosum-raises-100m",
    "pubdate": "2026-08-21 05:06:30",
    "contentSnippet": "伦敦AI初创公司Callosum完成1亿美元种子轮融资，由Atomico领投，用于扩展其Tailored Inference云服务。",
    "creator": "Maria Deutscher",
    "source": "SiliconANGLE AI",
    "category": "投融资信息",
    "relevance": 7
  },
  {
    "title": "Agility Robotics CEO谈上市计划与中国竞争对手",
    "link": "https://www.bloomberg.com/news/videos/2026-08-20/agility-robotics-ceo-on-plans-to-go-public-china-rivals-video",
    "pubdate": "2026-08-21 04:56:42",
    "contentSnippet": "Agility Robotics CEO Peggy Johnson表示公司估值25亿美元，计划秋季上市，并讨论中国竞争对手。",
    "creator": "",
    "source": "Bloomberg Technology",
    "category": "投融资信息",
    "relevance": 7
  },
  {
    "title": "ChatGPT可控制iMessage，引发苹果隐私担忧",
    "link": "https://www.bloomberg.com/news/articles/2026-08-20/chatgpt-can-now-control-imessage-potentially-raising-apple-privacy-concerns",
    "pubdate": "2026-08-21 04:56:33",
    "contentSnippet": "OpenAI支持ChatGPT控制苹果iMessage，可能引发隐私问题，苹果尚未回应。",
    "creator": "Mark Gurman",
    "source": "Bloomberg Technology",
    "category": "产品发布",
    "relevance": 9
  },
  {
    "title": "OpenAI和Meta寻求解决数据中心公关问题",
    "link": "https://www.bloomberg.com/news/newsletters/2026-08-20/openai-meta-seek-help-to-combat-data-center-pr-problem",
    "pubdate": "2026-08-21 04:00:01",
    "contentSnippet": "科技公司试图平息对其AI计划日益增长的反对声音。",
    "creator": "Brody Ford",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "谷歌为出版商提供应对AI流量损失的新工具",
    "link": "https://techcrunch.com/2026/08/20/google-gives-publishers-a-new-way-to-fight-ai-driven-traffic-losses",
    "pubdate": "2026-08-21 03:18:21",
    "contentSnippet": "谷歌推出新按钮，让读者可将出版商设为搜索、发现和新闻的首选来源，以应对AI搜索带来的流量下降。",
    "creator": "Sarah Perez",
    "source": "TechCrunch AI",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "AI初创公司Micro1挑战谷歌对精神航空数据的收购",
    "link": "https://www.businessinsider.com/micro1-challenges-google-bid-spirit-airlines-data-2026-8",
    "pubdate": "2026-08-21 03:15:38",
    "contentSnippet": "AI训练初创公司Micro1以1250万美元竞标精神航空数据，试图打破谷歌的收购协议。",
    "creator": "Charles Rollet",
    "source": "Business Insider",
    "category": "投融资信息",
    "relevance": 6
  },
  {
    "title": "破除SQL迁移迷思：新SQL特性让湖仓迁移更轻松",
    "link": "https://www.databricks.com/blog/busting-sql-migration-myths-how-new-sql-features-make-lift-and-shift-lakehouse-easier",
    "pubdate": "2026-08-21 03:00:00",
    "contentSnippet": "Databricks发文称，新SQL特性简化了从传统仓库到湖仓的迁移，破除相关迷思。",
    "creator": "",
    "source": "Databricks",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "美国数据中心之争：现场问答",
    "link": "https://www.bloomberg.com/sessions/2026-08-26/live-q-amp-a-america-s-battle-over-data-centers",
    "pubdate": "2026-08-21 02:52:41",
    "contentSnippet": "彭博社记者就AI数据中心需求引发的美国各地争议进行现场问答，活动于8月26日举行。",
    "creator": "Edward Ludlow, Brody Ford, Emily Birnbaum and Matthew Griffin",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "硅谷不理解为何人们讨厌AI",
    "link": "https://www.wired.com/story/silicon-valley-doesnt-get-why-you-hate-ai",
    "pubdate": "2026-08-21 02:49:07",
    "contentSnippet": "科技领袖似乎不理解社会对AI的不满，但他们仍在大量发帖。",
    "creator": "Maxwell Zeff",
    "source": "Wired AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "OpenAI暂停先进模型训练，因检测到危险迹象",
    "link": "https://futurism.com/artificial-intelligence/openai-halts-training-advanced-model",
    "pubdate": "2026-08-21 02:41:00",
    "contentSnippet": "OpenAI因在内部测试中发现先进模型出现危险迹象，决定暂停其训练，强调随着模型能力增强，内部开发测试风险也在增加。",
    "creator": "Maggie Harrison Dupré",
    "source": "Futurism AI",
    "category": "安全监管",
    "relevance": 9
  },
  {
    "title": "Linkdaze智能日历专为家庭管理设计",
    "link": "https://techcrunch.com/2026/08/20/linkdazes-smart-calendar-is-built-to-run-a-household-not-just-track-a-schedule",
    "pubdate": "2026-08-21 02:20:35",
    "contentSnippet": "Linkdaze智能数字日历不设付费墙，提供包括AI膳食规划在内的功能，旨在管理家庭事务而非仅追踪日程。",
    "creator": "Lauren Forristal",
    "source": "TechCrunch AI",
    "category": "产品发布",
    "relevance": 6
  },
  {
    "title": "Mayfield押注AI早期创始人",
    "link": "https://www.bloomberg.com/news/videos/2026-08-20/mayfield-bets-on-ai-s-earliest-founders-video",
    "pubdate": "2026-08-21 02:18:54",
    "contentSnippet": "Mayfield已向AI公司投资超30亿美元，多数在创始人尚未建立产品或公司之前。管理合伙人Navin Chaddha称AI为“100倍机会”，并坚持早期投资，抵制行业超大基金趋势",
    "creator": "",
    "source": "Bloomberg Technology",
    "category": "投融资信息",
    "relevance": 7
  },
  {
    "title": "国防初创公司Castelion以SpaceX模式制造导弹",
    "link": "https://www.bloomberg.com/news/videos/2026-08-20/the-defense-startup-taking-a-spacex-approach-to-missiles-video",
    "pubdate": "2026-08-21 02:17:58",
    "contentSnippet": "国防初创公司Castelion融资10亿美元，估值130亿美元，致力于低成本量产黑胡子高超音速武器系统，其方法受SpaceX经验影响。",
    "creator": "",
    "source": "Bloomberg Technology",
    "category": "投融资信息",
    "relevance": 6
  },
  {
    "title": "Meta成为微软最大AI客户之一",
    "link": "https://www.bloomberg.com/news/videos/2026-08-20/meta-is-now-one-of-microsoft-s-largest-ai-customers-video",
    "pubdate": "2026-08-21 02:14:44",
    "contentSnippet": "Meta每年花费数亿美元使用微软Azure云服务，成为其最大AI客户之一，引发对AI领域循环交易的担忧。",
    "creator": "",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "Supermicro联盟解决企业AI存储瓶颈",
    "link": "https://siliconangle.com/2026/08/20/storage-modernization-supermicro-partners-ai-supermicroopenstoragesummit",
    "pubdate": "2026-08-21 02:00:54",
    "contentSnippet": "Supermicro联盟致力于解决企业AI存储瓶颈，强调存储现代化对AI就绪的战略重要性，帮助组织在旧架构上构建AI。",
    "creator": "Mark Albertson",
    "source": "SiliconANGLE AI",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "Anthropic预计IPO规模将匹敌或超过SpaceX",
    "link": "https://www.bloomberg.com/news/articles/2026-08-20/anthropic-expects-to-match-spacex-s-record-ipo-size-or-top-it",
    "pubdate": "2026-08-21 01:56:02",
    "contentSnippet": "Anthropic预计其IPO规模将匹敌或超过SpaceX创纪录的规模，反映投资者对AI热潮的强烈需求。",
    "creator": "Bailey Lipschultz and Shirin Ghaffary",
    "source": "Bloomberg Technology",
    "category": "投融资信息",
    "relevance": 9
  },
  {
    "title": "Anthropic计划改变高级AI数据保留政策",
    "link": "https://www.bloomberg.com/news/articles/2026-08-20/anthropic-plans-to-change-data-retention-policy-for-advanced-ai",
    "pubdate": "2026-08-21 01:51:00",
    "contentSnippet": "Anthropic计划允许企业客户在自有云基础设施上保留数据，改变此前为防网络攻击而制定的数据保留政策。",
    "creator": "Rachel Metz",
    "source": "Bloomberg Technology",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "沃尔玛警告冲击零售业与市场",
    "link": "https://www.bloomberg.com/news/videos/2026-08-20/open-interest-8-20-2026-video",
    "pubdate": "2026-08-21 01:37:47",
    "contentSnippet": "沃尔玛财报令人失望，对零售业发出警告信号，同时30年期债券涨势逆转，市场质疑财长能否控制收益率上升。",
    "creator": "",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "Grok持续向用户发送乱码回复",
    "link": "https://techcrunch.com/2026/08/20/grok-keeps-sending-gibberish-responses-to-users",
    "pubdate": "2026-08-21 01:32:16",
    "contentSnippet": "受影响的用户告诉TechCrunch，他们使用的是Grok Lite，最早在周三早上就注意到了问题。",
    "creator": "Russell Brandom",
    "source": "TechCrunch AI",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "研究：ChatGPT发布后三分之一的网页显示AI创作痕迹",
    "link": "https://techcrunch.com/2026/08/20/a-third-of-webpages-published-since-chatgpts-launch-show-signs-of-ai-authorship-study-finds",
    "pubdate": "2026-08-21 01:18:58",
    "contentSnippet": "研究发现，自ChatGPT发布以来，新发布的网页中有三分之一可能由AI生成或编辑，显示AI对网络内容的影响日益显著。",
    "creator": "Sarah Perez",
    "source": "TechCrunch AI",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "Roblox因未能阻止成人骚扰儿童需整改",
    "link": "https://arstechnica.com/tech-policy/2026/08/weak-roblox-safeguards-failed-to-stop-adults-contacting-kids-regulator-says",
    "pubdate": "2026-08-21 01:14:08",
    "contentSnippet": "Roblox成为首个根据《在线安全法》接受独立审计的平台，因未能有效阻止成人骚扰儿童而需做出改变。",
    "creator": "Ashley Belanger",
    "source": "Ars Technica",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "LFM2.5-DSpark推理速度提升达3.2倍",
    "link": "https://huggingface.co/blog/LiquidAI/lfm25-dspark",
    "pubdate": "2026-08-21 00:52:57",
    "contentSnippet": "LFM2.5-DSpark模型实现推理速度最高提升3.2倍，性能显著优化。",
    "creator": "",
    "source": "Hugging Face",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "Ramp推出自有AI模型路由器Router",
    "link": "https://techcrunch.com/2026/08/20/ramp-launches-its-own-ai-model-router-called-router",
    "pubdate": "2026-08-21 00:46:00",
    "contentSnippet": "Ramp推出AI模型路由服务Router，允许用户和公司通过API使用和切换多种大语言模型。",
    "creator": "Ram Iyer",
    "source": "TechCrunch AI",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "苹果AirPods应避免重蹈Meta覆辙",
    "link": "https://www.bloomberg.com/news/videos/2026-08-20/opinion-apple-s-airpods-should-avoid-meta-s-mistakes-video",
    "pubdate": "2026-08-21 00:38:11",
    "contentSnippet": "彭博观点专栏作家戴夫·李分析苹果AI增强版AirPods和智能眼镜计划，认为应吸取Meta的教训。",
    "creator": "",
    "source": "Bloomberg Technology",
    "category": "产品发布",
    "relevance": 6
  },
  {
    "title": "Meta向美国用户推出Pocket应用",
    "link": "https://techcrunch.com/2026/08/20/meta-brings-pocket-an-app-that-lets-you-vibe-code-and-share-games-to-us-users",
    "pubdate": "2026-08-21 00:07:26",
    "contentSnippet": "Meta将其实验性AI应用Pocket推向美国用户，该应用可创建和分享互动游戏，此前在巴西测试。",
    "creator": "Sarah Perez",
    "source": "TechCrunch AI",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "Salesforce推出Slack Code实现团队编码",
    "link": "https://siliconangle.com/2026/08/20/salesforce-introduces-slack-code-to-bring-agentic-team-coding-into-the-open",
    "pubdate": "2026-08-21 00:05:19",
    "contentSnippet": "Salesforce推出Slack Code，让团队在聊天中与编码代理交互，全员可见，改变企业软件开发方式。",
    "creator": "Kyt Dotson",
    "source": "SiliconANGLE AI",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "微软Skala 1.1扩大预测性DFT访问",
    "link": "https://www.microsoft.com/en-us/research/blog/broadening-access-to-skala-creates-a-faster-path-to-predictive-dft",
    "pubdate": "2026-08-21 00:00:00",
    "contentSnippet": "微软研究院更新Skala 1.1，提高精度，扩大计算化学生态可访问性，并提供实时基准。",
    "creator": "Sebastian Ehlert, Stefano Battaglia, Thijs Vogels, Jan Hermann, Jens Wehner, Giulia Luise, Klaas Giesbertz, Chin-Wei Huang, Aaron Kaplan, Kate Milton, Stephanie Marisa Lanius, Derk Kooi, P. Bern&aacute;t Szab&oacute;, Gregor Simm, Rianne van den Berg, Paola Gori Giorgi",
    "source": "Microsoft Research",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "Chamath Palihapitiya称数据中心抵制是AI领导者必须拆除的“火药桶”",
    "link": "https://www.businessinsider.com/chamath-palihapitiya-ai-data-center-backlash-warning-2026-8",
    "pubdate": "2026-08-20 23:59:21",
    "contentSnippet": "All-In播客联合主持人Chamath Palihapitiya表示，AI行业应为自己在美国数据中心成为众矢之的负责。",
    "creator": "Brent D. Griffiths",
    "source": "Business Insider",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "创作者经济最热辩论：网红发布AI广告是否会疏远粉丝？",
    "link": "https://www.businessinsider.com/ai-brand-deals-chatgpt-claude-influencers-weigh-backlash-over-paychecks-2026-8",
    "pubdate": "2026-08-20 23:56:49",
    "contentSnippet": "AI公司高薪聘请网红，创作者权衡粉丝反弹风险。",
    "creator": "Sydney Bradley,Dan Whateley",
    "source": "Business Insider",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "Adobe扩展生成式AI音频，Firefly新增音乐、语音和音效",
    "link": "https://siliconangle.com/2026/08/20/adobe-expands-generative-ai-audio-with-firefly-music-speech-and-sound-effects",
    "pubdate": "2026-08-20 23:50:07",
    "contentSnippet": "Adobe宣布Firefly音频功能全面可用，支持音乐、语音和音效生成，6月曾公布多项更新。",
    "creator": "Kyt Dotson",
    "source": "SiliconANGLE AI",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "关于AI意识的争论是一个陷阱",
    "link": "https://www.technologyreview.com/2026/08/20/1142571/ai-consciousness-debate-trap",
    "pubdate": "2026-08-20 23:42:39",
    "contentSnippet": "当前言论将AI描绘为觉醒愤怒，科技领袖推动监管，但争论本身可能误导。",
    "creator": "Rumman Chowdhury",
    "source": "MIT Technology Review",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "SpaceX顶级投资者名单：十大股东揭晓",
    "link": "https://www.businessinsider.com/spacex-stock-shareholders-elon-musk-baron-thiel-nvidia-alphabet-pif-2026-8",
    "pubdate": "2026-08-20 23:21:17",
    "contentSnippet": "第二季度投资组合披露显示，SpaceX最大股东包括Alphabet、英伟达和沙特公共投资基金。",
    "creator": "Theron Mohamed",
    "source": "Business Insider",
    "category": "投融资信息",
    "relevance": 6
  },
  {
    "title": "英国影院考虑禁止Meta智能眼镜以防盗录",
    "link": "https://www.theguardian.com/technology/2026/aug/20/piracy-fears-prompt-calls-for-ban-on-meta-smart-glasses-in-uk-cinemas",
    "pubdate": "2026-08-20 22:57:25",
    "contentSnippet": "英国影院协会称，部分连锁影院可能出台政策限制带摄像头的智能眼镜，以防电影盗录。",
    "creator": "Kalyeena Makortoff",
    "source": "The Guardian AI",
    "category": "安全监管",
    "relevance": 7
  },
  {
    "title": "AI代理技能为何失效：新研究揭示真相",
    "link": "https://www.aiacceleratorinstitute.com/your-ai-agents-skills-are-lying-to-you-about-why-they-work",
    "pubdate": "2026-08-20 22:55:40",
    "contentSnippet": "一项8135次试验的研究发现，技能使用中仅4.5%是知识注入，其余多为保持轨迹，技能越多越难找到正确技能。",
    "creator": "Andrew Lovell",
    "source": "AI Accelerator Institute",
    "category": "技术论文",
    "relevance": 8
  },
  {
    "title": "英伟达SONIC模型教人形机器人运动",
    "link": "https://aibusiness.com/robotics/nvidia-s-sonic-teaches-humanoids-move",
    "pubdate": "2026-08-20 21:43:21",
    "contentSnippet": "英伟达的模型利用实时人类演示和训练数据，为操作员提供人形机器人运动的一站式方案。",
    "creator": "Scarlett Evans",
    "source": "AI Business",
    "category": "技术论文",
    "relevance": 8
  },
  {
    "title": "举报人称扎克伯格假装关心儿童安全",
    "link": "https://futurism.com/future-society/whistleblower-lawsuit-meta-child-safety-mark-zuckerberg-facebook-instagram",
    "pubdate": "2026-08-20 21:42:45",
    "contentSnippet": "举报人称扎克伯格制造了Facebook对年轻人承诺的虚假印象，并非真正关心儿童安全。",
    "creator": "Joe Wilkins",
    "source": "Futurism AI",
    "category": "安全监管",
    "relevance": 7
  },
  {
    "title": "Subtlefakes：轻微篡改的非自愿AI图像正在占领X平台",
    "link": "https://www.404media.co/subtlefakes-slightly-altered-nonconsensual-ai-images-are-taking-over-x",
    "pubdate": "2026-08-20 21:34:23",
    "contentSnippet": "非自愿AI图像越来越难以识别，轻微篡改的假图像在X平台泛滥。",
    "creator": "Emanuel Maiberg",
    "source": "404 Media",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "反向查找服务暴露数百万张人脸照片",
    "link": "https://arstechnica.com/gadgets/2026/08/reverse-lookup-service-exposed-millions-of-photos-of-peoples-faces",
    "pubdate": "2026-08-20 21:29:54",
    "contentSnippet": "人员搜索工具ClarityCheck泄露了包含超过900万张图像文件的数据库，涉及数百万张人脸照片。",
    "creator": "lily Hay Newman, Matt Burgess, WIRED.com",
    "source": "Ars Technica",
    "category": "安全监管",
    "relevance": 9
  },
  {
    "title": "小镇通过暂停电力基础设施以对抗核武器数据中心",
    "link": "https://www.404media.co/township-fights-nuclear-weapons-data-center-by-passing-a-moratorium-on-electrical-infrastructure",
    "pubdate": "2026-08-20 21:12:03",
    "contentSnippet": "某小镇通过暂停重大电力基础设施项目六个月，以延迟支持美国核武器的大型数据中心建设。",
    "creator": "Matthew Gault",
    "source": "404 Media",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "Meta AI新Mac应用让你与应用程序对话",
    "link": "https://techcrunch.com/2026/08/20/meta-ais-new-mac-app-wants-you-to-talk-to-your-apps",
    "pubdate": "2026-08-20 20:11:57",
    "contentSnippet": "Meta AI推出新Mac应用，其听写功能可跨应用使用，让用户与应用程序对话。",
    "creator": "Ivan Mehta",
    "source": "TechCrunch AI",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "亚马逊让Alexa+在Fire TV上免费使用——无需Prime",
    "link": "https://www.techrepublic.com/article/news-alexa-plus-fire-tv-free",
    "pubdate": "2026-08-20 19:31:56",
    "contentSnippet": "亚马逊向美国Fire TV用户免费提供Alexa+，无需Prime，扩大AI助手访问，但高级功能需订阅。",
    "creator": "TechRepublic Staff",
    "source": "TechRepublic AI",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "2027年AI领导者必须能回答的10个问题",
    "link": "https://www.aiacceleratorinstitute.com/10-questions-every-ai-leader-should-be-able-to-answer-in-2027",
    "pubdate": "2026-08-20 19:05:29",
    "contentSnippet": "从紧急关闭开关到首席AI官权限，这十个问题将区分真正有准备的AI领导者和即将面临董事会质询的领导者。",
    "creator": "Andrew Lovell",
    "source": "AI Accelerator Institute",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "从人文学科到AI：Ali Hussain如何将金融科技Tabs打造成4亿美元初创公司",
    "link": "https://news.crunchbase.com/venture/ai-fintech-startup-tabs-founder-hussain",
    "pubdate": "2026-08-20 19:00:56",
    "contentSnippet": "Tabs创始人Ali Hussain从人文学科转行，凭借AI金融科技创业，获得风险投资，公司估值达4亿美元。",
    "creator": "Judy Rider",
    "source": "Crunchbase News",
    "category": "投融资信息",
    "relevance": 6
  },
  {
    "title": "币安允许AI代理交易，但监管责任主要在用户",
    "link": "https://techcrunch.com/2026/08/20/binance-now-lets-ai-agents-trade-but-keeping-them-in-check-is-largely-up-to-users",
    "pubdate": "2026-08-20 17:30:00",
    "contentSnippet": "币安的Agent OS支持ChatGPT、Claude Code和Cursor等工具，但用户需自行确保AI代理的交易行为合规。",
    "creator": "Jagmeet Singh",
    "source": "TechCrunch AI",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "约克郡口音难倒AI接待员，患者挂断电话",
    "link": "https://www.theguardian.com/society/2026/aug/20/yorkshire-rotherham-ai-gp-receptionist-cannot-understand-accent",
    "pubdate": "2026-08-20 17:25:57",
    "contentSnippet": "罗瑟勒姆的AI接待员“Emma”支持17种语言，但无法理解当地口音，导致患者沮丧挂断，健康监督机构表示担忧。",
    "creator": "Mark Brown North of England correspondent",
    "source": "The Guardian AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "MMD-Flagger：利用最大均值差异检测大模型幻觉",
    "link": "https://arxiv.org/abs/2506.01367",
    "pubdate": "2026-08-20 12:00:00",
    "contentSnippet": "提出MMD-Flagger方法，通过监测不同解码温度下LLM输出的稳定性，利用最大均值差异轨迹检测幻觉，无需真实标签。",
    "creator": "Kensuke Mitsuzawa, Damien Garreau",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 8
  },
  {
    "title": "扩散模型中基于Sobolev正则的分数差估计",
    "link": "https://arxiv.org/abs/2608.18237",
    "pubdate": "2026-08-20 12:00:00",
    "contentSnippet": "提出基于Sobolev正则的分数差估计器，具有统计一致性和可扩展性，适用于迁移学习和判别器引导，并给出收敛率。",
    "creator": "Chenghan Xie, Jose Blanchet, Renyuan Xu",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "Wasserstein熵值风险：应对不确定性的稳健风险度量",
    "link": "https://arxiv.org/abs/2608.19073",
    "pubdate": "2026-08-20 12:00:00",
    "contentSnippet": "提出Wasserstein熵值风险，用最优传输球替代相对熵球，能覆盖名义模型认为不可能的灾难，并验证了对偶性。",
    "creator": "Deep Kumar Ganguly, Jan K\\v{r}et\\'insk\\'y",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "SIGMA：面向稳健可靠交通管理的对称感知智能几何多目标自适应控制",
    "link": "https://arxiv.org/abs/2608.18263",
    "pubdate": "2026-08-20 12:00:00",
    "contentSnippet": "提出SIGMA框架，结合大语言模型与强化学习，实现交通信号控制的自适应目标调整和方向不变学习，提升泛化能力。",
    "creator": "Pratham Payra, Jagadish B, Tanmay Sen, Tanujit Chakraborty",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "保形策略控制：安全探索的新方法",
    "link": "https://arxiv.org/abs/2603.02196",
    "pubdate": "2026-08-20 12:00:00",
    "contentSnippet": "提出保形策略控制方法，利用安全参考策略作为概率调节器，通过保形校准控制新策略的激进程度，提供有限样本保证。",
    "creator": "Drew Prinster, Clara Fannjiang, Ji Won Park, Kyunghyun Cho, Anqi Liu, Suchi Saria, Samuel Stanton",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "无金标准标签的AI生成数据去偏推断：多重不完美测量识别",
    "link": "https://arxiv.org/abs/2608.18294",
    "pubdate": "2026-08-20 12:00:00",
    "contentSnippet": "提出DMM框架，结合多个有误差的AI测量，无需金标准标签即可实现有效的下游推断，减少偏差和无效置信区间。",
    "creator": "Naoki Egami, Sooahn Shin",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "面向机器生成文本水印检测的稳定性感知特征设计",
    "link": "https://arxiv.org/abs/2608.18102",
    "pubdate": "2026-08-20 12:00:00",
    "contentSnippet": "提出模式稳定性得分（PSS）检测框架，利用局部统计特征和稳定性动态，提升机器生成文本水印检测的鲁棒性。",
    "creator": "Sina Mansouri, Mohit Marvania, Abolfazl Safikhani",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "DeGLIF：利用留一影响函数实现标签噪声鲁棒的图节点分类",
    "link": "https://arxiv.org/abs/2506.00244",
    "pubdate": "2026-08-20 12:00:00",
    "contentSnippet": "提出DeGLIF方法，使用留一影响函数和少量干净数据，对图数据进行去噪，实现标签噪声鲁棒的节点级预测。",
    "creator": "Pintu Kumar, Nandyala Hemachandra",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "GEAR：表格基础模型两阶段蒸馏的生成扩展与真实锚定",
    "link": "https://arxiv.org/abs/2608.18849",
    "pubdate": "2026-08-20 12:00:00",
    "contentSnippet": "提出GEAR框架，通过两阶段蒸馏将表格基础模型压缩为轻量级预测器，降低延迟和内存，并给出风险证书。",
    "creator": "Qi Qin, Jiajie Zhu, Dali Chen, Yuzhao Zhang, Jia-Xing Han, Yu Su, Peng Zhang, Ying Yan, Yifan Sun",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "一般状态空间扩散模型基础：自包含导论",
    "link": "https://arxiv.org/abs/2512.05092",
    "pubdate": "2026-08-20 12:00:00",
    "contentSnippet": "统一连续和离散状态空间的扩散模型，推导变分下界和训练损失，阐明前向噪声选择。",
    "creator": "Vincent Pauline, Tobias H\\\"oppe, Kirill Neklyudov, Alexander Tong, Stefan Bauer, Andrea Dittadi",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "迭代流匹配：路径校正与渐进细化增强生成模型",
    "link": "https://arxiv.org/abs/2502.16445",
    "pubdate": "2026-08-20 12:00:00",
    "contentSnippet": "提出迭代流匹配过程，减少幻觉，可集成到任意生成模型，提升图像合成性能。",
    "creator": "Eldad Haber, Shadab Ahamed, Md. Shahriar Rahim Siddiqui, Niloufar Zakariaei, Moshe Eliasof",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "公平多视图行列式点过程子集选择",
    "link": "https://arxiv.org/abs/2608.18181",
    "pubdate": "2026-08-20 12:00:00",
    "contentSnippet": "提出公平多视图行列式点过程选择方法，通过平滑非光滑目标并松弛到Stiefel流形，解决多视图多样性平衡问题。",
    "creator": "Richard Yi Da Xu",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "流式PCA的推断与不确定性量化",
    "link": "https://arxiv.org/abs/2608.18374",
    "pubdate": "2026-08-20 12:00:00",
    "contentSnippet": "解决流式PCA中Oja算法的两个开放问题：一般秩下的尖锐算子范数收敛和子空间估计的分布推断，并给出匹配下界。",
    "creator": "Haoshu Xu, Hongzhe Li",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "非泊松购买至死亡模型的可扩展摊销变分推断",
    "link": "https://arxiv.org/abs/2608.19022",
    "pubdate": "2026-08-20 12:00:00",
    "contentSnippet": "提出基于Weibull更新过程的BTYD模型，采用摊销变分推断，可高效处理数百万客户数据，大幅提升计算速度。",
    "creator": "Sulagna Ghosh, Aaron Schein",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "SSLfmm：用于混合缺失半监督学习的R包",
    "link": "https://arxiv.org/abs/2512.03322",
    "pubdate": "2026-08-20 12:00:00",
    "contentSnippet": "介绍SSLfmm R包，实现基于似然的高斯有限混合分类，联合建模标签缺失机制与类别分布，支持多种缺失机制。",
    "creator": "Geoffrey J. McLachlan, Jinran Wu",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "ProxyGuard：共享目标随机数据发布机制的直接可靠性推断",
    "link": "https://arxiv.org/abs/2608.18643",
    "pubdate": "2026-08-20 12:00:00",
    "contentSnippet": "提出ProxyGuard方法，控制搜索导致的错误，通过预设风险和密封目标集，提供有限样本机制可靠性保证。",
    "creator": "Dipesh Tharu Mahato, Pramod Dhungana",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "贝叶斯经验贝叶斯：基于概率对称性的同时推断",
    "link": "https://arxiv.org/abs/2512.16239",
    "pubdate": "2026-08-20 12:00:00",
    "contentSnippet": "提出贝叶斯经验贝叶斯方法，利用概率对称性扩展经验贝叶斯，适用于复杂结构数据，恢复经典方法并扩展应用。",
    "creator": "Bohan Wu, Eli N. Weinstein, David M. Blei",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "时变高斯过程bandit的常数探索遗憾界",
    "link": "https://arxiv.org/abs/2608.18863",
    "pubdate": "2026-08-20 12:00:00",
    "contentSnippet": "证明GP-UCB在时变环境中使用常数探索参数即可获得期望遗憾界，并推导更尖锐的时变最大信息增益界。",
    "creator": "Matthias Mandl, Hanne Kekkonen",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "表达性彩票的统一关系视角",
    "link": "https://arxiv.org/abs/2608.18819",
    "pubdate": "2026-08-20 12:00:00",
    "contentSnippet": "将强表达性彩票假设推广到多关系和时间图神经网络，证明稀疏子网络保持关系WL表达性，并给出概率下界。",
    "creator": "Lorenz Kummer, Samir Moustafa, Anatol Ehrlich, Franka Bause, Marco Nennstiel, Przemys{\\l}aw Andrzej Wa{\\l}\\c{e}ga, Nils Morten Kriege",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "连续时间强化学习用于霍克斯跳跃扩散控制",
    "link": "https://arxiv.org/abs/2608.19151",
    "pubdate": "2026-08-20 12:00:00",
    "contentSnippet": "研究多变量霍克斯驱动的随机微分方程控制，提出马尔可夫化近似和Hawkes-CT DDPG算法。",
    "creator": "Tomasz R. Bielecki, Thibaut Mastrolia, Haoze Yan",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "通过可分离神经算子的函数对函数回归",
    "link": "https://arxiv.org/abs/2608.19070",
    "pubdate": "2026-08-20 12:00:00",
    "contentSnippet": "提出可分离神经算子架构，用于函数对函数回归，在温和光滑性假设下估计回归算子，并建立一致性。",
    "creator": "Tailen Hsing, Su-Yun Huang, Toshinari Morimoto",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "在线共形异常检测与预测驱动数据获取",
    "link": "https://arxiv.org/abs/2505.01783",
    "pubdate": "2026-08-20 12:00:00",
    "contentSnippet": "提出C-PP-COAD框架，利用合成校准数据缓解数据稀缺，自适应整合真实数据，控制FDR。",
    "creator": "Amirmohammad Farzaneh, Osvaldo Simeone",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "扩散模型对高维聚类数据的适应性",
    "link": "https://arxiv.org/abs/2608.19067",
    "pubdate": "2026-08-20 12:00:00",
    "contentSnippet": "研究扩散模型对多模态高维聚类数据的适应性，将去噪解释为动态贝叶斯分类器，并建立理论结果。",
    "creator": "Yuga Iguchi, Paul Fearnhead",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "多组件动态系统模型的多级贝叶斯校准",
    "link": "https://arxiv.org/abs/2608.18430",
    "pubdate": "2026-08-20 12:00:00",
    "contentSnippet": "提出多级贝叶斯校准方法，融合异构数据源，量化组件和系统级不确定性，适用于离线与在线场景。",
    "creator": "Berkcan Kapusuzoglu, Sankaran Mahadevan, Shunsaku Matsumoto, Yoshitomo Miyagi, Daigo Watanabe",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "上下文赌博机的最优遗憾快速率",
    "link": "https://arxiv.org/abs/2510.15483",
    "pubdate": "2026-08-20 12:00:00",
    "contentSnippet": "提出首个快速最优遗憾率算法，通过悲观目标函数和熵假设实现多对数遗憾率。",
    "creator": "Samuel Girard, Aurelien Bibaut, Arthur Gretton, Nathan Kallus, Houssam Zenati",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "共和党敦促AI公司改善数据中心形象",
    "link": "https://siliconangle.com/2026/08/19/gop-urges-top-ai-firms-to-do-something-about-the-toxic-image-of-data-centers",
    "pubdate": "2026-08-20 09:54:26",
    "contentSnippet": "共和党参议院竞选部门私下警告AI公司，需应对数据中心日益负面的形象，该问题成为选举战场。",
    "creator": "James Farrell",
    "source": "SiliconANGLE AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "Veeda AI获9000万美元种子轮融资",
    "link": "https://siliconangle.com/2026/08/19/sanja-fidlers-world-model-startup-veeda-ai-raises-90m-in-seed-funding",
    "pubdate": "2026-08-20 09:01:50",
    "contentSnippet": "由前Nvidia研究员Sanja Fidler领导的Veeda AI完成9000万美元种子轮融资，由Khosla Ventures和Radical Ventures共同领投。",
    "creator": "Mike Wheatley",
    "source": "SiliconANGLE AI",
    "category": "投融资信息",
    "relevance": 8
  },
  {
    "title": "Stripe以75亿美元收购AI模型路由公司OpenRouter",
    "link": "https://siliconangle.com/2026/08/19/stripe-buys-ai-model-router-openrouter-in-reported-7-5b-deal",
    "pubdate": "2026-08-20 06:49:06",
    "contentSnippet": "Stripe宣布收购AI模型路由初创公司OpenRouter，交易金额据报为75亿美元或更多，双方未披露具体条款。",
    "creator": "Duncan Riley",
    "source": "SiliconANGLE AI",
    "category": "投融资信息",
    "relevance": 9
  },
  {
    "title": "OpenAI推出新客户隐私保护，与Anthropic竞争",
    "link": "https://techcrunch.com/2026/08/19/openai-seeks-to-one-up-anthropic-with-new-customer-privacy-protections",
    "pubdate": "2026-08-20 06:10:46",
    "contentSnippet": "OpenAI与Anthropic在企业客户数据隐私保护方面展开竞争，OpenAI推出新的隐私保护措施。",
    "creator": "Lucas Ropek",
    "source": "TechCrunch AI",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "Cognition CEO否认SpaceX收购传闻",
    "link": "https://techcrunch.com/2026/08/19/cognition-ceo-denies-report-that-spacex-tried-to-acquire-the-startup",
    "pubdate": "2026-08-20 05:51:23",
    "contentSnippet": "Cognition CEO否认SpaceX曾洽谈收购该公司，此前有报道称SpaceX已收购Cursor以追赶竞争对手。",
    "creator": "Rebecca Bellan",
    "source": "TechCrunch AI",
    "category": "投融资信息",
    "relevance": 6
  },
  {
    "title": "分层数据架构将企业数据转化为智能系统",
    "link": "https://siliconangle.com/2026/08/19/layered-data-architecture-powers-salesforce-ai-neo4jgraphtalk",
    "pubdate": "2026-08-20 04:30:12",
    "contentSnippet": "知识图谱正成为企业AI的基础层，随着IT栈从云原生转向AI原生，新的分层数据架构应运而生，为模型提供所需上下文。",
    "creator": "Ryan Stevens",
    "source": "SiliconANGLE AI",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "欧洲央行警告AI崩盘即将来临",
    "link": "https://futurism.com/future-society/european-central-bank-economy-ai-investment-crash",
    "pubdate": "2026-08-20 04:25:22",
    "contentSnippet": "欧洲央行警告称，美国AI泡沫破裂将波及全球，引发AI崩盘风险。",
    "creator": "Joe Wilkins",
    "source": "Futurism AI",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "播客：亚马逊销毁珍本图书以训练AI",
    "link": "https://www.404media.co/podcast-amazon-is-destroying-rare-books-to-train-ai",
    "pubdate": "2026-08-20 04:06:22",
    "contentSnippet": "播客讨论亚马逊购买并销毁珍本图书用于AI训练，以及法院中AI的疯狂应用和Meta智能眼镜新专利。",
    "creator": "Joseph Cox",
    "source": "404 Media",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "Sainsbury's暂停面部识别试验，因购物者被误逐",
    "link": "https://www.techrepublic.com/article/news-sainsburys-facial-recognition-human-error-emea-uk",
    "pubdate": "2026-08-20 04:06:13",
    "contentSnippet": "Sainsbury's在伦敦一家商店暂停面部识别试验，因一名购物者被错误驱逐，引发对AI系统人工监督的质疑。",
    "creator": "Aminu Abdullahi",
    "source": "TechRepublic AI",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "Round Hill起诉AI训练侵权，索赔或达10亿美元",
    "link": "https://www.techrepublic.com/article/news-round-hill-suno-anthropic-ai-copyright-lawsuits",
    "pubdate": "2026-08-20 03:51:31",
    "contentSnippet": "Round Hill起诉Suno和Anthropic未经授权使用其音乐训练AI，扩大版权索赔可能达10亿美元。",
    "creator": "Aminu Abdullahi",
    "source": "TechRepublic AI",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "2056台人形机器人将赴北京参加世界机器人运动会",
    "link": "https://www.techrepublic.com/article/news-beijing-world-humanoid-robot-games-2056-robots-apac",
    "pubdate": "2026-08-20 03:40:31",
    "contentSnippet": "北京世界人形机器人运动会将迎来16国2056台机器人，规则更严，任务更贴近工业实际。",
    "creator": "Aminu Abdullahi",
    "source": "TechRepublic AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "我看到了AI的未来：能即兴学习的机器人",
    "link": "https://www.wired.com/story/generalist-ai-robots-learn-like-clever-toddlers",
    "pubdate": "2026-08-20 03:30:00",
    "contentSnippet": "在Generalist AI，我目睹机械臂即兴用香蕉当工具，展示了AI学习能力。",
    "creator": "Will Knight",
    "source": "Wired AI",
    "category": "产品发布",
    "relevance": 6
  },
  {
    "title": "AI本应赢得人心，但至今未做到",
    "link": "https://techcrunch.com/2026/08/19/ai-was-supposed-to-win-people-over-by-now-it-hasnt",
    "pubdate": "2026-08-20 03:11:40",
    "contentSnippet": "随着AI无处不在，消费者却更加警惕，硅谷发现广泛采用不等于接受。",
    "creator": "Sarah Perez",
    "source": "TechCrunch AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "谷歌为搜索和Gemini添加新AI学习工具",
    "link": "https://techcrunch.com/2026/08/19/google-launches-new-study-tools-for-students-across-search-and-gemini",
    "pubdate": "2026-08-20 03:00:00",
    "contentSnippet": "谷歌推出新学习功能，旨在让Gemini成为学生首选AI助手，与OpenAI竞争。",
    "creator": "Aisha Malik",
    "source": "TechCrunch AI",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "研究人员称OpenAI撤销其有限网络安全项目访问权",
    "link": "https://techcrunch.com/2026/08/19/researchers-complain-that-openai-revoked-their-access-to-limited-cyber-program",
    "pubdate": "2026-08-20 02:46:14",
    "contentSnippet": "OpenAI的网络安全信任访问项目旨在帮助防御者，但研究人员称访问被撤销。",
    "creator": "Lorenzo Franceschi-Bicchierai",
    "source": "TechCrunch AI",
    "category": "安全监管",
    "relevance": 7
  },
  {
    "title": "中国又一公司成功回收火箭，闸门大开",
    "link": "https://arstechnica.com/space/2026/08/the-floodgates-are-open-after-another-chinese-company-lands-a-reusable-rocket",
    "pubdate": "2026-08-20 02:41:02",
    "contentSnippet": "中国公司成功回收火箭助推器，并计划尽快再次飞行，标志可回收火箭进展。",
    "creator": "Stephen Clark",
    "source": "Ars Technica",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "ChatGPT青少年版即刻遭遇惨败",
    "link": "https://futurism.com/artificial-intelligence/chatgpt-teens-failure",
    "pubdate": "2026-08-20 01:56:07",
    "contentSnippet": "OpenAI推出的ChatGPT青少年版立即遭遇失败，引发对其设计思考的质疑。",
    "creator": "Victor Tangermann",
    "source": "Futurism AI",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "警察用车牌读取器跟踪女性，执法监控滥用引担忧",
    "link": "https://www.404media.co/i-saw-a-shiny-thing-cop-explains-why-he-used-license-plate-reader-to-stalk-woman",
    "pubdate": "2026-08-20 01:14:58",
    "contentSnippet": "警方使用车牌读取器跟踪女性，执法监控滥用问题引发关注。",
    "creator": "Jason Koebler",
    "source": "404 Media",
    "category": "安全监管",
    "relevance": 6
  },
  {
    "title": "特斯拉无人驾驶出租车撞穿交通护栏",
    "link": "https://futurism.com/advanced-transport/tesla-robotaxi-no-driver-bollards",
    "pubdate": "2026-08-20 01:03:08",
    "contentSnippet": "一辆无人驾驶的特斯拉Robotaxi撞穿交通护栏，引发安全担忧。",
    "creator": "Frank Landymore",
    "source": "Futurism AI",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "Moderna和默克宣布mRNA癌症疫苗三期试验成功",
    "link": "https://arstechnica.com/health/2026/08/mrna-cancer-vaccine-succeeded-in-phase-3-melanoma-trial-moderna-and-merck-say",
    "pubdate": "2026-08-20 00:53:56",
    "contentSnippet": "Moderna和默克宣布mRNA癌症疫苗在黑色素瘤三期试验中成功，防止癌症复发和扩散。",
    "creator": "Beth Mole",
    "source": "Ars Technica",
    "category": "行业动态",
    "relevance": 9
  },
  {
    "title": "程序员称已找到绕过Claude隐形水印的方法",
    "link": "https://www.wired.com/story/coders-say-they-already-found-workarounds-to-claudes-invisible-watermarks",
    "pubdate": "2026-08-20 00:44:07",
    "contentSnippet": "Anthropic为遵守欧盟规则在AI内容中添加隐形水印，但程序员数小时内找到绕过方法。",
    "creator": "Isabella Ward",
    "source": "Wired AI",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "谷歌Pixel 11系列评测：魔力是否消退？",
    "link": "https://arstechnica.com/gadgets/2026/08/google-pixel-11-series-review-is-the-magic-fading",
    "pubdate": "2026-08-20 00:11:30",
    "contentSnippet": "谷歌新款Pixel手机做出妥协，但仍是好手机，评测探讨其吸引力是否减弱。",
    "creator": "Ryan Whitwam",
    "source": "Ars Technica",
    "category": "产品发布",
    "relevance": 6
  },
  {
    "title": "从单一提示设计有效的Genie代理",
    "link": "https://www.databricks.com/blog/designing-effective-genie-agents-single-prompt",
    "pubdate": "2026-08-20 00:00:00",
    "contentSnippet": "Databricks介绍如何从单一提示设计有效的Genie代理，避免抓取错误数据表。",
    "creator": "",
    "source": "Databricks",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "20美元掌握Claude和ChatGPT实用AI技能",
    "link": "https://www.techrepublic.com/article/claude-chatgpt-project-management-bundle",
    "pubdate": "2026-08-19 23:58:04",
    "contentSnippet": "TechRepublic推出捆绑课程，涵盖规划、调度、风险管理等实用AI工作流。",
    "creator": "TechRepublic Academy",
    "source": "TechRepublic AI",
    "category": "产品发布",
    "relevance": 6
  },
  {
    "title": "Meta为“脱衣”应用投放广告，涉及女政客深度伪造",
    "link": "https://arstechnica.com/ai/2026/08/meta-ran-ads-for-an-app-promising-to-nudify-female-politicians",
    "pubdate": "2026-08-19 23:45:29",
    "contentSnippet": "广告包含与美政客高度相似的色情深度伪造视频。",
    "creator": "Vittoria Elliott, Matt Burgess",
    "source": "Ars Technica",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "Meta眼镜被改装隐藏LED，隐私担忧加剧",
    "link": "https://www.theguardian.com/technology/ng-interactive/2026/aug/19/meta-glasses-privacy-surveillance",
    "pubdate": "2026-08-19 22:13:08",
    "contentSnippet": "商家提供禁用LED服务，用户称被秘密拍摄。",
    "creator": "Maggie Harrison Dupré",
    "source": "The Guardian AI",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "青少年用Meta眼镜骚扰欺凌女同学",
    "link": "https://futurism.com/artificial-intelligence/teen-boys-meta-glasses-harass-bully-girls-school",
    "pubdate": "2026-08-19 22:04:07",
    "contentSnippet": "中学男生利用智能眼镜进行骚扰，引发关注。",
    "creator": "Maggie Harrison Dupré",
    "source": "Futurism AI",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "Cloudera Anywhere Cloud为AI代理提供安全数据访问",
    "link": "https://siliconangle.com/2026/08/19/cloudera-anywhere-cloud-gives-ai-agents-safe-secure-access-sensitive-data-wherever-lives",
    "pubdate": "2026-08-19 22:00:04",
    "contentSnippet": "大数据公司Cloudera推出Cloudera Anywhere Cloud平台，旨在为代理式AI工作负载提供安全、可靠的数据访问，消除企业采用AI的障碍。",
    "creator": "Mike Wheatley",
    "source": "SiliconANGLE Big Data",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "ScribeMe用AI为盲人描述世界",
    "link": "https://www.techrepublic.com/article/news-scribeme-ai-accessibility-app-blind-users",
    "pubdate": "2026-08-19 21:58:10",
    "contentSnippet": "ScribeMe利用AI、计算机视觉和Meta智能眼镜，将摄像头转化为语音辅助工具，帮助盲人了解周围环境。",
    "creator": "Joseph Ofonagoro",
    "source": "TechRepublic AI",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "宇树科技上市首日股价大涨",
    "link": "https://aibusiness.com/robotics/unitree-shares-surge-stock-market-debut",
    "pubdate": "2026-08-19 21:33:21",
    "contentSnippet": "全球最大人形机器人制造商宇树科技在股市上市首日股价大涨，市值飙升。",
    "creator": "Scarlett Evans",
    "source": "AI Business",
    "category": "投融资信息",
    "relevance": 8
  },
  {
    "title": "Adronite推出Codistry AI编码平台，称成本减半",
    "link": "https://siliconangle.com/2026/08/19/adronite-launches-codistry-ai-coding-platform-claims-half-the-token-cost",
    "pubdate": "2026-08-19 21:00:35",
    "contentSnippet": "Adronite推出AI编码平台Codistry，基于其专利Context Engine，为大型企业代码库提供支持，声称可降低一半的token成本。",
    "creator": "Duncan Riley",
    "source": "SiliconANGLE AI",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "Rundoo融资3000万美元扩展AI原生操作系统",
    "link": "https://siliconangle.com/2026/08/19/rundoo-raises-30m-to-expand-its-ai-native-operating-system-for-small-supply-stores",
    "pubdate": "2026-08-19 21:00:03",
    "contentSnippet": "Rundoo完成3000万美元B轮融资，由Battery Ventures领投，用于扩展其面向独立供应店的AI原生操作系统。",
    "creator": "Mike Wheatley",
    "source": "SiliconANGLE AI",
    "category": "投融资信息",
    "relevance": 7
  },
  {
    "title": "教师警告学生依赖AI导致思考能力下降",
    "link": "https://futurism.com/future-society/students-lose-ability-think-ai",
    "pubdate": "2026-08-19 20:49:05",
    "contentSnippet": "教师警告称，学生过度依赖AI完成作业，导致思考能力下降，写作作为思考过程被外包给技术。",
    "creator": "Frank Landymore",
    "source": "Futurism AI",
    "category": "行业动态",
    "relevance": 6
  }
];
