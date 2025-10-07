"use client";
import React, { useState } from "react";
import { Link2, Package, Warehouse, BarChart3 } from "lucide-react";

export default function InfoTabs() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { icon: Link2, label: "All in One Solution" },
    { icon: Package, label: "Inventory Solution" },
    { icon: Warehouse, label: "AI Warehouse Suite" },
    { icon: BarChart3, label: "Performance Suite" },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto p-8">
      <div className="grid lg:grid-cols-4 grid-cols-2 items-center justify-start gap-8 bg-transparent ">
        {tabs.map((tab, index) => {
          const Icon = tab.icon;
          const isActive = activeTab === index;

          return (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`
                flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200
                ${
                  isActive
                    ? "text-gray-900 font-medium"
                    : "text-gray-600 hover:text-gray-900"
                }
              `}
            >
              <Icon className="w-5 h-5" />
              <span className="text-sm whitespace-nowrap">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
