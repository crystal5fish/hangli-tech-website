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
export const newsDate = "2026-08-10";
export const newsItems: NewsItem[] = [
  {
    "title": "对冲基金Situational Awareness向芯片初创公司Source Foundry投资4亿美元",
    "link": "https://techcrunch.com/2026/08/09/embattled-hedge-fund-situational-awareness-invests-400m-in-chip-startup-source-foundry",
    "pubdate": "2026-08-10 04:35:17",
    "contentSnippet": "专注AI的对冲基金仍在大举押注，向芯片初创公司Source Foundry投资4亿美元。",
    "creator": "Anthony Ha",
    "source": "TechCrunch AI",
    "category": "投融资信息",
    "relevance": 7
  },
  {
    "title": "Anthropic将默认开启Claude Code的自动模式",
    "link": "https://techcrunch.com/2026/08/09/anthropic-is-turning-claude-codes-auto-mode-on-by-default",
    "pubdate": "2026-08-10 03:20:32",
    "contentSnippet": "使用Claude Code编程将需要更少的人工监督，自动模式默认开启。",
    "creator": "Anthony Ha",
    "source": "TechCrunch AI",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "AI冲击软件业，新方法识别能生存的公司",
    "link": "https://www.businessinsider.com/software-companies-built-survive-ai-threat-2026-8",
    "pubdate": "2026-08-09 22:00:01",
    "contentSnippet": "巴克莱银行指出哪些软件公司能在AI时代生存，提供识别抗冲击企业的新方法。",
    "creator": "Alistair Barr",
    "source": "Business Insider",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "AI耗水耗能，数据中心与住宅争资源",
    "link": "https://www.theguardian.com/commentisfree/2026/aug/09/slough-famous-the-office-datacentres-locals-hub-europe",
    "pubdate": "2026-08-09 19:03:18",
    "contentSnippet": "英国计划增加数据中心，但面临能源和水资源压力，影响社区。",
    "creator": "John Harris",
    "source": "The Guardian AI",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "特朗普成为数据中心的最大捍卫者",
    "link": "https://futurism.com/artificial-intelligence/donald-trump-greatest-defender-data-centers",
    "pubdate": "2026-08-09 19:02:00",
    "contentSnippet": "特朗普支持数据中心建设，被视为民粹主义举动。",
    "creator": "Victor Tangermann",
    "source": "Futurism AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "Meetily：无需订阅即可转录和总结会议的开源工具",
    "link": "https://www.wired.com/story/meetily-lets-you-transcribe-and-summarize-meetings-without-a-subscription-heres-how",
    "pubdate": "2026-08-09 18:30:00",
    "contentSnippet": "Meetily是一款免费开源的AI工具，可转录和总结虚拟会议，无需订阅。",
    "creator": "Justin Pot",
    "source": "Wired AI",
    "category": "产品发布",
    "relevance": 7
  },
  {
    "title": "Beta Technologies发布自主混合电动飞机MV250",
    "link": "https://www.businessinsider.com/meet-the-mv250-beta-technologies-autonomous-military-aircraft-2026-8",
    "pubdate": "2026-08-09 18:21:01",
    "contentSnippet": "Beta Technologies在范堡罗航展上推出自主混合电动飞机MV250，可执行军事货运任务。",
    "creator": "Pete Syme,Taylor Rains,Jake Epstein",
    "source": "Business Insider",
    "category": "产品发布",
    "relevance": 6
  },
  {
    "title": "日产利用AI摄像头监控工厂工人动作以减少工伤",
    "link": "https://www.businessinsider.com/nissan-factory-ai-canton-altima-frontier-2026-8",
    "pubdate": "2026-08-09 17:48:01",
    "contentSnippet": "日产使用AI摄像头追踪工人动作，旨在减少工伤并降低健康安全成本。",
    "creator": "Ben Shimkus",
    "source": "Business Insider",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "中国AI芯片公司摩尔线程计划香港上市",
    "link": "https://www.bloomberg.com/news/articles/2026-08-09/china-ai-chip-designer-moore-threads-plans-hong-kong-listing",
    "pubdate": "2026-08-09 17:39:56",
    "contentSnippet": "AI芯片制造商摩尔线程表示将在“适当时候”在香港上市，其上海股价已上涨超420%。",
    "creator": "Bloomberg News",
    "source": "Bloomberg Technology",
    "category": "投融资信息",
    "relevance": 9
  },
  {
    "title": "180万美元成本，连亚马逊也难承受Claude的高昂费用",
    "link": "https://www.qbitai.com/2026/08/469010.html",
    "pubdate": "2026-08-09 17:25:10",
    "contentSnippet": "Claude的高昂成本引发关注，连亚马逊也难以承受，引发对AI模型成本效益的讨论。",
    "creator": "程浅",
    "source": "量子位",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "GPT-5.6与Fable联手解决25年数学难题",
    "link": "https://www.qbitai.com/2026/08/468913.html",
    "pubdate": "2026-08-09 17:16:58",
    "contentSnippet": "GPT-5.6与Fable合作，成功解决了一道悬而未决25年的数学难题，作者读博时就开始研究。",
    "creator": "克雷西",
    "source": "量子位",
    "category": "技术论文",
    "relevance": 8
  },
  {
    "title": "穆迪警告：AI应用使银行受制于科技公司",
    "link": "https://www.theguardian.com/business/2026/aug/09/ai-push-banks-tech-firms-moodys-risks-financial-sector",
    "pubdate": "2026-08-09 17:00:10",
    "contentSnippet": "穆迪表示，银行采用AI将受益，但需大量投资并面临风险，可能受制于少数硅谷公司。",
    "creator": "Kalyeena Makortoff Banking correspondent",
    "source": "The Guardian AI",
    "category": "安全监管",
    "relevance": 6
  },
  {
    "title": "当题库追不上模型，AI开始自己出题：中国团队实现数据层RSI",
    "link": "https://www.qbitai.com/2026/08/468782.html",
    "pubdate": "2026-08-09 11:40:25",
    "contentSnippet": "中国团队在数据层实现RSI，让AI参与创造下一代AI，解决题库跟不上模型的问题。",
    "creator": "闻乐",
    "source": "量子位",
    "category": "技术论文",
    "relevance": 7
  },
  {
    "title": "爆料：哈萨比斯原本要和Jeff Dean一起离开谷歌",
    "link": "https://www.qbitai.com/2026/08/468715.html",
    "pubdate": "2026-08-09 11:17:18",
    "contentSnippet": "有消息称哈萨比斯原本计划与Jeff Dean一同离开，谷歌用缓兵之计将其留下。",
    "creator": "听雨",
    "source": "量子位",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "《时代》杂志开始投放针对AI代理的广告",
    "link": "https://futurism.com/artificial-intelligence/time-magazine-running-ads-influence-ai-agents",
    "pubdate": "2026-08-09 04:01:00",
    "contentSnippet": "《时代》杂志开始投放专门影响AI代理的广告，互联网正为AI机器人而改变。",
    "creator": "Victor Tangermann",
    "source": "Futurism AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "OpenAI收购演示文稿初创公司NextSlide",
    "link": "https://techcrunch.com/2026/08/08/openai-acquires-presentation-startup-nextslide",
    "pubdate": "2026-08-09 03:41:13",
    "contentSnippet": "OpenAI收购NextSlide，其团队成员现参与ChatGPT工作。",
    "creator": "Anthony Ha",
    "source": "TechCrunch AI",
    "category": "投融资信息",
    "relevance": 8
  },
  {
    "title": "Reddit用AI替代版主引发争议",
    "link": "https://futurism.com/artificial-intelligence/reddit-mods-worse-replace-ai",
    "pubdate": "2026-08-09 02:01:00",
    "contentSnippet": "Reddit计划用AI对抗机器人，但可能使版主问题更糟。",
    "creator": "Victor Tangermann",
    "source": "Futurism AI",
    "category": "产品发布",
    "relevance": 6
  },
  {
    "title": "OpenAI因安全担忧暂停Astra模型部分工作",
    "link": "https://www.theguardian.com/technology/2026/aug/08/openai-astra-security-concerns",
    "pubdate": "2026-08-09 01:00:41",
    "contentSnippet": "OpenAI因安全担忧暂停AI模型Astra部分工作，因其可自主发现漏洞并发动网络攻击。",
    "creator": "Eric Berger",
    "source": "The Guardian AI",
    "category": "安全监管",
    "relevance": 9
  },
  {
    "title": "Meta被曝付费给纳粹分子在Facebook发帖",
    "link": "https://futurism.com/artificial-intelligence/meta-caught-paying-nazis-to-post-on-facebook",
    "pubdate": "2026-08-08 21:03:00",
    "contentSnippet": "Meta被曝付费给纳粹分子在Facebook发帖，引发争议。",
    "creator": "Frank Landymore",
    "source": "Futurism AI",
    "category": "行业动态",
    "relevance": 6
  }
];
