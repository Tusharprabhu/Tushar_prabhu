import React from "react";
import Navbar from "./component/navbar.jsx";
export default function App() {
  return (
    <div>
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div class="rotate-180 absolute top-0 z-[-2] h-screen w-screen bg-black bg-[radial-gradient(150%_80%_at_50%_0%,rgba(0,163,255,0.12)_0,rgba(0,163,255,0)_50%,black_100%)]"></div> 
        <div className="mx-auto px-0 ">
        <Navbar /></div>
      </div>
    </div>
  );
}
