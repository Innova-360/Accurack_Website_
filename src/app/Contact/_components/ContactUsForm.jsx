"use client";

import { motion } from "framer-motion";
import ContactForm from "../../../components/Home/ContactForm";
function Check() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M20 7L10 17l-6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ContactUsForm() {
  return (
    <section aria-labelledby="contact-heading" className="relative">

      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid items-start gap-10 md:grid-cols-2 md:gap-14">
          {/* Left content */}
          <div className="space-y-6">


            <motion.h2
              id="contact-heading"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="font-title text-3xl leading-tight text-primary"
            >
              Contact us
            </motion.h2>

            <p className="max-w-xl text-sm text-gray-500 md:text-base font-normal">
              Get in touch with our sales and product team for all your WMS inquiries!
            </p>
            <div>
              <p className="max-w-xl text-sm text-gray-500 md:text-base font-normal">
                Email:
              </p>
              <p className="max-w-xl text-xl md:text-base font-medium">
                hello@accurack.ai
              </p>
            </div>

            <div className="gap-2">
              <p className="max-w-xl text-md text-gray-500 md:text-base font-normal">
                Phone:
              </p>
              <p className="max-w-xl text-xl md:text-base font-medium">
                +1 (555) 123-4567
              </p>
            </div>

            {/* Dark feature card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative h-[500px] overflow-hidden rounded-3xl border border-black/10 bg-slate-900 text-white"
            >
              <div
                className="absolute inset-0 bg-[url('/Images/Homeassests/ContactSection/bg-image.png')] bg-cover bg-center opacity-40"
                aria-hidden
              />
              <div className="relative p-6 md:p-8">
                <h3 className="mb-4 text-center font-serif text-2xl md:text-3xl">
                  Trusted by 3PLs
                  <br /> and Retail
                </h3>

                <div className="mx-auto mb-6 h-px w-24 bg-white/20" />

                <h4 className="mb-4 text-base font-semibold md:text-lg">
                  Use The Free Trial To
                </h4>
                <ul className="space-y-4 text-sm leading-relaxed text-white/90">
                  <li className="flex gap-3">
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-green-500 text-white">
                      <Check />
                    </span>
                    Get to know our system – see how it looks and works.
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-green-500 text-white">
                      <Check />
                    </span>
                    Experience how your business aligns with WareGo – see how we
                    solve your warehousing challenges.
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-green-500 text-white">
                      <Check />
                    </span>
                    Explore all the features – try out different options and
                    tools.
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Right form */}
          <ContactForm />
        </div>
      </div>

    </section>
  );
}
