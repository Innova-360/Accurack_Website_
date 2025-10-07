"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function VisionCard({
  title = "Our Vision",
  quote,
  className,
  bgImage = "/Images/AboutAssests/Team/visionBG.png",
  leftLayerClassName = "bg-[#1E3653]", // dark navy
  rightLayerClassName = "bg-[#0B6D7E]", // teal
}) {
  return (
    <section
      className={cn("relative overflow-hidden py-20 md:py-28", className)}
      aria-labelledby="vision-heading"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto max-w-5xl px-4">
        {/* Heading */}
        <motion.h2
          id="vision-heading"
          className="mb-10 text-center font-heading text-3xl md:text-4xl font-semibold text-[#1E3653]"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {title}
        </motion.h2>

        <div className="relative mx-auto w-full md:w-[80%]">
          {/* Bottom navy layer */}
          <motion.div
            aria-hidden
            className={cn(
              "absolute -left-4 md:-left-8 bottom-[-20px] h-[90%] w-[97%] rounded-md",
              leftLayerClassName
            )}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          />

          {/* Top teal layer */}
          <motion.div
            aria-hidden
            className={cn(
              "absolute right-[-8px] -top-4 h-[90%] w-[97%] rounded-md",
              rightLayerClassName
            )}
            initial={{ opacity: 0, y: -16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          />

          {/* Foreground quote card */}
          <motion.blockquote
            className={cn(
              "relative z-10 rounded-md font-body bg-white px-8 py-10 md:px-12 md:py-14 border"
            )}
            initial={{ opacity: 0, scale: 0.98, y: 12 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          >
            <p className="mx-auto text-center text-base md:text-lg leading-relaxed text-gray-600 italic">
              <span className="mr-2 text-2xl text-gray-400 align-top">“</span>
              {quote}
              <span className="ml-2 text-2xl text-gray-400 align-bottom">”</span>
            </p>
          </motion.blockquote>
        </div>
      </div>
    </section>
  );
}

export default VisionCard;
