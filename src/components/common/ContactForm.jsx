"use client";
import { useId } from "react";
import ContactForm from "../Home/ContactForm";
export default function ContactFormSection({
  ShortForm = false,
  LongForm = false,
}) {
  if (ShortForm) {
    return <SmallContactForm />;
  } else if (LongForm) {
    return <LongFormComponent />;
  } else {
    return null;
  }
}
function SmallContactForm() {
  const nameId = useId();
  const emailId = useId();
  const phoneId = useId();
  const companyId = useId();
  const agreementId = useId();
  return (
    <form
      className="rounded-2xl border border-foamborder bg-background shadow-[0_6px_24px_-6px_rgba(0,0,0,0.15)] p-6 md:p-8"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="grid grid-cols-1 gap-5">
        {/* Name */}
        <div className="grid gap-2">
          <label
            htmlFor={nameId}
            className="text-sm font-medium font-text text-foreground"
          >
            Name
          </label>
          <input
            id={nameId}
            name="name"
            placeholder="Enter your name here"
            className="h-11 rounded-lg border border-foamborder bg-background px-3 text-sm outline-none ring-0 focus:border-teal-600/50 focus:ring-2 focus:ring-teal-500/30"
          />
        </div>
        {/* Email */}
        <div className="grid gap-2">
          <label
            htmlFor={emailId}
            className="text-sm font-medium font-text text-foreground"
          >
            Business email
          </label>
          <input
            id={emailId}
            type="email"
            name="email"
            placeholder="Enter your email here"
            className="h-11 rounded-lg border border-foamborder bg-background px-3 text-sm outline-none focus:border-teal-600/50 focus:ring-2 focus:ring-teal-500/30"
          />
        </div>
        {/* Phone */}
        <div className="grid gap-2">
          <label
            htmlFor={phoneId}
            className="text-sm font-medium font-text text-foreground"
          >
            Phone Number
          </label>
          <div className="flex h-11 items-center gap-2 rounded-lg border border-foamborder bg-background px-2">
            <div className="flex items-center gap-2 rounded-md border border-foamborder px-2 py-1.5">
              <span
                className="inline-flex h-2.5 w-2.5 rounded-full bg-green-500"
                aria-hidden
              />
              <select
                aria-label="Country code"
                className="bg-transparent pr-2 text-sm outline-none"
              >
                <option>US (+1)</option>
                <option>PK (+92)</option>
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
        {/* Company */}
        <div className="grid gap-2">
          <label
            htmlFor={companyId}
            className="text-sm font-medium font-text text-foreground"
          >
            Company name
          </label>
          <input
            id={companyId}
            name="company"
            placeholder="Enter your company name here"
            className="h-11 rounded-lg border border-foamborder bg-background px-3 text-sm outline-none focus:border-teal-600/50 focus:ring-2 focus:ring-teal-500/30"
          />
        </div>
        {/* :white_tick: Agreement Checkbox */}
        <div className="flex items-center gap-2 pt-2">
          <input
            type="checkbox"
            id={agreementId}
            name="agreement"
            className="h-4 w-4 rounded border border-foamborder accent-[#0B6D7E] cursor-pointer"
          />
          <label
            htmlFor={agreementId}
            className="text-[14px] leading-[20px] font-normal text-foreground font-body"
          >
            I agree to the Referral Program{" "}
            <a
              href="/terms"
              className="font-semibold text-[14px] leading-[20px] text-[#0B6D7E] hover:underline"
            >
              Terms & Conditions
            </a>
          </label>
        </div>
        {/* Submit Button */}
        <div className="pt-2">
          <Button
            href="/book-demo"
            className="group relative w-[193px] h-[51px] px-[25px] py-[15px] rounded-[44px] font-body font-bold text-[16px] leading-[100%] text-background bg-gradient-to-r from-gradient-primary-1 to-gradient-primary-2 flex items-center justify-center overflow-hidden"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-[10px]">
              Get My Free Consultant 
            </span>
            <span className="absolute right-2 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 flex items-center justify-center w-[44px] h-[44px] rounded-full bg-white">
              <span className="w-[20px] h-[20px] bg-gradient-primary-2 mask-center mask-contain mask-no-repeat [mask-image:url('/Images/Navassests/ReArrow.png')]"></span>
            </span>
          </Button>
        </div>
      </div>
    </form>
  );
}
function LongFormComponent() {
  return <ContactForm />;
}
