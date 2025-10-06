"use client";

import Image from "next/image";

export default function ImpactStory({
  bgImage,
  overlayColor = "bg-black/70",

  // content props
  topIcon,
  heading,
  subText,
  beforeTitle,
  beforeText,
  afterTitle,
  afterText,
  sixMonthTitle,
  sixMonthText,
  outcomeTitle,
  outcomeText,
  bottomLeftLogo,
  bottomLeftText,
  bottomRightIcon,
  circleImage,

  // custom class props
  sectionClass = "",
  headingClass = "",
  subTextClass = "",
  beforeClass = "",
  afterClass = "",
  sixMonthClass = "",
  outcomeClass = "",
  bottomRowClass = "",
  circleImageClass = "",
}) {
  return (
    <section
      className={`relative w-full text-background overflow-hidden ${sectionClass}`}
    >
      {/* 🔹 Background Image + Overlay */}
      <div className="absolute inset-0">
        <Image src={bgImage} alt="background" fill className="object-cover" />
        <div className={`absolute inset-0 ${overlayColor}`} />
      </div>

      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-16 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* 🔹 Left Content */}
        <div className="flex flex-col mb-[300px] sm:mb-[350px] md:mb-[400px] lg:mb-0">
          {/* top icon */}
          {topIcon && (
            <Image src={topIcon} alt="top icon" width={32} height={35} className="mb-6" />
          )}

          {/* main heading */}
          {heading && (
            <h2
              className={`font-heading font-medium text-[28px] sm:text-[36px] lg:text-[48px] leading-[130%] tracking-[-0.02em] text-background max-w-[712px] mb-6 ${headingClass}`}
            >
              {heading}
            </h2>
          )}

          {/* sub text */}
          {subText && (
            <p
              className={`font-body font-normal text-[16px] leading-[100%] text-light2/90 mb-8 ${subTextClass}`}
            >
              {subText}
            </p>
          )}

          {/* Before */}
          {beforeTitle && (
            <div className={beforeClass}>
              <h3 className="font-body font-semibold text-[18px] leading-[26px] text-background mb-2">
                {beforeTitle}
              </h3>
              <p className="font-body font-normal text-[16px] leading-[100%] text-background/87 mb-6">
                {beforeText}
              </p>
            </div>
          )}

          {/* After */}
          {afterTitle && (
            <div className={afterClass}>
              <h3 className="font-body font-semibold text-[18px] leading-[100%] text-background mb-2">
                {afterTitle}
              </h3>
              <p className="font-body font-normal text-[16px] leading-[100%] text-background/87 mb-6">
                {afterText}
              </p>
            </div>
          )}

          {/* Six months */}
          {sixMonthTitle && (
            <div className={sixMonthClass}>
              <h3 className="font-body font-semibold text-[18px] leading-[100%] text-background mb-2">
                {sixMonthTitle}
              </h3>
              <p className="font-body font-normal text-[16px] leading-[100%] text-background/87 mb-6">
                {sixMonthText}
              </p>
            </div>
          )}

          {/* Outcome */}
          {outcomeTitle && (
            <div className={outcomeClass}>
              <h3 className="font-body font-semibold text-[18px] leading-[100%] text-background mb-2">
                {outcomeTitle}
              </h3>
              <p className="font-body font-normal text-[16px] leading-[100%] text-background/87 mb-8">
                {outcomeText}
              </p>
            </div>
          )}

          {/* bottom row */}
          <div className={`flex items-center justify-between ${bottomRowClass}`}>
            {bottomLeftLogo && (
              <div className="flex items-center gap-4">
                <Image src={bottomLeftLogo} alt="logo" width={54} height={32} />
                <span className="font-body font-medium text-[18px] leading-[28px] text-background">
                  {bottomLeftText}
                </span>
              </div>
            )}

            {bottomRightIcon && (
              <Image src={bottomRightIcon} alt="right icon" width={32} height={35} />
            )}
          </div>
        </div>
      </div>

      {/* 🔹 Right Content (circle image in right corner clipped) */}
      {circleImage && (
        <div className="relative flex justify-end items-end">
          <div
            className={`absolute right-0 bottom-0 translate-x-1/8 translate-y-1/6 w-[400px] h-[400px] lg:w-[660px] lg:h-[660px] overflow-hidden rounded-full ${circleImageClass}`}
          >
            <Image src={circleImage} alt="Impact Story" fill className="object-cover" />
          </div>
        </div>
      )}
    </section>
  );
}









