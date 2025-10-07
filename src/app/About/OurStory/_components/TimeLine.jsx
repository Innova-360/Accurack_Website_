"use client";
import React from "react";
import { motion } from "framer-motion";

export default function TimelineComponent({
  title = "Timeline of key achievements",
  subtitle = "Utilize warehouse management software that covers every stage of your supply chain.",
  timelineItems = [],
  customerImpact = null,
  className = "",
}) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <div
      className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 ${className}`}
    >
      {/* Header */}
      {(title || subtitle) && (
        <motion.div
          className="mb-12 lg:mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {title && (
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-gray-900 mb-4">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-gray-500 font-body text-base lg:text-lg">
              {subtitle}
            </p>
          )}
        </motion.div>
      )}

      {/* Timeline - Desktop */}
      {timelineItems.length > 0 && (
        <motion.div
          className="hidden lg:grid lg:grid-cols-5 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {timelineItems.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className={`relative transition-transform duration-500 ${
                  isEven ? "translate-y-10" : "-translate-y-10"
                }`}
              >
                {/* Wavy & dotted arrow */}
                {/* Curved dashed arrow — improved version */}
                {index < timelineItems.length - 1 && (
                  <div
                    className={`absolute ${
                      isEven ? "left-full top-1/3" : "left-full bottom-1/3"
                    } w-32 h-32 flex items-center justify-center pointer-events-none z-10`}
                  >
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 160 100"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="overflow-visible"
                    >
                      <path
                        d={
                          isEven
                            ? "M0,20 C60,0 100,60 160,40" // curve from top-right downwards
                            : "M0,80 C60,100 100,40 160,60" // curve from bottom-right upwards
                        }
                        stroke="#999"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeDasharray="6 6"
                      />
                      {/* arrowhead */}
                      <path
                        d={
                          isEven
                            ? "M160,40 L150,34 M160,40 L150,46"
                            : "M160,60 L150,54 M160,60 L150,66"
                        }
                        stroke="#999"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}

                {/* Card */}
                <div
                  className={`relative rounded-3xl p-6 border-2 transition-all duration-300 hover:shadow-lg ${
                    item.isPrimary ? "bg-[#83DCEC]" : "bg-white border-cyan-300"
                  }`}
                >
                  <h3 className="text-4xl font-heading font-bold mb-4 italic text-gray-900">
                    {item.year}
                  </h3>
                  <h4 className="text-xl font-body font-semibold mb-3 text-gray-900">
                    {item.title}
                  </h4>
                  <p
                    className={`text-sm font-body leading-relaxed ${
                      item.isPrimary ? "text-gray-800" : "text-gray-600"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      )}

      {/* Timeline - Mobile */}
      {timelineItems.length > 0 && (
        <motion.div
          className="lg:hidden space-y-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {timelineItems.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="relative"
            >
              {/* Vertical Dotted Arrow */}
              {index < timelineItems.length - 1 && (
                <div className="absolute left-1/2 -bottom-8 w-0.5 h-8 border-l-2 border-dashed border-gray-400 transform -translate-x-1/2 z-10">
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M6 1L6 11M6 11L1 6M6 11L11 6"
                        stroke="#999"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              )}

              {/* Card */}
              <div
                className={`relative rounded-3xl p-6 border-2 transition-all duration-300 ${
                  item.isPrimary
                    ? "bg-cyan-400 border-cyan-400"
                    : "bg-white border-cyan-300"
                }`}
              >
                <h3 className="text-3xl font-bold mb-3 italic text-gray-900">
                  {item.year}
                </h3>
                <h4 className="text-lg font-semibold mb-2 text-gray-900">
                  {item.title}
                </h4>
                <p
                  className={`text-sm leading-relaxed ${
                    item.isPrimary ? "text-gray-800" : "text-gray-600"
                  }`}
                >
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Customer Impact Section */}
      {customerImpact && (
        <motion.div
          className="relative rounded-3xl overflow-hidden bg-gradient-to-br bg-[#83DCEC] p-8 lg:p-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div>
              <h3 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-6">
                {customerImpact.title}
              </h3>
              <p className="text-gray-800 text-base font-body lg:text-lg mb-8 leading-relaxed">
                {customerImpact.description}
              </p>

              {/* Testimonial Card */}
              {customerImpact.testimonial && (
                <motion.div
                  className="bg-cyan-200 rounded-2xl p-6"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mb-4">
                    <span className="text-5xl text-gray-700 font-serif">"</span>
                  </div>
                  <p className="text-gray-800 text-sm font-body lg:text-base mb-6 leading-relaxed">
                    {customerImpact.testimonial.quote}
                  </p>

                  <div className="flex items-center gap-4">
                    <img
                      src={
                        customerImpact.testimonial.image ||
                        "/api/placeholder/60/60"
                      }
                      alt={customerImpact.testimonial.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-white"
                    />
                    <div>
                      <h4 className="text-gray-900 font-semibold font-heading text-base">
                        {customerImpact.testimonial.name}
                      </h4>
                      <p className="text-gray-700 font-body text-sm">
                        {customerImpact.testimonial.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Right Image */}
            {customerImpact.mainImage && (
              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                  <img
                    src={customerImpact.mainImage}
                    alt={customerImpact.imageAlt || "Customer Impact"}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </div>
  );
}
