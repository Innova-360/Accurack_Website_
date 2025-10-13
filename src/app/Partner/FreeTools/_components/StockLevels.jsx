"use client";

import Button from "@/components/ui/Button/Button";
import Image from "next/image";

export default function StockSection() {
  return (
    <section className="relative w-full min-h-[512px] flex items-center justify-center px-6 md:px-16 lg:px-24 overflow-hidden">
      <Image
        src="/Images/Dropdownassests/Partners/FreeTools/Stock.png"
        alt="Background"
        width={1920}
        height={1080}
        loading="lazy"
        className="absolute inset-0 object-cover opacity-100 -z-10"
      />

      {/* 🖤 Dark Overlay */}
      <div className="absolute inset-0 bg-black/65 -z-10" />

      {/* 🟢 Content */}
      <div className="max-w-[935px] flex flex-col items-start gap-6 text-left">
        {/* Smart Planning Tag */}
        <div className="font-body text-lighttext border border-lighttext rounded-2xl px-3 py-2 text-sm font-medium leading-5">
          Smart Planning
        </div>

        {/* Heading */}
        <h2 className="font-heading text-background text-[32px] sm:text-[40px] lg:text-[48px] font-medium leading-[48px] sm:leading-[56px] lg:leading-[60px]">
          Calculate Optimal Stock Levels & Reorder Points Instantly
        </h2>

        {/* Top Divider Line */}
        <div className="w-full border-y border-rowline " />

        {/* Description Text */}
        <p className="font-body text-lighttext text-[14px] sm:text-[16px] leading-[24px] max-w-[723px]">
          Estimate optimal stock levels, reorder points, and safety stock
          instantly. Reduce waste, avoid stockouts, and make data-driven
          purchasing decisions.
        </p>

        {/* Bottom Divider Line */}
        <div className="w-full border-y border-rowline " />

        {/* Button */}
        <Button
          href="/"
          className="font-body font-bold text-[16px] text-background rounded-full px-[25px] py-[15px] flex items-center justify-center gap-[17px] bg-gradient-to-r from-gradient-primary-1 to-gradient-primary-2 hover:opacity-90 transition"
        >
          Try Inventory Calculator
        </Button>
      </div>
    </section>
  );
}
