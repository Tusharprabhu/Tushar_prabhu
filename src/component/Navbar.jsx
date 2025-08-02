import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import Navtitle from "../assets/navtitle.png";

const navbar = () => {
  return (
    <>
      {/* Logo - Top Left Floating */}
        <div className="fixed top-6 left-6 z-50">
          <div className="bg-black/80 backdrop-blur-md rounded-2xl p-3 border border-neutral-700/50 shadow-2xl">
            <a href="/" className="block">
          <img src={Navtitle} className="h-10" alt="title" />
            </a>
          </div>
        </div>

        {/* Social Links - Floating Dock */}
      <div className="fixed top-6 right-6 z-50">
        <div className="bg-black/80 backdrop-blur-md rounded-2xl px-6 py-3 border border-neutral-700/50 shadow-2xl">
          <div className="flex items-center gap-5 text-xl">
            <a 
              href="https://www.facebook.com/tushar.prabhu.359" 
              className="text-white hover:text-blue-600 hover:scale-110 transition-all duration-300 p-2 rounded-xl hover:bg-blue-600/10"
            >
              <FaFacebook />
            </a>
            <a 
              href="https://www.instagram.com/tu_shaar2.0/" 
              className="text-white hover:text-pink-600 hover:scale-110 transition-all duration-300 p-2 rounded-xl hover:bg-pink-600/10"
            >
              <FaInstagram />
            </a>
            <a 
              href="https://www.linkedin.com/in/tushar-prabhuu/" 
              className="text-white hover:text-blue-300 hover:scale-110 transition-all duration-300 p-2 rounded-xl hover:bg-blue-300/10"
            >
              <FaLinkedin />
            </a>
            <a 
              href="https://github.com/Tusharprabhu" 
              className="text-white hover:text-slate-400 hover:scale-110 transition-all duration-300 p-2 rounded-xl hover:bg-slate-400/10"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default navbar;