"use client";

import { motion } from "framer-motion";
import ContactForm from "./ContactForm";
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

export default function ContactSection() {
  return (
    <section aria-labelledby="contact-heading" className="relative">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#FFFFFF_0%,#D5ECF0_115.91%)]"></div>

      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid items-start gap-10 md:grid-cols-2 md:gap-14">
          {/* Left content */}
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full border border-teal-600/30 bg-white/60 px-3 py-1 text-xs font-medium text-teal-700 shadow-sm backdrop-blur">
              Contact us
            </div>

            <motion.h2
              id="contact-heading"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="font-serif text-3xl leading-tight text-foreground md:text-5xl"
            >
              Connect With Us For
              <br />
              Personalized Assistance!
            </motion.h2>

            <p className="max-w-xl text-sm text-muted-foreground md:text-base">
              Have any queries? Call us today and speak to our expert team for
              tailored assistance regarding our WMS – WareGo. We’d love to hear
              from you!
            </p>

            {/* Dark feature card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative h-[500px] overflow-hidden rounded-3xl border border-black/10 bg-slate-900 text-white shadow-[0_16px_60px_-10px_rgba(2,6,23,0.6)]"
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
      <div className="relative h-32 -mb-30 w-full bg-[#FFFFFF] overflow-hidden">
        <svg
          className="absolute top-0 left-0 w-full h-24 scale-y-[-1]"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#DCEFF3"
            fillOpacity="1"
            d="M0,280 C480,0 960,0 1440,280 L1440,320 L0,320 Z"
          />
        </svg>
      </div>
    </section>
  );
}
