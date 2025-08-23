import React, { useEffect, useRef } from "react";
import aboutImg from "../assets/about1.png";
import { ABOUT_TEXT } from "../constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".image-container").forEach(function(container) {
        let image = container.querySelector("img");
        
        if (image) {
          let tl = gsap.timeline({
            scrollTrigger: {
              trigger: aboutRef.current, 
              scrub: true,
              pin: false,
              start: "top 100%",
              end: "bottom 0%", 

            },
          }); 
          tl.from(image, {
            yPercent: -25,
            ease: "none",
          }).to(image, {
            yPercent: 25,
            ease: "none",
          }); 
        }
      });
      gsap.fromTo(
        ".about-image",
        {
          opacity: 0,
          x: -100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          scrollTrigger: {
            trigger: ".about-image",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ".about-text",
        {
          opacity: 0,
          x: 100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          scrollTrigger: {
            trigger: ".about-text",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, aboutRef);

    return () => ctx.revert();
  }, []);
  return (
    <div ref={aboutRef} className="border-b border-neutral-900 pb-4 lg:pb-32 mt-32 lg:mt-0">
      <style dangerouslySetInnerHTML={{
        __html: `
          .grid-container {
            padding: 50vh 0;
          }

          .image-container {
            position: relative;
            overflow: hidden;
            width: 100%;
            height: 0;
            padding-bottom: 100%; /* Creates a square aspect ratio */
            border-radius: 1rem;
            background-color: #1f2937; /* Fallback background */
            max-width: 100%;
            max-height: 100%;
          }

          .image-one {
            padding-bottom: 100%;
            height: 0;
            max-width: 100%;
            overflow: hidden;
          }

          .image-container img {
            position: absolute;
            top: -10%; /* Offset to center the larger image */
            left: 0;
            width: 100%;
            height: 120%; /* Make image larger to fill gaps during parallax */
            object-fit: cover;
            border-radius: 1rem;
            display: block;
            will-change: transform;
            transform-origin: center center;
          }

          @media (max-width: 900px) {
            .image-container {
              padding-bottom: 100%;
              max-width: 400px;
              margin: 0 auto;
            }
            
            .image-one {
              padding-bottom: 100%;
              max-width: 400px;
            }
            
            .image-container img {
              top: -10%;
              height: 120%;
            }
          }
        `
      }} />
      <h1 className="my-20 text-center text-4xl font-bemirs">
        About
        <span className="text-neutral-500">Me</span>
      </h1>
      <div className="flex flex-wrap lg:mt-32">
        <div className="about-image w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center h-full max-w-full overflow-hidden">
            <div className="image-container image-one w-full max-w-md lg:max-w-lg">
              <img 
                className="rounded-2xl" 
                src={aboutImg} 
                alt="about"
              />
            </div>
          </div>
        </div>
        <div className="about-text w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl p-6">{ABOUT_TEXT}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
