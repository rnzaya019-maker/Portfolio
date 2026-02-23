import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-steppe-text py-20 px-6 text-steppe-bg relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-lattice-pattern pointer-events-none" />
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <span className="text-steppe-accent font-sans text-[0.75rem] uppercase tracking-[0.15em] font-semibold">
          Let’s Connect
        </span>
        <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] text-white mt-4 mb-6">
          Ready to Optimize?
        </h2>
        <p className="font-sans text-steppe-light/80 mb-12 max-w-2xl mx-auto">
          Currently open to opportunities in Technical Implementation and Operations Management.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
          <a
            href="mailto:rn.zaya019@gmail.com"
            className="flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-white hover:text-steppe-accent hover:border-steppe-accent/60 transition-colors group"
          >
            <div className="p-2.5 border border-white/20 rounded-full group-hover:border-steppe-accent transition-colors">
              <Mail size={18} />
            </div>
            <span className="font-sans tracking-wide">rn.zaya019@gmail.com</span>
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-white hover:text-steppe-accent hover:border-steppe-accent/60 transition-colors group"
          >
            <div className="p-2.5 border border-white/20 rounded-full group-hover:border-steppe-accent transition-colors">
              <Linkedin size={18} />
            </div>
            <span className="font-sans tracking-wide">LinkedIn Profile</span>
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-white hover:text-steppe-accent hover:border-steppe-accent/60 transition-colors group"
          >
            <div className="p-2.5 border border-white/20 rounded-full group-hover:border-steppe-accent transition-colors">
              <Github size={18} />
            </div>
            <span className="font-sans tracking-wide">GitHub Profile</span>
          </a>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-xs text-steppe-light/40 font-sans uppercase tracking-widest">
          © {new Date().getFullYear()} Ariunzaya Baasanjargal.
        </div>
      </div>
    </footer>
  );
};

export default Contact;
