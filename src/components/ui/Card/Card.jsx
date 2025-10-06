"use client";

import Image from "next/image";
import clsx from "clsx";

export default function Card({
  icon,
  title,
  text,
  extraIcon,
  extraText,
  bottomIcon,
  className,          // 🔹 main wrapper styling
  contentClass,       // 🔹 inner content box styling
  titleClass,         // 🔹 title styling
  textClass,          // 🔹 paragraph styling
  extraClass,         // 🔹 extra icon + text styling
  bottomClass,        // 🔹 bottom icon styling
  iconWrapperClass,   // 🔹 wrapper around icon (e.g. rounded bg)
  iconWidth = 58,     // 🔹 default width (overridable)
  iconHeight = 58,    // 🔹 default height (overridable)
  iconGlow = false,
  variant = 'dark',
  rounded = false
}) {
  // Base styles per variant
  const variantStyles = {
    dark: {
      wrapper:
        "w-full h-auto min-h-[327px] bg-white/5 backdrop-blur-md rounded-[20px] p-6 flex flex-col items-start text-left border border-white/15",
      content: "flex flex-col items-start text-left",
      title:
        "font-jakarta font-body text-[20px] leading-[120%] text-white mt-6 mb-4",
      text:
        "font-jakarta font-body text-[16px] leading-[140%] text-white max-w-[350px]",
      iconWrapper:
        "w-[63.23px] h-[58px] rounded-[158.08px] bg-white/10 flex items-center justify-center p-[12.65px] mb-2",
    },
    glow: {
      wrapper:
        "text-primary bg-white rounded-3xl p-2 py-6 border border-primary-bright shadow-[0px_11px_0px_0px_rgba(0,_0,_0,_0.1)] transition-all duration-300",
      content: "flex flex-col items-center text-center",
      title: "font-semibold text-xl text-primary mt-4",
      text: "text-sm text-gray-500 leading-6 mt-2",
    },
    classic: {
      wrapper:
        "p-6 border border-gray-100 shadow-sm rounded-2xl bg-cardbg",
      content: "flex flex-col",
      title: "font-medium font-body text-[24px] leading-[32px] text-gray-900",
      text: "text-[16px] font-body leading-[24px] text-gray-500",
      iconWrapper:
        "w-[32px] h-[32px] rounded-full border border-line flex items-center justify-center",
    },
    simple: {
      wrapper: "p-4 border border-gray-300 rounded-2xl",
      content: "flex flex-col",
      title: "font-medium text-2xl",
      text: "font-normal text-md text-gray-600 mt-2",
      iconWrapper: rounded ? "*:rounded-2xl bg-primary rounded-2xl" : "*:w-full rounded-xl *:rounded-xl",
    },
  };

  const v = variantStyles[variant];

  return (
    <div className={clsx("rounded-[20px] overflow-hidden", className)}>
      <div className={clsx("flex flex-col h-full", contentClass)}>


        {icon && (
          <div
            className={clsx(
              "relative flex items-center justify-center mb-4",
              iconWrapperClass
            )}
          >
            {/* 🔹 Conditional Glow Behind Icon */}
            {iconGlow && (
              <div className="absolute inset-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-[#00B6BC]/30 blur-xl" />
            )}

            {/* 🔹 Icon (handles both string src and JSX icon) */}
            {typeof icon === "string" ? (
              <Image
                src={icon}
                alt={title || "icon"}
                width={iconWidth}
                height={iconHeight}
                className="relative object-contain z-10"
              />
            ) : (
              <div className="relative z-10">{icon}</div>
            )}
          </div>
        )}

        {/* 🔹 Title */}
        {title && (
          <h3 className={clsx("font-semibold text-lg", titleClass)}>
            {title}
          </h3>
        )}

        {/* 🔹 Text */}
        {text && (
          <p className={clsx("mt-2 text-sm leading-6", textClass)}>
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
            />
            <span>{extraText}</span>
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
            />
          </div>
        )}
      </div>
    </div>
  );
}
