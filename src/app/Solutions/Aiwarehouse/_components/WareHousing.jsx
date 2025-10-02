"use client";

import Button from "@/components/ui/Button";
import Img from "@/components/ui/Image";
import { motion } from "motion/react";

export default function Warehousing() {
  return (
    <section className="w-full bg-white mt-16 mb-10">
      <div
        className="max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-[60px] 
                   py-6 lg:py-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-end"
      >
        {/* Left Side - Text + Buttons */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col justify-between h-full text-center lg:text-left lg:items-start items-center"
        >
          {/* Badge (top, independent) */}
          <span
            className="inline-block rounded-md border border-[#03414B] mb-5"
            style={{
              fontFamily: "'Lora', serif",
              fontWeight: 500,
              fontSize: "16px",
              lineHeight: "100%",
              color: "#03414B",
              padding: "6px 16px",
            }}
          >
            Predictive AI
          </span>

          {/* Main content block (bottom aligned with image) */}
          <div className="flex flex-col">
            {/* Heading */}
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
              Smarter Warehousing: Powered by Predictive AI
            </h1>

            {/* Paragraph */}
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
              Optimize stock, streamline operations, and enhance <br />{" "}
              efficiency with Accurack&apos;s intelligent AI Warehouse Suite.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start items-center w-full">
              {/* Book a Demo */}
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
                    className="w-[20px] h-[20px] bg-[#0C6676]"
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

              {/* Start Free Trial */}
              <Button
                href="/free-trial"
                className="w-[193px] h-[51px] px-[25px] py-[15px] rounded-[44px] 
                           font-jakarta font-bold text-[16px] leading-[100%] tracking-[0%] 
                           text-[#0C6676] border border-[#0C6676] bg-white 
                           flex items-center justify-center"
              >
                Start Free Trial
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Image with Rotated Borders */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative flex justify-center items-end h-full"
        >
          <div className="relative w-full max-w-[710px] aspect-[16/12] flex-shrink-0">
            {/* Borders */}
            <div
              className="absolute inset-0 rounded-[42px] border-[3px] border-[#18BDA0]"
              style={{ transform: "rotate(4deg)", zIndex: 0 }}
            ></div>
            <div
              className="absolute inset-0 rounded-[42px] border-[2px] border-[#18BDA0]/60"
              style={{ transform: "rotate(7deg)", zIndex: 0 }}
            ></div>
            <div
              className="absolute inset-0 rounded-[42px] border-[2px] border-[#18BDA0]/30"
              style={{ transform: "rotate(10deg)", zIndex: 0 }}
            ></div>

            {/* Main Image */}
            <Img
              src="/Images/Dropdownassests/Solutions/Aiwarehouse/Warehouse.png"
              alt="Inventory Section"
              width={710}
              height={710}
              className="relative object-cover w-full h-full rounded-[42px] border-[5px] border-[#02404B] z-10"
              fallback="/Images/Homeassests/Heroimage/back.jpg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
