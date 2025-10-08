"use client";

import { motion } from "framer-motion";

export function HeroBanner({
  title = "Tracking for Production",
  subtitle = "Monitor raw materials, work-in-progress (WIP), and finished",
  backgroundImage = "/warehouse-bg.jpg",
  backgroundColor = "#0a5f6f",
  titleClassName = "",
  subtitleClassName = "",
  containerClassName = "",
}) {
  return (
    <section 
      className={`relative w-full min-h-[400px] flex items-center justify-center overflow-hidden ${containerClassName}`}
      style={{
        backgroundColor: backgroundColor,
      }}
    >
      {/* Background Image with Overlay */}
      {backgroundImage && (
        <div className="absolute inset-0">
          <img
            src={backgroundImage}
            alt=""
            className="w-full h-full object-cover opacity-30"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
          <div 
            className="absolute inset-0" 
            style={{
              background: `linear-gradient(180deg, ${backgroundColor}99 0%, ${backgroundColor}cc 100%)`
            }}
          />
        </div>
      )}

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-8 ${titleClassName}`}
        >
          {title}
        </motion.h1>

        {/* Subtitle Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="inline-block"
        >
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-8 py-4 md:px-12 md:py-5">
            <p className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-white italic ${subtitleClassName}`}>
              {subtitle}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}