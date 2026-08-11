import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ProjectModal } from './components/ProjectModal';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import type { Project } from './data/projects';

export function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-[#0b0f19] text-gray-100 relative">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection onSelectProject={(p) => setSelectedProject(p)} />
        <SkillsSection />
        <ContactSection />
      </main>
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
}

export default App;
