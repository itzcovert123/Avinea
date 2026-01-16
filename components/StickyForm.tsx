"use client"
import { useState } from "react"
import type React from "react"
import toast from "react-hot-toast"

export default function StickyForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!name) return toast.error("Name is required")
    if (!email.includes("@")) return toast.error("Invalid email")
    if (phone.length !== 10) return toast.error("Enter 10 digit phone number")

    const whatsappNumber = "918237311365"
    const message = `Hi, I want to enquire about Mantra Burgundy Series.
Name: ${name}
Email: ${email}
Phone: ${phone}`

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`

    window.location.href = whatsappUrl
  }

  const handleMobileEnquire = () => {
    const whatsappNumber = "918237311365"
    const message = "Hi, I want to enquire about Mantra Burgundy Series."

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`

    window.location.href = whatsappUrl
  }

  return (
    <>
      {/* Desktop form - Professional white/blue theme */}
      <div className="hidden lg:block fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur-md shadow-2xl border-t border-slate-200/50 z-[9999]">
        <div className="max-w-screen-xl mx-auto px-4">
          <form
            className="flex flex-wrap items-center gap-4 py-6"
            onSubmit={handleSubmit}
          >
            <span className="font-semibold text-slate-900 text-lg">
              Enquire Now
            </span>

            <input
              type="text"
              placeholder="Name*"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="flex-1 min-w-[160px] bg-slate-50/50 border-b-2 border-slate-200 focus:border-blue-500 focus:bg-white px-3 py-2 text-slate-900 placeholder-slate-500 transition-all duration-300 outline-none rounded-md hover:bg-white"
            />

            <input
              type="email"
              placeholder="Email*"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 min-w-[160px] bg-slate-50/50 border-b-2 border-slate-200 focus:border-blue-500 focus:bg-white px-3 py-2 text-slate-900 placeholder-slate-500 transition-all duration-300 outline-none rounded-md hover:bg-white"
            />

            <input
              type="tel"
              placeholder="Phone*"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="flex-1 min-w-[160px] bg-slate-50/50 border-b-2 border-slate-200 focus:border-blue-500 focus:bg-white px-3 py-2 text-slate-900 placeholder-slate-500 transition-all duration-300 outline-none rounded-md hover:bg-white"
            />

            <button
              type="submit"
              className="bg-slate-900 hover:bg-slate-800 active:bg-slate-700 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 text-sm"
            >
              Enquire Now
            </button>
          </form>
        </div>
      </div>

      {/* Mobile: Blue enquire button */}
      <div className="block lg:hidden fixed bottom-0 left-0 w-full z-[9999] shadow-2xl">
        <button
          onClick={handleMobileEnquire}
          className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 active:from-blue-800 active:to-blue-900 text-white py-4 text-center font-semibold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 border-t-4 border-blue-500/30"
        >
          📱 Enquire Now
        </button>
      </div>
    </>
  )
}
