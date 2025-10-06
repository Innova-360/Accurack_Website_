"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "../ui/Button/Button";

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
        <div className="absolute inset-0 bg-bgpic opacity-95"></div>
      </div>

      {/* Content */}
      <div className="w-full px-6 lg:px-20 py-16 flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Left Text */}
        <div className="max-w-[744px] text-center lg:text-left">
          <h2
            className="font-heading font-medium text-[28px] leading-[36px] md:text-[36px] md:leading-[44px] lg:text-[48px] lg:leading-[60px]  tracking-[-0.02em] text-background"
          >
            Ready to Transform Your Inventory Management?
          </h2>
          <p className="font-text font-normal text-[16px] leading-[24px] text-background mt-4 max-w-[612px]">
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
            className={`transition-all duration-300 ease-in-out origin-left flex-shrink-0 flex items-center justify-center gap-[17px] h-[50px] px-[25px] rounded-[44px] border ${
              hoveredBtn === "demo"
                ? "scale-x-[1.12] border-[2px] border-gradient-primary-2"
                : "scale-x-100 border-[1.5px] border-border"
            } bg-background`}
          >
            <Button
              href="/"
              className="!bg-background flex items-center justify-center gap-[17px] transition-all duration-300 ease-in-out"
            >
              <span
                className={`font-body font-bold text-[16px] leading-[100%] whitespace-nowrap transition-colors duration-300 ${
                  hoveredBtn === "demo"
                    ? "text-gradient-primary-2"
                    : "text-bgpic"
                }`}
              >
                Request a Quote
              </span>
              {hoveredBtn === "demo" && (
                <span className="w-[26px] h-[22px] bg-gradient-primary-2 transition-all duration-300 mask-[url('/Images/Homeassests/Heroimage/Ariconre.png')] mask-no-repeat mask-contain"></span>
              )}
            </Button>
          </div>

          {/* Explore Features */}
          <div
            onMouseEnter={() => setHoveredBtn("features")}
            onMouseLeave={() => setHoveredBtn(null)}
            className={`transition-all duration-300 ease-in-out origin-left flex-shrink-0 flex items-center justify-center gap-[21px] h-[50px] px-[25px] rounded-[555px] border border-background ${
              hoveredBtn === "features" ? "scale-x-[1.12]" : "scale-x-100"
            } bg-transparent`}
          >
            <Button
              href="/"
              className="!bg-transparent flex items-center justify-center gap-[21px] transition-all duration-300 ease-in-out"
            >
              <span className="font-body font-bold text-[16px] leading-[100%] whitespace-nowrap text-background">
                EXPLORE FEATURES
              </span>
              {hoveredBtn === "features" && (
                <span className="w-[26px] h-[22px] bg-gradient-primary-2 transition-all duration-300 mask-[url('/Images/Homeassests/Heroimage/Ariconre.png')] mask-no-repeat mask-contain"></span>
              )}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
