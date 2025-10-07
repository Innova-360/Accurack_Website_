"use client";

import React from "react";
import { motion } from "framer-motion";
import Header from "../ui/Headers/Header";
import { FaStar, FaQuoteRight, FaBuilding } from "react-icons/fa";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Ross Geller",
      role: "Retail Manager",
      image: "https://i.pravatar.cc/200",
      quote:
        "Accurack cut our stock costs by 35% and delivery times by 20% in just 3 months.",
      rating: 4.7,
      company: "ABC Distributors",
      highlight: false,
    },
    {
      name: "Joey Tribbiani",
      role: "Restaurant Owner",
      image: "https://i.pravatar.cc/300",
      quote:
        "Accurack streamlined our logistics and made inventory headaches disappear overnight.",
      rating: 5.0,
      company: "Tribbiani Foods",
      highlight: true,
    },
    {
      name: "Rachel Green",
      role: "Fashion Buyer",
      image: "https://i.pravatar.cc/400",
      quote:
        "I love how seamless and intuitive Accurack is — it’s a game-changer for us.",
      rating: 4.9,
      company: "Bloom Fashion Co.",
      highlight: false,
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <div className="w-full py-20 max-w-6xl mx-auto px-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Header title="Customer Success Stories" />
      </motion.div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-12">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            {/* Reviewer Image */}
            <motion.img
              src={t.image}
              alt={t.name}
              width={50}
              height={50}
              className="rounded-full object-cover"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            />

            {/* Name and Role */}
            <h3 className="text-lg font-semibold text-gray-800">{t.name}</h3>
            <p className="text-sm text-gray-500 mb-6">{t.role}</p>

            {/* Message Box */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
              className={`relative w-full h-70 rounded-3xl shadow-[0px_0px_17px_-4px_rgba(0,_0,_0,_0.1)] px-8 py-10 flex flex-col items-center text-center ${
                t.highlight ? "bg-primary text-white" : "bg-white text-gray-700"
              }`}
            >
              <FaBuilding
                className={`fa-3x mb-4 ${
                  t.highlight ? "text-white" : "text-primary"
                }`}
              />

              <p className="text-base leading-relaxed mb-6">{t.quote}</p>

              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`${
                        i < Math.round(t.rating)
                          ? "text-yellow-400"
                          : t.highlight
                          ? "text-white/40"
                          : "text-gray-300"
                      } w-5 h-5`}
                    />
                  ))}
                </div>
                <span className="text-sm font-medium">
                  {t.rating.toFixed(1)}
                </span>
              </div>

              <FaQuoteRight
                className={`fa-xl ${
                  t.highlight ? "text-white/70" : "text-gray-400"
                }`}
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
