"use client";

import Image from "next/image";

export function BackgroundVector({ children }) {
  return (
    <div className="md:h-[500vh] lg:h-[490vh] relative">
      {/* Background Layer - Lowest */}
      <div className="absolute w-full h-full pointer-events-none">
        {/* Main Background with Mask */}
        <div
          style={{
            WebkitMaskImage: "url('/Images/Homeassests/HomeImages/Vector.png')",
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskSize: "cover",
            WebkitMaskPosition: "top center",
            maskImage: "url('/Images/Homeassests/HomeImages/Vector.png')",
            maskRepeat: "no-repeat",
            maskSize: "cover",
            maskPosition: "top center",
            background:
              "linear-gradient(180deg, #97D2DD 0%, #C8ECF3 50%, #6AC9DA 100%)",
          }}
          className="absolute inset-0 w-full h-full"
        />

        {/* TOP Shapes */}
        <div className="absolute top-[9%] left-[36%] w-[280px] h-[420px] sm:w-[400px] sm:h-[600px] md:w-[520px] md:h-[780px] lg:w-[645px] lg:h-[986px] opacity-30">
          <Shape src="/Images/Homeassests/HomeImages/Vector1.png" />
        </div>

        <div className="absolute top-[19%] left-[25%] w-[200px] h-[350px] sm:w-[320px] sm:h-[480px] md:w-[420px] md:h-[580px] lg:w-[500px] lg:h-[642px] opacity-25">
          <Shape src="/Images/Homeassests/HomeImages/Vector2.png" />
        </div>

        <div className="absolute top-[22%] left-[16%] w-[110px] h-[400px] sm:w-[200px] sm:h-[520px] md:w-[300px] md:h-[600px] lg:w-[240px] lg:h-[742px] opacity-25">
          <Shape src="/Images/Homeassests/HomeImages/Vector3.png" />
        </div>

        {/* BOTTOM Shapes */}
        <div className="absolute bottom-[5%] right-[16%] w-[300px] h-[520px] sm:w-[400px] sm:h-[700px] md:w-[520px] md:h-[850px] lg:w-[645px] lg:h-[986px] opacity-30">
          <Shape src="/Images/Homeassests/HomeImages/Vector1.png" />
        </div>

        <div className="absolute bottom-[6%] right-[37%] w-[220px] h-[400px] sm:w-[320px] sm:h-[520px] md:w-[420px] md:h-[620px] lg:w-[500px] lg:h-[642px] opacity-25">
          <Shape src="/Images/Homeassests/HomeImages/Vector2.png" />
        </div>

        <div className="absolute bottom-[1%] right-[58%] w-[120px] h-[400px] sm:w-[180px] sm:h-[520px] md:w-[240px] md:h-[620px] lg:w-[200px] lg:h-[742px] opacity-25">
          <Shape src="/Images/Homeassests/HomeImages/Vector3.png" />
        </div>

        {/* Logo */}
        <div
          className="
            absolute
            bottom-0
            sm:top-16 sm:bottom-auto
            left-1/2 -translate-x-1/2
            lg:top-[80%]
            lg:right-[41%] lg:left-auto lg:translate-x-0
            w-[100px] sm:w-[160px] md:w-[200px] lg:w-[240px]
            h-[300px] sm:h-[450px] md:h-[550px] lg:h-[702px]
          "
        >
          <Image
            src="/Images/Homeassests/HomeImages/info-logo.png"
            alt="Top Logo"
            width={500}
            height={742}
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Content Layer - Always on Top */}
      <div className="relative">{children}</div>
    </div>
  );
}

function Shape({ src }) {
  return (
    <div
      className="relative w-full h-full blur-[2px]"
      style={{ filter: "brightness(0) invert(1)" }}
    >
      <Image
        src={src}
        alt="Shape"
        fill
        className="w-full h-full object-contain"
      />
    </div>
  );
}
