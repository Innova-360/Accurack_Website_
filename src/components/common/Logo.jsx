
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import CFD from "../../../public/Images/CompetitorPage/CFD.png";
import APEX from "../../../public/Images/CompetitorPage/APEX.webp";
import Andalus from "../../../public/Images/CompetitorPage/Andalus.webp";
import Alaxendar from "../../../public/Images/CompetitorPage/Alaxendar.webp";

export default function Logos() {
  const logos = [APEX, Andalus, CFD, Alaxendar];

  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-center overflow-hidden py-6">
      {/* 🧾 Heading */}
      <div
        className="
          text-sm italic leading-[101%] text-black font-poppins
          md:w-[30%] py-4 font-bold text-center
        "
      >
        Companies We&apos;ve Worked With
      </div>

      {/* 🌀 Continuous Animated Logos */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex items-center justify-start whitespace-nowrap gap-12"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            duration: 7, // 🔧 speed control
          }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center justify-center w-24 md:w-32"
            >
              <Image
                src={logo}
                alt={`Company logo ${index}`}
                width={120}
                height={80}
                className="object-contain opacity-85 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
