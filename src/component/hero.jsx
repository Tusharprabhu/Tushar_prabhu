import React, { useEffect, useRef } from "react";
import profilePic from "../assets/Tusharimage.png";
import brush from "../assets/brushbg.png";
import { gsap } from "gsap";

const Hero = () => {
  const glitchRef = useRef(null);
  const imageRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.set('.glitch', { opacity: 1 });

    const glitchTl = gsap.timeline({ delay: 1 });

    glitchTl
      .to('.glitch', { skewX: 70, ease: "power4.inOut", duration: 0.1 })
      .to('.glitch', { skewX: 0, ease: "power4.inOut", duration: 0.04 })
      .to('.glitch', { opacity: 0, duration: 0.04 })
      .to('.glitch', { opacity: 1, duration: 0.04 })
      .to('.glitch', { x: -20, duration: 0.04 })
      .set('.glitch', { textShadow: "-2px 0 2px red" }, 'split')
      .to('.glitch', { x: 0, duration: 0.04 })
      .add("split", 0)
      .to('.glitch.top', { x: -30, ease: "power4.inOut", duration: 0.5 }, 'split')
      .to('.glitch.bottom', { x: 30, ease: "power4.inOut", duration: 0.5 }, 'split')
      .set('.glitch', { textShadow: "3px 0 2px lime" }, 'split')
      .to('.glitch-container', { scale: 1.1, duration: 0 }, 'split')
      .to('.glitch-container', { scale: 1, duration: 0 }, "+=0.02")
      .set('.glitch', { textShadow: "2px 0 2px lime" }, "+=0.05")
      .set('.glitch', { textShadow: "-2px 0 2px red, 1px 0 1px lime" }, "+=0.02")
      .to('.glitch.top', { x: 0, ease: "power4.inOut", duration: 0.2 })
      .to('.glitch.bottom', { x: 0, ease: "power4.inOut", duration: 0.2 })
      .set('.glitch', { textShadow: "2px 2px 1px rgba(0,0,0,0.5)" }, "+=0.05")
      .to('.glitch', { scaleY: 1.1, ease: "power4.inOut", duration: 0.02 })
      .to('.glitch', { scaleY: 1, ease: "power4.inOut", duration: 0.04 });

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
    <div className="relative mx-auto w-full h-screen min-h-[20vh] overflow-hidden -mt-16">
      <div
        ref={containerRef}
        className="absolute w-full h-screen overflow-hidden border-b border-neutral-900"
      >
        {/* Parallax Tushar image */}
        <div
          ref={imageRef}
          className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 z-[1] bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${profilePic})`,
            backgroundSize: '40%',
          }}
        />

        {/* Brush overlay */}
        <div
          className="absolute w-full h-full pointer-events-none z-10 bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${brush})`,
            backgroundSize: '46%',
          }}
        />

        {/* Text Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 px-4">
          <div className="glitch-container relative" ref={glitchRef}>
            <h1 className="glitch top absolute text-[10vw] font-bold tracking-tight text-white drop-shadow-md font-bemirs">
              TUSHAR PRABHU
            </h1>
            <h1 className="glitch bottom absolute text-[10vw] font-bold tracking-tight text-white drop-shadow-md font-bemirs">
              TUSHAR PRABHU
            </h1>
            <h1 className="text-[10vw] font-bold tracking-tight text-white relative opacity-0 drop-shadow-md font-bemirs">
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
    </div>
  );
};

export default Hero;
