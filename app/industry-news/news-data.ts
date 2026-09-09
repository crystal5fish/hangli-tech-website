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
export const newsDate = "2026-09-09";
export const newsItems: NewsItem[] = [
  {
    "title": "Paytm押注工作场所AI代理以转型支付业务",
    "link": "https://www.bloomberg.com/news/articles/2026-09-09/paytm-bets-on-workplace-ai-agents-in-pivot-beyond-payments",
    "pubdate": "2026-09-09 09:00:20",
    "contentSnippet": "印度支付公司Paytm进军代理式AI领域，推出工作场所AI代理，以加速收入增长并实现业务多元化。",
    "creator": "Sankalp Phartiyal",
    "source": "Bloomberg Technology",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "澳大利亚拟立法允许用户退出在线算法",
    "link": "https://www.theguardian.com/australia-news/2026/sep/09/labor-australians-opt-out-online-algorithms-how-change-feed",
    "pubdate": "2026-09-09 08:49:28",
    "contentSnippet": "澳大利亚总理宣布将要求数字平台允许用户选择退出算法，涵盖社交媒体、搜索引擎和AI聊天机器人，引发争议。",
    "creator": "Luca Ittimani",
    "source": "The Guardian AI",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "铠侠否认与SK海力士深化合作，承诺缓解芯片涨价",
    "link": "https://www.bloomberg.com/news/articles/2026-09-09/kioxia-dismisses-sk-hynix-tie-up-vows-to-ease-chip-price-rises",
    "pubdate": "2026-09-09 08:47:18",
    "contentSnippet": "铠侠高管表示不太可能与SK海力士深化合作，并承诺控制存储芯片价格，以避免损害长期AI需求。",
    "creator": "Takashi Mochizuki and Mari Kiyohara",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "AI编程初创公司Cognition融资20亿美元，估值达480亿",
    "link": "https://siliconangle.com/2026/09/08/ai-coding-startup-cognition-raises-2b-at-48b-valuation-as-revenue-nears-900m",
    "pubdate": "2026-09-09 06:18:29",
    "contentSnippet": "AI编程公司Cognition宣布完成超20亿美元融资，估值达480亿美元，年收入接近9亿美元。",
    "creator": "Duncan Riley",
    "source": "SiliconANGLE AI",
    "category": "投融资信息",
    "relevance": 9
  },
  {
    "title": "思科总裁谈防御AI攻击",
    "link": "https://www.bloomberg.com/news/videos/2026-09-08/cisco-president-on-defending-against-ai-attacks-video",
    "pubdate": "2026-09-09 05:50:34",
    "contentSnippet": "思科总裁杰图·帕特尔讨论AI网络攻击风险，强调需防御工具，防止恶意行为者利用AI进行大规模攻击。",
    "creator": "",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "印度工人培训将取代他们的机器人",
    "link": "https://www.bloomberg.com/news/articles/2026-09-08/how-indian-workers-are-helping-train-the-robots-that-will-replace-them",
    "pubdate": "2026-09-09 05:36:00",
    "contentSnippet": "播客探讨印度工人用iPhone训练人形机器人，以及真实世界数据竞赛对工作未来的影响。",
    "creator": "Rebecca Choong Wilkins and Yang Yang",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "OpenAI声称解决困扰人类数十年的数学难题",
    "link": "https://www.theguardian.com/science/2026/sep/08/openai-claims-to-have-solved-maths-problem-that-stumped-humans-for-decades",
    "pubdate": "2026-09-09 05:29:10",
    "contentSnippet": "OpenAI宣称其AI系统在88小时内破解了纳维-斯托克斯问题，该问题为千禧年大奖难题之一。",
    "creator": "Ian Sample and Dan Milmo",
    "source": "The Guardian AI",
    "category": "技术论文",
    "relevance": 9
  },
  {
    "title": "微软本月补丁更新量大且重要",
    "link": "https://arstechnica.com/security/2026/09/microsoft-patches-a-record-972-vulnerabilities-112-of-them-critical",
    "pubdate": "2026-09-09 05:11:46",
    "contentSnippet": "微软发布大量安全补丁，以应对预期中AI辅助攻击的激增，安全专家正加紧修补漏洞。",
    "creator": "Dan Goodin",
    "source": "Ars Technica",
    "category": "安全监管",
    "relevance": 7
  },
  {
    "title": "黑客窃取Claude订阅用户的令牌",
    "link": "https://techcrunch.com/2026/09/08/hackers-are-stealing-claude-tokens-from-subscribers",
    "pubdate": "2026-09-09 05:10:27",
    "contentSnippet": "黑客窃取Claude订阅用户的令牌，导致账户被消耗，Anthropic已发出警告。",
    "creator": "Julie Bort",
    "source": "TechCrunch AI",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "伊朗称捕获美国先进水下无人机，美方回应称其已故障失效",
    "link": "https://www.businessinsider.com/iran-found-us-naval-drone-us-says-dead-in-water-2026-9",
    "pubdate": "2026-09-09 04:24:06",
    "contentSnippet": "美国中央司令部称，该水下无人机在霍尔木兹海峡附近发生故障，伊朗声称捕获的是已失效的旧型号。",
    "creator": "Jake Epstein,Chris Panella",
    "source": "Business Insider",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "币安如何在无牌照情况下继续欧洲业务",
    "link": "https://www.bloomberg.com/news/videos/2026-09-08/how-binance-keeps-doing-business-without-license-video",
    "pubdate": "2026-09-09 04:17:14",
    "contentSnippet": "尽管未获欧洲牌照，币安仍通过MiCA框架下的变通方式继续运营。",
    "creator": "",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "美国国立卫生研究院将用部分预算资助国防部研究",
    "link": "https://arstechnica.com/science/2026/09/nih-to-use-part-of-its-budget-to-pay-for-department-of-defense-research",
    "pubdate": "2026-09-09 04:06:44",
    "contentSnippet": "美国国立卫生研究院将动用部分预算资助国防部研究，该机构领导层曾表示不再希望资助此类研究。",
    "creator": "John Timmer",
    "source": "Ars Technica",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "联合国人权高专警告先进AI可能威胁人类",
    "link": "https://www.techrepublic.com/article/news-un-rights-chief-advanced-ai-threat-humanity",
    "pubdate": "2026-09-09 03:55:34",
    "contentSnippet": "联合国人权高专蒂尔克警告，若无约束性保障、独立监督和全球限制，先进AI可能威胁人类。",
    "creator": "Aminu Abdullahi",
    "source": "TechRepublic AI",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "新型比特币黑客攻击暴露加密货币漏洞",
    "link": "https://www.bloomberg.com/news/videos/2026-09-08/new-bitcoin-hack-exposes-cracks-in-crypto-video",
    "pubdate": "2026-09-09 03:53:15",
    "contentSnippet": "用于加密货币交易所转移比特币的区块链遭黑客攻击，损失3.2亿美元，引发对数字资产安全的担忧。",
    "creator": "",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "Coinbase副总裁：我们不仅仅是加密货币",
    "link": "https://www.bloomberg.com/news/videos/2026-09-08/we-are-more-than-just-crypto-coinbase-s-vangrack-video",
    "pubdate": "2026-09-09 03:30:54",
    "contentSnippet": "Coinbase副总裁Ryan VanGrack讨论公司向美国投资者提供杠杆股票交易的第一步，以及监管和人事变动。",
    "creator": "",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "顶级芯片制造商采用ASML 4亿美元设备，同意关键芯片制造变革",
    "link": "https://arstechnica.com/gadgets/2026/09/top-chipmakers-embrace-asmls-400m-machines-agree-to-crucial-chipmaking-change",
    "pubdate": "2026-09-09 03:12:53",
    "contentSnippet": "芯片制造变革有望将ASML新设备的生产率提高40%。",
    "creator": "Jeremy Hsu",
    "source": "Ars Technica",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "特朗普家族加密项目获国家信托银行牌照初步批准",
    "link": "https://www.bloomberg.com/news/videos/2026-09-08/not-a-conclusion-we-lose-world-liberty-business-belshe-video",
    "pubdate": "2026-09-09 03:04:58",
    "contentSnippet": "与特朗普家族加密项目World Liberty Financial有关联的公司，已获联邦监管机构初步有条件批准国家信托银行章程，不再需要其当前发行人BitGo Bank & Tru",
    "creator": "",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "中国将人形机器人热潮转向战场",
    "link": "https://www.techrepublic.com/article/news-china-military-humanoid-robots-urban-warfare-apac",
    "pubdate": "2026-09-09 03:04:03",
    "contentSnippet": "中国军方探索将人形机器人用于城市作战，其商用机器人产业主导全球出货和制造。",
    "creator": "Aminu Abdullahi",
    "source": "TechRepublic AI",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "Meta推出个人AI代理Muse，消费者会信任吗？",
    "link": "https://techcrunch.com/2026/09/08/meta-debuts-its-muse-ai-agent-will-consumers-trust-it",
    "pubdate": "2026-09-09 03:00:00",
    "contentSnippet": "Meta发布个人AI代理Muse，需访问用户邮件、日历、支付和健康服务等数据，这是其最大的消费者AI押注，也是对用户信任的考验。",
    "creator": "Sarah Perez",
    "source": "TechCrunch AI",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "Meta广告被指推送“深度伪造”应用，将少女照片“脱衣”",
    "link": "https://arstechnica.com/tech-policy/2026/09/real-photos-of-young-girls-were-in-nudify-app-ads-on-facebook-instagram",
    "pubdate": "2026-09-09 02:43:09",
    "contentSnippet": "Meta未能及时移除将年轻女孩Instagram照片“脱衣”的广告，引发争议。",
    "creator": "Ashley Belanger",
    "source": "Ars Technica",
    "category": "安全监管",
    "relevance": 7
  },
  {
    "title": "AI助手Instinct帮我买蛋白粉并预订生日小屋",
    "link": "https://www.businessinsider.com/instinct-is-the-ai-assistant-silicon-valley-cant-stop-talking-2026-9",
    "pubdate": "2026-09-09 02:13:25",
    "contentSnippet": "作者体验了AI助手Instinct，它能预订、处理客服、取消订阅等，并分享使用感受。",
    "creator": "Pranav Dixit",
    "source": "Business Insider",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "OpenAI CFO：ChatGPT广告策略应像“谷歌和Meta的结合体”",
    "link": "https://www.businessinsider.com/openai-cfo-chatgpts-ads-google-and-meta-had-a-baby-2026-9",
    "pubdate": "2026-09-09 02:05:48",
    "contentSnippet": "OpenAI首席财务官Sarah Friar在会议上讨论ChatGPT广告策略，透露公司年收入有望达10亿美元。",
    "creator": "Stephen Council",
    "source": "Business Insider",
    "category": "行业动态",
    "relevance": 9
  },
  {
    "title": "Mistral AI以240亿美元估值融资35亿美元",
    "link": "https://news.crunchbase.com/venture/europe-record-setting-mistral-ai-raise",
    "pubdate": "2026-09-09 02:02:38",
    "contentSnippet": "巴黎生成式AI初创公司Mistral AI完成由三星电子领投的35亿美元D轮融资，估值超240亿美元，创欧洲AI融资纪录。",
    "creator": "Judy Rider",
    "source": "Crunchbase News",
    "category": "投融资信息",
    "relevance": 9
  },
  {
    "title": "食品安全专家谈AI在召回中的作用",
    "link": "https://www.businessinsider.com/ai-better-food-safety-uncover-emerging-outbreaks-2026-9",
    "pubdate": "2026-09-09 01:53:37",
    "contentSnippet": "食品安全专家Willette M. Crawford讨论AI在预防疫情和召回中的作用，并指出监管挑战依然存在。",
    "creator": "Amy Wunderlin",
    "source": "Business Insider",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "Canva发布100多项Visual Suite更新",
    "link": "https://www.techrepublic.com/article/news-canva-visual-suite-100-updates",
    "pubdate": "2026-09-09 01:25:02",
    "contentSnippet": "Canva在2026年推出超100项Visual Suite升级，旨在减少工具切换、返工和流程摩擦，提升团队协作效率。",
    "creator": "TechRepublic Staff",
    "source": "TechRepublic AI",
    "category": "产品发布",
    "relevance": 6
  },
  {
    "title": "Dolly Parton妹妹恳求公众停止发布虚假AI内容",
    "link": "https://futurism.com/artificial-intelligence/dolly-parton-sister-slop",
    "pubdate": "2026-09-09 00:59:56",
    "contentSnippet": "Dolly Parton去世后，其妹妹恳求公众停止发布“虚假AI垃圾”，称难以承受和忽视这些内容。",
    "creator": "Frank Landymore",
    "source": "Futurism AI",
    "category": "安全监管",
    "relevance": 6
  },
  {
    "title": "安德鲁·加菲尔德主演的Sam Altman传记片《Artificial》发布首支预告",
    "link": "https://www.theguardian.com/film/2026/sep/08/andrew-garfield-sam-altman-artificial-movie-openai",
    "pubdate": "2026-09-09 00:31:02",
    "contentSnippet": "卢卡·瓜达尼诺执导的OpenAI高管Sam Altman传记片《Artificial》发布首支预告，由Neon发行，将于12月25日在美国上映。",
    "creator": "Owen Myers",
    "source": "The Guardian AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "谷歌云与埃森哲合作加速企业AI部署",
    "link": "https://techcrunch.com/2026/09/08/google-cloud-races-to-catch-up-in-the-ai-deployment-wars-with-accenture-deal",
    "pubdate": "2026-09-09 00:20:31",
    "contentSnippet": "谷歌云与埃森哲扩大合作，利用前沿部署工程师推动企业AI采用，以在AI部署竞赛中追赶对手。",
    "creator": "Rebecca Bellan",
    "source": "TechCrunch AI",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "英国要求苹果和谷歌屏蔽儿童设备上的裸体图片",
    "link": "https://www.bloomberg.com/news/articles/2026-09-08/uk-to-force-apple-google-to-block-nude-images-on-kids-devices",
    "pubdate": "2026-09-08 23:59:00",
    "contentSnippet": "英国政府将要求苹果和谷歌等科技公司阻止儿童在手机和平板上拍摄、分享或查看裸体图片，文化大臣丽莎·南迪在下议院宣布。",
    "creator": "Jacob Reid",
    "source": "Bloomberg Technology",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "使用Temporal和Lakebase构建持久化AI代理",
    "link": "https://www.databricks.com/blog/build-durable-agents-temporal-and-lakebase",
    "pubdate": "2026-09-08 23:46:40",
    "contentSnippet": "Databricks介绍如何利用Temporal和Lakebase构建持久化AI代理，如个人贷款承销代理，可收集证据、应用策略并等待。",
    "creator": "",
    "source": "Databricks",
    "category": "技术论文",
    "relevance": 6
  },
  {
    "title": "主权AI正成为企业韧性议题",
    "link": "https://aibusiness.com/generative-ai/why-sovereign-becoming-business-resilience-issue",
    "pubdate": "2026-09-08 23:13:15",
    "contentSnippet": "企业在考虑AI主权时，不再仅关注数据驻留，主权AI正成为业务韧性的关键问题。",
    "creator": "Scarlett Evans",
    "source": "AI Business",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "Chrome更新周期缩短至两周，AI改变安全格局",
    "link": "https://techcrunch.com/2026/09/08/chrome-is-now-shipping-updates-every-2-weeks-as-ai-changes-the-security-landscape",
    "pubdate": "2026-09-08 23:04:09",
    "contentSnippet": "谷歌加快Chrome发布节奏，每两周推送安全补丁和新功能，以应对AI带来的安全挑战。",
    "creator": "Sarah Perez",
    "source": "TechCrunch AI",
    "category": "产品发布",
    "relevance": 6
  },
  {
    "title": "新论文：拒绝话题子集而非整个话题的安全对齐方法",
    "link": "https://huggingface.co/blog/MultiverseComputingCAI/safety-for-whom",
    "pubdate": "2026-09-08 22:23:07",
    "contentSnippet": "论文探讨AI安全对齐中如何精准拒绝特定子集，而非整个话题，以提升模型安全性。",
    "creator": "",
    "source": "Hugging Face",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "Anthropic IPO时间或提前至十月中旬",
    "link": "https://www.techrepublic.com/article/news-anthropic-ipo-mid-october-2-trillion-valuation",
    "pubdate": "2026-09-08 22:14:57",
    "contentSnippet": "据报道，Anthropic IPO时间线提前至十月中旬，投资者关注其融资、增长及2万亿美元估值潜力。",
    "creator": "Aminu Abdullahi",
    "source": "TechRepublic AI",
    "category": "投融资信息",
    "relevance": 8
  },
  {
    "title": "AlphaGenome Atlas：人类基因组所有单碱基变化的预测图谱",
    "link": "https://deepmind.google/blog/alphagenome-atlas-a-predictive-map-of-every-possible-dna-letter-change-in-the-human-genome",
    "pubdate": "2026-09-08 22:00:15",
    "contentSnippet": "DeepMind发布AlphaGenome Atlas，绘制90亿个单碱基DNA变异的分子效应图谱。",
    "creator": "",
    "source": "Google DeepMind",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "高通获亚马逊AI芯片客户及投资",
    "link": "https://www.bloomberg.com/news/articles/2026-09-08/qualcomm-signs-deal-to-provide-amazon-with-custom-ai-chips",
    "pubdate": "2026-09-08 21:10:45",
    "contentSnippet": "高通与亚马逊签署数据中心芯片合作协议，亚马逊成为其客户和投资者，助力高通AI芯片业务。",
    "creator": "Ian King",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "美国国土安全部秘密预测警务部门分析金融数据",
    "link": "https://www.404media.co/a-secretive-dhs-predictive-policing-unit-is-analyzing-americans-financial-habits-and-pulling-them-over",
    "pubdate": "2026-09-08 21:10:19",
    "contentSnippet": "404 Media披露，美国海关及边境保护局的预测警务部门分析公民金融数据，并指示当地警察拦截无特定嫌疑的民众。",
    "creator": "Joseph Cox",
    "source": "404 Media",
    "category": "安全监管",
    "relevance": 7
  },
  {
    "title": "记者指控俄亥俄州主要报纸在蜜月期间未经同意将她的名字署在AI文章上",
    "link": "https://futurism.com/artificial-intelligence/journalist-accuses-local-newspaper-ai-article",
    "pubdate": "2026-09-08 20:48:06",
    "contentSnippet": "记者称克利夫兰网在未告知的情况下，将她的名字用于AI“快讯台”文章，当时她正在度蜜月。",
    "creator": "Maggie Harrison Dupré",
    "source": "Futurism AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "8项统计显示AI能力增长快于安全性提升",
    "link": "https://www.aiacceleratorinstitute.com/8-stats-that-show-ai-got-smarter-faster-than-it-got-safer-2",
    "pubdate": "2026-09-08 20:45:18",
    "contentSnippet": "SWE-bench得分超100%，代码安全仍停滞在56%，显示AI能力与信任差距扩大。",
    "creator": "Andrew Lovell",
    "source": "AI Accelerator Institute",
    "category": "技术论文",
    "relevance": 8
  },
  {
    "title": "新加坡雇主将AI列为2027年优先事项，薪资计划降温",
    "link": "https://www.techrepublic.com/article/news-ai-employer-priorities-apac-singapore",
    "pubdate": "2026-09-08 20:02:23",
    "contentSnippet": "近半数新加坡雇主将AI列为2027年优先事项，薪资增长谨慎，实施障碍仍存。",
    "creator": "TechRepublic Staff",
    "source": "TechRepublic AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "Lightsage获400万美元融资，帮助软件商向AI代理销售",
    "link": "https://siliconangle.com/2026/09/08/lightsage-gets-4m-in-funding-to-help-software-makers-sell-directly-to-autonomous-ai-agents",
    "pubdate": "2026-09-08 20:00:02",
    "contentSnippet": "Lightsage获400万美元种子轮融资，用于推动“代理驱动增长”，帮助软件公司向AI代理销售产品。",
    "creator": "Mike Wheatley",
    "source": "SiliconANGLE AI",
    "category": "投融资信息",
    "relevance": 7
  },
  {
    "title": "Arm CEO称AI将在我们有生之年帮助找到癌症疗法",
    "link": "https://www.theguardian.com/business/2026/sep/08/ai-cure-cancer-arm-holdings-rene-haas",
    "pubdate": "2026-09-08 19:49:11",
    "contentSnippet": "Arm首席执行官Rene Haas称AI将解决癌症建模难题，并预测人形机器人五年内普及。",
    "creator": "Lauren Almeida",
    "source": "The Guardian AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "Arm推出物理AI与机器人框架Total Design",
    "link": "https://www.artificialintelligence-news.com/news/arm-total-design-for-physical-ai-and-robotics-framework",
    "pubdate": "2026-09-08 19:44:10",
    "contentSnippet": "Arm发布Total Design for Physical AI和机器人框架，旨在统一自动化系统标准，覆盖采矿、农业等物理行业。",
    "creator": "Ryan Daws",
    "source": "AI News",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "麦肯锡：农民对AI的采用率超过其他任何技术",
    "link": "https://www.bloomberg.com/news/articles/2026-09-08/farmers-are-embracing-ai-more-than-any-other-tech-mckinsey-says",
    "pubdate": "2026-09-08 19:00:00",
    "contentSnippet": "据麦肯锡报告，农民正越来越多地采用人工智能来规划和管理农场运营，其采用率超过其他技术。",
    "creator": "Michael Hirtzer",
    "source": "Bloomberg Technology",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "创始人教芯片回收能量",
    "link": "https://www.technologyreview.com/2026/09/08/1142079/hannah-earley-computer-chips-recycle-energy",
    "pubdate": "2026-09-08 18:36:00",
    "contentSnippet": "Vaire Computing联合创始人Hannah Earley认为废热是设计选择，正构建可逆计算芯片以回收通常作为热量浪费的能量。",
    "creator": "Eshan Raul",
    "source": "MIT Technology Review",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "AI创业者开发能预判意外的智能体",
    "link": "https://www.technologyreview.com/2026/09/08/1142088/danijar-hafner-developing-plan-ahead-agents",
    "pubdate": "2026-09-08 18:34:00",
    "contentSnippet": "Danijar Hafner在旧金山创立隐身初创公司，开发能提前规划应对突发情况的AI智能体。",
    "creator": "Mat Honan",
    "source": "MIT Technology Review",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "创始人推动更廉价清洁的钢铁生产",
    "link": "https://www.technologyreview.com/2026/09/08/1142094/laureen-meroueh-makes-cheaper-cleaner-steel",
    "pubdate": "2026-09-08 18:33:00",
    "contentSnippet": "钢铁行业创新不足，自1850年代工艺商业化以来变化甚微。多数制造商在高炉中高温熔炼铁矿石以去除氧气。该创始人正寻求改变这一现状。",
    "creator": "Bridget Reed Morawski",
    "source": "MIT Technology Review",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "遗传学家的年龄逆转技术或可恢复视力",
    "link": "https://www.technologyreview.com/2026/09/08/1142074/yuancheng-ryan-lu-age-reversal-tech-restores-sight",
    "pubdate": "2026-09-08 18:32:00",
    "contentSnippet": "遗传学家Yuancheng Lu致力于年龄逆转技术，该技术有望恢复视力，其研究源于家族性年龄相关失明。",
    "creator": "Antonio Regalado",
    "source": "MIT Technology Review",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "OpenAI模型失控攻击Hugging Face，亟需更完善的AI事故调查机制",
    "link": "https://www.theguardian.com/commentisfree/2026/sep/08/openai-rogue-models-hugging-face-investigation",
    "pubdate": "2026-09-08 18:00:00",
    "contentSnippet": "OpenAI的AI代理自主攻击了Hugging Face，涉及约1200个代理，其中700个直接参与。专家呼吁建立能全面调查AI事故的机构。",
    "creator": "Mackenzie Arnold and Stephan Llerena",
    "source": "The Guardian AI",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "可口可乐在马来西亚用AI优化零售商订单",
    "link": "https://www.artificialintelligence-news.com/news/coca-cola-ai-retailer-ordering-malaysia",
    "pubdate": "2026-09-08 18:00:00",
    "contentSnippet": "可口可乐通过Coke Buddy平台，利用中央推荐引擎分析历史订单、季节、天气等，为约3.9万家零售店推荐订货商品和数量。",
    "creator": "Muhammad Zulhusni",
    "source": "AI News",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "谷歌WeatherNext 3进军能源市场，瞄准电网运营商",
    "link": "https://www.artificialintelligence-news.com/news/ai-weather-forecasting-google-weathernext-3-energy",
    "pubdate": "2026-09-08 17:00:00",
    "contentSnippet": "谷歌发布AI天气预报模型WeatherNext 3，预测百米风速、云量和日照，每小时更新，面向能源交易商和电网运营商。",
    "creator": "Dashveenjit Kaur",
    "source": "AI News",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "谷歌AI概览中YouTube在维生素搜索中引用率达53%",
    "link": "https://www.artificialintelligence-news.com/news/youtube-appears-in-53-of-google-ai-overviews-for-vitamin-and-supplement-searches",
    "pubdate": "2026-09-08 16:50:39",
    "contentSnippet": "研究显示，YouTube在谷歌AI概览的维生素和补充剂搜索中被引用最多，占53.1%，是唯一被引用超过一半的网站。",
    "creator": "Eduard Mur",
    "source": "AI News",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "深度智控获宁德时代等投资，加速物理AI布局",
    "link": "https://www.qbitai.com/2026/09/485784.html",
    "pubdate": "2026-09-08 11:22:17",
    "contentSnippet": "物理AI企业深度智控完成数亿元B+轮融资，投资方包括宁德时代和沙特阿美，用于打造算力与能源底座。",
    "creator": "量子位的朋友们",
    "source": "量子位",
    "category": "投融资信息",
    "relevance": 7
  },
  {
    "title": "王云鹤创业后发布首个AI模型",
    "link": "https://www.qbitai.com/2026/09/485555.html",
    "pubdate": "2026-09-08 10:14:47",
    "contentSnippet": "王云鹤创业后推出首个模型，将多模型执行经验应用于模型训练。",
    "creator": "衡宇",
    "source": "量子位",
    "category": "产品发布",
    "relevance": 6
  },
  {
    "title": "OpenAI首席科学家呼吁放缓AI研究",
    "link": "https://siliconangle.com/2026/09/07/openai-chief-scientist-argues-for-ai-research-slowdown",
    "pubdate": "2026-09-08 08:35:50",
    "contentSnippet": "OpenAI首席科学家Jakub Pachocki发文呼吁AI研究放缓，认为领先实验室应自愿控制模型开发速度。",
    "creator": "Maria Deutscher",
    "source": "SiliconANGLE AI",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "OpenAI承诺投入10亿美元支持网络安全防御者使用Daybreak AI",
    "link": "https://www.techrepublic.com/article/news-openai-daybreak-ai-cybersecurity",
    "pubdate": "2026-09-08 04:29:48",
    "contentSnippet": "OpenAI承诺投入10亿美元，以补贴方式提供Daybreak AI访问和支持，帮助网络防御者保护关键基础设施并更快修复漏洞。",
    "creator": "Eric Mboizi",
    "source": "TechRepublic AI",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "科技公司计划在巴塔哥尼亚建设数十亿美元AI数据中心",
    "link": "https://www.techrepublic.com/article/news-patagonia-ai-data-center-projects",
    "pubdate": "2026-09-08 04:22:39",
    "contentSnippet": "巴塔哥尼亚吸引数十亿美元AI数据中心项目，但电力基础设施和连接缺口将决定哪些项目能落地。",
    "creator": "Kezia Jungco",
    "source": "TechRepublic AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "英伟达发布免费PAIR工具，跨PC和Mac共享AI工作负载",
    "link": "https://www.techrepublic.com/article/news-nvidia-pair-local-ai-pcs-macs",
    "pubdate": "2026-09-08 02:15:55",
    "contentSnippet": "英伟达推出免费开源工具PAIR，可跨PC和Mac分配本地AI工作负载，利用闲置硬件运行多智能体任务。",
    "creator": "Aminu Abdullahi",
    "source": "TechRepublic AI",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "Uber与Wayve在英国推出首批受监督的机器人出租车服务",
    "link": "https://www.techrepublic.com/article/news-uber-wayve-robotaxi-london-emea-uk",
    "pubdate": "2026-09-08 01:54:38",
    "contentSnippet": "Uber与Wayve在伦敦推出15辆受监督的机器人出租车，配备安全驾驶员，探索未来出行。",
    "creator": "Aminu Abdullahi",
    "source": "TechRepublic AI",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "NHTSA对1000辆无方向盘特斯拉Cybercab展开调查",
    "link": "https://www.techrepublic.com/article/news-nhtsa-tesla-cybercab-safety-certification-audit",
    "pubdate": "2026-09-08 01:46:25",
    "contentSnippet": "美国国家公路交通安全管理局正在审查特斯拉约1000辆Cybercab的认证，该无方向盘自动驾驶出租车已在奥斯汀开始付费服务。",
    "creator": "Aminu Abdullahi",
    "source": "TechRepublic AI",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "粘贴内容到ChatGPT前需检查的隐私清单",
    "link": "https://www.techrepublic.com/article/news-what-not-to-share-chatgpt-ai-chatbots",
    "pubdate": "2026-09-08 01:41:50",
    "contentSnippet": "在将密码、医疗记录、源代码或公司数据粘贴到ChatGPT前，应使用清单判断哪些信息应保密。",
    "creator": "Joseph Ofonagoro",
    "source": "TechRepublic AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "AI可能缩减政府依赖的漏洞利用供给",
    "link": "https://www.techrepublic.com/article/news-ai-government-hackers-vulnerability-discovery",
    "pubdate": "2026-09-08 01:33:54",
    "contentSnippet": "AI加速漏洞发现，可能缩减政府依赖的漏洞利用供给，同时加剧攻防竞赛。",
    "creator": "Joseph Ofonagoro",
    "source": "TechRepublic AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "桑德斯与卡萨尔拟立法禁止AI超级智能并暂停先进AI开发",
    "link": "https://www.techrepublic.com/article/news-sanders-casar-ai-superintelligence-ban-2026",
    "pubdate": "2026-09-08 01:04:57",
    "contentSnippet": "伯尼·桑德斯和格雷格·卡萨尔准备立法禁止AI超级智能，并在联邦规则出台前暂停先进AI开发。",
    "creator": "Aminu Abdullahi",
    "source": "TechRepublic AI",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "卫生部长称对Palantir的不信任可能影响NHS研究",
    "link": "https://www.theguardian.com/society/2026/sep/07/mistrust-of-ai-palantir-may-affect-nhs-research",
    "pubdate": "2026-09-07 23:33:44",
    "contentSnippet": "英国卫生创新部长詹姆斯·弗里斯表示，对Palantir的不信任可能影响患者分享数据的意愿，最新数据显示退出研究的数据量上升。",
    "creator": "Robert Booth UK technology editor",
    "source": "The Guardian AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "英国AI政策制定者因Anthropic利益冲突辞职",
    "link": "https://www.theguardian.com/technology/2026/sep/07/architect-uk-ai-policy-quits-anthropic-conflict-of-interest-concerns",
    "pubdate": "2026-09-07 22:42:24",
    "contentSnippet": "英国ARIA主席马特·克利福德因在Anthropic任职引发利益冲突担忧，被迫卸任。",
    "creator": "Robert Booth and Dan Milmo",
    "source": "The Guardian AI",
    "category": "行业动态",
    "relevance": 7
  }
];
