import React from "react";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/Tushar.png";
import { motion } from "framer-motion";
import brush from "../assets/brush.jpg";
const a = -100;
const c = 100;
const container = (delay, x) => ({
  hidden: { x: x, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.7, delay: delay },
  },
});
const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center border-b border-neutral-900">
      {/* Background Image */}
      <div className="absolute inset-0 flex items-center justify-center z-0 transition-opacity duration-700 opacity-40">
        <img
          src={profilePic}
          alt="Tushar Prabhu"
          className="w-auto h-[80vh] max-w-none object-cover rounded-2xl brightness-30 grayscale"
          style={{ transform: "translateY(-40px)" }}
        />
      </div>
      {/* Text Content */}
      <div className="relative z-10 text-center">
        <h1
          className="text-8xl md:text-9xl lg:text-[12rem] font-bemirs tracking-tight text-white"
        >
          TUSHAR PRABHU
        </h1>
        <div className="mt-8 transition-opacity duration-700 opacity-100">
          <span
            className="text-2xl md:text-3xl
            tracking-tight text-white font-extralight block mb-6"
          >
            Electronics and Communication Engineer
          </span>
          <p className="text-neutral-300 max-w-2xl mx-auto px-4 text-lg leading-relaxed">
            {HERO_CONTENT}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
