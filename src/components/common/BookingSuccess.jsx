"use client"

import { Clock } from "lucide-react"
import { useEffect, useState } from "react"

export function BookingSuccess({ text, userTime }) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [meetLink, setMeetLink] = useState("")
  const [isRescheduled, setIsRescheduled] = useState(false)

  // Extract info from text
  useEffect(() => {
    if (!text) return

    setIsRescheduled(text.includes("Rescheduled"))

    const lines = text.split("\n").map((l) => l.trim()).filter(Boolean)

    for (let i = 0; i < lines.length; i++) {
      if (lines[i].match(/\d{1,2}:\d{2}\s*[AP]M/)) {
        if (lines[i + 1] && !lines[i + 1].includes("@") && !lines[i + 1].includes("Meet")) {
          setName(lines[i + 1])
        }
        if (lines[i + 2] && lines[i + 2].includes("@")) {
          setEmail(lines[i + 2])
        }
      }
      if (lines[i].includes("@") && !lines[i].includes("Meet")) {
        setEmail(lines[i])
      }
    }

    const meetMatch = text.match(/(https:\/\/meet\.google\.com\/[a-z-]+)/)
    if (meetMatch) setMeetLink(meetMatch[1])
  }, [text])

  // Parse userTime like "Tue, Oct 21 at 9:00 PM"
  const parseUserTime = (timeString) => {
    if (!timeString) return { date: "", start: "", end: "" }

    const [datePart, timePart] = timeString.split(" at ")
    if (!timePart) return { date: datePart || "", start: "", end: "" }

    const [start] = timePart.split(/[–-]/).map((t) => t.trim())

    // Calculate end time (+30 mins)
    const timeMatch = start.match(/(\d{1,2}):(\d{2})\s*([AP]M)/i)
    if (!timeMatch) return { date: datePart.trim(), start, end: "" }

    let [_, hour, minute, period] = timeMatch
    hour = parseInt(hour)
    minute = parseInt(minute)

    if (period === "PM" && hour !== 12) hour += 12
    if (period === "AM" && hour === 12) hour = 0

    minute += 30
    if (minute >= 60) {
      minute -= 60
      hour += 1
    }
    if (hour >= 24) hour -= 24

    const endPeriod = hour >= 12 ? "PM" : "AM"
    const endHour = hour % 12 === 0 ? 12 : hour % 12
    const endMinute = minute.toString().padStart(2, "0")

    const endTime = `${endHour}:${endMinute} ${endPeriod}`
    return { date: datePart.trim(), start, end: endTime }
  }

  const { date, start, end } = parseUserTime(userTime)

  // Send confirmation email automatically
  useEffect(() => {
    if (!email || !name || !userTime) return

    const sendEmail = async () => {
      try {
        const res = await fetch("/api/mail", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            to: email,
            gmail_name: "Demo Confirmation",
            gmail_date: date,
            gmail_time: `${start} – ${end}`,
            gmail_organizerName: "Accurack Team",
            gmail_organizerEmail: "no-reply@accurack.ai",
            gmail_guestsEmail: email,
            gmail_meetingButton: "Join with Google Meet",
            gmail_meetingLink: meetLink || "",
            gmail_email: email,
          }),
        })

        const data = await res.json()
        if (data.success) {
          console.log("✅ Email sent successfully")
        } else {
          console.error("❌ Email failed:", data.error)
        }
      } catch (error) {
        console.error("❌ Error sending email:", error)
      }
    }

    sendEmail()
  }, [email, name, meetLink, userTime])

  return (
    <div className="bg-gradient-to-br from-teal-50 to-white rounded-2xl shadow-lg p-6 max-w-sm border-2 border-teal-200">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-full bg-teal-600 flex items-center justify-center">
          <svg viewBox="0 0 24 24" fill="none" stroke="white" className="w-7 h-7">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-800">
            {isRescheduled ? "Rescheduled!" : "Booked!"}
          </h3>
          <p className="text-sm text-gray-600">
            {isRescheduled ? "Your demo has been rescheduled" : "Your demo is confirmed"}
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl p-4 mb-4 space-y-3 shadow-sm">
        <div className="flex items-start gap-3">
          <Clock size={18} className="text-teal-600 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-xs text-gray-500 font-medium">Date & Time</p>
            <p className="text-sm text-gray-800 font-semibold">{`${date} at ${start} – ${end}`}</p>
            <p className="text-xs text-gray-500 mt-0.5">30 minutes</p>
          </div>
        </div>

        {name && (
          <div className="flex items-start gap-3">
            <div className="w-4 h-4 mt-0.5 flex-shrink-0">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-teal-600">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium">Name</p>
              <p className="text-sm text-gray-800 font-semibold">{name}</p>
            </div>
          </div>
        )}

        {email && (
          <div className="flex items-start gap-3">
            <div className="w-4 h-4 mt-0.5 flex-shrink-0">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-teal-600">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium">Email</p>
              <p className="text-sm text-gray-800 font-semibold break-all">{email}</p>
            </div>
          </div>
        )}

        {meetLink && (
          <div className="flex items-start gap-3 pt-2 border-t">
            <div className="w-4 h-4 mt-0.5 flex-shrink-0">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-teal-600">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-xs text-gray-500 font-medium mb-1">Video Meeting</p>
              <a
                href={meetLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-teal-600 hover:text-teal-700 font-semibold underline break-all"
              >
                Join Google Meet
              </a>
            </div>
          </div>
        )}
      </div>

      <div className="text-center">
        <p className="text-sm text-gray-600 font-medium">See you then! 👋</p>
      </div>
    </div>
  )
}
