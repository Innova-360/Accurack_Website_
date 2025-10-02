"use client";

import { motion } from "motion/react";
import { useState } from "react";
import Img from "../ui/Image";
import Button from "../ui/Button";

export default function HeroSection() {
  const [hoveredBtn, setHoveredBtn] = useState(null);

  return (
    <section className="w-full bg-white">
      <div
        className="max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-[100px] 
                   py-6 lg:py-12 grid grid-cols-1 lg:grid-cols-2 
                   items-start gap-10 lg:gap-10"
      >
        {/* Left Side - Text + Buttons */}
        <motion.div
          initial={{ x: -150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }} // ✅ Scroll pe trigger
          viewport={{ once: false, amount: 0.3 }} // har dafa jab visible hoga
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-center lg:items-start 
                     text-center lg:text-left -mt-[9px]"
        >
          {/* ✅ Heading with exact style */}
          <h1
            style={{
              fontFamily: "'Base Neue Trial', sans-serif",
              fontWeight: 700,
              fontStyle: "normal",
              fontStretch: "expanded", // Wide Bold
              fontSize: "70px",
              lineHeight: "70.5px", // Bilkul design wali height
              letterSpacing: "0px",
              color: "#03414B",
            }}
            className="max-w-[700px]"
          >
            The Smarter <br />
            Way to Manage <br />
            Inventory.
          </h1>

          <p
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            className="mt-35 text-[#000000]
                       font-normal text-[16px] sm:text-[18px] lg:text-[20px]
                       leading-[30px] tracking-[0]
                       max-w-[600px]"
          >
            Discover our story, mission, and the team <br /> behind the
            Ai-powered solution transforming <br /> inventory management.
          </p>

          {/* ✅ Buttons */}
          <div
            className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6 
                       justify-center lg:justify-start items-center lg:items-start w-full"
          >
            {/* Book a Demo */}
            <div
              onMouseEnter={() => setHoveredBtn("demo")}
              onMouseLeave={() => setHoveredBtn(null)}
              style={{
                backgroundColor: hoveredBtn === "demo" ? "#8BEEFF" : "#03414B",
                color: hoveredBtn === "demo" ? "#000000" : "#fff",
                width: hoveredBtn === "demo" ? "200px" : "184px",
                height: "48px",
                borderRadius: "8px",
                border: "1px solid #02404B",
                transition: "all 0.3s ease",
              }}
              className="flex items-center justify-center gap-2"
            >
              <Button
                href="/book-demo"
                className="!bg-transparent !text-inherit !w-full !h-full flex items-center justify-center gap-2"
              >
                <span>Book a Demo</span>
                {hoveredBtn === "demo" && (
                  <Img
                    src="/Images/Homeassests/Heroimage/Ariconre.png"
                    alt="Arrow Icon"
                    width={26}
                    height={22}
                    className="object-contain"
                    fallback="/Images/Homeassests/Heroimage/back.jpg"
                  />
                )}
              </Button>
            </div>

            {/* Start Free Trial */}
            <div
              onMouseEnter={() => setHoveredBtn("trial")}
              onMouseLeave={() => setHoveredBtn(null)}
              style={{
                backgroundColor: "#fff",
                color: "#03414B",
                width: hoveredBtn === "trial" ? "200px" : "184px",
                height: "48px",
                borderRadius: "8px",
                border: "1px solid #02404B",
                transition: "all 0.3s ease",
              }}
              className="flex items-center justify-center gap-2"
            >
              <Button
                href="/free-trial"
                className="!bg-transparent !text-inherit !w-full !h-full flex items-center justify-center gap-2"
              >
                <span>Start Free Trial</span>
                {hoveredBtn === "trial" && (
                  <Img
                    src="/Images/Homeassests/Heroimage/Ariconre.png"
                    alt="Arrow Icon"
                    width={26}
                    height={22}
                    className="object-contain"
                    fallback="/Images/Homeassests/Heroimage/back.jpg"
                  />
                )}
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Image + Stats */}
        <motion.div
          initial={{ x: -150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }} // ✅ Scroll pe trigger
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative flex justify-center lg:justify-center"
        >
          <Img
            src="/Images/Homeassests/Heroimage/Loader.png"
            alt="Hero Section"
            width={751}
            height={536}
            className="object-contain w-[260px] sm:w-[380px] lg:w-[700px] mt-35 mr-120"
            fallback="/Images/Homeassests/Heroimage/back.jpg"
          />

          {/* Stats */}
          <motion.div
            initial={{ y: -150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }} // ✅ Scroll pe trigger
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
            className="absolute -top-16 right-0 sm:-top-16 sm:right-4 
                       lg:top-0 lg:right-10 flex flex-col items-start text-left"
          >
            <div className="flex items-center gap-2 sm:gap-3">
              <Img
                src="/Images/Homeassests/Heroimage/Arrow.png"
                alt="Arrow Icon"
                width={24}
                height={24}
                className="object-contain bg-transparent"
                fallback="/Images/Homeassests/Heroimage/back.jpg"
              />
              <span
                style={{
                  fontFamily: "'Base Neue Trial', sans-serif",
                  fontWeight: 700,
                }}
                className="text-[#03414B] font-bold 
                           text-[28px] sm:text-[40px] lg:text-[52.45px] 
                           leading-[61.76px]"
              >
                130%
              </span>
              <span className="text-[#03414B] font-bold text-xs sm:text-sm lg:text-base">
                Growth
              </span>
            </div>

            <p
              style={{ fontFamily: "'Lora', serif" }}
              className="mt-2 text-[#050506] text-[16px] sm:text-[16px] 
                         lg:text-[18px] leading-[110%] font-medium 
                         max-w-[220px]"
            >
              Top used website for warehouse management
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
