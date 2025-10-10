"use client";

import { useRef } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SuspenseWrapper from "../common/SuspenseWrapper";

const BlogCard = dynamic(
  () => import("./BlogCard").then((mod) => mod.BlogCard || mod.default),
  {
    ssr: false,
    loading: () => (
      <div className="h-64 w-full bg-gray-200 animate-pulse rounded-2xl" />
    ),
  }
);

const blogs = [
  {
    id: "1",
    slug: "barcode-inventory-system-small-businesses",
    image: "/Images/Homeassests/BlogSection/Blog-1.png",
    author: "Alex Martin",
    date: "26 Sept 2025",
    title: "Barcode Inventory System for Small Businesses: 5 Key Features",
    excerpt:
      "A barcode inventory system can help increase the efficiency of businesses of all sizes.",
  },
  {
    id: "2",
    slug: "warehouse-management-best-practices",
    image: "/Images/Homeassests/BlogSection/Blog-2.png",
    author: "Sarah Lee",
    date: "27 Sept 2025",
    title: "Warehouse Management Best Practices for 2025",
    excerpt:
      "Improve your warehouse efficiency and avoid common inventory pitfalls.",
  },
  {
    id: "3",
    slug: "inventory-optimization-strategies",
    image: "/Images/Homeassests/BlogSection/Blog-3.png",
    author: "James Carter",
    date: "28 Sept 2025",
    title: "Inventory Optimization Strategies That Work",
    excerpt:
      "Learn how to reduce holding costs while maintaining high product availability.",
  },
  {
    id: "4",
    slug: "ai-inventory-tracking",
    image: "/Images/Homeassests/BlogSection/Blog-2.png",
    author: "Nina Patel",
    date: "30 Sept 2025",
    title: "How AI Is Revolutionizing Inventory Tracking",
    excerpt:
      "Discover how AI-powered systems are changing the logistics landscape.",
  },
  {
    id: "5",
    slug: "retail-stock-predictions",
    image: "/Images/Homeassests/BlogSection/Blog-1.png",
    author: "John Wilson",
    date: "2 Oct 2025",
    title: "Predictive Analytics in Retail Stock Management",
    excerpt:
      "Forecast demand more accurately using predictive analytics tools.",
  },
];

export default function BlogsSection() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const scrollAmount = direction === "left" ? -400 : 400;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <SuspenseWrapper
      fallback={<div className="text-center py-20">Loading blogs...</div>}
    >
      <section className="relative overflow-hidden bg-[rgba(219,239,242)] px-6 py-20 md:px-12 lg:px-20 lg:py-28">
        <div className="mx-auto max-w-7xl">
          {/* Header with buttons */}
          <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="inline-block rounded-full border-2 border-[oklch(0.5_0.15_200)] px-5 py-2 text-sm font-medium text-[oklch(0.5_0.15_200)]"
              >
                Blog
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="font-serif text-4xl font-normal leading-tight text-gray-900 md:text-5xl lg:text-6xl"
              >
                Our Recent Blogs
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="text-gray-600 mt-2"
              >
                Stay updated with our latest insights and guides.
              </motion.p>
            </div>

            <div className="flex items-center gap-3 self-end lg:self-auto">
              <button
                onClick={() => scroll("left")}
                className="p-2 rounded-full border border-[oklch(0.5_0.15_200)] text-[oklch(0.5_0.15_200)] hover:bg-[oklch(0.5_0.15_200)] hover:text-white transition"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => scroll("right")}
                className="p-2 rounded-full border border-[oklch(0.5_0.15_200)] text-[oklch(0.5_0.15_200)] hover:bg-[oklch(0.5_0.15_200)] hover:text-white transition"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              {/* Browse All Blogs button */}
              <Link
                href="/blog"
                className="ml-4 inline-flex items-center gap-2 rounded-full border-2 border-[oklch(0.5_0.15_200)] px-6 py-2.5 font-semibold text-[oklch(0.5_0.15_200)] transition-all hover:bg-[oklch(0.5_0.15_200)] hover:text-white"
              >
                Browse All
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Scrollable Cards Row */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4 snap-x snap-mandatory"
          >
            {blogs.map((blog, index) => (
              <div
                key={blog.id}
                className="flex-shrink-0 snap-center w-[100%] sm:w-[45%] md:w-[32%] lg:w-[30%] h-[620px]" // ✅ fixed height
              >
                <div className="h-full">
                  <BlogCard {...blog} index={index} />
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
        </div>
      </section>
    </SuspenseWrapper>
  );
}
