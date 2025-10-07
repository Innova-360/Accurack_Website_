"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

// --- ICONS ---
export const TrophyIcon = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path
      fill="currentColor"
      d="M6 3a1 1 0 0 0-1 1v2a4 4 0 0 0 3 3.874V11a4 4 0 0 0 3 3.874V17H8a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-3v-2.126A4.002 4.002 0 0 0 16 11V9.874A4.002 4.002 0 0 0 19 6V4a1 1 0 0 0-1-1H6Zm1 3V5h1v1a2 2 0 0 1-1 0Zm10 0a2 2 0 0 1-1 0V5h1v1Z"
    />
  </svg>
);

export const GearIcon = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path
      fill="currentColor"
      d="M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm8.94 3.06a8.087 8.087 0 0 0-.7-1.69l1.49-1.49-2.12-2.12-1.49 1.49a8.087 8.087 0 0 0-1.69-.7L15.5 2h-3l-.23 2.53c-.59.14-1.15.35-1.69.62L8.1 3.66 5.98 5.78l1.49 1.49c-.27.54-.48 1.1-.62 1.69L4.32 9.7v3l2.53.23c.14.59.35 1.15.62 1.69l.23 2.53h3l.23-2.53c.59-.14 1.15-.35 1.69-.62l1.49-1.49 2.12 2.12-1.49 1.49c.27.54.48 1.1.62 1.69l2.53-.23v-3l-2.53-.23Z"
    />
  </svg>
);

export const ShieldIcon = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path
      fill="currentColor"
      d="M12 2 4 5v6c0 5.25 3.4 9.86 8 11 4.6-1.14 8-5.75 8-11V5l-8-3Zm0 18.1c-3.03-1.01-5.5-4.2-5.5-7.75V6.87L12 5l5.5 1.87v5.48c0 3.55-2.47 6.74-5.5 7.75Z"
    />
    <path fill="currentColor" d="M11 14h2v2h-2v-2Zm0-6h2v5h-2V8Z" />
  </svg>
);

export const BoxIcon = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path
      fill="currentColor"
      d="M21 8.5 12 13 3 8.5l9-4.5 9 4.5ZM3 10l9 4.5 9-4.5V18l-9 4.5L3 18V10Z"
    />
  </svg>
);

export const SearchIcon = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path
      fill="currentColor"
      d="M10 2a8 8 0 1 1 0 16 8 8 0 0 1 0-16Zm11 19-5.2-5.2"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

// --- REUSABLE CARD ---
export const Card = ({ children, className = "", as = "div" }) => {
  const Comp = as;
  return (
    <Comp
      className={`rounded-3xl border border-primary/30 bg-background shadow-sm ${className}`}
    >
      {children}
    </Comp>
  );
};

// --- STAT ITEM ---
export const StatItem = ({ label, value }) => (
  <div className="text-center">
    <div className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-foreground">
      {value}
    </div>
    <div className="mt-1 text-sm md:text-base text-muted-foreground">{label}</div>
  </div>
);

// --- COMMUNITY SECTION REUSABLE ---
export const CommunitySection = ({ 
  title = "Community Involvement", 
  description = "", 
  stats = [], 
  values = [], 
  highlightCard = null 
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start({ opacity: 1, y: 0 });
  }, [inView, controls]);

  const sliderRef = useRef(null);
  const [index, setIndex] = useState(0);

  const slides = useMemo(() => {
    const cards = [];
    if (highlightCard) cards.push(highlightCard);
    values.forEach((v) =>
      cards.push(
        <Card key={v.title} className="p-5 md:p-8 min-w-[85%] snap-center">
          <div className="flex items-center gap-3">
            {v.icon}
            <h3 className="text-lg md:text-xl font-semibold">{v.title}</h3>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">{v.body}</p>
        </Card>
      )
    );
    return cards;
  }, [values, highlightCard]);

  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;

    const onScroll = () => {
      const slideWidth = el.offsetWidth * 0.85 + 16;
      const i = Math.round(el.scrollLeft / slideWidth);
      setIndex(Math.max(0, Math.min(i, slides.length - 1)));
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [slides.length]);

  return (
    <section aria-labelledby="community-heading" className="py-14 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-balance text-3xl md:text-5xl font-serif font-semibold">
              {title}
            </p>
            {description && (
              <p className="mt-4 text-muted-foreground">{description}</p>
            )}
          </div>

          {/* Mobile slider */}
          <div className="md:hidden mt-8">
            <div
              ref={sliderRef}
              className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory px-1 pb-2"
              aria-label="Community highlights"
            >
              {slides}
            </div>
            <div className="mt-4 flex justify-center gap-2" aria-hidden="true">
              {slides.map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 w-6 rounded-full transition-colors ${
                    i === index ? "bg-primary" : "bg-border"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Desktop bento grid */}
          <div className="hidden md:grid mt-12 grid-cols-4 grid-rows-3 gap-6">
            {highlightCard && (
              <div className="col-span-2 row-span-2">{highlightCard}</div>
            )}
            {values.map((v) => (
              <Card key={v.title} className="p-8 flex flex-col">
                <div className="flex items-center gap-3">
                  {v.icon}
                  <h3 className="text-xl font-semibold">{v.title}</h3>
                </div>
                <p className="mt-3 text-muted-foreground">{v.body}</p>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
