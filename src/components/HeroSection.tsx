import React from 'react';
import { ArrowRight, Code, GraduationCap, Cpu, Activity } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-mesh-grid overflow-hidden">
      <div className="relative max-w-5xl mx-auto text-center z-10">
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-card border border-emerald-500/30 text-xs font-semibold text-emerald-300 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Available for Sports Tech & AI Software Collaborations
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
          Building <span className="text-gradient-emerald">Native Systems</span> &{' '}
          <span className="text-gradient-cyan">Multimodal AI</span> for Sports Research
        </h1>

        <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-10 font-normal leading-relaxed">
          Hi, I&apos;m <strong className="text-white">Salah Alioui</strong> — a PhD Researcher in Sports Science & Physical Education and a Full-Stack AI Software Engineer. I bridge empirical academic research with production-grade Rust, React 19, and Gemini AI.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold text-sm shadow-xl hover:scale-[1.03] transition-all"
          >
            Explore Projects
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/Salahalioui"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl glass-card text-gray-200 font-semibold text-sm hover:text-white transition-all"
          >
            <Code className="w-4 h-4 text-emerald-400" />
            GitHub Profile
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="glass-card p-5 rounded-2xl text-center">
            <div className="inline-flex p-3 rounded-xl bg-emerald-500/10 text-emerald-400 mb-3">
              <Activity className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white">40+</div>
            <div className="text-xs text-gray-400 font-medium mt-1">GitHub Repositories</div>
          </div>

          <div className="glass-card p-5 rounded-2xl text-center">
            <div className="inline-flex p-3 rounded-xl bg-cyan-500/10 text-cyan-400 mb-3">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white">PhD</div>
            <div className="text-xs text-gray-400 font-medium mt-1">Sports Science Research</div>
          </div>

          <div className="glass-card p-5 rounded-2xl text-center">
            <div className="inline-flex p-3 rounded-xl bg-purple-500/10 text-purple-400 mb-3">
              <Cpu className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white">Tauri 2</div>
            <div className="text-xs text-gray-400 font-medium mt-1">Rust & React Desktop</div>
          </div>

          <div className="glass-card p-5 rounded-2xl text-center">
            <div className="inline-flex p-3 rounded-xl bg-amber-500/10 text-amber-400 mb-3">
              <Code className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white">Gemini 3.5</div>
            <div className="text-xs text-gray-400 font-medium mt-1">Multimodal AI Engineering</div>
          </div>
        </div>
      </div>
    </section>
  );
};
