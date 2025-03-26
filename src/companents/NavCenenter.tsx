"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Menu01Icon from "../../public/menu-01-stroke-rounded (3)";
import Cancel01Icon from "../../public/cancel-01-stroke-rounded (2)";
import UserIcon from "../../public/user-stroke-rounded (5)";
import FavouriteIcon from "../../public/favourite-stroke-rounded (1)";
import ShoppingCart01Icon from "../../public/shopping-cart-01-stroke-rounded (2)";
import FloatingLabelInput from "./Input";
import AnimatedButton from "./Logo";

function NavCenenter() {
  const [katalog, setKatalog] = useState(false);

  return (
    <div className="container mx-auto px-4 md:px-10 lg:px-32 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
      {/* Left - Logo & Katalog Button */}
      <div className="flex items-center gap-4 md:gap-12 w-full md:w-auto justify-between">
        <Link href={"/"}>
          <AnimatedButton text="Logo" />
        </Link>
        <button
          onClick={() => setKatalog(!katalog)}
          className="bg-amber-400 px-4 py-2 font-bold rounded-md flex items-center gap-2"
        >
          {katalog ? <Cancel01Icon /> : <Menu01Icon />}
          <span>Katalog</span>
        </button>
      </div>

      {/* Center - Search Input */}
      <div className="w-full md:w-auto flex justify-center">
        <FloatingLabelInput />
      </div>

      {/* Right - User, Favorites, Cart */}
      <div className="flex items-center gap-6 md:gap-12 w-full md:w-auto justify-center">
        <div className="flex flex-col items-center">
          <UserIcon />
          <p className="text-center text-xs md:text-sm">Kirish</p>
        </div>
        <div className="flex flex-col items-center">
          <FavouriteIcon />
          <p className="text-center text-xs md:text-sm">Sevimlilar</p>
        </div>
        <div className="flex flex-col items-center">
          <ShoppingCart01Icon />
          <p className="text-center text-xs md:text-sm">Savat</p>
        </div>
      </div>
    </div>
  );
}

export default NavCenenter;
