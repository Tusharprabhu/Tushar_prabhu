import React, { useEffect, useRef, useState } from "react";
import { PROJECTS } from "../constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  const projectsRef = useRef(null);
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate cards on scroll
      gsap.fromTo(
        ".expandable-card",
        {
          opacity: 0,
          y: 100,
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".expandable-cards",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animate title
      gsap.fromTo(
        ".projects-title",
        {
          opacity: 0,
          x: -100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".projects-title",
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animate the underline
      gsap.fromTo(
        ".projects-title::after",
        {
          width: 0,
        },
        {
          width: "80px",
          duration: 0.8,
          ease: "power2.out",
          delay: 0.5,
          scrollTrigger: {
            trigger: ".projects-title",
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, projectsRef);

    return () => ctx.revert();
  }, []);

  const handleCardClick = (index) => {
    setActiveCard(index);
    
    // Smooth scroll to bring the active card into view
    const cardElement = document.querySelectorAll('.expandable-card')[index];
    if (cardElement) {
      cardElement.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
  };

  return (
    <div ref={projectsRef} className="border-b border-neutral-900 pb-8">
      <div className="projects-container">
        <h2 className="projects-title font-bemirs text-white">
          Projects
        </h2>
        
        <div className="expandable-cards">
          {PROJECTS.map((project, index) => (
            <div
              key={index}
              className={`expandable-card ${activeCard === index ? 'active' : ''}`}
              style={{
                backgroundImage: `url(${project.image})`,
              }}
              onClick={() => handleCardClick(index)}
            >
              {/* Card Number */}
              <div className="card-number">
                {String(index + 1).padStart(2, '0')}
              </div>
              
              {/* Content */}
              <div className="card-content">
                <h3 className="card-title">{project.title}</h3>
                
                <p className="card-description">
                  {project.description}
                </p>
                
                <div className="card-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
