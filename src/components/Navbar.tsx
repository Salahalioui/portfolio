import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, Code, Globe, Share2 } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-panel py-3 border-b border-white/10 shadow-2xl' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-cyan-500 flex items-center justify-center font-bold text-white shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform">
              SA
            </div>
            <div>
              <span className="text-lg font-extrabold tracking-tight text-white block leading-none">
                Salah Alioui
              </span>
              <span className="text-xs text-emerald-400 font-medium">PhD • AI Developer</span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm font-medium text-gray-300 hover:text-emerald-400 transition-colors">About</a>
            <a href="#projects" className="text-sm font-medium text-gray-300 hover:text-emerald-400 transition-colors">Projects</a>
            <a href="#skills" className="text-sm font-medium text-gray-300 hover:text-emerald-400 transition-colors">Skills</a>
            <a href="#contact" className="text-sm font-medium text-gray-300 hover:text-emerald-400 transition-colors">Contact</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a 
              href="https://github.com/Salahalioui" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2.5 rounded-xl bg-slate-800/80 text-gray-300 hover:text-white hover:bg-slate-700 transition-colors border border-white/5"
              aria-label="GitHub Profile"
              title="GitHub Profile"
            >
              <Code className="w-4 h-4" />
            </a>
            <a 
              href="https://linkedin.com/in/salahalioui" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2.5 rounded-xl bg-slate-800/80 text-gray-300 hover:text-white hover:bg-slate-700 transition-colors border border-white/5"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
            >
              <Globe className="w-4 h-4" />
            </a>
            <a 
              href="#projects" 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg shadow-emerald-500/20 hover:opacity-95 hover:scale-[1.02] transition-all"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Explore Works
            </a>
          </div>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="md:hidden p-2 text-gray-400 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-white/10 pb-4 space-y-3">
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-gray-300 hover:text-emerald-400"
            >
              About
            </a>
            <a 
              href="#projects" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-gray-300 hover:text-emerald-400"
            >
              Projects
            </a>
            <a 
              href="#skills" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-gray-300 hover:text-emerald-400"
            >
              Skills
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-gray-300 hover:text-emerald-400"
            >
              Contact
            </a>
            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://github.com/Salahalioui" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 rounded-lg bg-slate-800 text-gray-300"
              >
                <Code className="w-4 h-4" />
              </a>
              <a 
                href="https://linkedin.com/in/salahalioui" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 rounded-lg bg-slate-800 text-gray-300"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a 
                href="https://facebook.com/SALAH.ALIOUI32" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 rounded-lg bg-slate-800 text-gray-300"
              >
                <Share2 className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
