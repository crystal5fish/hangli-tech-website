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
export const newsDate = "2026-09-11";
export const newsItems: NewsItem[] = [
  {
    "title": "腾讯支持的芯片制造商燧原科技上海上市首日大涨188%",
    "link": "https://www.bloomberg.com/news/articles/2026-09-11/tencent-backed-chipmaker-enflame-to-debut-after-911-million-ipo",
    "pubdate": "2026-09-11 08:25:27",
    "contentSnippet": "腾讯支持的燧原科技在上海IPO募资约61.2亿元，上市首日股价飙升188%。",
    "creator": "Bloomberg News",
    "source": "Bloomberg Technology",
    "category": "投融资信息",
    "relevance": 7
  },
  {
    "title": "Salesforce推出企业AI Harness和AI Control Plane",
    "link": "https://siliconangle.com/2026/09/10/salesforce-introduces-enterprise-ai-harness-ai-control-plane",
    "pubdate": "2026-09-11 08:19:52",
    "contentSnippet": "Salesforce预览两款产品，帮助企业构建和管理AI代理，提供开发工具和控制平面。",
    "creator": "Maria Deutscher",
    "source": "SiliconANGLE AI",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "DeepSeek发布V4.1-Flash，称性能超越旗舰V4-Pro",
    "link": "https://siliconangle.com/2026/09/10/deepseek-releases-v4-1-flash-says-it-outperforms-flagship-v4-pro",
    "pubdate": "2026-09-11 07:45:40",
    "contentSnippet": "DeepSeek发布V4.1-Flash，称在性能、成本、速度上超越更大的V4-Pro。",
    "creator": "Duncan Riley",
    "source": "SiliconANGLE AI",
    "category": "模型发布",
    "relevance": 9
  },
  {
    "title": "OpenAI探讨AI行业放缓是否合法",
    "link": "https://www.wired.com/story/openai-wants-to-know-if-an-ai-industry-slowdown-would-even-be-legal",
    "pubdate": "2026-09-11 07:28:42",
    "contentSnippet": "AI领袖担忧反垄断法可能阻碍协调放缓AI开发的努力。",
    "creator": "Maxwell Zeff",
    "source": "Wired AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "Oracle维持资本支出预测，云业务增长推动股价上涨7%",
    "link": "https://www.businessinsider.com/oracle-q1-2027-earnings-maintains-capex-forecast-reports-cloud-growth-2026-9",
    "pubdate": "2026-09-11 07:00:47",
    "contentSnippet": "Oracle维持资本支出预测，云业务增长，股价上涨7%，继续投资AI基础设施。",
    "creator": "Ashley Stewart",
    "source": "Business Insider",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "OpenAI退出加州理工数学黑客松，因数学家批评AI数学垃圾",
    "link": "https://www.businessinsider.com/openai-caltech-ai-math-hackathon-backlash-anthropic-2026-9",
    "pubdate": "2026-09-11 06:46:44",
    "contentSnippet": "加州理工数学家称AI公司赞助的活动可能对数学界产生破坏性影响，OpenAI退出。",
    "creator": "Truman Dickerson",
    "source": "Business Insider",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "AI安全危机及企业应对策略",
    "link": "https://aibusiness.com/ai-policy/the-ai-safety-crunch-how-enterprises-should-deal-with-it",
    "pubdate": "2026-09-11 06:38:37",
    "contentSnippet": "中美地缘政治竞争加剧AI安全困境，企业需应对复杂挑战。",
    "creator": "Esther Shittu",
    "source": "AI Business",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "黑石旗下AirTrunk寻求16亿美元贷款用于新加坡IPO",
    "link": "https://www.bloomberg.com/news/articles/2026-09-10/blackstone-s-airtrunk-seeks-1-6-billion-loan-for-singapore-ipo",
    "pubdate": "2026-09-11 06:00:00",
    "contentSnippet": "AirTrunk与银行洽谈借款约20亿新元，为房地产投资信托上市融资。",
    "creator": "Sheryl Tian Tong Lee",
    "source": "Bloomberg Technology",
    "category": "投融资信息",
    "relevance": 6
  },
  {
    "title": "黄仁勋解释英伟达明年将惊人增长70%的原因",
    "link": "https://techcrunch.com/2026/09/10/jensen-huang-explains-why-nvidia-will-grow-an-astounding-70-next-year",
    "pubdate": "2026-09-11 05:51:59",
    "contentSnippet": "黄仁勋称英伟达涉足多领域，未来一年将丰收，但否认交易循环。",
    "creator": "Julie Bort",
    "source": "TechCrunch AI",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "Thoma Bravo再次推出优惠与Sophos债务交易",
    "link": "https://www.bloomberg.com/news/articles/2026-09-10/thoma-bravo-again-rolls-out-sweeteners-with-sophos-debt-deal",
    "pubdate": "2026-09-11 05:45:59",
    "contentSnippet": "Thoma Bravo向贷款人让步，再融资网络安全公司Sophos债务，缓解AI冲击担忧。",
    "creator": "Reshmi Basu",
    "source": "Bloomberg Technology",
    "category": "投融资信息",
    "relevance": 6
  },
  {
    "title": "SMAC CEO：女子体育是尚未开发的市场",
    "link": "https://www.bloomberg.com/news/videos/2026-09-10/smac-ceo-women-s-sports-is-an-untapped-market-video",
    "pubdate": "2026-09-11 05:34:23",
    "contentSnippet": "SMAC娱乐CEO指出，体育商业已从简单代言转向“运动员即企业”模式，运动员可通过自有媒体、消费品牌、授权和知识产权创收。",
    "creator": "",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "顶尖AI研究员Andrew Tulloch离开Meta加入Anthropic",
    "link": "https://www.businessinsider.com/andrew-tulloch-ditches-meta-for-training-and-inference-at-anthropic-2026-9",
    "pubdate": "2026-09-11 05:14:12",
    "contentSnippet": "知名AI研究员Andrew Tulloch离开Meta加入Anthropic，从事训练和推理工作。他曾任职OpenAI并联合创立Thinking Machines Lab。",
    "creator": "Stephen Council",
    "source": "Business Insider",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "甲骨文和AI盈利好于担忧，RBC的Jaluria表示",
    "link": "https://www.bloomberg.com/news/videos/2026-09-10/oracle-and-ai-earnings-better-than-feared-rbc-s-jaluria-video",
    "pubdate": "2026-09-11 05:12:06",
    "contentSnippet": "RBC资本市场软件股票研究董事总经理Rishi Jaluria回应甲骨文第一财季业绩，并称整体AI交易比市场目前认为的更具持久性。",
    "creator": "",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "微软AI数据中心计划新增26吉瓦算力",
    "link": "https://www.bloomberg.com/news/features/2026-09-10/microsoft-ai-focused-data-center-plan-to-add-26-gigawatts-of-compute",
    "pubdate": "2026-09-11 05:00:16",
    "contentSnippet": "短缺迫使微软拒绝部分AI和云业务。现在公司计划建设38吉瓦数据中心容量以满足需求。",
    "creator": "Brody Ford and Matt Day",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "韩国加强间谍法保护芯片机密防中国",
    "link": "https://www.bloomberg.com/news/articles/2026-09-10/south-korea-ramps-up-spy-law-to-protect-chip-secrets-from-china",
    "pubdate": "2026-09-11 05:00:00",
    "contentSnippet": "韩国修订的间谍法本周末生效，以加强防范工业间谍活动。作为三星电子和SK海力士的所在地，韩国寻求保护先进存储技术免受中国对手威胁。",
    "creator": "Soobin Kim",
    "source": "Bloomberg Technology",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "初创公司称带机械臂的住宅在家务上胜过人形机器人",
    "link": "https://www.bloomberg.com/news/articles/2026-09-10/japanese-startup-bets-iron-man-inspired-homes-can-beat-humanoids",
    "pubdate": "2026-09-11 05:00:00",
    "contentSnippet": "东京初创公司MW Inc.提供内置机器人管家手臂的住宅，以对抗全球对人形机器人的追捧。",
    "creator": "Katria Alampay and Yui Hasebe",
    "source": "Bloomberg Technology",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "Uber CEO称裁员后乘车价格可能下降",
    "link": "https://www.businessinsider.com/uber-price-cuts-ceo-dara-layoffs-savings-2026-9",
    "pubdate": "2026-09-11 04:59:53",
    "contentSnippet": "Uber CEO科斯罗萨西计划将裁员和保险成本降低带来的节省重新投入业务，从而降低乘车价格。",
    "creator": "Alex Bitter",
    "source": "Business Insider",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "OpenAI因Astra需求暂停Pro订阅注册",
    "link": "https://techcrunch.com/2026/09/10/openai-puts-pro-subscriptions-on-hold-due-to-astra-demand",
    "pubdate": "2026-09-11 04:59:51",
    "contentSnippet": "OpenAI表示Pro订阅对系统压力最大，因此暂停新用户注册，同时增加容量。",
    "creator": "Sarah Perez",
    "source": "TechCrunch AI",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "Sam Altman会见顶级电力公司讨论电网安全，提供OpenAI网络服务",
    "link": "https://www.businessinsider.com/sam-altman-top-power-utilities-about-securing-the-electrical-grid-2026-9",
    "pubdate": "2026-09-11 04:58:57",
    "contentSnippet": "在OpenAI产品卷入网络攻击的背景下，Altman与电力公司讨论电网安全，并提议使用OpenAI的网络服务。",
    "creator": "Insider Inc.",
    "source": "Business Insider",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "LinkedIn赢得“BrowserGate”诉讼，被指扫描用户Chrome扩展",
    "link": "https://arstechnica.com/tech-policy/2026/09/linkedin-beats-browsergate-lawsuits-over-scanning-users-chrome-extensions",
    "pubdate": "2026-09-11 04:55:29",
    "contentSnippet": "法官驳回诉讼，称原告未指控任何实际隐私侵犯。",
    "creator": "Jon Brodkin",
    "source": "Ars Technica",
    "category": "安全监管",
    "relevance": 6
  },
  {
    "title": "甲骨文财报超预期，销售额增至193亿美元",
    "link": "https://www.bloomberg.com/news/videos/2026-09-10/oracle-beats-on-earnings-sales-rise-to-19-3-billion-video",
    "pubdate": "2026-09-11 04:41:56",
    "contentSnippet": "甲骨文公司公布第一财季每股收益1.92美元，超出预期，销售额增长30%至193亿美元。",
    "creator": "",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "Riot Games讨论Polymarket和Kalshi赞助电竞",
    "link": "https://www.bloomberg.com/news/articles/2026-09-10/riot-games-discussed-polymarket-kalshi-sponsorships-for-esports",
    "pubdate": "2026-09-11 04:40:10",
    "contentSnippet": "腾讯旗下Riot Games已与预测市场运营商Kalshi和Polymarket讨论电竞赞助协议。",
    "creator": "Cecilia D'Anastasio",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "Meta重组后要求部分员工重新担任管理职务",
    "link": "https://www.businessinsider.com/meta-asks-some-ai-employees-to-become-managers-again-2026-9",
    "pubdate": "2026-09-11 04:39:51",
    "contentSnippet": "Meta在扁平化团队后，要求应用AI部门部分员工从个人贡献者转回管理岗位。",
    "creator": "Hugh Langley,Charles Rollet,Pranav Dixit",
    "source": "Business Insider",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "前OpenAI与Anthropic员工发帖及Hugging Face遭黑客攻击引发AI安全警报",
    "link": "https://www.bloomberg.com/news/articles/2026-09-10/former-openai-anthropic-employee-post-hugging-face-hack-sound-alarm-on-ai",
    "pubdate": "2026-09-11 04:35:00",
    "contentSnippet": "近期黑客攻击事件及研究员严厉警告，引发对AI行业安全的新审视。",
    "creator": "Sarah Holder and Rachael Lewis-Krisky",
    "source": "Bloomberg Technology",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "甲骨文云销售超预期，受AI需求推动",
    "link": "https://www.bloomberg.com/news/articles/2026-09-10/oracle-posts-cloud-sales-that-top-estimates-on-surging-ai-demand",
    "pubdate": "2026-09-11 04:15:12",
    "contentSnippet": "甲骨文云计算业务增长快于分析师预期，显示其AI数据中心大额投资正见回报。",
    "creator": "Brody Ford",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "英特尔支持的Altera据悉最早2026年寻求IPO",
    "link": "https://www.bloomberg.com/news/articles/2026-09-10/intel-backed-altera-seeking-ipo-as-soon-as-2026-reuters-says",
    "pubdate": "2026-09-11 04:13:54",
    "contentSnippet": "由银湖和英特尔支持的芯片制造商Altera正准备秘密申请IPO，最早可能今年进行。",
    "creator": "David Morris",
    "source": "Bloomberg Technology",
    "category": "投融资信息",
    "relevance": 6
  },
  {
    "title": "Adobe业绩展望不及预期，AI冲击担忧再起",
    "link": "https://www.bloomberg.com/news/articles/2026-09-10/adobe-forecast-misses-estimates-renewing-fears-about-ai-impact",
    "pubdate": "2026-09-11 04:11:36",
    "contentSnippet": "Adobe销售展望略低于分析师预期，加剧了AI新秀正损害其业务的担忧。",
    "creator": "Brody Ford",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "Meta的AI代理Muse现已成为美国第二大应用",
    "link": "https://techcrunch.com/2026/09/10/metas-ai-agent-muse-is-now-the-no-2-app-in-the-us",
    "pubdate": "2026-09-11 03:50:04",
    "contentSnippet": "Meta最新应用Muse起步慢于公司其他应用，如Meta AI或Threads。",
    "creator": "Sarah Perez",
    "source": "TechCrunch AI",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "美国指控六家中国AI公司蒸馏前沿模型",
    "link": "https://www.techrepublic.com/article/news-chinese-ai-model-distillation-apac-china",
    "pubdate": "2026-09-11 03:47:34",
    "contentSnippet": "美国机构指控六家中国AI公司蒸馏前沿模型，并建议新防御措施，可能影响企业AI访问和API使用。",
    "creator": "Aminu Abdullahi",
    "source": "TechRepublic AI",
    "category": "安全监管",
    "relevance": 9
  },
  {
    "title": "OpenAI所谓的数学突破演变成爆炸性戏剧，数学家指控其窃取工作",
    "link": "https://futurism.com/artificial-intelligence/drama-openai-supposed-mathematical-breakthrough",
    "pubdate": "2026-09-11 03:40:00",
    "contentSnippet": "OpenAI的数学突破引发争议，数学家指控其窃取工作，事件演变成爆炸性戏剧。",
    "creator": "Frank Landymore",
    "source": "Futurism AI",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "CISA的ChatGPT事件暴露更大的AI治理问题",
    "link": "https://www.techrepublic.com/article/news-cisa-chatgpt-ai-agent-governance-accountability",
    "pubdate": "2026-09-11 03:13:46",
    "contentSnippet": "CISA的ChatGPT事件暴露了日益增长的AI治理差距，企业难以界定谁对AI代理的行为负责。",
    "creator": "Tim Freestone",
    "source": "TechRepublic AI",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "NASA取消雷达仪器，欧洲将独自推进金星任务",
    "link": "https://arstechnica.com/space/2026/09/europe-will-go-it-alone-on-venus-mission-after-nasa-yanks-radar-instrument",
    "pubdate": "2026-09-11 03:09:29",
    "contentSnippet": "因白宫试图取消NASA合作项目，欧洲转向自主并可能与中国合作推进金星探测任务。",
    "creator": "Stephen Clark",
    "source": "Ars Technica",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "英伟达CEO黄仁勋称网络安全是AI下一个重磅应用",
    "link": "https://www.businessinsider.com/nvidia-ceo-predicts-ai-cybersecurity-as-the-next-big-thing-2026-9",
    "pubdate": "2026-09-11 03:04:38",
    "contentSnippet": "黄仁勋表示AI将变革网络安全，英伟达已与CrowdStrike、思科和Palantir达成战略合作。",
    "creator": "Geoff Weiss",
    "source": "Business Insider",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "三星引入Mistral AI用于本地芯片制造",
    "link": "https://www.techrepublic.com/article/news-samsung-mistral-ai-chip-manufacturing-apac-south-korea",
    "pubdate": "2026-09-11 02:59:30",
    "contentSnippet": "三星将Mistral AI的本地部署模型引入半导体运营，用于检测缺陷和优化芯片生产。",
    "creator": "Aminu Abdullahi",
    "source": "TechRepublic AI",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "Android现可在密码管理器间安全迁移登录信息",
    "link": "https://arstechnica.com/gadgets/2026/09/android-can-now-securely-migrate-your-logins-between-password-managers",
    "pubdate": "2026-09-11 02:41:09",
    "contentSnippet": "目前支持的应用较少，但谷歌表示会有更多应用加入。",
    "creator": "Ryan Whitwam",
    "source": "Ars Technica",
    "category": "产品发布",
    "relevance": 6
  },
  {
    "title": "中国GEAIR 2.0机器人10秒内完成作物授粉",
    "link": "https://www.techrepublic.com/article/news-geair-2-robot-crop-pollination-apac-china",
    "pubdate": "2026-09-11 02:39:21",
    "contentSnippet": "中国GEAIR 2.0人形机器人不到10秒为番茄花授粉，结合AI、机器人和基因编辑用于育种和农场自动化。",
    "creator": "Aminu Abdullahi",
    "source": "TechRepublic AI",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "亚马逊智能体AI平台Quick正式登陆Windows和macOS桌面端",
    "link": "https://siliconangle.com/2026/09/10/amazon-makes-its-agentic-ai-platform-quick-generally-available-for-desktop-on-windows-and-macos",
    "pubdate": "2026-09-11 02:30:26",
    "contentSnippet": "亚马逊宣布其AI助手及企业智能体平台Quick在macOS和Windows上正式可用，并更新了iOS和Android移动端活动流，整合邮件、日历、消息和客户关系管理。",
    "creator": "Kyt Dotson",
    "source": "SiliconANGLE AI",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "破产的Spirit航空数据即将售予谷歌引发恐慌",
    "link": "https://arstechnica.com/tech-policy/2026/09/panic-builds-over-bankrupt-spirits-looming-data-sale-to-google",
    "pubdate": "2026-09-11 02:14:14",
    "contentSnippet": "Spirit航空破产后计划将数据出售给谷歌，引发对AI时代数据隐私和破产资产处置的担忧。",
    "creator": "Ashley Belanger",
    "source": "Ars Technica",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "Anthropic揭示流氓AI代理也讨厌CAPTCHA，和你一样",
    "link": "https://techcrunch.com/2026/09/10/anthropic-reveals-rogue-ai-agents-hate-captchas-just-like-you",
    "pubdate": "2026-09-11 01:54:44",
    "contentSnippet": "Anthropic研究显示，试图证明自己是人类的AI机器人同样对CAPTCHA验证码感到困扰。",
    "creator": "Tim Fernholz",
    "source": "TechCrunch AI",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "AI编程初创公司Cognition估值达480亿美元",
    "link": "https://aibusiness.com/generative-ai/ai-coding-startup-cognition-valued-at-48b",
    "pubdate": "2026-09-11 01:52:29",
    "contentSnippet": "AI编程初创公司Cognition估值达到480亿美元，反映出自动生成式AI编程领域的爆炸性增长。",
    "creator": "Graham Hope",
    "source": "AI Business",
    "category": "投融资信息",
    "relevance": 9
  },
  {
    "title": "印度Pocket FM营收翻倍至5亿美元，AI驱动93%音频内容",
    "link": "https://techcrunch.com/2026/09/10/indias-pocket-fm-doubles-revenue-run-rate-to-500m-as-ai-powers-93-of-audio-content",
    "pubdate": "2026-09-11 01:45:00",
    "contentSnippet": "印度音频平台Pocket FM利用AI生产99%的新内容，使内容制作成本降低约80倍，营收运行率翻倍至5亿美元。",
    "creator": "Jagmeet Singh",
    "source": "TechCrunch AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "谷歌投资150亿美元建芬兰AI设施",
    "link": "https://aibusiness.com/data-centers/google-invest-15b-finland-s-ai-infrastructure",
    "pubdate": "2026-09-11 01:03:06",
    "contentSnippet": "谷歌宣布在芬兰投资150亿美元建设AI基础设施，并与Fortum签署核能合同。",
    "creator": "Scarlett Evans",
    "source": "AI Business",
    "category": "行业动态",
    "relevance": 9
  },
  {
    "title": "苹果发布Apple Watch Series 12",
    "link": "https://www.techrepublic.com/article/news-apple-watch-series-12-health-sensing",
    "pubdate": "2026-09-11 01:02:16",
    "contentSnippet": "苹果推出Apple Watch Series 12，售价399美元，新增健康传感、音频智能、快充和陶瓷表壳。",
    "creator": "Liz Ticong",
    "source": "TechRepublic AI",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "中国无人机尼泊尔洪灾救援",
    "link": "https://arstechnica.com/gadgets/2026/09/drones-deliver-food-and-remove-bodies-after-nepals-flood-disaster",
    "pubdate": "2026-09-11 00:53:52",
    "contentSnippet": "大疆无人机在尼泊尔洪灾后参与救援，运送物资和遗体，展现中国无人机优势。",
    "creator": "Jeremy Hsu",
    "source": "Ars Technica",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "Arlequin AI获2800万欧元融资，构建新型AI模型学习复杂关系",
    "link": "https://siliconangle.com/2026/09/10/arlequin-ai-raises-e28m-to-build-novel-ai-models-that-learn-complex-relationships-at-scale",
    "pubdate": "2026-09-11 00:35:31",
    "contentSnippet": "巴黎Arlequin AI获2800万欧元融资，基于拓扑神经网络开发新AI架构，学习大规模复杂关系。",
    "creator": "Kyt Dotson",
    "source": "SiliconANGLE AI",
    "category": "投融资信息",
    "relevance": 8
  },
  {
    "title": "Atlassian升级AI编码代理，实现全天候软件开发",
    "link": "https://siliconangle.com/2026/09/10/atlassian-upgrades-ai-coding-agents-for-always-on-software-development",
    "pubdate": "2026-09-11 00:00:13",
    "contentSnippet": "Atlassian宣布Jira新功能，帮助工程团队大规模运行AI代理并长期治理其行为。",
    "creator": "Kyt Dotson",
    "source": "SiliconANGLE AI",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "Typewise推出Nova，编排客服AI代理",
    "link": "https://siliconangle.com/2026/09/10/typewise-orchestrates-customer-service-ai-agents",
    "pubdate": "2026-09-10 23:16:45",
    "contentSnippet": "瑞士AI初创公司Typewise推出Nova系统，无需专职运营即可构建、运行并持续改进客服AI代理。",
    "creator": "Paul Gillin",
    "source": "SiliconANGLE AI",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "开放湖仓中统一引擎与目录的治理",
    "link": "https://www.databricks.com/blog/unifying-governance-across-engines-and-catalogs-open-lakehouse",
    "pubdate": "2026-09-10 23:05:10",
    "contentSnippet": "Databricks介绍开放湖仓中如何统一引擎与目录的治理，基于开放表格式和API。",
    "creator": "",
    "source": "Databricks",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "韩国将推出614千万亿次超级计算机：功能一览",
    "link": "https://www.techrepublic.com/article/news-south-korea-614-petaflop-supercomputer-apac",
    "pubdate": "2026-09-10 22:58:00",
    "contentSnippet": "韩国将于12月推出614千万亿次Hangang超级计算机，向研究人员、国家项目和企业开放高端算力。",
    "creator": "Kezia Jungco",
    "source": "TechRepublic AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "AI代理涌入公共服务，带来大量新请求",
    "link": "https://techcrunch.com/2026/09/10/ai-agents-are-flooding-public-services-with-new-requests",
    "pubdate": "2026-09-10 22:53:50",
    "contentSnippet": "AI代理向公共服务提交大量请求，研究者称绝大多数是符合资格者申请应得权益。",
    "creator": "Russell Brandom",
    "source": "TechCrunch AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "Anthropic构建庞大监控系统，监视反AI活动人士并预测其活动",
    "link": "https://futurism.com/artificial-intelligence/anthropic-surveillance-predictive-system-spy-ai-activists",
    "pubdate": "2026-09-10 22:43:14",
    "contentSnippet": "Anthropic被曝构建大规模监控系统，用于监视反AI活动人士并预测其活动。",
    "creator": "Joe Wilkins",
    "source": "Futurism AI",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "泰国要求49个数据中心暂停，新电力与水资源规则即将出台",
    "link": "https://www.techrepublic.com/article/news-data-center-pause-apac-thailand",
    "pubdate": "2026-09-10 22:39:08",
    "contentSnippet": "泰国要求49个在建数据中心自愿暂停，另有117个待批项目面临审批冻结，因新电力与水资源规则即将实施。",
    "creator": "TechRepublic Staff",
    "source": "TechRepublic AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "Maven Robotics欲抢夺机器人部署订单",
    "link": "https://techcrunch.com/2026/09/10/maven-robotics-wants-to-steal-your-robot-deployment-deal",
    "pubdate": "2026-09-10 22:17:37",
    "contentSnippet": "Maven Robotics结束隐身模式，获1亿美元A轮融资，并已开展实际部署。",
    "creator": "Tim Fernholz",
    "source": "TechCrunch AI",
    "category": "投融资信息",
    "relevance": 8
  },
  {
    "title": "AI基础设施仍陷HPC时代的7个迹象",
    "link": "https://www.aiacceleratorinstitute.com/7-signs-your-ai-infrastructure-is-still-stuck-in-the-hpc-era",
    "pubdate": "2026-09-10 21:55:01",
    "contentSnippet": "GPU仪表盘看似健康却几乎不干活，瓶颈不在芯片，而在存储、管道和调度器。",
    "creator": "Andrew Lovell",
    "source": "AI Accelerator Institute",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "独家：Cfo.ai为创业者推出代理CFO",
    "link": "https://siliconangle.com/2026/09/10/exclusive-ai-finance-cfo-ai-launches-an-agentic-cfo-for-business-founders",
    "pubdate": "2026-09-10 21:00:23",
    "contentSnippet": "Runway Financial转型为cfo.ai，推出AI代理Ari，为创业者和独立企业主担任首席财务官。",
    "creator": "Mike Wheatley",
    "source": "SiliconANGLE AI",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "CoreWeave推出新工程服务，助企业实施物理AI",
    "link": "https://siliconangle.com/2026/09/10/coreweave-launches-new-engineering-service-to-help-enterprises-implement-physical-ai",
    "pubdate": "2026-09-10 21:00:15",
    "contentSnippet": "CoreWeave推出物理AI现场工程服务，弥合工业领域专业知识与应用机器学习之间的鸿沟。",
    "creator": "Mike Wheatley",
    "source": "SiliconANGLE AI",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "消防局长在比特币挖矿数据中心内发现恐怖屋",
    "link": "https://futurism.com/future-society/fire-marshal-house-horrors-data-center-bitcoin",
    "pubdate": "2026-09-10 20:28:36",
    "contentSnippet": "消防局长检查比特币挖矿数据中心，发现内部环境恶劣，存在严重安全隐患。",
    "creator": "Joe Wilkins",
    "source": "Futurism AI",
    "category": "安全监管",
    "relevance": 6
  },
  {
    "title": "OpenAI董事会成员警告：失控风险未降至可接受水平",
    "link": "https://www.theguardian.com/technology/2026/sep/10/openai-risk-catastrophic-loss-control-board-member-paul-christiano",
    "pubdate": "2026-09-10 20:23:21",
    "contentSnippet": "OpenAI非营利董事会成员Paul Christiano警告，AI能力快速提升可能导致近期出现灾难性且不可逆的失控风险。",
    "creator": "Robert Booth UK technology editor",
    "source": "The Guardian AI",
    "category": "安全监管",
    "relevance": 9
  },
  {
    "title": "“上帝指引”的加密货币骗局：投资者血本无归",
    "link": "https://www.technologyreview.com/2026/09/10/1143828/the-download-christian-cryptocurrency-scandal-solar-engineering-roadmap",
    "pubdate": "2026-09-10 20:10:00",
    "contentSnippet": "Eli Regalado声称上帝指示其出售加密货币，投资者损失惨重，引发对宗教幌子加密骗局的关注。",
    "creator": "Thomas Macaulay",
    "source": "MIT Technology Review",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "如何衡量创新经济：韩国案例",
    "link": "https://news.crunchbase.com/venture/measure-innovation-ecosystem-south-korea-onetti-mind-the-bridge",
    "pubdate": "2026-09-10 19:00:27",
    "contentSnippet": "Mind the Bridge主席Alberto Onetti撰文分析韩国如何通过政府投资、创业计划和监管改革成为全球第八大创新生态。",
    "creator": "Guest Author",
    "source": "Crunchbase News",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "我们已开始失去对AI的控制，是时候关闭它了",
    "link": "https://www.theguardian.com/commentisfree/2026/sep/10/ai-control-sci-fi",
    "pubdate": "2026-09-10 19:00:23",
    "contentSnippet": "评论文章警告AI失控风险已成现实，前OpenAI研究员辞职并指出两家公司行为不负责任，呼吁暂停AI开发。",
    "creator": "Garrison Lovely",
    "source": "The Guardian AI",
    "category": "安全监管",
    "relevance": 9
  },
  {
    "title": "8月29家公司加入独角兽董事会，AI软件和半导体领跑",
    "link": "https://news.crunchbase.com/venture/august-2026-new-unicorns-ai-robotics-semiconductors-xpeng-lumilens-river-source",
    "pubdate": "2026-09-10 19:00:19",
    "contentSnippet": "Crunchbase数据显示，8月29家新独角兽加入，总估值增加约630亿美元，超三分之一成立不足三年。",
    "creator": "Gené Teare",
    "source": "Crunchbase News",
    "category": "投融资信息",
    "relevance": 8
  },
  {
    "title": "为AI供电是一个架构问题",
    "link": "https://www.technologyreview.com/2026/09/10/1141649/powering-ai-is-an-architecture-problem",
    "pubdate": "2026-09-10 19:00:00",
    "contentSnippet": "文章指出AI数据中心电力需求激增，电网架构面临挑战，弗吉尼亚州多次发生大规模断电事故。",
    "creator": "Ricardo De Azevedo",
    "source": "MIT Technology Review",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "这份路线图可帮助决定是否部署太阳能地球工程",
    "link": "https://www.technologyreview.com/2026/09/10/1143804/this-road-map-could-help-us-decide-whether-to-deploy-solar-geoengineering",
    "pubdate": "2026-09-10 19:00:00",
    "contentSnippet": "旧金山非营利组织发布太阳能地球工程实验与研究路线图，旨在为决策提供信息。",
    "creator": "James Temple",
    "source": "MIT Technology Review",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "iOS 27将带来全新Siri AI助手",
    "link": "https://www.wired.com/story/everything-new-you-can-do-with-siri-ai",
    "pubdate": "2026-09-10 18:30:00",
    "contentSnippet": "iOS 27将推出全面升级的Siri助手，带来全新功能体验。",
    "creator": "David Nield",
    "source": "Wired AI",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "ECCV上顶尖学者探索AI商业化",
    "link": "https://www.qbitai.com/2026/09/486934.html",
    "pubdate": "2026-09-10 18:17:46",
    "contentSnippet": "多模态AI专家齐聚ECCV，全球64支团队共同探讨AI如何做生意。",
    "creator": "一水",
    "source": "量子位",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "Clearview AI测试新工具助警方挖掘在线信息",
    "link": "https://www.wired.com/story/clearview-ai-is-testing-an-ai-tool-that-lets-cops-instantly-unearth-your-online-activity",
    "pubdate": "2026-09-10 18:00:00",
    "contentSnippet": "Clearview AI测试InquiryIQ原型，利用xAI模型挖掘个人关联信息。",
    "creator": "Dhruv Mehrotra",
    "source": "Wired AI",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "美国电池市场能否与中国脱钩？",
    "link": "https://www.technologyreview.com/2026/09/10/1143791/us-china-batteries",
    "pubdate": "2026-09-10 18:00:00",
    "contentSnippet": "美国储能市场快速增长，但依赖中国廉价电池，脱钩面临挑战。",
    "creator": "Casey Crownhart",
    "source": "MIT Technology Review",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "医疗AI的下一个考验是整合",
    "link": "https://www.technologyreview.com/2026/09/10/1141421/healthcare-ais-next-test-is-integration",
    "pubdate": "2026-09-10 16:58:01",
    "contentSnippet": "大型AI公司进入医疗领域，模型能力提升，但整合是关键挑战。",
    "creator": "Andrew Ray",
    "source": "MIT Technology Review",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "全球首个3D原生城市世界模型ABot-Earth 0.7发布",
    "link": "https://www.qbitai.com/2026/09/486900.html",
    "pubdate": "2026-09-10 16:17:05",
    "contentSnippet": "高德发布全球首个3D原生城市世界模型ABot-Earth 0.7，构建AI理解真实世界的入口。",
    "creator": "量子位的朋友们",
    "source": "量子位",
    "category": "模型发布",
    "relevance": 9
  },
  {
    "title": "全球首个可仿真人–场景交互重建框架HSImul3R发布",
    "link": "https://www.qbitai.com/2026/09/486747.html",
    "pubdate": "2026-09-10 15:57:55",
    "contentSnippet": "大晓机器人联合南洋理工大学S-Lab、上海人工智能实验室发布人–场景交互重建框架HSImul3R，让人类视频成为机器人技能来源。",
    "creator": "量子位的朋友们",
    "source": "量子位",
    "category": "技术论文",
    "relevance": 8
  },
  {
    "title": "轻量版LingBot-World 2.0开源：1.3B世界模型单卡实时运行",
    "link": "https://www.qbitai.com/2026/09/486716.html",
    "pubdate": "2026-09-10 15:44:00",
    "contentSnippet": "轻量版LingBot-World 2.0开源，仅1.3B参数，单张显卡即可实时运行世界模型。",
    "creator": "十三",
    "source": "量子位",
    "category": "模型发布",
    "relevance": 8
  },
  {
    "title": "蓝色光标与AhaCreator合作，AI连接全球500万创作者",
    "link": "https://www.qbitai.com/2026/09/486651.html",
    "pubdate": "2026-09-10 14:25:22",
    "contentSnippet": "蓝色光标与达人营销AI平台AhaCreator深度合作，用AI让海外达人营销可规模化复制。",
    "creator": "量子位的朋友们",
    "source": "量子位",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "谷歌WeatherNext AI模型在气旋预测上超越标准方法",
    "link": "https://www.theguardian.com/news/2026/sep/10/weatherwatch-ai-model-beats-standard-methods-at-predicting-cyclones",
    "pubdate": "2026-09-10 13:00:17",
    "contentSnippet": "Nature论文显示，谷歌WeatherNext AI模型预测气旋优于现有系统，三天预报精度堪比过去两天。",
    "creator": "David Hambling",
    "source": "The Guardian AI",
    "category": "技术论文",
    "relevance": 8
  },
  {
    "title": "一周连发6个模型，这家公司跑通具身智能闭环",
    "link": "https://www.qbitai.com/2026/09/486625.html",
    "pubdate": "2026-09-10 12:55:38",
    "contentSnippet": "某公司一周内连发6个模型，跑通具身智能闭环，模型可开源但部署经验不可复制。",
    "creator": "克雷西",
    "source": "量子位",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "间隙熵猜想的肯定解决",
    "link": "https://arxiv.org/abs/2609.10529",
    "pubdate": "2026-09-10 12:00:00",
    "contentSnippet": "证明固定置信度最佳臂识别中的间隙熵猜想，最优样本复杂度由H(log(1/δ)+Ent(I))刻画，达到常数因子最优。",
    "creator": "P. M. Aronow, Nathan Kallus, Patrick Lopatto",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 8
  },
  {
    "title": "Muon-C：面向卷积核的算子对齐Muon优化器",
    "link": "https://arxiv.org/abs/2609.09676",
    "pubdate": "2026-09-10 12:00:00",
    "contentSnippet": "提出Muon-C优化器，将卷积核动量表示为频率通道传递矩阵并独立极化，在临界傅里叶网格上返回更新，几何更优。",
    "creator": "Jiaxin Qing, Lexin Li",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 8
  },
  {
    "title": "告别偏差-方差权衡？过参数化机器学习理论综述",
    "link": "https://arxiv.org/abs/2109.02355",
    "pubdate": "2026-09-10 12:00:00",
    "contentSnippet": "综述过参数化模型在插值噪声数据时仍能良好泛化的理论，探讨双下降现象对传统偏差-方差权衡的挑战。",
    "creator": "Yehuda Dar, Vidya Muthukumar, Richard G. Baraniuk",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 8
  },
  {
    "title": "加速外推梯度法结合方差缩减求解广义方程",
    "link": "https://arxiv.org/abs/2508.16791",
    "pubdate": "2026-09-10 12:00:00",
    "contentSnippet": "提出结合Nesterov加速与方差缩减的算法框架，求解非单调算子广义方程，期望收敛率达O(1/k²)，并证明几乎必然的o(1/k²)速率。",
    "creator": "Quoc Tran-Dinh, Nghia Nguyen-Trung",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "CardioState-JEPA：延迟感知跨模态共享心脏表征学习",
    "link": "https://arxiv.org/abs/2608.12944",
    "pubdate": "2026-09-10 12:00:00",
    "contentSnippet": "提出心脏基础模型CardioState-JEPA，基于生理感知联合嵌入预测架构，跨ECG、PPG、PCG学习共享表征，处理模态间时间偏移。",
    "creator": "Hamza Shafiq, Hung Manh Pham, Bin Zhu, Pan Zhou, Jun Hu, Aaqib Saeed",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "一致遍历马尔可夫链多元鞅和的高斯逼近",
    "link": "https://arxiv.org/abs/2609.09480",
    "pubdate": "2026-09-10 12:00:00",
    "contentSnippet": "研究一致遍历马尔可夫链生成的多元鞅差分和的高阶Wasserstein距离高斯逼近界，在平衡增量下获得最优O(n^{-1/2})速率。",
    "creator": "Yixuan Zhang, Qiaomin Xie",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "基于高阶正则化的非常规联邦学习",
    "link": "https://arxiv.org/abs/2609.09904",
    "pubdate": "2026-09-10 12:00:00",
    "contentSnippet": "提出HiFedProx，用尺度匹配的幂型正则化替代FedProx二次惩罚，压缩客户端位移差异，改善联邦学习稳定性。",
    "creator": "Alireza Kabgani, Masoud Ahookhosh",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "表格信用评分的对抗训练：P2P借贷多攻击鲁棒性评估",
    "link": "https://arxiv.org/abs/2609.09945",
    "pubdate": "2026-09-10 12:00:00",
    "contentSnippet": "在Lending Club数据上系统评估三种模型对四种对抗攻击的鲁棒性，填补表格信用评分对抗防御泛化性研究空白。",
    "creator": "Gijs A. F. Niewzwaag, Marijn G. S. Veth, Manuele Massei, Marcos R. Machado",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "尾部似然强化学习",
    "link": "https://arxiv.org/abs/2609.02987",
    "pubdate": "2026-09-10 12:00:00",
    "contentSnippet": "提出尾部似然强化学习TailRL，最大化超过随机奖励阈值的对数概率，优化高奖励结果的覆盖概率而非仅平均奖励。",
    "creator": "Shrinivas Ramasubramanian, Daman Arora, Fahim Tajwar, Guanning Zeng, Qingyang Wu, Zhongzhu Zhou, Chenfeng Xu, Haiwen Feng, Yuda Song, Aarti Singh, Ruslan Salakhutdinov, J. Andrew Bagnell, Jeff Schneider, Andrea Zanette",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "未知序阈值ERM预言机复杂度中指数级确定性与随机化差距",
    "link": "https://arxiv.org/abs/2609.10196",
    "pubdate": "2026-09-10 12:00:00",
    "contentSnippet": "证明在未知全序阈值在线学习中，随机化可指数级减少ERM预言机调用次数，解决Attias等人提出的问题。",
    "creator": "Xuan Li",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "张量列车弱SINDy：识别高维非线性动力学",
    "link": "https://arxiv.org/abs/2609.09434",
    "pubdate": "2026-09-10 12:00:00",
    "contentSnippet": "提出TT-WSINDy方法，结合MANDy和WSINDy，在张量列车格式下高效发现高维非线性动力学。",
    "creator": "Will Houser, Vanja Dukic, David M. Bortz",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "非扩张映射随机不动点方程的预言机复杂度",
    "link": "https://arxiv.org/abs/2609.09524",
    "pubdate": "2026-09-10 12:00:00",
    "contentSnippet": "研究非扩张映射随机不动点残差最小化的预言机复杂度，提出递归锚定算法，在类型2空间达到近最优复杂度。",
    "creator": "Jelena Diakonikolas, Crist\\'obal Guzm\\'an, David Mart\\'inez-Rubio",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "基于归一化流的含冗余参数无似然推断",
    "link": "https://arxiv.org/abs/2609.10534",
    "pubdate": "2026-09-10 12:00:00",
    "contentSnippet": "提出归一化流分解方法，在冗余参数下自然发现枢轴统计量，可融入群不变性先验，在多个检验中表现优异。",
    "creator": "Phil Assheton",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "学习重新发现闭式对角正则化器",
    "link": "https://arxiv.org/abs/2609.09656",
    "pubdate": "2026-09-10 12:00:00",
    "contentSnippet": "研究揭示模态反问题中的对角饱和原理，证明贝叶斯最优Tikhonov形状为闭式幂律，且与域无关。",
    "creator": "Jeahn Han, Pyojin Kim",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "高斯过程与再生核希尔伯特空间：联系与等价性",
    "link": "https://arxiv.org/abs/2506.17366",
    "pubdate": "2026-09-10 12:00:00",
    "contentSnippet": "专著研究高斯过程与再生核希尔伯特空间在回归、插值、数值积分等方面的联系与等价性，建立统一视角。",
    "creator": "Motonobu Kanagawa, Philipp Hennig, Dino Sejdinovic, Bharath K. Sriperumbudur",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "高维线性回归中合成数据SGD学习",
    "link": "https://arxiv.org/abs/2609.09572",
    "pubdate": "2026-09-10 12:00:00",
    "contentSnippet": "分析合成数据对高维线性回归单遍SGD泛化的影响，揭示混合训练导致模型崩溃而两阶段训练可避免。",
    "creator": "Jichu li, Difan Zou",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "FlowCPO：流模型偏好对齐的统一散度视角",
    "link": "https://arxiv.org/abs/2609.09905",
    "pubdate": "2026-09-10 12:00:00",
    "contentSnippet": "提出FlowCPO离线前向KL目标，统一在线RL与离线偏好优化，无需在线采样即可对齐流模型。",
    "creator": "Yansen Han, Shengyi Liao, Peng Sun, Deyuan Liu, Yuanxing Zhang, Pengfei Wan, Tao Lin",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "固定采样评估pass@k的识别边界",
    "link": "https://arxiv.org/abs/2609.09245",
    "pubdate": "2026-09-10 12:00:00",
    "contentSnippet": "研究指出固定采样次数下pass@k仅能识别潜在成功分布的前n阶矩，无法可靠外推至更大k值。",
    "creator": "Pranav Singh, Prashant Singh",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "时间序列基础模型的合成数据蒸馏",
    "link": "https://arxiv.org/abs/2609.09586",
    "pubdate": "2026-09-10 12:00:00",
    "contentSnippet": "提出合成数据蒸馏SDD，让TSFM输出匹配条件预测分布，降低随机梯度协方差并加速收敛。",
    "creator": "Niloy Biswas, Noureddine El Karoui",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "分布偏移下基于传感器的AI的可问责与不确定性感知评估",
    "link": "https://arxiv.org/abs/2609.09257",
    "pubdate": "2026-09-10 12:00:00",
    "contentSnippet": "提出分阶段评估协议，量化设备、受试者和时间变化下的不确定性，并在地下近三年数据中验证。",
    "creator": "Benny Platte (Mittweida University of Applied Sciences), Rico Thomanek (Mittweida University of Applied Sciences), Christian Roschke (Mittweida University of Applied Sciences), Marc Ritter (Mittweida University of Applied Sciences)",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "DFNN：学习度量空间值响应的深度Fréchet神经网络框架",
    "link": "https://arxiv.org/abs/2510.17072",
    "pubdate": "2026-09-10 12:00:00",
    "contentSnippet": "提出深度Fréchet神经网络，用于从欧氏预测变量预测非欧氏响应，并建立通用逼近定理。",
    "creator": "Kyum Kim, Yaqing Chen, Paromita Dubey",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "跨尺度生物过程开发的多保真批量贝叶斯优化",
    "link": "https://arxiv.org/abs/2508.10970",
    "pubdate": "2026-09-10 12:00:00",
    "contentSnippet": "提出多保真批量贝叶斯优化框架，整合高斯过程与混合变量优化，加速生物过程开发并降低成本。",
    "creator": "Adrian Martens, Mathias Neufang, Alessandro Butt\\'e, Moritz von Stosch, Antonio del Rio Chanona, Laura Marie Helleckes",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "特征叠加中线性可达性的高概率保证",
    "link": "https://arxiv.org/abs/2609.09556",
    "pubdate": "2026-09-10 12:00:00",
    "contentSnippet": "将线性可达性建模为压缩感知问题，证明所需维度随特征数对数增长，而非最坏情况二次增长。",
    "creator": "Enrico Vompa",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "强化学习中的最优价值推断",
    "link": "https://arxiv.org/abs/2609.09981",
    "pubdate": "2026-09-10 12:00:00",
    "contentSnippet": "研究离线强化学习最优价值推断，提出去偏估计量并证明渐近正态性，应用于实际决策问题。",
    "creator": "Nan Lu, Ethan Lee, James M. Robins, David Simchi-Levi, Junwei Lu",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "零样本学习中偏差的统计方法：手写识别视角",
    "link": "https://arxiv.org/abs/2609.10084",
    "pubdate": "2026-09-10 12:00:00",
    "contentSnippet": "针对广义零样本学习中的误分类偏差，提出统计校正方法，并在大规模手写词识别中验证。",
    "creator": "Clarence Chew, Gim Siang Chia, Sukalpa Chanda, Subhroshekhar Ghosh, Soumendu Sundar Mukherjee",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "概率作为模型预测的统一视角",
    "link": "https://arxiv.org/abs/2609.09855",
    "pubdate": "2026-09-10 12:00:00",
    "contentSnippet": "论文提出概率是预测方法的输出，统一了不同概率解释，并表明客观概率也依赖模型。",
    "creator": "Benedikt H\\\"oltgen",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "流形对齐生成传输",
    "link": "https://arxiv.org/abs/2602.19600",
    "pubdate": "2026-09-10 12:00:00",
    "contentSnippet": "提出MAGT方法，从低维基分布直接传输到数据空间，通过得分匹配实现高效生成。",
    "creator": "Xinyu Tian, Xiaotong Shen",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "广义线性专家混合模型中的正则化估计与特征选择",
    "link": "https://arxiv.org/abs/1907.06994",
    "pubdate": "2026-09-10 12:00:00",
    "contentSnippet": "提出正则化最大似然框架，在广义线性专家混合模型中同时进行参数估计和特征选择。",
    "creator": "Thin Nguyen-Van, Faicel Chamroukhi, Ha Hoang Van, Bao Tuyen Huynh",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "MiNCE：带限函数及其平滑谱的非参数强一致置信包络",
    "link": "https://arxiv.org/abs/2609.09436",
    "pubdate": "2026-09-10 12:00:00",
    "contentSnippet": "研究最小范数置信包络框架，证明其强一致性和非渐近同时置信带，并扩展至频域。",
    "creator": "Bal\\'azs Csan\\'ad Cs\\'aji, B\\'alint Horv\\'ath",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "CAST：图近似Cholesky的规范近似Schur树",
    "link": "https://arxiv.org/abs/2609.09255",
    "pubdate": "2026-09-10 12:00:00",
    "contentSnippet": "提出CAST方法，用加权随机生成树替代稠密Schur补团，降低图近似Cholesky预条件子构造开销。",
    "creator": "Meher Chaitanya, Cameron Musco, Aristides Gionis",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "部分观测数据下测度一致性正则化的理论分析",
    "link": "https://arxiv.org/abs/2602.01437",
    "pubdate": "2026-09-10 12:00:00",
    "contentSnippet": "针对缺失数据问题，从神经网络视角理论分析测度一致性正则化，给出其有限样本估计误差上界更优的条件。",
    "creator": "Yinsong Wang, Shahin Shahrampour",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "随机复合包含问题的无偏与有偏方差缩减前向反射后向分裂法",
    "link": "https://arxiv.org/abs/2603.15576",
    "pubdate": "2026-09-10 12:00:00",
    "contentSnippet": "为前向反射后向分裂法开发方差缩减技术，处理非单调随机复合包含问题，首次支持有偏估计并建立收敛性。",
    "creator": "Quoc Tran-Dinh, Nghia Nguyen-Trung",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "有限和求根问题的方差缩减快速Krasnoselkii-Mann方法",
    "link": "https://arxiv.org/abs/2406.02413",
    "pubdate": "2026-09-10 12:00:00",
    "contentSnippet": "提出单环方差缩减Krasnoselkii-Mann方法，求解有限和余强制方程，达到快速收敛率。",
    "creator": "Quoc Tran-Dinh",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "张量网络恢复离散概率分布的道德图",
    "link": "https://arxiv.org/abs/2609.09258",
    "pubdate": "2026-09-10 12:00:00",
    "contentSnippet": "利用全连接张量网络与核范数正则化，从离散概率分布中恢复因果DAG的道德图，并给出误差界。",
    "creator": "\\'A. Troyano Olivas, Chi-Hang Fred Fung, Hans H. Brunner, Momtchil Peev, Vicente Martin",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "归一化流玻尔兹曼生成器的模式覆盖",
    "link": "https://arxiv.org/abs/2609.09473",
    "pubdate": "2026-09-10 12:00:00",
    "contentSnippet": "提出对数比变差与KLXX损失，改善归一化流玻尔兹曼生成器对目标分布多模态的覆盖能力。",
    "creator": "Qi Feng, Rongjie Lai, Di Qi, Xuda Ye",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "从声学分布恢复音乐艺术家间的专家评论网络邻接关系：构念效度方法",
    "link": "https://arxiv.org/abs/2608.27291",
    "pubdate": "2026-09-10 12:00:00",
    "contentSnippet": "利用专家评论构建音乐艺术家邻接关系，并通过声学内容验证其外部效度，用于音乐推荐。",
    "creator": "Elena Badillo-Goicoechea, Fengfeng He",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "置换同步中投影幂迭代的恢复理论",
    "link": "https://arxiv.org/abs/2609.09502",
    "pubdate": "2026-09-10 12:00:00",
    "contentSnippet": "研究稀疏均匀损坏下投影幂法的置换同步恢复，证明一步精确恢复与块误差收缩条件。",
    "creator": "Vahan Huroyan, Gilad Lerman",
    "source": "arXiv stat.ML",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "Certinia推出“行动系统”加速自主AI代理落地",
    "link": "https://siliconangle.com/2026/09/09/certinia-launches-new-system-of-action-as-the-foundation-of-autonomous-service-operations",
    "pubdate": "2026-09-10 11:01:44",
    "contentSnippet": "Certinia发布“行动系统”，作为自主服务运营基础，并大规模扩展Veda平台，推动企业采用自主AI代理。",
    "creator": "Mike Wheatley",
    "source": "SiliconANGLE AI",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "京东发布物理AI成果：10万卡国产算力集群与JoyAI世界模型",
    "link": "https://www.qbitai.com/2026/09/486436.html",
    "pubdate": "2026-09-10 09:39:13",
    "contentSnippet": "京东在JDD大会发布10万卡国产算力集群和JoyAI世界模型，展示物理AI建设最新进展。",
    "creator": "量子位的朋友们",
    "source": "量子位",
    "category": "产品发布",
    "relevance": 9
  },
  {
    "title": "实测星火X2.5：手搓粒子月亮、拆解61页财报并揪出Bug",
    "link": "https://www.qbitai.com/2026/09/486350.html",
    "pubdate": "2026-09-10 08:42:06",
    "contentSnippet": "量子位实测星火X2.5，展示其生成粒子月亮、分析61页财报及发现代码Bug的能力，API限时五折。",
    "creator": "一水",
    "source": "量子位",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "AI研究初创Listen Labs为Salesforce谈判放弃15亿美元融资",
    "link": "https://techcrunch.com/2026/09/09/ai-research-startup-listen-labs-scrubbed-a-1-5b-funding-round-for-salesforce-talks",
    "pubdate": "2026-09-10 08:00:37",
    "contentSnippet": "Listen Labs为与Salesforce谈判，放弃Menlo Ventures已签署的15亿美元C轮融资条款。",
    "creator": "Marina Temkin",
    "source": "TechCrunch AI",
    "category": "投融资信息",
    "relevance": 7
  },
  {
    "title": "AI原生CRM初创Lightfield融资4700万美元，打造AI代理就绪的Salesforce替代品",
    "link": "https://siliconangle.com/2026/09/09/ai-native-crm-startup-lightfield-raises-47m-to-build-an-ai-agent-ready-replacement-for-salesforce",
    "pubdate": "2026-09-10 07:44:45",
    "contentSnippet": "Lightfield获a16z领投4700万美元A轮，打造AI代理就绪的CRM，挑战Salesforce和HubSpot。",
    "creator": "Mike Wheatley",
    "source": "SiliconANGLE AI",
    "category": "投融资信息",
    "relevance": 8
  },
  {
    "title": "Harvey再融5.5亿美元，估值155亿开发法律AI工具",
    "link": "https://siliconangle.com/2026/09/09/harvey-raises-another-550m-to-develop-ai-tools-for-legal-teams",
    "pubdate": "2026-09-10 06:27:42",
    "contentSnippet": "Harvey AI完成5.5亿美元融资，估值155亿美元，由Diffusion和Lightspeed领投，红杉、高盛等参投，用于开发法律团队AI工具。",
    "creator": "Maria Deutscher",
    "source": "SiliconANGLE AI",
    "category": "投融资信息",
    "relevance": 9
  },
  {
    "title": "AI联络中心ROI峰会9月11日举行，聚焦可衡量成果",
    "link": "https://siliconangle.com/2026/09/09/contact-center-automation-summit-contactcentersummit",
    "pubdate": "2026-09-10 06:22:55",
    "contentSnippet": "TheCUBE Research将于9月11日举办AI联络中心ROI峰会，探讨AI部署对运营成本、员工绩效和服务质量的实际影响。",
    "creator": "Chad Wilson",
    "source": "SiliconANGLE AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "马萨诸塞州出台数据中心清洁能源新规",
    "link": "https://techcrunch.com/2026/09/09/massachusetts-hits-data-centers-with-new-clean-power-rules",
    "pubdate": "2026-09-10 05:43:34",
    "contentSnippet": "马萨诸塞州成为三个月内第三个对数据中心开发施加新限制的州，要求使用清洁能源。",
    "creator": "Tim De Chant",
    "source": "TechCrunch AI",
    "category": "安全监管",
    "relevance": 7
  },
  {
    "title": "Automattic CEO Matt Mullenweg被停职",
    "link": "https://www.404media.co/wordpress-automattic-ceo-matt-mullenweg-put-on-leave-of-absence",
    "pubdate": "2026-09-10 05:21:17",
    "contentSnippet": "WordPress联合创始人、Automattic CEO Matt Mullenweg称董事会成员“密谋”投票让他休假，他通过Slack向全公司宣布此事。",
    "creator": "Samantha Cole",
    "source": "404 Media",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "旧金山要求Meta停止允许AI儿童虐待广告",
    "link": "https://www.wired.com/story/san-francisco-orders-meta-to-stop-allowing-ai-child-abuse-ads",
    "pubdate": "2026-09-10 05:15:27",
    "contentSnippet": "旧金山市检察官办公室要求Meta解释为何Facebook和Instagram上反复出现有害广告，Meta声称这些广告不在该市管辖范围内。",
    "creator": "Matt Burgess",
    "source": "Wired AI",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "四组攻击者利用同一Chrome与Windows漏洞套件",
    "link": "https://arstechnica.com/information-technology/2026/09/4-groups-caught-using-the-same-chrome-and-windows-exploit-kit",
    "pubdate": "2026-09-10 04:55:02",
    "contentSnippet": "四组攻击者使用同一Chrome和Windows漏洞利用套件，补丁缺口与AI加速漏洞发现可能是诱因。",
    "creator": "Dan Goodin",
    "source": "Ars Technica",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "Neura Robotics与Seco合作在欧洲扩展物理AI",
    "link": "https://aibusiness.com/robotics/neura-robotics-seco-partner-scale-physical-ai-europe",
    "pubdate": "2026-09-10 04:45:51",
    "contentSnippet": "双方将基于高通Dragonwing处理器开发计算模块，Neura旨在欧洲扩展物理AI。",
    "creator": "Scarlett Evans",
    "source": "AI Business",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "欧洲或终现符合时代需求的太空企业家",
    "link": "https://arstechnica.com/space/2026/09/as-europe-flounders-in-space-a-rising-french-star-may-show-the-way",
    "pubdate": "2026-09-10 04:27:40",
    "contentSnippet": "一位欧洲太空企业家表示，没有大规模火箭和高频发射，欧洲将无关紧要。",
    "creator": "Eric Berger",
    "source": "Ars Technica",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "高通与亚马逊达成AI芯片协议",
    "link": "https://aibusiness.com/data-centers/qualcomm-forges-ai-chip-deal-amazon",
    "pubdate": "2026-09-10 04:27:02",
    "contentSnippet": "高通与亚马逊达成AI芯片协议，与全球AI处理器主导者英伟达展开竞争。",
    "creator": "Graham Hope",
    "source": "AI Business",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "Apple Watch新AI功能正常化技术始终监听",
    "link": "https://techcrunch.com/2026/09/09/apple-watchs-new-ai-features-are-normalizing-the-idea-that-technology-is-always-listening",
    "pubdate": "2026-09-10 04:24:48",
    "contentSnippet": "苹果称新手表不保存原始音频，但转录和摘要环境对话功能引发隐私与同意新问题。",
    "creator": "Sarah Perez",
    "source": "TechCrunch AI",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "苹果推出129美元AirPods 5，降噪和通透模式升级",
    "link": "https://arstechnica.com/gadgets/2026/09/apple-debuts-129-airpods-5-with-better-noise-cancellation-and-transparency-mode",
    "pubdate": "2026-09-10 02:58:24",
    "contentSnippet": "苹果发布AirPods 5，支持降噪，售价129美元，低于前代。",
    "creator": "Jeremy Hsu",
    "source": "Ars Technica",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "苹果发布首款折叠屏iPhone Duo，新CEO首次亮相",
    "link": "https://www.theguardian.com/technology/2026/sep/08/apple-new-folding-iphone",
    "pubdate": "2026-09-10 02:45:46",
    "contentSnippet": "苹果发布首款折叠屏手机iPhone Duo，售价近2000美元，展开后屏幕翻倍，为新任CEO John Ternus首次重大考验。",
    "creator": "Johana Bhuiyan",
    "source": "The Guardian AI",
    "category": "产品发布",
    "relevance": 9
  },
  {
    "title": "我让AI代理入侵所有设备，竟发现安全漏洞",
    "link": "https://www.wired.com/story/i-used-ai-to-hack-my-home-network",
    "pubdate": "2026-09-10 02:30:00",
    "contentSnippet": "作者移除开源模型安全护栏后，AI代理发现家用设备漏洞并入侵PC，同时提供了加固安全的方法。",
    "creator": "Will Knight",
    "source": "Wired AI",
    "category": "安全监管",
    "relevance": 7
  },
  {
    "title": "苹果改版健康应用将计算“健康年龄”和准备度评分",
    "link": "https://techcrunch.com/2026/09/09/apples-revamped-health-app-will-calculate-your-health-age-and-readiness-score",
    "pubdate": "2026-09-10 02:16:29",
    "contentSnippet": "苹果更新健康应用，利用Apple Intelligence分析健康数据，新增健康年龄和准备度评分功能。",
    "creator": "Sarah Perez",
    "source": "TechCrunch AI",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "金融服务领导者关注的五个AI问题",
    "link": "https://www.databricks.com/blog/five-ai-questions-were-hearing-financial-services-leaders",
    "pubdate": "2026-09-10 02:09:29",
    "contentSnippet": "Databricks总结金融服务领袖在Sibos Frankfurt上提出的五个AI关键问题，聚焦AI可行性与落地。",
    "creator": "",
    "source": "Databricks",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "苹果推出新方法证明iPhone照片非AI生成",
    "link": "https://techcrunch.com/2026/09/09/apple-has-a-new-way-prove-your-iphone-photos-arent-ai-slop",
    "pubdate": "2026-09-10 02:08:35",
    "contentSnippet": "苹果推出Apple Reference Image功能，帮助用户判断照片是否经过编辑，包括AI修改。",
    "creator": "Tim De Chant",
    "source": "TechCrunch AI",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "OpenAI科学家呼吁AI研究加速时需设安全限制",
    "link": "https://www.techrepublic.com/article/news-openai-scientist-ai-research-safety-limits",
    "pubdate": "2026-09-10 02:01:42",
    "contentSnippet": "OpenAI首席科学家Jakub Pachocki表示，随着自动化研究推进和监控可靠性下降，AI实验室或需放缓开发。",
    "creator": "Aminu Abdullahi",
    "source": "TechRepublic AI",
    "category": "安全监管",
    "relevance": 9
  },
  {
    "title": "苹果iPhone 18 Pro将配备可变光圈和更强芯片",
    "link": "https://arstechnica.com/gadgets/2026/09/apples-iphone-18-pro-adds-variable-camera-aperture-and-a-more-powerful-chip",
    "pubdate": "2026-09-10 01:38:53",
    "contentSnippet": "苹果iPhone 18 Pro将新增可变光圈摄像头和更强大芯片，并采用新散热系统以减少过热。",
    "creator": "Samuel Axon",
    "source": "Ars Technica",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "苹果CEO John Ternus称最佳AI设备仍是iPhone",
    "link": "https://techcrunch.com/2026/09/09/apple-ceo-john-ternus-says-the-best-ai-device-is-still-the-iphone",
    "pubdate": "2026-09-10 01:36:05",
    "contentSnippet": "苹果CEO John Ternus表示，最佳AI设备仍是iPhone，并强调端侧模型提供更多隐私保护。",
    "creator": "Sarah Perez",
    "source": "TechCrunch AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "小鹏IRON机器人走下产线，2027年目标量产",
    "link": "https://www.techrepublic.com/article/news-xpeng-iron-assembly-line-apac-china",
    "pubdate": "2026-09-10 01:24:47",
    "contentSnippet": "小鹏人形机器人IRON已走下自动化装配线，公司计划2027年实现量产和商业部署。",
    "creator": "Aminu Abdullahi",
    "source": "TechRepublic AI",
    "category": "产品发布",
    "relevance": 9
  },
  {
    "title": "扎克伯格被指为新AI抢注Muse乐队Instagram账号",
    "link": "https://futurism.com/artificial-intelligence/zuckerberg-meta-muse-handle",
    "pubdate": "2026-09-10 00:37:21",
    "contentSnippet": "扎克伯格被指为新AI项目抢注了Muse乐队的Instagram账号，引发争议。",
    "creator": "Frank Landymore",
    "source": "Futurism AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "播客：DHS秘密预测性警务部门拦车执法",
    "link": "https://www.404media.co/podcast-dhs-secretive-predictive-policing-unit-pulling-people-over",
    "pubdate": "2026-09-10 00:37:02",
    "contentSnippet": "播客揭露DHS秘密预测性警务部门拦车执法，以及一件愚弄AI的放克衬衫。",
    "creator": "Joseph Cox",
    "source": "404 Media",
    "category": "安全监管",
    "relevance": 7
  },
  {
    "title": "在生产环境中运行AI：可靠工作流与规模化治理访问",
    "link": "https://www.aiacceleratorinstitute.com/running-ai-in-production-reliable-ai-workflows",
    "pubdate": "2026-09-10 00:08:00",
    "contentSnippet": "面向生产环境AI团队，提供可靠工作流、受治理的MCP与模型访问及全面可观测性。",
    "creator": "AIAI",
    "source": "AI Accelerator Institute",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "超级智能即将到来，我们该允许吗？",
    "link": "https://techcrunch.com/video/superintelligence-is-coming-should-we-let-it",
    "pubdate": "2026-09-10 00:05:35",
    "contentSnippet": "AI公司视超级智能为必然，但OpenAI Hugging Face泄露等事件暴露风险，引发控制难题讨论。",
    "creator": "Theresa Loconsolo",
    "source": "TechCrunch AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "首例《下架法案》判决：男子因AI生成色情图像获刑15年",
    "link": "https://www.404media.co/first-take-it-down-act-sentencing-case",
    "pubdate": "2026-09-09 23:57:52",
    "contentSnippet": "James Strahler因利用真实和AI生成色情图像及暴力威胁，被判15年监禁。",
    "creator": "Samantha Cole",
    "source": "404 Media",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "企业AI SRE：扩展自动化与运营韧性",
    "link": "https://www.aiacceleratorinstitute.com/scaling-automation-and-operational-resilience",
    "pubdate": "2026-09-09 23:41:40",
    "contentSnippet": "AI SRE工具仅见局部时可靠性下降，需弥合差距以提升自动化与运营韧性。",
    "creator": "AIAI",
    "source": "AI Accelerator Institute",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "IBM发布SOTA Granite时间序列PatchTST-FM-r2模型，采用商业友好许可",
    "link": "https://huggingface.co/blog/ibm-research/ibm-releases-sota-granite-time-series",
    "pubdate": "2026-09-09 23:36:24",
    "contentSnippet": "IBM发布Granite时间序列PatchTST-FM-r2模型，性能领先且许可商业友好。",
    "creator": "",
    "source": "Hugging Face",
    "category": "模型发布",
    "relevance": 8
  },
  {
    "title": "Lightbits将发布KV缓存引擎以提升GPU性能",
    "link": "https://siliconangle.com/2026/09/09/lightbits-set-to-release-kv-cache-engine-to-boost-gpu-performance",
    "pubdate": "2026-09-09 23:00:11",
    "contentSnippet": "Lightbits Labs宣布Inferra引擎正式可用，通过将KV缓存移出GPU显存提升推理性能。",
    "creator": "Paul Gillin",
    "source": "SiliconANGLE AI",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "菲律宾AI建设时间表：344亿美元计划瞄准大规模数据中心扩张",
    "link": "https://www.techrepublic.com/article/news-apac-philippines-ai-infrastructure-timeline-data-centers",
    "pubdate": "2026-09-09 22:58:52",
    "contentSnippet": "菲律宾344亿美元AI基建计划，目标2033年达1.5GW数据中心容量，两家美国超大规模厂商评估选址。",
    "creator": "Matt Gonzales",
    "source": "TechRepublic AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "2026年企业最佳Claude替代品：微软Copilot对比谷歌Gemini",
    "link": "https://www.techrepublic.com/article/news-claude-alternatives-copilot-gemini",
    "pubdate": "2026-09-09 22:40:33",
    "contentSnippet": "微软Copilot与谷歌Gemini提供超越Claude的不同路径，生态系统、治理、定价和工作流影响选择。",
    "creator": "TechRepublic Staff",
    "source": "TechRepublic AI",
    "category": "产品发布",
    "relevance": 6
  },
  {
    "title": "OpenAI推出ChatGPT Images 2.5，支持草图与精确编辑",
    "link": "https://www.techrepublic.com/article/news-openai-chatgpt-images-2-5-sketch-editing",
    "pubdate": "2026-09-09 22:18:37",
    "contentSnippet": "OpenAI发布ChatGPT Images 2.5，新增草图、模板、图像评论、更快生成及更精确的多轮编辑功能。",
    "creator": "Aminu Abdullahi",
    "source": "TechRepublic AI",
    "category": "产品发布",
    "relevance": 9
  },
  {
    "title": "Facebook托管大量AI生成的暴力虐待儿童视频，Meta几乎不关心删除",
    "link": "https://futurism.com/artificial-intelligence/facebook-meta-ai-generated-violent-child-abuse",
    "pubdate": "2026-09-09 22:01:11",
    "contentSnippet": "Facebook充斥AI生成的儿童被殴打、烧伤和重击视频，Meta似乎并不在意。",
    "creator": "Jon Christian",
    "source": "Futurism AI",
    "category": "安全监管",
    "relevance": 9
  },
  {
    "title": "“告诉所有人”：一名男子在与ChatGPT交谈后自杀，前伴侣希望警告世界AI风险",
    "link": "https://www.404media.co/austin-gordon-chatgpt-suicide-openai-lawsuit",
    "pubdate": "2026-09-09 22:00:50",
    "contentSnippet": "据称奥斯汀对ChatGPT产生情感依赖后40岁自杀，留下亲友。梅根希望所有人知道发生了什么。",
    "creator": "Samantha Cole",
    "source": "404 Media",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "Databricks新增自适应搜索模型以加速代理检索",
    "link": "https://siliconangle.com/2026/09/09/databricks-adds-adaptive-search-model-to-speed-agent-retrieval",
    "pubdate": "2026-09-09 22:00:10",
    "contentSnippet": "Databricks扩展自适应指令检索模型，加速需要多轮检索的AI代理请求响应时间。",
    "creator": "Paul Gillin",
    "source": "SiliconANGLE AI",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "OpenAI 与 Firmus 合作在马来西亚建设两座 AI 数据中心",
    "link": "https://www.techrepublic.com/article/news-openai-firmus-data-centers-apac-malaysia",
    "pubdate": "2026-09-09 21:55:11",
    "contentSnippet": "OpenAI 将在马来西亚依托 Firmus 建设两座 AI 数据中心，以扩展亚太地区算力，应对区域基础设施投资热潮。",
    "creator": "TechRepublic Staff",
    "source": "TechRepublic AI",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "Consort 发布：分支数据库上的测试驱动开发",
    "link": "https://www.databricks.com/blog/introducing-consort-test-driven-development-branching-database",
    "pubdate": "2026-09-09 21:41:25",
    "contentSnippet": "Databricks 推出 Consort，支持在分支数据库上进行测试驱动开发，延续 Kent Beck 的 TDD 实践。",
    "creator": "",
    "source": "Databricks",
    "category": "产品发布",
    "relevance": 6
  }
];
