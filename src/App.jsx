import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Navbar from "./component/Navbar.jsx";
import Hero from "./component/hero.jsx";
import About from "./component/About.jsx";
import Technologies from "./component/technologies.jsx";
import Experience from "./component/Experience.jsx";
import Projects from "./component/Project.jsx";
import Contact from "./component/Contact.jsx";

export default function App() {
  const appRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline();

    // Create glitch overlay
    const addGlitchOverlay = () => {
      const overlay = document.createElement("div");
      overlay.className = "glitch-overlay";
      overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: linear-gradient(90deg, 
          transparent 0%, 
          rgba(255, 0, 0, 0.05) 30%, 
          rgba(0, 255, 0, 0.05) 60%, 
          transparent 100%);
        pointer-events: none;
        z-index: 9999;
        opacity: 0;
        mix-blend-mode: overlay;
      `;
      document.body.appendChild(overlay);
      return overlay;
    };

    const overlay = addGlitchOverlay();

    // First glitch period: 0sec to 0.35sec
    timeline.to(appRef.current, {
      delay: 0,
      duration: 0.05,
      skewX: 1,
      x: 2,
      filter: "hue-rotate(30deg) saturate(1.3) contrast(1.1)",
      ease: "power2.inOut",
    })
    .to(overlay, {
      duration: 0.05,
      opacity: 0.4,
      ease: "power2.inOut",
    }, "<")
    .to(appRef.current, {
      duration: 0.03,
      skewX: -0.5,
      x: -1,
      filter: "hue-rotate(-20deg) saturate(1.2)",
      ease: "power2.inOut",
    })
    .to(appRef.current, {
      duration: 0.04,
      skewX: 0.8,
      x: 1.5,
      filter: "hue-rotate(60deg) saturate(1.4) contrast(1.2)",
      ease: "power2.inOut",
    })
    .to(appRef.current, {
      duration: 0.03,
      skewX: -0.3,
      x: -0.5,
      filter: "hue-rotate(-40deg) saturate(1.1)",
      ease: "power2.inOut",
    })
    .to(appRef.current, {
      duration: 0.05,
      skewX: 0.6,
      x: 1,
      filter: "hue-rotate(45deg) saturate(1.3)",
      ease: "power2.inOut",
    })
    .to(appRef.current, {
      duration: 0.03,
      skewX: -0.4,
      x: -0.8,
      filter: "hue-rotate(-30deg) saturate(1.2)",
      ease: "power2.inOut",
    })
    .to(appRef.current, {
      duration: 0.04,
      skewX: 0.3,
      x: 0.5,
      filter: "hue-rotate(25deg) saturate(1.1)",
      ease: "power2.inOut",
    })
    .to(appRef.current, {
      duration: 0.08,
      skewX: 0,
      x: 0,
      filter: "none",
      ease: "power2.inOut",
    })
    .to(overlay, {
      duration: 0.08,
      opacity: 0,
      ease: "power2.inOut",
    }, "<")
    
    // Second glitch period: 3.5sec to 3.85sec
    .to(appRef.current, {
      delay: 3.15,
      duration: 0.04,
      skewX: -0.8,
      x: -2,
      filter: "hue-rotate(90deg) saturate(1.4) contrast(1.2)",
      ease: "power2.inOut",
    })
    .to(overlay, {
      duration: 0.04,
      opacity: 0.5,
      ease: "power2.inOut",
    }, "<")
    .to(appRef.current, {
      duration: 0.03,
      skewX: 0.6,
      x: 1.2,
      filter: "hue-rotate(-60deg) saturate(1.3)",
      ease: "power2.inOut",
    })
    .to(appRef.current, {
      duration: 0.05,
      skewX: -0.4,
      x: -0.8,
      filter: "hue-rotate(120deg) saturate(1.5) contrast(1.3)",
      ease: "power2.inOut",
    })
    .to(appRef.current, {
      duration: 0.03,
      skewX: 0.7,
      x: 1.5,
      filter: "hue-rotate(-45deg) saturate(1.2)",
      ease: "power2.inOut",
    })
    .to(appRef.current, {
      duration: 0.04,
      skewX: -0.3,
      x: -0.6,
      filter: "hue-rotate(75deg) saturate(1.4)",
      ease: "power2.inOut",
    })
    .to(appRef.current, {
      duration: 0.03,
      skewX: 0.5,
      x: 0.8,
      filter: "hue-rotate(-35deg) saturate(1.1)",
      ease: "power2.inOut",
    })
    .to(appRef.current, {
      duration: 0.05,
      skewX: -0.2,
      x: -0.3,
      filter: "hue-rotate(50deg) saturate(1.2)",
      ease: "power2.inOut",
    })
    .to(appRef.current, {
      duration: 0.08,
      skewX: 0,
      x: 0,
      filter: "none",
      ease: "power2.inOut",
    })
    .to(overlay, {
      duration: 0.08,
      opacity: 0,
      ease: "power2.inOut",
    }, "<");

    return () => {
      timeline.kill();
      if (overlay && overlay.parentNode) {
        overlay.parentNode.removeChild(overlay);
      }
    };
  }, []);

  return (
    <div 
      ref={appRef}
      className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900"
    >
      <div className="fixed top-0 -z-10 h-full w-full bg-black"></div>
      <div className="bg-black">
        <div className=" container max-w-full m-0 px-16 ">
          <Navbar />
          <Hero />
          <About />
          <Technologies />
          <Projects />
          <Contact />
        </div>
      </div>
    </div>
  );
}
