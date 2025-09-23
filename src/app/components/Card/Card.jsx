"use client";

import Image from "next/image";
import clsx from "clsx";

export default function Card({ icon, title, text, className }) {
  return (
    <div className="pb-4 rounded-[22px] bg-[#eaeaea] shadow-sm shadow-[#eaeaea] w-full max-w-[400px]">
      <div
        className={clsx(
          "flex flex-col items-center justify-center rounded-[22px] p-6 w-full h-[260px] sm:h-[275px] bg-white transition-all duration-300 group",
          "shadow-md hover:bg-[#0e5d6f]",
          className
        )}
      >
        {/* 🔹 Icon with light background shade */}
        <div className="mb-4 transition-all duration-300 group-hover:bg-transparent">
          <Image
            src={icon}
            alt={title}
            width={58}
            height={58}
            className="p-2 bg-[#f8fffd] group-hover:bg-transparent transition-all duration-300 group-hover:brightness-0 group-hover:invert"
          />
        </div>

        {/* 🔹 Heading */}
        <h3 className="font-jakarta font-semibold text-[20px] sm:text-[22px] lg:text-[24px] leading-[120%] text-gray-900 text-center mb-2 transition-colors duration-300 group-hover:text-white">
          {title}
        </h3>

        {/* 🔹 Text */}
        <p className="font-jakarta font-normal text-[14px] sm:text-[15px] lg:text-[16px] leading-[140%] text-gray-600 text-center transition-colors duration-300 group-hover:text-white">
          {text}
        </p>
      </div>
    </div>
  );
}
