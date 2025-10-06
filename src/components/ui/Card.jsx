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
  iconGlow = false, // 🔹 New prop
}) {
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
