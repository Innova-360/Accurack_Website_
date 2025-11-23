"use client";

import Button from "@/components/ui/Button/Button";

export default function SneakPeekSection() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-20 py-16 flex flex-col gap-8">
      {/* 🔹 Top Row: Heading + Description */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-12">
        {/* Left Heading */}
        <h2 className="font-heading text-text text-[28px] sm:text-[36px] lg:text-[48px] font-medium leading-[48px] tracking-[-0.02em] max-w-[469px]">
          Get a Sneak Peek into
        </h2>

        {/* Right Description */}
        <p className="font-body text-light text-[16px] leading-[24px] opacity-90 max-w-[382px]">
          Download a free excerpt from our premium guide to explore AI-driven
          insights that can elevate your business operations today.
        </p>
      </div>

      {/* 🔹 Divider Line */}
      <div className="w-full max-w-[1200px] border-b border-rowline2 pb-8 mx-auto" />

      {/* 🔹 Bottom Row: Button + Right Heading */}
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 md:gap-12">
        {/* Button */}
        <Button className="font-body font-bold text-[16px] text-background rounded-full px-[25px] py-[15px] flex items-center justify-center gap-[17px] bg-gradient-to-r from-gradient-primary-1 to-gradient-primary-2 hover:opacity-90 transition w-fit">
          Download Free Excerpt
        </Button>

        {/* Right Heading */}
        <h3 className="font-heading text-rowline2 text-[28px] sm:text-[36px] lg:text-[48px] font-medium leading-[48px] tracking-[-0.02em] max-w-[821px] text-left md:text-right">
          The Essential Guide to AI in Inventory
        </h3>
      </div>
    </section>
  );
}
