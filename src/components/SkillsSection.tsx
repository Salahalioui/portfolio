import React from 'react';
import { Terminal, Cpu, Database, Layout, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';
import { TRANSLATIONS, type Language } from '../data/translations';

interface SkillsSectionProps {
  lang: Language;
}

export const SKILL_CATEGORIES_EN = [
  {
    icon: Terminal,
    title: 'Languages & Core Runtimes',
    badge: 'Core Syntax',
    accent: 'emerald',
    skills: [
      { name: 'Rust', level: 'Native Desktop / Systems', tag: 'High Speed' },
      { name: 'TypeScript', level: 'Strict Enterprise TS', tag: 'Primary' },
      { name: 'JavaScript', level: 'ES2024+ Async Engine', tag: 'Full Stack' },
      { name: 'Python', level: 'PDF & Data Extraction', tag: 'Automation' },
      { name: 'SQL', level: 'PostgreSQL & SQLite', tag: 'Data' }
    ]
  },
  {
    icon: Layout,
    title: 'Frontend & UI Frameworks',
    badge: 'Modern Client',
    accent: 'cyan',
    skills: [
      { name: 'React 19', level: 'Server Actions & Hooks', tag: 'Production' },
      { name: 'Next.js', level: 'App Router & SSR', tag: 'Web Apps' },
      { name: 'Vue.js', level: 'Options & Composition API', tag: 'Frontend' },
      { name: 'Tailwind CSS v4', level: 'Glassmorphism & RTL Design', tag: 'Styling' },
      { name: 'PWA Service Workers', level: 'Offline Cache & IndexedDB', tag: 'Offline' }
    ]
  },
  {
    icon: Cpu,
    title: 'Desktop Systems & Analytics',
    badge: 'System Suite',
    accent: 'purple',
    skills: [
      { name: 'Tauri 2 (Rust Shell)', level: 'Local Desktop App Architecture', tag: 'Flagship' },
      { name: 'Vite 8', level: 'Lightning Fast Bundling', tag: 'Tooling' },
      { name: 'Zustand 5', level: 'Decoupled State Engines', tag: 'State' },
      { name: 'ECharts / Recharts', level: 'Rolling Momentum & Radar Graphs', tag: 'Analytics' }
    ]
  },
  {
    icon: Database,
    title: 'AI & Cloud Infrastructure',
    badge: 'Cloud AI',
    accent: 'amber',
    skills: [
      { name: 'Google Gemini 2.5/3.5', level: 'Multimodal Vision & Prompt Engineering', tag: 'AI Vision' },
      { name: 'OpenRouter API', level: 'Multi-LLM Dual Proxy Fallbacks', tag: 'AI Proxy' },
      { name: 'Supabase', level: 'PostgreSQL + Auth + Row Level Security', tag: 'Backend' },
      { name: 'Vercel / Netlify', level: 'Automated CI/CD Deployment', tag: 'Cloud' }
    ]
  },
  {
    icon: Sparkles,
    title: 'Domain & Research Expertise',
    badge: 'PhD Science',
    accent: 'emerald',
    skills: [
      { name: 'Volleyball Match Scouting', level: 'FIVB Coding & Side-Out Analytics', tag: 'Research' },
      { name: 'Sports Talent Evaluation', level: 'Football & Athletics PWA Scouting', tag: 'Domain' },
      { name: 'Virtual Try-On Vision', level: 'Clothing & Outfit AI Extraction', tag: 'Computer Vision' },
      { name: 'Arabic RTL Localization', level: 'Native Dual-Language UX/UI', tag: 'Localization' }
    ]
  }
];

export const SkillsSection: React.FC<SkillsSectionProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang].skills;

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-slate-950/40">
      
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-bold uppercase tracking-wider mb-4 glow-badge-amber">
            <ShieldCheck className="w-3.5 h-3.5" />
            {t.badge}
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {t.title}
          </h2>
          <p className="text-gray-400 mt-4 text-base">
            {t.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES_EN.map((cat, idx) => {
            const Icon = cat.icon;

            return (
              <div 
                key={idx} 
                className="glass-card p-6 rounded-3xl relative overflow-hidden border border-white/10 hover:border-emerald-500/40 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500/20 to-cyan-500/20 text-emerald-400 flex items-center justify-center font-bold">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                          {cat.title}
                        </h3>
                        <span className="text-[11px] text-cyan-400 font-semibold">{cat.badge}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    {cat.skills.map((skill, sIdx) => (
                      <div 
                        key={sIdx}
                        className="p-3 rounded-2xl bg-slate-900/80 border border-white/5 flex items-center justify-between group/item hover:border-emerald-500/30 transition-colors"
                      >
                        <div>
                          <div className="text-xs font-bold text-white flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                            {skill.name}
                          </div>
                          <div className="text-[11px] text-gray-400 font-medium mt-0.5">
                            {skill.level}
                          </div>
                        </div>

                        <span className="px-2 py-0.5 rounded-md bg-slate-800 text-emerald-300 text-[10px] font-mono font-bold border border-white/10 shrink-0">
                          {skill.tag}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10 text-right rtl:text-left text-[11px] text-gray-500 font-mono">
                  Verified Skill Metric • 100% Production Grade
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
