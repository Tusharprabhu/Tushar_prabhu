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
    <div className="border-b border-neutral-900 pb-4 mt-13">
      <div className="flex flex-wrap lg:h-full ">
        <div className="w-full lg:w-1/2 lg:h-full">
          <div
            className=" flex flex-col items-center 
          lg:items-start h-1/2 justify-center"
          >
            <motion.h1
              visible={{ opacity: 1, x: 100 }}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 1.1 }}
              drag={true}
              dragConstraints={{
                left: -80,
                right: 200,
                top: -100,
                bottom: 3900,
              }}
              variants={container(0.3, a)}
              initial="hidden"
              animate="visible"
              className="pt-64 pb-16 lg:py-24 text-6xl font-thin tracking-tight 
            lg:text-8xl"
            >
              Tushar<br></br>Prabhu
            </motion.h1>
            <motion.div
              variants={container(1.5, a)}
              initial="hidden"
              animate="visible"
            >
              <span
                className="bg-gradient-to-r from-pink-300 
            via-slate-500  to-purple-500 bg-clip-text text-3xl 
            tracking-tight text-transparent font-light "
              >
                Electronics and Communication Engineer
              </span>
              <p>{HERO_CONTENT}</p>
            </motion.div>
          </div>
        </div>
        <div className=" lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              variants={container(1.5, c)}
              initial="hidden"
              animate="visible"
              src={profilePic}
              alt="Tushar Prabhu"
              className="rounded-2xl brightness-50 grayscale "
              style={""}

            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
