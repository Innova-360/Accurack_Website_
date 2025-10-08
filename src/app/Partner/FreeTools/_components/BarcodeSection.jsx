"use client";

export default function BarcodeSection() {
  return (
    <section
      className="relative w-full min-h-[599px] flex items-center justify-center bg-gradient-to-b from-gradient-primary-3 to-bgpic2 px-4 sm:px-8 md:px-[120px] py-[80px]"
    >
      {/* Inner White Box */}
      <div className="bg-background rounded-[20px] w-full max-w-[1040px] flex flex-col items-center justify-center text-center gap-[40px] px-6 sm:px-10 md:px-[64px] py-[64px] shadow-[0_8px_25px_rgba(0,0,0,0.08)]">
        
        {/* Tag */}
        <div className="font-body text-line border border-line rounded-2xl px-3 py-2 text-sm font-medium leading-5">
          Operational Tools
        </div>

        {/* Heading */}
        <h2 className="font-heading text-rowline2 text-[28px] sm:text-[36px] lg:text-[48px] font-medium leading-[38px] sm:leading-[48px] lg:leading-[60px] max-w-[850px]">
          Generate Custom Barcodes to Simplify Product Tracking
        </h2>

        {/* Description */}
        <p className="font-body text-light text-[14px] sm:text-[16px] leading-[24px] max-w-[720px]">
          Our barcode generator allows you to create and print custom barcodes for easy scanning and improved inventory accuracy—no extra software needed.
        </p>

        {/* Button */}
        <button className="font-body font-bold text-[16px] text-white rounded-full px-[55px] py-[15px] flex items-center justify-center gap-[17px] bg-gradient-to-r from-gradient-primary-1 to-gradient-primary-2 hover:opacity-90 transition">
          Generate Barcodes
        </button>
      </div>
    </section>
  );
}
