import React, { useState } from 'react';
import { PROJECTS, type Project } from '../data/projects';
import { ArrowUpRight, Code } from 'lucide-react';
import { TRANSLATIONS, type Language } from '../data/translations';

interface ProjectsSectionProps {
  lang: Language;
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ lang, onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const t = TRANSLATIONS[lang].projects;

  const filteredProjects = PROJECTS.filter((p) => {
    if (activeFilter === 'all') return true;
    return p.category === activeFilter;
  });

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            {t.badge}
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {t.title}
          </h2>
          <p className="text-gray-400 mt-4 text-base">
            {t.subtitle}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeFilter === 'all'
                ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg shadow-emerald-500/20'
                : 'glass-card text-gray-400 hover:text-white'
            }`}
          >
            {t.all} ({PROJECTS.length})
          </button>

          <button
            onClick={() => setActiveFilter('sports-tech')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeFilter === 'sports-tech'
                ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg shadow-emerald-500/20'
                : 'glass-card text-gray-400 hover:text-white'
            }`}
          >
            {t.sportsTech}
          </button>

          <button
            onClick={() => setActiveFilter('ai-vision')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeFilter === 'ai-vision'
                ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg shadow-emerald-500/20'
                : 'glass-card text-gray-400 hover:text-white'
            }`}
          >
            {t.aiVision}
          </button>

          <button
            onClick={() => setActiveFilter('full-stack')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeFilter === 'full-stack'
                ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg shadow-emerald-500/20'
                : 'glass-card text-gray-400 hover:text-white'
            }`}
          >
            {t.fullStack}
          </button>

          <button
            onClick={() => setActiveFilter('research')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeFilter === 'research'
                ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg shadow-emerald-500/20'
                : 'glass-card text-gray-400 hover:text-white'
            }`}
          >
            {t.research}
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="glass-card rounded-3xl p-6 flex flex-col justify-between cursor-pointer group hover:border-emerald-500/40 relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[11px] font-bold uppercase tracking-wider">
                    {project.categoryLabel}
                  </span>
                  <div className="p-2 rounded-xl bg-slate-800/80 text-gray-400 group-hover:text-emerald-400 group-hover:bg-slate-700 transition-colors">
                    <ArrowUpRight className="w-4 h-4 rtl:rotate-90" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-cyan-400 font-medium mt-0.5 mb-3">
                  {project.subtitle}
                </p>

                <p className="text-gray-300 text-xs leading-relaxed line-clamp-3 mb-6">
                  {project.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.techStack.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-slate-900/80 border border-white/5 text-[11px] text-gray-300 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="px-2 py-1 rounded-lg bg-slate-900/80 text-[11px] text-gray-400 font-medium">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform">
                    {t.inspect}
                  </span>
                  <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-800/80 text-gray-300 hover:text-white hover:bg-slate-700 transition-colors"
                      title="View GitHub Source"
                    >
                      <Code className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
