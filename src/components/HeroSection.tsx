import React, { useState } from 'react';
import { ArrowRight, GraduationCap, Cpu, Activity, Sparkles, Terminal, CheckCircle2, ShieldCheck } from 'lucide-react';
import { TRANSLATIONS, type Language } from '../data/translations';

interface HeroSectionProps {
  lang: Language;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang].hero;
  const isAr = lang === 'ar';
  const [activeTab, setActiveTab] = useState<'volley' | 'style' | 'ikhtiyar'>('volley');

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-mesh-grid overflow-hidden">
      
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto text-center z-10">
        
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-card border border-emerald-500/30 text-xs font-semibold text-emerald-300 glow-badge-emerald">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            {t.freelanceBadge}
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-amber-500/30 text-xs font-semibold text-amber-300 glow-badge-amber">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            {t.vibeBadge}
          </div>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.15]">
          {t.headlinePart1}
          <span className="text-gradient-emerald">{t.headlinePart2}</span>
          {t.headlinePart3}
          <span className="text-gradient-cyan">{t.headlinePart4}</span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-10 font-normal leading-relaxed">
          {t.subtitle}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white font-bold text-sm shadow-xl shadow-emerald-500/25 hover:scale-[1.03] transition-all"
          >
            {t.exploreProjects}
            <ArrowRight className="w-4 h-4 rtl:rotate-180" />
          </a>
          
          <a
            href="#services"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl glass-card text-emerald-300 font-semibold text-sm hover:text-white hover:border-emerald-500/40 transition-all"
          >
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            {isAr ? 'خدمات العمل الحر' : 'Freelance Services'}
          </a>
        </div>

        <div className="glass-panel max-w-4xl mx-auto rounded-3xl p-6 sm:p-8 text-left rtl:text-right border border-white/10 shadow-2xl mb-16">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="text-xs font-mono text-gray-400 ltr:ml-2 rtl:mr-2">
                salah-alioui-systems-v2.5
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab('volley')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'volley'
                    ? 'bg-emerald-500 text-white shadow-md'
                    : 'bg-slate-800/80 text-gray-400 hover:text-white'
                }`}
              >
                VolleyLens (Rust)
              </button>

              <button
                onClick={() => setActiveTab('style')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'style'
                    ? 'bg-cyan-500 text-white shadow-md'
                    : 'bg-slate-800/80 text-gray-400 hover:text-white'
                }`}
              >
                StyleAI (Gemini)
              </button>

              <button
                onClick={() => setActiveTab('ikhtiyar')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'ikhtiyar'
                    ? 'bg-amber-500 text-white shadow-md'
                    : 'bg-slate-800/80 text-gray-400 hover:text-white'
                }`}
              >
                Ikhtiyar-DZ (PWA)
              </button>
            </div>
          </div>

          <div className="pt-6">
            {activeTab === 'volley' && (
              <div className="grid md:grid-cols-2 gap-6 items-center animate-fade-in">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[11px] font-bold mb-3">
                    <Terminal className="w-3.5 h-3.5" />
                    Tauri 2 • Rust Desktop Engine
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    VolleyLens Desktop Suite
                  </h3>
                  <p className="text-gray-300 text-xs leading-relaxed mb-4">
                    {isAr
                      ? 'برنامج مكتبة محلي أوفلاين كلياً للمدربين لتحليل مباريات الكرة الطائرة، تزامن الفيديو عالي الدقة، وتوليد تقارير تكتيكية بالذكاء الاصطناعي.'
                      : 'Local-first desktop application for volleyball coaches bridging Kinovea video analysis with Data Volley match coding and Gemini AI scouter reports.'}
                  </p>
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-xs text-emerald-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Zero-Latency SQLite & Multi-Gigabyte Video Sync</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-emerald-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>FIVB-Compliant Rotation Side-Out & Momentum ECharts</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900/90 border border-white/10 font-mono text-[11px] text-emerald-400 space-y-1">
                  <div className="text-gray-500">// VolleyLens Engine Status</div>
                  <div>&gt; target: x86_64-pc-windows-msvc</div>
                  <div>&gt; tauri_version: 2.1.0 (Rust 1.84)</div>
                  <div>&gt; video_sync_latency: &lt;1.2ms</div>
                  <div>&gt; ai_model: Gemini 3.5 Flash</div>
                  <div className="text-cyan-400">&gt; status: 🟢 PRODUCTION_READY</div>
                </div>
              </div>
            )}

            {activeTab === 'style' && (
              <div className="grid md:grid-cols-2 gap-6 items-center animate-fade-in">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-[11px] font-bold mb-3">
                    <Sparkles className="w-3.5 h-3.5" />
                    Multimodal AI • Gemini 2.5 Flash
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    StyleAI — Virtual Try-On Assistant
                  </h3>
                  <p className="text-gray-300 text-xs leading-relaxed mb-4">
                    {isAr
                      ? 'تطبيق ذكاء اصطناعي لقياس الملابس الافتراضي، تغيير الخلفيات، واستخراج الملابس من الصور بدقة عالية.'
                      : 'AI styling assistant providing photorealistic clothing try-on, body type adjustment, outfit extraction, and AI scene background replacement.'}
                  </p>
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-xs text-cyan-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>Photorealistic Virtual Try-On & Body Type Fidelity</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-cyan-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>Automated Outfit Extraction & Lighting Background Replacer</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900/90 border border-white/10 font-mono text-[11px] text-cyan-400 space-y-1">
                  <div className="text-gray-500">// StyleAI Pipeline</div>
                  <div>&gt; ai_engine: Gemini 2.5 Multimodal</div>
                  <div>&gt; try_on_resolution: 2048x2048</div>
                  <div>&gt; outfit_extractor: Active</div>
                  <div>&gt; mobile_pwa_tab: Responsive</div>
                  <div className="text-emerald-400">&gt; status: 🟢 LIVE_APPLICATION</div>
                </div>
              </div>
            )}

            {activeTab === 'ikhtiyar' && (
              <div className="grid md:grid-cols-2 gap-6 items-center animate-fade-in">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-[11px] font-bold mb-3">
                    <Cpu className="w-3.5 h-3.5" />
                    Offline-First PWA • Service Workers
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Ikhtiyar-DZ Talent Scouting PWA
                  </h3>
                  <p className="text-gray-300 text-xs leading-relaxed mb-4">
                    {isAr
                      ? 'منظومة كشافة المواهب الرياضية والاختبارات البدنية لكشف المواهب في الملاعب والمدارس بدون إنترنت.'
                      : 'Offline-first PWA for sports talent selection in Football & Athletics with radar analytics and CSV batch processing.'}
                  </p>
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-xs text-amber-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>Full Stadium Offline Operation via Service Worker</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-amber-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>Radar Metrics Charts & CSV Student License Export</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900/90 border border-white/10 font-mono text-[11px] text-amber-400 space-y-1">
                  <div className="text-gray-500">// Ikhtiyar-DZ PWA Cache</div>
                  <div>&gt; service_worker: Installed (IndexedDB)</div>
                  <div>&gt; offline_readiness: 100%</div>
                  <div>&gt; radar_charts: Recharts Engine</div>
                  <div>&gt; target_domains: Football & Athletics</div>
                  <div className="text-emerald-400">&gt; status: 🟢 DEPLOYED</div>
                </div>
              </div>
            )}
          </div>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          
          <div className="glass-card p-5 rounded-2xl text-center">
            <div className="inline-flex p-3 rounded-xl bg-emerald-500/10 text-emerald-400 mb-3">
              <Activity className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white">23</div>
            <div className="text-xs text-gray-400 font-medium mt-1">{t.reposStat}</div>
          </div>

          <div className="glass-card p-5 rounded-2xl text-center">
            <div className="inline-flex p-3 rounded-xl bg-cyan-500/10 text-cyan-400 mb-3">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white">PhD</div>
            <div className="text-xs text-gray-400 font-medium mt-1">{t.phdStat}</div>
          </div>

          <div className="glass-card p-5 rounded-2xl text-center">
            <div className="inline-flex p-3 rounded-xl bg-purple-500/10 text-purple-400 mb-3">
              <Cpu className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white">Tauri 2</div>
            <div className="text-xs text-gray-400 font-medium mt-1">{t.tauriStat}</div>
          </div>

          <div className="glass-card p-5 rounded-2xl text-center">
            <div className="inline-flex p-3 rounded-xl bg-amber-500/10 text-amber-400 mb-3">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white">Vibe Code</div>
            <div className="text-xs text-gray-400 font-medium mt-1">{t.vibeStat}</div>
          </div>

        </div>

      </div>

    </section>
  );
};
