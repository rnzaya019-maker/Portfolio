import React from 'react';
import { EXPERIENCE_DATA, EDUCATION_DATA } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-steppe-bg relative overflow-hidden">
      {/* Background visual interest */}
      <div className="absolute left-0 top-20 w-32 h-32 border-l-8 border-t-8 border-steppe-light rounded-tl-3xl opacity-50" />
      <div className="absolute right-0 bottom-20 w-32 h-32 border-r-8 border-b-8 border-steppe-accent/20 rounded-br-3xl opacity-50" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Title Column */}
        <div className="lg:col-span-4">
          <div className="sticky top-32">
            <span className="font-sans text-steppe-accent font-bold tracking-widest uppercase text-sm mb-2 block">Career Path</span>
            <h2 className="font-serif text-5xl text-steppe-text mb-8 leading-tight">
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
          <div className="relative border-l border-steppe-subtle/30 ml-3 md:ml-6 space-y-16 py-4">
            {EXPERIENCE_DATA.map((item) => (
              <div key={item.id} className="relative pl-12 group">
                {/* Custom Node: Mongolian pattern element */}
                <div className="absolute -left-[14px] top-1 w-7 h-7 bg-steppe-bg flex items-center justify-center border border-steppe-subtle/20 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <div className="w-3 h-3 bg-steppe-accent rotate-45 rounded-sm" />
                </div>
                
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-3">
                  <h3 className="font-serif text-2xl text-steppe-text font-medium">{item.role}</h3>
                  <span className="font-sans text-xs font-bold text-steppe-secondary bg-steppe-secondary/10 px-3 py-1 rounded-full mt-2 md:mt-0 w-fit">
                    {item.period}
                  </span>
                </div>
                
                <div className="text-steppe-subtle font-medium mb-4 flex items-center gap-2">
                   <span className="uppercase tracking-wide text-xs">{item.company}</span>
                   <span className="w-1 h-1 bg-steppe-subtle rounded-full" />
                   <span className="italic font-serif">{item.location}</span>
                </div>

                <ul className="space-y-3">
                  {item.description.map((desc, idx) => (
                    <li key={idx} className="flex gap-3 text-steppe-text/80 font-sans leading-relaxed text-sm md:text-base">
                      <span className="text-steppe-accent mt-1.5">◆</span>
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Education Section - Full width container */}
      <div className="max-w-7xl mx-auto mt-32">
        <div className="border-t border-steppe-light pt-16">
          <h3 className="font-serif text-3xl text-steppe-text mb-12 text-center">Education & Qualifications</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {EDUCATION_DATA.map((edu, index) => (
              <div key={index} className="group p-8 bg-white border border-steppe-light relative overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-steppe-light/30 to-transparent -mr-8 -mt-8 rounded-bl-full group-hover:from-steppe-accent/10 transition-colors" />
                
                <div className="font-sans text-xs text-steppe-secondary font-bold uppercase tracking-widest mb-4">
                  {edu.year} {edu.status && `• ${edu.status}`}
                </div>
                <h4 className="font-serif text-xl text-steppe-text mb-3 leading-snug group-hover:text-steppe-accent transition-colors">
                  {edu.degree}
                </h4>
                <p className="font-sans text-steppe-subtle text-sm border-t border-dashed border-steppe-light pt-3">
                  {edu.school}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;