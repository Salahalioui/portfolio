import React from 'react';
import { Cpu, Sparkles, Smartphone, BarChart3, CheckCircle2, ArrowRight } from 'lucide-react';
import { type Language } from '../data/translations';

interface ServicesSectionProps {
  lang: Language;
}

export const SERVICES = [
  {
    icon: Cpu,
    titleEn: 'Native Desktop Suite Engineering',
    titleAr: 'تطوير تطبيقات سطح المكتب عالية الأداء',
    subtitleEn: 'Tauri 2 (Rust) + React 19',
    subtitleAr: 'بنية خفيفة وسريعة بدعم Rust',
    descEn: 'Building zero-latency, local-first desktop applications for Windows/macOS/Linux. Multi-gigabyte video syncing, local SQLite, custom shortcuts, and hardware acceleration.',
    descAr: 'بناء تطبيقات مكتبية تعمل بدون إنترنت وبسرعة فائقة. معالجة الفيديو الضخم، قواعد بيانات محلية، وااختصارات سريعة للمدربين والشركات.',
    featuresEn: ['Rust native backend', 'Local SQLite & zero-latency UI', 'Multi-gigabyte video sync', 'Native OS windowing & shortcuts'],
    featuresAr: ['خلفية برمجية بلغـة Rust', 'قواعد بيانات SQLite محلية', 'تزامن الفيديو عالي الدقة', 'تنسيق نوافذ ونظام تشغيل متكامل'],
    accent: 'emerald',
    badge: 'Flagship Stack'
  },
  {
    icon: Sparkles,
    titleEn: 'Multimodal AI & Vision Integration',
    titleAr: 'تطوير الذكاء الاصطناعي والرؤية الحاسوبية',
    subtitleEn: 'Gemini 2.5/3.5 + OpenRouter + Agentic Workflows',
    subtitleAr: 'نماذج توليدية ورؤية حاسوبية متقدمة',
    descEn: 'Integrating generative AI models for visual try-on, image segmentation, automated content extraction, custom prompt engineering, and LLM agent architecture.',
    descAr: 'دمج نماذج الذكاء الاصطناعي التوليدي لتجربة الملابس الافتراضية، تحليل الصور، استخراج المحتوى الآلي، وبناء وكلاء ذكاء اصطناعي (AI Agents).',
    featuresEn: ['Photorealistic virtual try-on', 'Gemini Multimodal API', 'Bilingual AI text & translation', 'Custom AI agent workflows'],
    featuresAr: ['قياس ملابس واقعي بالذكاء الاصطناعي', 'واجهات Gemini Multimodal', 'معالجة نصوص ثنائية اللغة', 'سير عمل وكلاء الذكاء الاصطناعي'],
    accent: 'cyan',
    badge: 'AI Powered'
  },
  {
    icon: Smartphone,
    titleEn: 'Offline-First PWAs & Full-Stack Apps',
    titleAr: 'تطبيقات الويب والـ PWA بدون إنترنت',
    subtitleEn: 'React 19 + Supabase + Service Workers',
    subtitleAr: 'تطبيقات متكاملة مع دعم اللغة العربية',
    descEn: 'Developing responsive web applications with offline PWA service worker caching, Supabase Row-Level Security backends, and full Arabic RTL / English localization.',
    descAr: 'تطوير تطبيقات ويب تعمل كلياً عند انقطاع الإنترنت (PWA)، مع بوابات مشفرة ودعم كامل للغة العربية والاتجاه من اليمين لليسار.',
    featuresEn: ['Full PWA offline caching', 'Supabase PostgreSQL + RLS', 'Arabic RTL & English UI', 'CSV batch import & PDF reports'],
    featuresAr: ['عمل كامل بدون إنترنت (PWA)', 'قواعد بيانات Supabase مشفرة', 'دعم كامل للغة العربية (RTL)', 'تصدير التقارير واستيراد البيانات'],
    accent: 'purple',
    badge: 'Enterprise PWA'
  },
  {
    icon: BarChart3,
    titleEn: 'Sports Science Data Analytics',
    titleAr: 'تحليل البيانات والمؤشرات الرياضية',
    subtitleEn: 'Match Analytics & Scouting Algorithms',
    subtitleAr: 'خوارزميات تقييم الأداء واكتشاف المواهب',
    descEn: 'Designing empirical sports evaluation frameworks, FIVB volleyball match scouting models, rotation side-out metrics, rolling momentum graphs, and radar charts.',
    descAr: 'تصميم أطر تقييم رياضية علمية، تحليلات الكرة الطائرة المعيارية، خوارزميات قياس الزخم، ولوحات تتبع أداء اللاعبين والمواهب.',
    featuresEn: ['FIVB match coding metrics', 'Rolling momentum heatmaps', 'Scouting radar evaluation', 'Performance tracking algorithms'],
    featuresAr: ['معايير تحليل الكرة الطائرة FIVB', 'خرائط حرارية لقياس الزخم', 'رادار تقييم المواهب الرياضية', 'خوارزميات تتبع الأداء الرياضي'],
    accent: 'amber',
    badge: 'Domain Science'
  }
];

