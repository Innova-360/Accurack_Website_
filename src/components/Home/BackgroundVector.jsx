"use client";

import Image from "next/image";

export function BackgroundVector({ children }) {
  return (
    <div className="relative w-full h-auto lg:pb-40 overflow-visible">
      {/* Background SVG */}
      <div className="absolute inset-0 -z-10 flex justify-center items-start pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1438 3638"
          preserveAspectRatio="none"
          className="w-full h-full min-h-[120vh] object-cover"
        >
          <path
            opacity="0.3"
            d="M585.298 37.1416C667.529 -11.6118 770.474 -11.6117 852.7 37.142L1312.91 310C1390.54 356.029 1438 438.625 1438 527.715L1438 3110.28C1438 3199.37 1390.54 3281.97 1312.91 3328L852.7 3600.86C770.474 3649.61 667.528 3649.61 585.298 3600.86L125.088 3328C47.4542 3281.97 0 3199.37 0 3110.28L0.000610352 527.715C0.000610352 438.625 47.4548 356.029 125.088 310L585.298 37.1416Z"
            fill="url(#paint0_linear_12_43529)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_12_43529"
              x1="719"
              y1="-271.969"
              x2="719"
              y2="2979.85"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#97D2DD">
                <animate
                  attributeName="offset"
                  values="0;1;0"
                  dur="6s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="0.5" stopColor="#C8ECF3" />
              <stop offset="1" stopColor="#6AC9DA" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Top Shape */}
      <div className="absolute top-[5%] left-1/2 -translate-x-1/2 w-[200px] h-[300px] sm:w-[320px] sm:h-[480px] md:w-[420px] md:h-[640px] lg:w-[540px] lg:h-[800px] opacity-30">
        <Shape src="/Images/Homeassests/HomeImages/Vector1.png" />
      </div>

      {/* Bottom Shape */}
      <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 w-[200px] h-[300px] sm:w-[320px] sm:h-[480px] md:w-[420px] md:h-[640px] lg:w-[540px] lg:h-[800px] opacity-30 rotate-180">
        <Shape src="/Images/Homeassests/HomeImages/Vector1.png" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col w-full">{children}</div>
    </div>
  );
}

function Shape({ src }) {
  return (
    <div
      className="relative w-full h-full blur-[2px]"
      style={{ filter: "brightness(0) invert(1)" }}
    >
      <Image src={src} alt="Shape" fill className="object-contain" />
    </div>
  );
}
