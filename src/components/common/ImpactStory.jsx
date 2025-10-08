"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SuspenseWrapper from "./SuspenseWrapper";

export default function ImpactStory(props) {
  const {
    bgImage,
    overlayColor = "bg-black/70",
    topIcon,
    heading,
    subText,
    beforeTitle,
    beforeText,
    afterTitle,
    afterText,
    sixMonthTitle,
    sixMonthText,
    outcomeTitle,
    outcomeText,
    bottomLeftLogo,
    bottomLeftText,
    bottomRightIcon,
    circleImage,
    sectionClass = "",
    headingClass = "",
    subTextClass = "",
    beforeClass = "",
    afterClass = "",
    sixMonthClass = "",
    outcomeClass = "",
    bottomRowClass = "",
    circleImageClass = "",
  } = props;

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.2, ease: "easeOut" },
    }),
  };

  return (
    <SuspenseWrapper>
      <section
        className={`relative w-full text-background overflow-hidden ${sectionClass}`}
      >
        {/* 🔹 Background Image + Overlay */}
        <div className="absolute inset-0">
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="absolute inset-0"
          >
            <Image
              src={bgImage}
              alt="background"
              fill
              loading="lazy"
              className="object-cover"
            />
            <div className={`absolute inset-0 ${overlayColor}`} />
          </motion.div>
        </div>

        {/* 🔹 Main Grid */}
        <div className="relative max-w-[1440px] mx-auto px-6 lg:px-16 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="flex flex-col mb-[300px] sm:mb-[350px] md:mb-[400px] lg:mb-0">
            {topIcon && (
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0}
              >
                <Image
                  src={topIcon}
                  alt="top icon"
                  width={32}
                  height={35}
                  loading="lazy"
                  className="mb-6"
                />
              </motion.div>
            )}

            {heading && (
              <motion.h2
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={1}
                className={`font-heading font-medium text-[28px] sm:text-[36px] lg:text-[48px] leading-[130%] tracking-[-0.02em] text-background max-w-[712px] mb-6 ${headingClass}`}
              >
                {heading}
              </motion.h2>
            )}

            {subText && (
              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={2}
                className={`font-body font-normal text-[16px] leading-[100%] text-light2/90 mb-8 ${subTextClass}`}
              >
                {subText}
              </motion.p>
            )}

            {/* Before */}
            {beforeTitle && (
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={3}
                className={beforeClass}
              >
                <h3 className="font-body font-semibold text-[18px] leading-[26px] text-background mb-2">
                  {beforeTitle}
                </h3>
                <p className="font-body font-normal text-[16px] leading-[100%] text-background/87 mb-6">
                  {beforeText}
                </p>
              </motion.div>
            )}

            {/* After */}
            {afterTitle && (
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={4}
                className={afterClass}
              >
                <h3 className="font-body font-semibold text-[18px] leading-[100%] text-background mb-2">
                  {afterTitle}
                </h3>
                <p className="font-body font-normal text-[16px] leading-[100%] text-background/87 mb-6">
                  {afterText}
                </p>
              </motion.div>
            )}

            {/* Six months */}
            {sixMonthTitle && (
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={5}
                className={sixMonthClass}
              >
                <h3 className="font-body font-semibold text-[18px] leading-[100%] text-background mb-2">
                  {sixMonthTitle}
                </h3>
                <p className="font-body font-normal text-[16px] leading-[100%] text-background/87 mb-6">
                  {sixMonthText}
                </p>
              </motion.div>
            )}

            {/* Outcome */}
            {outcomeTitle && (
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={6}
                className={outcomeClass}
              >
                <h3 className="font-body font-semibold text-[18px] leading-[100%] text-background mb-2">
                  {outcomeTitle}
                </h3>
                <p className="font-body font-normal text-[16px] leading-[100%] text-background/87 mb-8">
                  {outcomeText}
                </p>
              </motion.div>
            )}

            {/* Bottom row */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={7}
              className={`flex items-center justify-between ${bottomRowClass}`}
            >
              {bottomLeftLogo && (
                <div className="flex items-center gap-4">
                  <Image
                    src={bottomLeftLogo}
                    alt="logo"
                    width={54}
                    height={32}
                    loading="lazy"
                  />
                  <span className="font-body font-medium text-[18px] leading-[28px] text-background">
                    {bottomLeftText}
                  </span>
                </div>
              )}

              {bottomRightIcon && (
                <Image
                  src={bottomRightIcon}
                  alt="right icon"
                  width={32}
                  height={35}
                  loading="lazy"
                />
              )}
            </motion.div>
          </div>
        </div>

        {/* 🔹 Right Circular Image */}
        {props.circleImage && (
          <motion.div
            initial={{ opacity: 0, scale: 1.2 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className={`absolute right-0 bottom-0 z-10 translate-x-[10%] translate-y-[15%] w-[400px] h-[400px] lg:w-[660px] lg:h-[660px] overflow-hidden rounded-full ${circleImageClass}`}
          >
            <Image
              src={props.circleImage}
              alt="Impact Story"
              fill
              loading="lazy"
              className="object-cover"
            />
          </motion.div>
        )}
      </section>
    </SuspenseWrapper>
  );
}
