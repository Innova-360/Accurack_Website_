// FeatureCardGrid.jsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const FeatureCardGrid = ({ features }) => {
  console.log(features);
  const [hoveredIndex, setHoveredIndex] = React.useState(false);
  return (
    <div className="max-w-6xl mb-10 mx-auto p-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          style={{ fontFamily: "var(--font-jakarta)" }}
          variants={{ initial: { scale: 1 }, hover: { scale: 1.05 } }}
          className="relative overflow-hidden rounded-4xl text-left border-[2px] border-[#006173] px-9 py-13 bg-white cursor-pointer"
          whileHover="hover"
          onHoverStart={() => setHoveredIndex(true)}
          onHoverEnd={() => setHoveredIndex(false)}
          initial="initial"
        >
          {/* Blue Animated Shape */}
          <motion.div
            variants={{
              initial: {
                x: 110, // Start slightly to the right
                y: 120, // And slightly below
                rotate: 45,
              },
              hover: { x: 0, y: -5, rotate: 360 },
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="absolute bottom-4 right-4 w-28 h-40 bg-[#006173] rounded-xl flex items-center justify-center"
          >
            <Image
              src={feature.arrow}
              alt="arrow"
              className="w-6 h-6"
              height={124}
              width={120}
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="overflow-hidden hover:text-2xl hover:transition-all hover:duration-400 "
            variants={{
              initial: { scaleX: 1, originX: -1 },
              hover: {
                scaleX: 0.85,
                originX: 0,
                paddingRight: "40px",
                fontSize: "1.1rem",
              },
            }}
            transition={{ duration: 0.1, ease: "easeOut" }}
          >
            <h3 className="font-Ja text-lg  font-semibold text-black mb-2">
              {!hoveredIndex
                ? feature.title
                : feature.title.slice(0, 30) + "..."}
            </h3>
            <p className="text-sm text-gray-500">{feature.description}</p>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default FeatureCardGrid;
