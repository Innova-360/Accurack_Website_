"use client";

import React, { useState, useMemo, memo, useRef, useEffect } from "react";
import { LazyMotion, domAnimation, motion } from "framer-motion";
import Image from "next/image";

export const FeatureCardGrid = memo(function FeatureCardGrid({
  features = [],
}) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

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
      hover: { x: -7, y: -1, rotate: 360 },
    }),
    []
  );

  const handleDragEnd = (event, info) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    if (offset > 50 || velocity > 500) {
      setCurrentSlide((prev) => Math.max(0, prev - 1));
    } else if (offset < -50 || velocity < -500) {
      setCurrentSlide((prev) => Math.min(features.length - 1, prev + 1));
    }
  };

  return (
    <div className="w-full mx-auto mb-10">
      {/* Mobile Slider (sm screens) */}
      <div className="block md:hidden w-full px-5">
        <div className="overflow-hidden w-full" ref={sliderRef}>
          <LazyMotion features={domAnimation}>
            <motion.div
              className="flex"
              drag="x"
              dragConstraints={sliderRef}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              animate={{
                x: `calc(-${currentSlide * 92}% - ${currentSlide * 1}px)`,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
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
                    className="relative font-body flex flex-col justify-between overflow-hidden rounded-3xl text-left border-[2px] border-[#006173] px-6 py-8 bg-white cursor-grab active:cursor-grabbing transition-transform duration-300 h-[180px] lg:h-[280px] flex-shrink-0"
                    style={{
                      width: "calc(100% - 40px)",
                      marginRight: index < features.length - 1 ? "16px" : "0",
                    }}
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
                        src={"/Images/Homeassests/Heroimage/Ariconre.png"}
                        width={70}
                        height={100}
                        alt="Air Icon"
                        className="object-contain"
                      />
                    </motion.div>

                    {/* 📝 Text Content */}
                    <div
                      className={`
                        relative z-[2] flex flex-col justify-start h-full
                        transition-all duration-300
                        ${isHovered ? "max-w-[60%]" : "max-w-[85%]"}
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
            </motion.div>
          </LazyMotion>
        </div>

        {/* Slider Indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentSlide === index ? "bg-[#006173] w-6" : "bg-gray-300 w-2"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Grid Layout (md and lg screens) */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[1fr] max-w-6xl mx-auto px-5">
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
                className="relative font-body flex flex-col justify-between overflow-hidden rounded-3xl text-left border-[2px] border-[#006173] px-9 py-12 bg-white cursor-pointer h-[200px] transition-transform duration-300"
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
                    src={"/Images/Homeassests/Heroimage/Ariconre.png"}
                    width={70}
                    height={100}
                    alt="Air Icon"
                    className="object-contain"
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
    </div>
  );
});
