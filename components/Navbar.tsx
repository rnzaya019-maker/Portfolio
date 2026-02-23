import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS
      .map((link) => document.querySelector(link.href))
      .filter((section): section is HTMLElement => section instanceof HTMLElement);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0.1 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-steppe-bg/85 backdrop-blur-[12px] shadow-sm py-4 border-b border-steppe-light/60' 
          : 'bg-transparent py-6 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo/Name */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
          className="group flex items-center gap-3"
        >
          <div className="w-9 h-9 rounded-full bg-steppe-surface border border-steppe-surface-dark flex items-center justify-center transition-transform duration-300 group-hover:rotate-6">
            <img
              src="/assets/Ariune_Logo.png"
              alt="Ariune logo"
              className="w-6 h-6 object-contain"
              loading="lazy"
            />
          </div>
          <span className="font-serif text-xl md:text-2xl font-bold tracking-tight text-steppe-text group-hover:text-steppe-accent transition-colors">
            ARIUNE<span className="text-steppe-accent">.</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className={`relative font-sans text-xs tracking-[0.15em] font-medium uppercase transition-colors py-2 group ${
                activeSection === link.href ? 'text-steppe-accent' : 'text-steppe-text hover:text-steppe-accent'
              }`}
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-steppe-accent/60 transition-all duration-300 group-hover:w-full"></span>
              <span
                className={`absolute -bottom-2 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-steppe-accent transition-all duration-300 ${
                  activeSection === link.href ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                }`}
              />
            </a>
          ))}
        </div>

        {/* Desktop Resume Button */}
        <div className="hidden md:flex items-center">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-6 inline-flex items-center rounded-full bg-steppe-secondary px-6 py-2.5 text-xs font-sans uppercase tracking-[0.2em] text-white shadow-sm transition-all duration-300 hover:bg-steppe-text"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-steppe-text hover:text-steppe-accent transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`fixed inset-0 bg-steppe-bg z-40 transform transition-transform duration-300 md:hidden flex flex-col items-center justify-center space-y-8 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {NAV_LINKS.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
            className="font-serif text-3xl text-steppe-text hover:text-steppe-accent transition-colors"
          >
            {link.name}
          </a>
        ))}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center rounded-full bg-steppe-secondary px-8 py-3 text-xs font-sans uppercase tracking-[0.2em] text-white shadow-sm transition-all duration-300 hover:bg-steppe-text"
        >
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
