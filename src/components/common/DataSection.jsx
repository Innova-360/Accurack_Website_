"use client";

export default function DataSection({
  mainHeading,
  updatedText,
  introHeading,
  subSections = [],
  finalHeading,
  buttonText,
  onButtonClick,
}) {
  return (
    <section className="w-full flex flex-col items-center px-6 sm:px-10 md:px-20 py-16 md:py-24">
      {/* 🔹 Main Heading */}
      {mainHeading && (
        <h1 className="text-heading font-[800] text-[32px] leading-[44px] text-center max-w-[774px] font-title mb-4">
          {mainHeading}
        </h1>
      )}

      {/* 🔹 Updated Date */}
      {updatedText && (
        <p className="text-light font-body text-[16px] leading-[24px] text-center font-[400] mb-12">
          {updatedText}
        </p>
      )}

      {/* 🔹 Intro Heading */}
      {introHeading && (
        <h2 className="text-rowline2 font-body text-[24px] leading-[32px] font-medium text-left w-full max-w-[1200px] mb-8">
          {introHeading}
        </h2>
      )}

      {/* 🔹 Subsections */}
      {subSections.length > 0 && (
        <div className="flex flex-col gap-8 w-full max-w-[1200px]">
          {subSections.map((item, index) => (
            <div key={index} className="flex flex-col gap-2">
              {item.title && (
                <h3 className="text-rowline2 font-body font-[500] text-[18px] leading-[22px]">
                  {item.title}
                </h3>
              )}
              {item.content && (
                <p className="text-light  font-body font-[400] text-[16px] leading-[24px]">
                  {item.content}
                </p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* 🔹 Final CTA Section */}
      {(finalHeading || buttonText) && (
  <div className="flex flex-col items-start text-left mt-16 gap-6 w-full max-w-[1200px]">
    {finalHeading && (
      <h3 className="text-rowline2 font-body font-[500] text-[18px] leading-[22px]">
        {finalHeading}
      </h3>
    )}
    {buttonText && (
      <button
        onClick={onButtonClick}
        className="uppercase font-body font-medium text-[16px] text-light2 bg-bgpic2 rounded-[32px] px-4 sm:px-6 py-[10px] flex items-center justify-center gap-[4px] transition"
      >
        {buttonText}
      </button>
    )}
  </div>
)}

    
    </section>
  );
}
