import React from "react";
import { BiLogoAdobe, BiLogoCss3, BiLogoPostgresql, BiLogoPython } from "react-icons/bi";
import { DiRedis } from "react-icons/di";
import { FaNode, FaNodeJs } from "react-icons/fa";
import { RiReactjsFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsFill className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <BiLogoPostgresql className="text-7xl text-white-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMongodb className="text-7xl text-green-700" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <BiLogoCss3 className="text-7xl text-pink-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaNodeJs className="text-7xl text-green-300" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <BiLogoPython className="text-7xl text-yellow-300" />
        </div>

      </div>
    </div>
  );
};

export default technologies;
