"use client";

import ContactFormSection from "@/components/common/ContactForm";

export default function FreeToolContact() {
  return (
    <section
      aria-labelledby="contact-heading"
      className="relative bg-lightshade mt-20"
    >
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid items-start gap-10 md:grid-cols-2 md:gap-14">
          {/* Left content */}
          <div className="space-y-6">
            <h2
              id="contact-heading"
              className="font-serif text-3xl leading-tight text-foreground md:text-5xl"
            >
              Apply to get you unique referral code
            </h2>

            <p className="max-w-xl text-sm text-muted-foreground md:text-base">
              Fill this simple form and we will connect with you!
            </p>

            <h2
              id="contact-heading"
              className="text-base leading-tight text-light font-body pt-33"
            >
              Email:
            </h2>

            <p className="max-w-xl text-2xl font-bold text-text font-body md:text-base">
              hello@accurack.ai
            </p>
            <h2
              id="contact-heading"
              className="text-base leading-tight text-light font-body"
            >
              Phone:
            </h2>

            <p className="max-w-xl text-2xl font-bold text-text font-body md:text-base">
              314-970-2115
            </p>
            <p className="max-w-xl text-sm  text-light font-body md:text-base">
              Available Monday to Friday 9 AM -6 PM GMT
            </p>
          </div>

          {/* Right form */}
          <ContactFormSection ShortForm={true} />
        </div>
      </div>
    </section>
  );
}
