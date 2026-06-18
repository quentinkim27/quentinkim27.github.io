// ---------------------------------------------------------------------------
// config.js - Edit this file to personalize the homepage.
// Content is centralized here so the static pages can stay lightweight.
// ---------------------------------------------------------------------------

const USER_CONFIG = {
  site: {
    title: "Chengkun Jin | Sociology & Social Work | PhD student",
    description: "Academic homepage of Chengkun Jin, Ph.D. student in Sociology at Zhejiang University.",
    defaultLang: "en",
    defaultTheme: "light",
    ogUrl: "https://orcid.org/0009-0004-2408-2175",
    ogImage: "assets/avatar.png"
  },

  profile: {
    name: { en: "Chengkun Jin", zh: "金铖锟" },
    displayName: { en: "Chengkun\nJin.", zh: "金铖锟" },
    initials: "CJ",
    affiliation: { en: "@ Zhejiang University", zh: "@ 浙江大学" },
    avatar: "assets/avatar.png",
    avatarAlt: "Chengkun Jin avatar",
    typingRoles: {
      en: ["Child Well-being", "Family Risks", "Youth Development", "Health Sociology"],
      zh: ["儿童福祉", "家庭风险", "青年发展", "健康社会学"]
    },
    bio: {
      en: "I am a Ph.D. student in Sociology at Zhejiang University. My research focuses on child well-being, family risks, and youth development, with interests in quantitative methods, longitudinal data analysis, and health sociology.",
      zh: "浙江大学社会学博士研究生，研究关注儿童福祉、家庭风险与青年发展，并聚焦定量方法、纵向数据分析和健康社会学。"
    }
  },

  nav: [
    { href: "index.html", label: { en: "Home", zh: "首页" } },
    { href: "about.html", label: { en: "About me", zh: "关于我" } },
    { href: "projects.html", label: { en: "Projects", zh: "项目" } },
    { href: "publications.html", label: { en: "Publications", zh: "发表" } },
    { href: "experience.html", label: { en: "Experiences", zh: "经历" } },
    { href: "contact.html", label: { en: "Contact", zh: "联系我" } }
  ],

  links: {
    email: "kunn@zju.edu.cn",
    cv: "assets/Chengkun.docx"
  },

  socials: {
    orcid: {
      href: "https://orcid.org/0009-0004-2408-2175",
      label: { en: "ORCID", zh: "ORCID" }
    },
    researchGate: {
      href: "https://www.researchgate.net/profile/Chengkun-Jin-2",
      label: { en: "ResearchGate", zh: "ResearchGate" }
    },
    googleScholar: {
      href: "#",
      label: { en: "Google Scholar", zh: "Google Scholar" }
    },
  },

  labels: {
    en: {
      cv: "Download CV",
      heroGreeting: "Hello, I'm",
      scroll: "scroll",
      latest: "Latest",
      whatsNew: "What's <span>New</span>",
      featured: "Featured",
      selectedPublications: "Selected <span>Publications</span>",
      projects: "Projects",
      ongoingProjects: "Ongoing <span>Projects</span>",
      researchInterests: "Research Interests",
      researchAreas: "Research <span>Areas</span>",
      publicationBadge: "Publication",
      featuredPublicationTag: "featured publication",
      ongoingProjectTag: "ongoing project",
      viewAll: "View All",
      publications: "Publications",
      publicationTimeline: "Publication <span>Timeline</span>",
      academia: "Education",
      education: "Educational <span>Background</span>",
      methods: "Methodology",
      skillsMethods: "Skills",
      connect: "Connect",
      getInTouchTitle: "Get in <span>Touch</span>",
      contactDesc: "For academic collaboration, research communication, or publication-related inquiries, please feel free to contact me through the links below.",
      formName: "Name",
      formEmail: "Email",
      formMsg: "Message",
      formSend: "Send Message ->"
    },
    zh: {
      cv: "Download CV",
      heroGreeting: "你好，我是",
      scroll: "向下滚动",
      latest: "近况",
      whatsNew: "最新<span>动态</span>",
      featured: "代表文献",
      selectedPublications: "代表<span>文献</span>",
      projects: "项目",
      ongoingProjects: "进行中的<span>项目</span>",
      researchInterests: "研究兴趣",
      researchAreas: "研究<span>领域</span>",
      publicationBadge: "发表",
      featuredPublicationTag: "代表文献",
      ongoingProjectTag: "预留项目",
      viewAll: "查看全部",
      publications: "发表经历",
      publicationTimeline: "发表<span>时间线</span>",
      academia: "教育",
      education: "教育<span>背景</span>",
      methods: "方法论",
      skillsMethods: "技能",
      connect: "联系方式",
      getInTouchTitle: "联系<span>方式</span>",
      contactDesc: "如需学术合作、研究交流或论文相关沟通，欢迎通过以下方式联系我。",
      formName: "姓名",
      formEmail: "邮箱",
      formMsg: "留言",
      formSend: "发送消息 ->"
    }
  },

  homeSections: {
    news: {
      labelKey: "latest",
      titleKey: "whatsNew",
      moreHref: null,
      badge: { en: "Publication", zh: "发表" }
    },
    selectedPublications: {
      labelKey: "featured",
      titleKey: "selectedPublications",
      moreHref: "publications.html"
    },
    projects: {
      labelKey: "projects",
      titleKey: "ongoingProjects",
      moreHref: "projects.html",
      tagKey: "ongoingProjectTag"
    },
    research: {
      labelKey: "researchInterests",
      titleKey: "researchAreas",
      moreHref: null
    }
  },

  news: [
    {
      date: "20/06/26",
      badge: { en: "Submitted", zh: "投稿" },
      text: {
        en: "Finished <strong>Social Concern about School Bullying in China:Trends, Variations and Socioeconomic Determinant</strong> and <em>submitted</em>.",
        zh: "完成<strong>Social Concern about School Bullying in China:Trends, Variations and Socioeconomic Determinant</strong>的写作并投稿。"
      }
    },
    {
      date: "18/06/26",
      badge: { en: "Developed", zh: "开发" },
      text: {
        en: "Developed <strong>My Personal Website</strong> and <em>git to github</em>.",
        zh: "开发了<strong>我的个人主页</strong>并上传</em>Github</em>。"
      }
    },
    {
      date: "01/06/26",
      text: {
        en: "Published <strong>A longitudinal study of adverse childhood experiences and discrimination in adulthood</strong> in <em>Child Abuse & Neglect</em>.",
        zh: "在 <em>Child Abuse & Neglect</em> 发表 <strong>A longitudinal study of adverse childhood experiences and discrimination in adulthood</strong>。"
      }
    },
    {
      date: "15/05/26",
      text: {
        en: "Published <strong>Patterns and transitions of physical, psychological, and behavioral health across adulthood</strong> in <em>Journal of Affective Disorders</em>.",
        zh: "在 <em>Journal of Affective Disorders</em> 发表 <strong>Patterns and transitions of physical, psychological, and behavioral health across adulthood</strong>。"
      }
    },
    {
      date: "20/03/26",
      text: {
        en: "Published <strong>Interparental Conflict Management and Antisocial Behaviour Among Chinese Children</strong> in <em>Child & Family Social Work</em>.",
        zh: "在 <em>Child & Family Social Work</em> 发表 <strong>Interparental Conflict Management and Antisocial Behaviour Among Chinese Children</strong>。"
      }
    },
  ],

  featuredPublications: [
    {
      badge: "SSCI Q1",
      icon: "SSM",
      venue: "Social Science & Medicine | 2025",
      title: {
        en: "Divergent pathways of mental health symptomatology",
        zh: "心理健康症状的分化路径"
      },
      description: {
        en: "A network analysis of adverse childhood experiences and mental health disorders from early to middle adulthood.",
        zh: "基于网络分析，考察不良童年经历与成年早中期心理健康障碍之间的关联路径。"
      },
      links: [{ label: "DOI", url: "https://doi.org/10.1016/J.SOCSCIMED.2025.118566" }]
    },
    {
      badge: "SSCI Q1",
      icon: "JAD",
      venue: "Journal of Affective Disorders | 2026",
      title: {
        en: "Patterns and transitions of health across adulthood",
        zh: "成年期健康模式及其转变"
      },
      description: {
        en: "A latent transition analysis of physical, psychological, and behavioral health and the roles of childhood and adulthood adversities.",
        zh: "使用潜在转变分析研究成年期身体、心理与行为健康模式，以及童年和成年逆境的作用。"
      },
      links: [{ label: "DOI", url: "https://doi.org/10.1016/J.JAD.2025.120207" }]
    },
    {
      badge: "SSCI Q1",
      icon: "CAN",
      venue: "Child Abuse & Neglect | 2025",
      title: {
        en: "Childhood adversity, discrimination, and intimate partner violence",
        zh: "童年逆境、歧视与亲密伴侣暴力"
      },
      description: {
        en: "Longitudinal studies on how childhood adversity shapes later-life discrimination and intimate partner violence outcomes.",
        zh: "基于纵向数据，研究童年逆境如何影响后续生命阶段的歧视经历与亲密伴侣暴力风险。"
      },
      links: [{ label: "DOI", url: "https://doi.org/10.1016/J.CHIABU.2026.107885" }]
    }
  ],

  ongoingProjects: [
    {
      badge: "Ongoing",
      icon: "01",
      title: {
        en: "Project details coming soon",
        zh: "项目详情即将更新"
      },
      description: {
        en: "Reserved space for ongoing research projects.",
        zh: "预留用于展示正在进行的研究项目。"
      }
    }
  ],

  researchAreas: [
    {
      category: { en: "Child Well-being", zh: "儿童福祉" },
      tags: [
        { en: "Subjective Well-being", zh: "主观福祉" },
        { en: "Child Adjustment", zh: "儿童适应" },
        { en: "Youth Development", zh: "青年发展" }
      ]
    },
    {
      category: { en: "Family and Social Risks", zh: "家庭与社会风险" },
      tags: [
        { en: "Childhood Adversity", zh: "童年逆境" },
        { en: "Family Risks", zh: "家庭风险" },
        { en: "Discrimination", zh: "歧视" }
      ]
    },
    {
      category: { en: "Health Sociology", zh: "健康社会学" },
      tags: [
        { en: "Mental Health", zh: "心理健康" },
        { en: "Life Course", zh: "生命历程" },
        { en: "Longitudinal Data", zh: "纵向数据" }
      ]
    }
  ],

  publications: [
    {
      year: "2026",
      title: "Temporal Trends and Determinants of Children's Subjective Well-Being Across 20 Countries",
      venue: "Children and Youth Services Review",
      description: {
        en: "A multilevel analysis of children's subjective well-being using international survey data.",
        zh: "利用国际调查数据，对 20 个国家儿童主观福祉的变化与影响因素进行多层次分析。"
      }
    },
    {
      year: "2026",
      title: "Family-Community Risk/Resource Configurations and Child Bullying Behaviors in Singapore",
      venue: "Family Relations",
      description: {
        en: "Examines family-community risk and resource configurations related to child bullying behaviors.",
        zh: "考察新加坡家庭-社区风险/资源组态与儿童欺凌行为之间的关系。"
      }
    },
    {
      year: "2026",
      title: "A longitudinal study of adverse childhood experiences and discrimination in adulthood",
      venue: "Child Abuse & Neglect",
      description: {
        en: "Studies links between adverse childhood experiences and daily/lifetime discrimination in adulthood.",
        zh: "研究不良童年经历与成年期日常及终身歧视之间的纵向关联。"
      }
    },
    {
      year: "2026",
      title: "Interparental Conflict Management and Antisocial Behaviour Among Chinese Children",
      venue: "Child & Family Social Work",
      description: {
        en: "Reveals mechanisms of maltreatment and gender differences among Chinese children.",
        zh: "揭示中国儿童父母冲突管理、虐待机制与反社会行为之间的关系及性别差异。"
      }
    },
    {
      year: "2026",
      title: "Patterns and transitions of physical, psychological, and behavioral health across adulthood",
      venue: "Journal of Affective Disorders",
      description: {
        en: "Uses latent transition analysis to study health patterns and adversities across adulthood.",
        zh: "使用潜在转变分析研究成年期健康模式及童年和成年逆境的作用。"
      }
    },
    {
      year: "2026",
      title: "近四十年来国外社会记忆研究的谱系与演变",
      venue: "中国农村研究",
      description: {
        en: "A bibliometric and thematic review of international social memory research over four decades.",
        zh: "梳理近四十年国外社会记忆研究的知识谱系与主题演变。"
      }
    },
    {
      year: "2025",
      title: "Childhood adversity and intimate partner violence",
      venue: "Child Abuse & Neglect",
      description: {
        en: "A 20-year longitudinal study of cumulative, typological, and sex effects.",
        zh: "一项关于童年逆境与亲密伴侣暴力的 20 年纵向研究。"
      }
    },
    {
      year: "2025",
      title: "Divergent pathways of mental health symptomatology",
      venue: "Social Science & Medicine",
      description: {
        en: "A network analysis of adverse childhood experiences and mental health disorders from early to middle adulthood.",
        zh: "使用网络分析研究不良童年经历与成年早中期心理健康障碍之间的分化路径。"
      }
    },
    {
      year: "2025",
      title: "Network analyses of parental involvement and depression",
      venue: "Current Psychology",
      description: {
        en: "Examines associations between parental involvement and depression through network analysis.",
        zh: "使用网络分析考察父母参与与抑郁之间的关系。"
      }
    },
    {
      year: "2023",
      title: "江西高质量发展志愿服务的对策建议",
      venue: "江西发展参考",
      description: {
        en: "Policy-oriented research on volunteer service development in Jiangxi.",
        zh: "围绕江西高质量发展中的志愿服务提出政策建议。"
      }
    }
  ],

  education: [
    {
      period: "2024 - Present",
      school: { en: "Zhejiang University", zh: "浙江大学" },
      degree: { en: "Ph.D. Student in Sociology", zh: "社会学博士研究生" }
    },
    {
      period: "2021 - 2024",
      school: { en: "Nanchang University", zh: "南昌大学" },
      degree: { en: "M.A. in Political Theory", zh: "政治学理论硕士" }
    },
    {
      period: "2017 - 2021",
      school: { en: "Zhejiang Ocean University", zh: "浙江海洋大学" },
      degree: { en: "B.A. in English", zh: "英语学士" }
    }
  ],

  skills: [
    {
      category: { en: "Quantitative Methods", zh: "定量方法" },
      tags: ["Longitudinal Analysis", "Latent Transition Analysis", "Network Analysis", "Multilevel Modeling"]
    },
    {
      category: { en: "Qualitative Methods", zh: "定性方法" },
      tags: ["Policy Analysis", "Field Research"]
    },
    {
      category: { en: "Tools", zh: "研究工具" },
      tags: ["CiteSpace", "VOSviewer"]
    },
    {
      category: { en: "Programming Language", zh: "编程语言" },
      tags: ["R", "Python", "Stata", "Mplus"]
    }
  ]
};
