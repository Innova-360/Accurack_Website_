"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import Card from "@/components/ui/Card";

export default function InventoryFeatures({
  title = "Advanced Inventory Management Features",
  subtitle = "Join hundreds of businesses optimizing their operations with Accurack.",
  background = "/Images/Dropdownassests/Solutions/AllinoneSolutions/Cardbg.png",
  mainCard,
  cards = [],
  className = "",
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Default fallback cards (if none passed)
  const smallCards =
    cards.length > 0
      ? cards
      : Array(4).fill({
          icon: "/Images/Dropdownassests/Solutions/AllinoneSolutions/Icon.png",
          title: "For E-Commerce",
          text: "Optimize online inventory and fulfillment. Sync product listings, stock levels, and order updates across multiple e-commerce platforms in real time. Leverage AI-driven demand forecasting to reduce overselling, minimize returns.",
        });

  // 🔹 Helper — consistent card style (handles bgImage)
  const getCardProps = (card) => {
    const hasBg = !!card.bgImage;
    const baseClass = hasBg
      ? "relative overflow-hidden bg-black/60 border border-white/10 rounded-[20px] p-6 flex flex-col justify-end items-start text-left min-h-[327px]"
      : "bg-background/5 backdrop-blur-md border border-white/15 rounded-[20px] p-6 flex flex-col justify-end items-start text-left min-h-[327px]";
    return {
      ...card,
      className: `${baseClass} ${card.className || ""}`,
    };
  };

  return (
    <section
      className={`relative w-full bg-text text-background overflow-hidden ${className}`}
    >
      {/* 🔹 Section Background */}
      {background && (
        <div className="absolute inset-0">
          <Image
            src={background}
            alt="background"
            fill
            className="object-cover opacity-20 -top-[350px]"
          />
        </div>
      )}

      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-16 py-12 sm:py-16 lg:py-24">
        {/* 🔹 Header + Main Card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Text */}
          <div>
            <h2 className="font-heading font-medium text-[32px] sm:text-[40px] lg:text-[48px] leading-[130%] tracking-[-0.02em] text-background max-w-[598px] mb-6">
              {title}
            </h2>
            {subtitle && (
              <p className="font-body text-[16px] leading-[24px] text-light max-w-[612px]">
                {subtitle}
              </p>
            )}
          </div>

          {/* 🔹 Large Main Card (desktop only) */}
          {mainCard && (
            <div className="hidden lg:flex justify-start relative">
              {mainCard.bgImage && (
                <>
                  {/* Background Image + Overlay */}
                  <div className="absolute inset-0 rounded-[20px] overflow-hidden">
                    <Image
                      src={mainCard.bgImage}
                      alt="main card background"
                      fill
                      className="object-cover opacity-40"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/50 rounded-[20px]" />
                </>
              )}
              <Card
                {...getCardProps(mainCard)}
                className={`relative z-10 ${mainCard.className || "max-w-[643px]"}`}
              />
            </div>
          )}
        </div>

        {/* 🔹 Mobile Slider */}
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
              <div key={i} className="snap-start flex-shrink-0 w-full px-2 relative">
                {card.bgImage && (
                  <>
                    <div className="absolute inset-0 rounded-[20px] overflow-hidden">
                      <Image
                        src={card.bgImage}
                        alt={`card background ${i}`}
                        fill
                        className="object-cover opacity-40"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black/50 rounded-[20px]" />
                  </>
                )}
                <Card {...getCardProps(card)} className="relative z-10" />
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

        {/* 🔹 Desktop Grid */}
        <div className="hidden lg:grid mt-12 sm:mt-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {smallCards.map((card, i) => (
            <div key={i} className="relative">
              {card.bgImage && (
                <>
                  <div className="absolute inset-0 rounded-[20px] overflow-hidden">
                    <Image
                      src={card.bgImage}
                      alt={`card background ${i}`}
                      fill
                      className="object-cover opacity-40"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/50 rounded-[20px]" />
                </>
              )}
              <Card {...getCardProps(card)} className="relative z-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
