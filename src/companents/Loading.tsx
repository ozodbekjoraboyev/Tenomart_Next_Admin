"use client";
import React from "react";

export default function BouncingLoader() {
  return (
    <div className="relative w-12 h-12 mx-auto">
    {/* Shadow */}
    <div className="absolute top-[60px] left-0 w-12 h-[5px] bg-[#8ba7d250] rounded-full animate-shadow"></div>


    <div className="absolute w-full h-full bg-blue-700 rounded-md animate-jump"></div>

    <style jsx>{`
      @keyframes jump {
        15% {
          border-bottom-right-radius: 3px;
        }
        25% {
          transform: translateY(9px) rotate(22.5deg);
        }
        50% {
          transform: translateY(18px) scale(1, 0.9) rotate(45deg);
          border-bottom-right-radius: 40px;
        }
        75% {
          transform: translateY(9px) rotate(67.5deg);
        }
        100% {
          transform: translateY(0) rotate(90deg);
        }
      }

      @keyframes shadow {
        0%, 100% {
          transform: scale(1, 1);
        }
        50% {
          transform: scale(1.2, 1);
        }
      }

      .animate-jump {
        animation: jump 0.5s linear infinite;
      }

      .animate-shadow {
        animation: shadow 0.5s linear infinite;
      }
    `}</style>
  </div>
  );
}
