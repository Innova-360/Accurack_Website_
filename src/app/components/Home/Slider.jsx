"use client";

import Img from "../Image/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarSolid, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";

export default function SurSection() {
  const starColor = "#0E3646";

  const RatingStars = () => (
    <div className="flex gap-1 justify-center lg:justify-start">
      {[...Array(4)].map((_, i) => (
        <FontAwesomeIcon
          key={i}
          icon={faStarSolid}
          className="w-5 h-5 sm:w-6 sm:h-6"
          style={{ color: starColor }}
        />
      ))}
      <FontAwesomeIcon
        icon={faStarHalfStroke}
        className="w-5 h-5 sm:w-6 sm:h-6"
        style={{ color: starColor }}
      />
    </div>
  );

  const Sections = () => (
    <>
      {/* 1️⃣ GetApp */}
      <div className="flex flex-col items-center lg:items-start justify-center flex-1 min-w-[180px] sm:min-w-[200px]">
        <div className="flex items-center gap-2">
          <Img src="/Images/sectionicons/Get.png" alt="GetApp" width={36} height={36} />
          <span className="text-base sm:text-lg font-semibold text-gray-900">GetApp</span>
        </div>
        <div className="mt-1 text-center lg:text-left">
          <RatingStars />
          <p className="mt-1 text-sm sm:text-base font-medium" style={{ color: starColor }}>
            4.2 (940 reviews)
          </p>
        </div>
      </div>

      {/* 2️⃣ Software Advice */}
      <div className="flex flex-col items-center lg:items-start justify-center flex-1 min-w-[180px] sm:min-w-[200px]">
        <div className="flex flex-col items-center lg:items-start">
          {/* Top row with Software + Icon */}
          <div className="flex items-center gap-2">
            <span className="text-base sm:text-lg font-semibold text-gray-900">Software</span>
            <Img src="/Images/sectionicons/Msg.png" alt="Advice" width={36} height={35} />
          </div>
          {/* Advice text on new line */}
          <span className="text-base sm:text-lg font-semibold text-gray-900 mt-1">Advice</span>
        </div>

        {/* ⭐ Ratings block - fixed spacing so it never cuts */}
        <div className="mt-2 text-center lg:text-left w-full">
          <RatingStars />
          <p className="mt-1 text-sm sm:text-base font-medium" style={{ color: starColor }}>
            4.2 (941 reviews)
          </p>
        </div>
      </div>

      {/* 3️⃣ Third */}
      <div className="flex flex-col items-center justify-center flex-1 min-w-[180px] sm:min-w-[200px]">
        <Img src="/Images/sectionicons/Arrow.PNG" alt="Third" width={40} height={40} />
        <div className="mt-1 text-center lg:text-left">
          <RatingStars />
          <p className="mt-1 text-sm sm:text-base font-medium" style={{ color: starColor }}>
            4.0 (246 reviews)
          </p>
        </div>
      </div>

      {/* 4️⃣ Fourth */}
      <div className="flex flex-col items-center justify-center flex-1 min-w-[180px] sm:min-w-[200px]">
        <Img src="/Images/sectionicons/Next.PNG" alt="Fourth" width={40} height={40} />
        <div className="mt-1 text-center lg:text-left">
          <RatingStars />
          <p className="mt-1 text-sm sm:text-base font-medium" style={{ color: starColor }}>
            4.2 (941 reviews)
          </p>
        </div>
      </div>
    </>
  );

  return (
    <section className="relative bg-white overflow-hidden py-2">
      {/* ⬇️ yaha sirf height fix hatayi hai */}
      <div className="w-full max-w-[1400px] mx-auto flex items-center">
        {/* ✅ Slider Wrapper */}
        <div className="relative w-full h-full overflow-hidden">
          <div className="flex animate-marquee w-max">
            {/* 🔁 Duplicate for infinite smooth scroll */}
            <div className="flex w-full sm:w-[1400px] justify-between px-4 sm:px-8">
              <Sections />
            </div>
            <div className="flex w-full sm:w-[1400px] justify-between px-4 sm:px-8">
              <Sections />
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Smooth Infinite Animation */}
      <style jsx>{`
        .animate-marquee {
          display: flex;
          animation: marquee 12s linear infinite;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
