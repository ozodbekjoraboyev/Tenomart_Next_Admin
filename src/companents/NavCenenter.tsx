"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Menu01Icon from "../../public/menu-01-stroke-rounded (3)";
import Cancel01Icon from "../../public/cancel-01-stroke-rounded (2)";
import Search01Icon from "../../public/search-01-stroke-rounded (1)";
import UserIcon from "../../public/user-stroke-rounded (5)";
import FavouriteIcon from "../../public/favourite-stroke-rounded (1)";
import ShoppingCart01Icon from "../../public/shopping-cart-01-stroke-rounded (2)";
import FloatingLabelInput from "./Input";
import AnimatedButton from "./Logo";

function NavCenenter() {
  const [katalog, setKatalog] = useState(false);
  const [focused, setFocused] = useState(false);
  return (
    <div className="px-32 pt-6 caret-neutral-50 container m-auto flex justify-between ">
      <div className=" flex items-center gap-12 ">
        <Link href={"/"}>
          {" "}
          {/* <Image
            width={220}
            height={220}
            src={"https://texnomart.uz/_nuxt/img/texnomart-logo.3b2791c.svg"}
            alt="Tehnomart Logo"
          /> */}
           <div>
      <AnimatedButton text="Logo" />
    </div>
        </Link>
        <div
          onClick={() => {
            setKatalog(!katalog);
          }}
          className=" bg-amber-400 p-2 px-7 font-bold rounded-md flex gap-3"
        >
          <span>{katalog ? <Cancel01Icon /> : <Menu01Icon />}</span>
          <p>katalog</p>
        </div>
      </div>
      <FloatingLabelInput />
      <div className=" flex items-center gap-12">
        <div className=" flex flex-col items-center">
          <UserIcon />
          <p className=" text-center">krish</p>
        </div>{" "}
        <div className=" flex flex-col items-center">
          <FavouriteIcon />
          <p className=" text-center">Sevimlilar</p>
        </div>{" "}
        <div className=" flex flex-col items-center">
          <ShoppingCart01Icon />
          <p className=" text-center">krish</p>
        </div>
      </div>
    </div>
  );
}

export default NavCenenter;
