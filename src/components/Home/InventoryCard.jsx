"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function InventoryCard({
  title,
  description,
  imageSrc,
  className,
  index = 0,
}) {
  console.log(imageSrc);
  return (
    <motion.article
      initial={{ y: 0, opacity: 0 }}
      whileInView={{ y: -10, opacity: 1 }} // 🔹 slight slide when visible
      viewport={{ once: true, amount: 0.3 }} // triggers only when 30% is visible
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 20,
        delay: index * 0.2 + 0.5, // 🔹 small delay per card
      }}
      whileHover={{ y: -14 }} // still hover effect
      className={cn(
        "rounded-[22px] border shadow-md mt-10 border-black/5 bg-white/90 p-5 flex flex-col h-[380px]",
        className
      )}
      aria-label={title}
    >
      {/* Image section */}
      <div className="overflow-hidden rounded-[18px] h-[230px] flex-shrink-0">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={`${title} industry`}
          width={560}
          height={380}
          className="h-full w-full object-cover"
          priority={index < 3}
        />
      </div>

      {/* Text section */}
      <div className="flex flex-col flex-1 mt-4">
        <h3 className="text-lg font-semibold font-body text-foreground">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-6 font-body text-muted-foreground line-clamp-3">
          {description}
        </p>
      </div>
    </motion.article>
  );
}
