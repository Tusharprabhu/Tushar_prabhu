import React from "react";
import Navbar from "./component/navbar.jsx";
import Hero from "./component/hero.jsx";
import About from "./component/About.jsx";
export default function App() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full"></div>
      <div className="bg-zinc-950">
        <div className=" container max-w-full m-0 px-16 ">
          <Navbar />
          <Hero />
          <About />
        </div>
      </div>
    </div>
  );
}
