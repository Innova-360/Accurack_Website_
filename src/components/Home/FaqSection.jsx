"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { FAQItem } from "./FaqItems";
import Img from "../ui/Image";

const faqs = [
  {
    question: "Can Accurack integrate with the tools I already use?",
    answer:
      "Yes! Accurack seamlessly integrates with popular e-commerce platforms, accounting software, and shipping providers. Our API allows custom integrations to fit your specific workflow needs.",
  },
  {
    question: "How does Accurack handle multi-location inventory?",
    answer:
      "Accurack provides real-time visibility across all your warehouse locations. Track stock levels, transfers, and movements between locations with ease. Our system automatically updates inventory counts across all locations.",
  },
  {
    question: "Is there a mobile app for warehouse operations?",
    answer:
      "Yes, our mobile app supports iOS and Android devices. Warehouse staff can scan barcodes, update inventory, process orders, and manage stock movements directly from their mobile devices.",
  },
  {
    question: "What kind of support does Accurack provide?",
    answer:
      "We offer 24/7 customer support via chat, email, and phone. Our dedicated team provides onboarding assistance, training resources, and ongoing technical support to ensure your success.",
  },
];
export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative -mt-20 min-h-screen py-20 bg-[#F5F3F0]  overflow-hidden">
      <div className="max-w-7xl mx-auto p-10 ">
        {/* Heading Section */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20, x: 560 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-4 inline-flex items-center rounded-full border border-black/10 bg-white px-4 py-1.5 text-xs font-medium text-gray-700 shadow-sm"
          >
            Frequently Asked Question
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10, x: 595 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-12"
          >
            FAQs
          </motion.h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Side - Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="sticky top-24 h-60 flex items-center justify-center mt-20">
              {/* Badge */}

              {/* Illustration */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, x: 50 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative"
              >
                {/* Question marks with animation */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [-5, 5, -5],
                  }}
                  initial={{ x: 140, rotate: 0 }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-8 left-12 text-red-400 text-6xl font-bold"
                >
                  ?
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [5, -5, 5],
                  }}
                  initial={{ x: -140, rotate: 0 }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  className="absolute -top-17 right-24 text-red-400 text-7xl font-bold"
                >
                  ?
                </motion.div>

                {/* Illustration Container */}
                <Img
                  height={600}
                  width={400}
                  src={"/Images/Homeassests/FaqSection/Faq.png"}
                  alt=""
                  className="scale-x-[-1]"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                faq={faq}
                index={index}
                isOpen={openIndex === index}
                onToggle={() => toggleFAQ(index)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="relative h-32 -mb-30 w-full bg-[#FFFFFF] overflow-hidden">
        <svg
          className="absolute top-0 left-0 w-full h-24 scale-y-[-1]"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#F5F3F0"
            fillOpacity="1"
            d="M0,280 C480,0 960,0 1440,280 L1440,320 L0,320 Z"
          />
        </svg>
      </div>
    </section>
  );
}
