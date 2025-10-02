"use client"

import Image from "next/image"

export function BackgroundVector({ children }) {
  return (
    <div className="md:h-[500vh] lg:h-[490vh] relative border">
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
            background: "linear-gradient(180deg, #97D2DD 0%, #C8ECF3 50%, #6AC9DA 100%)",
          }}
          className="absolute inset-0 w-full h-full"
        />

        {/* TOP Shapes */}
        <div className="absolute top-[9%] left-[36%] w-[645px] h-[986px] opacity-30">
          <Shape src="/Images/Homeassests/HomeImages/Vector1.png" w={645} h={986} />
        </div>
        <div className="absolute top-[19%] left-[25%] w-[500px] h-[642px] opacity-25">
          <Shape src="/Images/Homeassests/HomeImages/Vector2.png" w={500} h={742} />
        </div>
        <div className="absolute top-[22%] left-[19%] w-[240px] h-[742px] opacity-25">
          <Shape src="/Images/Homeassests/HomeImages/Vector3.png" w={500} h={742} />
        </div>

        {/* BOTTOM Shapes */}
        <div className="absolute bottom-[5%] right-[16%] w-[645px] h-[986px] opacity-30">
          <Shape src="/Images/Homeassests/HomeImages/Vector1.png" w={645} h={986} />
        </div>
        <div className="absolute bottom-[6%] right-[37%] w-[500px] h-[642px] opacity-25">
          <Shape src="/Images/Homeassests/HomeImages/Vector2.png" w={500} h={742} />
        </div>
        <div className="absolute bottom-[1%] right-[62%] w-[200px] h-[742px] opacity-25">
          <Shape src="/Images/Homeassests/HomeImages/Vector3.png" w={500} h={742} />
        </div>

        {/* Logo */}
        <div className="absolute bottom-0 right-[40%] w-[240px] h-[702px]">
          <Image
            src={"/Images/Homeassests/HomeImages/info-logo.png"}
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
  )
}

function Shape({ src, w, h }) {
  return (
    <div
      className="relative w-full h-full blur-[2px]"
      style={{ filter: "brightness(0) invert(1)" }}
    >
      <Image
        src={src}
        alt="Shape"
        width={w}
        height={h}
        className="w-full h-full object-contain"
      />
    </div>
  )
}