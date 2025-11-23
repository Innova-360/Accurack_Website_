"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DemoForm from "./DemoForm";
import FormSuccess from "@/components/common/FormSuccess";
import TimeSlotPicker from "@/components/common/TimeSlotPicker";
import ConfirmationCard from "@/components/common/Confirmation";
import { BookingSuccess } from "@/components/common/BookingSuccess";

export default function FormSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    countryCode: "PK(+92)",
    industry: "Retail",
    companySize: "51-200",
    interests: ["Product Demo"],
    hearAbout: "Social media",
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showTimeSlotPicker, setShowTimeSlotPicker] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showBookingSuccess, setShowBookingSuccess] = useState(false);
  const [chatResponse, setChatResponse] = useState("");
  const [userId] = useState("user_" + Date.now());

  const GOOGLE_DEMO_SCRIPT = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT;

  // Initialize chatbot on component mount
  useEffect(() => {
    const initializeChatbot = async () => {
      try {
        await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/chat`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: "book a demo",
            user_id: userId,
          }),
        });
      } catch (error) {
        console.error("Error initializing chatbot:", error);
      }
    };

    initializeChatbot();
  }, [userId]);

  const handleSubmit = async () => {
    if (!formData.fullName || !formData.email || !formData.company || !formData.phone) {
      alert("Please fill in all required fields!");
      return;
    }

    setIsSubmitting(true);
    try {
      const data = {
        formType: "demo",
        timestamp: new Date().toISOString(),
        ...formData,
        interests: formData.interests.join(", "),
      };

      // Submit to Google Script
      await fetch(GOOGLE_DEMO_SCRIPT, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      // Step 1: Send the name to chatbot
      await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: formData.fullName,
          user_id: userId,
        }),
      });

      // Step 2: Send the email and get booked time slots
      const emailResponse = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: formData.email,
          user_id: userId,
        }),
      });

      const emailData = await emailResponse.json();
      setChatResponse(emailData.response);
      
      // Show TimeSlotPicker with the booked slots
      setShowTimeSlotPicker(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong! Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSlotSelection = async (slot) => {
    setIsSubmitting(true);
    try {
      // Send selected time slot to chatbot
      const slotResponse = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: slot,
          user_id: userId,
        }),
      });

      const slotData = await slotResponse.json();
      setChatResponse(slotData.response);

      // Check if it's confirmation message
      if (slotData.response.includes("I have you down for:") || slotData.response.includes("Does this look right?")) {
        setShowTimeSlotPicker(false);
        setShowConfirmation(true);
      }
    } catch (error) {
      console.error("Error selecting slot:", error);
      alert("Something went wrong! Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleConfirmationResponse = async (response) => {
    setIsSubmitting(true);
    try {
      const confirmResponse = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: response,
          user_id: userId,
        }),
      });

      const confirmData = await confirmResponse.json();
      setChatResponse(confirmData.response);

      // Check if booking is successful
      if (confirmData.response.includes("Demo booked!") || confirmData.response.includes("Rescheduled")) {
        setShowConfirmation(false);
        setShowBookingSuccess(true);
        setTimeout(() => {
          setIsSuccess(true);
          setShowBookingSuccess(false);
        }, 3000);
      } else if (response.toLowerCase().includes("no") || response.toLowerCase().includes("change")) {
        // User wants to change - go back to time slot picker
        setShowConfirmation(false);
        setShowTimeSlotPicker(true);
      }
    } catch (error) {
      console.error("Error confirming booking:", error);
      alert("Something went wrong! Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background py-30 px-4">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
        {/* Left Sticky Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:sticky lg:top-30 bg-white p-8 lg:p-10 rounded-xl"
        >
          <h1 className="font-title text-3xl lg:text-4xl font-bold text-blue-900 mb-6 leading-tight">
            Join thousands Saving time
            <br />
            and Money using Accurack
          </h1>
          <p className="font-body text-gray-600 mb-8 leading-relaxed">
            Get in touch with our sales and product team for all your WMS queries.
          </p>
          <div className="space-y-6">
            <div>
              <label className="block text-xs text-gray-500 uppercase tracking-wide mb-2">
                Email
              </label>
              <a
                href="mailto:hello@accurack.ai"
                className="text-blue-900 font-semibold hover:text-blue-700 transition"
              >
                hello@accurack.ai
              </a>
            </div>
            <div>
              <label className="block text-xs text-gray-500 uppercase tracking-wide mb-2">
                Phone
              </label>
              <a
                href="tel:314-970-2115"
                className="text-blue-900 font-semibold hover:text-blue-700 transition"
              >
                314-970-2115
              </a>
              <p className="text-sm text-gray-500 mt-1">
                Available Monday to Friday 9 AM–6 PM CST
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Section: Animated Transition */}
        <AnimatePresence mode="wait">
          {!isSuccess && !showTimeSlotPicker && !showConfirmation && !showBookingSuccess ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
            >
              <DemoForm
                formData={formData}
                setFormData={setFormData}
                handleSubmit={handleSubmit}
                isSubmitting={isSubmitting}
              />
            </motion.div>
          ) : showTimeSlotPicker ? (
            <motion.div
              key="timeslot"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <TimeSlotPicker
                rawText={chatResponse} 
                onConfirm={handleSlotSelection}
              />
            </motion.div>
          ) : showConfirmation ? (
            <motion.div
              key="confirmation"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <ConfirmationCard 
                text={chatResponse} 
                onResponse={handleConfirmationResponse}
              />
            </motion.div>
          ) : showBookingSuccess ? (
            <motion.div
              key="booking-success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <BookingSuccess text={chatResponse} />
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            >
              <FormSuccess
                title="Thank You for Booking Your Demo!"
                message="We're excited to show you how AccuRack can optimize your warehouse operations."
                peopleJoinedText="Have any questions before your demo? Contact us here!"
                peopleCount="10,000+"
                ctaText="Contact"
                ctaLink="/Contact"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-center text-gray-500 italic mt-8"
      >
        You are in good company
      </motion.p>
    </div>
  );
}