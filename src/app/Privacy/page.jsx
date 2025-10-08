"use client";

import DataSection from "@/components/common/DataSection";
import SmarterInventorySection from "@/components/common/SmarterInventory";

export default function Privacy() {
  return (
    <>
      <DataSection
        mainHeading="Privacy Policy: Protecting Your Data"
        updatedText="Updated on: 29 sept 2025"
        introHeading="Learn how Accurack collects, uses, protects, and shares your personal and business data."
        subSections={[
          {
            title: "Data Collection",
            content:
              "We collect information to provide the best possible service experience. This may include:Personal Information: Name, email address, phone number, billing details.Business Data: Company name, industry, inventory and supply chain details.Usage Data: How you interact with our software (e.g., pages visited, features used, error logs).AI Input Data: Information you upload or enter into the platform for forecasting and analysis.Cookies & Tracking: Data from cookies, browser type, and device information for analytics.",
          },
          {
            title: "Data Usage",
            content:
              "Your data is used to:Deliver and maintain our services.Personalize your experience and recommend features.Improve Accurack through analytics and troubleshooting.Train and enhance our AI forecasting models (always in anonymized/aggregated form).Communicate important updates, security alerts, or product news.We do not sell or rent your personal data to third parties.",
          },
          {
            title: "Data Protection & Security",
            content:
              " We take strong security measures to protect your information, including:End-to-end encryption of sensitive data.Multi-factor authentication for account access.Access controls to ensure only authorized staff can view limited data.Regular security audits and monitoring to prevent breaches.",
          },
          {
            title: "User Rights",
            content:
              "As an Accurack user, you have the right to:Access your personal and business data stored with us.Rectify incorrect or outdated information.Delete your account and associated data (subject to legal/contractual obligations).Restrict or object to certain processing activities.Data portability: Request a copy of your data in a machine-readable format.To exercise these rights, please contact us at accurackgamil.com",
          },
        ]}
        finalHeading="Have questions about your privacy? We’re here to help."
        buttonText="Contact Us Regarding Your Data"
        onButtonClick={() => console.log("Contact button clicked")}
      />

      <SmarterInventorySection
        heading="Stay Ahead with Smarter Inventory Insights"
        description="Get the latest insights, product updates, and exclusive tips delivered straight to your inbox."
        emailPlaceholder="Enter Your Email Address"
        arrowBtnText=" Subscribe Now "
        onEmailClick={() => console.log("Email clicked")}
        onArrowClick={() => console.log("Arrow clicked")}
      />
    </>
  );
}
