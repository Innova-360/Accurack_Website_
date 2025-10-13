"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SuspenseWrapper from "@/components/common/SuspenseWrapper"; // adjust path if different

function TrialCta() {
  return (
    <section
      aria-labelledby="trial-cta-heading"
      className="px-6 md:px-8 mt-20 py-12 md:py-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#DDF0F3] ring-1 ring-[hsl(var(--border))]"
      >
        {/* Subtle backdrop glow */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_400px_at_20%_20%,hsl(var(--primary)/0.12),transparent)]" />

        <div className="relative grid items-center gap-10 p-8 md:p-12 lg:grid-cols-12">
          {/* Left Content */}
          <div className="lg:col-span-7">
            <h2
              id="trial-cta-heading"
              className="font-serif text-3xl leading-tight text-foreground md:text-5xl"
            >
              Try our End-to-End WHM system for{" "}
              <span className="font-semibold">14 days</span>
            </h2>
            <p className="mt-4 max-w-2xl text-[hsl(var(--muted-foreground))]">
              Have any queries? Call us today and speak to our expert team for
              tailored assistance regarding our WMS – WareGo. We’d love to hear
              from you!
            </p>

            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-gradient-primary-1 to-gradient-primary-2 px-6 py-3 text-base font-medium text-white shadow-lg shadow-[hsl(var(--primary)/0.25)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00B6BC]"
              >
                Get My Free Consultation
              </a>
            </div>
          </div>

          {/* Right Image / Mockup */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.98, x: 20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mx-auto w-full max-w-[680px] rounded-3xl bg-transparent p-3 ring-1 ring-black/10 shadow-xl"
              aria-label="Dashboard preview"
            >
              <div className="overflow-hidden rounded-xl bg-transparent aspect-[680/450]">
                <Image
                  src="/Images/Homeassests/CtaSection/screen.png"
                  alt="Product dashboard preview"
                  width={680}
                  height={450}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default function TrialCtaSection() {
  return (
    <SuspenseWrapper>
      <TrialCta />
    </SuspenseWrapper>
  );
}
