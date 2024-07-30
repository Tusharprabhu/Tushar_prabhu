import React from "react";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/kevinRushProfile.png";

const Hero = () => {
  return (
    <div className="h-screen border-b border-neutral-900 pb-4">
      <div className="flex flex-wrap lg:h-full ">
        <div className="w-full lg:w-1/2 lg:h-full">
          <div
            className=" flex flex-col items-center 
          lg:items-start h-1/2 justify-center"
          >
            <h1
              className="pt-64 text-6xl font-thin tracking-tight 
            lg:pb-16 lg:text-8xl"
            >
              Tushar<br></br>Prabhu
            </h1>
            <span
              className="bg-gradient-to-r from-pink-300 
            via-slate-500  to-purple-500 bg-clip-text text-3xl 
            tracking-tight text-transparent font-light"
            >
              Electronics and Communication Engineer
            </span>
            <p>{HERO_CONTENT}

            </p>
          </div>
        </div>
        <div className=" lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img src={profilePic} alt="Tushar Prabhu" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
