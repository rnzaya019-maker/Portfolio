import React from 'react';
import PatternDivider from './PatternDivider';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-white relative">
      {/* Side margin decoration */}
      <div className="hidden xl:block absolute left-12 top-0 bottom-0 w-px bg-steppe-light/50" />
      <div className="hidden xl:block absolute right-12 top-0 bottom-0 w-px bg-steppe-light/50" />

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="font-serif text-5xl text-steppe-text mb-6">Solutions Architecture</h2>
          <p className="font-sans text-steppe-subtle max-w-xl mx-auto text-lg">
            Bridging the gap between operational needs and technical capabilities.
          </p>
        </div>

        <div className="space-y-12">
          
          {/* Project 1: PAR Vault */}
          <div className="group">
             <div className="flex items-center gap-4 mb-8">
                <div className="h-px bg-steppe-accent flex-grow opacity-30"></div>
                <h3 className="font-serif text-3xl text-steppe-text text-center px-4">LIVE DEMO: PAR Vault </h3>
                <div className="h-px bg-steppe-accent flex-grow opacity-30"></div>
             </div>
             
             <div className="relative bg-steppe-bg p-2 rounded-2xl border border-steppe-light shadow-sm group-hover:shadow-xl transition-all duration-500">
                {/* Decorative Top Bar */}
                <div className="h-2 w-full bg-gradient-to-r from-steppe-secondary via-steppe-light to-steppe-secondary rounded-t-xl mb-1 opacity-50" />
                
                <div className="aspect-video w-full relative overflow-hidden rounded-xl bg-white">
                  <iframe
                    src="https://rnzaya019-maker.github.io/PAR_Vault_Demo/"
                    title="PAR Vault Demo"
                    className="w-full h-full border-0"
                    loading="lazy"
                  ></iframe>
                </div>
             </div>
             
             <div className="flex justify-between items-start mt-6 px-2">
                <div className="max-w-2xl">
                    <p className="font-sans text-steppe-subtle leading-relaxed">
                      A comprehensive React & FastAPI operations platform designed for healthcare compliance. 
                      Features audit logging, role-based access, and document versioning.
                    </p>
                </div>
                <span className="hidden md:block font-serif italic text-steppe-secondary text-sm">Full Stack Development</span>
             </div>
          </div>

          {/* Decorative Spacer between projects */}
          <div className="flex justify-center opacity-40">
             <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="18" y="0" width="4" height="40" fill="#b4690e"/>
                <rect x="0" y="18" width="40" height="4" fill="#b4690e"/>
                <circle cx="20" cy="20" r="8" stroke="#b4690e" strokeWidth="2" fill="white"/>
             </svg>
          </div>

          {/* Project 2: Adobe Widget */}
          <div className="group">
             <div className="flex items-center gap-4 mb-8">
                <div className="h-px bg-steppe-accent flex-grow opacity-30"></div>
                <h3 className="font-serif text-3xl text-steppe-text text-center px-4">The Logic: Workflow Digitalization </h3>
                <div className="h-px bg-steppe-accent flex-grow opacity-30"></div>
             </div>
             
             <div className="relative bg-steppe-bg p-2 rounded-2xl border border-steppe-light shadow-sm group-hover:shadow-xl transition-all duration-500">
                {/* Decorative Top Bar */}
                <div className="h-2 w-full bg-gradient-to-r from-steppe-red via-steppe-light to-steppe-red rounded-t-xl mb-1 opacity-50" />

                <div className="aspect-[4/3] md:aspect-video w-full relative overflow-hidden rounded-xl bg-white">
                   <iframe 
                    src="https://na3.documents.adobe.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhCK6xE1Fy8MIz0qFfkz77HBBLVStxd8MqbBVV5b76Q6BhpSSVZTCxO0hkBQv5Pb1Mk*&hosted=false" 
                    className="w-full h-full border-0"
                    title="Adobe Acrobat Pro Form"
                    loading="lazy"
                  ></iframe>
                </div>
             </div>

             <div className="flex justify-between items-start mt-6 px-2">
                <div className="max-w-2xl">
                    <p className="font-sans text-steppe-subtle leading-relaxed">
                      Digitized workflow solution reducing processing time by 60%. 
                      Demonstrates logic mapping, form validation, and user experience design in a no-code environment.
                    </p>
                </div>
                <span className="hidden md:block font-serif italic text-steppe-red text-sm">Process Engineering</span>
             </div>
          </div>

        </div>
      </div>
      <PatternDivider />
    </section>
  );
};

export default Projects;