"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { BlogCard } from "./BlogCard"

const blogs = [
  {
    id: "1",
    slug: "barcode-inventory-system-small-businesses",
    image: "/Images/Homeassests/BlogSection/Blog-1.png",
    author: "Alex Martin",
    date: "26 Sept 2025",
    title: "Barcode Inventory System for Small Businesses: 5 Key Features",
    excerpt:
      "A barcode inventory system can help increase the efficiency of businesses of all sizes. Here's a quick guide to choosing the best software.",
  },
  {
    id: "2",
    slug: "warehouse-management-best-practices",
    image: "/Images/Homeassests/BlogSection/Blog-2.png",
    author: "Alex Martin",
    date: "26 Sept 2025",
    title: "Barcode Inventory System for Small Businesses: 5 Key Features",
    excerpt:
      "A barcode inventory system can help increase the efficiency of businesses of all sizes. Here's a quick guide to choosing the best software.",
  },
  {
    id: "3",
    slug: "inventory-optimization-strategies",
    image: "/Images/Homeassests/BlogSection/Blog-3.png",
    author: "Alex Martin",
    date: "26 Sept 2025",
    title: "Barcode Inventory System for Small Businesses: 5 Key Features",
    excerpt:
      "A barcode inventory system can help increase the efficiency of businesses of all sizes. Here's a quick guide to choosing the best software.",
  },
]

export function BlogsSection() {
  return (
    <section className="relative overflow-hidden bg-[#F5F3F0] px-6 py-20 md:px-12 lg:px-20 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <span className="inline-block rounded-full border-2 border-[oklch(0.5_0.15_200)] px-5 py-2 text-sm font-medium text-[oklch(0.5_0.15_200)]">
                Blog
              </span>
            </motion.div>

            <motion.h2
              id="blogs-heading"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="font-serif text-5xl font-normal leading-tight text-gray-900 md:text-6xl lg:text-7xl"
            >
              Our recent blogs
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-lg text-gray-600"
            >
              Stay update with our recent insights
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex lg:pt-12"
          >
            <Link
              href="/blog"
              className="group inline-flex items-center gap-3 rounded-full border-2 border-[oklch(0.5_0.15_200)] px-8 py-3 font-semibold text-[oklch(0.5_0.15_200)] transition-all hover:bg-[oklch(0.5_0.15_200)] hover:text-white"
            >
              Browse all blogs
              <svg
                className="h-5 w-5 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <BlogCard key={blog.id} {...blog} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
