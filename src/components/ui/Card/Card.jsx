"use client";

import Image from "next/image";
import clsx from "clsx";

export default function Card({
  icon,
  heading,
  title,
  text,
  extraIcon,
  extraText,
  bottomIcon,
  className,
  contentClass,
  titleClass,
  textClass,
  extraClass,
  bottomClass,
  iconWrapperClass,
  iconWidth = 58,
  iconHeight = 58,
  iconGlow = false,
  variant = "dark",
  iconType = "1",
  rounded = false,
}) {
  const variantStyles = {
    dark: {
      wrapper:
        "w-full h-auto min-h-[327px] bg-white/5 backdrop-blur-md rounded-[20px] p-6 flex flex-col items-start text-left border border-white/15",
      content: "flex flex-col items-start text-left",
      title: "font-heading text-[20px] leading-[120%] text-white mt-6 mb-4",
      text: "font-body text-[16px] leading-[140%] text-white max-w-[350px]",
      iconWrapper:
        "w-[63.23px] h-[58px] rounded-[158.08px] bg-white/10 flex items-center justify-center p-[12.65px] mb-2",
    },
    glow: {
      wrapper:
        "text-primary bg-white rounded-3xl p-2 py-6 border border-primary-bright shadow-[0px_11px_0px_0px_rgba(0,_0,_0,_0.1)] transition-all duration-300",
      content: "flex flex-col items-center text-center",
      title: "font-heading font-semibold text-xl text-primary mt-4",
      text: "font-body text-sm text-gray-500 leading-6 mt-2",
    },
    classic: {
      wrapper: "p-6 border border-gray-100 shadow-sm rounded-2xl bg-cardbg",
      content: "flex flex-col",
      title:
        "font-heading font-medium text-[24px] leading-[32px] mb-3 text-gray-900",
      text: "font-body text-[16px] leading-[24px] text-gray-500",
      iconWrapper:
        "w-[32px] h-[32px] rounded-full border border-line flex items-center justify-center",
      iconWrapper2: "w-[32px] h-[32px] flex items-center justify-center",
    },
    simple: {
      wrapper: "p-4 border border-gray-300 rounded-2xl",
      content: "flex flex-col",
      title: "font-heading font-medium text-2xl text-text",
      text: "font-body font-normal text-md text-light mt-2",
      iconWrapper: clsx(
        "flex items-center justify-center",
        rounded ? "bg-primary rounded-2xl p-2" : "rounded-xl"
      ),
    },
  };

  const v = variantStyles[variant];

  return (
    <div className={clsx(v.wrapper, className)}>
      <div className={clsx(v.content, contentClass)}>
        {/* ✅ Heading (optional, replaces icon) */}
        {heading ? (
          <h3
            className={clsx(
              "font-heading text-[22px] font-semibold mb-4",
              variant === "dark" ? "text-white" : "text-line"
            )}
          >
            {heading}
          </h3>
        ) : (
          icon && (
            <div
              className={clsx(
                "relative flex items-center justify-center mb-4",
                variant === "classic"
                  ? iconType === "2"
                    ? v.iconWrapper2
                    : v.iconWrapper
                  : v.iconWrapper,
                iconWrapperClass
              )}
            >
              {/* ✅ Optional Glow */}
              {iconGlow && (
                <div className="absolute inset-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-[#00B6BC]/30 blur-xl" />
              )}

              {/* ✅ Image Rendering Fixed */}
              {typeof icon === "string" ? (
                <div className="relative z-10 w-[58px] h-[58px] flex items-center justify-center">
                  <Image
                    src={icon}
                    alt={title || "icon"}
                    width={iconWidth}
                    height={iconHeight}
                    className="object-contain"
                    unoptimized={icon.startsWith("http")}
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>
              ) : (
                <div className="relative z-10 flex items-center justify-center w-[58px] h-[58px]">
                  {icon}
                </div>
              )}
            </div>
          )
        )}

        {/* 🔹 Title */}
        {title && (
          <h3 className={clsx(v.title, "font-heading", titleClass)}>{title}</h3>
        )}

        {/* 🔹 Text */}
        {text && (
          <p
            className={clsx(
              v.text,
              "font-body sm:text-sm lg:text-base",
              textClass
            )}
          >
            {text}
          </p>
        )}

        {/* 🔹 Extra Icon + Text */}
        {extraIcon && (
          <div className={clsx("flex items-center gap-2 mt-4", extraClass)}>
            <Image
              src={extraIcon}
              alt="extra"
              width={20}
              height={20}
              className="object-contain"
              unoptimized={extraIcon.startsWith("http")}
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
            <span className="font-body text-sm text-gray-400">{extraText}</span>
          </div>
        )}

        {/* 🔹 Bottom Icon */}
        {bottomIcon && (
          <div className={clsx("mt-auto", bottomClass)}>
            <Image
              src={bottomIcon}
              alt="bottom"
              width={24}
              height={24}
              className="object-contain"
              unoptimized={bottomIcon.startsWith("http")}
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
