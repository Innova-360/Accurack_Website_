"use client";
import React from "react";
import { motion } from "framer-motion";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function DemoForm({ formData, setFormData, handleSubmit }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckbox = (value) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(value)
        ? prev.interests.filter((i) => i !== value)
        : [...prev.interests, value],
    }));
  };

  return (
    <motion.div className="bg-white p-8 lg:p-10 rounded-xl shadow-md">
      <h2 className="text-2xl lg:text-3xl font-bold mb-8">Book a Demo</h2>
      <div className="space-y-6">
        {/* Full Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <label className="block text-sm font-semibold mb-2">
            Full Name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your name here"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition"
          />
        </motion.div>

        {/* Company Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
        >
          <label className="block text-sm font-semibold mb-2">
            Company name
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Enter your company name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition"
          />
        </motion.div>

        {/* Business Email */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <label className="block text-sm font-semibold mb-2">
            Business email<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your business email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition"
          />
        </motion.div>

        {/* Phone Number using react-phone-input-2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
        >
          <label className="block text-sm font-semibold mb-2">
            Phone Number<span className="text-red-500">*</span>
          </label>
          <PhoneInput
            country={"pk"}
            value={formData.phone}
            onChange={(phone) => setFormData((prev) => ({ ...prev, phone }))}
            inputClass="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
          />
        </motion.div>

        {/* Industry Type */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <label className="block text-sm font-semibold mb-2">
            Industry type
          </label>
          <select
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent appearance-none bg-white"
          >
            <option>Retail</option>
            <option>Manufacturing</option>
            <option>Technology</option>
            <option>Healthcare</option>
            <option>Finance</option>
          </select>
        </motion.div>

        {/* Company Size */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
        >
          <label className="block text-sm font-semibold mb-2">
            Company size
          </label>
          <div className="flex flex-wrap gap-3">
            {["1-10", "11-50", "51-200", "201-500", "500+"].map((size) => (
              <label key={size} className="cursor-pointer">
                <input
                  type="radio"
                  name="companySize"
                  value={size}
                  checked={formData.companySize === size}
                  onChange={handleChange}
                  className="sr-only peer"
                />
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-5 py-2 border-2 border-gray-300 rounded-lg peer-checked:border-gray-900 peer-checked:bg-gray-50 transition"
                >
                  {size}
                </motion.div>
              </label>
            ))}
          </div>
        </motion.div>

        {/* Interests */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <label className="block text-sm font-semibold mb-2">
            What Are You Interested In?
          </label>
          <div className="flex flex-wrap gap-3">
            {["Product Demo", "Pricing Information"].map((interest) => (
              <label key={interest} className="cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.interests.includes(interest)}
                  onChange={() => handleCheckbox(interest)}
                  className="sr-only peer"
                />
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-5 py-2 border-2 border-gray-300 rounded-lg peer-checked:border-gray-900 peer-checked:bg-gray-900 peer-checked:text-white transition"
                >
                  {interest}
                </motion.div>
              </label>
            ))}
          </div>
        </motion.div>

        {/* Hear About */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
        >
          <label className="block text-sm font-semibold mb-2">
            How Did You Hear About Us?
          </label>
          <select
            name="hearAbout"
            value={formData.hearAbout}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent appearance-none bg-white"
          >
            <option>Social media</option>
            <option>Search engine</option>
            <option>Friend or colleague</option>
            <option>Advertisement</option>
            <option>Other</option>
          </select>
        </motion.div>

        {/* Submit Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleSubmit}
          className="bg-gradient-to-r from-[#00B6BC] to-[#0C6676] text-white font-semibold px-8 py-3 rounded-full transition shadow-md mt-4 hover:opacity-90"
        >
          Book a Demo
        </motion.button>
      </div>
    </motion.div>
  );
}
