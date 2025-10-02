"use client";

import Image from "next/image";
import { Play } from "lucide-react"; 
import { Lora } from "next/font/google";

const lora = Lora({
  subsets: ["latin"],
  weight: ["500"],
});

export default function ForecastingSection() {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-8 lg:px-12 flex flex-col items-center">
      {/* ✅ Heading */}
      <h2
        className={`${lora.className} text-[32px] sm:text-[40px] lg:text-[48px] leading-[100%] text-[#043841] text-center max-w-[1200px]`}
      >
        AI-Driven Demand Forecasting for Smarter Inventory Management
      </h2>

      {/* ✅ Image with overlay */}
      <div className="relative w-full max-w-[1200px] mt-8">
        <Image
          src="/Images/Dropdownassests/Solutions/Perfomancesuite/Forecasting.jpg"
          alt="Forecasting"
          width={1200}
          height={443}
          className="w-full h-[443px] sm:h-[360px] lg:h-[443px] object-cover rounded-[20px]"
        />

        {/* ✅ Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            className="w-[70px] h-[70px] rounded-full bg-white border-[4px] border-[#00000052] flex items-center justify-center hover:scale-110 transition-transform duration-300"
          >
            {/* 🔹 Play Icon Pure Black */}
            <Play className="w-8 h-8 text-black fill-black" />
          </button>
        </div>
      </div>
    </section>
  );
}
