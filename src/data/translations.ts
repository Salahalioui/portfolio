export type Language = 'en' | 'ar';

export interface Translations {
  nav: {
    about: string;
    projects: string;
    skills: string;
    contact: string;
    explore: string;
    phdDev: string;
  };
  hero: {
    freelanceBadge: string;
    vibeBadge: string;
    headlinePart1: string;
    headlinePart2: string;
    headlinePart3: string;
    headlinePart4: string;
    subtitle: string;
    exploreProjects: string;
    githubProfile: string;
    reposStat: string;
    phdStat: string;
    tauriStat: string;
    vibeStat: string;
  };
  about: {
    badge: string;
    title: string;
    subtitle: string;
    sportsTitle: string;
    sportsDesc: string;
    sportsPoint1: string;
    sportsPoint2: string;
    sportsPoint3: string;
    sportsFlagship: string;
    aiTitle: string;
    aiDesc: string;
    aiPoint1: string;
    aiPoint2: string;
    aiPoint3: string;
    aiFlagship: string;
  };
  projects: {
    badge: string;
    title: string;
    subtitle: string;
    all: string;
    sportsTech: string;
    aiVision: string;
    fullStack: string;
    research: string;
    inspect: string;
  };
  skills: {
    badge: string;
    title: string;
    subtitle: string;
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    location: string;
    locationVal: string;
    email: string;
    nameLabel: string;
    emailLabel: string;
    msgLabel: string;
    sendBtn: string;
    sentTitle: string;
    sentDesc: string;
  };
}

