import React from 'react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-white relative">
      {/* Side margin decoration */}
      <div className="hidden xl:block absolute left-12 top-0 bottom-0 w-px bg-steppe-light/50" />
      <div className="hidden xl:block absolute right-12 top-0 bottom-0 w-px bg-steppe-light/50" />

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] text-steppe-text mb-6">Solutions Architecture</h2>
          <p className="font-sans text-steppe-subtle max-w-xl mx-auto text-lg">
            Bridging the gap between operational needs and technical capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: 'PAR Vault',
              category: 'Full Stack',
              description:
                'A React + FastAPI operations platform built for healthcare compliance with audit logging, role-based access, and document versioning.',
              link: 'https://rnzaya019-maker.github.io/PAR_Vault_Demo/',
              cta: 'Live Demo →',
              gradient: 'from-steppe-secondary via-steppe-secondary to-steppe-accent/80',
              embed: 'https://rnzaya019-maker.github.io/PAR_Vault_Demo/'
            },
            {
              title: 'Workflow Digitalization',
              category: 'Process Engineering',
              description:
                'Digitized workflow system that reduced processing time by 60%, highlighting logic mapping, validation, and user-centered design.',
              link:
                'https://na3.documents.adobe.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhCK6xE1Fy8MIz0qFfkz77HBBLVStxd8MqbBVV5b76Q6BhpSSVZTCxO0hkBQv5Pb1Mk*&hosted=false',
              cta: 'Case Study →',
              gradient: 'from-steppe-red via-steppe-secondary/70 to-steppe-accent/70',
              embed:
                'https://na3.documents.adobe.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhCK6xE1Fy8MIz0qFfkz77HBBLVStxd8MqbBVV5b76Q6BhpSSVZTCxO0hkBQv5Pb1Mk*&hosted=false'
            }
          ].map((project) => (
            <div
              key={project.title}
              className="group rounded-[20px] border border-steppe-surface-dark bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_60px_rgba(28,43,74,0.16)] motion-reduce:transform-none motion-reduce:transition-none"
            >
              <div className="relative w-full overflow-hidden rounded-t-[20px] bg-steppe-bg">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-30 pointer-events-none`} />
                <div className="absolute inset-0 bg-lattice-pattern opacity-5 pointer-events-none" />
                <div className="relative aspect-video w-full">
                  <iframe
                    src={project.embed}
                    title={`${project.title} Preview`}
                    className="absolute inset-0 h-full w-full border-0"
                    loading="lazy"
                  ></iframe>
                </div>
                <span className="absolute left-4 top-4 inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-sans uppercase tracking-widest text-steppe-secondary shadow-sm">
                  {project.category}
                </span>
              </div>

              <div className="p-6">
                <h3 className="font-serif text-2xl text-steppe-text mb-3">{project.title}</h3>
                <p className="font-sans text-steppe-subtle leading-relaxed mb-6">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-steppe-accent font-sans text-sm uppercase tracking-widest hover:text-steppe-secondary transition-colors"
                >
                  {project.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
