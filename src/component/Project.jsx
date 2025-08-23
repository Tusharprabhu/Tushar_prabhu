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
          duration: 0.6,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".projects-container",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          }
        }
      );
    }, projectRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={projectRef} className="border-b border-neutral-900 pb-4 lg:pb-32">
      <h1 className="my-20 text-center text-4xl font-bemirs">
        My
        <span className="text-neutral-500"> Projects</span>
      </h1>
      
      <div className="projects-container max-w-6xl mx-auto px-4">
        <div className="flex flex-col gap-4">
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
      <div className="flex flex-wrap gap-2 px-4">
        {project.technologies.slice(0, 3).map((tech, techIdx) => (
          <span 
            key={techIdx}
            className="bg-neutral-800 text-white px-2 py-1 rounded-full text-xs font-sans"
          >
            {tech}
          </span>
        ))}
      </div>
    </React.Fragment>
  ));

  return (
    <div 
      className="project-card relative overflow-hidden bg-gradient-to-br from-neutral-900/50 to-neutral-800/30 backdrop-blur-sm rounded-2xl border border-neutral-700/50 hover:border-emerald-400/30 transition-all duration-500 shadow-xl hover:shadow-emerald-400/10 min-h-32"
      ref={itemRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Default Content */}
      <div className="flex items-center p-6 h-full cursor-pointer">
        <div className="flex items-center gap-6 w-full">
          <div 
            className="w-24 h-20 bg-cover bg-center rounded-xl flex-shrink-0"
            style={{ backgroundImage: `url(${project.image})` }}
          />
          <div className="flex-1">
            <h3 className="font-sans font-semibold text-white text-xl mb-2 hover:text-emerald-300 transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-neutral-300 text-sm leading-relaxed font-sans line-clamp-2">
              {project.description}
            </p>
          </div>
          <div className="flex flex-wrap gap-2 max-w-xs">
            {project.technologies.map((tech, techIndex) => (
              <span 
                key={techIndex} 
                className="bg-emerald-500/10 border border-emerald-400/20 text-emerald-300 px-2 py-1 rounded-full text-xs font-sans"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Flowing Marquee Overlay */}
      <div
        className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none bg-emerald-400 translate-y-full"
        ref={marqueeRef}
      >
        <div className="h-full w-[300%] flex" ref={marqueeInnerRef}>
          <div className="flex items-center relative h-full w-full will-change-transform animate-marquee">
            {repeatedMarqueeContent}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
