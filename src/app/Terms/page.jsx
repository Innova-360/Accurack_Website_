"use client";

import DataSection from "@/components/common/DataSection";
import SmarterInventorySection from "@/components/common/SmarterInventory"

export default function Terms() {
  return (
    <>
      <DataSection
        mainHeading="Terms of Service: Your Agreement with Accurack"
        updatedText="Updated on: 29 sept 2025"
        introHeading="Understand the terms and conditions for using Accurack software and services."
        subSections={[
          {
            title: "Usage Policy",
            content:
              "Accurack provides AI-powered inventory and warehouse management solutions. By using our services, you agree to:Use the platform only for lawful business purposes.Keep your account credentials secure and confidential.Not engage in activities that disrupt, damage, or misuse the software.Refrain from attempting to reverse-engineer, copy, or resell our technology without permission.",
          },
          {
            title: "Prohibited activities include:",
            content:
              "Uploading malicious code or harmful content.Using the software for fraudulent or illegal operations.Sharing unauthorized access with non-licensed users.",
          },
          {
            title: "Licensing & Subscriptions",
            content:
              "Accurack is provided under a subscription-based license.Plans may include Free, Professional, and Enterprise tiers, each with different features and usage limits.Subscriptions renew automatically unless canceled before the billing cycle ends.Fees are billed annually or monthly, depending on the plan chosen.Customers are responsible for maintaining accurate billing information.",
          },
          {
            title: "Limitation of Liability",
            content:
              "Accurack strives to maintain reliable services, but we are not liable for:Any indirect, incidental, or consequential damages (e.g., lost profits, data loss, downtime).Errors caused by third-party integrations or internet connectivity issues.|User misuse, non-compliance with industry regulations, or unauthorized access to accounts.Accurack’s liability is limited to the amount you paid for your subscription during the 12 months prior to the claim.",
          },
          {
            title: "Updates & Amendments",
            content:
              "These Terms may be updated periodically to reflect changes in our services, regulations, or business practices.Users will be notified of major updates via email or platform announcements.Continued use of Accurack after changes means you accept the updated terms.Last Updated: September 2025 (example placeholder date).",
          },
        ]}
        finalHeading="Still have questions? We’re here to help."
        buttonText="Contact Us for Clarification"
        onButtonClick={() => console.log("Contact button clicked")}
      />


        <SmarterInventorySection
  heading="Stay Ahead with Smarter Inventory Insights"
  description="Get the latest insights, product updates, and exclusive tips delivered straight to your inbox."
  emailPlaceholder ="Enter Your Email Address"
  arrowBtnText=" Subscribe Now "
  onEmailClick={() => console.log("Email clicked")}
  onArrowClick={() => console.log("Arrow clicked")}
/>









    </>
  );
}
