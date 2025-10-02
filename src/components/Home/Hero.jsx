"use client";
import { motion } from "motion/react";
import { useState } from "react";
import Img from "../Image/Image";
import Button from "../Button/Button";

export default function HeroSection() {
  const [hoveredBtn, setHoveredBtn] = useState(null);

  return (
    <section className="w-full bg-background">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-[100px] py-6 lg:py-12 grid grid-cols-1 lg:grid-cols-2 items-start gap-10">
        <motion.div
          initial={{ x: -150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-center lg:items-start text-center lg:text-left -mt-[9px]"
        >
          <h1 className="max-w-[700px] text-primary text-2xl sm:text-[55px] lg:text-[70px] leading-[50px] sm:leading-[60px] lg:leading-[70.5px] font-extrabold font-title">
            The Smarter <br />
            Way to Manage <br />
            Inventory.
          </h1>

          <p className="mt-9 text-foreground font-normal text-[16px] sm:text-[18px] lg:text-[20px] max-w-[600px] font-body">
            Discover our story, mission, and the team <br /> behind the
            Ai-powered solution transforming <br /> inventory management.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start items-center lg:items-start w-full">
            {/* Book a Demo */}
            <div
              onMouseEnter={() => setHoveredBtn("demo")}
              onMouseLeave={() => setHoveredBtn(null)}
              className={`flex items-center justify-center gap-2 rounded-lg border border-primary transition-all duration-300 
                ${hoveredBtn === "demo" ? "bg-gradient-to-r from-cyan-200 to-cyan-200 text-foreground w-[200px]" : "bg-primary text-white w-[184px]"} h-12`}
            >
              <Button href="/book-demo" className="!bg-transparent !text-inherit !w-full !h-full flex items-center justify-center gap-2">
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
              className={`flex items-center justify-center gap-2 rounded-lg border border-primary transition-all duration-300 
                ${hoveredBtn === "trial" ? "w-[200px]" : "w-[184px]"} h-12 bg-background text-primary`}
            >
              <Button href="/free-trial" className="!bg-transparent !text-inherit !w-full !h-full flex items-center justify-center gap-2">
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
          className="relative flex justify-center lg:justify-center"
        >
          <Img
            src="/Images/Homeassests/Heroimage/Loader.png"
            alt="Hero Section"
            width={751}
            height={536}
            className="object-contain w-[260px] sm:w-[380px] lg:w-[700px] mt-9 mr-32"
            fallback="/Images/Homeassests/Heroimage/back.jpg"
          />

          <motion.div
            initial={{ y: -150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
            className="absolute -top-16 right-0 sm:-top-16 sm:right-4 lg:top-0 lg:right-10 flex flex-col items-start text-left"
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
              <span className="text-primary font-bold text-[28px] sm:text-[40px] lg:text-[52.45px] leading-[61.76px] font-title">
                130%
              </span>
              <span className="text-primary font-bold text-xs sm:text-sm lg:text-base">Growth</span>
            </div>
            <p className="mt-2 text-gray-900 text-[16px] sm:text-[16px] lg:text-[18px] leading-[110%] font-medium max-w-[220px] font-heading">
              Top used website for warehouse management
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
