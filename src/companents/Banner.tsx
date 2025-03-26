// "use client";
// import React, { useEffect, useState } from "react";
// import { BAnnerType } from "@/Type";
// import axios from "axios";
// import Image from "next/image";
// import SquareArrowLeft01Icon from "../../public/square-arrow-left-01-stroke-rounded";

// function Banner() {
//   const [banner, setBanner] = useState<BAnnerType[]>([]);
//   const [carusel, setCarusel] = useState(0);

//   useEffect(() => {
//     axios.get(`https://nt.softly.uz/api/front/banners`).then((res) => {
//       setBanner(res.data);
//     });
//   }, []);

//   function next() {
//     if (banner.length === 0) return;
//     setCarusel((prev) => (prev + 1) % banner.length);
//   }

//   function prev() {
//     if (banner.length === 0) return;
//     setCarusel((prev) => (prev - 1 + banner.length) % banner.length);
//   }

//   return (
//     <div className="container mx-auto px-4 flex flex-col items-center w-full">
//       <div className="relative w-full max-w-7xl mt-3 h-[400px] overflow-hidden rounded-xl shadow-xl ">
//         <button
//           onClick={prev}
//           className="absolute top-1/2 left-4 z-10 p-2 bg-black/40 rounded-full hover:bg-black/60 transition"
//         >
//           <SquareArrowLeft01Icon className="text-white w-8 h-8" />
//         </button>

//         {banner.length > 0 && (
//           <div
//             key={banner[carusel].id}
//             className="relative w-full h-full transition-transform duration-700 ease-in-out"
//           >
//             <Image
//               src={banner[carusel].imageUrl}
//               alt={banner[carusel].title}
//               width={1200} // To‘liq kenglik uchun
//               height={400} // Balanslangan balandlik uchun
//               className="rounded-xl w-full h-full"
//             />

//             <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70 rounded-xl flex items-end p-6">
//               <h2 className="text-white text-xl font-semibold">
//                 {banner[carusel].title}
//               </h2>
//             </div>
//           </div>
//         )}

//         <button
//           onClick={next}
//           className="absolute top-1/2 right-4 z-10 p-2 bg-black/40 rounded-full hover:bg-black/60 transition"
//         >
//           <SquareArrowLeft01Icon className="text-white w-8 h-8 rotate-180" />
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Banner;
"use client";
import React, { useEffect, useState } from "react";
import { BAnnerType } from "@/Type";
import axios from "axios";
import Image from "next/image";
import SquareArrowLeft01Icon from "../../public/square-arrow-left-01-stroke-rounded";
function Banner() {
  const [banner, setBanner] = useState<BAnnerType[]>([]);
  const [carusel, setCarusel] = useState(0);

  useEffect(() => {
    axios.get("https://nt.softly.uz/api/front/banners").then((res) => {
      setBanner(res.data);
    });
  }, []);

  function next() {
    if (banner.length === 0) return;
    setCarusel((prev) => (prev + 1) % banner.length);
  }

  function prev() {
    if (banner.length === 0) return;
    setCarusel((prev) => (prev - 1 + banner.length) % banner.length);
  }

  return (
    <div className="container mx-auto px-4 md:px-10 lg:px-32 flex flex-col items-center">
      <div className="relative w-full max-w-7xl mt-3 h-[250px] md:h-[400px] overflow-hidden rounded-xl shadow-xl">
        <button
          onClick={prev}
          className="absolute top-1/2 left-4 z-10 p-2 bg-black/40 rounded-full hover:bg-black/60 transition"
        >
          <SquareArrowLeft01Icon className="text-white w-6 h-6 md:w-8 md:h-8" />
        </button>

        {banner.length > 0 && (
          <div
            key={banner[carusel].id}
            className="relative w-full h-full transition-transform duration-700 ease-in-out"
          >
            <Image
              src={banner[carusel].imageUrl}
              alt={banner[carusel].title}
              width={1200}
              height={400}
              className="rounded-xl w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60 rounded-xl flex m-auto text-center p-6">
              <h2 className="text-white text-3xl md:text-xl font-bold m-auto">
                {banner[carusel].title}
              </h2>
            </div>
          </div>
        )}

        <button
          onClick={next}
          className="absolute top-1/2 right-4 z-10 p-2 bg-black/40 rounded-full hover:bg-black/60 transition"
        >
          <SquareArrowLeft01Icon className="text-white w-6 h-6 md:w-8 md:h-8 rotate-180" />
        </button>
      </div>
    </div>
  );
}

export default Banner;
