"use client";

import { motion } from "framer-motion";
import { useId } from "react";

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
  const phoneId = useId();
  const companyId = useId();
  const sizeId = useId();
  const titleId = useId();
  const msgId = useId();

  const radioName = "industry-type";

  return (
    <motion.form
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="rounded-2xl border border-black/10 bg-background shadow-[0_6px_24px_-6px_rgba(0,0,0,0.15)] p-6 md:p-8"
      onSubmit={(e) => {
        e.preventDefault();
        // console.log("[v0] Submit contact form")
      }}
    >
      <div className="grid grid-cols-1 gap-5">
        <div className="grid gap-2">
          <label
            htmlFor={nameId}
            className="text-sm font-medium text-foreground"
          >
            Name
          </label>
          <input
            id={nameId}
            name="name"
            placeholder="Enter your name here"
            className="h-11 rounded-lg border border-black/10 bg-background px-3 text-sm outline-none ring-0 focus:border-teal-600/50 focus:outline-none focus:ring-2 focus:ring-teal-500/30"
          />
        </div>

        <div className="grid gap-2">
          <label
            htmlFor={emailId}
            className="text-sm font-medium text-foreground"
          >
            Business email
          </label>
          <input
            id={emailId}
            type="email"
            name="email"
            placeholder="Enter your name here"
            className="h-11 rounded-lg border border-black/10 bg-background px-3 text-sm outline-none focus:border-teal-600/50 focus:ring-2 focus:ring-teal-500/30"
          />
        </div>

        <div className="grid gap-2">
          <label
            htmlFor={phoneId}
            className="text-sm font-medium text-foreground"
          >
            Phone Number
          </label>
          <div className="flex h-11 items-center gap-2 rounded-lg border border-black/10 bg-background px-2">
            <div className="flex items-center gap-2 rounded-md border border-black/10 px-2 py-1.5">
              <span
                className="inline-flex h-2.5 w-2.5 rounded-full bg-green-500"
                aria-hidden
              />
              <select
                aria-label="Country code"
                className="bg-transparent pr-2 text-sm outline-none"
              >
                <option>PK (+92)</option>
                <option>US (+1)</option>
                <option>UK (+44)</option>
                <option>IN (+91)</option>
              </select>
            </div>
            <input
              id={phoneId}
              name="phone"
              placeholder="XX-XXXX-XXXX"
              className="flex-1 bg-transparent text-sm outline-none"
            />
          </div>
        </div>

        <div className="grid gap-2">
          <label
            htmlFor={companyId}
            className="text-sm font-medium text-foreground"
          >
            Company name
          </label>
          <input
            id={companyId}
            name="company"
            placeholder="Enter your name here"
            className="h-11 rounded-lg border border-black/10 bg-background px-3 text-sm outline-none focus:border-teal-600/50 focus:ring-2 focus:ring-teal-500/30"
          />
        </div>

        <div className="grid gap-2">
          <label
            htmlFor={sizeId}
            className="text-sm font-medium text-foreground"
          >
            Company size
          </label>
          <input
            id={sizeId}
            name="companySize"
            placeholder="Enter your name here"
            className="h-11 rounded-lg border border-black/10 bg-background px-3 text-sm outline-none focus:border-teal-600/50 focus:ring-2 focus:ring-teal-500/30"
          />
        </div>

        <div className="grid gap-2">
          <label
            htmlFor={titleId}
            className="text-sm font-medium text-foreground"
          >
            Job title
          </label>
          <input
            id={titleId}
            name="jobTitle"
            placeholder="Enter your name here"
            className="h-11 rounded-lg border border-black/10 bg-background px-3 text-sm outline-none focus:border-teal-600/50 focus:ring-2 focus:ring-teal-500/30"
          />
        </div>

        <fieldset className="grid gap-3">
          <legend className="text-sm font-medium text-foreground">
            Industry Type
          </legend>
          <div className="flex flex-wrap gap-2">
            {["Wholesale", "Retail", "Logistics", "E-commerce", "3PL"].map(
              (label, i) => (
                <label
                  key={label}
                  className="peer inline-flex cursor-pointer items-center gap-2 rounded-full border border-black/10 px-3 py-2 text-sm text-foreground hover:border-teal-500/50 has-[:checked]:border-teal-600 has-[:checked]:bg-teal-50"
                >
                  <input
                    type="radio"
                    name={radioName}
                    defaultChecked={i === 0}
                    className="peer sr-only"
                  />
                  <span className="inline-flex h-3 w-3 items-center justify-center rounded-full border border-black/20 bg-white">
                    <span className="hidden h-2 w-2 rounded-full bg-teal-600 peer-checked:block" />
                  </span>
                  {label}
                </label>
              )
            )}
          </div>
        </fieldset>

        <div className="grid gap-2">
          <label
            htmlFor={msgId}
            className="text-sm font-medium text-foreground"
          >
            Message
          </label>
          <textarea
            id={msgId}
            name="message"
            placeholder="Enter your name here"
            className="min-h-[120px] rounded-lg border border-black/10 bg-background p-3 text-sm outline-none focus:border-teal-600/50 focus:ring-2 focus:ring-teal-500/30"
          />
        </div>

        <div className="pt-2">
          <motion.button
            whileHover={{ y: -1 }}
            whileTap={{ y: 0 }}
            className="inline-flex items-center gap-2 rounded-full bg-teal-600 px-5 py-3 text-sm font-medium text-white shadow-[0_8px_24px_-8px_rgba(13,148,136,0.6)] hover:bg-teal-700 focus:outline-none focus:ring-4 focus:ring-teal-500/30"
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
