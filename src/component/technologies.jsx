import React, { useRef, useLayoutEffect, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "motion/react";
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

// Hook for element width tracking
function useElementWidth(ref) {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    function updateWidth() {
      if (ref.current) {
        setWidth(ref.current.offsetWidth);
      }
    }
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [ref]);

  return width;
}

// Scroll velocity component
const IconScrollVelocity = ({ baseVelocity = 100 }) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(
    smoothVelocity,
    [0, 1000],
    [0, 5],
    { clamp: false }
  );

  const copyRef = useRef(null);
  const copyWidth = useElementWidth(copyRef);

  function wrap(min, max, v) {
    const range = max - min;
    const mod = (((v - min) % range) + range) % range;
    return mod + min;
  }

  const x = useTransform(baseX, (v) => {
    if (copyWidth === 0) return "0px";
    return `${wrap(-copyWidth, 0, v)}px`;
  });

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  const icons = [
    <BiLogoPython className="text-5xl text-yellow-300" />,
    <TbBrandCpp className="text-5xl text-blue-400" />,
    <BiLogoJavascript className="text-5xl text-yellow-400" />,
    <RiReactjsFill className="text-5xl text-cyan-400" />,
    <FaNodeJs className="text-5xl text-green-300" />,
    <BiLogoHtml5 className="text-5xl text-orange-500" />,
    <BiLogoCss3 className="text-5xl text-blue-500" />,
    <SiPytorch className="text-5xl text-red-500" />,
    <div className="flex flex-col items-center">
      <VscCode className="text-5xl text-purple-400" />
      <span className="text-xs text-center block mt-1 text-gray-300">Verilog</span>
    </div>,
    <div className="flex flex-col items-center">
      <span role="img" aria-label="FPGA" className="text-5xl">🔌</span>
      <span className="text-xs text-center block mt-1 text-gray-300">FPGA</span>
    </div>,
    <div className="flex flex-col items-center">
      <span role="img" aria-label="Raspberry Pi" className="text-5xl">🍓</span>
      <span className="text-xs text-center block mt-1 text-gray-300">RPi</span>
    </div>,
    <SiGnubash className="text-5xl text-gray-300" />
  ];

  const numCopies = 8;
  const spans = [];
  for (let i = 0; i < numCopies; i++) {
    spans.push(
      <span
        className="flex-shrink-0 flex gap-4 items-center"
        key={i}
        ref={i === 0 ? copyRef : null}
      >
        {icons.map((icon, iconIndex) => (
          <div key={`${i}-${iconIndex}`} className="rounded-2xl border-4 border-neutral-900 p-4 flex-shrink-0">
            {icon}
          </div>
        ))}
      </span>
    );
  }

  return (
    <div className="relative overflow-hidden my-8">
      <motion.div
        className="flex whitespace-nowrap"
        style={{ x }}
      >
        {spans}
      </motion.div>
    </div>
  );
};

const technologies = () => {
  return (
    <div id="technologies" className="border-b border-neutral-900 pb-24">
      <h1 className="m-10 text-center text-4xl font-bemirs">Technologies</h1>
      
      {/* Scroll Velocity Effect with Icons */}
      <IconScrollVelocity />
      
    </div>
  );
};

export default technologies;