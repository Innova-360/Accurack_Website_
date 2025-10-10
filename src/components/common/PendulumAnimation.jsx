"use client";
import { motion } from "framer-motion";

export default function PendulumDroplet({
  reverse = false,
  gradientStart = "#5eead4",
  gradientEnd = "#2dd4bf",
  blurColor = "#E3F4F6",
}) {
  return (
    <div className="w-full h-screen bg-transparent flex items-center justify-center overflow-hidden relative">
      {/* Blurred circle background */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div
          className="w-96 h-80 rounded-full opacity-90"
          style={{ backgroundColor: blurColor }}
        />
      </div>

      {/* Pendulum container */}
      <div className="absolute w-[300px] h-[300px] flex items-center justify-center z-0">
        <motion.div
          className="relative"
          animate={{
            rotate: reverse ? [0, -30, 30, 0] : [0, 30, -30, 0],
          }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            transformOrigin: "center center",
          }}
        >
          {/* Droplet */}
          <motion.div
            className="relative"
            style={{ x: 180, y: 80 }}
            animate={{
              scale: [1, 1.03, 0.97, 1],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <svg width="120" height="180" viewBox="0 0 160 180">
              <defs>
                <linearGradient
                  id="dropletGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor={gradientStart} />
                  <stop offset="100%" stopColor={gradientEnd} />
                </linearGradient>
                <filter id="softGlow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Main droplet */}
              <circle
                cx="80"
                cy="90"
                r="70"
                fill="url(#dropletGradient)"
                filter="url(#softGlow)"
                opacity="0.95"
              />

              {/* Inner highlight */}
              <ellipse
                cx="80"
                cy="90"
                rx="40"
                ry="35"
                fill="#a5f3fc"
                opacity="0.35"
              />

              {/* Glossy top highlight */}
              <ellipse
                cx="65"
                cy="75"
                rx="18"
                ry="15"
                fill="#ffffff"
                opacity="0.6"
                className="blur-sm"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
