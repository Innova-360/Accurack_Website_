"use client";

import { useState, useCallback, memo } from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";
import Image from "next/image";
import Button from "@/components/ui/Button/Button";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", delay },
  }),
};

const hoverSpring = {
  type: "spring",
  stiffness: 250,
  damping: 15,
};

const MotionButton = memo(function MotionButton({
  type,
  hoveredBtn,
  setHoveredBtn,
  label,
  href,
}) {
  const isHovered = hoveredBtn === type;

  return (
    <m.div
      whileHover={{ scale: 1.05 }}
      transition={hoverSpring}
      onMouseEnter={() => setHoveredBtn(type)}
      onMouseLeave={() => setHoveredBtn(null)}
      className={`transition-all duration-300 ease-in-out origin-left flex-shrink-0 flex items-center justify-center gap-[12px] sm:gap-[17px] h-[44px] sm:h-[50px] px-[18px] sm:px-[25px] rounded-[44px] border ${
        type === "demo"
          ? isHovered
            ? "scale-x-[1.08] border-[2px] border-gradient-primary-2 bg-background"
            : "border-[1.5px] border-border bg-background"
          : isHovered
          ? "scale-x-[1.08] border border-background bg-transparent"
          : "border border-background bg-transparent"
      }`}
    >
      <Button
        href={href}
        className={`flex items-center justify-center gap-[12px] sm:gap-[17px] transition-all duration-300 ease-in-out ${
          type === "demo" ? "!bg-background" : "!bg-transparent"
        }`}
      >
        <span
          className={`font-body font-bold text-[14px] sm:text-[16px] leading-[100%] whitespace-nowrap transition-colors duration-300 ${
            type === "demo"
              ? isHovered
                ? "text-gradient-primary-2"
                : "text-bgpic"
              : "text-background"
          }`}
        >
          {label}
        </span>

        {isHovered && (
          <m.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.25 }}
            className="w-[20px] sm:w-[26px] h-[18px] sm:h-[22px] bg-gradient-primary-2 mask-[url('/Images/Homeassests/Heroimage/Ariconre.png')] mask-no-repeat mask-contain"
          />
        )}
      </Button>
    </m.div>
  );
});

export default function TransformSection() {
  const [hoveredBtn, setHoveredBtn] = useState(null);
  const handleHover = useCallback(setHoveredBtn, []);

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/Images/Dropdownassests/Solutions/InventorySolutions/Transform.png"
          alt="Background"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-bgpic opacity-95"></div>
      </div>

      <LazyMotion features={domAnimation}>
        <div className="w-full flex justify-center">
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="w-full max-w-[1500px] px-4 sm:px-8 lg:px-20 py-12 sm:py-16 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-10 lg:gap-8 text-center lg:text-left"
        >
          {/* Left Text */}
          <m.div
            variants={fadeInUp}
            custom={0.1}
            className="max-w-[744px] flex flex-col items-center lg:items-start"
          >
            <h2 className="font-heading font-semibold text-[22px] sm:text-[32px] md:text-[40px] lg:text-[48px] leading-[110%] text-background tracking-[-0.02em]">
              Ready to Transform Your Inventory Management?
            </h2>
            <p className="font-text font-normal text-[14px] sm:text-[16px] leading-[22px] sm:leading-[26px] text-background mt-3 sm:mt-4 max-w-[600px]">
              Join hundreds of businesses optimizing their operations with
              Accurack.
            </p>
          </m.div>

          {/* Right Buttons */}
          <m.div
            variants={fadeInUp}
            custom={0.3}
            className="flex flex-col sm:flex-row items-center justify-center sm:space-x-[18px] lg:space-x-[28px] gap-3 sm:gap-0"
          >
            <MotionButton
              type="demo"
              label="Request a Quote"
              href="/"
              hoveredBtn={hoveredBtn}
              setHoveredBtn={handleHover}
            />
            <MotionButton
              type="features"
              label="Explore Features"
              href="/"
              hoveredBtn={hoveredBtn}
              setHoveredBtn={handleHover}
            />
          </m.div>
        </m.div>
        </div>
      </LazyMotion>
    </section>
  );
}
