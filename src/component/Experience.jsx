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
    <div ref={experienceRef} className="border-b border-neutral-900 pb-32 mt-32 lg:mt-0">
      <h1 className="my-20 text-center text-4xl">Experience</h1>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="experience-year w-full lg:w-1/4">
              <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
            </div>
            <div className="experience-content w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">
                {experience.role} -{" "}
                <span className="text-sm text-purple-400">
                  {experience.company}
                </span>
              </h6>

              <p className="mb-4 text-neutral-400">{experience.description}</p>
              {experience.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 
                  text-sm font-medium text-purple-500"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
