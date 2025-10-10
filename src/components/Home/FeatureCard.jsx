"use client";

import React, { useState, useMemo, memo } from "react";
import { LazyMotion, domAnimation, motion } from "framer-motion";
import Image from "next/image";
import SuspenseWrapper from "../common/SuspenseWrapper";

const FeatureCardGrid = memo(function FeatureCardGrid({ features = [] }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Slight scale for card
  const cardVariants = useMemo(
    () => ({
      initial: { scale: 1 },
      hover: { scale: 1 },
    }),
    []
  );

  // 🔄 Blue shape: starts on right → moves left on hover
  const blueShapeVariants = useMemo(
    () => ({
      initial: { x: 120, y: 80, rotate: 5 },
      hover: { x: -15, y: -7, rotate: 360 },
    }),
    []
  );

  return (
    <div className="max-w-6xl max-h-[470px] p-5 mb-10 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[1fr]">
      <LazyMotion features={domAnimation}>
        {features.map((feature, index) => {
          const isHovered = hoveredIndex === index;

          return (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="initial"
              whileHover="hover"
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="relative font-body flex flex-col justify-between overflow-hidden rounded-3xl text-left border-[2px] border-[#006173] px-9 py-12 bg-white cursor-pointer transition-transform duration-300"
            >
              {/* 🟦 Blue Animated Shape (Right → Left) */}
              <motion.div
                variants={blueShapeVariants}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="absolute bottom-4 right-1 w-28 h-36 
                           bg-[linear-gradient(167.16deg,_#A1FFEE_23.94%,_#00E5BC_100.74%)] 
                           rounded-xl flex items-center justify-center z-[1]"
              >
                <Image
                  src={feature.arrow}
                  alt="arrow"
                  className="w-15 h-10 select-none pointer-events-none"
                  height={80}
                  width={80}
                  loading="lazy"
                />
              </motion.div>

              {/* 📝 Text Content */}
              <div
                className={`
                  relative z-[2] flex flex-col justify-start h-full
                  transition-all duration-300
                  ${isHovered ? "-pr-12 max-w-[67%]" : "max-w-[90%]"}
                `}
              >
                {/* Title */}
                <motion.h3
                  animate={{
                    fontSize: isHovered ? "1.25rem" : "1.125rem",
                    transition: { duration: 0.2 },
                  }}
                  className="font-semibold text-black mb-2 leading-snug break-words"
                >
                  {feature.title}
                </motion.h3>

                {/* Description */}
                <motion.p
                  animate={{
                    fontSize: isHovered ? "0.95rem" : "0.875rem",
                    transition: { duration: 0.2 },
                  }}
                  className="text-gray-600 leading-snug break-words overflow-hidden"
                  style={{
                    overflow: "hidden",
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    wordBreak: "break-word",
                    whiteSpace: "normal",
                    textOverflow: "ellipsis",
                  }}
                >
                  {feature.description}
                </motion.p>
              </div>
            </motion.div>
          );
        })}
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
