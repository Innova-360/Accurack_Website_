"use client";

import Image from "next/image";

export default function LeadingSection() {
  const logos = [
    "/Images/Dropdownassests/Partners/PartnersDirectory/Logo1.png",
    "/Images/Dropdownassests/Partners/PartnersDirectory/Logo2.png",
    "/Images/Dropdownassests/Partners/PartnersDirectory/Logo3.png",
    "/Images/Dropdownassests/Partners/PartnersDirectory/Logo4.png",
    "/Images/Dropdownassests/Partners/PartnersDirectory/Logo5.png",
    "/Images/Dropdownassests/Partners/PartnersDirectory/Logo6.png",
    "/Images/Dropdownassests/Partners/PartnersDirectory/Logo7.png",
  ];

  return (
    <section
      className="w-full max-w-[1440px] mx-auto flex flex-col items-center justify-center bg-gradient-to-b from-bggradient1 to-bgpic2
                 py-[50px] px-[120px] gap-[80px] text-center"
    >
      <h2 className="font-heading font-medium text-[34px] sm:text-[48px] leading-[100%] text-white max-w-[922px] mx-auto text-center">
        <span className="block sm:hidden">
          Trusted by <br /> Leading SMBs
        </span>
        <span className="hidden sm:inline">Trusted by Leading SMBs</span>
      </h2>

      {/* ✅ Logos Row */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-y-10 sm:gap-y-12 lg:gap-y-0 gap-x-8 sm:gap-x-12 lg:gap-x-20 justify-items-center items-center w-full">
        {logos.map((logo, idx) => (
          <div key={idx} className="flex justify-center items-center">
            <Image
              src={logo}
              alt={`logo-${idx + 1}`}
              width={120}
              height={60}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
