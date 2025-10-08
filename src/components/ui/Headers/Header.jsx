"use client";

import { motion } from "framer-motion";

const props = {
  title: "Analytics & Reporting",
  description:
    "Access intuitive, real-time dashboards that provide an instant snapshot of your key performance indicators (KPIs). Monitor inventory levels, sales velocity, and operational efficiency at a glance.",
};

export default function Header({ title, description } = props) {
  const titleVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const descriptionVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.15,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <div className="text-center max-w-3xl mx-auto mb-12">
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4"
        variants={titleVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          className="text-base sm:text-lg text-gray-600 font-body leading-relaxed"
          variants={descriptionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
