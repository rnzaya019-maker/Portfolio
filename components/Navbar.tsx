import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
      className={`fixed w-full z-50 transition-all duration-500 border-b ${
        scrolled 
          ? 'bg-steppe-bg/95 backdrop-blur-md shadow-sm py-4 border-steppe-light/50' 
          : 'bg-transparent py-6 border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo/Name */}
        <a 
          href="#home" 
          onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
          className="group flex items-center gap-3"
        >
          {/* Logo Icon using SVG directly to avoid loading issues if image missing, but styled to match */}
          <div className="w-8 h-8 relative transition-transform duration-500 group-hover:rotate-180">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <path d="M50 10 L90 50 L50 90 L10 50 Z" stroke="#C05621" strokeWidth="8" />
              <rect x="35" y="35" width="30" height="30" stroke="#2C5282" strokeWidth="6" />
            </svg>
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
              className="relative font-sans text-xs tracking-[0.15em] font-medium text-steppe-text uppercase hover:text-steppe-accent transition-colors py-2 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-steppe-accent transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
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
      </div>
    </nav>
  );
};

export default Navbar;