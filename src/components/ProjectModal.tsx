import React, { useState, useEffect } from 'react';
import { X, ExternalLink, Cpu, CheckCircle, Layers, Sparkles, Code, Activity, Terminal, Copy, Check } from 'lucide-react';
import type { Project } from '../data/projects';
import type { Language } from '../data/translations';

interface ProjectModalProps {
  project: Project | null;
  lang: Language;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, lang, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'features'>('overview');
  const [copied, setCopied] = useState(false);
  const isAr = lang === 'ar';

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const copyRepoUrl = () => {
    navigator.clipboard.writeText(project.githubUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl glass-panel rounded-3xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto border border-white/15 shadow-2xl ltr:text-left rtl:text-right"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 ltr:right-6 rtl:left-6 p-2.5 rounded-full bg-slate-800/90 text-gray-400 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer border border-white/10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6 ltr:pr-12 rtl:pl-12">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="px-3.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-wider border border-emerald-500/20">
              {project.categoryLabel}
            </span>

            <span className="px-3 py-1 rounded-full bg-slate-800 text-cyan-300 text-xs font-mono font-semibold border border-white/10 flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-cyan-400" />
              Verified Stack
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            {project.title}
          </h2>
          <p className="text-sm text-cyan-400 font-semibold mt-1">
            {project.subtitle}
          </p>
        </div>

        <div className="flex items-center gap-2 pb-4 mb-6 border-b border-white/10">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'overview'
                ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg shadow-emerald-500/20'
                : 'bg-slate-800/80 text-gray-400 hover:text-white'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 inline ltr:mr-1.5 rtl:ml-1.5" />
            {isAr ? 'نظرة عامة والمقاييس' : 'Overview & Metrics'}
          </button>

          <button
            onClick={() => setActiveTab('architecture')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'architecture'
                ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg shadow-emerald-500/20'
                : 'bg-slate-800/80 text-gray-400 hover:text-white'
            }`}
          >
            <Cpu className="w-3.5 h-3.5 inline ltr:mr-1.5 rtl:ml-1.5" />
            {isAr ? 'المعمارية والتقنيات' : 'System Architecture'}
          </button>

          <button
            onClick={() => setActiveTab('features')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'features'
                ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg shadow-emerald-500/20'
                : 'bg-slate-800/80 text-gray-400 hover:text-white'
            }`}
          >
            <Layers className="w-3.5 h-3.5 inline ltr:mr-1.5 rtl:ml-1.5" />
            {isAr ? 'المميزات الهندسية' : 'Engineering Features'}
          </button>
        </div>

        {activeTab === 'overview' && (
          <div className="space-y-6 animate-fade-in">
            <div className="grid grid-cols-3 gap-4 p-5 rounded-2xl bg-slate-900/80 border border-white/10 shadow-inner">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-xs text-gray-400 font-semibold">{m.label}</div>
                  <div className="text-sm sm:text-base font-extrabold text-white mt-1 text-emerald-400">{m.value}</div>
                </div>
              ))}
            </div>

            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                {isAr ? 'تفاصيل وتأثير المشروع' : 'Project Deep-Dive & Impact'}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {project.longDescription}
              </p>
            </div>
          </div>
        )}

        {activeTab === 'architecture' && (
          <div className="space-y-6 animate-fade-in">
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-cyan-400" />
                {isAr ? 'مكونات البنية البرمجية' : 'Core Architecture Components'}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {project.architecture.map((item, idx) => (
                  <span key={idx} className="px-3.5 py-2 rounded-xl bg-slate-800/90 border border-white/10 text-xs font-bold text-emerald-300 flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4 text-purple-400" />
                {isAr ? 'تقنيات ومكتبات المشروع' : 'Full Tech Stack'}
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, idx) => (
                  <span key={idx} className="px-3 py-1.5 rounded-lg bg-slate-900 border border-white/10 text-xs font-semibold text-gray-200">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'features' && (
          <div className="space-y-4 animate-fade-in">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              {isAr ? 'قائمة المميزات البرمجية والتصميمية' : 'Verified Capabilities & Features'}
            </h3>
            <ul className="space-y-3">
              {project.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-gray-200 p-3 rounded-xl bg-slate-900/60 border border-white/5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 mt-8 border-t border-white/10">
          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold text-xs shadow-lg hover:opacity-95 transition-all"
            >
              <Code className="w-4 h-4" />
              {isAr ? 'معاينة كود GitHub' : 'View GitHub Source'}
            </a>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl glass-card text-gray-200 font-semibold text-xs hover:text-white transition-all"
              >
                <ExternalLink className="w-4 h-4 text-cyan-400" />
                {isAr ? 'التطبيق المباشر' : 'Live Application'}
              </a>
            )}
          </div>

          <button
            onClick={copyRepoUrl}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800 text-gray-300 hover:text-white text-xs font-semibold border border-white/10 transition-colors cursor-pointer"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? (isAr ? 'تم النسخ!' : 'Copied Link!') : (isAr ? 'نسخ رابط المستودع' : 'Copy Repo Link')}</span>
          </button>
        </div>

      </div>
    </div>
  );
};
