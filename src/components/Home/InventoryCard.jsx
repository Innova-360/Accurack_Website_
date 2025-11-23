"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function InventoryCard({ title, description, imageSrc, index = 0 }) {
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
      className="group relative flex flex-col rounded-2xl border border-black/5 bg-white/95 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden h-[400px] p-5"
    >
      <div className="relative h-[200px] w-full overflow-hidden rounded-xl">
        <Image
          fill
          src={imageSrc}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col flex-1 mt-4">
        <h3 className="text-lg font-heading font-semibold text-gray-900">
          {title}
        </h3>
        <p className="mt-2 text-sm font-body text-gray-600 line-clamp-3 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.article>
  );
}
