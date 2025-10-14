"use client";

import Button from "@/components/ui/Button/Button";
import Image from "next/image";

export default function StockSection() {
  return (
    <section className="relative w-full min-h-[512px] flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-24 overflow-hidden">
      {/* ✅ Fixed Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/Images/Dropdownassests/Partners/FreeTools/Stock.png"
          alt="Background"
          fill
          priority={false}
          quality={90}
          className="object-cover object-center"
        />
        {/* 🖤 Overlay */}
        <div className="absolute inset-0 bg-black/65" />
      </div>

      {/* 🟢 Content */}
      <div className="relative z-10 max-w-[935px] w-full flex flex-col items-start text-left gap-5 sm:gap-6">
        {/* Smart Planning Tag */}
        <div className="font-body text-lighttext border border-lighttext rounded-2xl px-3 py-1.5 text-xs sm:text-sm font-medium leading-5">
          Smart Planning
        </div>

        {/* Heading */}
        <h2 className="font-heading text-background text-[22px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-semibold leading-[32px] sm:leading-[44px] md:leading-[52px] lg:leading-[60px]">
          Calculate Optimal Stock Levels & Reorder Points Instantly
        </h2>

        {/* Divider */}
        <div className="w-full border-y border-rowline" />

        {/* Description */}
        <p className="font-body text-lighttext text-[13px] sm:text-[15px] md:text-[16px] leading-[22px] sm:leading-[26px] md:leading-[28px] max-w-[723px]">
          Estimate optimal stock levels, reorder points, and safety stock instantly. 
          Reduce waste, avoid stockouts, and make data-driven purchasing decisions.
        </p>

        {/* Divider */}
        <div className="w-full border-y border-rowline" />

        {/* Button */}
        <div className="pt-2">
          <Button
            href="/"
            className="font-body font-bold text-[14px] sm:text-[16px] text-background rounded-full px-[20px] sm:px-[25px] py-[12px] sm:py-[15px] flex items-center justify-center gap-[12px] sm:gap-[17px] bg-gradient-to-r from-gradient-primary-1 to-gradient-primary-2 hover:opacity-90 transition w-full sm:w-auto"
          >
            Try Inventory Calculator
          </Button>
        </div>
      </div>
    </section>
  );
}
  