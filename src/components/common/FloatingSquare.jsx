"use client";
import { motion } from "framer-motion";

export default function FloatingSquare() {
  return (
    <div className="w-full h-screen -rotate-36 bg-transparent flex items-center justify-center overflow-hidden">
      <div className="relative flex items-center justify-center">
        {/* Floating Square */}
        <motion.div
          className="absolute rotate-9 -left-40 -bottom-37"
          animate={{
            y: [-8, 8, -8],
            x: [-5, 5, -5],
            rotate: [0, 2, -2, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg width="400" height="400" viewBox="0 0 400 400">
            <defs>
              {/* Main square gradient */}
              <linearGradient
                id="squareGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#0D9AFF" stopOpacity="0.01" />
                <stop offset="100%" stopColor="#0D9AFF" stopOpacity="0.12" />
              </linearGradient>

              {/* Shadow filter */}
              <filter id="shadow">
                <feDropShadow
                  dx="0"
                  dy="10"
                  stdDeviation="15"
                  floodColor="#CEF0FF"
                  floodOpacity="0.6"
                />
              </filter>
            </defs>

            {/* Main rotated square */}
            <rect
              x="100"
              y="100"
              width="250"
              height="250"
              fill="url(#squareGradient)"
              transform="rotate(45 225 225)"
              filter="url(#shadow)"
            />
          </svg>
        </motion.div>

        {/* Fixed Edge Triangle */}
        <div className="absolute">
          <svg width="700" height="800" viewBox="0 0 400 400">
            <path
              d="M 240 180 L 400 320 L 280 380 Z"
              fill="#0D9AFF"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
