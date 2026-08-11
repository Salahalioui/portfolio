import React, { useState } from 'react';
import { Mail, Send, MapPin, CheckCircle2, Code, Globe, Share2, Copy, Check, Clock } from 'lucide-react';
import { TRANSLATIONS, type Language } from '../data/translations';

interface ContactSectionProps {
  lang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang }) => {
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const t = TRANSLATIONS[lang].contact;
  const isAr = lang === 'ar';

  const copyEmail = () => {
    navigator.clipboard.writeText('salahallioui01@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-slate-950/90">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4 glow-badge-emerald">
              <Clock className="w-3.5 h-3.5" />
              {isAr ? 'رد سريع خلال 24 ساعة (بالعربية والإنجليزية)' : 'Guaranteed 24-Hour Response'}
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {t.title}
            </h2>
            
            <p className="text-gray-400 mt-4 text-base leading-relaxed mb-8">
              {t.subtitle}
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4 p-4 rounded-2xl glass-card border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 font-bold">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-semibold">{t.location}</div>
                  <div className="text-sm font-bold text-white">{t.locationVal}</div>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 rounded-2xl glass-card border border-white/10 group hover:border-cyan-500/40 transition-colors">
                <a href="mailto:salahallioui01@gmail.com" className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0 font-bold">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-semibold">{t.email}</div>
                    <div className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">
                      salahallioui01@gmail.com
                    </div>
                  </div>
                </a>

                <button
                  onClick={copyEmail}
                  className="p-2.5 rounded-xl bg-slate-800 text-gray-300 hover:text-white hover:bg-slate-700 transition-colors border border-white/10 text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
                  title="Copy email address"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  <span className="hidden sm:inline">{copied ? (isAr ? 'تم النسخ' : 'Copied') : (isAr ? 'نسخ' : 'Copy')}</span>
                </button>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://github.com/Salahalioui"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-2xl bg-slate-800 text-gray-300 hover:text-white hover:bg-slate-700 transition-colors border border-white/5 shadow-md"
                title="GitHub Profile"
              >
                <Code className="w-5 h-5" />
              </a>
              
              <a
                href="https://www.linkedin.com/in/alioui-salah-dine-6301b410a/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-2xl bg-slate-800 text-gray-300 hover:text-white hover:bg-slate-700 transition-colors border border-white/5 shadow-md"
                title="LinkedIn Profile"
              >
                <Globe className="w-5 h-5" />
              </a>

              <a
                href="https://facebook.com/SALAH.ALIOUI32"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-2xl bg-slate-800 text-gray-300 hover:text-white hover:bg-slate-700 transition-colors border border-white/5 shadow-md"
                title="Facebook"
              >
                <Share2 className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 relative shadow-2xl">
            {submitted ? (
              <div className="text-center py-12 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{t.sentTitle}</h3>
                <p className="text-sm text-gray-400">{t.sentDesc}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
                    {t.nameLabel}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Dr. Alex Rivera"
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition-colors text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
                    {t.emailLabel}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@institution.edu"
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition-colors text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
                    {t.msgLabel}
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hello Salah, I would like to discuss a freelance project or research collaboration..."
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition-colors text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white font-bold text-sm shadow-xl shadow-emerald-500/20 hover:opacity-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  {t.sendBtn}
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/10 text-center text-xs text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © {new Date().getFullYear()} Salah Alioui. All rights reserved.
          </div>
          <div>
            Designed with React 19, TypeScript, and Tailwind CSS • Published on Vercel
          </div>
        </div>
      </div>
    </section>
  );
};
