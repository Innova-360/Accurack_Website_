"use client";

import { motion } from "framer-motion";
import React from "react";

function BrandGetApp() {
  return (
    <div className="flex items-center gap-2">
      {/* diamond shape */}
      <span
        aria-hidden="true"
        className="inline-block h-4 w-4 rotate-45 rounded-[2px] bg-white"
      />
      <span className="text-sm font-semibold tracking-tight">GetApp</span>
    </div>
  );
}

function BrandSoftwareAdvice() {
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm font-semibold tracking-tight">Software</span>
      <span className="text-sm font-semibold tracking-tight">Advice</span>
      {/* speech bubble */}
      <span
        aria-hidden="true"
        className="ml-1 inline-block h-3 w-4 rounded bg-white"
      />
    </div>
  );
}

function BrandPlane() {
  return (
    <div className="flex items-center gap-2">
      {/* paper plane */}
      <svg
        aria-hidden="true"
        className="h-5 w-5 fill-white"
        viewBox="0 0 24 24"
      >
        <path d="M2.01 21 23 12 2.01 3 2 10l15 2-15 2z" />
      </svg>
      <span className="text-sm font-semibold tracking-tight">Capterra</span>
    </div>
  );
}

function BrandG2() {
  return (
    <div className="flex items-center gap-2">
      {/* simple G2 glyph */}
      <div className="flex h-5 w-5 items-center justify-center rounded-full border border-white/80">
        <span className="text-[10px] font-bold">G2</span>
      </div>
      <span className="text-sm font-semibold tracking-tight">G2</span>
    </div>
  );
}

// Star row using overlay fill to support partial (half) stars
function StarRow({ rating }) {
  const percent = Math.max(0, Math.min(100, (rating / 5) * 100));
  const Star = ({ className = "" }) => (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className={`h-4 w-4 ${className}`}
    >
      <path
        d="M10 1.5l2.7 5.47 6.04.88-4.37 4.26 1.03 6.02L10 15.87 4.6 18.13l1.03-6.02L1.27 7.85l6.03-.88L10 1.5z"
        fill="currentColor"
      />
    </svg>
  );

  return (
    <div className="relative flex">
      {/* base (muted) */}
      <div className="flex text-white/30">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} />
        ))}
      </div>
      {/* filled overlay */}
      <div
        className="absolute inset-0 overflow-hidden text-white"
        style={{ width: `${percent}%` }}
      >
        <div className="flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ReviewBadge({ item }) {
  return (
    <div
      className="min-w-[240px] text-3xl max-w-[280px] shrink-0"
      aria-label={`${item.name} rating ${item.rating} out of 5 based on ${item.reviews} reviews`}
    >
      <div className="mb-2 flex items-center gap-2 text-white">{item.icon}</div>
      <div className="flex items-center gap-2">
        <StarRow rating={item.rating} />
      </div>
      <p className="mt-2 text-xs text-white/70">
        {item.rating.toFixed(1)} ({item.reviews.toLocaleString()} reviews)
      </p>
    </div>
  );
}

const defaultItems = [
  { name: "GetApp", icon: <BrandGetApp />, rating: 4.2, reviews: 940 },
  {
    name: "Software Advice",
    icon: <BrandSoftwareAdvice />,
    rating: 4.2,
    reviews: 941,
  },
  { name: "Capterra", icon: <BrandPlane />, rating: 4.0, reviews: 246 },
  { name: "G2", icon: <BrandG2 />, rating: 4.2, reviews: 941 },
];

export function ReviewsMarquee({
  items = defaultItems,
  speed = 28, // seconds for one cycle
}) {
  // duplicate items to create a seamless loop
  const loopItems = [...items, ...items];

  return (
    <section
      className="relative w-full overflow-hidden"
      aria-label="Ratings from review platforms"
    >
      <div className="bg-surface-inverse py-10 text-text-inverse">
        <motion.div
          className="mx-auto max-w-7xl px-6"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="relative">
            <motion.div
              className="flex items-center gap-16"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: speed,
                ease: "linear",
                repeat: Number.POSITIVE_INFINITY,
              }}
            >
              {loopItems.map((item, idx) => (
                <ReviewBadge key={`${item.name}-${idx}`} item={item} />
              ))}
            </motion.div>

            {/* subtle left/right fades */}
            <div className="pointer-events-none absolute inset-y-0 -left-50 w-[15vw] bg-gradient-to-r from-surface-inverse to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 -right-50 w-[15vw] bg-gradient-to-l from-surface-inverse to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ReviewsMarquee;
