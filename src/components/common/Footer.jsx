"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6"; // ✅ FontAwesome icons

export default function Footer() {
  return (
    <footer className="w-full flex justify-center px-4 py-10">
      <div className="w-[1312px] max-w-[95%] bg-[#02404B] rounded-[38px] px-6 md:px-12 py-12">
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
            <p className="text-[#EFEFEF] text-[16px] leading-[100%] font-inter">
              Accurack is the unified AI platform that streamlines inventory,
              sales, and logistics for growing businesses.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <Link href="#">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:opacity-80 transition">
                  <FaFacebookF className="text-[#02404B] text-xl" />
                </div>
              </Link>
              <Link href="#">
                <div className="w-7 h-7 bg-white flex items-center justify-center hover:opacity-80 transition">
                  <FaLinkedinIn className="text-[#02404B] text-xl" />
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
          <div className="flex flex-col sm:flex-row gap-12 sm:gap-20 text-[#EFEFEF]">
            {/* Navigation */}
            <div className="flex flex-col gap-7">
              <h3 className="text-[20px]">Navigation</h3>
              <div className="flex flex-col gap-7 text-[16px]">
                <Link href="#">About Us</Link>
                <Link href="#">Solutions</Link>
                <Link href="#">Features</Link>
                <Link href="#">Blog</Link>
                <Link href="#">Resources</Link>
              </div>
            </div>

            {/* Support & Legals */}
            <div className="flex flex-col gap-7">
              <h3 className="text-[20px]">Support & Legals</h3>
              <div className="flex flex-col gap-7 text-[16px]">
                <Link href="#">Support</Link>
                <Link href="#">Legal</Link>
              </div>
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-7">
              <h3 className="text-[20px]">Contact</h3>
              <div className="flex flex-col gap-7 text-[16px]">
                <p>+33 7 71 74 73 27</p>
                <p>contact@accurack.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full border-t-2 border-[#E7E5E4]/30 mt-12 mb-6" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Left Text */}
          <p className="text-[#EFEFEF] text-[16px]">
            2025 Accurack, All rights reserved.
          </p>
          {/* Right Links */}
          <div className="flex gap-8 text-[16px] underline text-[#EFEFEF]">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Services</Link>
            <Link href="#">Cookie Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
