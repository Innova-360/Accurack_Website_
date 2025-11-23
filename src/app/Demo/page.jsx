import React from "react";
import Ratings from "@/components/common/Ratings";
import FAQSection from "@/components/Home/FaqSection";
import CustomerSupportSection from "./_components/CustomerSupportSection";
import TransformSection from "@/components/common/Transform";
import FormSection from "./_components/FormSection";

const page = () => {
  return (
    <>
      <FormSection />
      <Ratings theme="gray" />
      <FAQSection theme="gray" />
      <CustomerSupportSection />
      <TransformSection />
    </>
  );
};

export default page;
