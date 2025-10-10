"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link2, Package, Warehouse, BarChart3 } from "lucide-react";

export default function InfoTabs() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { icon: Link2, label: "All in One Solution" },
    { icon: Package, label: "Inventory Solution" },
    { icon: Warehouse, label: "AI Warehouse Suite" },
    { icon: BarChart3, label: "Performance Suite" },
  ];

  return (
    <div className="flex items-center justify-center w-full mt-1 max-w-md p-1">
      <div className="grid grid-cols-2">
        {tabs.map((tab, index) => {
          const Icon = tab.icon;
          return (
            <motion.div
              key={index}
              initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index > 1 ? 0.2 : 0,
              }}
            >
              <button
                onClick={() => setActiveTab(index)}
                className={`relative w-full flex items-center gap-2 px-4 py-3 rounded-lg transition-all duration-200
                  ${
                    activeTab === index
                      ? "text-gray-900 font-medium bg-transparent"
                      : "text-gray-600"
                  }
                  group overflow-hidden
                `}
              >
                <Icon className="w-5 h-5 z-10" />
                <span
                  className={`
                    text-md whitespace-nowrap z-10 relative transition-all duration-500
                    group-hover:text-transparent group-hover:bg-clip-text
                    group-hover:bg-[linear-gradient(270deg,#ff0000,#ff9900,#ffff00,#00ff00,#00ffff,#0000ff,#ff00ff,#ff0000)]
                    group-hover:animate-gradientReverse
                  `}
                >
                  {tab.label}
                </span>
              </button>
            </motion.div>
          );
        })}
      </div>

      {/* 💫 Reversed Animated Gradient (Right → Left) */}
      <style jsx>{`
        @keyframes gradientReverse {
          0% {
            background-position: 200% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-gradientReverse {
          background-size: 200% 200%;
          animation: gradientReverse 2.5s linear infinite;
        }
      `}</style>
    </div>
  );
}
