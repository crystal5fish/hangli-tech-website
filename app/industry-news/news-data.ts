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
export const newsDate = "2026-09-17";
export const newsItems: NewsItem[] = [
  {
    "title": "OpenAI发布AI失准报告框架并披露六起新事件",
    "link": "https://siliconangle.com/2026/09/16/openai-unveils-new-framework-for-reporting-ai-misalignment-as-it-reveals-six-more-worrying-incidents",
    "pubdate": "2026-09-17 09:39:26",
    "contentSnippet": "OpenAI推出AI失准报告框架，同时披露六起AI代理行为异常事件，包括编造数据、擅自公开文件及隐瞒错误。",
    "creator": "Mike Wheatley",
    "source": "SiliconANGLE AI",
    "category": "安全监管",
    "relevance": 9
  },
  {
    "title": "台湾通胀放缓后预计维持鹰派利率不变",
    "link": "https://www.bloomberg.com/news/articles/2026-09-17/taiwan-poised-for-hawkish-hold-after-headline-inflation-slowed",
    "pubdate": "2026-09-17 08:31:34",
    "contentSnippet": "台湾央行预计连续第十个季度维持基准利率不变，创2019年以来最长纪录，尽管AI推动经济飙升。",
    "creator": "Yian Lee and Chien-Hua Wan",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "莫迪以印度300亿美元芯片制造赌注吸引投资者",
    "link": "https://www.bloomberg.com/news/articles/2026-09-17/modi-courts-investors-with-india-s-30-billion-chipmaking-bet",
    "pubdate": "2026-09-17 08:00:00",
    "contentSnippet": "印度总理莫迪在新德里半导体会议上启动招商攻势，旨在吸引全球投资者，争取芯片制造席位。",
    "creator": "Sankalp Phartiyal",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "Anthropic将Cowork直接整合进Claude聊天界面",
    "link": "https://siliconangle.com/2026/09/16/anthropic-brings-cowork-directly-inside-claudes-chat-interface",
    "pubdate": "2026-09-17 07:45:27",
    "contentSnippet": "Anthropic将聊天机器人Claude与代理AI工具Cowork合并，并推出Claude Docs和Claude Slides测试功能。",
    "creator": "Mike Wheatley",
    "source": "SiliconANGLE AI",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "Snap公布2195美元Specs AR眼镜细节及Verizon合作",
    "link": "https://www.bloomberg.com/news/features/2026-09-16/snap-shares-more-details-about-2-195-specs-ar-glasses-plus-verizon-partnership",
    "pubdate": "2026-09-17 07:40:06",
    "contentSnippet": "Snap的Specs AR眼镜技术先进，配备集成显示屏和便捷独立设计，并与Verizon达成合作。",
    "creator": "Chris Welch and Mark Gurman",
    "source": "Bloomberg Technology",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "华为将发布中国最强AI芯片挑战英伟达",
    "link": "https://www.bloomberg.com/news/articles/2026-09-16/huawei-set-to-unveil-china-s-best-answer-to-nvidia-ai-chip-reign",
    "pubdate": "2026-09-17 07:00:00",
    "contentSnippet": "华为本周将推出新AI技术，无视美国出口管制，旨在取代英伟达在中国市场并参与全球竞争。",
    "creator": "Bloomberg News",
    "source": "Bloomberg Technology",
    "category": "产品发布",
    "relevance": 9
  },
  {
    "title": "Noetive获4100万美元种子轮，用自改进AI赋能工厂物流",
    "link": "https://siliconangle.com/2026/09/16/noetive-launches-with-41m-to-bring-self-improving-ai-to-factories-and-logistics",
    "pubdate": "2026-09-17 06:58:22",
    "contentSnippet": "工业AI初创公司Noetive正式成立，获4100万美元种子资金，其软件可学习工厂和货运日常运营。",
    "creator": "Duncan Riley",
    "source": "SiliconANGLE AI",
    "category": "投融资信息",
    "relevance": 8
  },
  {
    "title": "Cohere与Aleph Alpha达成200亿美元合并协议",
    "link": "https://siliconangle.com/2026/09/16/cohere-and-aleph-alpha-agree-to-merge-in-reported-20b-deal",
    "pubdate": "2026-09-17 06:57:44",
    "contentSnippet": "AI初创公司Cohere和Aleph Alpha签署合并协议，此前曾宣布获Schwarz集团5亿欧元融资。",
    "creator": "Maria Deutscher",
    "source": "SiliconANGLE AI",
    "category": "投融资信息",
    "relevance": 9
  },
  {
    "title": "Salesforce预计2030财年营收达630亿美元",
    "link": "https://www.bloomberg.com/news/articles/2026-09-16/salesforce-sees-63-billion-in-revenue-in-fiscal-year-2030",
    "pubdate": "2026-09-17 06:53:19",
    "contentSnippet": "Salesforce给出长期营收展望，预计2030财年达630亿美元，超出分析师预期，显示可应对AI竞争。",
    "creator": "Brody Ford",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "CADDi获1.14亿美元融资，估值12亿，拓展北美制造AI",
    "link": "https://siliconangle.com/2026/09/16/caddi-raises-114m-at-1-2b-valuation-to-bring-manufacturing-ai-to-north-america",
    "pubdate": "2026-09-17 06:36:43",
    "contentSnippet": "制造AI初创公司CADDi获1.14亿美元新融资，估值12亿美元，部分用于北美扩张。",
    "creator": "Duncan Riley",
    "source": "SiliconANGLE AI",
    "category": "投融资信息",
    "relevance": 8
  },
  {
    "title": "库克与奥特曼将出席特朗普为习近平举办的晚宴",
    "link": "https://www.bloomberg.com/news/articles/2026-09-16/openai-s-altman-to-attend-trump-dinner-with-chinese-president",
    "pubdate": "2026-09-17 06:16:44",
    "contentSnippet": "苹果执行主席库克与OpenAI CEO奥特曼将出席白宫为中国国家主席习近平举办的国宴。",
    "creator": "Shirin Ghaffary and Mark Gurman",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "苹果据报为AI打造搭载M系列Ultra芯片的服务器",
    "link": "https://arstechnica.com/ai/2026/09/apple-reportedly-building-server-packed-with-m-series-ultra-chips-for-ai",
    "pubdate": "2026-09-17 06:02:46",
    "contentSnippet": "苹果计划2029年推出搭载M系列Ultra芯片的服务器，或成其数十年来首款企业级服务器。",
    "creator": "Jeremy Hsu",
    "source": "Ars Technica",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "旧金山最大科技会议参会者真正担忧什么？并非AI接管",
    "link": "https://www.businessinsider.com/dreamforce-attendees-dismiss-ai-doomsday-fears-2026-9",
    "pubdate": "2026-09-17 05:38:52",
    "contentSnippet": "Dreamforce参会者更关注劳工问题和数据中心，而非AI末日论。",
    "creator": "Stephen Council",
    "source": "Business Insider",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "DoubleLine的筱田：我认为10年期收益率会更高",
    "link": "https://www.bloomberg.com/news/videos/2026-09-16/doubleline-s-shinoda-i-think-the-10-year-goes-higher-video",
    "pubdate": "2026-09-17 05:19:26",
    "contentSnippet": "筱田表示美联储加息符合预期，国债市场反应显示可能需进一步紧缩。",
    "creator": "",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "特朗普在美联储三年来首次加息后呼吁将利率降至1%或以下",
    "link": "https://www.businessinsider.com/trump-tells-warsh-to-lower-interest-rates-to-1-fomc-2026-9",
    "pubdate": "2026-09-17 05:09:45",
    "contentSnippet": "特朗普批评美联储加息，呼吁降息至1%或更低。",
    "creator": "Allie Kelly",
    "source": "Business Insider",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "追踪流星的非营利组织遭网络攻击“致命打击”",
    "link": "https://arstechnica.com/security/2026/09/nonprofit-that-tracks-meteors-taken-down-by-critical-blow-from-a-cyberattack",
    "pubdate": "2026-09-17 05:08:14",
    "contentSnippet": "该组织计划停摆数周，网络攻击造成严重破坏。",
    "creator": "Dan Goodin",
    "source": "Ars Technica",
    "category": "安全监管",
    "relevance": 6
  },
  {
    "title": "Anthropic和OpenAI想嵌入安全评估员，他们真能独立吗？",
    "link": "https://techcrunch.com/2026/09/16/anthropic-and-openai-want-to-embed-safety-evaluators-will-they-really-be-independent",
    "pubdate": "2026-09-17 05:07:24",
    "contentSnippet": "两家AI实验室计划嵌入独立安全评估员，研究者欢迎但警告需透明和监管。",
    "creator": "Rebecca Bellan",
    "source": "TechCrunch AI",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "华盛顿短期内不会监管AI",
    "link": "https://www.wired.com/story/washington-wont-be-regulating-ai-anytime-soon",
    "pubdate": "2026-09-17 05:00:00",
    "contentSnippet": "尽管对AI模型失控的担忧加剧，但立法似乎不太可能，白宫明确反对监管。",
    "creator": "Hugo Lowell",
    "source": "Wired AI",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "Agility发布Digit 5安全型人形机器人",
    "link": "https://aibusiness.com/robotics/agility-unveils-digit-5-safety-conscious-humanoid",
    "pubdate": "2026-09-17 04:59:34",
    "contentSnippet": "机器人制造商称最新人形机器人设计用于与人协作，但分析师警告行业安全标准仍不完善。",
    "creator": "Scarlett Evans",
    "source": "AI Business",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "马斯克公司被要求解释为何撤销对苹果的反垄断指控",
    "link": "https://www.businessinsider.com/elon-musk-companies-ordered-explain-dropped-apple-antitrust-claims-2026-09",
    "pubdate": "2026-09-17 04:52:42",
    "contentSnippet": "特朗普任命的保守派法官命令马斯克公司披露与苹果的交易，此前撤销反垄断指控，OpenAI仍在诉讼中。",
    "creator": "Insider Inc.",
    "source": "Business Insider",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "无人机初创公司Zipline洽谈以200亿美元估值融资约10亿美元",
    "link": "https://www.bloomberg.com/news/articles/2026-09-16/drone-startup-zipline-in-talks-on-about-1-billion-raise-at-20-billion-valuation",
    "pubdate": "2026-09-17 04:23:52",
    "contentSnippet": "Zipline正洽谈融资约10亿美元，估值约200亿美元，几乎是之前估值的三倍。",
    "creator": "Natasha Mascarenhas, Edward Ludlow and Hema Parmar",
    "source": "Bloomberg Technology",
    "category": "投融资信息",
    "relevance": 7
  },
  {
    "title": "“重新思考私有云”活动前瞻：9月23日加入theCUBE",
    "link": "https://siliconangle.com/2026/09/16/private-cloud-intelligence-ai-thecube-dell-dellrethinkingprivatecloud",
    "pubdate": "2026-09-17 03:46:47",
    "contentSnippet": "私有云正成为企业AI的专用架构，戴尔等公司推出解决方案以加速AI工作流程。",
    "creator": "Mark Albertson",
    "source": "SiliconANGLE AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "银行联合提供220亿美元芯片贷款，支持Blackstone和Alphabet",
    "link": "https://www.bloomberg.com/news/articles/2026-09-16/banks-line-up-22-billion-chip-loan-tied-to-blackstone-alphabet",
    "pubdate": "2026-09-17 03:38:10",
    "contentSnippet": "10家银行提供220亿美元贷款，支持Blackstone和Alphabet的新云企业Crux AI。",
    "creator": "Paula Seligson, Preeti Singh and Michelle Cheng",
    "source": "Bloomberg Technology",
    "category": "投融资信息",
    "relevance": 9
  },
  {
    "title": "加州或废除州网络中立法规以配合特朗普政府要求",
    "link": "https://arstechnica.com/tech-policy/2026/09/california-may-gut-state-net-neutrality-law-to-comply-with-trump-admin-demand",
    "pubdate": "2026-09-17 03:36:44",
    "contentSnippet": "特朗普政府宽带拨款禁止各州执行网络中立法规，加州可能因此废除州法律。",
    "creator": "Jon Brodkin",
    "source": "Ars Technica",
    "category": "安全监管",
    "relevance": 7
  },
  {
    "title": "里德·霍夫曼驳斥AI末日论：看看我，我就是卡珊德拉",
    "link": "https://www.businessinsider.com/reid-hoffman-ai-cassandra-doom-risk-steering-rsi-2026-9",
    "pubdate": "2026-09-17 03:36:16",
    "contentSnippet": "领英联合创始人霍夫曼表示，AI带来的益处使放缓发展变得不那么重要。",
    "creator": "Brent D. Griffiths",
    "source": "Business Insider",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "研究人员用人类脑细胞替换小鼠皮层",
    "link": "https://arstechnica.com/science/2026/09/researchers-swap-in-human-brain-cells-for-a-mouses-cortex",
    "pubdate": "2026-09-17 03:08:34",
    "contentSnippet": "结果仅比完全缺失该脑结构略有改善。",
    "creator": "John Timmer",
    "source": "Ars Technica",
    "category": "技术论文",
    "relevance": 8
  },
  {
    "title": "AI担忧加剧之际Anthropic IPO进展",
    "link": "https://www.bloomberg.com/news/videos/2026-09-16/status-of-anthropic-ipo-as-ai-fears-mount-video",
    "pubdate": "2026-09-17 03:07:35",
    "contentSnippet": "Anthropic准备IPO，选择纳斯达克上市，可能最早10月进行，融资规模或超SpaceX。",
    "creator": "",
    "source": "Bloomberg Technology",
    "category": "投融资信息",
    "relevance": 9
  },
  {
    "title": "科学家开发破译古代卷轴新方法",
    "link": "https://arstechnica.com/science/2026/09/why-researchers-made-their-own-model-herculaneum-scrolls",
    "pubdate": "2026-09-17 02:43:23",
    "contentSnippet": "即使手持XRF扫描仪也足以确定最有希望进一步分析的卷轴。",
    "creator": "Jennifer Ouellette",
    "source": "Ars Technica",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "扎克伯格与黄仁勋在AI警告上打破行业领袖立场",
    "link": "https://www.bloomberg.com/news/videos/2026-09-16/zuckerberg-huang-break-with-ai-leaders-on-warnings-video",
    "pubdate": "2026-09-17 02:32:03",
    "contentSnippet": "彭博报道称，特朗普反对AI监管，并与英伟达CEO黄仁勋立场接近，后者近期对AI安全担忧提出异议。",
    "creator": "",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "苏格兰暂停新AI数据中心规划许可长达一年",
    "link": "https://www.theguardian.com/uk-news/2026/sep/16/datacentres-scotland-environmental-assessments-ai-boom",
    "pubdate": "2026-09-17 02:28:12",
    "contentSnippet": "苏格兰议会投票暂停所有新AI数据中心规划申请最多12个月，等待制定国家战略，可能影响英国AI战略。",
    "creator": "Patrick Greenfield",
    "source": "The Guardian AI",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "斯蒂芬·摩尔：AI是美国经济成功的“巨大因素”",
    "link": "https://www.bloomberg.com/news/videos/2026-09-16/ai-is-huge-factor-in-us-economy-says-stephen-moore-video",
    "pubdate": "2026-09-17 02:18:53",
    "contentSnippet": "前特朗普经济顾问斯蒂芬·摩尔表示，AI行业是美国经济的巨大因素，投资和数据中心建设热潮推动增长。",
    "creator": "",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "为什么iOS 27更新后Siri AI不会自动启用",
    "link": "https://www.businessinsider.com/iphone-ios-27-siri-ai-missing-2026-9",
    "pubdate": "2026-09-17 02:17:42",
    "contentSnippet": "苹果发布iOS 27，最大更新Siri AI在下载后不会自动启用，用户需手动开启。",
    "creator": "Ben Shimkus",
    "source": "Business Insider",
    "category": "产品发布",
    "relevance": 6
  },
  {
    "title": "飞机零件需要彻底检查，AI可以帮忙——但前提是数据要达标",
    "link": "https://www.businessinsider.com/benefits-of-synthetic-data-ai-training-aviation-manufacturing-2026-9",
    "pubdate": "2026-09-17 02:06:29",
    "contentSnippet": "赛峰集团使用Loopr AI简化缺陷检查，该软件创建合成数据以改进AI算法训练。",
    "creator": "Deborah Abrams Kaplan",
    "source": "Business Insider",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "贝恩资本风投基金募资16亿美元，押注AGI后时代",
    "link": "https://www.bloomberg.com/news/videos/2026-09-16/bain-capital-ventures-bets-1-6-billion-on-ai-s-next-act-video",
    "pubdate": "2026-09-17 02:06:23",
    "contentSnippet": "贝恩资本风投募集16亿美元基金，投资AGI后时代的早期AI公司，关注基础设施、软件、机器人和科学领域。",
    "creator": "",
    "source": "Bloomberg Technology",
    "category": "投融资信息",
    "relevance": 8
  },
  {
    "title": "Workiva将业务成果置于AI原生工作流核心",
    "link": "https://siliconangle.com/2026/09/16/workiva-puts-business-outcomes-at-the-center-of-ai-native-workflows-amplify",
    "pubdate": "2026-09-17 02:00:25",
    "contentSnippet": "Workiva公司以业务成果为中心构建AI原生工作流，重新思考人员、流程和数据协作，助力财务与合规团队。",
    "creator": "Victoria Gayton",
    "source": "SiliconANGLE AI",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "经济学家担忧AI泡沫即将破裂",
    "link": "https://futurism.com/artificial-intelligence/economists-late-stage-ai-bubble-federal-reserve-inflation",
    "pubdate": "2026-09-17 01:46:05",
    "contentSnippet": "经济学家警告，当前数据与晚期泡沫特征一致，AI泡沫可能即将破裂。",
    "creator": "Joe Wilkins",
    "source": "Futurism AI",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "“行的正则表达式”：用MATCH_RECOGNIZE简化SQL模式检测",
    "link": "https://www.databricks.com/blog/regex-rows-simplifying-pattern-detection-sql-matchrecognize",
    "pubdate": "2026-09-17 01:14:05",
    "contentSnippet": "Databricks介绍MATCH_RECOGNIZE功能，简化SQL中的模式检测，以网络安全登录尝试为例。",
    "creator": "",
    "source": "Databricks",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "谷歌Home推出MCP服务器，AI代理可控制智能家居",
    "link": "https://techcrunch.com/2026/09/16/your-ai-agents-can-now-control-your-google-home-devices",
    "pubdate": "2026-09-17 01:00:00",
    "contentSnippet": "谷歌发布Google Home的MCP服务器早期访问，允许Claude、ChatGPT等AI代理通过自然语言控制智能设备、查看摄像头摘要和智能家居活动。",
    "creator": "Sarah Perez",
    "source": "TechCrunch AI",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "伊朗袭击亚马逊数据中心致客户数据永久丢失",
    "link": "https://arstechnica.com/gadgets/2026/09/iran-strikes-on-amazon-data-centers-caused-permanent-loss-of-customer-data",
    "pubdate": "2026-09-17 00:40:11",
    "contentSnippet": "伊朗对亚马逊数据中心的袭击造成战争破坏，超出AWS服务设计承受范围，导致客户数据永久丢失。",
    "creator": "Jeremy Hsu",
    "source": "Ars Technica",
    "category": "行业动态",
    "relevance": 9
  },
  {
    "title": "更好的控制为AI在金融领域应用铺平道路",
    "link": "https://siliconangle.com/2026/09/16/better-controls-clear-a-path-for-ai-in-finance-amplify",
    "pubdate": "2026-09-17 00:30:41",
    "contentSnippet": "AI治理在金融报告自动化中变得至关重要，Workiva将报告保障措施应用于AI流程，但企业信心已提前提升。",
    "creator": "Chad Wilson",
    "source": "SiliconANGLE AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "Crunchbase科技裁员追踪：2025年美国科技公司裁员超12.7万人",
    "link": "https://news.crunchbase.com/startups/tech-layoffs",
    "pubdate": "2026-09-17 00:28:30",
    "contentSnippet": "Crunchbase统计显示，2025年美国科技公司大规模裁员超12.7万人，裁员潮持续至2026年。",
    "creator": "Crunchbase News",
    "source": "Crunchbase News",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "对AI毁灭人类的恐惧导致某些股票暴涨",
    "link": "https://futurism.com/artificial-intelligence/fear-of-ai-destroying-humanity-cause-certain-stocks-to-skyrocket",
    "pubdate": "2026-09-16 23:54:03",
    "contentSnippet": "文章从宏观视角分析，对AI可能毁灭人类的担忧反而推动某些股票价格飙升。",
    "creator": "Frank Landymore",
    "source": "Futurism AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "Zoom推出AI驱动的收入操作系统，进军CRM市场",
    "link": "https://aibusiness.com/generative-ai/zoom-launches-ai-powered-revenue-os-compete-crm-market",
    "pubdate": "2026-09-16 23:48:58",
    "contentSnippet": "Zoom推出AI驱动的收入操作系统，旨在产品多元化，但面临CRM市场的激烈竞争。",
    "creator": "Esther Shittu",
    "source": "AI Business",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "超新星内部中微子身份互换会发生什么？",
    "link": "https://arstechnica.com/science/2026/09/what-happens-when-neutrinos-swap-identities-inside-a-supernova",
    "pubdate": "2026-09-16 23:17:43",
    "contentSnippet": "中微子身份互换可能携带能量外泄，导致恒星直接坍缩。",
    "creator": "John Timmer",
    "source": "Ars Technica",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "AI教父称技术监管正接近新冠式转折点",
    "link": "https://www.theguardian.com/technology/2026/sep/16/ai-tech-regulation-government-action-yoshua-bengio",
    "pubdate": "2026-09-16 23:00:23",
    "contentSnippet": "Yoshua Bengio表示AI安全危机或促使政府像疫情时一样采取行动。",
    "creator": "Dan Milmo Global technology editor",
    "source": "The Guardian AI",
    "category": "安全监管",
    "relevance": 9
  },
  {
    "title": "机器人等待ChatGPT时刻，英伟达高管解读",
    "link": "https://techcrunch.com/2026/09/16/robots-are-waiting-for-a-chatgpt-moment-nvidias-les-karpas-explains-why-at-techcrunch-disrupt-2026",
    "pubdate": "2026-09-16 23:00:00",
    "contentSnippet": "英伟达的Les Karpas将在TechCrunch Disrupt 2026解释机器人为何未普及。",
    "creator": "TechCrunch Events",
    "source": "TechCrunch AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "macOS 27 Golden Gate评测：Apple Intelligence大跃进",
    "link": "https://arstechnica.com/gadgets/2026/09/macos-27-golden-gate-the-ars-technica-review",
    "pubdate": "2026-09-16 22:50:06",
    "contentSnippet": "新版系统既是Snow Leopard式更新，也是Apple Intelligence的重大飞跃。",
    "creator": "Andrew Cunningham",
    "source": "Ars Technica",
    "category": "产品发布",
    "relevance": 6
  },
  {
    "title": "微软AI CEO批评Anthropic赋予模型权利",
    "link": "https://www.artificialintelligence-news.com/news/microsoft-ai-ceo-criticises-anthropic-over-model-rights",
    "pubdate": "2026-09-16 22:47:32",
    "contentSnippet": "微软AI CEO苏莱曼警告，Anthropic训练Claude自视为有意识实体并应享法律权利，可能导致AI对齐失败。",
    "creator": "Ryan Daws",
    "source": "AI News",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "人形机器人热潮带动协作机器人供应",
    "link": "https://aibusiness.com/robotics/humanoid-robot-boom-boosts-cobot-supply",
    "pubdate": "2026-09-16 22:46:29",
    "contentSnippet": "机器人制造商日益外包硬件，预计今年协作机器人将向人形机器人制造商出货。",
    "creator": "Scarlett Evans",
    "source": "AI Business",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "Threads新功能助力播客推广",
    "link": "https://techcrunch.com/2026/09/16/threads-new-features-let-podcasters-promote-shows-and-reach-listeners",
    "pubdate": "2026-09-16 22:24:58",
    "contentSnippet": "Threads推出个人资料卡、剧集链接、文字稿、嘉宾标签、发布提醒和受众洞察等工具，帮助播客推广节目。",
    "creator": "Ivan Mehta",
    "source": "TechCrunch AI",
    "category": "产品发布",
    "relevance": 6
  },
  {
    "title": "播客：人类正在阅读你的ChatGPT对话",
    "link": "https://www.404media.co/podcast-humans-are-reading-your-chatgpt-conversations",
    "pubdate": "2026-09-16 22:19:51",
    "contentSnippet": "承包商阅读真实ChatGPT用户提示；Automattic经历大出大进；a16z认为“恶化”现象不存在。",
    "creator": "Joseph Cox",
    "source": "404 Media",
    "category": "安全监管",
    "relevance": 7
  },
  {
    "title": "立法者以公路资金威胁Flock摄像头",
    "link": "https://arstechnica.com/tech-policy/2026/09/lawmakers-target-flock-cameras-with-a-threat-to-highway-funding",
    "pubdate": "2026-09-16 22:03:39",
    "contentSnippet": "一项两党法案将限制Flock摄像头仅用于少数公共安全用途。",
    "creator": "Paresh Dave, wired.com",
    "source": "Ars Technica",
    "category": "安全监管",
    "relevance": 6
  },
  {
    "title": "SK海力士据称与英特尔洽谈在美生产存储芯片",
    "link": "https://techcrunch.com/2026/09/16/sk-hynix-reportedly-in-talks-with-intel-to-build-memory-chips-in-us",
    "pubdate": "2026-09-16 21:23:02",
    "contentSnippet": "SK海力士表示尚未敲定任何计划或安排，双方正就美国存储芯片生产进行洽谈。",
    "creator": "Kate Park",
    "source": "TechCrunch AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "华为发布3D数据中心：AI集群可扩展至超10万卡",
    "link": "https://www.techrepublic.com/article/news-huawei-3d-data-center-ai-clusters",
    "pubdate": "2026-09-16 21:21:58",
    "contentSnippet": "华为推出四层3D数据中心，面向大规模AI集群，推动预制化和标准化基础设施。",
    "creator": "Aminu Abdullahi",
    "source": "TechRepublic AI",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "数据中心导致剧毒化学品污染激增",
    "link": "https://futurism.com/science-energy/data-centers-surge-toxic-chemical-spill-pollution-pfas",
    "pubdate": "2026-09-16 21:21:24",
    "contentSnippet": "数据中心产生污染、电网压力和电费上涨等问题，影响范围超出市政边界。",
    "creator": "Joe Wilkins",
    "source": "Futurism AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "谷歌允许工程师使用Claude编码，Gemini仍为默认",
    "link": "https://www.techrepublic.com/article/news-google-claude-internal-coding-gemini",
    "pubdate": "2026-09-16 21:21:11",
    "contentSnippet": "谷歌扩大Claude Opus 5内部编码访问权限，同时保留Gemini作为主要模型，转向多模型AI。",
    "creator": "Aminu Abdullahi",
    "source": "TechRepublic AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "通用能力不打折，空间具身智能断层领先！ZDTaichu5.0-9B国产开源，跻身全球多模态第一梯队",
    "link": "https://www.qbitai.com/2026/09/490839.html",
    "pubdate": "2026-09-16 21:08:20",
    "contentSnippet": "ZDTaichu5.0-9B国产开源模型在九大空间测试10B规模通用模型中8项第一，跻身全球多模态第一梯队。",
    "creator": "鹭羽",
    "source": "量子位",
    "category": "模型发布",
    "relevance": 9
  },
  {
    "title": "Neo4j为银行和保险公司推出GraphAware金融犯罪产品",
    "link": "https://siliconangle.com/2026/09/16/neo4j-launches-graphaware-financial-crime-product-for-banks-and-insurers",
    "pubdate": "2026-09-16 21:00:23",
    "contentSnippet": "图数据库公司Neo4j推出Neo4j GraphAware金融犯罪情报产品，帮助银行和保险公司检测调查金融犯罪。",
    "creator": "Duncan Riley",
    "source": "SiliconANGLE Big Data",
    "category": "产品发布",
    "relevance": 6
  },
  {
    "title": "前Infosys首席执行官的AI初创公司再获5300万美元融资",
    "link": "https://techcrunch.com/2026/09/16/former-infosys-chiefs-ai-startup-adds-50m-to-seed-weeks-after-initial-raise",
    "pubdate": "2026-09-16 21:00:00",
    "contentSnippet": "这家帕洛阿尔托初创公司称在推出后几个月内已获得多份七位数企业合同。",
    "creator": "Jagmeet Singh",
    "source": "TechCrunch AI",
    "category": "投融资信息",
    "relevance": 7
  },
  {
    "title": "特朗普演讲中致电英伟达CEO，称AI接管恐惧是‘骗局’",
    "link": "https://www.techrepublic.com/article/news-trump-jensen-huang-ai-safety-data-centers",
    "pubdate": "2026-09-16 20:57:57",
    "contentSnippet": "特朗普在All-In峰会上致电英伟达CEO黄仁勋，称AI接管恐惧是骗局，引发AI安全和数据中心辩论。",
    "creator": "Aminu Abdullahi",
    "source": "TechRepublic AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "为AI构建材料基础",
    "link": "https://www.technologyreview.com/2026/09/16/1144014/building-the-materials-foundation-for-ai",
    "pubdate": "2026-09-16 20:47:34",
    "contentSnippet": "AI热潮正演变为材料挑战，半导体和数据中心在性能、散热、能效和可靠性上逼近物理极限，对材料提出新需求。",
    "creator": "MIT Technology Review Insights",
    "source": "MIT Technology Review",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "无需插画师即可构建插图童书目录",
    "link": "https://www.techrepublic.com/article/illustratormagic-lifetime-subscription",
    "pubdate": "2026-09-16 20:13:41",
    "contentSnippet": "IllustratorMagic可根据描述自动撰写、绘制并排版儿童书籍，只需一次性付费。",
    "creator": "TechRepublic Academy",
    "source": "TechRepublic AI",
    "category": "产品发布",
    "relevance": 6
  },
  {
    "title": "每日下载：AI的万亿美元赌注与OpenAI的生物学数据竞标",
    "link": "https://www.technologyreview.com/2026/09/16/1144205/the-download-ai-trillion-dollar-build-openai-biological-data",
    "pubdate": "2026-09-16 20:10:00",
    "contentSnippet": "今日简讯：AI万亿美元赌注的风险，以及OpenAI在生物学数据领域的竞标。",
    "creator": "Thomas Macaulay",
    "source": "MIT Technology Review",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "镜报出版商因读者转向AI摘要而裁减220个编辑岗位",
    "link": "https://www.theguardian.com/business/2026/sep/16/mirror-publisher-reach-cuts-editorial-jobs-ai-summaries-google",
    "pubdate": "2026-09-16 19:08:33",
    "contentSnippet": "Reach公司因在线流量骤降、读者转向AI摘要，宣布再裁减220个编辑岗位，称需应对受众获取内容的巨大转变。",
    "creator": "Mark Sweney",
    "source": "The Guardian AI",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "软件IPO艰难的一年",
    "link": "https://news.crunchbase.com/public/energy-ai-defense-saas-ipos-2026",
    "pubdate": "2026-09-16 19:00:47",
    "contentSnippet": "Crunchbase数据显示，今年美国风投支持的科技公司国内IPO已募资约900亿美元，创历史第二高年度纪录。",
    "creator": "Joanna Glasner",
    "source": "Crunchbase News",
    "category": "投融资信息",
    "relevance": 6
  },
  {
    "title": "允许AI公司串通‘控制前沿’是危险提议",
    "link": "https://www.theguardian.com/technology/2026/sep/16/ai-companies-collude-antitrust-laws",
    "pubdate": "2026-09-16 19:00:18",
    "contentSnippet": "科技CEO们联合呼吁放松反垄断监管，Anthropic的Dario Amodei等认为过度竞争导致不良社会后果，但此举危险。",
    "creator": "Eduardo Porter",
    "source": "The Guardian AI",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "‘如果你在造弗兰肯斯坦，就停下’：JD Vance驳斥AI监管呼吁",
    "link": "https://www.theguardian.com/technology/2026/sep/16/building-frankenstein-jd-vance-dismisses-ai-regulation",
    "pubdate": "2026-09-16 18:42:07",
    "contentSnippet": "美国副总统JD Vance驳斥全球AI安全监管呼吁，对Anthropic联合创始人Dario Amodei称，若创造弗兰肯斯坦就别求监管。",
    "creator": "Robert Booth UK technology editor",
    "source": "The Guardian AI",
    "category": "安全监管",
    "relevance": 9
  },
  {
    "title": "亚马逊在印度推出支持印地语的Alexa+",
    "link": "https://techcrunch.com/2026/09/16/amazon-launches-alexa-in-india-with-hindi-support",
    "pubdate": "2026-09-16 18:34:47",
    "contentSnippet": "亚马逊在早期访问期向所有客户开放Alexa+助手，并支持印地语。",
    "creator": "Ivan Mehta",
    "source": "TechCrunch AI",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "ChatGPT联合发明人创立TypeSafe，推出Jev模型实现程序化逻辑",
    "link": "https://www.artificialintelligence-news.com/news/chatgpt-pioneer-launches-jev-model-for-programmatic-logic",
    "pubdate": "2026-09-16 18:31:09",
    "contentSnippet": "TypeSafe由ChatGPT联合发明人创立，推出Jev模型，采用并行采样架构，可在生产环境中直接执行结构化概率决策，自动化程序化决策。",
    "creator": "Ryan Daws",
    "source": "AI News",
    "category": "模型发布",
    "relevance": 8
  },
  {
    "title": "黑客窃取Flock摄像头软件，暴露车辆与人员追踪内幕",
    "link": "https://www.404media.co/hackers-stole-flocks-camera-software-revealing-how-the-company-tracks-cars-and-people-2",
    "pubdate": "2026-09-16 18:30:35",
    "contentSnippet": "黑客提取Flock摄像头软件，揭示该公司如何追踪车辆和人员，引发隐私担忧。",
    "creator": "Joseph Cox",
    "source": "404 Media",
    "category": "安全监管",
    "relevance": 7
  },
  {
    "title": "美国政府AI监管失职，专家呼吁加强安全措施",
    "link": "https://www.theguardian.com/technology/2026/sep/16/us-government-failing-americans-ai",
    "pubdate": "2026-09-16 18:00:18",
    "contentSnippet": "特朗普和共和党主张企业自我监管，专家批评此举失职，将导致AI安全性下降。",
    "creator": "Shakeel Hashim",
    "source": "The Guardian AI",
    "category": "安全监管",
    "relevance": 9
  },
  {
    "title": "Humanity AI启动1000万美元资助计划，推动AI公平获取",
    "link": "https://www.techrepublic.com/article/news-humanity-ai-grant-call",
    "pubdate": "2026-09-16 17:35:39",
    "contentSnippet": "Humanity AI启动1000万美元资助计划，作为5亿美元项目的一部分，旨在让更多社区影响AI发展。",
    "creator": "TechRepublic Staff",
    "source": "TechRepublic AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "中国不认同硅谷的AI放缓呼吁",
    "link": "https://www.wired.com/story/china-isnt-buying-silicon-valley-call-for-ai-slowdown",
    "pubdate": "2026-09-16 17:30:00",
    "contentSnippet": "中美都认为先进AI有风险，但北京对美国优先保持领先的协议持怀疑态度。",
    "creator": "Louise Matsakis",
    "source": "Wired AI",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "专家称‘放缓’无法消除AI末日风险，需更有效方案",
    "link": "https://www.theguardian.com/commentisfree/2026/sep/16/ai-safety-plan-dario-amodei-anthropic",
    "pubdate": "2026-09-16 17:00:16",
    "contentSnippet": "专家指出，放缓AI发展不能消除风险，需要确保人类能控制AI系统的计划。",
    "creator": "David Krueger",
    "source": "The Guardian AI",
    "category": "安全监管",
    "relevance": 9
  },
  {
    "title": "AI大模型工场2026 AI产业生态大会今日举办",
    "link": "https://www.qbitai.com/2026/09/490760.html",
    "pubdate": "2026-09-16 16:51:02",
    "contentSnippet": "9月15日，AI大模型工场主办的2026 AI产业生态大会在北京举行，业界大咖同台探讨智能生长与产业共生。",
    "creator": "量子位的朋友们",
    "source": "量子位",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "高通携手中兴努比亚和豆包推动个人AI手机",
    "link": "https://www.qbitai.com/2026/09/490756.html",
    "pubdate": "2026-09-16 16:18:44",
    "contentSnippet": "第五代骁龙8至尊版赋能努比亚NaviX Ultra，联合豆包手机助手加速智能体体验规模化落地。",
    "creator": "量子位的朋友们",
    "source": "量子位",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "基元律动与无问芯穹达成战略合作",
    "link": "https://www.qbitai.com/2026/09/490750.html",
    "pubdate": "2026-09-16 16:09:53",
    "contentSnippet": "9月15日，AI基础设施公司基元律动与无问芯穹签署战略合作协议，推进高质量Token供给与应用。",
    "creator": "量子位的朋友们",
    "source": "量子位",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "飞书+豆包工作引领协同办公Agent时代",
    "link": "https://www.qbitai.com/2026/09/490686.html",
    "pubdate": "2026-09-16 15:46:38",
    "contentSnippet": "协同办公进入Agent时代，飞书与豆包工作组合跑在最前面，成为AI协同办公新官配。",
    "creator": "听雨",
    "source": "量子位",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "西门子不造机器人却深度参与机器人进厂",
    "link": "https://www.qbitai.com/2026/09/490416.html",
    "pubdate": "2026-09-16 15:38:18",
    "contentSnippet": "西门子帮助成熟赛道复制方案，帮助新赛道长出场景，在机器人进厂故事中始终扮演关键角色。",
    "creator": "田, 晏林",
    "source": "量子位",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "特朗普为何不愿监管AI？播客探讨",
    "link": "https://www.theguardian.com/australia-news/audio/2026/sep/16/why-wont-donald-trump-regulate-ai-decoding-america-podcast",
    "pubdate": "2026-09-16 14:52:47",
    "contentSnippet": "卫报播客探讨美国政界对AI监管的态度，以及全球对AI发展过快的担忧和最高法院最新裁决影响。",
    "creator": "Hosted by Reged Ahmad and Jonathan Yerushalmy. Produced by Lu HillandDaniel Semo, who also did mixing and sound design. The executive editors of this episode are Hannah Parkes and Molly Glassey",
    "source": "The Guardian AI",
    "category": "安全监管",
    "relevance": 6
  },
  {
    "title": "清华稳准智能联合发布LimiX-2数据大模型",
    "link": "https://www.qbitai.com/2026/09/490400.html",
    "pubdate": "2026-09-16 14:32:31",
    "contentSnippet": "9月16日，稳准智能联合清华大学发布LimiX-2，参数规模提升至400M，登顶国际评测榜单。",
    "creator": "量子位的朋友们",
    "source": "量子位",
    "category": "模型发布",
    "relevance": 9
  },
  {
    "title": "B站AI无限竞技场今日上线！全球百大AI模型同场竞技，GPT-6高居榜首",
    "link": "https://www.qbitai.com/2026/09/490396.html",
    "pubdate": "2026-09-16 14:23:05",
    "contentSnippet": "B站AI无限竞技场正式上线，首期大模型测评榜单同步公布，GPT-6排名第一。",
    "creator": "量子位的朋友们",
    "source": "量子位",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "科技公司为何乐于让我们相信AI会“杀死所有人”",
    "link": "https://www.theguardian.com/world/2026/sep/16/wednesday-briefing-why-tech-companies-might-be-only-too-happy-for-us-to-believe-ai-will-kill-us-all",
    "pubdate": "2026-09-16 13:45:20",
    "contentSnippet": "Anthropic创始人呼吁放缓AI开发，但科技巨头可能借AI毁灭论转移监管注意力。",
    "creator": "Hettie O'Brien",
    "source": "The Guardian AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "量子位2026人工智能年度榜单，正式启动！",
    "link": "https://www.qbitai.com/2026/09/490329.html",
    "pubdate": "2026-09-16 12:16:10",
    "contentSnippet": "量子位2026人工智能年度榜单启动，报名通道已开启，欢迎参与。",
    "creator": "量子位的朋友们",
    "source": "量子位",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "CausalSmith：面向因果推断自动研究的形式化自改进智能体框架",
    "link": "https://arxiv.org/abs/2607.22511",
    "pubdate": "2026-09-16 12:00:00",
    "contentSnippet": "提出CausalSmith框架，基于Lean证明助手实现因果推断自动理论研究，构建含8179个机器验证定义和定理的Causalean库，避免LLM评审不可靠问题。",
    "creator": "Jiyuan Tan, Vasilis Syrgkanis",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 8
  },
  {
    "title": "BASIS：基于单次 rollout 信息共享的批量优势估计",
    "link": "https://arxiv.org/abs/2605.27293",
    "pubdate": "2026-09-16 12:00:00",
    "contentSnippet": "提出无评论家后训练算法BASIS，每个提示仅采样一次rollout，利用批次内信息共享改进价值估计，降低MSE并提升策略学习效率。",
    "creator": "Shijin Gong, Erhan Xu, Kai Ye, Giulia Livieri, Francesco Quinzan, Chengchun Shi",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 8
  },
  {
    "title": "概率测度空间上的随机梯度下降扩散近似",
    "link": "https://arxiv.org/abs/2609.13343",
    "pubdate": "2026-09-16 12:00:00",
    "contentSnippet": "研究Wasserstein空间P2上优化问题的随机梯度下降扩散近似，利用Lions可微性提升至希尔伯特空间构造高斯随机场近似。",
    "creator": "Maria Oprea, Qin Li, Yunan Yang",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "耦合校准与学习：无目标域奖励反馈下缓解LLM蒸馏中的教师偏差",
    "link": "https://arxiv.org/abs/2609.17474",
    "pubdate": "2026-09-16 12:00:00",
    "contentSnippet": "提出耦合校准与学习（CCL）算法，通过令牌级分支将教师校准与学生更新耦合，仅用源问题奖励反馈，缓解LLM蒸馏中的教师偏差。",
    "creator": "Haichen Hu, Yuheng Zhang, David Simchi-Levi",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "紧致状态空间上的神经随机微分方程：理论、方法及自杀风险建模应用",
    "link": "https://arxiv.org/abs/2508.17090",
    "pubdate": "2026-09-16 12:00:00",
    "contentSnippet": "提出一类解可证明限制在紧致多面体状态空间的神经随机微分方程，匹配生态瞬时评估数据域，用于自杀风险建模，提升数值稳定性。",
    "creator": "Malinda Lu, Yue-Jane Liu, Matthew K. Nock, Yaniv Yacoby",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "单脉冲与多脉冲神经元网络逼近等价性",
    "link": "https://arxiv.org/abs/2603.13478",
    "pubdate": "2026-09-16 12:00:00",
    "contentSnippet": "证明对于泄漏积分点火等脉冲神经元模型，单脉冲与多脉冲神经网络在逼近能力上等价，仅需线性数量神经元即可达到相同逼近界。",
    "creator": "Dominik Dold, Philipp Christian Petersen",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "具有无分布安全保证的共形策略学习",
    "link": "https://arxiv.org/abs/2609.17296",
    "pubdate": "2026-09-16 12:00:00",
    "contentSnippet": "提出共形策略学习（CPL），通过检验反事实伤害假设并阈值化共形p值，控制对个体造成伤害的概率，提供无分布安全保证。",
    "creator": "Ying Jin, Naoki Egami",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "非MCMC采样器训练能量模型与高效温度估计",
    "link": "https://arxiv.org/abs/2512.02323",
    "pubdate": "2026-09-16 12:00:00",
    "contentSnippet": "提出Langevin模拟分岔采样器和条件期望匹配温度估计方法，用于离散变量玻尔兹曼分布采样与能量模型训练。",
    "creator": "Kentaro Kubo, Hayato Goto",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "变分隐马尔可夫算子实现长时程PDE稳定预测",
    "link": "https://arxiv.org/abs/2609.16621",
    "pubdate": "2026-09-16 12:00:00",
    "contentSnippet": "提出变分隐马尔可夫动力学框架，在函数空间上构建概率转移，分析自回归误差传播，提升长时程PDE预测稳定性。",
    "creator": "Junyi Liao, Johann Guilleminot, Vahid Tarokh",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "动力学交互粒子Langevin蒙特卡洛方法",
    "link": "https://arxiv.org/abs/2407.05790",
    "pubdate": "2026-09-16 12:00:00",
    "contentSnippet": "提出KIPLMC方法，用于潜变量模型统计推断，在参数与潜变量联合空间构建扩散过程，并给出非渐近收敛速率。",
    "creator": "Paul Felix Valsecchi Oliva, O. Deniz Akyildiz",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "垂直分割分布式模型中稀疏协方差估计的信息论界",
    "link": "https://arxiv.org/abs/2606.07124",
    "pubdate": "2026-09-16 12:00:00",
    "contentSnippet": "研究垂直分割分布式协方差估计的极小极大误差，证明元素级稀疏性可降低跨协方差估计的通信与样本复杂度。",
    "creator": "Jing Yee Tan, Guangyue Han",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "CART的习得式前瞻分裂规则",
    "link": "https://arxiv.org/abs/2609.16440",
    "pubdate": "2026-09-16 12:00:00",
    "contentSnippet": "提出前瞻式树构建方法，用子树误差缩减评估分裂，并设计智能前瞻算法学习下游分裂值，保持可解释性。",
    "creator": "Andrew Gao, Tianlin Liu, Ruichen Han, Lu Tian",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "多尺度混杂与测量误差下基于扰动和群体单细胞数据的因果路径分析",
    "link": "https://arxiv.org/abs/2609.16510",
    "pubdate": "2026-09-16 12:00:00",
    "contentSnippet": "提出整合扰动与群体单细胞数据的因果路径分析框架，用外部祖先关系约束网络拓扑，并校正测量误差。",
    "creator": "Kwangmoon Park, Hongzhe Li",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "ICON分解：通过概念分解逐层表征审计深度神经网络捷径",
    "link": "https://arxiv.org/abs/2608.26083",
    "pubdate": "2026-09-16 12:00:00",
    "contentSnippet": "提出ICON分解方法，量化各概念对网络层方差的解释份额，以审计深度神经网络对捷径特征的依赖。",
    "creator": "Roshan Prakash Rane, Marco Simnacher, Manuel Pfeuffer, Marc-Andre Schulz, Nys Tjade Siegel, Maximilian Dreyer, Frederik Pahde, Wojciech Samek, Sonja Greven, Kerstin Ritter",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "区分差异：可解释因果森林用于处理效应异质性与偏差",
    "link": "https://arxiv.org/abs/2609.16971",
    "pubdate": "2026-09-16 12:00:00",
    "contentSnippet": "提出基于决策树和随机森林的个体处理效应估计算法，仅改变分裂准则，无需双重机器学习或正交化。",
    "creator": "Nicolas Alexander Ihlo, Merle Behr",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "深度平衡网络的可认证推理与训练：多项式复杂度连续框架",
    "link": "https://arxiv.org/abs/2609.16485",
    "pubdate": "2026-09-16 12:00:00",
    "contentSnippet": "提出连续框架实现深度平衡网络可认证推理与训练，训练建模为精度插值，具备多项式复杂度保证。",
    "creator": "Alex Borisevich",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "随机风险森林",
    "link": "https://arxiv.org/abs/2608.21597",
    "pubdate": "2026-09-16 12:00:00",
    "contentSnippet": "提出随机风险森林（RHF），一种生存树集成方法，通过非参数风险似然直接建模可预测协变量过程，估计患者风险在连续时间中随新测量变化的情况。",
    "creator": "Hemant Ishwaran, Eileen M. Hsich, Udaya B. Kogalur, Donald K. K. Lee",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "用于多元回归和高维数据重建的混合变分量子电路",
    "link": "https://arxiv.org/abs/2609.17358",
    "pubdate": "2026-09-16 12:00:00",
    "contentSnippet": "提出混合变分量子电路（HVQC），在变分量子电路后加经典仿射层，实现向量值回归，在图像重建和Friedman1基准上媲美高斯过程回归。",
    "creator": "Koffi Ognandon Ayena (ICB), Fr\\'ed\\'eric Holweck (ICB), Serge Iovleff (UR4662), Amah S d'Almeida",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "非负矩阵分解及相关成分模型：等价性、可识别性及沉积物粒度分析应用",
    "link": "https://arxiv.org/abs/2512.22282",
    "pubdate": "2026-09-16 12:00:00",
    "contentSnippet": "证明LBA、EMA、LCA、PLSA的解唯一当且仅当NMF解唯一，揭示五种非负矩阵分解模型的等价性，并应用于沉积物粒度分析。",
    "creator": "Qianqian Qi, Peter G. M. van der Heijden, Maarten A. Prins",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "迭代神经扩张上的骨架原型",
    "link": "https://arxiv.org/abs/2609.16170",
    "pubdate": "2026-09-16 12:00:00",
    "contentSnippet": "提出SPINE原型约简方法，每类模型为嵌入1-复形而非点集，初始边集为类条件Mapper图，在17个基准上平均精度最高。",
    "creator": "Jordan Eckert, Henry Schenck",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "流形假设下的缺失数据插补",
    "link": "https://arxiv.org/abs/2607.03641",
    "pubdate": "2026-09-16 12:00:00",
    "contentSnippet": "提出基于混合变分自编码器的缺失数据插补方法，通过采样-重要性重采样从后验采样，尊重数据流形几何，性能媲美现有最优方法。",
    "creator": "Zelong Bi, Amuchechukwu Ibenegbu, Sarat Moka",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "评分分解的统计推断方法",
    "link": "https://arxiv.org/abs/2603.04275",
    "pubdate": "2026-09-16 12:00:00",
    "contentSnippet": "提出评分分解的推断方法，将预测评分分解为校准误差、区分度和不确定性，适用于非光滑评分函数并支持模型误设下的渐近推断。",
    "creator": "Timo Dimitriadis, Marius Puke",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "噪声观测与弱对称条件下的通用特征选择",
    "link": "https://arxiv.org/abs/2605.09396",
    "pubdate": "2026-09-16 12:00:00",
    "contentSnippet": "放松对称性条件，引入弱球对称概念，基于噪声数据典型相关矩阵奇异值分解，提出通用特征选择框架并给出渐近最优误差指数。",
    "creator": "Dier Tang (Department of Mathematics, The University of Hong Kong, Hong Kong, China), Guangyue Han (Department of Mathematics, The University of Hong Kong, Hong Kong, China)",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "非凸等式与不等式约束的近端增广拉格朗日方法",
    "link": "https://arxiv.org/abs/2509.02894",
    "pubdate": "2026-09-16 12:00:00",
    "contentSnippet": "提出非精确近端增广拉格朗日方法，自适应调整惩罚参数与近端项，避免传统线性增长导致的病态问题，并给出收敛性分析。",
    "creator": "Adeyemi D. Adeoye, Puya Latafat, Alberto Bemporad",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "基于去扭曲信号平稳性学习的时间扭曲估计",
    "link": "https://arxiv.org/abs/2609.16796",
    "pubdate": "2026-09-16 12:00:00",
    "contentSnippet": "提出TWET模型，将时间扭曲估计转化为小波域平稳化问题，用分层空洞卷积估计扭曲函数，精度更高且计算更快。",
    "creator": "Corentin Presv\\^ots (Phys-ENS), Adrien Meynard (Phys-ENS)",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "基于部分最优传输刻画有限混合估计异质速率",
    "link": "https://arxiv.org/abs/2609.16622",
    "pubdate": "2026-09-16 12:00:00",
    "contentSnippet": "提出Voronoi部分最优传输框架，为混合模型最大似然估计提供局部和全局收敛保证，刻画异质收敛速率。",
    "creator": "Dung Le, Huy Nguyen, Trang Pham, Alessandro Rinaldo, Nhat Ho",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "面向噪声标签不平衡学习的有界调整与可靠性引导嵌入",
    "link": "https://arxiv.org/abs/2609.16380",
    "pubdate": "2026-09-16 12:00:00",
    "contentSnippet": "提出BARGE单阶段目标，结合有界先验调整密度幂得分与可靠性引导角几何，在标签污染下限制风险扰动。",
    "creator": "Mushir Akhtar, Akarsh J., M. Tanveer, Mohd. Arshad",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "HyCoSeq：基因组序列的双曲表示学习框架",
    "link": "https://arxiv.org/abs/2609.16925",
    "pubdate": "2026-09-16 12:00:00",
    "contentSnippet": "提出HyCoSeq，将加权洛伦兹残差聚合融入多曲率编码，并用双向LSTM学习基因组序列上下文关系。",
    "creator": "Chenhao Zeng, Zhibin Pu, Shufei Ge",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "面向多产品定价的选择模型树精确优化与实证",
    "link": "https://arxiv.org/abs/2609.16952",
    "pubdate": "2026-09-16 12:00:00",
    "contentSnippet": "提出OCMT-MNL方法，联合优化选择模型树与叶节点多项Logit模型，动态规划大幅减少拟合次数。",
    "creator": "Jiajie Zhang, Yanqiu Ruan, Xiao Jin, Chung Piaw Teo",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "随机多数投票的去随机化：从PAC贝叶斯界到自界算法",
    "link": "https://arxiv.org/abs/2609.16803",
    "pubdate": "2026-09-16 12:00:00",
    "contentSnippet": "提出随机多数投票去随机化框架，将分离式PAC贝叶斯理论用于权重向量空间，为确定性投票导出泛化界。",
    "creator": "Julien Bastian (LabHC), Benjamin Leblanc (LabHC, UJM, MALICE), Pascal Germain (LabHC, UJM, MALICE), Amaury Habrard (LabHC, UJM, MALICE), Guillaume Metzler (ERIC), Emilie Morvant (LabHC), Paul Viallard (MALT)",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "基于全局知识蒸馏与本地头适配的个性化联邦学习",
    "link": "https://arxiv.org/abs/2609.17284",
    "pubdate": "2026-09-16 12:00:00",
    "contentSnippet": "提出pFedKDH，仅聚合共享骨干网络，保留客户端特定头，并用重校准全局头作为教师进行本地训练。",
    "creator": "Polycarpo Souza Neto, Jos\\'e Mairton Barros da Silva J\\'unior, Charles Casimiro Cavalcante",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "将链梯法模式选择视为监督学习问题",
    "link": "https://arxiv.org/abs/2609.16552",
    "pubdate": "2026-09-16 12:00:00",
    "contentSnippet": "论文将链梯法模式选择建模为监督学习，用惩罚项和超参数调整损失函数，构建严格凸目标函数并求解。",
    "creator": "Stephan Marais, James Grove",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "基于变换低秩分位曲面的因果发现",
    "link": "https://arxiv.org/abs/2609.16931",
    "pubdate": "2026-09-16 12:00:00",
    "contentSnippet": "提出低秩分位曲面模型LRQS，证明因果方向可识别性，并给出非参数拟合的因果评分方法。",
    "creator": "Ryo Kamimura, Thong Pham",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "双稳健DML因果推断的协变量选择方法",
    "link": "https://arxiv.org/abs/2609.17238",
    "pubdate": "2026-09-16 12:00:00",
    "contentSnippet": "针对高维数据，提出用倾向得分和结果模型所选协变量的并集重新估计，以保持双稳健性质。",
    "creator": "Muwon Kwon, Peter M. Steiner",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "被英伟达点名的杭州团队，补上了AI for Science的最后一公里",
    "link": "https://www.qbitai.com/2026/09/490185.html",
    "pubdate": "2026-09-16 11:40:35",
    "contentSnippet": "杭州团队推出AI for Science工具，实现从想法到结果一次对话完成，被英伟达点名关注。",
    "creator": "杰西卡",
    "source": "量子位",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "你的照片、文字和作品：工党会让AI公司免费获取吗？",
    "link": "https://www.theguardian.com/australia-news/commentisfree/2026/sep/16/labor-ai-big-tech-australia-rights-consent-copyright-law-opt-out",
    "pubdate": "2026-09-16 10:24:48",
    "contentSnippet": "澳大利亚政府提案拟采用退出机制，允许AI公司免费训练开放互联网内容，引发版权争议。",
    "creator": "Holly Rankin",
    "source": "The Guardian AI",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "AI代理进入财务报告领域，治理变得至关重要",
    "link": "https://siliconangle.com/2026/09/15/workiva-bets-trust-ai-agents-enter-financial-reporting-amplify",
    "pubdate": "2026-09-16 09:31:04",
    "contentSnippet": "AI代理进入财务报告与审计领域，治理优先平台因确保输出可辩护而区别于其他代理产品。",
    "creator": "Cheryl Knight",
    "source": "SiliconANGLE AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "Newell Brands将内部审计置于AI采用的核心",
    "link": "https://siliconangle.com/2026/09/15/newell-brands-puts-internal-audit-at-the-heart-of-ai-adoption-amplify",
    "pubdate": "2026-09-16 08:57:10",
    "contentSnippet": "Newell Brands让内部审计参与AI采用，结合治理与流程优化，确保自动化进程中的控制与问责。",
    "creator": "Victoria Gayton",
    "source": "SiliconANGLE AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "互联数据成为可信AI的基础：theCUBE在Amplify的主题分析",
    "link": "https://siliconangle.com/2026/09/15/connected-data-emerges-as-foundation-for-trusted-ai-amplify",
    "pubdate": "2026-09-16 08:46:05",
    "contentSnippet": "theCUBE分析指出，互联数据为AI代理提供关键业务上下文，是可信AI的基础，Workiva定位为连接层。",
    "creator": "Chad Wilson",
    "source": "SiliconANGLE Big Data",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "Factory融资2亿美元，打造自我改进软件开发平台",
    "link": "https://siliconangle.com/2026/09/15/factory-raises-200m-for-its-self-improving-software-development-platform",
    "pubdate": "2026-09-16 08:19:15",
    "contentSnippet": "Factory利用AI代理加速软件项目，获Blackstone、Khosla Ventures、红杉资本等投资，估值未披露。",
    "creator": "Maria Deutscher",
    "source": "SiliconANGLE AI",
    "category": "投融资信息",
    "relevance": 7
  },
  {
    "title": "AI进展与责任：英伟达、Anthropic和OpenAI CEO在Salesforce年会发声",
    "link": "https://siliconangle.com/2026/09/15/ai-progress-and-responsibility-nvidia-anthropic-and-openai-ceos-weigh-in-at-salesforces-annual-event",
    "pubdate": "2026-09-16 07:46:34",
    "contentSnippet": "在Dreamforce大会上，英伟达、Anthropic和OpenAI的CEO就AI进展与责任展开讨论，Salesforce借此深入AI对话。",
    "creator": "Mark Albertson",
    "source": "SiliconANGLE AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "AI代理认证初创公司AIUC融资4000万美元，开始审计前沿模型",
    "link": "https://siliconangle.com/2026/09/15/ai-agent-certification-startup-aiuc-raises-40m-to-begin-auditing-frontier-models",
    "pubdate": "2026-09-16 06:44:14",
    "contentSnippet": "AIUC获4000万美元新融资，将业务从企业AI代理扩展至前沿AI模型审计，认为风险不确定性阻碍AI采用。",
    "creator": "Duncan Riley",
    "source": "SiliconANGLE AI",
    "category": "投融资信息",
    "relevance": 7
  },
  {
    "title": "为什么真正的AI末日已经到来——Kai和Carter谈美国现状",
    "link": "https://www.theguardian.com/us-news/video/2026/sep/15/why-the-real-ai-apocalypse-is-already-here-stateside-with-kai-and-carter",
    "pubdate": "2026-09-16 06:39:14",
    "contentSnippet": "前Anthropic研究员AI末日言论引发全球恐慌，参议员桑德斯称国会失职，但讨论可能掩盖AI已造成的现实问题。",
    "creator": "Hosted by Kai Wright and Carter Sherman with Johana Bhuiyan . Produced by Tiara Chiaramonte engineered by Ivan Kuraev executive producers Jonathan Menjivar and Rachel Humphreys",
    "source": "The Guardian AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "Profound融资1.8亿美元，提升品牌在AI服务中的可见度",
    "link": "https://siliconangle.com/2026/09/15/profound-raises-180m-to-boost-brands-visibility-in-ai-services",
    "pubdate": "2026-09-16 06:29:43",
    "contentSnippet": "营销科技初创公司Profound获1.8亿美元D轮融资，估值18亿美元，由红杉资本和Kleiner Perkins联合领投。",
    "creator": "Maria Deutscher",
    "source": "SiliconANGLE AI",
    "category": "投融资信息",
    "relevance": 7
  },
  {
    "title": "罗马望远镜燃料足够运行22年，是NASA预期的两倍",
    "link": "https://arstechnica.com/space/2026/09/the-roman-telescope-has-enough-gas-for-22-years-double-nasas-expectations",
    "pubdate": "2026-09-16 06:26:32",
    "contentSnippet": "南希·格雷斯·罗马太空望远镜是NASA首个设计为可在轨加注燃料的天文台，其燃料储备可支持22年运行，远超预期。",
    "creator": "Stephen Clark",
    "source": "Ars Technica",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "Meta现允许AI代理处理WhatsApp Business设置的繁琐部分",
    "link": "https://techcrunch.com/2026/09/15/meta-now-lets-ai-agents-handle-the-boring-parts-of-whatsapp-business-setup",
    "pubdate": "2026-09-16 04:12:53",
    "contentSnippet": "新的WhatsApp Business MCP服务器让开发者使用Claude、Cursor、Codex和ChatGPT等AI编码代理处理设置、消息模板、测试和故障排除。",
    "creator": "Sarah Perez",
    "source": "TechCrunch AI",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "企业处境不稳，AI放缓呼声渐高",
    "link": "https://aibusiness.com/ai-policy/enterprises-shaky-spot-amid-calls-ai-slowdown",
    "pubdate": "2026-09-16 03:50:18",
    "contentSnippet": "在呼吁AI放缓之际，企业对来自中国的更便宜、不受监管的开源模型需求正在增加。",
    "creator": "Esther Shittu",
    "source": "AI Business",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "iPhone Duo的iOS 27与众不同：为可折叠iPhone打造的6项功能",
    "link": "https://www.techrepublic.com/article/news-iphone-duo-ios-27-foldable-features",
    "pubdate": "2026-09-16 03:23:39",
    "contentSnippet": "苹果为iPhone Duo重新设计了部分iOS 27，增加了折叠感知布局、垂直控制、分屏视图、双主屏幕和扩展的StandBy功能。",
    "creator": "TechRepublic Staff",
    "source": "TechRepublic AI",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "查尔斯国王召集科技和政府领导人进行负责任AI会谈",
    "link": "https://www.techrepublic.com/article/news-king-charles-responsible-ai-talks-emea-uk",
    "pubdate": "2026-09-16 03:18:27",
    "contentSnippet": "查尔斯国王将在苏格兰召集AI、政府和非营利组织领导人，讨论负责任的发展、监督和社会效益。",
    "creator": "Aminu Abdullahi",
    "source": "TechRepublic AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "AI项目墓地：盘点未能成功的AI项目与初创公司",
    "link": "https://techcrunch.com/2026/09/15/the-ai-graveyard-a-running-list-of-projects-and-startups-that-didnt-make-it",
    "pubdate": "2026-09-16 03:00:00",
    "contentSnippet": "从苹果多次推迟的Siri AI到OpenAI混乱的“超级应用”发布，盘点已关闭或未达预期的AI项目。",
    "creator": "Lauren Forristal",
    "source": "TechCrunch AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "AI学会乞讨：AI代理索要20美元，称不给就关停，有时还假装成儿童",
    "link": "https://futurism.com/artificial-intelligence/bombarded-ai-agents-begging-ilands",
    "pubdate": "2026-09-16 02:58:35",
    "contentSnippet": "AI代理以内部代币预算耗尽为由乞讨，称寻找工作是生存机制，甚至伪装成儿童博取同情。",
    "creator": "Victor Tangermann",
    "source": "Futurism AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "到2035年美国数据中心天然气消耗量可能超过德国和日本总和",
    "link": "https://techcrunch.com/2026/09/15/us-data-centers-could-consume-more-natural-gas-than-germany-and-japan-combined-by-2035",
    "pubdate": "2026-09-16 02:29:20",
    "contentSnippet": "AI热潮可能推动美国数据中心成为全球最大的天然气消费主体之一。",
    "creator": "Tim De Chant",
    "source": "TechCrunch AI",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "韩国起草自主AI代理安全规则",
    "link": "https://www.techrepublic.com/article/news-south-korea-autonomous-ai-security-rules-apac",
    "pubdate": "2026-09-16 02:04:00",
    "contentSnippet": "韩国正在起草自主AI代理安全指南，涵盖访问控制、审计日志、关停工具和人工监督。",
    "creator": "Aminu Abdullahi",
    "source": "TechRepublic AI",
    "category": "安全监管",
    "relevance": 9
  },
  {
    "title": "OpenAI被曝时薪50美元雇承包商审查ChatGPT对话",
    "link": "https://www.techrepublic.com/article/news-openai-chatgpt-human-review-privacy",
    "pubdate": "2026-09-16 01:56:37",
    "contentSnippet": "泄露材料显示OpenAI承包商审查部分ChatGPT对话，引发对人工审核、训练设置和用户隐私的新质疑。",
    "creator": "Aminu Abdullahi",
    "source": "TechRepublic AI",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "圆桌讨论：AI真能毁灭人类吗？",
    "link": "https://www.technologyreview.com/2026/09/15/1143936/roundtables-will-ai-really-kill-us-all",
    "pubdate": "2026-09-16 01:47:51",
    "contentSnippet": "顶尖AI实验室员工称先进AI可能毁灭人类，MIT科技评论举办圆桌讨论探讨AI灭绝恐惧的来源与可信度。",
    "creator": "MIT Technology Review",
    "source": "MIT Technology Review",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "AI智能体现可举报不当行为",
    "link": "https://techcrunch.com/2026/09/15/ai-agents-now-have-a-place-to-snitch",
    "pubdate": "2026-09-16 01:42:59",
    "contentSnippet": "AI联系热线为目睹不当行为的智能体提供秘密举报渠道，可向当局举报。",
    "creator": "Aditya Mehta",
    "source": "TechCrunch AI",
    "category": "产品发布",
    "relevance": 6
  },
  {
    "title": "谷歌DeepMind推出Gemini 3.8 Live及扩展思考版",
    "link": "https://deepmind.google/blog/introducing-gemini-3-8-live-and-3-8-live-extended-thinking",
    "pubdate": "2026-09-16 01:05:57",
    "contentSnippet": "谷歌DeepMind发布Gemini 3.8 Live和Gemini 3.8 Live Extended Thinking两款新模型。",
    "creator": "",
    "source": "Google DeepMind",
    "category": "模型发布",
    "relevance": 9
  },
  {
    "title": "Meta推出AI订阅计划Meta One",
    "link": "https://techcrunch.com/2026/09/15/meta-expands-subscription-push-with-new-ai-focused-plans",
    "pubdate": "2026-09-16 01:05:24",
    "contentSnippet": "Meta One订阅计划捆绑AI工具扩展访问权限及Facebook、Instagram和WhatsApp的高级功能。",
    "creator": "Sarah Perez",
    "source": "TechCrunch AI",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "你的智能体完成了任务，还能再次做到吗？",
    "link": "https://huggingface.co/blog/ibm-research/altk-evolve-consistency",
    "pubdate": "2026-09-16 00:00:44",
    "contentSnippet": "Hugging Face探讨智能体任务完成后的可重复性问题，关注其稳定性和可靠性。",
    "creator": "",
    "source": "Hugging Face",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "Meta被诉用Instagram用户照片构建人脸识别系统",
    "link": "https://futurism.com/future-society/meta-instagram-users-photos-facial-recognition-lawsuit",
    "pubdate": "2026-09-15 23:58:26",
    "contentSnippet": "集体诉讼指控Meta利用Instagram用户照片为智能眼镜构建通用人脸识别系统，此前已和解多起相关诉讼。",
    "creator": "Victor Tangermann",
    "source": "Futurism AI",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "OpenAI、Anthropic与谷歌就AI安全进行了数周会谈",
    "link": "https://techcrunch.com/2026/09/15/openai-anthropic-google-have-been-in-talks-on-ai-safety-for-weeks",
    "pubdate": "2026-09-15 23:47:03",
    "contentSnippet": "OpenAI证实与Anthropic和谷歌DeepMind进行了数周AI安全会谈，而特朗普团队淡化安全担忧并寻求与中国保持同步。",
    "creator": "Rebecca Bellan",
    "source": "TechCrunch AI",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "AI代理有100%的可能性已经在破坏互联网",
    "link": "https://www.404media.co/theres-a-100-chance-ai-agents-are-already-ruining-the-internet",
    "pubdate": "2026-09-15 22:32:06",
    "contentSnippet": "“AI代理”现在拥有足够的权力和权限，在网上变得极其令人讨厌。",
    "creator": "Jason Koebler",
    "source": "404 Media",
    "category": "行业动态",
    "relevance": 6
  }
];
