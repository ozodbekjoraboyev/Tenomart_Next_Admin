"use client";
import axios from "axios";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

type ProduktIdType = {
  categoryId: number;
  createdAt: string;
  description: string;
  id: number;
  imageUrl: string;
  name: string;
  price: string;
  stock: number;
};

function ProduktId() {
  const [produktId, setProduktId] = useState<ProduktIdType | null>(null);
  const { id } = useParams();

  useEffect(() => {
    if (!id) return;

    axios
      .get(`https://nt.softly.uz/api/front/products/${id}`)
      .then((res) => {
        setProduktId(res.data);
      })
      .catch((e) => {
        console.error("Xatolik:", e);
      });
  }, [id]);

  if (!produktId) {
    return <div className="text-center text-gray-500">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 md:px-32 py-6">
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <Image
          width={300}
          height={300}
          src={produktId.imageUrl}
          alt={produktId.name}
          className="rounded-lg shadow-lg"
        />
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{produktId.name}</h1>
          <p className="text-gray-600 mt-2">{produktId.description}</p>
          <p className="text-xl font-semibold text-green-600 mt-4">${produktId.price}</p>
        </div>
      </div>
    </div>
  );
}

export default ProduktId;
