import React, { useEffect, useRef } from "react";
import profilePic from "../assets/Tusharimage.png";
import brush from "../assets/brushbg.png";
import { gsap } from "gsap";
import "../index.css";

const Hero = () => {
  const glitchRef = useRef(null);
  const imageRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.set('.glitch', { opacity: 1 });

    const glitchTl = gsap.timeline({ delay: 1 });

    glitchTl
      .to('.glitch', 0.1, { skewX: 70, ease: "power4.inOut" })
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

    return () => glitchTl.kill();
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;

    function updateTransform() {
      const x = image.style.getPropertyValue('--parallax-x') || '0px';
      const y = image.style.getPropertyValue('--parallax-y') || '0px';
      image.style.transform = `translate(-50%, -50%) translate(${x}, ${y})`;
    }

    function parallaxTo(offsetX, offsetY, duration, ease) {
      gsap.to(image, {
        '--parallax-x': `${offsetX}px`,
        '--parallax-y': `${offsetY}px`,
        duration,
        ease,
        onUpdate: updateTransform
      });
    }

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      parallaxTo((x - 0.5) * -40, (y - 0.5) * -40, 0.5, 'power3.out');
    };

    const handleMouseLeave = () => {
      parallaxTo(0, 0, 0.6, 'power2.out');
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative mx-auto w-full max-w-[2098px] h-[80vh] min-h-[20vh] overflow-hidden border-b border-neutral-900"
    >
      {/* Parallax Tushar image */}
      <div
        ref={imageRef}
        className="absolute top-1/2 left-1/2 w-full h-full"
        style={{
          backgroundImage: `url(${profilePic})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          transform: 'translate(-50%, -50%)',
          zIndex: 1,
        }}
      />

      {/* Brush overlay */}
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none z-10"
        style={{
          backgroundImage: `url(${brush})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Text Content */}
      <div className="relative z-20 text-center top-[25%] px-4">
        <div className="glitch-container relative" ref={glitchRef}>
          <h1 className="glitch top text-[10vw] font-bemirs font-bold tracking-tight text-white">
            TUSHAR PRABHU
          </h1>
          <h1 className="glitch bottom text-[10vw] font-bemirs font-bold tracking-tight text-white">
            TUSHAR PRABHU
          </h1>
          <h1
            className="text-[10vw] font-bemirs font-bold tracking-tight text-white relative opacity-0"
            style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
          >
            TUSHAR PRABHU
          </h1>
        </div>

        <div className="mt-8">
          <span className="text-xl md:text-2xl tracking-tight text-white font-extralight block mb-6">
            Electronics and Communication Engineer
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
