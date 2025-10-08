"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  PanInfo,
} from "framer-motion";
import { cn } from "@/lib/utils";

export function ScrollStickyShowcase({ items = [], className }) {
  const [active, setActive] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileSlide, setMobileSlide] = useState(0);
  const sectionRefs = useRef([]);
  const dragX = useMotionValue(0);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Desktop intersection observer
  useEffect(() => {
    if (isMobile) return; // Skip for mobile

    sectionRefs.current = sectionRefs.current.slice(0, items.length);
    const sections = sectionRefs.current.filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0)
          )[0];
        if (visible) {
          const idx = Number(visible.target.getAttribute("data-index") || 0);
          setActive(idx);
        }
      },
      {
        root: null,
        rootMargin: "-30% 0% -40% 0%",
        threshold: [0, 0.2, 0.33, 0.5, 0.66, 0.8, 1.0],
      }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items.length, isMobile]);

  const current = useMemo(() => items[active] ?? items[0], [items, active]);
  const currentMobile = useMemo(
    () => items[mobileSlide] ?? items[0],
    [items, mobileSlide]
  );

  if (!items || items.length === 0) {
    return null;
  }

  // Handle drag end for mobile swipe
  const handleDragEnd = (event, info) => {
    const threshold = 50;
    if (info.offset.x > threshold && mobileSlide > 0) {
      setMobileSlide(mobileSlide - 1);
    } else if (info.offset.x < -threshold && mobileSlide < items.length - 1) {
      setMobileSlide(mobileSlide + 1);
    }
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.35,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.05,
      },
    },
  };

  const bulletVariants = {
    hidden: { opacity: 0, x: -15 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.15 + i * 0.05,
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  const mediaVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      y: 20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.08,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: -20,
      transition: {
        duration: 0.25,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  // MOBILE VERSION - Slider
  if (isMobile) {
    return (
      <section
        className={cn("relative w-full px-4 py-12 overflow-visible", className)}
      >
        <div className="max-w-md mx-auto overflow-visible">
          {/* Slider content */}
          <div className="relative overflow-visible">
            <AnimatePresence mode="wait" custom={mobileSlide}>
              <motion.div
                key={mobileSlide}
                custom={mobileSlide}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
                className="cursor-grab active:cursor-grabbing"
              >
                {/* Slide heading */}
                <h3 className="text-xl font-bold font-heading text-gray-900 mb-3">
                  {currentMobile.heading}
                </h3>

                {/* Slide description */}
                <p className="text-sm text-gray-600 font-body mb-6 leading-relaxed">
                  {currentMobile.description}
                </p>

                {/* Bullets with icons */}
                {currentMobile.bullets?.length > 0 && (
                  <div className="space-y-4 mb-8">
                    {currentMobile.bullets.map((bullet, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + idx * 0.08 }}
                        className="flex items-start gap-3 font-body"
                      >
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-50 flex items-center justify-center">
                          <div className="w-5 h-5 rounded-full bg-cyan-500" />
                        </div>
                        <div className="flex-1 pt-2">
                          <p className="text-sm text-gray-700 font-body leading-relaxed">
                            {bullet}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* Image with shape */}
                <div className="relative flex items-center justify-center">
                  {/* Decorative Shape (background) */}
                  {currentMobile.shapeImageSrc ? (
                    <motion.img
                      src={currentMobile.shapeImageSrc}
                      alt=""
                      className="
        absolute
        right-[-5%]
        top-1/2
        -translate-y-1/2
        w-[75vw] sm:w-[30vw] md:w-[380px] lg:w-[420px]
        aspect-square
        -z-10
        opacity-90
        object-contain
      "
                      animate={{
                        scale: [1, 1.05, 1],
                        rotate: [0, 4, -4, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                      }}
                    />
                  ) : (
                    <motion.div
                      className="
        absolute
        right-[-5%]
        top-1/2
        -translate-y-1/2
        w-[75vw] sm:w-[50vw] md:w-[380px] lg:w-[420px]
        aspect-square
        rounded-[2rem]
        -z-10
      "
                      animate={{
                        backgroundColor: currentMobile.shapeColor || "#00b6bc",
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        backgroundColor: { duration: 0.5 },
                        scale: {
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "reverse",
                          ease: "easeInOut",
                        },
                      }}
                    />
                  )}

                  {/* Foreground Image or Video */}
                  <motion.div
                    className="
      relative
      w-[60vw] sm:w-[40vw] md:w-[300px] lg:w-[340px]
      aspect-[4/3]
      rounded-2xl
      overflow-hidden
      shadow-xl
      bg-white
      translate-x-[-8%] sm:translate-x-[-10%]
    "
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    {currentMobile.mediaType === "video" ? (
                      <video
                        src={currentMobile.mediaSrc}
                        className="w-full h-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                      />
                    ) : (
                      <img
                        src={
                          currentMobile.mediaSrc || "/api/placeholder/400/300"
                        }
                        alt={currentMobile.mediaAlt}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {items.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setMobileSlide(idx)}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  idx === mobileSlide ? "w-8 bg-gray-800" : "w-2 bg-gray-300"
                )}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  // DESKTOP VERSION - Sticky Scroll
  return (
    <section
      className={cn(
        "relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-20 ",
        className
      )}
    >
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 ">
        {/* LEFT: Scrolling text content */}
        <div className="flex flex-col lg:gap-15 md:gap-0">
          {items.map((item, i) => (
            <motion.article
              key={item.id}
              ref={(el) => (sectionRefs.current[i] = el)}
              data-index={i}
              className={cn(
                "py-12 md:py-20 lg:py-24 transition-opacity duration-300",
                i === active ? "opacity-100" : "opacity-40"
              )}
              aria-current={i === active ? "true" : undefined}
              initial="hidden"
              animate={i === active ? "visible" : "hidden"}
              variants={textVariants}
            >
              <motion.header
                className="mb-4 font-heading"
                variants={textVariants}
              >
                <motion.h3
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900"
                  variants={textVariants}
                >
                  {item.heading}
                </motion.h3>
              </motion.header>

              <motion.p
                className="text-gray-600 text-base font-body sm:text-lg leading-relaxed mb-4"
                variants={textVariants}
              >
                {item.description}
              </motion.p>

              {item.bullets?.length ? (
                <motion.ul className="mt-6 font-body space-y-3 text-sm sm:text-base">
                  {item.bullets.map((b, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-start gap-3 text-gray-700 leading-relaxed"
                      custom={idx}
                      variants={bulletVariants}
                      initial="hidden"
                      animate={i === active ? "visible" : "hidden"}
                    >
                      <span className="text-cyan-600 font-bold mt-1">•</span>
                      <span>{b}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              ) : null}
            </motion.article>
          ))}
        </div>

        {/* RIGHT: Sticky media - DESKTOP */}
        <div className="relative">
          <div className="sticky top-40 h-[60vh] flex items-center justify-center">
            <div className="relative w-full max-w-lg">
              {/* Decorative shape */}
              {current.shapeImageSrc ? (
                <motion.img
                  src={current.shapeImageSrc}
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-24 top-2/4 -translate-y-1/2 w-[32rem] h-[32rem] lg:w-[36rem] lg:h-[36rem] select-none opacity-70"
                  animate={{
                    scale: [1, 1.05, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                />
              ) : (
                current.shapeColor && (
                  <motion.div
                    aria-hidden
                    className="relative z-9000 -right-24 top-1/2 -translate-y-1/2 w-[32rem] h-[32rem] lg:w-[36rem] lg:h-[36rem] rounded-[5rem] opacity-25"
                    animate={{
                      backgroundColor: current.shapeColor,
                      scale: [1, 1.05, 1],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      backgroundColor: { duration: 0.6 },
                      scale: {
                        duration: 2.5,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                      },
                      rotate: {
                        duration: 2.5,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                      },
                    }}
                  />
                )
              )}

              {/* Media container */}
              <div className="relative aspect-[16/10] w-full rounded-2xl bg-white shadow-2xl overflow-hidden">
                <AnimatePresence mode="wait">
                  {current.mediaType === "video" ? (
                    <motion.video
                      key={`video-${current.mediaSrc}-${active}`}
                      src={current.mediaSrc}
                      className="h-full w-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                      aria-label={current.mediaAlt}
                      variants={mediaVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    />
                  ) : (
                    <motion.img
                      key={`image-${current.mediaSrc}-${active}`}
                      src={current.mediaSrc || "/api/placeholder/800/500"}
                      alt={current.mediaAlt}
                      className="h-full w-full object-cover"
                      variants={mediaVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    />
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}