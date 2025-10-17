import React from "react";
import TouchSection from "./_components/touchSection";
import Ratings from "@/components/common/Ratings";
import CustomerSupportSection from "../Demo/_components/CustomerSupportSection";
import TransformSection from "@/components/common/Transform";
import FAQSection from "@/components/Home/FaqSection";

const page = () => {
  return (
    <>
      <TouchSection />
      <Ratings theme="gray" />
      <FAQSection theme="gray" />
      <CustomerSupportSection />
      <TransformSection />
    </>
  );
};

export default page;
