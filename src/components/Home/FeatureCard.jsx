// FeatureCardGrid.jsx

import React from "react";

const FeatureCardGrid = ({ features }) => {
  return (
    <div
      className="max-w-6xl mb-10 rounded-xl border-6 border-[rgba(0, 97, 115, 1)]
     mx-auto p-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {features.map((feature, index) => (
        <div
          key={index}
          style={{ fontFamily: "var(--font-jakarta)" }}
          className="rounded-xl border border-cyan-700 px-9 py-13"
        >
          <h3 className=" font-Ja text-lg font-semibold text-black mb-2">
            {feature.title}
          </h3>
          <p className="text-sm text-gray-500">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FeatureCardGrid;
