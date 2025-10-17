"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { LazyMotion, domAnimation, m } from "framer-motion";

export default function ForecastingSection() {
  return (
    <LazyMotion features={domAnimation}>
      <section className="w-full bg-background py-10 sm:py-16 lg:py-24 px-4 sm:px-8 lg:px-12 flex flex-col items-center overflow-hidden">
        {/* ✅ Heading */}
        <m.h2
          className="font-heading font-semibold text-3xl sm:text-6xl lg:text-[48px] leading-tight sm:leading-[110%] text-new text-center max-w-[1000px] md:max-w-[1100px] lg:max-w-[1200px]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          AI-Driven Demand Forecasting for Smarter Inventory Management
        </m.h2>

        {/* ✅ Image with overlay */}
        <m.div
          className="relative w-full max-w-[1200px] mt-8 sm:mt-10 lg:mt-12"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Image
            src="/Images/Dropdownassests/Solutions/Perfomancesuite/Forecasting.jpg"
            alt="AI Forecasting Dashboard"
            width={1200}
            height={443}
            loading="lazy"
            className="w-full h-[220px] sm:h-[320px] md:h-[400px] lg:h-[443px] object-cover rounded-[20px] shadow-[0_8px_25px_rgba(0,0,0,0.15)]"
            sizes="(max-width: 768px) 100vw, 1200px"
          />

          {/* ✅ Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <m.button
              className="w-12 h-12 sm:w-14 sm:h-14 lg:w-[70px] lg:h-[70px] rounded-full bg-background border-[3px] sm:border-[4px] border-text/30 flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-md"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Play Forecasting Video"
            >
              <Play className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-text fill-text" />
            </m.button>
          </div>
        </m.div>
      </section>
    </LazyMotion>
  );
}
