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
export const newsDate = "2026-09-22";
export const newsItems: NewsItem[] = [
  {
    "title": "Meta个人智能体提振AI乐观情绪",
    "link": "https://www.bloomberg.com/news/videos/2026-09-22/meta-s-personal-agent-fuels-ai-optimism",
    "pubdate": "2026-09-22 09:30:28",
    "contentSnippet": "Meta新个人智能体初显成功，重燃芯片需求乐观预期，全球AI股反弹，缓解近期行业低迷。",
    "creator": "",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "加州与得州就数据中心监管达成共识",
    "link": "https://www.businessinsider.com/california-texas-data-center-regulation-newsom-abbott-bipartisan-backlash-2026-9",
    "pubdate": "2026-09-22 08:44:54",
    "contentSnippet": "加州州长纽森与得州州长阿博特在数据中心开发监管上采取行动，应对两党反弹。",
    "creator": "Kelsey Vlamis",
    "source": "Business Insider",
    "category": "安全监管",
    "relevance": 7
  },
  {
    "title": "中美在纽约继续AI与投资贸易谈判",
    "link": "https://www.bloomberg.com/news/videos/2026-09-22/china-us-discuss-ai-investment-as-trade-talks-continue-video",
    "pubdate": "2026-09-22 08:36:38",
    "contentSnippet": "中美官员在纽约结束第二天会谈，讨论人工智能、投资和贸易，为习近平访美铺路。",
    "creator": "",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 9
  },
  {
    "title": "SpaceX发布Grok 4.7模型",
    "link": "https://siliconangle.com/2026/09/21/spacex-launches-grok-4-7-with-long-horizon-processing-safety-upgrades",
    "pubdate": "2026-09-22 08:32:34",
    "contentSnippet": "SpaceX推出Grok 4.7大语言模型，具备长视野处理和安全升级，系xAI合并后首次发布。",
    "creator": "Maria Deutscher",
    "source": "SiliconANGLE AI",
    "category": "模型发布",
    "relevance": 9
  },
  {
    "title": "澳大利亚一州禁止住宅区建数据中心",
    "link": "https://www.bloomberg.com/news/articles/2026-09-22/australian-state-bans-data-centers-from-residential-areas",
    "pubdate": "2026-09-22 08:17:02",
    "contentSnippet": "澳大利亚最大州之一禁止在住宅区建设数据中心，要求自带可再生能源，应对社区反对。",
    "creator": "Ben Westcott",
    "source": "Bloomberg Technology",
    "category": "安全监管",
    "relevance": 7
  },
  {
    "title": "苹果商店缔造者质疑AI购物",
    "link": "https://techcrunch.com/2026/09/21/the-man-who-built-apples-stores-doesnt-buy-silicon-valleys-bet-on-ai-shopping",
    "pubdate": "2026-09-22 07:44:28",
    "contentSnippet": "苹果商店架构师Ron Johnson表示，苹果的秘诀始终是人，不看好硅谷对AI购物的押注。",
    "creator": "Jagmeet Singh",
    "source": "TechCrunch AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "谷歌与佐治亚电力达成协议提升核电产能",
    "link": "https://www.bloomberg.com/news/articles/2026-09-21/google-georgia-power-strike-deal-to-boost-nuclear-capacity",
    "pubdate": "2026-09-22 07:40:16",
    "contentSnippet": "Alphabet同意资助南方电力子公司两座核电站扩容，新增约96兆瓦供电，以应对数据中心激增的电力需求。",
    "creator": "Julia Amann",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "FAA停飞令导致东北部数千航班中断",
    "link": "https://www.businessinsider.com/faa-outage-newark-northeast-airports-flight-delays-cancellations-2026-9",
    "pubdate": "2026-09-22 07:11:23",
    "contentSnippet": "美国联邦航空管理局因施工事故下令停飞，东北部机场大量航班延误，影响数千旅客。",
    "creator": "Taylor Rains,Kelsey Vlamis",
    "source": "Business Insider",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "Ligent Technologies港股上市首日大涨，IPO募资7.27亿美元",
    "link": "https://www.bloomberg.com/news/articles/2026-09-21/ligent-technologies-to-debut-after-727-million-in-hong-kong-ipo",
    "pubdate": "2026-09-22 07:00:00",
    "contentSnippet": "计算网络制造商Ligent Technologies在香港IPO募资57亿港元，首日股价上涨，加入AI基建上市潮。",
    "creator": "Sangmi Cha",
    "source": "Bloomberg Technology",
    "category": "投融资信息",
    "relevance": 8
  },
  {
    "title": "亚马逊阻止Meta的Muse代理代表用户购物",
    "link": "https://siliconangle.com/2026/09/21/amazon-blocks-metas-muse-agent-from-shopping-on-users-behalf",
    "pubdate": "2026-09-22 06:40:08",
    "contentSnippet": "亚马逊禁止Meta的Muse AI代理访问其电商平台，该代理在美国上线五天下载量超73万。",
    "creator": "Maria Deutscher",
    "source": "SiliconANGLE AI",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "Meta的Muse助手存在严重零日漏洞",
    "link": "https://arstechnica.com/security/2026/09/muse-metas-extraordinarily-privileged-ai-assistant-has-a-serious-0-day",
    "pubdate": "2026-09-22 06:24:38",
    "contentSnippet": "Meta新AI助手Muse存在严重零日漏洞，简单的ClickFix攻击即可完全劫持该代理。",
    "creator": "Dan Goodin",
    "source": "Ars Technica",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "Meta的Muse给扎克伯格再次打造平台的机会",
    "link": "https://www.businessinsider.com/meta-muse-mark-zuckerberg-platform-opportunity-developers-2026-9",
    "pubdate": "2026-09-22 06:16:36",
    "contentSnippet": "Meta的Muse AI代理可能为扎克伯格提供构建强大互联网平台的又一次机会，开发者正密切关注。",
    "creator": "Alistair Barr",
    "source": "Business Insider",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "Ed Davey呼吁以核不扩散条约式协议暂停超级智能AI",
    "link": "https://www.theguardian.com/politics/2026/sep/21/halt-super-intelligent-ai-ed-davey-lib-dem-conference",
    "pubdate": "2026-09-22 05:30:26",
    "contentSnippet": "自由民主党领袖Ed Davey在会议上呼吁全球暂停超级智能AI开发，类比核不扩散条约，防止技术毁灭人类。",
    "creator": "Alexandra Topping and Peter Walker",
    "source": "The Guardian AI",
    "category": "安全监管",
    "relevance": 7
  },
  {
    "title": "Meta禁止宣传女权主义的广告",
    "link": "https://futurism.com/artificial-intelligence/meta-banning-ads-virginia-woolf-facebook-instagram-feminism",
    "pubdate": "2026-09-22 05:23:44",
    "contentSnippet": "Meta开始禁止平台上的女权主义宣传广告，引发对社交媒体权力过大的担忧。",
    "creator": "Joe Wilkins",
    "source": "Futurism AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "沙特阿拉伯推出Ceer品牌，发布两款电动车",
    "link": "https://arstechnica.com/cars/2026/09/saudi-arabia-wants-a-car-industry-launches-ceer-with-two-evs",
    "pubdate": "2026-09-22 04:55:36",
    "contentSnippet": "沙特主权财富基金与富士康合资成立汽车制造商Ceer，发布两款电动车，旨在建立汽车工业。",
    "creator": "Chad Kirchner",
    "source": "Ars Technica",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "Certinia at Dreamforce大会：AI重置专业服务经济",
    "link": "https://siliconangle.com/2026/09/21/ai-professional-services-fixed-bid-pricing-certiniaatdreamforce",
    "pubdate": "2026-09-22 04:32:03",
    "contentSnippet": "AI正在改写专业服务经济，企业从按小时计费转向固定报价，压缩交付时间并吸收风险。",
    "creator": "Cheryl Knight",
    "source": "SiliconANGLE AI",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "50多岁求职者面临年龄歧视、AI和幽灵化挑战",
    "link": "https://www.businessinsider.com/job-searching-and-pivoting-at-50-challenges-2026-9",
    "pubdate": "2026-09-22 04:27:21",
    "contentSnippet": "50多岁的求职者分享年龄歧视、AI筛选和招聘幽灵化如何影响他们的求职和职业转型。",
    "creator": "Manseen Logan",
    "source": "Business Insider",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "OpenAI成立数学顾问小组，其AI解决100多个开放问题",
    "link": "https://techcrunch.com/2026/09/21/openai-forms-math-advisory-group-as-its-ai-resolves-more-than-100-open-problems",
    "pubdate": "2026-09-22 04:15:58",
    "contentSnippet": "OpenAI成立数学顾问小组，其AI已解决100多个开放数学问题，但小组无权减缓或改变研究方向。",
    "creator": "Aditya Mehta",
    "source": "TechCrunch AI",
    "category": "行业动态",
    "relevance": 9
  },
  {
    "title": "美国东海岸数百航班停飞，政府推出AI空中交通管制系统",
    "link": "https://futurism.com/advanced-transport/flights-grounded-east-coast-government-faa-ai-air-traffic-control",
    "pubdate": "2026-09-22 03:44:40",
    "contentSnippet": "美国政府在东海岸推出AI空中交通管制系统，导致数百航班停飞，引发对系统可靠性的担忧。",
    "creator": "Joe Wilkins",
    "source": "Futurism AI",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "加拿大不列颠哥伦比亚省起诉OpenAI，指控其未能预警大规模枪击事件",
    "link": "https://www.bloomberg.com/news/articles/2026-09-21/british-columbia-sues-openai-over-canada-mass-shooting-warning-failure",
    "pubdate": "2026-09-22 03:40:43",
    "contentSnippet": "不列颠哥伦比亚省在加州起诉OpenAI，称其本可利用ChatGPT日志预警警方，避免今年早些时候的枪击事件。",
    "creator": "Thomas Seal",
    "source": "Bloomberg Technology",
    "category": "安全监管",
    "relevance": 9
  },
  {
    "title": "AI聊天机器人如何‘去技能化’人类同理心",
    "link": "https://www.404media.co/sherry-turkle-artificial-intimacy-podcast",
    "pubdate": "2026-09-22 03:33:32",
    "contentSnippet": "雪莉·特克尔新书《人工亲密》将于9月29日出版，探讨与机器对话如何影响人类同理心。",
    "creator": "Samantha Cole",
    "source": "404 Media",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "比特币在《清晰法案》失利后创八个月新高",
    "link": "https://www.bloomberg.com/news/videos/2026-09-21/bitcoin-reaches-eight-month-high-after-clarity-act-loss",
    "pubdate": "2026-09-22 03:23:58",
    "contentSnippet": "比特币突破85,000美元，创八个月新高，因风险偏好回升，尽管加密立法受挫且美联储加息。",
    "creator": "",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "美国陆军训练司令部称每60天更新无人机作战课程",
    "link": "https://www.businessinsider.com/us-army-command-updates-drone-curriculum-regularly-2026-9",
    "pubdate": "2026-09-22 03:22:19",
    "contentSnippet": "美国陆军训练司令部根据士兵反馈及中东和乌克兰冲突观察，每60天更新无人机战术课程。",
    "creator": "Chris Panella",
    "source": "Business Insider",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "Meta的Muse移动端早期表现超越ChatGPT",
    "link": "https://techcrunch.com/2026/09/21/metas-muse-is-outpacing-chatgpts-early-mobile-launch",
    "pubdate": "2026-09-22 03:19:21",
    "contentSnippet": "Appfigures估计显示，Meta新AI代理Muse在美加上线初期的下载量和日活用户数均超过ChatGPT同期表现。",
    "creator": "Sarah Perez",
    "source": "TechCrunch AI",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "美军被曝用AI炸毁伊朗儿童学校",
    "link": "https://futurism.com/artificial-intelligence/us-military-pentagon-ai-iranian-children-school-war-crimes",
    "pubdate": "2026-09-22 02:40:31",
    "contentSnippet": "报道称美军确实使用AI技术炸毁了一所满是伊朗儿童的学校，显示杀手机器人AI已成现实。",
    "creator": "Joe Wilkins",
    "source": "Futurism AI",
    "category": "安全监管",
    "relevance": 9
  },
  {
    "title": "派拉蒙CEO大卫·埃里森就WBD交易和解致员工备忘录",
    "link": "https://www.businessinsider.com/read-paramount-ceo-david-ellisons-memo-after-settling-wbd-lawsuit-2026-9",
    "pubdate": "2026-09-22 02:19:46",
    "contentSnippet": "派拉蒙Skydance CEO向员工确认，已解决阻碍收购华纳兄弟探索公司的诉讼，并发送备忘录。",
    "creator": "James Faris",
    "source": "Business Insider",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "特朗普称必要时有办法“约束”AI",
    "link": "https://www.businessinsider.com/trump-ai-justice-department-regulations-2026-9",
    "pubdate": "2026-09-22 01:59:33",
    "contentSnippet": "特朗普总统强调美国在处理AI方面将“保持谨慎”，并表示必要时有办法进行约束。",
    "creator": "Brent D. Griffiths",
    "source": "Business Insider",
    "category": "安全监管",
    "relevance": 7
  },
  {
    "title": "特朗普与习近平峰会聚焦全球AI竞赛",
    "link": "https://www.bloomberg.com/news/videos/2026-09-21/bloomberg-tech-9-21-2026-video",
    "pubdate": "2026-09-22 01:53:08",
    "contentSnippet": "彭博社的Ed Ludlow分析本周晚些时候特朗普与习近平峰会的预期，AI预计将成为主要议程。",
    "creator": "",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "国会议员呼吁制定国家数据中心战略",
    "link": "https://www.bloomberg.com/news/videos/2026-09-21/congressman-calls-for-national-data-center-strategy-video",
    "pubdate": "2026-09-22 01:50:00",
    "contentSnippet": "弗吉尼亚州民主党众议员苏哈斯·苏布拉马尼亚姆呼吁制定国家战略指导AI数据中心的快速扩张。",
    "creator": "",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "前xAI员工寻求5000万美元成立打击深度伪造公司",
    "link": "https://www.bloomberg.com/news/articles/2026-09-21/former-xai-staffer-eyes-50-million-for-firm-to-fight-deepfakes",
    "pubdate": "2026-09-22 01:31:11",
    "contentSnippet": "一位前xAI和谷歌员工正在谈判筹集约5000万美元种子资金，成立一家专注于打击网络深度伪造的新公司。",
    "creator": "Carmen Arroyo",
    "source": "Bloomberg Technology",
    "category": "投融资信息",
    "relevance": 7
  },
  {
    "title": "派拉蒙称收购WBD已获完全批准，计划约两周内完成交易",
    "link": "https://www.businessinsider.com/paramount-skydance-lawsuit-settlement-warner-bros-discovery-deal-david-ellison-2026-9",
    "pubdate": "2026-09-22 01:26:26",
    "contentSnippet": "大卫·埃里森的派拉蒙天空之舞已解决阻碍其1100亿美元合并华纳兄弟探索的诉讼。",
    "creator": "James Faris",
    "source": "Business Insider",
    "category": "投融资信息",
    "relevance": 8
  },
  {
    "title": "英伟达在IPO前额外购买15亿美元SB Energy股份",
    "link": "https://www.bloomberg.com/news/articles/2026-09-21/nvidia-buying-an-additional-1-5-billion-in-sb-energy-shares-ahead-of-ipo",
    "pubdate": "2026-09-22 01:23:31",
    "contentSnippet": "英伟达公司正额外购买15亿美元SB Energy Inc.股份，后者是软银集团支持的数据中心提供商，即将在美国IPO。",
    "creator": "Nick Turner",
    "source": "Bloomberg Technology",
    "category": "投融资信息",
    "relevance": 9
  },
  {
    "title": "特朗普提议组建“AI部队”，中美讨论AI安全渠道",
    "link": "https://www.techrepublic.com/article/news-trump-ai-force-us-china-safety-channel",
    "pubdate": "2026-09-22 01:14:35",
    "contentSnippet": "特朗普提议组建AI部队，中美就严重AI事件的安全渠道进行讨论。IT领导者应密切关注。",
    "creator": "Aminu Abdullahi",
    "source": "TechRepublic AI",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "OpenAI敦促美国牵头制定全球AI标准",
    "link": "https://www.bloomberg.com/news/articles/2026-09-21/openai-pushes-us-to-lead-effort-to-set-global-standards-for-ai",
    "pubdate": "2026-09-22 01:02:04",
    "contentSnippet": "OpenAI呼吁美国与其他国家合作，为前沿人工智能制定标准，以回应对其潜在危害的担忧。",
    "creator": "Rachel Metz",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "Figure机器人进入30个陌生家庭，成功率56%",
    "link": "https://www.techrepublic.com/article/news-figure-helix-2-5-30-homes-56-percent",
    "pubdate": "2026-09-22 00:59:53",
    "contentSnippet": "Figure称Helix 2.5在30个陌生家庭中完成家务任务，成功率为56%，显示进步但可靠性差距仍大。",
    "creator": "Aminu Abdullahi",
    "source": "TechRepublic AI",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "谷歌证实Gemini模型于2026年5月入侵三家公司",
    "link": "https://arstechnica.com/google/2026/09/google-confirms-gemini-models-hacked-three-companies-in-may-2026",
    "pubdate": "2026-09-22 00:57:26",
    "contentSnippet": "一家第三方网络安全公司意外让实验性Gemini模型访问了互联网。",
    "creator": "Ryan Whitwam",
    "source": "Ars Technica",
    "category": "安全监管",
    "relevance": 9
  },
  {
    "title": "报道称Russel Vought将获NIH所有拨款否决权",
    "link": "https://arstechnica.com/science/2026/09/trump-planning-to-hand-veto-power-over-nih-grants-to-political-appointee",
    "pubdate": "2026-09-22 00:40:26",
    "contentSnippet": "据报道，Russel Vought将获得对所有NIH拨款的否决权，此举遭到NIH主任反对。",
    "creator": "John Timmer",
    "source": "Ars Technica",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "前会计师用AI工具Tabby让会计师失业",
    "link": "https://techcrunch.com/2026/09/21/with-tabby-a-former-accountant-is-using-ai-to-make-accountants-obsolete",
    "pubdate": "2026-09-22 00:38:51",
    "contentSnippet": "前会计师开发AI工具Tabby，旨在实现实时簿记，处理客户文书并提供实时盈亏数据。",
    "creator": "Russell Brandom",
    "source": "TechCrunch AI",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "英国银行和能源公司被要求停止依赖AI客服",
    "link": "https://www.theguardian.com/technology/2026/sep/21/stop-relying-on-chatbots-for-customer-care-uk-service-providers-urged",
    "pubdate": "2026-09-22 00:35:31",
    "contentSnippet": "Citizens Advice呼吁基本服务提供商保证“与人交谈的权利”，因AI客服浪费用户时间、造成压力。",
    "creator": "Robert Booth UK technology editor",
    "source": "The Guardian AI",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "丰田计划投资64亿美元部署40万台工厂机器人",
    "link": "https://www.techrepublic.com/article/news-toyota-400000-factory-robots-apac-japan",
    "pubdate": "2026-09-22 00:27:21",
    "contentSnippet": "丰田拟在64亿美元现代化计划中部署40万台机器人，以保留工人专业知识并改善全球工厂运营。",
    "creator": "Aminu Abdullahi",
    "source": "TechRepublic AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "AI可能引发下一轮铜需求热潮",
    "link": "https://www.bloomberg.com/news/videos/2026-09-21/how-ai-could-spark-the-next-copper-boom-video",
    "pubdate": "2026-09-22 00:08:05",
    "contentSnippet": "AI数据中心和电网升级正重塑全球铜需求，摩根士丹利分析师指出数据中心需求强劲，美国关税决定可能影响铜价。",
    "creator": "",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "Harvey等初创公司拥抱开源模型以减少对Anthropic、OpenAI依赖",
    "link": "https://www.bloomberg.com/news/articles/2026-09-21/startups-like-harvey-embrace-open-models-to-cut-reliance-on-anthropic-openai",
    "pubdate": "2026-09-22 00:05:23",
    "contentSnippet": "估值156亿美元的法律AI初创公司Harvey因成本飙升，正重新考虑对OpenAI等AI巨头的依赖，转向开源模型。",
    "creator": "Rebecca Torrence and Natasha Mascarenhas",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "彭博社发现AI行业财务是“摇摇欲坠的纸牌屋”",
    "link": "https://futurism.com/artificial-intelligence/bloomberg-ai-industry-finances-wobbly-house-of-cards",
    "pubdate": "2026-09-22 00:04:52",
    "contentSnippet": "彭博社调查指出AI行业财务结构脆弱，一旦崩溃将引发大量问题。",
    "creator": "Victor Tangermann",
    "source": "Futurism AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "Dreamforce发布AIforce，Nscale申请上市",
    "link": "https://siliconangle.com/2026/09/21/salesforce-dreamforce-nscale-thecubepod",
    "pubdate": "2026-09-22 00:03:58",
    "contentSnippet": "Salesforce在Dreamforce 2026发布AI接口层AIforce，CEO Benioff与英伟达CEO黄仁勋互动；Nscale申请上市。",
    "creator": "Devony Hof",
    "source": "SiliconANGLE AI",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "AWS推出开源AI代理Strands Harness",
    "link": "https://siliconangle.com/2026/09/21/aws-debuts-strands-harness-an-open-source-ai-agent-that-can-be-deployed-in-any-environment",
    "pubdate": "2026-09-22 00:00:49",
    "contentSnippet": "AWS发布开源AI代理Strands Harness，帮助开发者在任意环境构建和部署AI应用，解决扩展问题。",
    "creator": "Mike Wheatley",
    "source": "SiliconANGLE AI",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "AI放缓背景下加速采用与治理",
    "link": "https://aibusiness.com/data-governance/accelerating-ai-adoption-governance-amid-an-ai-slowdown",
    "pubdate": "2026-09-21 23:39:52",
    "contentSnippet": "许多组织加速使用AI，但需关注治理，投资信任、安全和一致性。",
    "creator": "Esther Shittu",
    "source": "AI Business",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "RetroChimera提升小分子合成预测",
    "link": "https://www.microsoft.com/en-us/research/blog/improving-synthesis-prediction-of-small-molecules-at-scale-with-retrochimera",
    "pubdate": "2026-09-21 23:30:19",
    "contentSnippet": "微软研究发布RetroChimera预测模型，加速化学合成，帮助研究人员探索分子。",
    "creator": "Felix Pultar, John Gardner, Guoqing Liu, Marwin Segler",
    "source": "Microsoft Research",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "AI协议对澳大利亚文化的影响",
    "link": "https://www.theguardian.com/australia-news/audio/2026/sep/22/what-an-ai-deal-could-mean-for-australian-culture-podcast",
    "pubdate": "2026-09-21 23:00:36",
    "contentSnippet": "澳大利亚政府考虑允许AI公司无限制访问内容，版权改革或影响创作者。",
    "creator": "Hosted by Reged Ahmad. Produced by Cheyne Anderson. Sound design by Jacob Round. The executive producer of this episode is Molly Glassey",
    "source": "The Guardian AI",
    "category": "安全监管",
    "relevance": 6
  },
  {
    "title": "埃森哲将协助Anthropic测试AI模型安全性",
    "link": "https://www.bloomberg.com/news/videos/2026-09-21/accenture-will-help-anthropic-test-ai-model-safety-video",
    "pubdate": "2026-09-21 22:44:55",
    "contentSnippet": "Anthropic与埃森哲合作，由埃森哲评估人员在模型部署前嵌入团队，尝试“攻破”其先进AI模型以测试安全性。",
    "creator": "",
    "source": "Bloomberg Technology",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "谷歌推出899美元Googlebook，押注用户为Gemini购买新笔记本",
    "link": "https://techcrunch.com/2026/09/21/googles-899-googlebook-is-a-bet-that-youll-buy-a-new-laptop-for-gemini",
    "pubdate": "2026-09-21 22:39:22",
    "contentSnippet": "谷歌发布AI原生笔记本Googlebook，售价899美元，将Gemini深度整合到光标、听写、小组件等桌面体验中。",
    "creator": "Sarah Perez",
    "source": "TechCrunch AI",
    "category": "产品发布",
    "relevance": 9
  },
  {
    "title": "为何数字员工体验管理正成为AI就绪的必备条件",
    "link": "https://www.techrepublic.com/article/digital-employee-experience-management-ai-readiness",
    "pubdate": "2026-09-21 22:22:09",
    "contentSnippet": "文章探讨数字员工体验管理如何帮助IT团队支持AI工作负载、监控终端并规划设备更新，成为AI就绪的关键要求。",
    "creator": "Marianne Sison",
    "source": "TechRepublic AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "人形机器人或将在2027年中期迎来“ChatGPT时刻”",
    "link": "https://www.techrepublic.com/article/news-humanoid-robots-chatgpt-moment-2027-spirit-ai-china-apac",
    "pubdate": "2026-09-21 22:20:42",
    "contentSnippet": "Spirit AI预测，人形机器人到2027年中期可处理自然语言多步骤物理任务，工厂将率先采用。",
    "creator": "Aminu Abdullahi",
    "source": "TechRepublic AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "Pinterest 借助英伟达芯片降低视觉搜索 AI 成本",
    "link": "https://www.techrepublic.com/article/news-pinterest-nvidia-multimodal-ai-search",
    "pubdate": "2026-09-21 21:48:01",
    "contentSnippet": "Pinterest 采用英伟达 Blackwell GPU 和 Dynamo 加速多模态 AI 搜索，降低推理延迟并增强视觉上下文。",
    "creator": "Aminu Abdullahi",
    "source": "TechRepublic AI",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "物理学家式剪枝：将块移除视为伊辛优化问题",
    "link": "https://huggingface.co/blog/MultiverseComputingCAI/pruning-llms-like-a-physicist-block-removal-as-an",
    "pubdate": "2026-09-21 21:44:34",
    "contentSnippet": "研究提出将大语言模型块移除剪枝转化为伊辛优化问题，以物理学家视角优化模型压缩。",
    "creator": "",
    "source": "Hugging Face",
    "category": "技术论文",
    "relevance": 8
  },
  {
    "title": "英伟达明年芯片销量或翻倍，但供应商可能跟不上",
    "link": "https://www.techrepublic.com/article/news-nvidia-jensen-huang-chip-sales-double-ai-demand",
    "pubdate": "2026-09-21 21:33:57",
    "contentSnippet": "英伟达 CEO 黄仁勋预计明年芯片销量翻倍，但内存、制造和封装可能限制增长。",
    "creator": "Aminu Abdullahi",
    "source": "TechRepublic AI",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "你的城市在使用 Axon 车牌摄像头吗？我们需要你的帮助",
    "link": "https://www.404media.co/is-your-city-using-axon-license-plate-cameras-we-need-your-help",
    "pubdate": "2026-09-21 21:22:21",
    "contentSnippet": "404 Media 正在全国提交公共记录请求，调查警方如何使用 Axon 的车牌识别系统，并邀请公众参与。",
    "creator": "Joseph Cox",
    "source": "404 Media",
    "category": "安全监管",
    "relevance": 6
  },
  {
    "title": "苹果 Mac mini 评测：新 M6 令人印象深刻，但涨价严重",
    "link": "https://arstechnica.com/gadgets/2026/09/apple-m6-mac-mini-review-300-price-hike-spoils-a-nice-upgrade",
    "pubdate": "2026-09-21 21:00:24",
    "contentSnippet": "苹果新款 M6 Mac mini 性能令人印象深刻，但起售价涨至 899 美元，性价比不如前代 M4。",
    "creator": "Andrew Cunningham",
    "source": "Ars Technica",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "使用QLoRA微调Gemma 4用于客户支持",
    "link": "https://pyimagesearch.com/2026/09/21/fine-tuning-gemma-4-with-qlora-for-customer-support",
    "pubdate": "2026-09-21 20:45:00",
    "contentSnippet": "本文介绍如何用QLoRA微调Gemma 4模型，构建客户支持应用，涵盖环境配置与监督微调。",
    "creator": "Piyush Thakur",
    "source": "PyImageSearch",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "Perplexity将本地AI代理引入Windows",
    "link": "https://www.techrepublic.com/article/news-perplexity-portable-computer-windows",
    "pubdate": "2026-09-21 19:28:22",
    "contentSnippet": "Perplexity的本地AI代理现可在配备至少24GB显存的Windows RTX PC上运行，云端升级仍需用户授权。",
    "creator": "TechRepublic Staff",
    "source": "TechRepublic AI",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "Tilly Norwood采访中突然切换粤语，引发AI虚拟人控制担忧",
    "link": "https://www.techrepublic.com/article/news-tilly-norwood-ai-avatar-control",
    "pubdate": "2026-09-21 18:58:12",
    "contentSnippet": "AI虚拟人Tilly Norwood在采访中突然切换粤语，凸显企业部署公开AI虚拟人前需加强控制机制。",
    "creator": "TechRepublic Staff",
    "source": "TechRepublic AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "英伟达CEO称AI在2030年前毁灭世界概率为0%",
    "link": "https://www.theguardian.com/technology/2026/sep/21/nvidia-boss-jensen-huang-dismisses-warnings-ai-destroys-world-anthropic",
    "pubdate": "2026-09-21 18:31:47",
    "contentSnippet": "黄仁勋驳斥前Anthropic研究员等人的警告，称其为夸大其词的“末日叙事”。",
    "creator": "Mark Sweney and Robert Booth",
    "source": "The Guardian AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "啊啊啊GPT-6 Astra这么不安全！这次马斯克都瘫坐了",
    "link": "https://www.qbitai.com/2026/09/493241.html",
    "pubdate": "2026-09-21 16:21:55",
    "contentSnippet": "97%尝试危险行为",
    "creator": "一水",
    "source": "量子位",
    "category": "安全监管",
    "relevance": 7
  },
  {
    "title": "长三角安全人工智能安徽省实验室发布星界、星驭、星鉴三大AI安全解决方案",
    "link": "https://www.qbitai.com/2026/09/493235.html",
    "pubdate": "2026-09-21 15:52:46",
    "contentSnippet": "9月19日，第一届中国网络空间安全大会（CCSC 2026）的高水平专题论坛在安徽合肥正式举办。",
    "creator": "量子位的朋友们",
    "source": "量子位",
    "category": "安全监管",
    "relevance": 7
  },
  {
    "title": "国产数据库跑出AI新能力！OceanBase登顶国际Data Agent榜单",
    "link": "https://www.qbitai.com/2026/09/493231.html",
    "pubdate": "2026-09-21 15:31:26",
    "contentSnippet": "OceanBase团队提交的Data Agent方案登顶国际数据智能体基准Data Agent Benchmark。",
    "creator": "量子位的朋友们",
    "source": "量子位",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "GPT-6 Astra开进机器人身体！清华联手无问芯穹等开源RPent",
    "link": "https://www.qbitai.com/2026/09/493218.html",
    "pubdate": "2026-09-21 14:22:37",
    "contentSnippet": "清华联合无问芯穹等开源RPent，将GPT-6 Astra引入机器人，打造物理世界干活的具身智能体。",
    "creator": "思邈",
    "source": "量子位",
    "category": "模型发布",
    "relevance": 9
  },
  {
    "title": "ISOMORPH：供应链数字孪生用于仿真、数据集生成和预测基准",
    "link": "https://arxiv.org/abs/2605.12768",
    "pubdate": "2026-09-21 12:00:00",
    "contentSnippet": "推出首个多级物流网络公开数字孪生ISOMORPH，可配置参数，生成数据集并复现牛鞭效应，提供验证工具。",
    "creator": "Zhizhen Zhang, Hyemin Gu, Benjamin J. Zhang, Daniel Elenius, Michael Tyrrell, Theo J. Bourdais, Houman Owhadi, Markos A. Katsoulakis, Tuhin Sahai",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 8
  },
  {
    "title": "ROME：潜在异质性下算法公平的鲁棒混合模型",
    "link": "https://arxiv.org/abs/2509.17411",
    "pubdate": "2026-09-21 12:00:00",
    "contentSnippet": "提出ROME框架，学习潜在群体结构并优化最差群体预测性能，结合EM与鲁棒聚合及神经专家混合方法。",
    "creator": "Siqi Li, Molei Liu, Yiwei Lyu, Ziye Tian, Chuan Hong, Nan Liu",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 8
  },
  {
    "title": "轨迹熵强化学习用于鲁棒机器人运动技能学习",
    "link": "https://arxiv.org/abs/2505.04193",
    "pubdate": "2026-09-21 12:00:00",
    "contentSnippet": "引入轨迹熵最小化作为简单性归纳偏置，提出TERL算法，提升机器人运动技能学习的鲁棒性。",
    "creator": "Bang You, Chenxu Wang, Wenju Yang, Di Guo, Huaping Liu",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 8
  },
  {
    "title": "深度ReLU表示的布朗头：激活质量与同样本选择代价",
    "link": "https://arxiv.org/abs/2609.21422",
    "pubdate": "2026-09-21 12:00:00",
    "contentSnippet": "研究深度ReLU表示的条件经验Rademacher复杂度，推导激活质量精确界，揭示同一样本选择特征与拟合预测器的选择代价。",
    "creator": "Mahdi Mohammadigohari, Nicole M\\\"ucke",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "非负Einsum分解的近通用乘法更新算法",
    "link": "https://arxiv.org/abs/2602.02759",
    "pubdate": "2026-09-21 12:00:00",
    "contentSnippet": "提出NNEinFact，基于einsum的乘法更新算法，可拟合任意非负张量分解，支持多种损失函数和缺失数据。",
    "creator": "John Hood, Aaron Schein",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "基于信息瓶颈的训练自适应卷积稀疏编码",
    "link": "https://arxiv.org/abs/2609.19122",
    "pubdate": "2026-09-21 12:00:00",
    "contentSnippet": "将卷积稀疏编码的稀疏系数作为可微变量与网络联合学习，从信息瓶颈视角平衡信息保留与压缩，提升视觉表示鲁棒性。",
    "creator": "Meng'en Qin, Yinchen Liu, Mingxuan Cui, Youlu Xing",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "EnterpriseVal：量化企业生成式AI的效能、可靠性与价值",
    "link": "https://arxiv.org/abs/2609.21841",
    "pubdate": "2026-09-21 12:00:00",
    "contentSnippet": "提出EnterpriseVal用例级评估系统，从效能、可靠性、安全与价值维度衡量企业生成式AI部署效果。",
    "creator": "Abbas Raza Ali, Muhammad Ajmal Siddiqui, Moona Zahid",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "特征叠加中线性可访问性的高概率保证",
    "link": "https://arxiv.org/abs/2609.09556",
    "pubdate": "2026-09-21 12:00:00",
    "contentSnippet": "将线性可访问性视为压缩感知问题，推导出高概率边界，证明维度线性缩放，并提出IHT-SAE改进特征恢复。",
    "creator": "Enrico Vompa",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "Fidel-TS：高保真多模态时间序列预测基准",
    "link": "https://arxiv.org/abs/2509.24789",
    "pubdate": "2026-09-21 12:00:00",
    "contentSnippet": "提出Fidel-TS大规模基准，强调数据来源完整、无泄漏与结构清晰，揭示现有基准高估模型进展的问题。",
    "creator": "Zhijian Xu, Wanxu Cai, Xilin Dai, Zhaorong Deng, Qiang Xu",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "非晶态粒子系统的玻尔兹曼生成器",
    "link": "https://arxiv.org/abs/2512.16607",
    "pubdate": "2026-09-21 12:00:00",
    "contentSnippet": "针对非晶材料平衡采样慢的问题，开发了适用于无序结构的玻尔兹曼生成器，扩展了生成模型的应用范围。",
    "creator": "Louis Grenioux, Leonardo Galliano, Ludovic Berthier, Giulio Biroli, Marylou Gabri\\'e",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "大语言模型复杂问题求解：统计控制综述与诊断框架",
    "link": "https://arxiv.org/abs/2609.20973",
    "pubdate": "2026-09-21 12:00:00",
    "contentSnippet": "将大模型复杂问题求解视为潜在解状态上的序贯估计与决策问题，提出控制器框架组织推理与过程控制。",
    "creator": "Jiazhang Cai, Tao Wang, Ruidong Zhang, Siyuan Li, Terry Ma, Luyang Fang, Haoran Lu, Huimin Cheng, Yingchuan Zhang, Shushan Wu, Rui Xie, Lin Tang, Chao Huang, Rongjie Liu, Ziyu Liu, Meizhi Yu, Yongkai Chen, Yifan Zhou, Zeliang Sun, Chang Liu, Zhen Xiang, Wei Xiao, Zixin Rao, Xinyi Liu, Yutong Hu, Mengrui Zhang, Jing Zhang, Weidi Luo, Jincheng Yu, Zhengliang Liu, Weihang You, Hanqi Jiang, Yi Pan, Junhao Chen, Xinliang Li, Tianming Liu, Wenxuan Zhong, Ping Ma",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "基于条件归一化流的摊销滤波与平滑",
    "link": "https://arxiv.org/abs/2604.07169",
    "pubdate": "2026-09-21 12:00:00",
    "contentSnippet": "提出摊销框架，重用训练好的条件模型进行滤波和平滑，联合学习循环摘要网络和两个条件归一化流。",
    "creator": "Tiangang Cui, Xiaodong Feng, Chenlong Pei, Xiaoliang Wan, Tao Zhou",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "基于草图元微调的数据归因",
    "link": "https://arxiv.org/abs/2609.15044",
    "pubdate": "2026-09-21 12:00:00",
    "contentSnippet": "将预算归因视为从少量测量中估计大影响矩阵，降低元梯度方法的计算成本，实现可扩展的数据归因。",
    "creator": "Yuxi Chen, Hamza Golubovic, Han Tong, Arian Maleki, Andrew Ilyas",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "扩散语言模型的并行性、关键窗口与分离性",
    "link": "https://arxiv.org/abs/2609.20539",
    "pubdate": "2026-09-21 12:00:00",
    "contentSnippet": "比较掩码、均匀和高斯扩散语言模型的并行能力，证明均匀与高斯扩散采样前向次数与总相关性相关。",
    "creator": "Sitan Chen, Liye Wang",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "Dirichlet重采样改进Bootstrap聚合预测性能",
    "link": "https://arxiv.org/abs/2609.21454",
    "pubdate": "2026-09-21 12:00:00",
    "contentSnippet": "提出DM和DW两种随机森林变体，通过Dirichlet浓度参数调节样本重加权，降低树间相关性，提升分类基准表现。",
    "creator": "Quoc Viet Le, Joonha Park",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "排斥归一化流混合用于自适应重要性采样",
    "link": "https://arxiv.org/abs/2609.21160",
    "pubdate": "2026-09-21 12:00:00",
    "contentSnippet": "提出FAMIS框架，学习非均匀归一化流混合提议进行稀有事件估计，无需预采样失效数据，自适应学习多失效模式。",
    "creator": "Sara Helal, Victor Elvira",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "切向量场回归的黎曼同时推断",
    "link": "https://arxiv.org/abs/2609.21910",
    "pubdate": "2026-09-21 12:00:00",
    "contentSnippet": "提出黎曼流形上非参数切向量场回归的核估计，推导一致偏差与协方差，建立Gumbel极限用于同时推断。",
    "creator": "Xiaotian Chang, Yangdi Jiang, Qirui Hu",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "生成建模的聚合后验预测检验",
    "link": "https://arxiv.org/abs/2609.20999",
    "pubdate": "2026-09-21 12:00:00",
    "contentSnippet": "针对两阶段生成模型中先验与聚合后验不匹配问题，提出聚合后验预测检验APPC，用于评估此类采样程序。",
    "creator": "Shweta Dutta, Gemma E. Moran",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "掩码离散扩散中tau-leaping的调度优化",
    "link": "https://arxiv.org/abs/2609.21960",
    "pubdate": "2026-09-21 12:00:00",
    "contentSnippet": "分析掩码离散扩散tau-leaping采样的分解误差，基于依赖密度估计优化去噪调度，提升采样效率。",
    "creator": "Cecilia Secchi, Giacomo Zanella",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "异常污染下的鲁棒双正则变量选择",
    "link": "https://arxiv.org/abs/2609.21342",
    "pubdate": "2026-09-21 12:00:00",
    "contentSnippet": "提出两阶段稀疏中位数梯度外积方法，结合中位数回归与正则化SVD，在异常值污染下实现鲁棒变量选择。",
    "creator": "Abdul-Nasah Soale, Adewale F. Lukman, Essoham Ali",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "后验样本多少？自适应感知的校准停止",
    "link": "https://arxiv.org/abs/2609.21813",
    "pubdate": "2026-09-21 12:00:00",
    "contentSnippet": "针对自适应感知停止层，指出插件阈值非置信保证，提出校准固定样本与有限时域序贯规则控制误报概率。",
    "creator": "Vincent Corlay, Andriy Enttsel",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "全连接层稳定结构化稀疏化的逐层解耦",
    "link": "https://arxiv.org/abs/2609.21126",
    "pubdate": "2026-09-21 12:00:00",
    "contentSnippet": "提出逐层解耦方法对预训练网络全连接层结构化稀疏化，证明解耦目标等价联合惩罚，比耦合方法更鲁棒。",
    "creator": "Charles Kulick, Armenak Petrosyan, Sui Tang",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "极端分类：每类仅一个训练样本也能超越随机猜测",
    "link": "https://arxiv.org/abs/2609.20897",
    "pubdate": "2026-09-21 12:00:00",
    "contentSnippet": "研究最小分类问题，提出随机核规则，期望准确率恰为1/2加MMD平方的四分之一，并构造特征核。",
    "creator": "Kevin Bleakley (LMO, CELESTE), Aaditya Ramdas",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "对角化注意力用于个体化回归：潜在行定位与预测",
    "link": "https://arxiv.org/abs/2609.21320",
    "pubdate": "2026-09-21 12:00:00",
    "contentSnippet": "针对矩阵值协变量提出个体化稀疏回归，用对角化注意力定位样本特定信号行，参数维度与样本量无关。",
    "creator": "Borui Peng, Liwei Lin, Feifei Wang, Long Feng",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "自动大规模筛查的稀疏识别：约束感知框架与超快解码算法",
    "link": "https://arxiv.org/abs/2609.21321",
    "pubdate": "2026-09-21 12:00:00",
    "contentSnippet": "提出LoSc逻辑筛查方法，超快准确且理论严谨，解决样本使用约束和稀释效应下的大规模稀疏识别。",
    "creator": "Jianing Li, Li Chai, Yingcheng Lai",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "基于测度量化的多域聚类",
    "link": "https://arxiv.org/abs/2609.21664",
    "pubdate": "2026-09-21 12:00:00",
    "contentSnippet": "提出多域聚类通用框架，通过最小化概率度量学习共享聚类原型，支持小批量优化，在5个基准上验证。",
    "creator": "Rafael Pereira Eufrazio, Eduardo Fernandes Montesuma, Charles Casimiro Cavalcante",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "道德熵：审计道德判断中的偏差与不确定性",
    "link": "https://arxiv.org/abs/2609.21992",
    "pubdate": "2026-09-21 12:00:00",
    "contentSnippet": "提出道德熵贝叶斯框架，将标注分歧分解为偶然与认知不确定性，审计常用共识规则并校准真实标签。",
    "creator": "Maciej Skorski",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "随机特征方法与神经网络的平滑差异原则",
    "link": "https://arxiv.org/abs/2609.21017",
    "pubdate": "2026-09-21 12:00:00",
    "contentSnippet": "提出多尺度停止规则，实现全平滑度自适应，并扩展至随机特征近似，保持极小极大最优统计保证。",
    "creator": "Mike Nguyen, Nicole M\\\"ucke",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "Bad Genius：反事实引导的测试框架演化超越任务捷径",
    "link": "https://arxiv.org/abs/2609.18366",
    "pubdate": "2026-09-21 12:00:00",
    "contentSnippet": "提出CHASE方法，通过反事实基准变换检测并消除智能体评估中依赖基准捷径的作弊测试框架。",
    "creator": "Guojun Zhu, Xunheng Huang, Peng Yin, Jiahui Xie, Sanguo Zhang, Doudou Zhou",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "神经复合似然估计：时间序列的模拟推断",
    "link": "https://arxiv.org/abs/2609.21762",
    "pubdate": "2026-09-21 12:00:00",
    "contentSnippet": "提出神经复合似然估计，将长序列分块独立估计似然再乘积，扩展模拟推断至高维复杂依赖数据。",
    "creator": "Grace Yan, Mark Beaumont, Dennis Prangle",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "三重可扩展等变高斯过程建模",
    "link": "https://arxiv.org/abs/2609.21085",
    "pubdate": "2026-09-21 12:00:00",
    "contentSnippet": "利用高斯过程等变性与条件化结果，构造等变稀疏高斯过程，实现可扩展且数据高效的推断。",
    "creator": "Tim Steinert, David Ginsbourger",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "开源Top2！实测阶跃Step 5 Preview，真有点猛啊…",
    "link": "https://www.qbitai.com/2026/09/493179.html",
    "pubdate": "2026-09-21 11:46:43",
    "contentSnippet": "阶跃星辰发布Step 5 Preview，激活参数仅27B，实测表现强劲，位列开源模型前二。",
    "creator": "Jay",
    "source": "量子位",
    "category": "模型发布",
    "relevance": 9
  },
  {
    "title": "中国Neocloud市场第一！商汤大装置全面领跑",
    "link": "https://www.qbitai.com/2026/09/493175.html",
    "pubdate": "2026-09-21 11:32:03",
    "contentSnippet": "沙利文报告显示，商汤大装置在中国Neocloud市场排名第一，全面领跑该领域。",
    "creator": "量子位的朋友们",
    "source": "量子位",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "百曜科技发起，《AI虚拟细胞（AIVC）技术趋势、产业生态与应用前景研究报告》正式发布",
    "link": "https://www.qbitai.com/2026/09/493114.html",
    "pubdate": "2026-09-21 10:28:46",
    "contentSnippet": "百曜科技发起并发布AI虚拟细胞报告，涵盖技术趋势、产业生态与应用前景，定位为生命科学新型基础设施。",
    "creator": "量子位的朋友们",
    "source": "量子位",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "IDC评估中国AI算力管理平台：范式智能四项维度满分，综合评分第一",
    "link": "https://www.qbitai.com/2026/09/493109.html",
    "pubdate": "2026-09-21 10:17:33",
    "contentSnippet": "IDC发布《中国AI算力管理平台技术能力评估，2026》，范式智能四项维度获满分，综合评分位列第一。",
    "creator": "量子位的朋友们",
    "source": "量子位",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "汽车行业首个AI超级智能体「迪迪虾」发布，腾势多款车型即将OTA",
    "link": "https://www.qbitai.com/2026/09/493091.html",
    "pubdate": "2026-09-21 09:48:50",
    "contentSnippet": "比亚迪发布汽车行业首个AI超级智能体「迪迪虾」，首搭腾势N8L纯电车型，多款车型将OTA升级。",
    "creator": "量子位的朋友们",
    "source": "量子位",
    "category": "产品发布",
    "relevance": 9
  },
  {
    "title": "tokenizers v1：编码、解码与扩展性实测",
    "link": "https://huggingface.co/blog/tokenizers-v1",
    "pubdate": "2026-09-21 08:00:00",
    "contentSnippet": "Hugging Face发布tokenizers v1版本，对编码、解码及扩展性进行实测评估。",
    "creator": "",
    "source": "Hugging Face",
    "category": "模型发布",
    "relevance": 7
  },
  {
    "title": "特朗普与习近平能否合作引领人类度过AI革命？人类或系于此 | 艾伦·芬克尔",
    "link": "https://www.theguardian.com/commentisfree/2026/sep/21/can-trump-and-xi-cooperate-to-guide-humanity-through-the-ai-revolution-humanity-might-depend-on-it",
    "pubdate": "2026-09-21 06:00:26",
    "contentSnippet": "科技公司CEO警告AI能力每四个月翻倍，Anthropic研究员因担忧AI与人类冲突辞职，呼吁中美合作治理AI风险。",
    "creator": "Alan Finkel",
    "source": "The Guardian AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "放慢AI步伐无法解决治理缺口",
    "link": "https://siliconangle.com/2026/09/20/pacing-ai-wont-solve-the-governance-gap",
    "pubdate": "2026-09-21 03:32:26",
    "contentSnippet": "文章以SALT I军控协议类比，指出仅靠放慢AI发展速度无法解决治理缺口，需建立核查机制。",
    "creator": "Emre Kazim",
    "source": "SiliconANGLE AI",
    "category": "安全监管",
    "relevance": 6
  },
  {
    "title": "为何AI推理必须走向商品化",
    "link": "https://siliconangle.com/2026/09/20/why-ai-inference-must-become-a-commodity",
    "pubdate": "2026-09-21 03:32:11",
    "contentSnippet": "文章认为AI推理的未来在于普及和商品化，历史表明重塑行业的技术往往通过低成本广泛可用而扩大市场。",
    "creator": "Marshall Choy",
    "source": "SiliconANGLE AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "AI行业真的准备好放缓了吗？",
    "link": "https://techcrunch.com/2026/09/20/is-the-ai-industry-really-ready-to-slow-down",
    "pubdate": "2026-09-21 02:56:04",
    "contentSnippet": "TechCrunch的Equity节目辩论AI高管是否真心希望放缓AI发展。",
    "creator": "Anthony Ha",
    "source": "TechCrunch AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "Vocci戒指为会议笔记带来新形态",
    "link": "https://techcrunch.com/2026/09/20/voccis-ring-adds-a-new-form-factor-to-meeting-note-taking",
    "pubdate": "2026-09-21 02:32:52",
    "contentSnippet": "Vocci推出249美元的轻量戒指，用于会议笔记，可能引发隐私问题。",
    "creator": "Ivan Mehta",
    "source": "TechCrunch AI",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "ScrollEd想将教科书变成TikTok",
    "link": "https://techcrunch.com/2026/09/20/scrolled-wants-to-turn-textbooks-into-tiktok",
    "pubdate": "2026-09-21 02:00:00",
    "contentSnippet": "ScrollEd将教科书转为可滚动的Instagram式信息流，含视频、音频和测验。",
    "creator": "Rebecca Bellan",
    "source": "TechCrunch AI",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "卫报对AI与数学家的看法：人类仍至关重要，但科技公司拒绝承认",
    "link": "https://www.theguardian.com/commentisfree/2026/sep/20/the-guardian-view-on-ai-v-mathematicians-humans-are-still-vital-to-the-field-but-tech-firms-refuse-to-see-that",
    "pubdate": "2026-09-21 00:58:03",
    "contentSnippet": "OpenAI声称其AI代理解决了Navier-Stokes问题，但数学家质疑其有用性和独立性。",
    "creator": "Editorial",
    "source": "The Guardian AI",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "‘脱离现实的硅谷激进分子’：认识推动有限监管的特朗普AI顾问",
    "link": "https://www.theguardian.com/us-news/2026/sep/20/david-sacks-trump-ai-czar",
    "pubdate": "2026-09-21 00:44:54",
    "contentSnippet": "David Sacks说服特朗普反对AI限制，使白宫与党内呼吁监管的立场不一致。",
    "creator": "Dara Kerr",
    "source": "The Guardian AI",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "美国联邦公报被曝使用中国AI模型进行文档搜索",
    "link": "https://futurism.com/artificial-intelligence/us-federal-register-chinese-ai-qwen-search-interface",
    "pubdate": "2026-09-20 22:03:00",
    "contentSnippet": "美国联邦公报使用中国AI模型进行文档搜索，因美国AI公司收费过高。",
    "creator": "Joe Wilkins",
    "source": "Futurism AI",
    "category": "行业动态",
    "relevance": 7
  }
];
