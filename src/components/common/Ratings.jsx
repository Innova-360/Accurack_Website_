"use client";

import { memo, useMemo } from "react";
import { motion, LazyMotion, domAnimation } from "framer-motion";
import { Star, StarHalf } from "lucide-react";

function Ratings({ theme = "light" }) {
  const isDark = theme === "dark";

  // ✅ useMemo to avoid recalculating colors every render
  const colors = useMemo(
    () => ({
      primary: isDark ? "#ffffff" : "#00b6bc",
      bg: isDark ? "#0a0a0a" : "#f8fafc",
      text: isDark ? "#e5e7eb" : "#1e293b",
    }),
    [isDark]
  );

  const RatingStars = memo(() => (
    <div className="flex gap-[2px] sm:gap-1 justify-center">
      {[...Array(4)].map((_, i) => (
        <Star
          key={i}
          size={18}
          className="text-[10px] sm:text-[14px] lg:text-[18px] flex-shrink-0"
          style={{ color: colors.primary, fill: colors.primary }}
        />
      ))}
      <StarHalf
        size={18}
        className="text-[10px] sm:text-[14px] lg:text-[18px] flex-shrink-0"
        style={{ color: colors.primary, fill: colors.primary }}
      />
    </div>
  ));

  const ColoredIcon = memo(({ src, alt }) => (
    <div
      className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 flex items-center justify-center flex-shrink-0"
      style={{
        backgroundColor: colors.primary,
        WebkitMaskImage: `url(${src})`,
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        WebkitMaskSize: "contain",
        maskImage: `url(${src})`,
        maskRepeat: "no-repeat",
        maskPosition: "center",
        maskSize: "contain",
      }}
      aria-label={alt}
    />
  ));

  const Item = memo(({ icon, title, rating, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.45,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      whileHover={{
        scale: 1.04,
        transition: { duration: 0.2 },
      }}
      className="flex flex-col items-center justify-center w-full"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.4,
          delay: index * 0.1 + 0.1,
          ease: "easeOut",
        }}
        className="flex items-center gap-2 sm:gap-3 md:gap-4"
      >
        {icon === "left" ? (
          <>
            <ColoredIcon
              src="/Images/Dropdownassests/Solutions/InventorySolutions/Get.png"
              alt={title}
            />
            <span
              className="text-[10px] sm:text-xs md:text-sm lg:text-base font-semibold flex-shrink-0"
              style={{ color: colors.text }}
            >
              {title}
            </span>
          </>
        ) : icon === "right" ? (
          <>
            <span
              className="text-[10px] sm:text-xs md:text-sm lg:text-base font-semibold flex-shrink-0"
              style={{ color: colors.text }}
            >
              {title}
            </span>
            <ColoredIcon
              src="/Images/Dropdownassests/Solutions/InventorySolutions/Msg.png"
              alt={title}
            />
          </>
        ) : (
          <ColoredIcon src={icon} alt={title} />
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.4,
          delay: index * 0.1 + 0.25,
        }}
        className="mt-2 text-center"
      >
        <RatingStars />
        <p
          className="mt-1 text-[9px] sm:text-xs md:text-sm lg:text-base font-medium"
          style={{ color: colors.text }}
        >
          {rating}
        </p>
      </motion.div>
    </motion.div>
  ));

  return (
    <LazyMotion features={domAnimation}>
      <section
        className="w-full py-10 transition-colors duration-300"
        style={{ backgroundColor: colors.bg }}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 items-center justify-items-center"
          >
            <Item icon="left" title="GetApp" rating="4.2 (940 reviews)" index={0} />
            <Item icon="right" title="Software Advice" rating="4.2 (941 reviews)" index={1} />
            <Item
              icon="/Images/Dropdownassests/Solutions/InventorySolutions/Arrow.png"
              title="Capterra"
              rating="4.0 (246 reviews)"
              index={2}
            />
            <Item
              icon="/Images/Dropdownassests/Solutions/InventorySolutions/Next.PNG"
              title="G2"
              rating="4.2 (941 reviews)"
              index={3}
            />
          </motion.div>
        </div>
      </section>
    </LazyMotion>
  );
}

export default memo(Ratings);
