export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'sports-tech' | 'ai-vision' | 'full-stack' | 'research';
  categoryLabel: string;
  description: string;
  longDescription: string;
  architecture: string[];
  features: string[];
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  metrics: { label: string; value: string }[];
  accentColor: 'emerald' | 'cyan' | 'purple' | 'amber';
}

export const PROJECTS: Project[] = [
  {
    id: 'volley-lens',
    title: 'VolleyLens',
    subtitle: 'Desktop Volleyball Intelligence Suite',
    category: 'sports-tech',
    categoryLabel: 'Sports Science & Analytics',
    description: 'A local-first, high-performance desktop application for volleyball coaches and performance analysts bridging Kinovea video analysis with Data Volley match coding.',
    longDescription: 'VolleyLens is built with Tauri 2 (Rust) and React 19 to provide zero-latency match scouting, multi-gigabyte video synchronization, FIVB-compliant metrics, rolling momentum heatmaps, and Gemini 3.5 Flash AI tactical scouting summaries.',
    architecture: ['Tauri 2 (Rust Backend)', 'React 19 + TypeScript', 'Zustand 5 State Engine', 'ECharts Analytics', 'Gemini 3.5 Flash AI'],
    features: [
      'Adaptive keyboard match scouting shortcuts (1-5 ratings & fast rotation flow)',
      'Decoupled video timestamp seek syncing for instant rally replay',
      'Rolling weighted momentum shift visualizer (5-rally rolling window)',
      'Setter distribution heatmaps and target zone predictor',
      'Gemini AI scouter generating live tactical adjustment reports',
      'Configurable multi-page PDF generation (jsPDF)'
    ],
    techStack: ['Tauri 2', 'Rust', 'React 19', 'TypeScript', 'Zustand', 'ECharts', 'Tailwind CSS', 'Gemini API'],
    githubUrl: 'https://github.com/Salahalioui/volley-lens',
    featured: true,
    accentColor: 'emerald',
    metrics: [
      { label: 'Platform', value: 'Native Desktop' },
      { label: 'Performance', value: 'Local-First SQLite' },
      { label: 'AI Model', value: 'Gemini 3.5 Flash' }
    ]
  },
  {
    id: 'virtual-try-on',
    title: 'StyleAI — Virtual Try-On',
    subtitle: 'Multimodal AI Fashion & Styling Assistant',
    category: 'ai-vision',
    categoryLabel: 'AI & Computer Vision',
    description: 'A cutting-edge AI styling assistant providing clothing virtual try-on, outfit extraction, reference-based hair styling, and background generation using Gemini 2.5 Multimodal AI.',
    longDescription: 'StyleAI allows users to visualize how clothing looks on them with photorealistic results. It includes body type adjustments (Slim, Athletic, Curvy, Plus Size), viewing angles, auto outfit extraction from raw uploads, and AI background replacement.',
    architecture: ['React 19 + TypeScript', 'Gemini 2.5 Flash Image Preview', 'OpenRouter Dual Proxy', 'Tailwind CSS', 'HTML5 Canvas Manipulation'],
    features: [
      'Virtual clothing try-on with body type & viewing angle fidelity',
      'Automated outfit extraction from user photographs',
      'Reference-based & text-guided hair and beard transformations',
      'Scene background changer with automatic lighting & shadow matching',
      'Mobile-first PWA responsive bottom tab navigation',
      'Secure client-side API key management via LocalStorage'
    ],
    techStack: ['React 19', 'TypeScript', 'Gemini 2.5 API', 'OpenRouter', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    githubUrl: 'https://github.com/Salahalioui/Virtual-Try-on',
    featured: true,
    accentColor: 'cyan',
    metrics: [
      { label: 'AI Vision', value: 'Multimodal 2.5' },
      { label: 'Capabilities', value: '4 AI Tools in 1' },
      { label: 'Design', value: 'Mobile PWA' }
    ]
  },
  {
    id: 'ikhtiyar-dz',
    title: 'Ikhtiyar-DZ',
    subtitle: 'Sports Talent Scout & Evaluation System',
    category: 'sports-tech',
    categoryLabel: 'Sports Science & Analytics',
    description: 'An offline-first Progressive Web App (PWA) designed for sports talent selection and physical evaluation in Football and Athletics across Algeria.',
    longDescription: 'Ikhtiyar-DZ enables physical education inspectors and sports scouts to record physical test metrics in stadiums and schools without internet connection. Features customizable metrics, radar charts, CSV batch import/export, and printable student licenses.',
    architecture: ['React + TypeScript', 'Service Worker PWA Offline Store', 'Recharts Radar Analytics', 'Tailwind CSS', 'Netlify / Vercel'],
    features: [
      'Full offline capability via PWA Service Workers',
      'Dedicated evaluation modules for Football and Athletics',
      'Customizable physical evaluation metrics & radar chart reports',
      'Batch CSV student import and PDF license generator',
      'Student performance ranking algorithms'
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts', 'Service Workers', 'PWA', 'Framer Motion'],
    githubUrl: 'https://github.com/Salahalioui/Ikhtiyar-DZ',
    featured: true,
    accentColor: 'amber',
    metrics: [
      { label: 'Domain', value: 'Scouting & Talent ID' },
      { label: 'Offline', value: 'PWA Service Worker' },
      { label: 'Analytics', value: 'Radar & Metrics' }
    ]
  },
  {
    id: 'academic-writing-assistant',
    title: 'Academic AI Writing Assistant',
    subtitle: 'Bilingual Research Paper Editing Tool',
    category: 'ai-vision',
    categoryLabel: 'AI & Research Tools',
    description: 'A modern AI web app designed to assist researchers in writing academic papers in both Arabic and English using Google Gemini API.',
    longDescription: 'Features live AI text completion (Shift+C), instant text transformation tools (Shift+T: expand, shorten, rephrase, simplify), citation generation (@), and reference list management.',
    architecture: ['React + TypeScript', 'Vite', 'Gemini API', 'CORE Scientific DB', 'Tailwind CSS'],
    features: [
      'Shift+C shortcut for live AI text completion',
      'Shift+T shortcut for academic text rephrasing and expansion',
      '@ trigger for instant academic citation suggestions',
      'Bilingual support (Arabic & English) with RTL font formatting',
      'Reference list management & bibtex exporting'
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Gemini API', 'Vite', 'CORE API'],
    githubUrl: 'https://github.com/Salahalioui/Ai_Research_writing_Assistant',
    featured: true,
    accentColor: 'purple',
    metrics: [
      { label: 'Languages', value: 'Arabic & English' },
      { label: 'Shortcuts', value: 'Shift+C / Shift+T / @' },
      { label: 'AI Model', value: 'Google Gemini' }
    ]
  },
  {
    id: 'pe-inspection',
    title: 'PE Inspector Platform',
    subtitle: 'Enterprise Physical Education Oversight System',
    category: 'full-stack',
    categoryLabel: 'Full-Stack Client Work',
    description: 'An enterprise management platform streamlining physical education inspection, teacher evaluation, and lesson plan tracking in Algeria.',
    longDescription: 'Provides role-based portals for PE teachers and inspectors. Features weekly schedule management, lesson plan completion tracking, absence justifications, field visit reporting, and Supabase Row Level Security.',
    architecture: ['React 18 + TypeScript', 'Supabase (PostgreSQL + Auth)', 'react-i18next (Arabic RTL / French)', 'Row Level Security'],
    features: [
      'Bilingual Arabic RTL & French interface with dynamic language toggle',
      'Teacher portal for schedules, lesson plans, and absence justifications',
      'Inspector portal for field visit scheduling, evaluations, and reporting',
      'Supabase Row Level Security (RLS) for multi-tier role authorization',
      'Interactive analytics dashboards for inspectorate reporting'
    ],
    techStack: ['React 18', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'react-i18next', 'Vite'],
    githubUrl: 'https://github.com/Salahalioui/PE-inspection',
    featured: false,
    accentColor: 'emerald',
    metrics: [
      { label: 'Backend', value: 'Supabase + RLS' },
      { label: 'Localization', value: 'Arabic RTL & French' },
      { label: 'Client', value: 'Education Ministry' }
    ]
  },
  {
    id: 'asjp-researcher',
    title: 'ASJP Scientific Paper Synthesizer',
    subtitle: 'Automated Academic Paper Extraction & PRISMA Tool',
    category: 'research',
    categoryLabel: 'Research Tooling',
    description: 'An automated research tool for searching, extracting, and synthesizing papers from the Algerian Scientific Journal Platform (ASJP) with PRISMA flowcharts.',
    longDescription: 'Streamlines systematic literature reviews by searching ASJP journals, parsing PDF metadata, mapping author affiliations, and generating PRISMA research synthesis reports.',
    architecture: ['TypeScript', 'Node.js', 'Python PDF Inspector', 'Markdown Exporter'],
    features: [
      'Automated ASJP journal database paper querying',
      'PDF text & metadata extraction engine',
      'Affiliation mapping for Algerian academic institutions',
      'PRISMA 2020 systematic review flowchart generator',
      'BibTeX citation export'
    ],
    techStack: ['TypeScript', 'Python', 'Node.js', 'Markdown', 'PDF Inspector'],
    githubUrl: 'https://github.com/Salahalioui/ASJP',
    featured: false,
    accentColor: 'cyan',
    metrics: [
      { label: 'Platform', value: 'ASJP Scraper' },
      { label: 'Output', value: 'PRISMA & BibTeX' },
      { label: 'Focus', value: 'Academic Research' }
    ]
  }
];

export const SKILL_CATEGORIES = [
  {
    title: 'Languages & Core',
    skills: ['Rust', 'TypeScript', 'JavaScript', 'Python', 'SQL', 'HTML5/CSS3']
  },
  {
    title: 'Frontend & Mobile',
    skills: ['React 19', 'Next.js', 'Vue.js', 'Tailwind CSS', 'PWA Service Workers', 'Framer Motion']
  },
  {
    title: 'Desktop & Systems',
    skills: ['Tauri 2 (Rust Shell)', 'Vite', 'Zustand 5 Engine', 'ECharts / Recharts', 'SQLite']
  },
  {
    title: 'AI & Cloud Infrastructure',
    skills: ['Google Gemini 2.5/3.5 API', 'OpenRouter Multimodal API', 'Supabase (PostgreSQL + RLS)', 'Firebase', 'Vercel / Netlify']
  },
  {
    title: 'Domain Expertise',
    skills: ['Volleyball Match Analytics', 'Talent Scouting Systems', 'Computer Vision & Try-On', 'Academic Research Tooling', 'Arabic RTL Localization']
  }
];
