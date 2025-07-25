import React, { useEffect, useRef } from "react";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/Tushar.png";
import { gsap } from "gsap";
import "../index.css"; 

const Hero = () => {
  const glitchRef = useRef(null);

  useEffect(() => {
    // Set initial state for glitch elements
    gsap.set('.glitch', { opacity: 1 });
    
    // Create timeline that runs only once (no repeat)
    const tl = gsap.timeline({delay:1});

    tl.to('.glitch', 0.1, { skewX: 70, ease: "power4.inOut" })
      .to('.glitch', 0.04, { skewX: 0, ease: "power4.inOut" })
      .to('.glitch', 0.04, { opacity: 0 })
      .to('.glitch', 0.04, { opacity: 1 })
      .to('.glitch', 0.04, { x: -20 })
      .to('.glitch', 0.04, { x: 0 })
      .add("split", 0)
      .to('.glitch.top', 0.5, { x: -60, ease: "power4.inOut" }, 'split')
      .to('.glitch.bottom', 0.5, { x: 60, ease: "power4.inOut" }, 'split')
      .set('.glitch', { textShadow: "-3px 0 red" }, 'split')
      .to('.glitch-container', 0, { scale: 1.1 }, 'split')
      .to('.glitch-container', 0, { scale: 1 }, "+=0.02")
      .set('.glitch', { textShadow: "none" }, "+=0.09")
      .set('.glitch', { textShadow: "-3px 0 lime" }, 'split')
      .set('.glitch', { textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }, "+=0.01")
      .to('.glitch.top', 0.2, { x: 0, ease: "power4.inOut" })
      .to('.glitch.bottom', 0.2, { x: 0, ease: "power4.inOut" })
      .to('.glitch', 0.02, { scaleY: 1.1, ease: "power4.inOut" })
      .to('.glitch', 0.04, { scaleY: 1, ease: "power4.inOut" });

    return () => tl.kill();
}, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center border-b border-neutral-900">
      {/* Background Image */}
      <div className="absolute inset-0 flex items-center justify-center z-0 transition-opacity duration-700 opacity-40">
        <img
          src={profilePic}
          alt="Tushar Prabhu"
          className="w-auto h-[80vh] max-w-none object-cover rounded-2xl brightness-30 grayscale mb-40"
        />
      </div>
      {/* Text Content */}
      <div className="relative z-10 text-center mb-32">
        <div className="glitch-container relative" ref={glitchRef}>
          <h1
            className="text-8xl md:text-9xl lg:text-[10rem] font-bemirs tracking-tight text-white font-bold relative opacity-0"
            style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)', WebkitTextStroke: '1px rgba(255,255,255,0.1)' }}
          >
            TUSHAR PRABHU
          </h1>
          <h1
            className="glitch top text-8xl md:text-9xl lg:text-[10rem] font-bemirs tracking-tight text-white font-bold"
            style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)', WebkitTextStroke: '1px rgba(255,255,255,0.1)' }}
          >
            TUSHAR PRABHU 
          </h1>
          <h1
            className="glitch bottom text-8xl md:text-9xl lg:text-[10rem] font-bemirs tracking-tight text-white font-bold"
            style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)', WebkitTextStroke: '1px rgba(255,255,255,0.1)' }}
          >
            TUSHAR PRABHU 
          </h1>
        </div>
        <div className="mt-8 transition-opacity duration-700 opacity-100">
          <span
            className="text-2xl md:text-3xl
            tracking-tight text-white font-extralight block mb-6"
          >
            Electronics and Communication Engineer
          </span>
          <p className="text-neutral-300 mt-12 max-w-2xl mx-auto px-4 text-lg leading-relaxed">
            {/* {HERO_CONTENT} */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
