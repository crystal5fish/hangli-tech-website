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
export const newsDate = "2026-08-17";
export const newsItems: NewsItem[] = [
  {
    "title": "Stripe敲定超70亿美元收购AI公司OpenRouter",
    "link": "https://www.bloomberg.com/news/articles/2026-08-16/stripe-nears-deal-to-buy-ai-firm-openrouter-for-over-7-billion",
    "pubdate": "2026-08-17 03:32:41",
    "contentSnippet": "据知情人士透露，Stripe已敲定以超过70亿美元收购OpenRouter，该公司帮助企业在AI模型间切换。",
    "creator": "Yazhou Sun, Natasha Mascarenhas and Paige Smith",
    "source": "Bloomberg Technology",
    "category": "投融资信息",
    "relevance": 8
  },
  {
    "title": "卫报观点：AI改变面试世界，缺失人性因素",
    "link": "https://www.theguardian.com/commentisfree/2026/aug/16/the-guardian-view-on-the-changed-world-of-job-interviews-missing-the-human-factor",
    "pubdate": "2026-08-17 01:30:31",
    "contentSnippet": "英国近半数求职者面对AI机器人面试，引发对人性化招聘的担忧。",
    "creator": "Editorial",
    "source": "The Guardian AI",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "专家警告AI垃圾内容腐蚀儿童大脑",
    "link": "https://futurism.com/artificial-intelligence/experts-gnet-ai-fruit-slop-corrupting-violence-extremism",
    "pubdate": "2026-08-17 01:02:00",
    "contentSnippet": "专家指出暴力AI垃圾内容强化儿童对暴力的迷恋。",
    "creator": "Joe Wilkins",
    "source": "Futurism AI",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "Anthropic CEO：AI赢得公众信任需治愈癌症",
    "link": "https://www.businessinsider.com/anthropic-ceo-dario-amodei-ai-public-opinion-cure-cancer-2026-8",
    "pubdate": "2026-08-17 00:30:38",
    "contentSnippet": "Dario Amodei承认公众不信任AI，认为AI公司过度承诺，需实际成果。",
    "creator": "Truman Dickerson",
    "source": "Business Insider",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "年轻人对AI CEO的厌恶令人难以置信",
    "link": "https://futurism.com/artificial-intelligence/young-people-ai-ceos-executives-poll",
    "pubdate": "2026-08-17 00:03:00",
    "contentSnippet": "年轻人对AI CEO的厌恶甚至超过对数据中心的厌恶。",
    "creator": "Joe Wilkins",
    "source": "Futurism AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "Facebook充斥伊斯兰恐惧症AI生成内容，呼吁对穆斯林美国人施暴",
    "link": "https://futurism.com/artificial-intelligence/facebook-ai-slop-violence-muslim-americans",
    "pubdate": "2026-08-16 22:38:08",
    "contentSnippet": "Facebook上出现大量由AI生成的伊斯兰恐惧症内容，呼吁对穆斯林美国人施暴，引发担忧。",
    "creator": "Joe Wilkins",
    "source": "Futurism AI",
    "category": "安全监管",
    "relevance": 7
  },
  {
    "title": "深度伪造阿尔巴尼斯用于名人骗局，澳大利亚人损失740万澳元",
    "link": "https://www.theguardian.com/australia-news/2026/aug/17/deepfake-anthony-albanese-used-in-celebrity-scams-duping-australians-out-of-74m-asic-warns",
    "pubdate": "2026-08-16 22:01:27",
    "contentSnippet": "澳大利亚监管机构警告，利用深度伪造总理阿尔巴尼斯等名人推广虚假投资机会的骗局激增，已致澳人损失740万澳元。",
    "creator": "Tory Shepherd",
    "source": "The Guardian AI",
    "category": "安全监管",
    "relevance": 8
  },
  {
    "title": "Meta面临青少年伤害索赔的里程碑式审判",
    "link": "https://www.bloomberg.com/news/videos/2026-08-16/meta-faces-landmark-trial-over-youth-harm-claims-video",
    "pubdate": "2026-08-16 20:21:20",
    "contentSnippet": "Meta面临由29个州提起的里程碑式联邦审判，指控其故意设计Facebook和Instagram让年轻用户上瘾，并不当收集儿童数据。",
    "creator": "",
    "source": "Bloomberg Technology",
    "category": "安全监管",
    "relevance": 9
  },
  {
    "title": "AI电影拍摄现场：新工作室拥抱争议技术",
    "link": "https://www.theguardian.com/film/2026/aug/16/directors-embracing-ai-film-making",
    "pubdate": "2026-08-16 20:00:25",
    "contentSnippet": "在索尼影业附近，新工作室Promise利用AI制作电影，包括生成背景、特效和合成演员，引发就业担忧。",
    "creator": "Robert Booth",
    "source": "The Guardian AI",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "Axios与OpenAI合作实现本地新闻自动化",
    "link": "https://futurism.com/future-society/axios-ceo-ai-journalism-openai-chatgpt",
    "pubdate": "2026-08-16 19:02:00",
    "contentSnippet": "Axios与OpenAI合作，利用AI自动化本地新闻的除记者和新闻本身外的所有环节。",
    "creator": "Joe Wilkins",
    "source": "Futurism AI",
    "category": "行业动态",
    "relevance": 9
  },
  {
    "title": "李飞飞最新访谈：AI怎能替代人呢？",
    "link": "https://www.qbitai.com/2026/08/474140.html",
    "pubdate": "2026-08-16 18:45:47",
    "contentSnippet": "李飞飞表示AI不是替代者，而是个人能力的放大器，强调人机协作。",
    "creator": "一水",
    "source": "量子位",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "AI热潮显现安然式财务手法，但可能无碍",
    "link": "https://www.businessinsider.com/ai-boom-enron-tech-stocks-debt-demand-forecasts-circular-deals-2026-8",
    "pubdate": "2026-08-16 18:30:01",
    "contentSnippet": "科技专家拉姆·巴拉称AI热潮显现安然三大标志性财务策略，但不同于过去泡沫。",
    "creator": "Theron Mohamed",
    "source": "Business Insider",
    "category": "行业动态",
    "relevance": 7
  },
  {
    "title": "BCG北美负责人：AI时代批判性思维更重要",
    "link": "https://www.businessinsider.com/bcg-consultants-ai-skills-technical-training-mel-wolfgang-2026-8",
    "pubdate": "2026-08-16 17:33:01",
    "contentSnippet": "BCG北美负责人称AI技能重要，但批判性思维和判断力更关键。",
    "creator": "Tim Paradis",
    "source": "Business Insider",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "Instagram承诺删除Meta眼镜骚扰视频，但仍有大量留存",
    "link": "https://www.businessinsider.com/instagram-crackdown-meta-ai-glasses-pickup-rizz-videos-moderation-challenges-2026-8",
    "pubdate": "2026-08-16 17:30:01",
    "contentSnippet": "Instagram称将删除用Meta AI眼镜拍摄的骚扰视频，但数周后仍有数十个视频未被移除。",
    "creator": "Katie Notopoulos",
    "source": "Business Insider",
    "category": "安全监管",
    "relevance": 7
  },
  {
    "title": "首位因反AI抗议入狱者呼吁AI公司重拾人性",
    "link": "https://www.theguardian.com/us-news/2026/aug/16/california-openai-protester-wynd-kaufman",
    "pubdate": "2026-08-16 16:00:20",
    "contentSnippet": "69岁的Wynd Kaufmyn因封锁OpenAI总部被判入狱，成为首位因反AI抗议入狱者，呼吁AI公司重拾人性。",
    "creator": "Robert Booth",
    "source": "The Guardian AI",
    "category": "行业动态",
    "relevance": 8
  },
  {
    "title": "AI作弊、试卷泄露和评分错误引发全球考试抗议",
    "link": "https://www.theguardian.com/global-development/2026/aug/16/ai-cheating-leaked-papers-marking-errors-how-exam-protests-went-global",
    "pubdate": "2026-08-16 15:00:19",
    "contentSnippet": "印度、葡萄牙和墨西哥等国因AI作弊、试卷泄露和评分错误引发学生大规模抗议，考试公正性受质疑。",
    "creator": "Deborah Solomon and Oliver Holmes",
    "source": "The Guardian AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "利用AI分析假期照片的诈骗手法曝光",
    "link": "https://www.theguardian.com/money/2026/aug/16/scam-ai-holiday-photos-instagram-facebook",
    "pubdate": "2026-08-16 14:00:17",
    "contentSnippet": "诈骗者利用Instagram或Facebook上的照片，通过AI生成邮件骗取银行账户信息，提醒用户警惕。",
    "creator": "Shane Hickey",
    "source": "The Guardian AI",
    "category": "安全监管",
    "relevance": 7
  },
  {
    "title": "WorkSwarm：引领办公智能体新范式，让AI从助手进化为团队",
    "link": "https://www.qbitai.com/2026/08/473972.html",
    "pubdate": "2026-08-16 13:37:39",
    "contentSnippet": "WorkSwarm推出办公智能体新范式，通过四项关键能力，让AI从单一助手进化为一支协作团队。",
    "creator": "一水",
    "source": "量子位",
    "category": "产品发布",
    "relevance": 8
  },
  {
    "title": "AI公司营收暴涨1400%，季度入账115亿美元",
    "link": "https://www.qbitai.com/2026/08/473947.html",
    "pubdate": "2026-08-16 13:28:42",
    "contentSnippet": "某AI公司最新季度营收达115亿美元，同比增长1400%，估值有望超越SpaceX，成为史上最高IPO。",
    "creator": "henry",
    "source": "量子位",
    "category": "投融资信息",
    "relevance": 9
  },
  {
    "title": "女子称继父用Grok将童年照片转为色情图像",
    "link": "https://techcrunch.com/2026/08/15/woman-claims-her-stepfather-used-grok-to-transform-childhood-photo-into-explicit-imagery",
    "pubdate": "2026-08-16 05:29:19",
    "contentSnippet": "一名女子声称其继父使用xAI的Grok工具将她的童年照片转化为露骨色情图像，指控AI工具助长儿童性虐待。",
    "creator": "Anthony Ha",
    "source": "TechCrunch AI",
    "category": "安全监管",
    "relevance": 9
  },
  {
    "title": "Anthropic分享Claude新水印技术更多细节",
    "link": "https://techcrunch.com/2026/08/15/anthropic-shares-more-details-about-how-claudes-new-watermarks-will-work",
    "pubdate": "2026-08-16 02:58:39",
    "contentSnippet": "Anthropic详细说明Claude水印的工作原理、能否通过编辑隐藏，以及对代码的影响。",
    "creator": "Anthony Ha",
    "source": "TechCrunch AI",
    "category": "技术论文",
    "relevance": 8
  },
  {
    "title": "国会职员用AI撰写新法律引发争议",
    "link": "https://futurism.com/artificial-intelligence/congressional-staffers-lazy-using-ai-write-new-laws",
    "pubdate": "2026-08-16 01:03:00",
    "contentSnippet": "据报道，美国国会职员使用AI起草新法律，引发对立法严谨性的担忧。",
    "creator": "Victor Tangermann",
    "source": "Futurism AI",
    "category": "行业动态",
    "relevance": 6
  },
  {
    "title": "SpaceX正式完成对Cursor的收购",
    "link": "https://techcrunch.com/2026/08/15/spacex-officially-closes-its-cursor-acquisition",
    "pubdate": "2026-08-16 00:30:00",
    "contentSnippet": "AI编程初创公司Cursor正式成为SpaceX的一部分，交易完成。",
    "creator": "Anthony Ha",
    "source": "TechCrunch AI",
    "category": "投融资信息",
    "relevance": 8
  }
];
