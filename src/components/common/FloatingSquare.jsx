"use client";
import { motion } from "framer-motion";

export default function FloatingSquare({
  gradientStart = "#0D9AFF",
  gradientEnd = "#6BE0FF",
  shadowColor = "#CEF0FF",
  triangleColor = "#0D9AFF",
  rotation = 45,
  duration = 4,
}) {
  return (
    <div className="w-full h-screen bg-transparent -rotate-36 flex items-center justify-center overflow-hidden">
      <div className="relative flex items-center justify-center">
        {/* Floating Animated Square */}
        <motion.div
          className="absolute -left-40 z-10 -bottom-37"
          animate={{
            y: [-8, 8, -8],
            x: [-5, 5, -5],
            rotate: [0, 2, -2, 0],
          }}
          transition={{
            duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg width="400" height="400" viewBox="0 0 400 400">
            <defs>
              {/* Gradient for the square */}
              <linearGradient
                id="squareGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor={gradientStart} stopOpacity="0.6" />
                <stop offset="100%" stopColor={gradientEnd} stopOpacity="1" />
              </linearGradient>

              {/* Drop Shadow */}
              <filter id="shadow">
                <feDropShadow
                  dx="0"
                  dy="10"
                  stdDeviation="15"
                  floodColor={shadowColor}
                  floodOpacity="0.6"
                />
              </filter>
            </defs>

            {/* Rotated Square */}
            <rect
              x="100"
              y="100"
              width="250"
              height="250"
              fill="url(#squareGradient)"
              transform={`rotate(${rotation} 225 225)`}
              filter="url(#shadow)"
            />
          </svg>
        </motion.div>

        {/* Static Triangle */}
        <div className="absolute">
          <svg width="700" height="800" viewBox="0 0 400 400">
            <path d="M 240 180 L 400 320 L 280 380 Z" fill={triangleColor} />
          </svg>
        </div>
      </div>
    </div>
  );
}
