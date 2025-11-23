"use client";

import Image from "next/image";
import Button from "../ui/Button";
import { motion } from "motion/react";

export default function IntegrationsSection() {
  return (
    <section
      className="py-16 bg-black w-full relative overflow-hidden z-10"
      style={{ paddingTop: "100px", height: "739px" }} // fixed height
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
          {/* 🔹 Left Column: Continuous Scroll Bars */}
          <div className="relative w-full h-full flex justify-center lg:justify-start overflow-hidden">
            {/* Bar 1 */}
            <motion.div
              animate={{ y: [0, -849] }}
              transition={{
                duration: 3.5, // speed
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute w-[210px] h-[1700px] z-30"
              style={{ left: "-20px" }}
            >
              <Image
                src="/Images/Homeassests/Integrationsection/Bar1.png"
                alt="Integration 1"
                width={210}
                height={849}
                className="absolute object-cover"
                style={{ top: "0px", transform: "rotate(1.44deg)" }}
              />
              <Image
                src="/Images/Homeassests/Integrationsection/Bar1.png"
                alt="Integration 1 duplicate"
                width={210}
                height={849}
                className="absolute object-cover"
                style={{ top: "849px", transform: "rotate(1.44deg)" }}
              />
            </motion.div>

            {/* Bar 2 */}
            <motion.div
              animate={{ y: [0, -849] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute w-[200px] h-[1700px] z-20 opacity-90"
              style={{ left: "120px" }}
            >
              <Image
                src="/Images/Homeassests/Integrationsection/Bar2.png"
                alt="Integration 2"
                width={200}
                height={849}
                className="absolute object-cover"
                style={{ top: "0px", transform: "rotate(1.44deg)" }}
              />
              <Image
                src="/Images/Homeassests/Integrationsection/Bar2.png"
                alt="Integration 2 duplicate"
                width={200}
                height={849}
                className="absolute object-cover"
                style={{ top: "849px", transform: "rotate(1.44deg)" }}
              />
            </motion.div>

            {/* Bar 3 */}
            <motion.div
              animate={{ y: [0, -849] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute w-[200px] h-[1700px] z-40"
              style={{ left: "280px" }}
            >
              <Image
                src="/Images/Homeassests/Integrationsection/Bar3.png"
                alt="Integration 3"
                width={200}
                height={849}
                className="absolute object-cover"
                style={{ top: "0px", transform: "rotate(1.44deg)" }}
              />
              <Image
                src="/Images/Homeassests/Integrationsection/Bar3.png"
                alt="Integration 3 duplicate"
                width={200}
                height={849}
                className="absolute object-cover"
                style={{ top: "849px", transform: "rotate(1.44deg)" }}
              />
            </motion.div>
          </div>

          {/* 🔹 Right Column: Text + Button */}
          <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6 lg:pl-9 relative z-50">
            {/* Tagline */}
            <span className="inline-flex items-center justify-center border border-black font-heading font-medium text-sm sm:text-base md:text-lg px-4 py-2 rounded-md w-fit">
              Discover Accurack
            </span>

            {/* Heading */}
            <h2 className="font-heading font-medium text-2xl sm:text-4xl md:text-5xl lg:text-[50px] leading-tight sm:leading-[50px] md:leading-[60px] lg:leading-[70px] text-white">
              Our Integrations Power Diverse Industries
            </h2>

            {/* Description */}
            <p className="text-gray-400 font-inter font-normal text-sm sm:text-base md:text-lg leading-[22px] sm:leading-[24px] max-w-2xl">
              Accurack integrates with the tools you already use, streamlining
              operations across ecommerce, wholesale, logistics, and beyond.
            </p>

            {/* Button */}
            <Button
              href="#"
              className="bg-black border border-white text-white font-plusjakarta font-medium text-sm sm:text-base md:text-lg uppercase px-5 py-3 rounded-md hover:bg-white hover:text-black transition w-fit"
            >
              VIEW ALL INTEGRATIONS
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