export const ServicesSection: React.FC<ServicesSectionProps> = ({ lang }) => {
  const isAr = lang === 'ar';

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-slate-950/60">
      
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4 glow-badge-emerald">
            <Sparkles className="w-3.5 h-3.5" />
            {isAr ? 'خدمات العمل الحر والحلول البرمجية' : 'Services & Client Solutions'}
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {isAr ? 'كيف يمكنني مساعدة مشروعك أو مؤسستك؟' : 'How I Can Help Elevate Your Next Project'}
          </h2>

          <p className="text-gray-400 mt-4 text-base leading-relaxed">
            {isAr
              ? 'أقدم خدمات تطوير برمجية متكاملة واستشارات تقنية للشركات والأفراد والأبحاث الأكاديمية باللغتين العربية والإنجليزية.'
              : 'Providing production-grade software development, native desktop engineering, AI integrations, and sports analytics for clients worldwide.'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {SERVICES.map((srv, idx) => {
            const Icon = srv.icon;
            const title = isAr ? srv.titleAr : srv.titleEn;
            const subtitle = isAr ? srv.subtitleAr : srv.subtitleEn;
            const desc = isAr ? srv.descAr : srv.descEn;
            const features = isAr ? srv.featuresAr : srv.featuresEn;

            return (
              <div
                key={idx}
                className="glass-card p-8 rounded-3xl relative overflow-hidden group border border-white/10 hover:border-emerald-500/40 flex flex-col justify-between"
              >
                
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-500/20 to-cyan-500/20 text-emerald-400 flex items-center justify-center font-bold shadow-lg shadow-emerald-500/10">
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="px-3 py-1 rounded-full bg-slate-800/90 text-emerald-300 text-[11px] font-bold uppercase tracking-wider border border-white/10">
                      {srv.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors mb-1">
                    {title}
                  </h3>
                  
                  <div className="text-xs text-cyan-400 font-semibold mb-4">
                    {subtitle}
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    {desc}
                  </p>

                  <ul className="space-y-2.5 mb-8">
                    {features.map((f, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-bold text-gray-400 group-hover:text-white transition-colors">
                    {isAr ? 'متاح للعمل الحر والاستشارات' : 'Available for Freelance & Consulting'}
                  </span>
                  
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800/80 text-emerald-400 text-xs font-bold hover:bg-emerald-500 hover:text-white transition-all group-hover:shadow-lg group-hover:shadow-emerald-500/20"
                  >
                    <span>{isAr ? 'اطلب مشروعك' : 'Inquire Project'}</span>
                    <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        <div className="mt-16 glass-panel rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden border border-emerald-500/30">
          
          <div className="max-w-2xl mx-auto relative z-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
              {isAr ? 'هل لديك فكرة مشروع أو تطبيق ترغب في بنائه؟' : 'Have a Custom Software Idea or Research Need?'}
            </h3>
            
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8">
              {isAr
                ? 'تواصل معي مباشرة لمناقشة متطلبات مشروعك، المعمارية التقنية، والتكلفة والمدة الزمنية.'
                : 'Get in touch directly to discuss your requirements, system architecture, timeline, and deliverables.'}
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white font-bold text-sm shadow-xl shadow-emerald-500/25 hover:scale-[1.03] transition-all"
            >
              <Sparkles className="w-4 h-4" />
              <span>{isAr ? 'ابدأ مناقشة المشروع الآن' : 'Start Project Discussion Now'}</span>
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </a>
          </div>

        </div>

      </div>

    </section>
  );
};
