"use client";

import { motion } from "framer-motion";

export function Lisiting({
  title = "Surpassing Standards for Outstanding Success",
  features = [],
  titleClassName = "",
  containerClassName = "",
  columns = 1, // 1 for single column (original), 2 for two columns
}) {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className={`w-full py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 ${containerClassName}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12 md:mb-16 ${titleClassName}`}
        >
          {title}
        </motion.h2>

        {/* Features List */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className={
            columns === 2
              ? "grid grid-cols-1 lg:grid-cols-2 gap-6"
              : "space-y-6"
          }
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group"
            >
              <div className="flex flex-col sm:flex-row items-start gap-6 p-6 md:p-8 bg-white rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300">
                {/* Image */}
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 rounded-2xl overflow-hidden bg-gray-100">
                    <img
                      src={feature.image || "/api/placeholder/130/130"}
                      alt={feature.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = "/api/placeholder/130/130";
                      }}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}