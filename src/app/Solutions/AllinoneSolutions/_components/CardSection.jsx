"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import Card from "@/components/ui/Card/Card";

export default function InventoryFeatures({
  title = "Advanced Inventory Management Features",
  subtitle = "Join hundreds of businesses optimizing their operations with Accurack.",
  background = "/Images/Dropdownassests/Solutions/AllinoneSolutions/Cardbg.png",
  mainCard,
  cards = [],
  className = "",
  layout = "split", // 🔹 new prop
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Default fallback cards
  const smallCards =
    cards.length > 0
      ? cards
      : Array(4).fill({
          icon: "/Images/Dropdownassests/Solutions/AllinoneSolutions/Icon.png",
          title: "For E-Commerce",
          text: "Optimize online inventory and fulfillment. Sync product listings, stock levels, and order updates across multiple e-commerce platforms in real time. Leverage AI-driven demand forecasting to reduce overselling, minimize returns.",
        });

  // Card styling
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

  // 🔹 Motion variants for animation consistency
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.15,
        ease: "easeOut",
      },
    }),
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
        {layout === "split" ? (
          /* 🔹 ORIGINAL SPLIT LAYOUT */
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
          >
            <motion.div variants={fadeUp}>
              <h2 className="font-heading font-medium text-[32px] sm:text-[40px] lg:text-[48px] leading-[130%] tracking-[-0.02em] text-background max-w-[598px] mb-6">
                {title}
              </h2>
              {subtitle && (
                <motion.p
                  variants={fadeUp}
                  className="font-body text-[16px] leading-[24px] text-light max-w-[612px]"
                >
                  {subtitle}
                </motion.p>
              )}
            </motion.div>

            {mainCard && (
              <motion.div
                variants={fadeUp}
                className="hidden lg:flex justify-start relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {mainCard.bgImage && (
                  <>
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
                  className={`relative z-10 ${
                    mainCard.className || "max-w-[643px]"
                  }`}
                />
              </motion.div>
            )}
          </motion.div>
        ) : (
          /* 🔹 NEW CENTERED LAYOUT */
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center"
          >
            <motion.div
              variants={fadeUp}
              className="max-w-[800px] mx-auto mb-12"
            >
              <h2 className="font-heading font-medium text-[32px] sm:text-[40px] lg:text-[48px] leading-[130%] tracking-[-0.02em] text-background mb-6">
                {title}
              </h2>
              {subtitle && (
                <motion.p
                  variants={fadeUp}
                  className="font-body text-[16px] leading-[24px] text-light max-w-[700px] mx-auto"
                >
                  {subtitle}
                </motion.p>
              )}
            </motion.div>

            <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 justify-items-center">
              {smallCards.map((card, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  custom={i}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-full max-w-[400px]"
                >
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
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* 🔹 Mobile slider (shared for both layouts) */}
        <div className="mt-12 sm:mt-16 block lg:hidden">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true }}
            className="flex gap-6 w-full overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth"
            onScroll={(e) => {
              const scrollLeft = e.currentTarget.scrollLeft;
              const width = e.currentTarget.offsetWidth;
              const index = Math.round(scrollLeft / width);
              setActiveIndex(index);
            }}
          >
            {smallCards.map((card, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                whileHover={{ scale: 1.03 }}
                className="snap-start flex-shrink-0 w-full px-2 relative"
              >
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
              </motion.div>
            ))}
          </motion.div>

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
      </div>
    </section>
  );
}
