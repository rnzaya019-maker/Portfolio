import React from 'react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 px-6 bg-white relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-24">
          <span className="text-steppe-accent text-xs font-semibold tracking-[0.15em] uppercase mb-4 block">
            Solutions Architecture
          </span>
          <h2 className="font-serif text-5xl md:text-6xl text-steppe-text mb-8 leading-tight">
            Building <span className="italic font-normal">Operational</span> <br /> Excellence
          </h2>
          <p className="text-steppe-subtle max-w-xl mx-auto text-lg leading-relaxed">
            Bridging the gap between operational needs and technical capabilities through custom-built tools and process
            engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Project 1: PAR Vault */}
          <div className="group bg-steppe-surface rounded-[32px] overflow-hidden border border-steppe-surface-dark transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
            <div className="aspect-video relative bg-steppe-secondary overflow-hidden">
              <div className="absolute top-6 left-6 z-10">
                <span className="px-4 py-1.5 bg-steppe-accent text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg">
                  Full Stack
                </span>
              </div>
              <iframe
                src="https://rnzaya019-maker.github.io/PAR_Vault_Demo/"
                title="PAR Vault Demo"
                className="w-full h-full border-0 opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                loading="lazy"
              ></iframe>
            </div>
            <div className="p-10">
              <h3 className="text-3xl font-bold text-steppe-text mb-4">PAR Vault</h3>
              <p className="text-steppe-subtle text-lg leading-relaxed mb-8">
                A comprehensive operations platform designed for healthcare compliance. Features audit logging,
                role-based access, and document versioning.
              </p>
              <a
                href="https://rnzaya019-maker.github.io/PAR_Vault_Demo/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-steppe-accent font-bold text-sm group/link"
              >
                Live Demo
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>

          {/* Project 2: Workflow Digitalization */}
          <div className="group bg-steppe-surface rounded-[32px] overflow-hidden border border-steppe-surface-dark transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
            <div className="aspect-video relative bg-steppe-secondary overflow-hidden">
              <div className="absolute top-6 left-6 z-10">
                <span className="px-4 py-1.5 bg-steppe-gold text-steppe-text text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg">
                  Process Engineering
                </span>
              </div>
              <iframe
                src="https://na3.documents.adobe.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhCK6xE1Fy8MIz0qFfkz77HBBLVStxd8MqbBVV5b76Q6BhpSSVZTCxO0hkBQv5Pb1Mk*&hosted=false"
                className="w-full h-full border-0 opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                title="Adobe Acrobat Pro Form"
                loading="lazy"
              ></iframe>
            </div>
            <div className="p-10">
              <h3 className="text-3xl font-bold text-steppe-text mb-4">Workflow Digitalization</h3>
              <p className="text-steppe-subtle text-lg leading-relaxed mb-8">
                Digitized workflow solution reducing processing time by 60%. Demonstrates logic mapping, form validation,
                and user experience design.
              </p>
              <a
                href="https://na3.documents.adobe.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhCK6xE1Fy8MIz0qFfkz77HBBLVStxd8MqbBVV5b76Q6BhpSSVZTCxO0hkBQv5Pb1Mk*&hosted=false"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-steppe-accent font-bold text-sm group/link"
              >
                Case Study
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
