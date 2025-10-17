"use client";

import { useState, useRef, useEffect } from "react";
import { X, MessageCircle } from "lucide-react";
import TimeSlotPicker from "./TimeSlotPicker";
import ConfirmationCard from "./Confirmation";
import { BookingSuccess } from "./BookingSuccess";
import Image from "next/image";

export default function BookDemo() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [showIntro, setShowIntro] = useState(false);
  const [selectedTime, setSelectedTime] = useState("");
  const [userId] = useState("user_" + Date.now());
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const startDemoChat = async () => {
    setShowIntro(false);
    setShowChat(true);
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: "book a demo",
          user_id: userId,
        }),
      });
      const data = await res.json();
      setMessages([{ from: "bot", text: data.response }]);
    } catch (err) {
      console.error("Error starting demo chat:", err);
      setMessages([
        {
          from: "bot",
          text: "Sorry, I'm having trouble connecting. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const sendMessage = async (customMessage) => {
    // Check if it's an object from TimeSlotPicker
    if (typeof customMessage === "object" && customMessage !== null) {
      const { backendFormatted, userFormatted } = customMessage;

      // Show the userFormatted message in the chat immediately
      setMessages((prev) => [...prev, { from: "user", text: userFormatted }]);
      setLoading(true);

      try {
        // Send backendFormatted to the backend API
        const res = await fetch("http://localhost:5000/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            message: backendFormatted,
            user_id: userId,
          }),
        });

        const data = await res.json();
        setMessages((prev) => [...prev, { from: "bot", text: data.response }]);
      } catch (err) {
        console.error("Chat API error:", err);
        setMessages((prev) => [
          ...prev,
          {
            from: "bot",
            text: "Sorry, something went wrong. Please try again.",
          },
        ]);
      } finally {
        setLoading(false);
      }

      return; // ✅ stop here, don’t run the normal text logic
    }

    // Normal text flow
    const messageToSend = (customMessage || input).trim();
    if (!messageToSend || loading) return;

    const newMessages = [...messages, { from: "user", text: messageToSend }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: messageToSend,
          user_id: userId,
        }),
      });

      const data = await res.json();
      setMessages((prev) => [...prev, { from: "bot", text: data.response }]);
    } catch (err) {
      console.error("Chat API error:", err);
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "Sorry, something went wrong. Please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleSlotClick = (slot) => {
    sendMessage(slot);
  };

  const renderBotMessage = (text) => {
    if (
      text.includes("Here are the currently booked times") ||
      text.includes("Booked Times (GMT")
    ) {
      return (
        <TimeSlotPicker
          rawText={text}
          onConfirm={handleSlotClick}
          setSelectedTime={setSelectedTime}
        />
      );
    }
    if (
      text.includes("I have you down for:") ||
      text.includes("Does this look right?")
    ) {
      return (
        <ConfirmationCard
          rawResponse={text}
          onAction={sendMessage}
          selectedTime={selectedTime}
        />
      );
    }
    if (text.includes("Demo booked!") || text.includes("Rescheduled")) {
      return <BookingSuccess userTime={selectedTime} text={text} />;
    }

    return (
      <div className="inline-block bg-white shadow-md rounded-2xl rounded-tl-sm p-4 text-gray-800 max-w-[85%] border border-gray-100">
        <p className="text-sm leading-relaxed whitespace-pre-wrap">{text}</p>
      </div>
    );
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !loading) sendMessage();
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end z-[999]">
      {/* Floating Chat Button */}
      {!showIntro && !showChat && (
        <button
          onClick={() => setShowIntro(true)}
          className="bg-gradient-to-r from-gradient-primary-1 to-gradient-primary-2 hover:opacity-90 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110"
        >
          <MessageCircle size={28} strokeWidth={2} />
        </button>
      )}

      {/* Intro Card */}
      {showIntro && !showChat && (
        <div className="bg-white rounded-3xl shadow-2xl p-6 w-80 border border-gray-100 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Image
                  width={100}
                  height={100}
                  src="https://i.pravatar.cc/50?img=47"
                  alt="AI Assistant"
                  className="w-12 h-12 rounded-full border-2 border-gradient-primary-1"
                />
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Amelia</h3>
                <p className="text-xs text-gray-500">AI Assistant</p>
              </div>
            </div>
            <button
              onClick={() => setShowIntro(false)}
              className="text-gray-400 hover:text-gray-700 transition p-1"
            >
              <X size={20} />
            </button>
          </div>

          <p className="text-gray-600 mb-5 text-sm leading-relaxed">
            Hi there! 👋 I'm Amelia, your AI assistant. How can I help you
            today?
          </p>

          <div className="space-y-2">
            <button
              onClick={startDemoChat}
              className="bg-gradient-to-r from-gradient-primary-1 to-gradient-primary-2 text-white px-5 py-3 rounded-full font-semibold w-full flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg"
            >
              Book a Demo
              <span className="text-lg">↗</span>
            </button>

            <button
              onClick={() => {
                setShowIntro(false);
                setShowChat(true);
              }}
              className="bg-gray-900 text-white px-5 py-3 rounded-full font-semibold w-full flex items-center justify-center gap-2 hover:bg-gray-800 transition-all shadow-md hover:shadow-lg"
            >
              <MessageCircle size={18} />
              Start Chat
            </button>
          </div>
        </div>
      )}

      {/* Chat Window */}
      {showChat && (
        <div className="bg-white rounded-3xl shadow-2xl w-[360px] h-[500px] flex flex-col overflow-hidden border border-gray-200 animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="flex justify-between items-center p-4 bg-gradient-to-r from-gradient-primary-1 to-gradient-primary-2 text-white">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Image
                  width={50}
                  height={50}
                  src="https://i.pravatar.cc/50?img=47"
                  alt="Amelia"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <h3 className="font-bold text-white">Amelia</h3>
                <p className="text-xs text-gray-100">Online • AI Assistant</p>
              </div>
            </div>
            <button
              onClick={() => {
                setShowChat(false);
                setShowIntro(false);
              }}
              className="text-white hover:bg-white/20 transition rounded-full p-1.5"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto bg-gradient-to-b from-gray-50 to-white">
            <div className="space-y-4">
              {messages.length === 0 && (
                <div className="text-center py-8">
                  <div className="inline-block p-4 bg-gradient-to-r from-gradient-primary-1 to-gradient-primary-2 rounded-full mb-3">
                    <MessageCircle size={32} className="text-white" />
                  </div>
                  <p className="text-gray-500 text-sm">
                    Start a conversation...
                  </p>
                </div>
              )}

              {messages.map((m, i) =>
                m.from === "bot" ? (
                  <div key={i} className="flex items-start gap-2 justify-start">
                    <Image
                      width={40}
                      height={40}
                      src="https://i.pravatar.cc/40?img=47"
                      alt="Amelia"
                      className="w-8 h-8 rounded-full flex-shrink-0 mt-1"
                    />
                    {renderBotMessage(m.text)}
                  </div>
                ) : (
                  <div key={i} className="flex justify-end">
                    <div className="bg-gradient-to-r from-gradient-primary-1 to-gradient-primary-2 text-white px-4 py-3 rounded-2xl rounded-tr-sm shadow-md max-w-[75%]">
                      <p className="text-sm">{m.text}</p>
                    </div>
                  </div>
                )
              )}

              {/* Typing Indicator */}
              {loading && (
                <div className="flex items-start gap-2">
                  <Image
                    width={40}
                    height={40}
                    src="https://i.pravatar.cc/40?img=47"
                    alt="Amelia"
                    className="w-8 h-8 rounded-full flex-shrink-0 mt-1"
                  />
                  <div className="bg-white border border-gray-200 px-5 py-3 rounded-2xl rounded-tl-sm shadow-sm">
                    <div className="flex items-center gap-1.5">
                      <span
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0ms" }}
                      />
                      <span
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "150ms" }}
                      />
                      <span
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "300ms" }}
                      />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t bg-white">
            <div className="flex items-center gap-2 bg-gray-100 rounded-full px-2 py-1">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your message..."
                disabled={loading}
                className="flex-1 bg-transparent px-3 py-2 text-sm focus:outline-none disabled:opacity-50"
              />
              <button
                onClick={() => sendMessage()}
                disabled={loading || !input.trim()}
                className="bg-gradient-to-r from-gradient-primary-1 to-gradient-primary-2 text-white rounded-full p-2.5 hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
