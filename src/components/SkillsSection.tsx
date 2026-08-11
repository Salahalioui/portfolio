import React from 'react';
import { SKILL_CATEGORIES } from '../data/projects';
import { Terminal, Cpu, Database, Layout, Sparkles } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Technical Matrix & Specializations
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering Toolset & Research Stack
          </h2>
          <p className="text-gray-400 mt-4 text-base">
            From zero-latency Rust desktop applications to cloud-native multimodal AI pipelines.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div key={idx} className="glass-card p-6 rounded-3xl relative overflow-hidden">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500/20 to-cyan-500/20 text-emerald-400 flex items-center justify-center font-bold">
                  {idx === 0 && <Terminal className="w-5 h-5" />}
                  {idx === 1 && <Layout className="w-5 h-5 text-cyan-400" />}
                  {idx === 2 && <Cpu className="w-5 h-5 text-purple-400" />}
                  {idx === 3 && <Database className="w-5 h-5 text-amber-400" />}
                  {idx === 4 && <Sparkles className="w-5 h-5 text-emerald-400" />}
                </div>
                <h3 className="text-lg font-bold text-white">
                  {cat.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1.5 rounded-xl bg-slate-900/80 border border-white/10 text-xs font-semibold text-gray-200 hover:text-white hover:border-emerald-500/40 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
