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
    <div className="w-full max-w-md mx-auto p-3">
      <div className="grid grid-cols-2 gap-1">
        {/* First Row */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div
            onClick={() => setActiveTab(0)}
            className={`
             w-full flex items-center gap-2 px-4 py-3 rounded-lg transition-all duration-200

            `}
          >
            <Link2 className="w-5 h-5" />
            <span className="text-sm whitespace-nowrap">{tabs[0].label}</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <button
            onClick={() => setActiveTab(1)}
            className={`
              w-full flex items-center gap-2 px-4 py-3 rounded-lg transition-all duration-200
            `}
          >
            <Package className="w-5 h-5" />
            <span className="text-sm whitespace-nowrap">{tabs[1].label}</span>
          </button>
        </motion.div>

        {/* Second Row */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <button
            onClick={() => setActiveTab(2)}
            className={`
              w-full flex items-center gap-2 px-4 py-3 rounded-lg transition-all duration-200
            `}
          >
            <Warehouse className="w-5 h-5" />
            <span className="text-sm whitespace-nowrap">{tabs[2].label}</span>
          </button>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <button
            onClick={() => setActiveTab(3)}
            className={`
              w-full flex items-center gap-2 px-4 py-3 rounded-lg transition-all duration-200
            `}
          >
            <BarChart3 className="w-5 h-5" />
            <span className="text-sm whitespace-nowrap">{tabs[3].label}</span>
          </button>
        </motion.div>
      </div>
    </div>
  );
}
