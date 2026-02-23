import React from 'react';

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
          <span className="text-steppe-accent font-sans text-[0.75rem] uppercase tracking-[0.15em] font-semibold">My Philosophy</span>
          <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] text-steppe-text mt-4 mb-6">The Human Bridge</h2>
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
           
           <div className="bg-steppe-surface p-8 border border-steppe-surface-dark rounded-xl shadow-[8px_8px_0px_0px_rgba(180,105,14,0.1)]">
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

        <div className="mb-20">
          <div className="mx-auto max-w-3xl bg-steppe-secondary border border-steppe-secondary rounded-2xl p-8 shadow-[0_20px_50px_rgba(28,43,74,0.2)] relative">
            <div className="absolute -left-2 top-8 h-12 w-1.5 bg-steppe-accent rounded-full" aria-hidden="true" />
            <span className="block text-steppe-accent font-sans text-[0.75rem] uppercase tracking-[0.15em] font-semibold mb-3">
              Why I Build
            </span>
            <blockquote className="font-serif text-xl md:text-2xl text-white italic leading-relaxed">
              "I build because I've seen where operations slow teams down, creating clear, practical systems that reduce friction and help people move with confidence."
            </blockquote>
          </div>
        </div>

        <div className="text-center mb-12">
          <span className="text-steppe-accent font-sans text-[0.75rem] uppercase tracking-[0.2em] font-semibold">
            Tools are temporary. Outcomes are permanent.
          </span>
          <h3 className="mt-4 font-serif text-[clamp(2rem,3.6vw,3.25rem)] text-steppe-secondary">
            Core Competencies
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "I Build With",
              skills: ["Python & FastAPI", "React & TypeScript", "PostgreSQL & SQL", "Docker & Git"],
              color: "border-l-4 border-steppe-secondary"
            },
            {
              title: "I Operate In",
              skills: [
                "Process Design & Optimization",
                "Compliance Management (HIPAA)",
                "Training & Documentation",
                "Workflow Digitalization"
              ],
              color: "border-l-4 border-steppe-accent"
            },
            {
              title: "I Specialize In",
              skills: [
                "Healthcare IT Systems",
                "AI Tool Implementation",
                "Prompt Engineering",
                "Implementation Planning"
              ],
              color: "border-l-4 border-steppe-red"
            }
          ].map((area, idx) => (
            <div
              key={idx}
              className="p-6 md:p-8 bg-transparent"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="h-2.5 w-2.5 rounded-full bg-steppe-accent" />
                <h3 className="font-serif text-xl text-steppe-secondary">
                  {area.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-3 font-sans text-sm text-steppe-secondary">
                {area.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="inline-flex items-center px-4 py-2 rounded-full bg-steppe-surface border border-steppe-surface-dark text-steppe-secondary font-medium transition-all duration-200 hover:bg-steppe-secondary hover:text-white hover:border-steppe-secondary hover:-translate-y-0.5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-center gap-6 text-steppe-accent/70">
          <div className="hidden md:block h-px w-28 bg-steppe-surface-dark" />
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rotate-45 bg-steppe-accent" />
            <span className="h-1.5 w-1.5 rotate-45 bg-steppe-accent" />
            <span className="h-1.5 w-1.5 rotate-45 bg-steppe-accent" />
          </div>
          <div className="hidden md:block h-px w-28 bg-steppe-surface-dark" />
        </div>

        {/* Education Section - Narrative block */}
        <div className="max-w-5xl mx-auto mt-20">
          <div className="border-t border-steppe-surface-dark pt-12">
            <h3 className="font-serif text-[clamp(2rem,4vw,3.25rem)] text-steppe-secondary mb-10 text-center">
              Education
            </h3>

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
    </section>
  );
};

export default About;
