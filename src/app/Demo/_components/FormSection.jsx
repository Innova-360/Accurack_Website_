"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DemoForm from "./DemoForm";
import FormSuccess from "@/components/common/FormSuccess";

export default function FormSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    countryCode: "PK(+92)",
    industry: "Retail",
    companySize: "51-200",
    interests: ["Product Demo"],
    hearAbout: "Social media",
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const GOOGLE_DEMO_SCRIPT = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT;

  const handleSubmit = async () => {
    if (!formData.fullName || !formData.email || !formData.company || !formData.phone) {
      alert("Please fill in all required fields!");
      return;
    }

    setIsSubmitting(true);
    try {
      const data = {
        formType: "demo",
        timestamp: new Date().toISOString(),
        ...formData,
        interests: formData.interests.join(", "),
      };

      await fetch(GOOGLE_DEMO_SCRIPT, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      // ✅ Trigger success animation
      setTimeout(() => setIsSuccess(true), 300);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong! Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
            Get in touch with our sales and product team for all your WMS queries.
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
                Available Monday to Friday 9 AM–6 PM CST
              </p>
            </div>
          </div>
        </motion.div>

        {/* ✅ Right Section: Animated Transition */}
        <AnimatePresence mode="wait">
          {!isSuccess ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
            >
              <DemoForm
                formData={formData}
                setFormData={setFormData}
                handleSubmit={handleSubmit}
                isSubmitting={isSubmitting}
              />
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            >
              <FormSuccess
                title="Thank You for Booking Your Demo!"
                message="We're excited to show you how AccuRack can optimize your warehouse operations."
                peopleJoinedText="Have any questions before your demo? Contact us here!"
                peopleCount="10,000+"
                ctaText="Contact"
                ctaLink="/Contact"
              />
            </motion.div>
          )}
        </AnimatePresence>
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
