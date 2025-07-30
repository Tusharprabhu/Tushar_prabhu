import React, { useEffect, useRef } from "react";
import { PROJECTS } from "../constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  const projectsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate project images from left
      gsap.fromTo(
        ".project-image",
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
            trigger: ".project-image",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animate project content from right
      gsap.fromTo(
        ".project-content",
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
            trigger: ".project-content",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Add hover effects for images
      const images = document.querySelectorAll(".project-image img");
      images.forEach((img) => {
        img.addEventListener("mouseenter", () => {
          gsap.to(img, {
            scale: 1.1,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        img.addEventListener("mouseleave", () => {
          gsap.to(img, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      }); 
    }, projectsRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={projectsRef} className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl font-bemirs">Projects</h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="m-16 flex flex-wrap lg:justify-center">
            <div className="project-image w-full lg:w-1/4">
              <img
                src={project.image}
                width={150}
                height={150}
                alt={project.title}
                className="mb-6 rounded cursor-pointer"
              />
            </div>
            <div className="project-content w-full max-x-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold text-pink-600">
                {project.title}
              </h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mb-4 text-neutral-500 px-2 py-1 text-sm font-medium"
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

export default Project;
