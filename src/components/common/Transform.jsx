"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "../ui/Button/Button";
import Img from "../ui/Image/Image";

export default function TransformSection() {
  const [hoveredBtn, setHoveredBtn] = useState(null);

  return (
    <section className="relative w-full">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/Images/Dropdownassests/Solutions/InventorySolutions/Transform.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[var(--color-primary-hover)] opacity-95"></div>
      </div>

      {/* Content */}
      <div className="w-full px-6 lg:px-20 py-16 flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Left Text */}
        <div className="max-w-[744px] text-center lg:text-left">
          <h2 className="font-[Lora] font-medium text-[48px] leading-[60px] tracking-[-0.02em] text-white">
            Ready to Transform Your Inventory Management?
          </h2>
          <p className="font-inter font-normal text-[16px] leading-[24px] text-white mt-4 max-w-[612px]">
            Join hundreds of businesses optimizing their operations with
            Accurack.
          </p>
        </div>

        {/* Right Buttons */}
        <div className="flex flex-row items-center space-x-[28px] flex-shrink-0">
          {/* Book a Demo */}
          <div
            onMouseEnter={() => setHoveredBtn("demo")}
            onMouseLeave={() => setHoveredBtn(null)}
            className="transition-all duration-300 ease-in-out origin-left flex-shrink-0"
            style={{
              backgroundColor: "#FFFFFF",
              transform:
                hoveredBtn === "demo" ? "scaleX(1.12)" : "scaleX(1)", // expand only to the right
              height: "50px",
              borderRadius: "44px",
              border:
                hoveredBtn === "demo"
                  ? "2px solid #0C6676E5"
                  : "1.5px solid #E0E0E0",
              padding: "0 25px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "17px",
            }}
          >
            <Button
              href="/"
              className="!bg-transparent flex items-center justify-center gap-[17px] transition-all duration-300 ease-in-out"
            >
              <span
                className={`font-jakarta font-bold text-[16px] leading-[100%] whitespace-nowrap transition-colors duration-300 ${
                  hoveredBtn === "demo" ? "text-[var(--color-gradient-primary-2)]/90" : "text-[var(--color-primary-hover)]"
                }`}
              >
                Request a Quote
              </span>
              {hoveredBtn === "demo" && (
                <span
                  className="w-[26px] h-[22px] transition-all duration-300"
                  style={{
                    maskImage:
                      "url(/Images/Homeassests/Heroimage/Ariconre.png)",
                    WebkitMaskImage:
                      "url(/Images/Homeassests/Heroimage/Ariconre.png)",
                    maskRepeat: "no-repeat",
                    WebkitMaskRepeat: "no-repeat",
                    maskSize: "contain",
                    WebkitMaskSize: "contain",
                    backgroundColor: "#0C6676E5", // exact color apply hoga
                  }}
                ></span>
              )}
            </Button>
          </div>

          {/* Explore Features */}
          <div
            onMouseEnter={() => setHoveredBtn("features")}
            onMouseLeave={() => setHoveredBtn(null)}
            className="transition-all duration-300 ease-in-out origin-left flex-shrink-0"
            style={{
              backgroundColor: "transparent",
              transform:
                hoveredBtn === "features" ? "scaleX(1.12)" : "scaleX(1)", // expand only to the right
              height: "50px",
              borderRadius: "555px",
              border: "1.5px solid #FFFFFF",
              padding: "0 25px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "21px",
            }}
          >
            <Button
              href="/"
              className="!bg-transparent flex items-center justify-center gap-[21px] transition-all duration-300 ease-in-out"
            >
              <span className="font-jakarta font-bold text-[16px] leading-[100%] whitespace-nowrap text-white">
                EXPLORE FEATURES
              </span>
              {hoveredBtn === "features" && (
                <span
                  className="w-[26px] h-[22px] transition-all duration-300"
                  style={{
                    maskImage:
                      "url(/Images/Homeassests/Heroimage/Ariconre.png)",
                    WebkitMaskImage:
                      "url(/Images/Homeassests/Heroimage/Ariconre.png)",
                    maskRepeat: "no-repeat",
                    WebkitMaskRepeat: "no-repeat",
                    maskSize: "contain",
                    WebkitMaskSize: "contain",
                    backgroundColor: "#0C6676E5",
                  }}
                ></span>
              )}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
