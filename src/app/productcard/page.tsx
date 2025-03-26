import { CardsDataType } from "@/Type";
import Image from "next/image";
import React from "react";
import ShoppingCart01Icon from "../../../public/shopping-cart-01-stroke-rounded (2)";

function ProduktCard({ item }: { item: CardsDataType }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 max-w-[300px]">
      <Image 
        width={250} 
        height={250} 
        src={item.imageUrl} 
        alt={item.name}  
        className="mx-auto rounded-lg"
      />
      <div className="mt-4">
        <p className="text-gray-700 text-sm">{item.description}</p>
        <div className="flex justify-between items-center mt-3">
          <p className="text-lg font-semibold text-gray-900">${item.price}</p>
          <button className="border-2 border-amber-500 p-2 rounded-md hover:bg-amber-500 hover:text-white transition">
            <ShoppingCart01Icon />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProduktCard;
