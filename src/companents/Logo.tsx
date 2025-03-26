"use client";

import React from "react";

const AnimatedButton = ({ text }: { text: string }) => {
  return (
    <button className="relative px-6 py-2 font-bold uppercase tracking-wide text-transparent transition-all duration-500 border-none cursor-pointer hover:text-green-400 hover:drop-shadow-glow">
      <span className="absolute inset-0 w-0 bg-gradient-to-r from-green-400 to-green-500 text-green-400 text-stroke hover:w-full transition-all duration-500 border-r-4 border-green-400"></span>
      <span className="relative z-10">{text}</span>
    </button>
  );
};

export default AnimatedButton;
