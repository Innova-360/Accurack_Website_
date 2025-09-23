"use client";
import { useState } from "react";
import Image from "next/image";

export default function Img({
  src,
  className = "",
  fallback = "", 
  width,
  height,
  alt = ""
  
}) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      src={imgSrc || fallback}
      width={width}
      height={height}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => setImgSrc(fallback)} 
    />
  );
}
