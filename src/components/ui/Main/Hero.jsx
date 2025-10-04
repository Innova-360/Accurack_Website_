"use client";

import Img from "../../ui/Image/Image";
import Button from "../../ui/Button/Button";

export default function Section({
  // Content Props
  badgeText,
  heading,
  description,
  primaryBtnText,
  primaryBtnLink,
  secondaryBtnText,
  secondaryBtnLink,
  imageSrc,
  imageAlt,

  // Styling Props
  bgColor,
  textColor,
  descColor,
  badgeColor,
  headingSize,
  descSize,
  containerPadding,
  reverse,
}) {
  return (
    <section className={`w-full mt-16 mb-10 ${bgColor || ""}`}>
      <div
        className={`max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center 
          ${containerPadding || ""} 
          ${reverse ? "lg:flex-row-reverse flex flex-col-reverse lg:flex-row" : ""}`}
      >
        {/* Left Side */}
        <div className="flex flex-col justify-center text-center lg:text-left lg:items-start items-center">
          {/* Badge */}
          {badgeText && (
            <span
              className={`inline-block rounded-md border -mt-6 px-4 py-1 mb-3 font-heading text-[16px] font-medium 
              ${badgeColor || ""}`}
            >
              {badgeText}
            </span>
          )}

          {/* Heading */}
          {heading && (
            <h1
              className={`font-title font-bold lg:mb-12 tracking-wider max-w-[663px] 
              ${textColor || ""} ${headingSize || ""}`}
            >
              {heading}
            </h1>
          )}

          {/* Description */}
          {description && (
            <p
              className={`mt-6 max-w-[530px] -lg:mt-10 font-body font-normal 
              ${descSize || ""} ${descColor || ""}`}
            >
              {description}
            </p>
          )}

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start items-center">
            {/* Primary Button */}
            {primaryBtnText && (
              <Button
                href={primaryBtnLink}
                className="group relative w-[180px] sm:w-[193px] h-[48px] sm:h-[51px] px-[20px] py-[12px] rounded-[44px] 
                           font-body font-bold text-[15px] sm:text-[16px] text-background 
                           bg-gradient-to-r from-gradient-primary-1 to-gradient-primary-2 
                           flex items-center justify-center overflow-hidden"
              >
                <span className="mr-7 lg:transition-transform lg:duration-700 lg:ease-in-out lg:group-hover:translate-x-6">
                  {primaryBtnText}
                </span>

                {/* Arrow container */}
                <span
                  className="absolute right-[10px] top-1/2 -translate-y-1/2 flex items-center justify-center 
                             w-[40px] sm:w-[44px] h-[40px] sm:h-[44px] rounded-full bg-background
                             lg:transition-all lg:duration-700 lg:ease-in-out 
                             lg:group-hover:-translate-x-[130px] lg:group-hover:rotate-180"
                >
                  {/* Mobile Arrow (static right-facing) */}
                  <span className="block lg:hidden w-[22px] sm:w-[26px] h-[20px] sm:h-[24px] bg-[url('/Images/Navassests/ReArrowRight.png')] bg-no-repeat bg-center"></span>

                  {/* Desktop Arrow (animated one) */}
                  <span className="hidden lg:block w-[22px] sm:w-[26px] h-[20px] sm:h-[24px] bg-[url('/Images/Navassests/ReArrow.png')] bg-no-repeat bg-center"></span>
                </span>
              </Button>
            )}

            {/* Secondary Button */}
            {secondaryBtnText && (
              <Button
                href={secondaryBtnLink}
                className="w-[180px] sm:w-[193px] h-[48px] sm:h-[51px] px-[20px] py-[12px] rounded-[44px] 
                           font-body font-bold text-[15px] sm:text-[16px] text-gradient-primary-2 
                           border border-gradient-primary-2 bg-background flex items-center justify-center"
              >
                {secondaryBtnText}
              </Button>
            )}
          </div>
        </div>

        {/* Right Side Image */}
        {imageSrc && (
          <div className="relative flex justify-center items-center h-full">
            <div className="relative w-full max-w-[700px]">
              {/* Decorative borders */}
              <div className="absolute inset-0 rounded-[30px] sm:rounded-[42px] border-[3px] border-teal-400 rotate-[4deg] z-0"></div>
              <div className="absolute inset-0 rounded-[30px] sm:rounded-[42px] border-[2px] border-teal-400/60 rotate-[7deg] z-0"></div>
              <div className="absolute inset-0 rounded-[30px] sm:rounded-[42px] border-[2px] border-teal-400/30 rotate-[10deg] z-0"></div>

              {/* Image */}
              <Img
                src={imageSrc}
                alt={imageAlt}
                width={709}
                height={473}
                className="relative w-full h-auto object-cover rounded-[30px] sm:rounded-[42px] border-[4px] sm:border-[5px] border-primary z-10"
                fallback="/Images/Homeassests/Heroimage/back.jpg"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
