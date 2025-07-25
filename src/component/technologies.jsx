import React, { useEffect, useRef } from "react";
import {
  BiLogoJavascript,
  BiLogoCss3,
  BiLogoPython,
  BiLogoHtml5,
} from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import { RiReactjsFill } from "react-icons/ri";
import { SiPytorch, SiCplusplus, SiGnubash } from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { TbBrandCpp } from "react-icons/tb";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const technologies = () => {
  const techRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create floating animations for technology icons
      const icons = gsap.utils.toArray(".tech-icon");
      
      icons.forEach((icon, index) => {
        gsap.to(icon, {
          y: "random(-20, 20)",
          duration: "random(1.5, 3)",
          ease: "power1.inOut",
          repeat: -1,
          yoyo: true,
          delay: index * 0.2,
        });
      });

      // Animate icons on scroll
      gsap.fromTo(
        ".tech-icon",
        {
          opacity: 0,
          scale: 0.5,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".tech-container",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, techRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={techRef} className="border-b border-neutral-800 pb-24">
      <h1 className="m-10 text-center text-4xl font-bemirs">Technologies</h1>
      <div className="tech-container flex flex-wrap items-center justify-center gap-4">
        {/* Programming Languages */}
        <div className="tech-icon rounded-2xl border-4 border-neutral-800 p-4">
          <BiLogoPython className="text-5xl text-yellow-300" />
        </div>
        
        <div className="tech-icon rounded-2xl border-4 border-neutral-800 p-4">
          <TbBrandCpp className="text-5xl text-blue-400" />
        </div>

        <div className="tech-icon rounded-2xl border-4 border-neutral-800 p-4">
          <BiLogoJavascript className="text-5xl text-yellow-400" />
        </div>

        {/* Web Technologies */}
        <div className="tech-icon rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsFill className="text-5xl text-cyan-400" />
        </div>

        <div className="tech-icon rounded-2xl border-4 border-neutral-800 p-4">
          <FaNodeJs className="text-5xl text-green-300" />
        </div>

        <div className="tech-icon rounded-2xl border-4 border-neutral-800 p-4">
          <BiLogoHtml5 className="text-5xl text-orange-500" />
        </div>

        <div className="tech-icon rounded-2xl border-4 border-neutral-800 p-4">
          <BiLogoCss3 className="text-5xl text-blue-500" />
        </div>

        {/* AI/ML Libraries */}
        <div className="tech-icon rounded-2xl border-4 border-neutral-800 p-4">
          <SiPytorch className="text-5xl text-red-500" />
        </div>

        {/* Hardware Design */}
        <div className="tech-icon rounded-2xl border-4 border-neutral-800 p-4">
          <VscCode className="text-5xl text-purple-400" />
          <span className="text-xs text-center block mt-1 text-gray-300">Verilog</span>
        </div>
        <div className="tech-icon rounded-2xl border-4 border-neutral-800 p-4">
          <span role="img" aria-label="FPGA" className="text-5xl">🔌</span>
          <span className="text-xs text-center block mt-1 text-gray-300">FPGA</span>
        </div>
        <div className="tech-icon rounded-2xl border-4 border-neutral-800 p-4">
          <span role="img" aria-label="Raspberry Pi" className="text-5xl">🍓</span>
          <span className="text-xs text-center block mt-1 text-gray-300"> RPi</span>
        </div>

        <div className="tech-icon rounded-2xl border-4 border-neutral-800 p-4">
          <SiGnubash className="text-5xl text-gray-300" />
        </div>
      </div>
    </div>
  );
};

export default technologies;