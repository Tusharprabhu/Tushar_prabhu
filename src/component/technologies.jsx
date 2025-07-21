import React from "react";
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

import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="m-10 text-center text-4xl font-bemirs">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {/* Programming Languages */}
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <BiLogoPython className="text-5xl text-yellow-300" />
        </motion.div>
        
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <TbBrandCpp className="text-5xl text-blue-400" />
        </motion.div>

        <motion.div
          variants={iconVariants(2.6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <BiLogoJavascript className="text-5xl text-yellow-400" />
        </motion.div>

        {/* Web Technologies */}
        <motion.div
          variants={iconVariants(1.7)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsFill className="text-5xl text-cyan-400" />
        </motion.div>

        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaNodeJs className="text-5xl text-green-300" />
        </motion.div>

        <motion.div
          variants={iconVariants(1.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <BiLogoHtml5 className="text-5xl text-orange-500" />
        </motion.div>

        <motion.div
          variants={iconVariants(2.3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <BiLogoCss3 className="text-5xl text-blue-500" />
        </motion.div>

        {/* AI/ML Libraries */}
        <motion.div
          variants={iconVariants(1.8)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiPytorch className="text-5xl text-red-500" />
        </motion.div>

        {/* Hardware Design */}
        <motion.div
          variants={iconVariants(2.1)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <VscCode className="text-5xl text-purple-400" />
          <span className="text-xs text-center block mt-1 text-gray-300">Verilog</span>
        </motion.div>

        <motion.div
          variants={iconVariants(1.9)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiGnubash className="text-5xl text-gray-300" />
        </motion.div>
      </div>
    </div>
  );
};

export default technologies;