"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function CustomerSupportSection() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center px-4 py-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl w-full bg-[#DDF0F3] rounded-3xl relative"
      >
        <div className="grid lg:grid-cols-2 items-center overflow-hidden rounded-3xl">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="p-8 lg:p-16"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="font-heading text-2xl lg:text-4xl font-semibold text-gray-900 mb-6 leading-tight"
            >
              Have Any Questions You'd Like Answered Now?
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="font-body text-lg text-gray-700 mb-8 leading-relaxed"
            >
              Our AI Assistant,
              <span className="font-semibold text-cyan-600">Amelia</span>, is
              available 24/7 to help answer any questions you may have.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-[#00B6BC] to-[#0C6676] text-white font-semibold px-10 py-4 rounded-full text-lg transition-all duration-300"
            >
              Chat with Amelia
            </motion.button>
          </motion.div>

          {/* Right Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative flex items-end justify-center h-full min-h-[400px] p-6 bg-transparent"
          >
            {/* Background Image */}
            <div
              style={{
                backgroundImage: "url('/Images/DemoAssests/image.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              className="absolute inset-0 opacity-20 rounded-3xl"
            ></div>

            {/* Agent Section */}
            <div className="relative w-full max-w-md lg:max-w-lg h-[400px] flex items-center justify-center z-[10]">

              {/* Agent Image */}
              <div className="absolute -bottom-10 -right-10 z-[20] overflow-visible">
                <Image
                  alt="Agent"
                  src="/Images/DemoAssests/Agent.png"
                  width={400}
                  height={400}
                  loading="lazy"
                  className="object-contain "
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
