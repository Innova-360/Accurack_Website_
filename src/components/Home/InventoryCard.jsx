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
  return (
    <motion.article
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        type: "spring",
        stiffness: 180,
        damping: 20,
        delay: index * 0.15 + 0.3,
      }}
      whileHover={{ y: -8 }}
      className={cn(
        "group relative flex flex-col rounded-2xl border border-black/5 bg-white/95 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden h-[400px] p-5",
        className
      )}
      aria-label={title}
    >
      {/* Image */}
      <div className="relative h-[200px] w-full overflow-hidden rounded-xl">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          priority={index < 3}
        />
      </div>

      {/* Text content */}
      <div className="flex flex-col flex-1 mt-4">
        <h3 className="text-lg font-body font-semibold text-gray-900">{title}</h3>
        <p className="mt-2 text-sm font-body text-gray-600 line-clamp-3 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.article>
  );
}
