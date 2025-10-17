"use client";

import { useState, useMemo } from "react";
import { Calendar, Clock, Mail, User } from "lucide-react";

export default function ConfirmationCard({
  rawResponse,
  selectedTime,
  onAction,
}) {
  const [isLoading, setIsLoading] = useState(false);

  // 🧠 Extract name & email from raw text
  const parsed = useMemo(() => {
    const nameMatch = rawResponse.match(/\*\*Name:\*\*\s*([^\n]*)/i);
    const emailMatch = rawResponse.match(/\*\*Email:\*\*\s*([^\n]*)/i);

    const name = nameMatch ? nameMatch[1].trim() : "Unknown";
    const email = emailMatch ? emailMatch[1].trim() : "Unknown";

    return { name, email };
  }, [rawResponse]);

  const handleAction = async (action) => {
    setIsLoading(true);

    // ✉️ Send string action to parent (chat)
    if (onAction) {
      const actions = { backendFormatted: action, userFormatted: action };
      await onAction(actions); // this will call sendMessage(action)
    }

    setIsLoading(false);
  };

  return (
    <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-md border border-gray-100">
      <div className="text-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">
          Confirm Your Meeting
        </h2>
        <p className="text-gray-500 mt-1">Please review your booking details</p>
      </div>

      <div className="space-y-3">
        <div className="flex items-center space-x-3">
          <Calendar className="text-green-600 w-5 h-5" />
          <span className="text-gray-700">{selectedTime}</span>
        </div>

        <div className="flex items-center space-x-3">
          <Mail className="text-green-600 w-5 h-5" />
          <span className="text-gray-700">{parsed.email}</span>
        </div>

        <div className="flex items-center space-x-3">
          <User className="text-green-600 w-5 h-5" />
          <span className="text-gray-700 capitalize">{parsed.name}</span>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-2">
        <button
          onClick={() => handleAction("yes")}
          disabled={isLoading}
          className="py-2 rounded-xl font-medium text-white bg-green-600 hover:bg-green-700 disabled:bg-green-400"
        >
          {isLoading ? "..." : "Yes"}
        </button>

        <button
          onClick={() => handleAction("no")}
          disabled={isLoading}
          className="py-2 rounded-xl font-medium text-white bg-red-600 hover:bg-red-700 disabled:bg-red-400"
        >
          {isLoading ? "..." : "No"}
        </button>

        <button
          onClick={() => handleAction("edit email")}
          disabled={isLoading}
          className="py-2 rounded-xl font-medium text-gray-700 border border-gray-300 hover:bg-gray-50 col-span-2"
        >
          Edit Email
        </button>

        <button
          onClick={() => handleAction("edit time")}
          disabled={isLoading}
          className="py-2 rounded-xl font-medium text-gray-700 border border-gray-300 hover:bg-gray-50 col-span-2"
        >
          Edit Time
        </button>
      </div>
    </div>
  );
}
