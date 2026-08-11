import React from 'react';
import { Award, Zap, Brain, Layers, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Dual Discipline Excellence
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Where Empirical Research Meets High-Performance Software
          </h2>
          <p className="text-gray-400 mt-4 text-base leading-relaxed">
            My background as a PhD researcher in physical education and sports performance allows me to solve complex real-world domain problems through software — from local-first Rust desktop tools to AI computer vision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass-card p-8 rounded-3xl relative overflow-hidden group">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-6">
              <Award className="w-6 h-6" />
            </div>

            <h3 className="text-2xl font-bold text-white mb-3">
              Sports Performance & Talent Identification
            </h3>
            
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Conducting PhD thesis research focused on volleyball match analytics, rotation side-out metrics, and physical test evaluation frameworks across Algerian sports federations.
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3 text-sm text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Volleyball Intelligence:</strong> FIVB-compliant match coding, rolling momentum graphs, and rotation heatmaps.</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Talent Scout Systems:</strong> Offline-first PWA tools for physical test evaluation in Football & Athletics.</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>PE Inspector Oversight:</strong> Multi-tier portals for lesson plan tracking and field inspection management.</span>
              </li>
            </ul>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-emerald-400 font-semibold">
              <span>Primary Flagship: VolleyLens & Ikhtiyar-DZ</span>
              <Zap className="w-4 h-4" />
            </div>
          </div>

          <div className="glass-card p-8 rounded-3xl relative overflow-hidden group">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-6">
              <Brain className="w-6 h-6" />
            </div>

            <h3 className="text-2xl font-bold text-white mb-3">
              Multimodal AI & Computer Vision Engineering
            </h3>

            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Building next-generation generative AI tools using Google Gemini 2.5/3.5, OpenRouter APIs, and custom prompt engineering for image transformations and academic synthesis.
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3 text-sm text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span><strong>AI Virtual Styling:</strong> Photorealistic clothing try-on, outfit extraction, and background replacer (StyleAI).</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span><strong>Bilingual Academic AI:</strong> Live AI text completion, academic rephrasing shortcuts, and citation lookups.</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span><strong>ASJP Synthesizer:</strong> Automated scientific paper querying, PDF metadata extraction, and PRISMA reports.</span>
              </li>
            </ul>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-cyan-400 font-semibold">
              <span>Primary Flagship: StyleAI & Academic AI Assistant</span>
              <Layers className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
