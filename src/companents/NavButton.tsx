"use client";
import { TopKatigoriesType } from "@/Type";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function NavButton() {
  const [topKatigories, setTopKAtigorues] = useState<TopKatigoriesType[]>();
  useEffect(() => {
    axios
      .get(
        `
https://nt.softly.uz/api/front/categories`
      )
      .then((res) => {
        setTopKAtigorues(res.data);
      });
  }, []);
  return (
    <div className=" container m-auto px-32 pt-6">
      <div className=" flex justify-between ">
        {topKatigories?.map((item) => {
          return (
            <div key={item.id}>
              <Link href={`/navbarpage/${item.id}`} >
                <p>{item.name}</p>
              </Link>{" "}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default NavButton;
