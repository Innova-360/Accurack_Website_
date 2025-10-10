"use client";

import { motion } from "framer-motion";
import { useId, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M5 12h14M13 5l7 7-7 7"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ContactForm() {
  const nameId = useId();
  const emailId = useId();
  const companyId = useId();
  const sizeId = useId();
  const titleId = useId();
  const msgId = useId();

  const radioName = "industry-type";
  const [phone, setPhone] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("Wholesale");

  const industries = ["Wholesale", "Retail", "Logistics", "E-commerce", "3PL"];

  return (
    <motion.form
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="rounded-2xl border border-black/10 bg-background shadow-[0_6px_24px_-6px_rgba(0,0,0,0.15)] p-6 md:p-8"
      onSubmit={(e) => {
        e.preventDefault();
        console.log({ phone, selectedIndustry });
      }}
    >
      <div className="grid grid-cols-1 gap-5">
        {/* Name */}
        <div className="grid gap-2">
          <label htmlFor={nameId} className="text-sm font-medium text-foreground">
            Name
          </label>
          <input
            id={nameId}
            name="name"
            placeholder="Enter your name here"
            className="h-11 rounded-lg border border-black/10 bg-background px-3 text-sm outline-none focus:border-teal-600/50 focus:ring-2 focus:ring-teal-500/30"
          />
        </div>

        {/* Email */}
        <div className="grid gap-2">
          <label htmlFor={emailId} className="text-sm font-medium text-foreground">
            Business email
          </label>
          <input
            id={emailId}
            type="email"
            name="email"
            placeholder="Enter your email"
            className="h-11 rounded-lg border border-black/10 bg-background px-3 text-sm outline-none focus:border-teal-600/50 focus:ring-2 focus:ring-teal-500/30"
          />
        </div>

        {/* Phone (React Phone Input) */}
        <div className="grid gap-2">
          <label className="text-sm font-medium text-foreground">
            Phone Number
          </label>
          <div className="rounded-lg border border-black/10 bg-background px-2 py-[2px] focus-within:ring-2 focus-within:ring-teal-500/30">
            <PhoneInput
              country={"pk"}
              value={phone}
              onChange={(value) => setPhone(value)}
              inputClass="!bg-transparent !text-sm !w-full !border-none !outline-none focus:!ring-0 focus:!border-none"
              containerClass="!w-full !bg-transparent"
              buttonClass="!bg-transparent !border-none !px-2"
              dropdownClass="!text-sm"
              enableSearch={true}
            />
          </div>
        </div>

        {/* Company */}
        <div className="grid gap-2">
          <label htmlFor={companyId} className="text-sm font-medium text-foreground">
            Company name
          </label>
          <input
            id={companyId}
            name="company"
            placeholder="Enter your company name"
            className="h-11 rounded-lg border border-black/10 bg-background px-3 text-sm outline-none focus:border-teal-600/50 focus:ring-2 focus:ring-teal-500/30"
          />
        </div>

        {/* Company size */}
        <div className="grid gap-2">
          <label htmlFor={sizeId} className="text-sm font-medium text-foreground">
            Company size
          </label>
          <input
            id={sizeId}
            name="companySize"
            placeholder="e.g. 50-100 employees"
            className="h-11 rounded-lg border border-black/10 bg-background px-3 text-sm outline-none focus:border-teal-600/50 focus:ring-2 focus:ring-teal-500/30"
          />
        </div>

        {/* Job title */}
        <div className="grid gap-2">
          <label htmlFor={titleId} className="text-sm font-medium text-foreground">
            Job title
          </label>
          <input
            id={titleId}
            name="jobTitle"
            placeholder="Enter your job title"
            className="h-11 rounded-lg border border-black/10 bg-background px-3 text-sm outline-none focus:border-teal-600/50 focus:ring-2 focus:ring-teal-500/30"
          />
        </div>

        {/* Industry Type */}
        <fieldset className="grid gap-3">
          <legend className="text-sm font-medium text-foreground">
            Industry Type
          </legend>
          <div className="flex flex-wrap gap-2">
            {industries.map((label) => (
              <label
                key={label}
                className={`inline-flex cursor-pointer items-center gap-2 rounded-full border px-3 py-2 text-sm text-foreground transition
                  ${
                    selectedIndustry === label
                      ? "border-teal-600 bg-teal-50"
                      : "border-black/10 hover:border-teal-500/50"
                  }`}
              >
                <input
                  type="radio"
                  name={radioName}
                  checked={selectedIndustry === label}
                  onChange={() => setSelectedIndustry(label)}
                  className="sr-only"
                />
                <span className="inline-flex h-3 w-3 items-center justify-center rounded-full border border-black/20 bg-white">
                  {selectedIndustry === label && (
                    <span className="h-2 w-2 rounded-full bg-teal-600" />
                  )}
                </span>
                {label}
              </label>
            ))}
          </div>
        </fieldset>

        {/* Message */}
        <div className="grid gap-2">
          <label htmlFor={msgId} className="text-sm font-medium text-foreground">
            Message
          </label>
          <textarea
            id={msgId}
            name="message"
            placeholder="Enter your message here"
            className="min-h-[120px] rounded-lg border border-black/10 bg-background p-3 text-sm outline-none focus:border-teal-600/50 focus:ring-2 focus:ring-teal-500/30"
          />
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <motion.button
            whileHover={{ y: -1 }}
            whileTap={{ y: 0 }}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gradient-primary-1 to-gradient-primary-2 px-5 py-3 text-sm font-medium text-white shadow-[0_8px_24px_-8px_rgba(13,148,136,0.6)] hover:bg-teal-700 focus:outline-none focus:ring-4 focus:ring-teal-500/30"
            type="submit"
          >
            Get My Free Consultation
            <ArrowRight />
          </motion.button>
        </div>
      </div>
    </motion.form>
  );
}
