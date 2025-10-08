"use client";

import Image from "next/image";
import { memo, useState, useCallback, useMemo } from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";
import Card from "@/components/ui/Card/Card";

// ✅ Animation Variants — defined outside component to prevent re-creation
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.12, ease: "easeOut" },
  }),
};

// ✅ Memoized Card Item to avoid unnecessary re-renders
const MemoizedCard = memo(function MemoizedCard({ card, index }) {
  const hasBg = !!card.bgImage;
  const cardClass =
    card.className || "bg-background/5 border border-white/15 rounded-[20px]";

  return (
    <m.div
      custom={index}
      variants={fadeUp}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.25 }}
      className="snap-start flex-shrink-0 w-full px-2 relative"
    >
      {hasBg && (
        <>
          <div className="absolute inset-0 rounded-[20px] overflow-hidden">
            <Image
              src={card.bgImage}
              alt={card.title || "Feature Background"}
              fill
              loading="lazy"
              decoding="async"
              className="object-cover opacity-40 will-change-transform"
            />
          </div>
          <div className="absolute inset-0 bg-black/50 rounded-[20px]" />
        </>
      )}
      <Card {...card} className={`relative z-10 ${cardClass}`} />
    </m.div>
  );
});

export default function InventoryFeatures({
  title = "Advanced Inventory Management Features",
  subtitle = "Join hundreds of businesses optimizing their operations with Accurack.",
  background = "/Images/Dropdownassests/Solutions/AllinoneSolutions/Cardbg.png",
  mainCard,
  cards = [],
  className = "",
  layout = "split",
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  // ✅ Memoized fallback cards
  const smallCards = useMemo(() => {
    if (cards.length > 0) return cards;
    return Array(4).fill({
      icon: "/Images/Dropdownassests/Solutions/AllinoneSolutions/Icon.png",
      title: "For E-Commerce",
      text: "Optimize online inventory and fulfillment. Sync product listings, stock levels, and order updates across multiple e-commerce platforms.",
    });
  }, [cards]);

  // ✅ Stable scroll handler
  const handleScroll = useCallback((e) => {
    const scrollLeft = e.currentTarget.scrollLeft;
    const width = e.currentTarget.offsetWidth;
    setActiveIndex(Math.round(scrollLeft / width));
  }, []);

  return (
    <section
      className={`relative w-full bg-text text-background overflow-hidden ${className}`}
    >
      {/* Background */}
      {background && (
        <div className="absolute inset-0">
          <Image
            src={background}
            alt="background"
            fill
            priority={false}
            loading="lazy"
            decoding="async"
            className="object-cover opacity-20 -top-[350px] will-change-transform"
          />
        </div>
      )}

      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-16 py-12 sm:py-16 lg:py-24">
        <LazyMotion features={domAnimation}>
          {layout === "split" ? (
            /* ----------------- SPLIT LAYOUT ----------------- */
            <m.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
            >
              <m.div variants={fadeUp}>
                <h2 className="font-heading font-medium text-[32px] sm:text-[40px] lg:text-[48px] leading-[130%] tracking-[-0.02em] text-background max-w-[598px] mb-6">
                  {title}
                </h2>
                {subtitle && (
                  <m.p
                    variants={fadeUp}
                    className="font-body text-[16px] leading-[24px] text-light max-w-[612px]"
                  >
                    {subtitle}
                  </m.p>
                )}
              </m.div>

              {mainCard && (
                <m.div
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
                          loading="lazy"
                          decoding="async"
                          className="object-cover opacity-40"
                        />
                      </div>
                      <div className="absolute inset-0 bg-black/50 rounded-[20px]" />
                    </>
                  )}
                  <Card
                    {...mainCard}
                    className={`relative z-10 ${
                      mainCard.className || "max-w-[643px]"
                    }`}
                  />
                </m.div>
              )}
            </m.div>
          ) : (
            /* ----------------- CENTERED LAYOUT ----------------- */
            <m.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="text-center"
            >
              <m.div variants={fadeUp} className="max-w-[800px] mx-auto mb-12">
                <h2 className="font-heading font-medium text-[32px] sm:text-[40px] lg:text-[48px] leading-[130%] tracking-[-0.02em] text-background mb-6">
                  {title}
                </h2>
                {subtitle && (
                  <m.p
                    variants={fadeUp}
                    className="font-body text-[16px] leading-[24px] text-light max-w-[700px] mx-auto"
                  >
                    {subtitle}
                  </m.p>
                )}
              </m.div>

              <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 justify-items-center">
                {smallCards.map((card, i) => (
                  <MemoizedCard key={i} card={card} index={i} />
                ))}
              </div>
            </m.div>
          )}

          {/* Mobile Slider */}
          <div className="mt-12 sm:mt-16 block lg:hidden">
            <m.div
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              viewport={{ once: true }}
              className="flex gap-6 w-full overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth"
              onScroll={handleScroll}
            >
              {smallCards.map((card, i) => (
                <MemoizedCard key={i} card={card} index={i} />
              ))}
            </m.div>

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
        </LazyMotion>
      </div>
    </section>
  );
}
