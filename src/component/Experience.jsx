import React, { useEffect, useRef } from "react";
import { EXPERIENCES } from "../constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const experienceRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate experience years from left
      gsap.fromTo(
        ".experience-year",
        {
          opacity: 0,
          x: -100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".experience-year",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animate experience content from right
      gsap.fromTo(
        ".experience-content",
        {
          opacity: 0,
          x: 100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".experience-content",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, experienceRef);

    return () => ctx.revert();
  }, []);

  return (
    <div 
      id="experience" 
      ref={experienceRef} 
      className="border-b border-neutral-900 pb-32 mt-32 lg:mt-0"
    >
      {/* Section Header */}
      <h1 className="my-20 text-center text-4xl font-bemirs">
        Experience
      </h1>
      
      {/* Experience Timeline */}
      <div className="max-w-6xl mx-auto px-4">
        {EXPERIENCES.map((experience, index) => (
          <div 
            key={index} 
            className="mb-16 flex flex-wrap lg:justify-center"
          >
            {/* Year Section */}
            <div className="experience-year w-full lg:w-1/4 mb-6 lg:mb-0">
              <div className="lg:sticky lg:top-20">
                <p className="text-lg font-medium text-neutral-300 lg:text-right lg:pr-8">
                  {experience.year}
                </p>
                <div className="hidden lg:block w-1 h-20 bg-gradient-to-b from-cyan-400 to-transparent ml-auto mr-8 mt-4"></div>
              </div>
            </div>
            
            {/* Content Section */}
            <div className="experience-content w-full max-w-3xl lg:w-3/4">
              <div className="p-6 transition-all duration-300">
                
                {/* Role and Company */}
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {experience.role}
                  </h3>
                  <p className="text-cyan-400 font-medium text-lg">
                    {experience.company}
                  </p>
                </div>

                {/* Description */}
                <p className="mb-6 text-neutral-300 leading-relaxed text-base">
                  {experience.description}
                </p>
                
                {/* Technologies */}
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-neutral-400 uppercase tracking-wide">
                    Technologies & Tools
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium
                                 bg-cyan-400/20 border border-cyan-400/40 text-cyan-300
                                 hover:bg-cyan-400/30 hover:border-cyan-400/60 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
