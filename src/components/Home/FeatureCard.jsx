"use client";

import React, { useState, useMemo, memo } from "react";
import { LazyMotion, domAnimation, motion } from "framer-motion";
import Image from "next/image";
import SuspenseWrapper from "../common/SuspenseWrapper";

const FeatureCardGrid = memo(function FeatureCardGrid({ features = [] }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // memoize variants so they’re not recreated on each render
  const cardVariants = useMemo(
    () => ({
      initial: { scale: 1 },
      hover: { scale: 1.05 },
    }),
    []
  );

  const blueShapeVariants = useMemo(
    () => ({
      initial: { x: 110, y: 120, rotate: 45 },
      hover: { x: 0, y: -5, rotate: 360 },
    }),
    []
  );

  const textVariants = useMemo(
    () => ({
      initial: { scaleX: 1, originX: -1 },
      hover: {
        scaleX: 0.85,
        originX: 0,
        paddingRight: "50px",
        fontSize: "1.1rem",
      },
    }),
    []
  );

  return (
    <div className="max-w-6xl p-5 mb-10 mx-auto pb-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <LazyMotion features={domAnimation}>
        {features.map((feature, index) => (
          <motion.div
            key={index}
            style={{
              fontFamily: "var(--font-jakarta)",
              willChange: "transform, opacity",
            }}
            variants={cardVariants}
            initial="initial"
            whileHover="hover"
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            className="relative overflow-hidden rounded-4xl text-left border-[2px] border-[#006173] px-9 py-13 bg-white cursor-pointer transition-transform duration-300"
          >
            {/* Blue Animated Shape */}
            <motion.div
              variants={blueShapeVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="absolute bottom-4 right-4 w-28 h-40  bg-gradient-to-r from-cyan-400 to-teal-600 rounded-xl flex items-center justify-center"
            >
              <Image
                src={feature.arrow}
                alt="arrow"
                className="w-15 h-10 select-none pointer-events-none"
                height={124}
                width={120}
                loading="lazy"
              />
            </motion.div>

            {/* Text Content */}
            <motion.div
              className="overflow-hidden hover:transition-all hover:duration-400"
              variants={textVariants}
              transition={{ duration: 0.1, ease: "easeOut" }}
            >
              <h3 className="font-[Typeface/Family/Body] text-lg font-semibold text-black mb-2">
                {hoveredIndex === index
                  ? feature.title.slice(0, 30) + "..."
                  : feature.title}
              </h3>
              <p className="text-sm text-gray-500">{feature.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </LazyMotion>
    </div>
  );
});

export default function FeatureCardGridWithSuspense(props) {
  return (
    <SuspenseWrapper
      fallback={<div className="text-center p-10">Loading...</div>}
    >
      <FeatureCardGrid {...props} />
    </SuspenseWrapper>
  );
}
