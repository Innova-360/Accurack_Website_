"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import Card from "../../ui/Card/Card"; // apne Card ka sahi path lagao

export default function InventoryFeatures() {
  const [activeIndex, setActiveIndex] = useState(0);

  const smallCards = Array(4).fill({
    icon: "/Images/Dropdownassests/Solutions/AllinoneSolutions/Icon.png",
    title: "For E-Commerce",
    text: "Optimize online inventory and fulfillment. Sync product listings, stock levels, and order updates across multiple e-commerce platforms in real time. Leverage AI-driven demand forecasting to reduce overselling, minimize returns.",
  });

  return (
    <section className="relative w-full bg-text text-background overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/Images/Dropdownassests/Solutions/AllinoneSolutions/Cardbg.png"
          alt="background"
          fill
          className="object-cover opacity-20 -top-[350px]"
        />
      </div>

      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-16 py-12 sm:py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* 🔹 Left Side Content */}
          <div>
            <h2 className="font-heading font-medium text-[32px] sm:text-[40px] lg:text-[48px] leading-[130%] tracking-[-0.02em] text-background max-w-[598px] mb-6">
              Advanced Inventory Management Features
            </h2>
            <p className="font-body text-[16px] leading-[24px] text-light max-w-[612px]">
              Join hundreds of businesses optimizing their operations with
              Accurack.
            </p>
          </div>

          {/* 🔹 Large Card (sirf Desktop pe show hoga) */}
          <div className="hidden lg:flex justify-start">
            <Card
              icon="/Images/Dropdownassests/Solutions/AllinoneSolutions/Icon.png"
              title="For E-Commerce"
              text="Optimize online inventory and fulfillment. Sync product listings, stock levels, and order updates across multiple e-commerce platforms in real time. Leverage AI-driven demand forecasting to reduce overselling, minimize returns."
              className="w-full max-w-[643px] h-auto min-h-[327px] bg-background/5 backdrop-blur-md rounded-[20px] p-6 flex flex-col items-start text-left border border-white/15"
              contentClass="items-start text-left"
              titleClass="font-body font-medium text-[20px] leading-[120%] text-background mt-6 mb-4"
              textClass="font-body font-normal text-[16px] leading-[140%] text-background max-w-[350px]"
              iconWrapperClass="w-[63.23px] h-[58px] rounded-[158.08px] bg-background/10 flex items-center justify-center p-[12.65px] mb-2"
              iconWidth={32.71}
              iconHeight={32.71}
            />
          </div>
        </div>

        {/* 🔹 Mobile Slider (sirf 4 chhote cards) */}
        <div className="mt-12 sm:mt-16 block lg:hidden">
          <motion.div
            className="flex gap-6 w-full overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth"
            onScroll={(e) => {
              const scrollLeft = e.currentTarget.scrollLeft;
              const width = e.currentTarget.offsetWidth;
              const index = Math.round(scrollLeft / width);
              setActiveIndex(index);
            }}
          >
            {smallCards.map((card, i) => (
              <div key={i} className="snap-start flex-shrink-0 w-full px-2">
                <Card
                  icon={card.icon}
                  title={card.title}
                  text={card.text}
                  className="w-full h-auto min-h-[327px] bg-background/5 backdrop-blur-md rounded-[20px] p-6 flex flex-col items-start text-left border border-white/15"
                  contentClass="items-start text-left"
                  titleClass="font-body font-medium text-[20px] leading-[120%] text-white mt-6 mb-4"
                  textClass="font-body font-normal text-[16px] leading-[140%] text-white max-w-[350px]"
                  iconWrapperClass="w-[63.23px] h-[58px] rounded-[158.08px] bg-background/10 flex items-center justify-center p-[12.65px] mb-2"
                  iconWidth={32.71}
                  iconHeight={32.71}
                />
              </div>
            ))}
          </motion.div>

          {/* Dots */}
          <div className="flex justify-center mt-4 space-x-2">
            {smallCards.map((_, i) => (
              <span
                key={i}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  i === activeIndex ? "bg-background" : "bg-background/40"
                }`}
              />
            ))}
          </div>
        </div>

        {/* 🔹 Desktop Grid (neeche 4 chhote cards) */}
        <div className="hidden lg:grid mt-12 sm:mt-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {smallCards.map((card, i) => (
            <Card
              key={i}
              icon={card.icon}
              title={card.title}
              text={card.text}
              className="w-full h-auto min-h-[327px] bg-background/5 backdrop-blur-md rounded-[20px] p-6 flex flex-col items-start text-left border border-white/15"
              contentClass="items-start text-left"
              titleClass="font-body font-medium text-[20px] leading-[120%] text-white mt-6 mb-4"
              textClass="font-body font-normal text-[16px] leading-[140%] text-white max-w-[350px]"
              iconWrapperClass="w-[63.23px] h-[58px] rounded-[158.08px] bg-background/10 flex items-center justify-center p-[12.65px] mb-2"
              iconWidth={32.71}
              iconHeight={32.71}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
