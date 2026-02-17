import React from 'react';
import { ArrowDown } from 'lucide-react';
import ThreeDLogo from './ThreeDLogo';

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden bg-gradient-to-br from-steppe-bg to-orange-50/50">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-lattice-pattern opacity-30 -z-10" />
      
      {/* Vertical Side Decoration */}
      <div className="hidden lg:block absolute left-8 top-1/2 -translate-y-1/2 h-2/3 w-2 bg-gradient-to-b from-steppe-secondary via-steppe-red to-steppe-accent opacity-20 rounded-full" />

      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <div className="order-2 md:order-1 space-y-8 pl-0 md:pl-12">
          <div className="inline-block border-b-2 border-steppe-accent pb-2">
            <p className="font-sans text-steppe-accent font-bold tracking-[0.2em] uppercase text-xs md:text-sm">
              Operations & Technology Bridge
            </p>
          </div>
          
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-steppe-text leading-[0.9]">
            Connect <br/>
            <span className="italic text-steppe-secondary">Process</span> <span className="text-4xl align-middle font-sans font-light">&</span> <br/>
            Purpose.
          </h1>
          
          <p className="font-sans text-lg md:text-xl text-steppe-subtle max-w-lg leading-relaxed border-l-4 border-steppe-light pl-6">
            I am <span className="italic text-steppe-secondary"><strong className="text-steppe-text">Ariunzaya Baasanjargal </strong> (Ariune).</span> <br/>
            I transform operational chaos into streamlined technical architecture.
          </p>
          
          <div className="pt-8">
            <button 
              onClick={scrollToProjects}
              className="group flex items-center gap-4 font-serif italic text-xl text-steppe-text hover:text-steppe-accent transition-all"
            >
              See the work
              <span className="group-hover:translate-y-2 transition-transform duration-300 bg-steppe-accent text-white p-2 rounded-full">
                <ArrowDown size={20} />
              </span>
            </button>
          </div>
        </div>

        {/* Right: Custom 3D Logo */}
        <div className="order-1 md:order-2 h-[400px] md:h-[600px] w-full flex items-center justify-center">
          <ThreeDLogo />
        </div>
      </div>
    </section>
  );
};

export default Hero;