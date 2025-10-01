"use client";

import { useState } from "react";
import Image from "next/image";

export default function ForecastingSection() {
  const [videoUrl, setVideoUrl] = useState(null);

  const videos = [
    {
      id: 1,
      img: "/Images/Homeassests/Forecastingsection/Laptop.png",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      hover: "group-hover:-rotate-6 group-hover:scale-110", // tilt-left
    },
    {
      id: 2,
      img: "/Images/Homeassests/Forecastingsection/Truck.png",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      hover: "group-hover:-rotate-6 group-hover:scale-110", // tilt-left
    },
    {
      id: 3,
      img: "/Images/Homeassests/Forecastingsection/Tech.png",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      hover: "group-hover:rotate-6 group-hover:scale-110", // tilt-right
    },
  ];

  return (
    <section className="w-full bg-[#EFEFEF] flex flex-col items-center justify-center py-16 px-4 sm:px-8">
      <div className="max-w-[1284px] w-full flex flex-col items-center text-center">
        {/* 🔹 Features Tag */}
        <span className="inline-flex items-center justify-center border border-[#18BDA0] text-[#18BDA0] font-lora font-medium text-[16px] leading-[100%] px-4 py-1 rounded-[7px] mb-6">
          Features
        </span>

        {/* 🔹 Heading */}
        <h2
          style={{ fontFamily: "'Lora', serif" }}
          className="font-lora font-medium text-[32px] sm:text-[40px] lg:text-[48px] leading-[100%] text-[#070709] text-center mb-4"
        >
          AI-Driven Demand Forecasting for <br /> Smarter Inventory Management
        </h2>

        {/* 🔹 Paragraph */}
        <p className="text-[#070709] font-inter font-normal text-[16px] leading-[24px] text-center max-w-4xl mb-12">
          Discover why businesses partner with us to overcome challenges and
          fuel growth. From streamlining inventory to <br /> expanding into new
          markets, these success stories show how Cin7 helps companies reach new
          heights.
        </p>

        {/* 🔹 3 Image Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full overflow-hidden rounded-[52px]">
          {videos.map((v) => (
            <div
              key={v.id}
              className="relative w-full h-[359px] group cursor-pointer overflow-hidden"
              onClick={() => setVideoUrl(v.video)}
            >
              {/* Background Image */}
              <Image
                src={v.img}
                alt={`Forecasting ${v.id}`}
                fill
                className={`object-cover transition-transform duration-300 ease-in-out ${v.hover}`}
              />

              {/* Hover Overlay (color) */}
              <div className="absolute inset-0 bg-[#0BBB9C] opacity-0 group-hover:opacity-70 transition-opacity duration-300 ease-in-out"></div>

              {/* Video Icon with smooth scale */}
              {/* Video Icon */}
              <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out group-hover:scale-100 group-hover:opacity-100 scale-50 opacity-0">
                <Image
                  src="/Images/Homeassests/Forecastingsection/Video.png" // 👈 apna icon path replace karo
                  alt="Play Video"
                  width={118}
                  height={118}
                  className="opacity-70"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🔹 Video Modal */}
      {videoUrl && (
        <div className="fixed inset-0  backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg w-full max-w-3xl relative">
            <button
              className="absolute top-2 right-2 text-black text-2xl font-bold"
              onClick={() => setVideoUrl(null)}
            >
              ✕
            </button>
            <iframe
              width="100%"
              height="500"
              src={videoUrl}
              title="Video Player"
              frameBorder="0"
              loading="lazy" // ✅ Lazy load
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}