export const TRANSLATIONS: Record<Language, Translations> = {
  en: {
    nav: {
      about: 'About',
      projects: 'Projects',
      skills: 'Skills',
      contact: 'Contact',
      explore: 'Explore Works',
      phdDev: 'PhD • AI Developer',
    },
    hero: {
      freelanceBadge: 'Open for Freelance Opportunities & Collaborations (Arabic & English)',
      vibeBadge: 'Vibe Coding & AI-Assisted Architecture',
      headlinePart1: 'Building ',
      headlinePart2: 'Native Systems',
      headlinePart3: ' & ',
      headlinePart4: 'Multimodal AI for Sports Research',
      subtitle: "Hi, I'm Salah Alioui — a PhD Researcher in Sports Science & Physical Education, Full-Stack AI Engineer, and Vibe Coding practitioner. I bridge empirical academic research with production-grade Rust, React 19, and Gemini AI.",
      exploreProjects: 'Explore Projects',
      githubProfile: 'GitHub Profile',
      reposStat: 'Verified GitHub Repos',
      phdStat: 'Sports Science Research',
      tauriStat: 'Rust & React Desktop',
      vibeStat: 'AI Agent Powered',
    },
    about: {
      badge: 'Dual Discipline Excellence',
      title: 'Where Empirical Research Meets High-Performance Software',
      subtitle: 'My background as a PhD researcher in physical education and sports performance allows me to solve complex real-world domain problems through software — from local-first Rust desktop tools to AI computer vision.',
      sportsTitle: 'Sports Performance & Talent Identification',
      sportsDesc: 'Conducting PhD thesis research focused on volleyball match analytics, rotation side-out metrics, and physical test evaluation frameworks across Algerian sports federations.',
      sportsPoint1: 'Volleyball Intelligence: FIVB-compliant match coding, rolling momentum graphs, and rotation heatmaps.',
      sportsPoint2: 'Talent Scout Systems: Offline-first PWA tools for physical test evaluation in Football & Athletics.',
      sportsPoint3: 'PE Inspector Oversight: Multi-tier portals for lesson plan tracking and field inspection management.',
      sportsFlagship: 'Primary Flagship: VolleyLens & Ikhtiyar-DZ',
      aiTitle: 'Multimodal AI & Computer Vision Engineering',
      aiDesc: 'Building next-generation generative AI tools using Google Gemini 2.5/3.5, OpenRouter APIs, and custom prompt engineering for image transformations and academic synthesis.',
      aiPoint1: 'AI Virtual Styling: Photorealistic clothing try-on, outfit extraction, and background replacer (StyleAI).',
      aiPoint2: 'Bilingual Academic AI: Live AI text completion, academic rephrasing shortcuts, and citation lookups.',
      aiPoint3: 'ASJP Synthesizer: Automated scientific paper querying, PDF metadata extraction, and PRISMA reports.',
      aiFlagship: 'Primary Flagship: StyleAI & Academic AI Assistant',
    },
    projects: {
      badge: 'Featured Software & Research Works',
      title: 'Selected Applications & Desktop Suites',
      subtitle: 'Click on any project card to inspect system architecture, engineering metrics, and full feature breakdowns.',
      all: 'All Works',
      sportsTech: 'Sports Science & Analytics',
      aiVision: 'AI & Computer Vision',
      fullStack: 'Full-Stack / Client Work',
      research: 'Research Tooling',
      inspect: 'Inspect Architecture & Metrics →',
    },
    skills: {
      badge: 'Technical Matrix & Specializations',
      title: 'Engineering Toolset & Research Stack',
      subtitle: 'From zero-latency Rust desktop applications to cloud-native multimodal AI pipelines.',
    },
    contact: {
      badge: 'Get In Touch',
      title: "Let's Build Next-Gen Sports Tech & AI Software",
      subtitle: 'Open for freelance opportunities, consulting, academic research collaborations, native desktop suite engineering, and custom AI multimodal development (Arabic & English).',
      location: 'Location',
      locationVal: 'Algeria 🇩🇿',
      email: 'Direct Email',
      nameLabel: 'Your Name',
      emailLabel: 'Your Email Address',
      msgLabel: 'Project Inquiry / Message',
      sendBtn: 'Send Message',
      sentTitle: 'Message Received!',
      sentDesc: 'Thank you for reaching out. I will respond to your email shortly.',
    },
  },
  ar: {
    nav: {
      about: 'عني',
      projects: 'المشاريع',
      skills: 'المهارات',
      contact: 'تواصل معي',
      explore: 'استكشف الأعمال',
      phdDev: 'دكتوراه • مطور ذكاء اصطناعي',
    },
    hero: {
      freelanceBadge: 'متاح للعمل الحر والتعاون البرمجي (العربية والإنجليزية)',
      vibeBadge: 'هندسة برمجية مدعومة بالذكاء الاصطناعي (Vibe Coding)',
      headlinePart1: 'بناء ',
      headlinePart2: 'أنظمة مكتبية فائقة',
      headlinePart3: ' و ',
      headlinePart4: 'ذكاء اصطناعي متعدد الوسائط للرياضة',
      subtitle: 'أهلاً بك، أنا صلاح عليوي — باحث دكتوراه في علوم الرياضة والتربية البدنية، ومطور برمجيات ذكاء اصطناعي. أدمج بين البحث الأكاديمي الميداني وتطوير التطبيقات البرمجية المتقدمة باستخدام Rust و React 19 و Gemini AI.',
      exploreProjects: 'استكشف المشاريع',
      githubProfile: 'حساب GitHub',
      reposStat: 'مشروع موثق على GitHub',
      phdStat: 'أبحاث علوم الرياضة',
      tauriStat: 'تطبيقات سطح المكتب (Rust)',
      vibeStat: 'تطوير بالذكاء الاصطناعي',
    },
    about: {
      badge: 'التميز المزدوج بين البحث والبرمجة',
      title: 'حيث يلتقي البحث العلمي التطبيقي بالبرمجيات العالية الأداء',
      subtitle: 'خلفيتي كباحث دكتوراه في التربية البدنية والأداء الرياضي تمكنني من حل المشكلات الميدانية المعقدة من خلال البرمجيات — بدءاً من برامج سطح المكتب المحلية بـ Rust إلى الذكاء الاصطناعي للرؤية الحاسوبية.',
      sportsTitle: 'تحليل الأداء الرياضي واكتشاف المواهب',
      sportsDesc: 'أبحاث دكتوراه تركز على تحليلات مباريات الكرة الطائرة، مؤشرات التدوير والجانب الهجومي، وأطر تقييم الاختبارات البدنية.',
      sportsPoint1: 'ذكاء الكرة الطائرة: ترميز المباريات المتوافق مع FIVB، رسم بياني للزخم، ومصفوفات الحرارة للتدوير.',
      sportsPoint2: 'أنظمة كشاف المواهب: تطبيقات PWA تعمل بدون إنترنت لتقييم الاختبارات البدنية في كرة القدم وألعاب القوى.',
      sportsPoint3: 'منظومة تفتيش التربية البدنية: بوابات متعددة الصلاحيات لمتابعة خطط الدروس وتقارير الزيارات الميدانية.',
      sportsFlagship: 'المشاريع الرائدة: VolleyLens و Ikhtiyar-DZ',
      aiTitle: 'هندسة الذكاء الاصطناعي والرؤية الحاسوبية',
      aiDesc: 'تطوير أدوات الذكاء الاصطناعي التوليدي من الجيل الجديد باستخدام Google Gemini 2.5/3.5 وتحويل الصور وتحليل النصوص الأكاديمية.',
      aiPoint1: 'قياس الملابس الافتراضي: تجربة الملابس الواقعية، استخراج الزي من الصور، وتغيير الخلفيات (StyleAI).',
      aiPoint2: 'مساعد الكتابة الأكاديمية: إكمال النصوص بالذكاء الاصطناعي باللغتين العربية والإنجليزية واستخراج الاقتباسات.',
      aiPoint3: 'محلل المنصة الجزائرية ASJP: البحث الآلي في المقالات العلمية، استخراج البيانات، وتوليد تقارير PRISMA.',
      aiFlagship: 'المشاريع الرائدة: StyleAI ومساعد الكتابة الأكاديمية',
    },
    projects: {
      badge: 'أبرز البرمجيات والأعمال البحثية',
      title: 'التطبيقات المختارة وحزم سطح المكتب',
      subtitle: 'انقر على أي بطاقة مشروع لمعاينة المعمارية التقنية، المقاييس، والمميزات الكاملة.',
      all: 'جميع الأعمال',
      sportsTech: 'علوم وتحليل الرياضة',
      aiVision: 'الذكاء الاصطناعي والرؤية',
      fullStack: 'تطبيقات كاملة / عملاء',
      research: 'أدوات البحث العلمي',
      inspect: 'معاينة المعمارية والمقاييس ←',
    },
    skills: {
      badge: 'المصفوفة التقنية والتخصصات',
      title: 'مجموعة الأدوات الهندسية والبحثية',
      subtitle: 'من تطبيقات سطح المكتب بـ Rust ذات الزمن الحقيقي إلى معالجات الذكاء الاصطناعي متعدد الوسائط.',
    },
    contact: {
      badge: 'تواصل معي',
      title: 'لنعمل معاً على بناء برمجيات الرياضة والذكاء الاصطناعي',
      subtitle: 'متاح للأعمال الحرة (Freelance)، الاستشارات، التعاون في الأبحاث الأكاديمية، وتطوير التطبيقات (باللغتين العربية والإنجليزية).',
      location: 'الموقع',
      locationVal: 'الجزائر 🇩🇿',
      email: 'البريد الإلكتروني المباشر',
      nameLabel: 'الاسم الكامل',
      emailLabel: 'عنوان البريد الإلكتروني',
      msgLabel: 'تفاصيل المشروع / الرسالة',
      sendBtn: 'إرسال الرسالة',
      sentTitle: 'تم استلام رسالتك!',
      sentDesc: 'شكراً لتواصلك. سأقوم بالرد على بريدك الإلكتروني في أقرب وقت.',
    },
  },
};
