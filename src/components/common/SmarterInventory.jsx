"use client";

import Image from "next/image";
import { FaEnvelope, FaArrowRight } from "react-icons/fa";

export default function SmarterInventorySection({
  bgImage = "/Images/Dropdownassests/Solutions/InventorySolutions/Transform.png",
  heading,
  description,
  emailPlaceholder = "Enter your email",
  arrowBtnText,
  onEmailClick,
  onArrowClick,
}) {
  return (
    <section className="relative w-full">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={bgImage}
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
          <h2 className="font-heading font-medium text-[28px] leading-[36px] md:text-[36px] md:leading-[44px] lg:text-[48px] lg:leading-[60px] tracking-[-0.02em] text-background">
            {heading}
          </h2>
          <p className="font-text font-normal text-[16px] leading-[24px] text-background mt-4 max-w-[612px]">
            {description}
          </p>
        </div>

        {/* 🔹 Right Section (Input + Button) */}
        <div className="flex flex-col items-center lg:items-end space-y-4 flex-shrink-0 w-full max-w-[456px]">
          {/* Email Input Field */}
          <div className="w-full max-w-[456px] h-[52px] flex items-center gap-2 border border-rowline rounded-[32px] px-[20px] py-[16px] bg-transparent">
            <FaEnvelope className="text-background text-[18px]" />
            <input
              type="email"
              placeholder={emailPlaceholder}
              className="w-full bg-transparent outline-none text-[16px] font-body font-normal text-background placeholder:text-light"
              onClick={onEmailClick}
            />
          </div>

          {/* Arrow Button */}
          <button
            onClick={onArrowClick}
            className="w-full max-w-[456px] h-[52px] flex items-center justify-center gap-[17px] px-[25px] py-[15px] rounded-[44px] font-body font-bold text-[16px] text-background whitespace-nowrap bg-gradient-to-r from-gradient-primary-1 to-gradient-primary-2 transition"
          >
            {arrowBtnText}
            <FaArrowRight className="text-background text-[18px]" />
          </button>
        </div>
      </div>
    </section>
  );
}
