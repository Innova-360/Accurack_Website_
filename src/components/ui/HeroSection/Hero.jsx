"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SuspenseWrapper from "@/components/common/SuspenseWrapper"; // ⬅ adjust import path if needed
import Button from "@/components/ui/Button/Button";


function HeroContent({
  badgeText,
  heading,
  description,
  primaryBtnText,
  primaryBtnLink,
  secondaryBtnText,
  secondaryBtnLink,
  imageSrc,
  imageAlt,
  bgColor,
  textColor,
  descColor,
  badgeColor,
  headingSize,
  descSize,
  containerPadding,
  reverse,
}) {
  return (
    <section className={`w-full mt-16 lg:mt-36 mb-10 ${bgColor || ""}`}>
      <div
        className={`max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center 
          ${containerPadding || ""} 
          ${
            reverse
              ? "lg:flex-row-reverse flex flex-col-reverse lg:flex-row"
              : ""
          }`}
      >
        {/* Left Side */}
        <div className="flex flex-col justify-center text-center lg:text-left lg:items-start items-center">
          {/* Badge */}
          {badgeText && (
            <motion.span
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className={`inline-block rounded-md border -mt-6 px-4 py-1 mb-3 font-heading text-[16px] font-medium 
              ${badgeColor || ""}`}
            >
              {badgeText}
            </motion.span>
          )}

          {/* Heading */}
          {heading && (
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className={`font-title font-bold lg:mb-12 tracking-wider max-w-[663px] 
              ${textColor || ""} ${headingSize || ""}`}
            >
              {heading}
            </motion.h1>
          )}

          {/* Description */}
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className={`mt-6 max-w-[530px] -lg:mt-10 font-body font-normal 
              ${descSize || ""} ${descColor || ""}`}
            >
              {description}
            </motion.p>
          )}

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start items-center"
          >
            {/* Primary Button */}
            {primaryBtnText && (
              <Button
                href={primaryBtnLink}
                className="group relative w-[180px] sm:w-[193px] h-[48px] sm:h-[51px] px-[20px] py-[12px] rounded-[44px] 
                           font-body font-bold text-[15px] sm:text-[16px] text-white
                           bg-gradient-to-r from-cyan-400 to-teal-600
                           flex items-center justify-center overflow-hidden
                           hover:shadow-lg transition-shadow duration-300"
              >
                {/* Button Text */}
                <span
                  className={`mr-7
        ${
          primaryBtnText.length > 16
            ? "mr-10 sm:mr-12" // extra gap only for responsive (mobile/tablet)
            : "lg:transition-transform lg:duration-700 lg:ease-in-out lg:group-hover:translate-x-6"
        }`}
                >
                  {primaryBtnText}
                </span>

                {/* Arrow container */}
                <span
                  className="absolute right-[10px] top-1/2 -translate-y-1/2 flex items-center justify-center 
                             w-[40px] sm:w-[44px] h-[40px] sm:h-[44px] rounded-full bg-white
                             lg:transition-all lg:duration-700 lg:ease-in-out 
                             lg:group-hover:-translate-x-[130px] lg:group-hover:rotate-180"
                >
                  {/* Mobile Arrow */}
                  <span className="block lg:hidden w-[22px] sm:w-[26px] h-[20px] sm:h-[24px] bg-[url('/Images/Navassests/ReArrowRight.png')] bg-no-repeat bg-center"></span>

                  {/* Desktop Arrow */}
                  <span className="hidden lg:block w-[22px] sm:w-[26px] h-[20px] sm:h-[24px] bg-[url('/Images/Navassests/ReArrow.png')] bg-no-repeat bg-center"></span>
                </span>
              </Button>
            )}

            {/* Secondary Button */}
            {secondaryBtnText && (
              <Button
                href={secondaryBtnLink}
                className="w-[180px] sm:w-[193px] h-[48px] sm:h-[51px] px-[20px] py-[12px] rounded-[44px] 
                           font-body font-bold text-[15px] sm:text-[16px] text-teal-600
                           border border-teal-600 bg-white flex items-center justify-center
                           hover:bg-teal-50 transition-colors duration-300"
              >
                {secondaryBtnText}
              </Button>
            )}
          </motion.div>
        </div>

        {/* Right Side Image */}
        {imageSrc && (
          <motion.div
            initial={{ opacity: 0, x: reverse ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative flex justify-center items-center h-full"
          >
            <div className="relative w-full max-w-[700px]">
              {/* Decorative borders */}
              <motion.div
                initial={{ opacity: 0, rotate: 0, scale: 0.9 }}
                animate={{ opacity: 1, rotate: 4, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute inset-0 rounded-[30px] sm:rounded-[42px] border-[3px] border-teal-400 z-0"
              />
              <motion.div
                initial={{ opacity: 0, rotate: 0, scale: 0.9 }}
                animate={{ opacity: 0.6, rotate: 7, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute inset-0 rounded-[30px] sm:rounded-[42px] border-[2px] border-teal-400 z-0"
              />
              <motion.div
                initial={{ opacity: 0, rotate: 0, scale: 0.9 }}
                animate={{ opacity: 0.3, rotate: 10, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute inset-0 rounded-[30px] sm:rounded-[42px] border-[2px] border-teal-400 z-0"
              />

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <Image
                  width={709}
                  height={473}
                  loading="lazy"
                  src={imageSrc || "/api/placeholder/709/473"}
                  alt={imageAlt}
                  className="relative w-full h-auto object-cover rounded-[30px] sm:rounded-[42px] border-[4px] sm:border-[5px] border-teal-700 z-10"
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default function Hero(props) {
  return (
    <SuspenseWrapper>
      <HeroContent {...props} />
    </SuspenseWrapper>
  );
}
