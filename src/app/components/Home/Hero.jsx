"use client";

import Button from "../Button/Button";
import Img from "../Image/Image";

export default function HeroSection() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[100px] py-12 lg:py-20 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        
        {/* Left Side - Text */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 leading-snug font-plus-jakarta-sans">
            AccuRack: Every Product, every sale, every success – we’re all connected
          </h1>

          <p className="mt-6 text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed max-w-[600px] mx-auto lg:mx-0">
            Say goodbye to stockouts and errors. AccuRack uses real-time AI to
            streamline inventory, sales, and logistics, giving you total control –
            every move, order, and sale connected.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
            <Button href="/demo" children="Book a Demo" />
            <Button href="/pricing" children="See Pricing" className="bg-gray-200 text-gray-900 hover:bg-gray-300" />
          </div>
        </div>

        {/* Right Side - Image with Left Border */}
        <div className="flex-1 relative w-full flex justify-center lg:justify-end">
          <div className="relative">
            {/* Left Border Line */}
            <div className="absolute -left-6 top-0 bottom-0 w-[2px] bg-gray-300 hidden lg:block"></div>
            
            {/* Image Component */}
            <Img
              src="/Images/Hero/hero-img.png"
              alt="Hero Section"
              width={500}
              height={400}
              className="rounded-lg object-cover"
              fallback="/Images/fallback.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
