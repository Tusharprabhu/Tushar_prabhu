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
      <style dangerouslySetInnerHTML={{
        __html: `
          .projects-container {
            width: 100%;
            max-width: 1400px;
            margin: 0 auto;
            padding: 60px 50px;
          }

          .projects-title {
            position: relative;
            width: 400px;
            margin-bottom: 48px;
            padding-bottom: 16px;
            font-size: 2rem;
            line-height: 1.4;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.05em;
          }

          .projects-title::before,
          .projects-title::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            height: 4px;
            border-radius: 2px;
          }

          .projects-title::before {
            width: 100%;
            background: #333;
          }

          .projects-title::after {
            width: 80px;
            background: #10b981;
          }

          .expandable-cards {
            margin: 15px 0;
            display: flex;
            gap: 15px;
            overflow-x: auto;
            padding: 0 0 60px 0;
            scroll-behavior: smooth;
          }

          .expandable-card {
            margin: 0 15px 0 0;
            width: 320px;
            height: 400px;
            display: flex;
            align-items: flex-end;
            background: #343434 no-repeat center center / cover;
            border-radius: 16px;
            overflow: hidden;
            position: relative;
            transition: all 0.4s ease-in-out;
            cursor: pointer;
            flex-shrink: 0;
          }

          .expandable-card.active {
            width: 500px;
            box-shadow: 12px 40px 40px rgba(16, 185, 129, 0.25);
          }

          .expandable-card::after {
            content: "";
            display: block;
            position: absolute;
            height: 100%;
            width: 100%;
            left: 0;
            top: 0;
            background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9));
            z-index: 1;
          }

          .card-content {
            padding: 0 24px 12px;
            color: #fff;
            position: relative;
            z-index: 2;
            overflow: hidden;
            transform: translateY(calc(100% - 54px));
            transition: all 0.4s ease-in-out;
            width: 100%;
          }

          .expandable-card.active .card-content {
            transform: none;
          }

          .card-title {
            margin: 0 0 10px;
            font-size: 1.75rem;
            line-height: 2.25rem;
            font-weight: 700;
            color: #fff;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
          }

          .card-description {
            opacity: 0;
            transform: translateY(32px);
            transition: all 0.4s ease-in-out 0.2s;
            font-size: 0.95rem;
            line-height: 1.6;
            margin-bottom: 1rem;
            color: rgba(255, 255, 255, 0.9);
          }

          .expandable-card.active .card-description {
            opacity: 1;
            transform: translateY(0);
          }

          .card-technologies {
            opacity: 0;
            transform: translateY(32px);
            transition: all 0.4s ease-in-out 0.3s;
          }

          .expandable-card.active .card-technologies {
            opacity: 1;
            transform: translateY(0);
          }

          .tech-tag {
            display: inline-block;
            background: rgba(16, 185, 129, 0.2);
            border: 1px solid rgba(16, 185, 129, 0.4);
            color: #10b981;
            padding: 0.25rem 0.75rem;
            border-radius: 20px;
            font-size: 0.75rem;
            font-weight: 500;
            margin: 0.25rem 0.5rem 0.25rem 0;
            backdrop-filter: blur(10px);
            transition: all 0.3s ease;
          }

          .tech-tag:hover {
            background: rgba(16, 185, 129, 0.3);
            border-color: rgba(16, 185, 129, 0.6);
            transform: translateY(-2px);
          }

          .card-number {
            position: absolute;
            top: 1.5rem;
            right: 1.5rem;
            font-size: 3rem;
            font-weight: 900;
            color: rgba(255, 255, 255, 0.15);
            z-index: 2;
            transition: all 0.4s ease;
            font-family: 'Megrim', sans-serif;
          }

          .expandable-card.active .card-number {
            color: rgba(16, 185, 129, 0.3);
            font-size: 4rem;
          }

          .expandable-cards::-webkit-scrollbar {
            height: 8px;
          }

          .expandable-cards::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 4px;
          }

          .expandable-cards::-webkit-scrollbar-thumb {
            background: rgba(16, 185, 129, 0.5);
            border-radius: 4px;
          }

          .expandable-cards::-webkit-scrollbar-thumb:hover {
            background: rgba(16, 185, 129, 0.7);
          }

          @media (min-width: 992px) and (max-width: 1199px) {
            .projects-container {
              padding: 50px 30px;
            }
            
            .projects-title {
              margin-bottom: 32px;
              font-size: 1.75rem;
            }
            
            .expandable-card {
              margin: 0 12px 0 0;
              width: 260px;
              height: 360px;
            }
            
            .expandable-card.active {
              width: 400px;
            }
            
            .card-content {
              transform: translateY(calc(100% - 46px));
            }
            
            .card-title {
              font-size: 1.5rem;
              line-height: 2rem;
            }
          }

          @media (min-width: 768px) and (max-width: 991px) {
            .projects-container {
              padding: 50px 30px 40px;
            }
            
            .projects-title {
              width: 330px;
              margin-bottom: 32px;
              font-size: 1.5rem;
            }
            
            .expandable-card {
              margin: 0 12px 0 0;
              width: 240px;
              height: 330px;
            }
            
            .expandable-card.active {
              width: 360px;
            }
            
            .card-content {
              transform: translateY(calc(100% - 42px));
            }
            
            .card-title {
              font-size: 1.5rem;
              line-height: 2rem;
            }
          }

          @media (max-width: 767px) {
            .projects-container {
              padding: 30px 15px 20px;
            }
            
            .projects-title {
              width: 250px;
              margin-bottom: 20px;
              font-size: 1.25rem;
            }
            
            .expandable-cards {
              gap: 10px;
              padding: 0 0 40px 0;
            }
            
            .expandable-card {
              margin: 0 10px 0 0;
              width: 200px;
              height: 280px;
            }
            
            .expandable-card.active {
              width: 270px;
              box-shadow: 6px 10px 10px rgba(16, 185, 129, 0.25);
            }
            
            .card-content {
              padding: 0 14px 5px;
              transform: translateY(calc(100% - 42px));
            }
            
            .card-title {
              font-size: 1.2rem;
              line-height: 1.5rem;
            }
            
            .card-description {
              font-size: 0.85rem;
            }
            
            .tech-tag {
              font-size: 0.7rem;
              padding: 0.2rem 0.6rem;
              margin: 0.2rem 0.3rem 0.2rem 0;
            }
            
            .card-number {
              font-size: 2rem;
              top: 1rem;
              right: 1rem;
            }
            
            .expandable-card.active .card-number {
              font-size: 2.5rem;
            }
          }
        `
      }} />
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
