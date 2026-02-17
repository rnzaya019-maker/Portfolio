import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-steppe-text py-16 px-6 text-steppe-bg">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-white mb-8">Ready to Optimize?</h2>
        <p className="font-sans text-steppe-light/80 mb-12 max-w-lg mx-auto">
          Currently open to opportunities in Technical Implementation and Operations Management.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          <a 
            href="mailto:rn.zaya019@gmail.com" 
            className="flex items-center gap-3 text-white hover:text-steppe-accent transition-colors group"
          >
            <div className="p-3 border border-white/20 rounded-full group-hover:border-steppe-accent transition-colors">
              <Mail size={20} />
            </div>
            <span className="font-sans tracking-wide">rn.zaya019@gmail.com</span>
          </a>

          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-white hover:text-steppe-accent transition-colors group"
          >
            <div className="p-3 border border-white/20 rounded-full group-hover:border-steppe-accent transition-colors">
              <Linkedin size={20} />
            </div>
            <span className="font-sans tracking-wide">LinkedIn Profile</span>
          </a>
          
           <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-white hover:text-steppe-accent transition-colors group"
          >
            <div className="p-3 border border-white/20 rounded-full group-hover:border-steppe-accent transition-colors">
              <Github size={20} />
            </div>
            <span className="font-sans tracking-wide">GitHub Profile</span>
          </a>
        </div>

        <div className="mt-20 pt-8 border-t border-white/10 text-xs text-steppe-light/40 font-sans uppercase tracking-widest">
          © {new Date().getFullYear()} Ariunzaya Baasanjargal. Built with the Modern Steppe Design System.
        </div>
      </div>
    </footer>
  );
};

export default Contact;