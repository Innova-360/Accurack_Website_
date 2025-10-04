"use client";

import Button from "@/components/ui/Button";
import Img from "@/components/ui/Image";
import { motion } from "motion/react";
<<<<<<<< HEAD:src/components/Solutions/Performancesuite/Perfomance.jsx
import Img from "../../ui/Image/Image";
import Button from "../../ui/Button/Button";
========
>>>>>>>> 62c96f559615249fda17de6e408f6cbdb9d61d7e:src/app/Solutions/AllinoneSolutions/_components/UnifiedHub.jsx

export default function Perfomance() {
  return (
    <section className="w-full bg-white mt-10 mb-10">
      <div
        className="max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-[60px] 
                   py-6 lg:py-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
      >
        {/* Left Side - Text + Buttons */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col text-center lg:text-left lg:items-start items-center"
        >
          {/* Badge */}
          <span
            className="inline-block rounded-md border border-primary mb-5"
            style={{
              fontFamily: "'Lora', serif",
              fontWeight: 500,
              fontSize: "16px",
              lineHeight: "100%",
              color: "#03414B",
              padding: "6px 16px",
            }}
          >
<<<<<<<< HEAD:src/components/Solutions/Performancesuite/Perfomance.jsx
            Performance Suite
========
            All in one Solution
>>>>>>>> 62c96f559615249fda17de6e408f6cbdb9d61d7e:src/app/Solutions/AllinoneSolutions/_components/UnifiedHub.jsx
          </span>

          {/* Heading + Paragraph */}
          <h1
            style={{
              fontFamily: "'Base Neue Trial', sans-serif",
              fontWeight: 700,
              fontStretch: "expanded",
              fontSize: "59.87px",
              lineHeight: "70.5px",
              color: "#03414B",
            }}
            className="max-w-[663px] font-bold tracking-wider"
          >
            Actionable Insights with Accurack&apos;s Performance Suite.
          </h1>

          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 400,
              fontSize: "20px",
              lineHeight: "30px",
              color: "#000000",
            }}
            className="mt-6 max-w-[600px]"
          >
            Optimize stock, streamline operations, and enhance <br /> efficiency
            with Accurack&apos;s intelligent AI Warehouse Suite.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start items-center w-full">
<<<<<<<< HEAD:src/components/Solutions/Performancesuite/Perfomance.jsx
========
            {/* Book a Demo */}
>>>>>>>> 62c96f559615249fda17de6e408f6cbdb9d61d7e:src/app/Solutions/AllinoneSolutions/_components/UnifiedHub.jsx
            <Button
              href="/book-demo"
              className="group relative w-[193px] h-[51px] px-[25px] py-[15px] rounded-[44px] 
                         font-jakarta font-bold text-[16px] leading-[100%] text-white 
                         bg-gradient-to-r from-[var(--navbookademobg1)] to-[var(--navbookademobg2)] 
                         flex items-center justify-center overflow-hidden"
            >
              <span className="transition-transform duration-700 ease-in-out group-hover:translate-x-10 mr-7">
                Book a Demo
              </span>

              <span
                className="absolute right-[10px] top-1/2 -translate-y-1/2 flex items-center justify-center 
                           w-[44px] h-[44px] rounded-full bg-white 
                           transition-all duration-700 ease-in-out 
                           group-hover:-translate-x-[130px] group-hover:rotate-180"
              >
                <span
                  className="w-[20px] h-[20px] bg-[var(--color-gradient-primary-2)]"
                  style={{
                    maskImage: "url('/Images/Navassests/ReArrow.png')",
                    WebkitMaskImage: "url('/Images/Navassests/ReArrow.png')",
                    maskRepeat: "no-repeat",
                    WebkitMaskRepeat: "no-repeat",
                    maskPosition: "center",
                    WebkitMaskPosition: "center",
                    maskSize: "contain",
                    WebkitMaskSize: "contain",
                    transform: "rotate(180deg)",
                  }}
                ></span>
              </span>
            </Button>

            <Button
              href="/free-trial"
              className="w-[193px] h-[51px] px-[25px] py-[15px] rounded-[44px] 
                         font-jakarta font-bold text-[16px] leading-[100%] tracking-[0%] 
                         text-[var(--color-gradient-primary-2)] border border-[var(--color-gradient-primary-2)] bg-white 
                         flex items-center justify-center"
            >
              Start Free Trial
            </Button>
          </div>
        </motion.div>

        {/* Right Side - Image with Rotated Borders */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative flex justify-center items-center h-full"
        >
          <div className="relative w-full max-w-[710px] aspect-[16/12] flex-shrink-0">
            <div
              className="absolute inset-0 rounded-[42px] border-[3px] border-teal-400"
              style={{ transform: "rotate(4deg)", zIndex: 0 }}
            ></div>
            <div
              className="absolute inset-0 rounded-[42px] border-[2px] border-teal-400/60"
              style={{ transform: "rotate(7deg)", zIndex: 0 }}
            ></div>
            <div
              className="absolute inset-0 rounded-[42px] border-[2px] border-teal-400/30"
              style={{ transform: "rotate(10deg)", zIndex: 0 }}
            ></div>

            <Img
              src="/Images/Dropdownassests/Solutions/Perfomancesuite/Perfomance.png"
              alt="Inventory Section"
              width={710}
              height={710}
              className="relative object-cover w-full h-full rounded-[42px] border-[5px] border-primary z-10"
              fallback="/Images/Homeassests/Heroimage/back.jpg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
