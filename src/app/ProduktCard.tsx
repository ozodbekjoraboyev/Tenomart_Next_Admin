"use client"; // Client Component ekanligini bildiradi

import { CardsDataType } from "@/Type";
import Image from "next/image";
import React from "react";
import ShoppingCart01Icon from "../../public/shopping-cart-01-stroke-rounded (2)";
import Link from "next/link";

function ProduktCard({ item }: { item?: CardsDataType }) {
  if (!item) {
    return <div className="text-red-500">Mahsulot ma'lumotlari mavjud emas.</div>;
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-4 max-w-[250px] mb-5">
      {item.imageUrl ? (
       <Link href={`/produktid/${item.id}`}> <Image
       width={230}
       height={250}
       src={item.imageUrl}
       alt={item.name || "Mahsulot"}
       className="mx-auto rounded-lg object-cover"
     /></Link>
      ) : (
        <div className="bg-gray-200 w-[230px] h-[250px] flex items-center justify-center rounded-lg">
          <p className="text-gray-500">Rasm yo‘q</p>
        </div>
      )}

      <div className="mt-4">
        <p className="text-gray-700 text-sm">{item.description || "Tavsif mavjud emas"}</p>
        <div className="flex justify-between items-center mt-3">
          <p className="text-lg font-semibold text-gray-900">
            {item.price ? `$${item.price}` : "Narx noma’lum"}
          </p>
          <button className="border-2 border-amber-500 p-2 rounded-md hover:bg-amber-500 hover:text-white transition">
            <ShoppingCart01Icon size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProduktCard;
