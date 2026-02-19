import React from 'react';
import PatternDivider from './PatternDivider';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 bg-white relative overflow-hidden">
      {/* Background Cloud Motif - Low Opacity */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-full pointer-events-none opacity-5">
         <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#C05621" d="M45,-75C58.3,-69.3,69.2,-59.3,77.6,-47.6C86,-35.9,91.9,-22.4,90.4,-9.4C88.9,3.6,80,16.2,70.5,27.3C61,38.4,50.9,48.1,39.7,56.7C28.5,65.3,16.2,72.9,2.8,77.8C-10.6,82.7,-25.1,84.9,-38.3,80.6C-51.5,76.3,-63.4,65.5,-72.1,52.8C-80.8,40.1,-86.3,25.5,-86.9,10.6C-87.5,-4.3,-83.2,-19.5,-74.5,-31.6C-65.8,-43.7,-52.7,-52.7,-39.7,-58.5C-26.7,-64.3,-13.8,-66.9,0.3,-67.4C14.4,-67.9,28.8,-66.3,31.7,-80.7" transform="translate(100 100)" />
         </svg>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <span className="text-steppe-accent font-sans text-xs uppercase tracking-[0.3em]">My Philosophy</span>
          <h2 className="font-serif text-4xl md:text-5xl text-steppe-text mt-4 mb-6">The Human Bridge</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-steppe-secondary to-steppe-accent mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
           <div className="prose prose-lg text-steppe-text/80 font-sans leading-loose text-justify">
             <p className="mb-6 first-letter:text-5xl first-letter:font-serif first-letter:text-steppe-accent first-letter:mr-2 first-letter:float-left">
              Managing the chaos of healthcare operations taught me one vital lesson: Systems only succeed when they serve the people utilizing them.
             </p>
             <p>
               My journey began in logistics, ensuring precision across borders. Now, I leverage my MIS background to architect technical solutions that solve real-world operational pain points. I speak three languages (English, Mongolian, and Japanese) but my most important language is translating business needs into code.
             </p>
           </div>
           
           <div className="bg-steppe-bg p-8 border border-steppe-light rounded-xl shadow-[8px_8px_0px_0px_rgba(180,105,14,0.1)]">
              <blockquote className="font-serif text-2xl text-steppe-text italic leading-relaxed text-center">
                "Successful implementation isn't measured by deployment. It's measured by how seamlessly the tool supports the people doing the actual work."
              </blockquote>
              <div className="mt-6 flex justify-center">
                 <div className="w-12 h-12 rounded-full bg-steppe-light flex items-center justify-center">
                    <span className="font-serif font-bold text-steppe-accent text-xl">Ariune.</span>
                 </div>
              </div>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Technical", skills: ["Python & FastAPI", "React & TypeScript", "PostgreSQL & SQL", "Docker & Git"], color: "border-l-4 border-steppe-secondary" },
            { title: "Operations", skills: ["Process Design", "Compliance Mgmt", "Training Development", "Documentation"], color: "border-l-4 border-steppe-accent" },
            { title: "Domain", skills: ["Healthcare IT", "HIPAA Compliance", "AI Tool Implementation", "Prompt Engineering"], color: "border-l-4 border-steppe-red" }
          ].map((area, idx) => (
            <div key={idx} className={`p-8 bg-steppe-bg hover:bg-white transition-colors duration-300 shadow-sm hover:shadow-md ${area.color}`}>
              <h3 className="font-serif text-xl mb-6 text-steppe-text flex items-center gap-2">
                {area.title}
              </h3>
              <ul className="space-y-3 font-sans text-sm text-steppe-subtle">
                {area.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-steppe-light rounded-full"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
                {/* Resume Button */}
                        <div className="flex justify-center mt-12">
                                  <a
                                              href="/resume.pdf"
                                                          target="_blank"
                                                                      rel="noopener noreferrer"
                                                                                  className="group inline-flex items-center gap-3 px-8 py-4 bg-steppe-text text-steppe-bg font-serif text-lg rounded-none border-2 border-steppe-text hover:bg-transparent hover:text-steppe-text transition-all duration-300 shadow-[6px_6px_0px_0px_rgba(180,105,14,0.4)] hover:shadow-[2px_2px_0px_0px_rgba(180,105,14,0.4)] hover:translate-x-1 hover:translate-y-1"
                                                                                            >
                                                                                                          <svg className="w-5 h-5 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                                                                                                    </svg>
                                                                                                                                                View Resume
                                                                                                                                                            <span className="text-steppe-accent font-sans text-xs uppercase tracking-widest">PDF</span>
                                                                                                                                                                      </a>
                                                                                                                                                                              </div>
      </div>
      <PatternDivider />
    </section>
  );
};

export default About;