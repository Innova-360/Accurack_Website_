"use client";
import React from "react";
import { motion } from "framer-motion";
import TouchForm from "./TouchForm";

export default function TouchSection() {
  return (
    <div className="min-h-screen bg-background py-30 px-4">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
        {/* Left Sticky Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:sticky lg:top-30 bg-white p-8 lg:p-10 rounded-xl"
        >
          <h1 className="font-title text-3xl lg:text-4xl font-bold text-blue-900 mb-6 leading-tight">
            Join thousands Saving time
            <br />
            and Money using Accurack
          </h1>
          <p className="font-body text-gray-600 mb-8 leading-relaxed">
            Get in touch with our sales and product team for all your WMS
            queries.
          </p>
          <div className="space-y-6">
            <div>
              <label className="block text-xs text-gray-500 uppercase tracking-wide mb-2">
                Email
              </label>
              <a
                href="mailto:hello@accurack.ai"
                className="text-blue-900 font-semibold hover:text-blue-700 transition"
              >
                hello@accurack.ai
              </a>
            </div>
            <div>
              <label className="block text-xs text-gray-500 uppercase tracking-wide mb-2">
                Phone
              </label>
              <a
                href="tel:314-970-2115"
                className="text-blue-900 font-semibold hover:text-blue-700 transition"
              >
                314-970-2115
              </a>
              <p className="text-sm text-gray-500 mt-1">
                Available Monday to Friday 9 AM-6 PM CST
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Form */}
        <TouchForm />
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-center text-gray-500 italic mt-8"
      >
        You are in good company
      </motion.p>
    </div>
  );
}