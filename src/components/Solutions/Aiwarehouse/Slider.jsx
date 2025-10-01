"use client";

import Img from "../../Image/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarSolid, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";

export default function SurSection() {
  const brandColor = "#02404B";
  const sectionBg = "#F0F3F6";

  const RatingStars = () => (
    <div className="flex gap-1 justify-center lg:justify-start">
      {[...Array(4)].map((_, i) => (
        <FontAwesomeIcon
          key={i}
          icon={faStarSolid}
          className="w-4 h-4 sm:w-5 sm:h-5"
          style={{ color: brandColor }}
        />
      ))}
      <FontAwesomeIcon
        icon={faStarHalfStroke}
        className="w-4 h-4 sm:w-5 sm:h-5"
        style={{ color: brandColor }}
      />
    </div>
  );

  // ✅ Utility: PNG ko brandColor se mask karo
  const ColoredIcon = ({ src, alt, size = 32 }) => (
    <div
      className="flex items-center justify-center"
      style={{
        width: size,
        height: size,
        WebkitMaskImage: `url(${src})`,
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        WebkitMaskSize: "contain",
        backgroundColor: brandColor, // fill with brand color
      }}
      aria-label={alt}
    />
  );

  const Sections = () => (
    <>
      {/* 1️⃣ GetApp */}
      <div className="flex flex-col items-center mt-4 lg:items-start justify-center flex-1 min-w-[180px] sm:min-w-[200px]">
        <div className="flex items-center gap-2">
          <ColoredIcon src="/Images/Dropdownassests/Solutions/InventorySolutions/Get.png" alt="GetApp" size={32} />
          <span className="text-base sm:text-lg font-semibold" style={{ color: brandColor }}>
            GetApp
          </span>
        </div>
        <div className="mt-1 text-center lg:text-left">
          <RatingStars />
          <p className="mt-1 text-xs sm:text-sm font-medium" style={{ color: brandColor }}>
            4.2 (940 reviews)
          </p>
        </div>
      </div>

      {/* 2️⃣ Software Advice (icon barabar me) */}
      <div className="flex flex-col items-center lg:items-start justify-center flex-1 min-w-[180px] sm:min-w-[200px]">
        <div className="flex items-center gap-2">
          <span className="text-base sm:text-lg font-semibold" style={{ color: brandColor }}>
            Software Advice
          </span>
          <ColoredIcon src="/Images/Dropdownassests/Solutions/InventorySolutions/Msg.png" alt="Advice" size={32} />
        </div>
        <div className="mt-2 text-center lg:text-left w-full">
          <RatingStars />
          <p className="mt-1 text-xs sm:text-sm font-medium" style={{ color: brandColor }}>
            4.2 (941 reviews)
          </p>
        </div>
      </div>

      {/* 3️⃣ Arrow */}
      <div className="flex flex-col items-center justify-center flex-1 min-w-[180px] sm:min-w-[200px]">
        <ColoredIcon src="/Images/Dropdownassests/Solutions/InventorySolutions/Arrow.png" alt="Arrow" size={36} />
        <div className="mt-1 text-center lg:text-left">
          <RatingStars />
          <p className="mt-1 text-xs sm:text-sm font-medium" style={{ color: brandColor }}>
            4.0 (246 reviews)
          </p>
        </div>
      </div>

      {/* 4️⃣ G2 */}
      <div className="flex flex-col items-center justify-center flex-1 min-w-[180px] sm:min-w-[200px]">
        <ColoredIcon src="/Images/Dropdownassests/Solutions/InventorySolutions/Next.PNG" alt="G2" size={36} />
        <div className="mt-1 text-center lg:text-left">
          <RatingStars />
          <p className="mt-1 text-xs sm:text-sm font-medium" style={{ color: brandColor }}>
            4.2 (941 reviews)
          </p>
        </div>
      </div>
    </>
  );

  return (
    <section
      className="relative overflow-hidden py-2"
      style={{ backgroundColor: sectionBg, width: "100%" }}
    >
      <div className="w-full max-w-[1440px] h-[124px] mx-auto flex items-center">
        {/* ✅ Slider Wrapper */}
        <div className="relative w-full h-full overflow-hidden">
          <div className="flex animate-marquee w-max">
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
