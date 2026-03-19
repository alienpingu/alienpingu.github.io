import React from 'react';
import { experiences } from '../../data/portfolio';

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 border-t-8 border-black bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-black mb-4">Works</h2>
          <div className="w-24 h-1 bg-black mx-auto"></div>
        </div>

        <div className="relative">
          {/* Vertical Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-black opacity-30"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start mb-12 last:mb-0">
                {/* Timeline Dot */}
                <div className="absolute left-6 w-5 h-5 bg-black rounded-full border-4 border-white z-10"></div>
                
                {/* Content */}
                <div className="ml-16 bg-white border-4 border-black p-6 hover:bg-black hover:text-white transition-all duration-300 group w-full">
                  <div className="flex items-center mb-4">
                    <div className="text-2xl font-black mr-4">{exp.year}</div>
                    <div className="w-12 h-1 bg-black group-hover:bg-white transition-colors duration-300"></div>
                  </div>
                  <div className="text-xl font-bold mb-2">{exp.role}</div>
                  <div className="text-lg font-light mb-4">{exp.company}</div>
                  <div className="text-sm leading-relaxed">{exp.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <a 
            href="mailto:brtsml@pm.me?subject=Resume Request&body=hi, can i have your resume?" 
            className="inline-block px-6 py-3 bg-black text-white font-bold text-lg hover:bg-white hover:text-black border-2 border-black transition-all duration-300"
          >
            Request Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
