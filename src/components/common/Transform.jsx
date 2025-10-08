"use client";

import { useState, useCallback, memo } from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";
import Image from "next/image";
import Button from "../ui/Button/Button";

// ✅ Static animation configs (outside component)
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

// ✅ Memoized Button Wrapper to prevent unnecessary re-renders
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
      className={`transition-all duration-300 ease-in-out origin-left flex-shrink-0 flex items-center justify-center gap-[17px] h-[50px] px-[25px] rounded-[44px] border ${
        type === "demo"
          ? isHovered
            ? "scale-x-[1.12] border-[2px] border-gradient-primary-2 bg-background"
            : "border-[1.5px] border-border bg-background"
          : isHovered
          ? "scale-x-[1.12] border border-background bg-transparent"
          : "border border-background bg-transparent"
      }`}
    >
      <Button
        href={href}
        className={`flex items-center justify-center gap-[17px] transition-all duration-300 ease-in-out ${
          type === "demo" ? "!bg-background" : "!bg-transparent"
        }`}
      >
        <span
          className={`font-body font-bold text-[16px] leading-[100%] whitespace-nowrap transition-colors duration-300 ${
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
            className="w-[26px] h-[22px] bg-gradient-primary-2 mask-[url('/Images/Homeassests/Heroimage/Ariconre.png')] mask-no-repeat mask-contain"
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

      {/* Framer Motion Lazy Wrapper */}
      <LazyMotion features={domAnimation}>
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="w-full px-6 lg:px-20 py-16 flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          {/* Left Text */}
          <m.div
            variants={fadeInUp}
            custom={0.1}
            className="max-w-[744px] text-center lg:text-left"
          >
            <h2 className="font-heading font-medium text-[28px] leading-[36px] md:text-[36px] md:leading-[44px] lg:text-[48px] lg:leading-[60px] tracking-[-0.02em] text-background">
              Ready to Transform Your Inventory Management?
            </h2>
            <p className="font-text font-normal text-[16px] leading-[24px] text-background mt-4 max-w-[612px]">
              Join hundreds of businesses optimizing their operations with
              Accurack.
            </p>
          </m.div>

          {/* Right Buttons */}
          <m.div
            variants={fadeInUp}
            custom={0.3}
            className="flex flex-row items-center space-x-[28px] flex-shrink-0"
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
              label="EXPLORE FEATURES"
              href="/"
              hoveredBtn={hoveredBtn}
              setHoveredBtn={handleHover}
            />
          </m.div>
        </m.div>
      </LazyMotion>
    </section>
  );
}
