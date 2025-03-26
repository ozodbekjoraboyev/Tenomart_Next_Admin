"use client";
import { CardsDataType } from "@/Type";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ShoppingCart01Icon from "../../public/shopping-cart-01-stroke-rounded (2)";
import ProduktCard from "@/app/productcard/page";
import BouncingLoader from "./Loading";

function Cards() {
  const [products, setProducts] = useState<CardsDataType[]>();
  useEffect(() => {
    axios.get("https://nt.softly.uz/api/front/products?page=1&limit=10").then((res) => {
      setProducts(res.data.items);
    });
  }, []);

  if (!products) {
    return (
      <>
        {" "}
        <BouncingLoader />
      </>
    );
  }
  return (
    <div className="grid grid-cols-5 container m-auto px-30 mt-3  ">
      {products.map((item) => {
        return <ProduktCard item={item} key={item.id} />;
      })}
    </div>
  );
}

export default Cards;
