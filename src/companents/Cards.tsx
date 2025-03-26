"use client";
import { CardsDataType } from "@/Type";
import axios from "axios";
import React, { useEffect, useState } from "react";
import BouncingLoader from "./Loading";
import ProduktCard from "@/app/ProduktCard";

function Cards() {
  const [products, setProducts] = useState<CardsDataType[]>();

  useEffect(() => {
    axios
      .get("https://nt.softly.uz/api/front/products?page=1&limit=10")
      .then((res) => {
        setProducts(res.data.items);
      })
      .catch((err) => {
        alert("Hatolik" + err);
      });
  }, []);

  if (!products) {
    return <BouncingLoader />;
  }

  return (
    <div className="grid grid-cols-5 container m-auto px-30 mt-3">
      {products.map((item) => (
        <ProduktCard item={item} key={item.id} />
      ))}
    </div>
  );
}

export default Cards;
