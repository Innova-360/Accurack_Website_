"use client";
import { motion } from "motion/react";
import { useState } from "react";
import Img from "../ui/Image";
import Button from "../ui/Button";

export default function HeroSection() {
  const [hoveredBtn, setHoveredBtn] = useState(null);

  return (
    <section className="w-full -mt-10 h-screen flex items-center justify-center bg-white overflow-hidden">
      <div
        className="
      w-full h-full
      px-4 sm:px-6 lg:px-[100px]
      py-10 sm:py-12 lg:py-20
      grid grid-cols-1 lg:grid-cols-2
      items-center text-center lg:text-left
      lg:gap-8 sm:gap-12 
    "
      >
        {/* Left Side - Text + Buttons */}
        <motion.div
          initial={{ x: -150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-center lg:items-start text-center lg:text-left -mt-[9px]"
        >
          {/* ✅ Heading with exact style */}
          <h1
            className="max-w-[700px] font-title lg:font-black font-extrabold
             text-[24px] sm:text-[36px] lg:text-[70px]
             leading-[30px] sm:leading-[90px] lg:leading-[70.5px]
             text-[#03414B] lg:[font-stretch:expanded]"
          >
            The Smarter <br />
            Way to Manage <br />
            Inventory.
          </h1>

          <p
            className="mt-5 text-[#000000] font-body font-normal 
             text-[14px] sm:text-[12px] lg:text-[20px]
             leading-[22px] sm:leading-[66px] lg:leading-[30px]
             tracking-normal max-w-[600px]"
          >
            Discover our story, mission, and the team <br />
            behind the AI-powered solution transforming <br />
            inventory management.
          </p>

          {/* ✅ Buttons */}
          <div
            className="mt-8 sm:mb-20 flex flex-col sm:flex-row gap-4 sm:gap-6 
                       justify-center lg:justify-start items-center lg:items-start w-full"
          >
            {/* Book a Demo */}
            <div
              onMouseEnter={() => setHoveredBtn("demo")}
              onMouseLeave={() => setHoveredBtn(null)}
              className={`
    flex items-center justify-center gap-2
    w-[184px] h-[48px] rounded-full border border-[#02404B]
    transition-all duration-300 ease-in-out
    ${
      hoveredBtn === "demo"
        ? "bg-[#8BEEFF] text-black w-[200px]"
        : "bg-gradient-to-r from-[#00B6BC] to-[#0C6676] text-white"
    }
  `}
            >
              <Button
                href="/book-demo"
                className="!bg-transparent !text-inherit !w-full !h-full flex items-center justify-center gap-2 rounded-full"
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
            {/* Start Free Trial */}
            <div
              onMouseEnter={() => setHoveredBtn("trial")}
              onMouseLeave={() => setHoveredBtn(null)}
              className={`flex items-center justify-center gap-2
              rounded-full border border-[#02404B] 
              transition-all duration-300 ease-in-out
              ${hoveredBtn === "trial" ? "w-[200px]" : "w-[184px]"} 
              h-[48px]
              ${
                hoveredBtn === "trial"
                  ? "bg-[#8BEEFF] text-black"
                  : "bg-white text-[#03414B]"
              }`}
            >
              <Button
                href="/free-trial"
                className="!bg-transparent !text-inherit !w-full !h-full flex items-center justify-center gap-2 rounded-full"
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

        <motion.div
          initial={{ x: -150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative ml-0 lg:ml-16 flex justify-center items-center lg:h-[90vh]"
        >
          {/* These two images only for large screens */}
          <Img
            src="/Images/Homeassests/Heroimage/Stores-2.png"
            alt="Decorative store overlay"
            width={230}
            height={60}
            className="hidden lg:block absolute top-45 left-70 z-20 object-contain"
            fallback="/Images/Homeassests/Heroimage/Stores-2.png"
          />
          <Img
            src="/Images/Homeassests/Heroimage/Stores.png"
            alt="Decorative store overlay"
            width={250}
            height={50}
            className="hidden lg:block absolute top-60 -left-30 z-20 object-contain"
            fallback="/Images/Homeassests/Heroimage/Stores.png"
          />

          {/* ✅ Main Loader Image visible in all screens */}
          <Img
            src="/Images/Homeassests/Heroimage/Loader.png"
            alt="Hero Section"
            width={951}
            height={536}
            className="object-contain w-[90%] sm:w-[380px] lg:rotate-0 sm:rotate-6 lg:w-[800px] mt-10 sm:-mt-10 lg:mt-38"
            fallback="/Images/Homeassests/Heroimage/Loader.png"
          />

          {/* Stats (hidden on mobile) */}
          <motion.div
            initial={{ y: -150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
            className="hidden lg:flex absolute top-0 right-10 flex-col items-start text-left"
          >
            <div className="flex items-center gap-3">
              <Img
                src="/Images/Homeassests/Heroimage/Arrow.png"
                alt="Arrow Icon"
                width={24}
                height={24}
                className="object-contain bg-transparent"
                fallback="/Images/Homeassests/Heroimage/back.jpg"
              />
              <span
                className="text-[#03414B] font-bold text-[28px] lg:text-[52px] leading-[61px]"
                style={{ fontFamily: "'Base Neue Trial', sans-serif" }}
              >
                130%
              </span>
              <span className="text-[#03414B] font-bold text-base">Growth</span>
            </div>

            <p className="mt-2 text-[#050506] text-[16px] lg:text-[18px] leading-[110%] font-medium max-w-[220px]">
              Top used website for warehouse management
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
