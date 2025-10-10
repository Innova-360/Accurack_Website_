"use client";

import React, { useState, useMemo, memo } from "react";
import { LazyMotion, domAnimation, motion } from "framer-motion";
import Image from "next/image";
import SuspenseWrapper from "../common/SuspenseWrapper";

const FeatureCardGrid = memo(function FeatureCardGrid({ features = [] }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const cardsPerSlide = 2;
  const totalSlides = Math.ceil(features.length / cardsPerSlide);

  // Card hover animation
  const cardVariants = useMemo(
    () => ({
      initial: { scale: 1 },
      hover: { scale: 1.02 },
    }),
    []
  );  

  // Shape animation
  const blueShapeVariants = useMemo(
    () => ({
      initial: { x: 120, y: 80, rotate: 5 },
      hover: { x: -15, y: -7, rotate: 360 },
    }),
    []
  );

  // Slice features for slides
  const slides = [];
  for (let i = 0; i < features.length; i += cardsPerSlide) {
    slides.push(features.slice(i, i + cardsPerSlide));
  }

  return (
    <div className="w-full relative mb-10">
      {/* --- Desktop Grid --- */}
      <div className="hidden md:grid max-w-6xl mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[1fr] p-5">
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
                {/* 🟦 Blue Animated Shape */}
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

                {/* 📝 Text */}
                <div
                  className={`relative z-[2] flex flex-col justify-start h-full transition-all duration-300 ${
                    isHovered ? "-pr-12 max-w-[67%]" : "max-w-[90%]"
                  }`}
                >
                  <motion.h3
                    animate={{
                      fontSize: isHovered ? "1.25rem" : "1.125rem",
                      transition: { duration: 0.2 },
                    }}
                    className="font-semibold text-black mb-2 leading-snug break-words"
                  >
                    {feature.title}
                  </motion.h3>
                  <motion.p
                    animate={{
                      fontSize: isHovered ? "0.95rem" : "0.875rem",
                      transition: { duration: 0.2 },
                    }}
                    className="text-gray-600 leading-snug"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
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

      {/* --- Mobile Slider (sm) --- */}
      <div className="md:hidden overflow-hidden relative px-5">
        <motion.div
          className="flex"
          animate={{ x: `-${currentSlide * 100}%` }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{
            width: `${totalSlides * 100}%`,
          }}
        >
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              className="grid grid-rows-2 gap-4 w-full flex-shrink-0"
              style={{ width: "100%" }}
            >
              {slide.map((feature, index) => (
                <div
                  key={index}
                  className="relative font-body flex flex-col justify-between overflow-hidden rounded-3xl text-left border-[2px] border-[#006173] px-6 py-10 bg-white"
                >
                  <div className="absolute bottom-4 right-1 w-24 h-32 
                                  bg-[linear-gradient(167.16deg,_#A1FFEE_23.94%,_#00E5BC_100.74%)] 
                                  rounded-xl flex items-center justify-center z-[1]">
                    <Image
                      src={feature.arrow}
                      alt="arrow"
                      className="w-12 h-8 select-none pointer-events-none"
                      height={60}
                      width={60}
                      loading="lazy"
                    />
                  </div>

                  <div className="relative z-[2]">
                    <h3 className="font-semibold text-black text-lg mb-2 leading-snug">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-snug line-clamp-3">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </motion.div>

        {/* Slider Controls */}
        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === i ? "bg-teal-600" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>
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
