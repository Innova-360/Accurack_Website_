"use client";
import { useState } from "react";
import Image from "next/image";

export default function Img({
  src,
  className = "",
  fallback = "",
  width,
  height,
  alt = "",
}) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      src={imgSrc || fallback}
      width={width || 0}
      height={height || 0}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => setImgSrc(fallback)}
      // 👇 this line removes the Next.js warning
      style={{
        width: width && !height ? "auto" : undefined,
        height: height && !width ? "auto" : undefined,
      }}
    />
  );
}
