import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import HeroCard from './HeroCard';

const Hero: React.FC = () => {
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = textRef.current;
    if (!container) return;

    const items = Array.from(container.querySelectorAll<HTMLElement>('.hero-reveal'));
    if (!items.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -10% 0px' }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden bg-gradient-to-br from-steppe-bg to-orange-50/50">
      <style>{`
        .hero-reveal {
          opacity: 0;
          transform: translateY(14px);
          transition: opacity 700ms ease, transform 700ms ease;
        }
        .hero-reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .status-dot {
          animation: statusPulse 2s ease-out infinite;
        }
        @keyframes statusPulse {
          0% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.45); }
          70% { box-shadow: 0 0 0 10px rgba(34, 197, 94, 0); }
          100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-reveal {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
          .status-dot {
            animation: none;
          }
        }
      `}</style>
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-lattice-pattern opacity-30 -z-10" />
      
      {/* Vertical Side Decoration */}
      <div className="hidden lg:block absolute left-8 top-1/2 -translate-y-1/2 h-2/3 w-2 bg-gradient-to-b from-steppe-secondary via-steppe-red to-steppe-accent opacity-20 rounded-full" />

      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <div ref={textRef} className="order-2 md:order-1 space-y-8 pl-0 md:pl-12">
          <div className="inline-block border-b-2 border-steppe-accent pb-2 hero-reveal" style={{ transitionDelay: '0ms' }}>
            <p className="font-sans text-steppe-accent font-semibold tracking-[0.15em] uppercase text-[0.75rem]">
              Operations & Technology Bridge
            </p>
          </div>
          
          <h1
            className="hero-reveal font-serif text-[clamp(3rem,6vw,5.5rem)] font-bold text-steppe-text leading-[0.9] tracking-[-0.02em]"
            style={{ transitionDelay: '120ms' }}
          >
            Connect <br/>
            <span className="italic text-steppe-secondary">Process</span> <span className="text-4xl align-middle font-sans font-light">&</span> <br/>
            Purpose.
          </h1>
          
          <p
            className="hero-reveal font-sans text-lg md:text-xl text-steppe-subtle max-w-lg leading-relaxed border-l-4 border-steppe-light pl-6"
            style={{ transitionDelay: '240ms' }}
          >
            I am <span className="italic text-steppe-secondary"><strong className="text-steppe-text">Ariunzaya Baasanjargal </strong> (Ariune).</span> <br/>
            I find where operations break, then I build the fix. Healthcare workflows, compliance systems, tools that actually get used.
          </p>

          <div className="hero-reveal" style={{ transitionDelay: '320ms' }}>
            <div className="inline-flex items-center gap-3 rounded-full border border-steppe-light bg-white/70 px-4 py-2 text-xs font-sans uppercase tracking-[0.2em] text-steppe-secondary">
              <span className="status-dot h-2.5 w-2.5 rounded-full bg-[#22C55E]" />
              Currently open to implementation & ops roles
            </div>
          </div>
          
          <div className="pt-8 hero-reveal" style={{ transitionDelay: '420ms' }}>
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

        {/* Right: Hero Card Stack */}
        <div className="order-1 md:order-2 h-[420px] md:h-[560px] w-full flex items-center justify-center">
          <div className="relative w-full max-w-md h-full flex items-center justify-center">
            <HeroCard
              title="PAR Vault"
              subtitle="Operations Platform · React + FastAPI"
              className="absolute z-30"
            />
            <HeroCard
              title="Workflow Digitalization"
              subtitle="60% faster processing · No-code + custom logic"
              className="absolute z-20"
              style={{ transform: 'translate(18px, 26px) rotate(-4deg)' }}
            />
            <HeroCard
              title="HIPAA Compliance System"
              subtitle="Audit logging · Role-based access"
              className="absolute z-10"
              style={{ transform: 'translate(36px, 52px) rotate(-8deg)' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
