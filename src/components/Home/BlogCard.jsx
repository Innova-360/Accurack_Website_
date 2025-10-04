"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"


export function BlogCard({ image, author, date, title, excerpt, slug, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group flex flex-col rounded-2xl bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md"
    >
      <Link href={`/blog/${slug}`} className="flex flex-col gap-6">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span className="font-medium">{author}</span>
            <time dateTime={date}>{date}</time>
          </div>

          <h3 className="text-xl font-semibold leading-snug text-[oklch(0.5_0.15_200)] transition-colors group-hover:text-[oklch(0.45_0.15_200)]">
            {title}
          </h3>

          <p className="leading-relaxed text-gray-600">{excerpt}</p>

          <div className="mt-2 flex items-center gap-2 text-[oklch(0.5_0.15_200)] font-medium">
            <span>Read More</span>
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}
