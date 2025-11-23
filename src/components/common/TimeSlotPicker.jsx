"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Clock, Globe } from "lucide-react";
import { DateTime } from "luxon";

export default function TimeSlotPicker({ rawText, onConfirm, setSelectedTime }) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [timezone, setTimezone] = useState(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  );
  const [showTimezoneDropdown, setShowTimezoneDropdown] = useState(false);

  const CHICAGO_TZ = "America/Chicago";

  const timezones = [
    { label: "America/Chicago", offset: "GMT-5" },
    { label: "America/New_York", offset: "GMT-4" },
    { label: "America/Los_Angeles", offset: "GMT-7" },
    { label: "Asia/Karachi", offset: "GMT+5" },
    { label: "Europe/London", offset: "GMT+1" },
    { label: "Asia/Tokyo", offset: "GMT+9" },
    { label: "Australia/Sydney", offset: "GMT+11" },
    { label: "UTC", offset: "GMT+0" },
  ];

  const addDays = (date, days) =>
    new Date(date.getFullYear(), date.getMonth(), date.getDate() + days);
  const startOfDay = (date) =>
    new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0);
  const isSameDay = (a, b) =>
    a.getDate() === b.getDate() &&
    a.getMonth() === b.getMonth() &&
    a.getFullYear() === b.getFullYear();

  const bookedSlots = (() => {
    const matches = rawText.matchAll(
      /-\s*(\w{3}),\s*(\w{3})\s*(\d{1,2}):\s*(\d{1,2}):(\d{2})\s*(AM|PM)/gi
    );
    const monthMap = {
      Jan: 0,
      Feb: 1,
      Mar: 2,
      Apr: 3,
      May: 4,
      Jun: 5,
      Jul: 6,
      Aug: 7,
      Sep: 8,
      Oct: 9,
      Nov: 10,
      Dec: 11,
    };
    const slots = [];

    for (const m of matches) {
      const [, , month, day, hour, minute, meridian] = m;
      let h = parseInt(hour);
      if (meridian === "PM" && h !== 12) h += 12;
      if (meridian === "AM" && h === 12) h = 0;
      const chicagoDate = new Date(
        new Date().getFullYear(),
        monthMap[month],
        parseInt(day),
        h,
        parseInt(minute)
      );
      slots.push(chicagoDate);
    }
    return slots;
  })();

  // -----------------------
  // ✅ Generate time slots (9–5 Chicago time)
  // -----------------------
  const timeSlots = (() => {
    const slots = [];
    for (let h = 9; h < 17; h++) {
      for (let m of [0, 30]) {
        if (h === 16 && m === 30) continue;

        const chicagoDate = DateTime.fromObject(
          { hour: h, minute: m },
          { zone: CHICAGO_TZ }
        );

        const localDisplay = chicagoDate.setZone(timezone).toFormat("hh:mm a");
        slots.push({
          chicagoHour: h,
          chicagoMin: m,
          displayTime: localDisplay,
        });
      }
    }
    return slots;
  })();

  const getWeekDays = () => {
    const start = startOfDay(currentDate);
    return Array.from({ length: 7 }, (_, i) => addDays(start, i));
  };

  const isSlotBooked = (day, chicagoHour, chicagoMin) => {
    return bookedSlots.some((slot) => {
      return (
        slot.getDate() === day.getDate() &&
        slot.getMonth() === day.getMonth() &&
        slot.getFullYear() === day.getFullYear() &&
        slot.getHours() === chicagoHour &&
        slot.getMinutes() === chicagoMin
      );
    });
  };

  // -----------------------
  // ✅ Confirm booking — FIXED Luxon conversion
  // -----------------------
  const handleConfirm = () => {
    if (!selectedDate || !selectedSlot) return;
    const chosen = timeSlots.find((s) => s.displayTime === selectedSlot);
    if (!chosen) return;

    // 🧠 Step 1: Parse the time the user *actually saw* (their local time)
    const userDateTime = DateTime.fromFormat(
      `${selectedDate.getFullYear()}-${
        selectedDate.getMonth() + 1
      }-${selectedDate.getDate()} ${selectedSlot}`,
      "yyyy-M-d hh:mm a",
      { zone: timezone }
    );

    // 🎯 Step 2: Convert that local time into Chicago timezone for backend
    const chicagoTime = userDateTime.setZone(CHICAGO_TZ, {
      keepLocalTime: false,
    });

    // 🎨 Step 3: Format both
    const userFormatted = userDateTime.toFormat("EEE, MMM d 'at' hh:mm a");
    const backendFormatted = chicagoTime.toFormat("EEE, MMM d 'at' hh:mm a");
    console.log("Frontend view:", userFormatted);
    console.log("Backend payload:", backendFormatted);

    setSelectedTime(userFormatted);
    onConfirm({
      backendFormatted,
      userFormatted,
    });
  };

  const formatMonth = (date) =>
    date.toLocaleString("default", { month: "long", year: "numeric" });
  const formatDay = (date) =>
    ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"][date.getDay()];

  const nextWeek = () => setCurrentDate(addDays(currentDate, 7));
  const prevWeek = () => setCurrentDate(addDays(currentDate, -7));

  return (
    <div className="max-w-md bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="bg-white p-6 border-b">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center text-white font-bold">
            A
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Accurack Team</h3>
            <p className="text-sm text-gray-500">Demo Booking</p>
          </div>
        </div>

        <div className="mt-4 space-y-2">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Clock size={16} />
            <span>30 min</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Globe size={16} />
            <div className="relative">
              <button
                onClick={() => setShowTimezoneDropdown(!showTimezoneDropdown)}
                className="flex items-center gap-1 hover:text-teal-600 transition"
              >
                <span className="text-sm">Time Zone: {timezone}</span>
                <ChevronRight
                  size={14}
                  className={`transform transition ${
                    showTimezoneDropdown ? "rotate-90" : ""
                  }`}
                />
              </button>
              {showTimezoneDropdown && (
                <div className="absolute top-full left-0 mt-2 bg-white border rounded-lg shadow-lg z-10 w-64 max-h-60 overflow-y-auto">
                  {timezones.map((tz) => (
                    <button
                      key={tz.label}
                      onClick={() => {
                        setTimezone(tz.label);
                        setShowTimezoneDropdown(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-gray-50 flex justify-between items-center"
                    >
                      <span className="text-sm">{tz.label}</span>
                      <span className="text-xs text-gray-400">{tz.offset}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={prevWeek}
            className="p-2 hover:bg-gray-100 rounded-lg transition"
          >
            <ChevronLeft size={20} className="text-gray-600" />
          </button>
          <h2 className="text-lg font-semibold text-gray-900">
            {formatMonth(currentDate)}
          </h2>
          <button
            onClick={nextWeek}
            className="p-2 hover:bg-gray-100 rounded-lg transition"
          >
            <ChevronRight size={20} className="text-gray-600" />
          </button>
        </div>

        <div className="grid grid-cols-7 gap-2 mb-6">
          {getWeekDays().map((day, idx) => {
            const isSelected = selectedDate && isSameDay(day, selectedDate);
            return (
              <button
                key={idx}
                onClick={() => setSelectedDate(day)}
                className={`flex flex-col items-center p-2 rounded-lg transition ${
                  isSelected
                    ? "bg-teal-600 text-white"
                    : "hover:bg-gray-100 text-gray-700"
                }`}
              >
                <span className="text-xs font-medium mb-1">
                  {formatDay(day)}
                </span>
                <span className="text-2xl font-semibold">{day.getDate()}</span>
              </button>
            );
          })}
        </div>

        {selectedDate && (
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-2">
              {timeSlots.map((slot, idx) => {
                const isBooked = isSlotBooked(
                  selectedDate,
                  slot.chicagoHour,
                  slot.chicagoMin
                );
                const isSelected = selectedSlot === slot.displayTime;
                return (
                  <button
                    key={idx}
                    disabled={isBooked}
                    onClick={() => setSelectedSlot(slot.displayTime)}
                    className={`py-3 px-2 rounded-lg text-sm font-medium transition ${
                      isBooked
                        ? "bg-gray-100 text-gray-400 cursor-not-allowed line-through"
                        : isSelected
                        ? "bg-teal-600 text-white"
                        : "border-2 border-gray-200 text-gray-700 hover:border-teal-600"
                    }`}
                  >
                    {slot.displayTime}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {selectedSlot && selectedDate && (
          <button
            onClick={handleConfirm}
            className="w-full mt-6 py-3 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition"
          >
            Confirm Booking
          </button>
        )}
      </div>
    </div>
  );
}
