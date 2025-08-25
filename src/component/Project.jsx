import React, { useEffect, useRef } from "react";
import { PROJECTS } from "../constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  const projectRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate project cards
      gsap.fromTo(
        ".project-card",
        {
          opacity: 0,
          y: 50,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.4,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".projects-container",
            start: "top 90%",
            end: "bottom 10%",
            toggleActions: "play none none reverse",
          }
        }
      );
    }, projectRef);

    return () => ctx.revert();
  }, []);

  return (
    <div id="projects" ref={projectRef} className="border-b border-neutral-900 pb-4 lg:pb-32">
      <h1 className="my-10 lg:my-20 text-center text-2xl md:text-3xl lg:text-4xl font-bemirs px-4">
        My
        <span className="text-neutral-500"> Projects</span>
      </h1>
      
      <div className="projects-container w-full max-w-[1400px] mx-auto py-8 lg:py-15 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="flex flex-col gap-2 lg:gap-2">
          {PROJECTS.map((project, index) => (
            <ProjectItem 
              key={index} 
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

function ProjectItem({ project, index }) {
  const itemRef = useRef(null);
  const marqueeRef = useRef(null);
  const marqueeInnerRef = useRef(null);

  const animationDefaults = { duration: 0.6, ease: 'expo' };

  const findClosestEdge = (mouseX, mouseY, width, height) => {
    const topEdgeDist = (mouseX - width / 2) ** 2 + mouseY ** 2;
    const bottomEdgeDist = (mouseX - width / 2) ** 2 + (mouseY - height) ** 2;
    return topEdgeDist < bottomEdgeDist ? 'top' : 'bottom';
  };

  const handleMouseEnter = (ev) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(
      ev.clientX - rect.left,
      ev.clientY - rect.top,
      rect.width,
      rect.height
    );

    gsap.timeline({ defaults: animationDefaults })
      .set(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' })
      .set(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' })
      .to([marqueeRef.current, marqueeInnerRef.current], { y: '0%' });
  };

  const handleMouseLeave = (ev) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(
      ev.clientX - rect.left,
      ev.clientY - rect.top,
      rect.width,
      rect.height
    );

    gsap.timeline({ defaults: animationDefaults })
      .to(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' })
      .to(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' });
  };

  const repeatedMarqueeContent = Array.from({ length: 6 }).map((_, idx) => (
    <React.Fragment key={idx}>
      <span className="text-neutral-900 font-sans font-semibold text-2xl leading-[1.2] px-8">
        {project.title}
      </span>
      <div
        className="w-32 h-20 mx-6 rounded-xl bg-cover bg-center flex-shrink-0"
        style={{ backgroundImage: `url(${project.image})` }}
      />
    </React.Fragment>
  ));

  const handleClick = () => {
    if (project.githubLink) {
      window.open(project.githubLink, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div 
      className="project-card relative overflow-hidden bg-gradient-to-br from-neutral-900/50 to-neutral-800/30 backdrop-blur-sm rounded-xl lg:rounded-2xl border border-neutral-700/50 hover:border-cyan-400/50 transition-all duration-500 shadow-xl hover:shadow-cyan-400/30 min-h-24 lg:min-h-32"
      ref={itemRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {/* Default Content */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center p-4 lg:p-6 h-full cursor-pointer gap-4">
        <div className="flex items-center gap-3 m-4 lg:gap-6 w-full">
          <div 
            className="w-24 h-18 sm:w-28 sm:h-20 lg:w-32 lg:h-24 bg-cover bg-center rounded-lg lg:rounded-xl flex-shrink-0"
            style={{ backgroundImage: `url(${project.image})` }}
          />
          <div className="flex-1 min-w-0">
            <h3 className="font-sans font-semibold text-white text-base sm:text-lg lg:text-xl mb-1 lg:mb-2 hover:text-cyan-300 transition-colors duration-300 truncate">
              {project.title}
            </h3>
            <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed font-sans">
              {project.description}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-1 lg:gap-2 w-full sm:max-w-xs lg:max-w-xs">
          {project.technologies.map((tech, techIndex) => (
            <span 
              key={techIndex} 
              className="bg-cyan-400/20 border border-cyan-400/40 text-cyan-300 px-2 py-1 rounded-full text-xs font-sans whitespace-nowrap"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Flowing Marquee Overlay */}
      <div
        className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none bg-cyan-400 translate-y-full"
        ref={marqueeRef}
      >
        <div className="h-full w-[500%] flex" ref={marqueeInnerRef}>
          <div className="flex items-center relative h-full w-full will-change-transform animate-marquee">
            {repeatedMarqueeContent}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
