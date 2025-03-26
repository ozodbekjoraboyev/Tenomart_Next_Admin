"use client";
import React from "react";
import Image from "next/image";
import Search01Icon from "../../public/search-01-stroke-rounded (1)";

export default function SearchInput() {
  return (
    <div className="flex items-center w-full max-w-lg border-2 border-amber-500 rounded-lg px-1 bg-white ">
      {/* Input */}
      <input
        className="flex-1 min-w-0 px-3 py-2 text-gray-700 placeholder-gray-500 outline-none"
        type="text"
        placeholder="Qidirish..."
      />
      {/* Search Button */}
      <button className="bg-amber-500 rounded p-2 px-4 text-white flex items-center justify-center">
        {/* <Image src={} alt="Search" width={20} height={20} /> */}
        <Search01Icon />
      </button>
    </div>
  );
}
