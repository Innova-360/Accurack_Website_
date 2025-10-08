"use client";

import { motion } from "framer-motion";
import React from "react";
import SuspenseWrapper from "@/components/common/SuspenseWrapper"; // ✅ make sure path is correct

export const MissionBanner = ({
  title,
  description,
  backgroundImageUrl,
  overlayColor = "bg-teal-900/70",
}) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] },
    },
  };

  return (
    <SuspenseWrapper>
      <section className="relative w-full overflow-hidden">
        {/* Background Image Layer */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${backgroundImageUrl})`,
          }}
        />

        {/* Transparent Overlay */}
        <div
          className={`absolute inset-0 ${overlayColor} pointer-events-none`}
          aria-hidden="true"
        />

        {/* Animated Text Content */}
        <motion.div
          className="relative z-10 container mx-auto px-6 py-24 md:py-32 text-center text-white"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-serif font-semibold mb-6"
            variants={itemVariants}
          >
            {title}
          </motion.h2>
          <motion.p
            className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed text-gray-100"
            variants={itemVariants}
          >
            {description}
          </motion.p>
        </motion.div>
      </section>
    </SuspenseWrapper>
  );
};
