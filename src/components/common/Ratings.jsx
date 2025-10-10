"use client";

import { motion } from "framer-motion";
import { Star, StarHalf } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Ratings({ theme = "light" }) {
  const isDark = theme === "dark";

  const colors = {
    bg: isDark ? "#0a0a0a" : "#f8fafc",
    text: isDark ? "#e5e7eb" : "#1e293b",
    star: isDark ? "#ffffff" : "#FFCA43",
  };

  // === RATING STARS ===
  const RatingStars = () => (
    <div className="flex gap-[2px] sm:gap-1 justify-center">
      {[...Array(4)].map((_, i) => (
        <Star
          key={i}
          className="text-[10px] sm:text-[14px] lg:text-[18px] flex-shrink-0"
          size={18}
          style={{ color: colors.star, fill: colors.star }}
        />
      ))}
      <StarHalf
        className="text-[10px] sm:text-[14px] lg:text-[18px] flex-shrink-0"
        size={18}
        style={{ color: colors.star, fill: colors.star }}
      />
    </div>
  );

  // === ITEM CARD ===
  const Item = ({ icon, title, rating, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
      className="flex flex-col items-center justify-center w-full"
    >
      {/* Icon */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.1 + 0.2, ease: "easeOut" }}
        className="flex items-center gap-1 sm:gap-2"
      >
        {icon === "left" ? (
          <Image
            width={104}
            height={104}
            src="/Images/Dropdownassests/Solutions/InventorySolutions/Get.png"
            alt={title}
            className="w-6 h-6 sm:w-50 sm:h-20 md:w-12 md:h-12 lg:w-16 lg:h-16 flex-shrink-0"
          />
        ) : icon === "right" ? (
          <Image
            width={104}
            height={104}
            src="/Images/Dropdownassests/Solutions/InventorySolutions/Msg.png"
            alt={title}
            className="w-6 h-6 sm:w-full sm:h-full md:w-12 md:h-12 lg:w-16 lg:h-16 flex-shrink-0"
          />
        ) : (
          <Image
            width={64}
            height={64}
            src={icon}
            alt={title}
            className="w-6 h-6 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 flex-shrink-0"
          />
        )}
      </motion.div>

      {/* Stars + Reviews */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
        className="mt-1 text-center"
      >
        <RatingStars />
        <p
          className="mt-1 text-[7px] sm:text-[9px] md:text-xs lg:text-sm font-medium"
          style={{ color: colors.text }}
        >
          {rating}
        </p>
      </motion.div>
    </motion.div>
  );

  return (
    <section
      className="relative w-full z-100 py-12 overflow-hidden transition-colors duration-300"
      style={{ backgroundColor: colors.bg }}
    >
      {/* === BLUR BACKGROUND === */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] bg-cyan-400/30 blur-[120px] rounded-full" />
      </div>

      {/* === RATINGS GRID === */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-2 sm:px-4 lg:px-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 items-center"
        >
          <Item
            icon="left"
            title="GetApp"
            rating="4.2 (940 reviews)"
            index={0}
          />
          <Item
            icon="right"
            title="Software Advice"
            rating="4.2 (941 reviews)"
            index={1}
          />
          <Item
            icon="/Images/Dropdownassests/Solutions/InventorySolutions/Next.PNG"
            title="G2"
            rating="4.2 (941 reviews)"
            index={2}
          />
          <Item
            icon="/Images/Dropdownassests/Solutions/InventorySolutions/Arrow.png"
            title="Capterra"
            rating="4.0 (246 reviews)"
            index={3}
          />
        </motion.div>
      </div>
    </section>
  );
}
