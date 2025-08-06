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
            yPercent: -20,
            ease: "none",
          }).to(image, {
            yPercent: 20,
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
