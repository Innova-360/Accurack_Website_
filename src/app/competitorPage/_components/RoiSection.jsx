"use client";
import Logos from "@/components/common/Logo";

export default function ROISection() {
  const data = [
    { title: "1.3M", text: "inventory cost saved (Extract) " },
    { title: "20%", text: "reduction in labor hours maintaining metadata (Supercool)" },
    { title: "12%", text: "reduction in sales backorders (Koken USA)" },
    { title: "73%", text: "reduction in time spent gathering analytics (Zoox)" },
    { title: "45 Hours", text: "a week saved in order entry tasks (Mack and Rex)" },
  ];

  return (
    <section className="w-full max-w-[1440px] bg-bgnew mx-auto py-20 px-4 mb-15">

      <div className="bg-bgnew mb-12">
        <Logos />
      </div>

      {/* Main Heading */}
      <h2 className="text-center font-heading font-medium text-[28.88px] leading-[36.1px] text-rowline2 mb-16">
        ROI Our Customers Are Seeing with Accurack
      </h2>

      {/* Subheadings + Text + Divider */}
      <div className="flex flex-col sm:flex-col md:flex-row justify-center items-center md:items-start gap-8 md:gap-16">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center relative w-full sm:w-full md:w-auto">
            {/* Subheading */}
            <h3 className="font-text font-medium text-[28.88px] leading-[36.1px] text-rowline2 mb-4">
              {item.title}
            </h3>
            {/* Text */}
            <p className="font-desc font-normal text-[13.64px] leading-[20.46px] text-desclight opacity-60 mb-4 px-2 sm:px-0">
              {item.text}
            </p>
            {/* Vertical Divider (desktop only) */}
            {index < data.length - 1 && (
              <div className="hidden md:block absolute right-[-32px] top-0 h-full w-[1px] bg-black opacity-100"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
