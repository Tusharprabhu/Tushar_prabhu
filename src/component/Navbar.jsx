import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const navbar = () => {
  return (
    <nav className="py-7 lg:px-5 flex item-center justify-between ">
      <div className="flex flex-shrink-0 items-center">
        <a href="#" className="text-white font-bold text-2xl ">
          Tushar
        </a>
      </div>
      <div className="m-0 flex items-center justify-center gap-4 text-2xl">
       <FaFacebook href="#" className="text-white hover:text-blue-600" />
        <FaInstagram href="#"className="text-white hover:text-pink-600" />
        <FaLinkedin href="#" className="text-white hover:text-blue-300" />
        <FaGithub href="#" className="text-white hover:text-slate-400" />
      </div>
    </nav>
  );
};

export default navbar;
