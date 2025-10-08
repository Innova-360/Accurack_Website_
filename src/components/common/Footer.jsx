"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <>
      <footer className="w-full flex justify-center px-4 py-10 relative z-10">
        <div
          className="
            w-[1312px] max-w-[95%] bg-primary rounded-[38px] 
            px-6 md:px-12 py-12
            md:rounded-[38px] 
            md:w-[1312px] md:h-auto 
            sm:w-[370px] sm:h-[873px] sm:rounded-[25px] sm:mt-[55px] sm:ml-[17px]
          "
        >
          {/* Top Section */}
          <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-20">
            {/* Left Section */}
            <div className="flex flex-col gap-4 max-w-[442px]">
              {/* Logo */}
              <Image
                src="/Images/Footerassests/Accurack.png"
                alt="Accurack"
                width={238}
                height={69}
                quality={100}
                priority
                className="object-contain"
              />
              {/* Text */}
              <p className="text-Footertext font-text text-[16px] leading-[100%] sm:w-[306px] sm:h-[61px]">
                Accurack is the unified AI platform that streamlines inventory,
                sales, and logistics for growing businesses.
              </p>
              {/* Social Icons */}
              <div className="flex items-center gap-4">
                <Link href="#">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:opacity-80 transition">
                    <FaFacebookF className="text-primary text-xl" />
                  </div>
                </Link>
                <Link href="#">
                  <div className="w-7 h-7 bg-white flex items-center justify-center hover:opacity-80 transition">
                    <FaLinkedinIn className="text-primary text-xl" />
                  </div>
                </Link>
                <Link href="#">
                  <div className="w-8 h-13 flex items-center justify-center hover:opacity-80 transition">
                    <FaXTwitter className="text-white text-xl h-15" />
                  </div>
                </Link>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex flex-col sm:flex-row sm:gap-12  md:gap-20 text-Footertext">
             {/* Right Section */}
<div className="grid grid-cols-2 md:flex md:flex-row md:gap-20 text-Footertext gap-x-10 gap-y-10 sm:px-2">
  {/* Navigation */}
  <div className="flex flex-col gap-7 sm:ml-2">
    <h3 className="text-[20px] font-text">Navigation</h3>
    <div className="flex flex-col gap-7 font-text text-[16px]">
      <Link href="#">About Us</Link>
      <Link href="#">Solutions</Link>
      <Link href="#">Features</Link>
      <Link href="#">Blog</Link>
      <Link href="#">Resources</Link>
    </div>
  </div>

  {/* Support & Legals */}
  <div className="flex flex-col gap-7  sm:ml-4">
    <h3 className="text-[18px] whitespace-nowrap font-text">
      Support & Legals
    </h3>
    <div className="flex flex-col gap-7 font-text text-[16px]">
      <Link href="#">Support</Link>
      <Link href="#">Legal</Link>
    </div>
  </div>

  {/* Contact */}
  <div className="flex flex-col gap-7 col-span-2 md:col-span-1 font-text sm:ml-2">
    <h3 className="text-[20px]">Contact</h3>
    <div className="flex flex-col gap-7 text-[16px]">
      <p>+33 7 71 74 73 27</p>
      <p>contact@accurack.com</p>
    </div>
  </div>
</div>

            </div>
          </div>

          {/* Divider */}
          <div className="w-full border-t-2 border-footerline/30 mt-12 mb-6" />

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Left Text */}
            <p className="text-Footertext text-[16px] font-text leading-[100%] sm:text-center">
              2025 Accurack, All rights reserved.
            </p>
            {/* Right Links */}
            <div className="flex gap-8 text-[16px] underline text-Footertext font-text leading-[100%] sm:justify-center sm:flex-wrap">
              <Link href="/Privacy">Privacy Policy</Link>
              <Link href="/Terms">Terms of Services</Link>
              <Link href="#">Cookie Settings</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* ✅ Image Below Footer with Responsive Sizing */}
      <div className="w-full flex justify-center relative">
        <Image
          src="/Images/Footerassests/FooterLogo.png"
          alt="Footer Decoration"
          width={1440}
          height={1500}
          quality={100}
          className="object-cover -mt-10"
        />
      </div>
    </>
  );
}


