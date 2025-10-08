"use client";

import { motion } from "framer-motion";

function Check() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M20 7L10 17l-6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FireIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M8.5 16.5c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2zm5.5-2c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1-1-.4-1-1zm-7 0c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1-1-.4-1-1z"/>
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-18c4.418 0 8 3.582 8 8s-3.582 8-8 8-8-3.582-8-8 3.582-8 8-8z"/>
      <path d="M12 18c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm0-4c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z"/>
    </svg>
  );
}

export default function PricingSection() {
  // Pricing plans data - easily customizable
  const pricingPlans = [
    {
      id: 1,
      name: "Standard",
      price: "$15",
      billing: "/month",
      description: "Comprehensive, customizable solutions for large organizations with complex inventory and operational needs.",
      features: [
        "All Professional features",
        "Advanced CRM/ERP Integration",
        "Dedicated Account Manager",
        "Custom Report Development",
        "On-site Training",
        "24/7 Phone Support"
      ],
      buttonText: "Get Started",
      isPopular: false
    },
    {
      id: 2,
      name: "Professional Plan",
      price: "$25",
      billing: "/month (billed annually)",
      description: "Advanced tools for growing companies. Includes AI forecasting, multi-warehouse support, and enhanced integrations.",
      features: [
        "All Basic features",
        "AI Forecasting",
        "Multi-Warehouse Management",
        "Automated Replenishment",
        "QuickBooks/Xero Integration",
        "Priority Email/Chat Support"
      ],
      buttonText: "Get Started",
      isPopular: true
    },
    {
      id: 3,
      name: "Enterprise Plan",
      price: "$45",
      billing: "/month",
      description: "Comprehensive, customizable solutions for large organizations with complex inventory and operational needs.",
      features: [
        "All Professional features",
        "Advanced CRM/ERP Integration",
        "Dedicated Account Manager",
        "Custom Report Development",
        "On-site Training",
        "24/7 Phone Support"
      ],
      buttonText: "Get Started",
      isPopular: false
    }
  ];

  return (
    <section aria-labelledby="pricing-heading" className="relative bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2
            id="pricing-heading"
            className="font-heading text-3xl md:text-4xl font-medium text-gray-900 mb-4"
          >
            Our Range of Service Level Options
          </h2>
        </motion.div>

        {/* Pricing Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className={`relative rounded-2xl border border-gray-300 p-6 md:p-8 flex flex-col h-full ${
                plan.isPopular 
                  ? 'bg-gradient-to-br from-cyan-200 via-white to-white' 
                  : 'bg-gray-50'
              }`}
            >
              {/* Popular Badge - Only for middle card */}
              {plan.isPopular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <FireIcon />
                    Popular
                  </span>
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                {plan.name}
              </h3>

              {/* Price */}
              <div className="mb-4">
                <span className="text-3xl md:text-4xl font-bold text-gray-900">
                  {plan.price}
                </span>
                <span className="text-gray-600 text-lg ml-1">
                  {plan.billing}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                {plan.description}
              </p>

              {/* Features List */}
              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-green-500 text-white flex-shrink-0">
                      <Check />
                    </span>
                    <span className="text-sm text-gray-700 leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className="w-full py-3 px-6 rounded-full font-semibold text-white bg-primary hover:bg-gray-800"
              >
                {plan.buttonText}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}