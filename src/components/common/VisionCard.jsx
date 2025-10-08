"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import { memo } from "react";
import { cn } from "@/lib/utils";
import SuspenseWrapper from "./SuspenseWrapper";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay },
  }),
};

// ✅ Memoized for rerender performance
const VisionCardComponent = memo(function VisionCard({
  title = "Our Vision",
  quote = "To revolutionize inventory management through innovation and simplicity.",
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
        willChange: "transform",
      }}
    >
      <div className="container mx-auto max-w-5xl px-4">
        <LazyMotion features={domAnimation}>
          {/* Heading */}
          <m.h2
            id="vision-heading"
            className="mb-10 text-center font-heading text-3xl md:text-4xl font-semibold text-[#1E3653]"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={0.1}
            viewport={{ once: true, amount: 0.5 }}
          >
            {title}
          </m.h2>

          <div className="relative mx-auto w-full md:w-[80%]">
            {/* Bottom navy layer */}
            <m.div
              aria-hidden
              className={cn(
                "absolute -left-4 md:-left-8 bottom-[-20px] h-[90%] w-[97%] rounded-md",
                leftLayerClassName
              )}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={0.2}
              viewport={{ once: true }}
            />

            {/* Top teal layer */}
            <m.div
              aria-hidden
              className={cn(
                "absolute right-[-8px] -top-4 h-[90%] w-[97%] rounded-md",
                rightLayerClassName
              )}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={0.3}
              viewport={{ once: true }}
            />

            {/* Foreground quote card */}
            <m.blockquote
              className={cn(
                "relative z-10 rounded-md font-body bg-white px-8 py-10 md:px-12 md:py-14 border"
              )}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={0.4}
              viewport={{ once: true, amount: 0.4 }}
            >
              <p className="mx-auto text-center text-base md:text-lg leading-relaxed text-gray-600 italic">
                <span className="mr-2 text-2xl text-gray-400 align-top">“</span>
                {quote}
                <span className="ml-2 text-2xl text-gray-400 align-bottom">
                  ”
                </span>
              </p>
            </m.blockquote>
          </div>
        </LazyMotion>
      </div>
    </section>
  );
});

export default function VisionCard(props) {
  return (
    <SuspenseWrapper>
      <VisionCardComponent {...props} />
    </SuspenseWrapper>
  );
}
