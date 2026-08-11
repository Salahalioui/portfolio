import React from 'react';
import { X, ExternalLink, Cpu, CheckCircle, Layers, Sparkles, Code } from 'lucide-react';
import type { Project } from '../data/projects';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-3xl glass-panel rounded-3xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto border border-white/10 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2.5 rounded-full bg-slate-800/80 text-gray-400 hover:text-white hover:bg-slate-700 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6 pr-10">
          <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2">
            {project.categoryLabel}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            {project.title}
          </h2>
          <p className="text-sm text-cyan-400 font-medium mt-1">
            {project.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-900/60 border border-white/5 mb-6">
          {project.metrics.map((m, idx) => (
            <div key={idx} className="text-center">
              <div className="text-xs text-gray-400 font-medium">{m.label}</div>
              <div className="text-sm sm:text-base font-bold text-white mt-0.5">{m.value}</div>
            </div>
          ))}
        </div>

        <div className="mb-6">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            Project Deep-Dive
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            {project.longDescription}
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
            <Cpu className="w-4 h-4 text-cyan-400" />
            System Architecture
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.architecture.map((item, idx) => (
              <span key={idx} className="px-3 py-1.5 rounded-xl bg-slate-800/80 border border-white/10 text-xs font-medium text-emerald-300">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
            <Layers className="w-4 h-4 text-purple-400" />
            Key Engineering Features
          </h3>
          <ul className="space-y-2">
            {project.features.map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold text-xs shadow-lg hover:opacity-95 transition-all"
          >
            <Code className="w-4 h-4" />
            View GitHub Source
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl glass-card text-gray-200 font-semibold text-xs hover:text-white transition-all"
            >
              <ExternalLink className="w-4 h-4 text-cyan-400" />
              Live Demo Application
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
