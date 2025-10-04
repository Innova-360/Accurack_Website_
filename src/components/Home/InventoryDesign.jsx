"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useRef } from "react";
import { InventoryCard } from "./InventoryCard";
import { ArrowButton } from "./ArrowButton";

const items = [
  {
    title: "Retail",
    desc: "A barcode inventory system can help increase the efficiency of businesses of all sizes. Here's a quick guide to choosing the best software.",
    img: "/Images/Homeassests/SoftwareSection/Design-1.png",
  },
  {
    title: "Wholesale",
    desc: "Scale catalog and fulfillment with accuracy across multiple channels using a centralized inventory source of truth.",
    img: "/Images/Homeassests/SoftwareSection/Design-2.png",
  },
  {
    title: "Food & Beverages",
    desc: "Track perishable lots, shelf life, and compliance while keeping your front-of-house stocked and fast.",
    img: "/Images/Homeassests/SoftwareSection/Design-3.png",
  },
  {
    title: "Manufacturing",
    desc: "Monitor WIP, parts, and assemblies with barcode-driven workflows from goods receipt to finished goods.",
    img: "/Images/Homeassests/SoftwareSection/Design-4.png",
  },
  {
    title: "E-commerce",
    desc: "Sync inventory across marketplaces, handle returns reliably, and prevent overselling with live stock counts.",
    img: "/Images/Homeassests/SoftwareSection/Design-1.png",
  },
];

export default function InventoryDesign() {
  const listRef = useRef(null);
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-20% 0px" });
  const controls = useAnimation();

  if (inView) controls.start("visible");

  const scroll = (dir) => {
    const el = listRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.8;
    el.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { when: "beforeChildren", staggerChildren: 0.08 },
    },
  };
  
  const item = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-[linear-gradient(180deg,_#FFFFFF_0%,_#D5ECF0_115.91%)] overflow-hidden"
      aria-labelledby="industries-heading"
    >
      <div className="relative mx-auto max-w-7xl px-4 py-16 md:py-24">
        <motion.div
          variants={container}
          initial="hidden"
          animate={controls}
          className="flex flex-col items-center text-center"
        >
          <motion.div
            variants={item}
            className="mb-6 inline-flex items-center rounded-full border border-black/10 bg-white/70 px-4 py-1.5 text-xs font-medium text-gray-700 backdrop-blur-sm"
          >
            For Everyone
          </motion.div>

          <motion.h2
            id="industries-heading"
            variants={item}
            className="text-balance text-3xl font-bold leading-tight text-gray-900 md:text-5xl"
          >
            An inventory software designed to
            <br />
            meet the needs of your industry
          </motion.h2>

          <motion.p
            variants={item}
            className="mt-4 max-w-2xl text-pretty text-sm leading-6 text-gray-600 md:text-base"
          >
            Accurack's advanced features meet the challenging demands of your
            industry and alleviate unnecessary pain points, saving you valuable
            time and money.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={controls}
          className="mt-12"
        >
          <div
            ref={listRef}
            className="grid grid-flow-col auto-cols-[minmax(280px,1fr)] gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {items.map((it, i) => (
              <motion.div
                key={it.title}
                variants={item}
                className="snap-center"
              >
                <InventoryCard
                  title={it.title}
                  description={it.desc}
                  imageSrc={it.img}
                  index={i}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Navigation buttons */}
        <div className="mt-8 flex justify-center gap-3">
          <ArrowButton direction="left" onClick={() => scroll("left")} />
          <ArrowButton direction="right" onClick={() => scroll("right")} />
        </div>
      </div>

      {/* Curved SVG Bottom Section */}
      <div className="relative h-32 w-full bg-[#F5F3F0] overflow-hidden">
        <svg
          className="absolute top-0 left-0 w-full h-24 scale-y-[-1]"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="rgba(216, 236, 240, 1)"
            fillOpacity="1"
            d="M0,280 C480,0 960,0 1440,280 L1440,320 L0,320 Z"
          />
        </svg>
      </div>
    </section>
  );
}