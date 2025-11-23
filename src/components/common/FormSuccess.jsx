"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function FormSuccess({
  title = "Thank You for Reaching Out!",
  message = "We’ve received your message. Our team will reach out to you within the next 24 hours.",
  peopleJoinedText = "Visit our FAQs for quick answers.",
  peopleCount = "You are not alone 2500+ people joined!",
  imageSrc = "/Images/DemoAssests/people.png",
  imageAlt = "People joined",
  ctaText = "Go to FAQs",
  ctaLink = "#",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center justify-center bg-background rounded-3xl shadow-xl pt-10 p-10 text-center max-w-lg mx-auto"
    >
      <div className="relative w-full flex justify-center mb-6">
        <div className="relative z-10 bg-green-100 p-4 rounded-full">
          <svg
            className="w-14 h-14 text-green-600"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M9 16.2l-3.5-3.5L4 14.2l5 5 11-11-1.5-1.5z" />
          </svg>
        </div>
      </div>

      <h2 className="font-title text-heading text-3xl font-bold mb-3">{title}</h2>

      <p className="font-body text-gray-600 mb-6 leading-relaxed">{message}</p>

      <div className="flex justify-center mb-4">
        <Image src={imageSrc} alt={imageAlt} width={180} height={60} />
      </div>

      <p className="font-body text-sm text-gray-500 mb-6">
        {peopleJoinedText}
        <span className="text-cyan-600 font-semibold">{peopleCount}</span> people joined us!
      </p>

      <a
        href={ctaLink}
        className="bg-gradient-to-r from-[#00B6BC] to-[#0C6676] text-white font-semibold px-8 py-3 rounded-full hover:opacity-90 transition"
      >
        {ctaText}
      </a>
    </motion.div>
  );
}
