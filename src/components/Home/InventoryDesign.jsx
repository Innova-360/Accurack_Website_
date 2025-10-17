"use client";

import {
  motion,
  useAnimation,
  useInView,
  useMotionValue,
  animate,
} from "framer-motion";
import { useRef, useEffect } from "react";
import { InventoryCard } from "./InventoryCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const inView = useInView(sectionRef, { once: true });
  const controls = useAnimation();
  const x = useMotionValue(0);

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { when: "beforeChildren", staggerChildren: 0.08 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
  };

  const slide = (direction) => {
    const containerEl = containerRef.current;
    if (!containerEl) return;

    const maxScroll = containerEl.scrollWidth - containerEl.clientWidth;

    // Calculate distance based on screen size
    const isMobile = window.innerWidth < 1024;
    const distance = isMobile
      ? containerEl.clientWidth
      : containerEl.clientWidth / 4;

    const currentX = x.get();
    let newX = direction === "left" ? currentX + distance : currentX - distance;

    // Prevent overscrolling
    newX = Math.min(0, Math.max(-maxScroll, newX));

    animate(x, newX, { duration: 0.3, ease: "easeInOut" });
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-b from-white via-white to-[#D5ECF0] overflow-hidden"
    >
      <div className="relative mx-auto max-w-7xl px-4 py-16 md:py-24 text-center">
        {/* Heading */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={controls}
          className="flex flex-col items-center"
        >
          <motion.h2
            variants={item}
            className="text-3xl font-heading md:text-5xl font-bold text-gray-900"
          >
            An inventory software designed to
            <br />
            meet the needs of your industry
          </motion.h2>

          <motion.p
            variants={item}
            className="mt-4 max-w-2xl font-body text-gray-600 text-sm md:text-base"
          >
            Accurack's advanced features meet the challenging demands of your
            industry and alleviate unnecessary pain points, saving you valuable
            time and money.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <div
          ref={containerRef}
          className="mt-16 relative w-full overflow-x-hidden"
        >
          <motion.div
            className="flex gap-6 will-change-transform"
            style={{ x }}
            initial={false}
          >
            {items.map((it, i) => (
              <div key={i} className="w-full sm:w-[320px] flex-shrink-0">
                <InventoryCard
                  title={it.title}
                  description={it.desc}
                  imageSrc={it.img}
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Arrows */}
        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={() => slide("left")}
            className="bg-white/90 hover:bg-white text-gray-700 shadow-md rounded-full p-3 transition"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => slide("right")}
            className="bg-white/90 hover:bg-white text-gray-700 shadow-md rounded-full p-3 transition"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Curved Bottom */}
      <div className="relative h-32 w-full bg-[#F3F3F3] overflow-hidden">
        <svg
          className="absolute top-0 left-0 w-full h-24 scale-y-[-1]"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#DBEFF3"
            fillOpacity="1"
            d="M0,280 C480,0 960,0 1440,280 L1440,320 L0,320 Z"
          />
        </svg>
      </div>
    </section>
  );
}
