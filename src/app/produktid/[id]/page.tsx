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
    return <div className="text-center text-gray-500 py-10">Yuklanmoqda...</div>;
  }

  return (
    <div className="container mx-auto px-4 md:px-10 lg:px-32 py-6">
      <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
        {/* Rasmlar qismi */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            width={350}
            height={350}
            src={produktId.imageUrl}
            alt={produktId.name}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Ma'lumotlar qismi */}
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{produktId.name}</h1>
          <p className="text-gray-600 mt-2 text-sm md:text-base">{produktId.description}</p>

          <p className="text-xl font-semibold text-green-600 mt-4">${produktId.price}</p>
          <p className={`mt-2 ${produktId.stock > 0 ? "text-blue-500" : "text-red-500"}`}>
            {produktId.stock > 0 ? "Sotuvda mavjud" : "Sotuvda yo‘q"}
          </p>

          {/* Xarid qilish tugmalari */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <button className="px-6 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition">
              Xarid qilish
            </button>
            <button className="px-6 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition">
              Savatga qo‘shish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProduktId;
