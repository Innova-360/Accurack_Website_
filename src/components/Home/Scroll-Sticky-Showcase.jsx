"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "framer-motion";
import Image from "next/image";

export function ScrollStickyShowcase({ items = [], className }) {
  const [active, setActive] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileSlide, setMobileSlide] = useState(0);
  const sectionRefs = useRef([]);
  const dragX = useMotionValue(0);

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Intersection Observer for desktop scroll sync
  useEffect(() => {
    if (isMobile) return;

    sectionRefs.current = sectionRefs.current.slice(0, items.length);
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
        rootMargin: "-20% 0% -30% 0%",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    sectionRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [items.length, isMobile]);

  const current = useMemo(() => items[active] ?? items[0], [items, active]);
  const currentMobile = useMemo(
    () => items[mobileSlide] ?? items[0],
    [items, mobileSlide]
  );

  if (!items || items.length === 0) return null;

  // Mobile swipe logic
  const handleDragEnd = (_, info) => {
    const threshold = 50;
    if (info.offset.x > threshold && mobileSlide > 0) {
      setMobileSlide(mobileSlide - 1);
    } else if (info.offset.x < -threshold && mobileSlide < items.length - 1) {
      setMobileSlide(mobileSlide + 1);
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, ease: "easeOut", delay: 0.05 },
    },
  };

  const bulletVariants = {
    hidden: { opacity: 0, x: -15 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: 0.1 + i * 0.05, duration: 0.3, ease: "easeOut" },
    }),
  };

  const mediaVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut", delay: 0.08 },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: -20,
      transition: { duration: 0.25, ease: "easeOut" },
    },
  };

  // MOBILE VERSION
  if (isMobile) {
    return (
      <section
        className={`relative w-full px-4 py-12 overflow-visible ${
          className || ""
        }`}
      >
        <div className="max-w-md mx-auto overflow-visible">
          <div className="relative overflow-visible">
            <AnimatePresence mode="wait" custom={mobileSlide}>
              <motion.div
                key={mobileSlide}
                custom={mobileSlide}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.4 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
              >
                {/* Parallax Heading Badge */}
                <motion.div
                  className="inline-flex justify-center items-center px-4 py-2 rounded-full mb-4 bg-transparent"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <span
                    className="font-semibold  text-3xl text-center tracking-wide"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(28, 159, 133, 0.70) 0%, rgba(28, 159, 133, 0.00) 100%)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {currentMobile.heading}
                  </span>
                </motion.div>

                <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">
                  {currentMobile.subheading || currentMobile.heading}
                </h3>
                <p className="text-sm font-body text-gray-600 mb-6 leading-relaxed">
                  {currentMobile.description}
                </p>

                {currentMobile.bullets?.length > 0 && (
                  <div className="space-y-4 mb-8">
                    {currentMobile.bullets.map((bullet, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + idx * 0.08 }}
                        className="flex items-start gap-3"
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

                <div className="relative flex items-center justify-center">
                  {currentMobile.shapeImageSrc ? (
                    <motion.img
                      src={currentMobile.shapeImageSrc}
                      alt=""
                      className="absolute right-[-5%] top-1/2 -translate-y-1/2 w-[75vw] sm:w-[50vw] -z-10 opacity-90"
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
                  ) : null}

                  <motion.div
                    className="relative w-[80vw] border sm:w-[60vw] aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-white"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    {currentMobile.mediaType === "video" ? (
                      <video
                        src={currentMobile.mediaSrc}
                        className="w-full border h-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                      />
                    ) : (
                      <Image
                        key={currentMobile.mediaSrc}
                        width={300}
                        height={400}
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

          {/* dots */}
          <div className="flex justify-center gap-2 mt-8">
            {items.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setMobileSlide(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === mobileSlide ? "w-8 bg-gray-800" : "w-2 bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  // DESKTOP VERSION (Sticky) - FIXED
  return (
    <section
      className={`relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 ${
        className || ""
      }`}
    >
      <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
        {/* LEFT side text - SCROLLABLE */}
        <div className="flex flex-col space-y-20 py-20">
          {items.map((item, i) => (
            <motion.article
              key={item.id}
              ref={(el) => (sectionRefs.current[i] = el)}
              data-index={i}
              className={`min-h-[60vh] w-full transition-opacity duration-500 ${
                i === active ? "opacity-100" : "opacity-30"
              }`}
              initial="hidden"
              animate={i === active ? "visible" : "hidden"}
              variants={textVariants}
            >
              {/* Parallax Heading Badge */}
              <motion.div
                className="w-[60vw] h-[20vh] inline-flex items-center justify-start bg-transparent mb-6"
                style={{
                  y: i === active ? 0 : 50,
                }}
                animate={{
                  y: i === active ? [50, 0] : 50,
                }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                }}
              >
                <span
                  className="text-7xl font-semibold tracking-wide"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(28, 159, 133, 0.70) 0%, rgba(28, 159, 133, 0.00) 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {item.heading}
                </span>
              </motion.div>

              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {item.subheading || item.heading}
              </h3>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                {item.description}
              </p>
              {item.bullets?.length && (
                <motion.ul className="space-y-4 text-gray-700">
                  {item.bullets.map((b, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-start gap-3"
                      custom={idx}
                      variants={bulletVariants}
                      initial="hidden"
                      animate={i === active ? "visible" : "hidden"}
                    >
                      <span className="text-cyan-600 font-bold text-xl mt-1">
                        •
                      </span>
                      <span className="text-base">{b}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </motion.article>
          ))}
        </div>

        {/* RIGHT side sticky media - FIXED STICKY */}
        <div className="relative sm:h-32 lg:h-full">
          <div className="sticky top-32 flex items-center justify-center w-full py-20">
            <div className="relative w-full max-w-lg overflow-visible">
              {/* Decorative Shape - Always visible behind */}
              <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[32rem] h-[32rem] pointer-events-none">
                <AnimatePresence mode="sync">
                  {current.shapeImageSrc ? (
                    <motion.img
                      key={`shape-${current.shapeImageSrc}`}
                      src={current.shapeImageSrc}
                      alt=""
                      className="absolute inset-0 w-full h-full object-contain opacity-70"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{
                        opacity: 0.7,
                        scale: [1, 1.05, 1],
                        rotate: [0, 3, -3, 0],
                      }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{
                        opacity: { duration: 0.4 },
                        scale: {
                          duration: 3,
                          repeat: Infinity,
                          repeatType: "reverse",
                          ease: "easeInOut",
                        },
                        rotate: {
                          duration: 3,
                          repeat: Infinity,
                          repeatType: "reverse",
                          ease: "easeInOut",
                        },
                      }}
                    />
                  ) : (
                    current.shapeColor && (
                      <motion.div
                        key={`color-${current.shapeColor}`}
                        className="absolute inset-0 w-full h-full rounded-[5rem]"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{
                          opacity: 0.3,
                          backgroundColor: current.shapeColor,
                          scale: [1, 1.05, 1],
                          rotate: [0, 3, -3, 0],
                        }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{
                          opacity: { duration: 0.4 },
                          backgroundColor: { duration: 0.5 },
                          scale: {
                            duration: 3,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut",
                          },
                          rotate: {
                            duration: 3,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut",
                          },
                        }}
                      />
                    )
                  )}
                </AnimatePresence>
              </div>

              {/* Foreground Image / Video */}
              <div className="relative aspect-[16/10] w-full rounded-2xl bg-white shadow-2xl overflow-hidden z-10">
                <AnimatePresence mode="wait">
                  {current.mediaType === "video" ? (
                    <motion.video
                      key={`video-${active}`}
                      src={current.mediaSrc}
                      className="h-full w-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                      variants={mediaVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    />
                  ) : (
                    <motion.img
                      key={`image-${active}`}
                      src={current.mediaSrc}
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
