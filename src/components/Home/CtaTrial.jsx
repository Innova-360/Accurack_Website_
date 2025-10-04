"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function TrialCtaSection() {
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
        {/* subtle backdrop glow */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_400px_at_20%_20%,hsl(var(--primary)/0.12),transparent)]" />

        <div className="relative grid items-center gap-10 p-8 md:p-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2
              id="trial-cta-heading"
              className="font-serif text-3xl leading-tight text-foreground md:text-5xl"
            >
              {"Try our End-to-End WHM system for "}
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
                className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(96.82deg,#00B6BC_-5.65%,#0C6676_105.24%)] px-6 py-3 text-base font-medium text-[hsl(var(--primary-foreground))] shadow-lg shadow-[hsl(var(--primary)/0.25)] transition-colors hover:bg-[hsl(var(--primary)/0.9)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--primary))]"
              >
                Get My Free Consultation
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            {/* device frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98, x: 20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mx-auto w-full max-w-[680px] rounded-3xl bg-[hsl(var(--foreground))/0.92] p-3 ring-1 ring-[hsl(var(--foreground))/0.12] shadow-xl"
              aria-label="Dashboard preview"
            >
              <div className="overflow-hidden rounded-2xl bg-background">
                <Image
                  src={"/Images/Homeassests/CtaSection/screen.png"}
                  width={680}
                  height={450}
                  alt="Product dashboard preview"
                  className="h-auto w-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
