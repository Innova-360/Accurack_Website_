"use client";

import { motion } from "framer-motion";
import { Star, StarHalf } from "lucide-react";

export default function Ratings() {
  // Rating Stars Component
  const RatingStars = () => (
    <div className="flex gap-[2px] sm:gap-1 justify-center">
      {[...Array(4)].map((_, i) => (
        <Star
          key={i}
          className="text-[10px] sm:text-[14px] lg:text-[18px] text-primary fill-primary flex-shrink-0"
          size={18}
        />
      ))}
      <StarHalf
        className="text-[10px] sm:text-[14px] lg:text-[18px] text-primary fill-primary flex-shrink-0"
        size={18}
      />
    </div>
  );

  // Colored Icon with CSS mask
  const ColoredIcon = ({ src, alt }) => (
    <div
      className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 flex items-center justify-center bg-primary flex-shrink-0"
      style={{
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
  );

  // Section Block with animations
  const Item = ({ icon, title, rating, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
      className="flex flex-col items-center justify-center w-full"
    >
      {/* icon + title */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.4,
          delay: index * 0.1 + 0.2,
          ease: "easeOut",
        }}
        className="flex items-center gap-1 sm:gap-2"
      >
        {icon === "left" ? (
          <>
            <ColoredIcon src="/Images/Dropdownassests/Solutions/InventorySolutions/Get.png" alt={title} />
            <span className="text-[8px] sm:text-[10px] md:text-xs lg:text-sm font-semibold text-primary flex-shrink-0">
              {title}
            </span>
          </>
        ) : icon === "right" ? (
          <>
            <span className="text-[8px] sm:text-[10px] md:text-xs lg:text-sm font-semibold text-primary flex-shrink-0">
              {title}
            </span>
            <ColoredIcon src="/Images/Dropdownassests/Solutions/InventorySolutions/Msg.png" alt={title} />
          </>
        ) : (
          <ColoredIcon src={icon} alt={title} />
        )}
      </motion.div>

      {/* stars + reviews */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.4,
          delay: index * 0.1 + 0.3,
        }}
        className="mt-1 text-center"
      >
        <RatingStars />
        <p className="mt-1 text-[7px] sm:text-[9px] md:text-xs lg:text-sm font-medium text-primary">
          {rating}
        </p>
      </motion.div>
    </motion.div>
  );

  return (
    <section className="w-full bg-sectionBg py-6">
      <div className="max-w-[1440px] mx-auto px-2 sm:px-4 lg:px-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-4 gap-2 sm:gap-4 md:gap-6 items-center"
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
  );
}