import React from 'react';
import { Award, Zap, Brain, Layers, CheckCircle2 } from 'lucide-react';
import { TRANSLATIONS, type Language } from '../data/translations';

interface AboutSectionProps {
  lang: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang].about;

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            {t.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.title}
          </h2>
          <p className="text-gray-400 mt-4 text-base leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass-card p-8 rounded-3xl relative overflow-hidden group">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-6">
              <Award className="w-6 h-6" />
            </div>

            <h3 className="text-2xl font-bold text-white mb-3">
              {t.sportsTitle}
            </h3>
            
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              {t.sportsDesc}
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3 text-sm text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{t.sportsPoint1}</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{t.sportsPoint2}</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{t.sportsPoint3}</span>
              </li>
            </ul>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-emerald-400 font-semibold">
              <span>{t.sportsFlagship}</span>
              <Zap className="w-4 h-4" />
            </div>
          </div>

          <div className="glass-card p-8 rounded-3xl relative overflow-hidden group">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-6">
              <Brain className="w-6 h-6" />
            </div>

            <h3 className="text-2xl font-bold text-white mb-3">
              {t.aiTitle}
            </h3>

            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              {t.aiDesc}
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3 text-sm text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{t.aiPoint1}</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{t.aiPoint2}</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{t.aiPoint3}</span>
              </li>
            </ul>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-cyan-400 font-semibold">
              <span>{t.aiFlagship}</span>
              <Layers className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
