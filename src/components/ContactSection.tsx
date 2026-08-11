import React, { useState } from 'react';
import { Mail, Send, MapPin, CheckCircle2, Code, Globe, Share2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-slate-950/80">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
              Get In Touch
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Let&apos;s Build Next-Gen Sports Tech & AI Software
            </h2>
            
            <p className="text-gray-400 mt-4 text-base leading-relaxed mb-8">
              Interested in academic research collaborations, native desktop suite engineering, or custom AI multimodal development? Reach out directly!
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4 p-4 rounded-2xl glass-card">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-400">Location</div>
                  <div className="text-sm font-bold text-white">Algeria 🇩🇿</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl glass-card">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-400">GitHub Profile</div>
                  <div className="text-sm font-bold text-white">github.com/Salahalioui</div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://github.com/Salahalioui"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-2xl bg-slate-800 text-gray-300 hover:text-white hover:bg-slate-700 transition-colors border border-white/5"
                title="GitHub"
              >
                <Code className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/salahalioui"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-2xl bg-slate-800 text-gray-300 hover:text-white hover:bg-slate-700 transition-colors border border-white/5"
                title="LinkedIn"
              >
                <Globe className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/SALAH.ALIOUI32"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-2xl bg-slate-800 text-gray-300 hover:text-white hover:bg-slate-700 transition-colors border border-white/5"
                title="Facebook"
              >
                <Share2 className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="glass-panel p-8 rounded-3xl border border-white/10 relative shadow-2xl">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Message Received!</h3>
                <p className="text-sm text-gray-400">Thank you for reaching out. I will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Dr. Alex Rivera"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition-colors text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@institution.edu"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition-colors text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                    Project Collaboration Inquiry
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hello Salah, I would like to discuss a research collaboration on sports analytics software..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition-colors text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold text-sm shadow-lg hover:opacity-95 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Send Message
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
