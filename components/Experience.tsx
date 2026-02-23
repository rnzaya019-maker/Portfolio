import React, { useEffect, useRef } from 'react';
import { EXPERIENCE_DATA } from '../constants';

const Experience: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    const items = Array.from(sectionEl.querySelectorAll<HTMLElement>('.timeline-item'));
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

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-24 px-6 bg-steppe-bg relative overflow-hidden"
    >
      <style>{`
        .timeline-item {
          opacity: 0;
          transform: translateX(-24px);
          transition: opacity 600ms ease, transform 600ms ease;
          will-change: opacity, transform;
        }
        .timeline-item.is-visible {
          opacity: 1;
          transform: translateX(0);
        }
        .timeline-dot.pulse {
          animation: pulse 2.4s ease-out infinite;
        }
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(192, 86, 33, 0.35); }
          70% { box-shadow: 0 0 0 10px rgba(192, 86, 33, 0); }
          100% { box-shadow: 0 0 0 0 rgba(192, 86, 33, 0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .timeline-item {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
          .timeline-dot.pulse {
            animation: none;
          }
        }
      `}</style>
      {/* Background visual interest */}
      <div className="absolute left-0 top-20 w-32 h-32 border-l-8 border-t-8 border-steppe-surface-dark rounded-tl-3xl opacity-60" />
      <div className="absolute right-0 bottom-20 w-32 h-32 border-r-8 border-b-8 border-steppe-accent/20 rounded-br-3xl opacity-50" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Title Column */}
        <div className="lg:col-span-4">
          <div className="sticky top-32">
            <span className="font-sans text-steppe-accent font-semibold tracking-[0.15em] uppercase text-[0.75rem] mb-2 block">Career Path</span>
            <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] text-steppe-text mb-8 leading-tight">
              Professional <br/> <span className="italic text-steppe-secondary">Journey</span>
            </h2>
            <p className="font-sans text-steppe-subtle leading-loose mb-8">
              From managing international logistics to architecting healthcare systems, my career has been defined by one constant: optimizing the flow of information.
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-steppe-accent to-steppe-red" />
          </div>
        </div>

        {/* Timeline Column */}
        <div className="lg:col-span-8">
          <div className="relative ml-2">
            <div
              className="absolute left-3 top-0 h-full w-[2px] bg-steppe-surface-dark"
              aria-hidden="true"
            />
            <div className="space-y-14">
              {EXPERIENCE_DATA.map((item, index) => {
                const isCurrent = item.period.includes('Present');
                return (
                  <div
                    key={item.id}
                    className="timeline-item relative pl-12"
                    style={{ transitionDelay: `${index * 120}ms` }}
                  >
                    <div
                      className={`timeline-dot absolute left-1.5 top-2 h-3 w-3 rounded-full bg-steppe-accent shadow-[0_0_0_6px_rgba(192,83,58,0.15)] ${
                        isCurrent ? 'pulse' : ''
                      }`}
                    />

                    <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
                      <h3 className="font-serif text-2xl md:text-3xl text-steppe-secondary font-semibold">
                        {item.role}
                      </h3>
                      <span className="font-sans text-xs md:text-sm text-steppe-subtle font-semibold tracking-wide">
                        {item.period}
                      </span>
                    </div>

                    <div className="mt-2 flex flex-wrap items-center gap-2 text-steppe-accent font-sans text-xs">
                      <span className="uppercase tracking-[0.18em]">{item.company}</span>
                      <span className="w-1 h-1 bg-steppe-accent/60 rounded-full" />
                      <span>{item.location}</span>
                    </div>

                    <ul className="mt-6 space-y-3">
                      {item.description.map((desc, idx) => (
                        <li
                          key={idx}
                          className="flex gap-3 text-steppe-text/80 font-sans leading-relaxed text-sm md:text-[0.98rem]"
                        >
                          <span className="text-steppe-accent mt-0.5">→</span>
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Education Section - Narrative block */}
      <div className="max-w-5xl mx-auto mt-32">
        <div className="border-t border-steppe-light pt-16">
          <h3 className="font-serif text-[clamp(2rem,4vw,3.25rem)] text-steppe-text mb-10 text-center">Education</h3>

          <div className="mx-auto max-w-3xl bg-steppe-surface border border-steppe-surface-dark rounded-2xl px-8 py-10 text-center shadow-sm">
            <div className="space-y-6">
              <div>
                <p className="font-serif text-xl text-steppe-text">
                  M.S. Information Technology Management — Colorado State University Global
                </p>
                <p className="font-sans text-sm uppercase tracking-widest text-steppe-subtle mt-2">
                  Expected 2027 · In Progress
                </p>
              </div>

              <div>
                <p className="font-serif text-xl text-steppe-text">
                  B.S. Management Information Systems — Columbia College, Denver CO
                </p>
                <p className="font-sans text-sm text-steppe-subtle mt-2">
                  2022 – 2025 · Transitioned to graduate program after completing core MIS coursework
                </p>
              </div>

              <div>
                <p className="font-serif text-xl text-steppe-text">
                  B.A. Linguistics — University of the Humanities, Mongolia · 2018
                </p>
              </div>
            </div>

            <p className="mt-8 text-sm md:text-[0.98rem] italic text-steppe-accent font-light">
              "My academic path reflects how I work: I build on what I know, redirect when a better path emerges, and keep moving forward."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
