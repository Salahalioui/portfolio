import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ProjectModal } from './components/ProjectModal';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import type { Project } from './data/projects';
import type { Language } from './data/translations';

export function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [lang, setLang] = useState<Language>('en');

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div className={`min-h-screen bg-[#0b0f19] text-gray-100 relative ${lang === 'ar' ? 'font-arabic' : ''}`}>
      <Navbar lang={lang} onToggleLang={toggleLanguage} />
      <main>
        <HeroSection lang={lang} />
        <AboutSection lang={lang} />
        <ProjectsSection lang={lang} onSelectProject={(p) => setSelectedProject(p)} />
        <SkillsSection lang={lang} />
        <ContactSection lang={lang} />
      </main>
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
}

export default App;
