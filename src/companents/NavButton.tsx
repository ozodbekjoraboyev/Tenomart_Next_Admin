"use client";
import { TopKatigoriesType } from "@/Type";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function NavButton() {
  const [topKatigories, setTopKAtigorues] = useState<TopKatigoriesType[]>([]);

  useEffect(() => {
    axios.get("https://nt.softly.uz/api/front/categories").then((res) => {
      setTopKAtigorues(res.data);
    });
  }, []);

  return (
    <div className="container mx-auto px-4 md:px-10 lg:px-32 py-4">
      <div className="flex gap-4 md:gap-8 overflow-x-auto whitespace-nowrap scrollbar-hide">
        {topKatigories?.map((item) => (
          <Link
            key={item.id}
            href={`/navbarpage/${item.id}`}
            className=" m-auto text-gray-800 rounded-md  transition"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default NavButton;
