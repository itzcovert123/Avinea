"use client"

import type React from "react"
import { useState, useEffect, useContext, useRef } from "react"
import { X, Info, Phone, Mail, User, IndianRupee } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import toast from "react-hot-toast"
import ReCAPTCHA from "react-google-recaptcha"
import { checkIfSubmitted } from "@/lib/checkIfSubmitted"
import signup from "@/lib/signup"
import context from "@/lib/context"

type isSubmitProps = {
  isSubmitted: boolean
  setIsSubmitted: React.Dispatch<React.SetStateAction<boolean>>
}

export default function DiscountPopup({ isSubmitted, setIsSubmitted }: isSubmitProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [errors, setErrors] = useState({ name: "", email: "", phone: "", recaptcha: "" })
  const [showTooltip, setShowTooltip] = useState(false)
  const { setAuthenticated } = useContext(context)
  const recaptchaRef = useRef<ReCAPTCHA>(null)

  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    checkIfSubmitted(setIsSubmitted).catch((err) => {})
  }, [setIsSubmitted])

  useEffect(() => {
    if (isSubmitted) return
    const showPopup = () => {
      setIsVisible(true)
      setTimeout(() => setIsTransitioning(true), 50)
    }

    const initialTimer = setTimeout(showPopup, 20000)
    const recurringTimer = setInterval(() => {
      if (!isSubmitted) showPopup()
    }, 20000)

    return () => {
      clearTimeout(initialTimer)
      clearInterval(recurringTimer)
    }
  }, [isSubmitted])

  const handleClose = () => {
    setIsTransitioning(false)
    setTimeout(() => setIsVisible(false), 300)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrors({ name: "", email: "", phone: "", recaptcha: "" })

    if (!name) return setErrors((prev) => ({ ...prev, name: "Name is required" }))
    if (!email.includes("@")) return setErrors((prev) => ({ ...prev, email: "Invalid email" }))
    if (phone.length !== 10) return setErrors((prev) => ({ ...prev, phone: "Enter 10-digit number" }))

    const token = recaptchaRef.current?.getValue()
    if (!token) return setErrors((prev) => ({ ...prev, recaptcha: "Please verify you are not a robot" }))

    await toast.promise(
      signup(name, email, phone, token),
      {
        loading: "processing...",
        success: () => {
          setIsSubmitted(true)
          handleClose()
          setAuthenticated(true)
          setName("")
          setPhone("")
          setEmail("")
          recaptchaRef.current?.reset()
          const whatsappNumber = "9657119798"
          const message = `Hi, I want to enquire about Vyom Sigma Avinea Hadapsar Project.%0AName: ${name}%0AEmail: ${email}%0APhone: ${phone}`
          window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank")
          return "success"
        },
        error: (err) => `${err.toString()}`,
      }
    )
  }

  if (isSubmitted || !isVisible) return null

  const modalClasses = `
    bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl w-full max-w-[95vw] sm:max-w-xl md:max-w-4xl relative border border-slate-200/50 
    flex flex-col md:flex-row 
    transform transition-all duration-300 ease-out
    ${isTransitioning ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
  `
  const overlayClasses = `
    fixed inset-0 min-h-screen bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-2 xs:p-4 
    transition-opacity duration-300
    ${isTransitioning ? 'opacity-100' : 'opacity-0'}
  `

  return (
    <div
      className={overlayClasses}
      onClick={handleClose}
    >
      <div
        className={modalClasses}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="fixed top-6 right-6 z-[99] p-2 rounded-full bg-white/90 hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl md:absolute md:top-3 md:right-3 md:z-10 border border-slate-200/50"
        >
          <X className="w-5 h-5 text-slate-700" />
        </button>

        {/* Modal Content */}
        <div className="flex-1 h-full overflow-y-auto max-h-[90vh] flex flex-col md:flex-row">
          {/* Info Tooltip */}
          <div className="absolute top-3 left-3 z-20">
            <div
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              onClick={() => setShowTooltip((prev) => !prev)}
              className="relative"
            >
              <div className="p-2 rounded-full bg-white/90 hover:bg-slate-50 shadow-md cursor-pointer transition-all border border-slate-200/50">
                <Info className="w-5 h-5 text-slate-700" />
              </div>

              {showTooltip && (
                <div className="absolute top-10 left-0 w-64 sm:w-72 bg-white border border-slate-200 rounded-xl shadow-2xl p-3 sm:p-4 text-sm text-slate-700 z-30 backdrop-blur-sm">
                  <h4 className="font-semibold text-slate-900 mb-2">Terms & Conditions</h4>
                  <ul className="list-disc pl-4 space-y-1 text-xs sm:text-sm">
                    <li>Enjoy an additional guaranteed privilege — your instant discount code applies over and above the final lowest offer price confirmed after your site visit.</li>
                    <li>Valid for 7 days from the date you receive this message</li>
                    <li>Use the code on the top right-hand side, or mention it to reception during your site visit</li>
                    <li>This is a unique & personalised code only for you</li>
                    <li>If your visit plan changes, inform us — we'll revise or reissue the code accordingly</li>
                    <li>Feel free to connect for any assistance</li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Left Side - Form */}
          <div className="flex-1 p-3 sm:p-6 md:p-8 flex flex-col justify-center order-2 md:order-1">
            <div className="max-w-sm mx-auto w-full">
              <div className="text-center mb-4 sm:mb-6 md:mb-8">
                <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-slate-900 mb-1 sm:mb-2">
                  Exclusive Offer
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm md:text-base">
                  Grab your coupon code here
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6">
                {/* Name Field */}
                <div>
                  <Label htmlFor="name" className="text-xs sm:text-sm font-semibold text-slate-900 mb-1 block">
                    Name *
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-slate-400" />
                    <Input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your name"
                      className="pl-8 sm:pl-10 h-10 sm:h-11 md:h-12 border-slate-200 focus:border-blue-500 focus:ring-blue-500/20 text-slate-900 placeholder-slate-500 bg-white/50 backdrop-blur-sm w-full transition-all duration-300 hover:border-slate-300"
                      autoComplete="name"
                    />
                  </div>
                  {errors.name && <p className="text-red-500 text-xs sm:text-sm mt-1 font-medium">{errors.name}</p>}
                </div>
                {/* Email Field */}
                <div>
                  <Label htmlFor="email" className="text-xs sm:text-sm font-semibold text-slate-900 mb-1 block">
                    Email *
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-slate-400" />
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="pl-8 sm:pl-10 h-10 sm:h-11 md:h-12 border-slate-200 focus:border-blue-500 focus:ring-blue-500/20 text-slate-900 placeholder-slate-500 bg-white/50 backdrop-blur-sm w-full transition-all duration-300 hover:border-slate-300"
                      autoComplete="email"
                    />
                  </div>
                  {errors.email && <p className="text-red-500 text-xs sm:text-sm mt-1 font-medium">{errors.email}</p>}
                </div>
                {/* Phone Field */}
                <div>
                  <Label htmlFor="phone" className="text-xs sm:text-sm font-semibold text-slate-900 mb-1 block">
                    Phone Number *
                  </Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-slate-400" />
                    <Input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Enter your phone number"
                      className="pl-8 sm:pl-10 h-10 sm:h-11 md:h-12 border-slate-200 focus:border-blue-500 focus:ring-blue-500/20 text-slate-900 placeholder-slate-500 bg-white/50 backdrop-blur-sm w-full transition-all duration-300 hover:border-slate-300"
                      maxLength={10}
                      autoComplete="tel"
                    />
                  </div>
                  {errors.phone && <p className="text-red-500 text-xs sm:text-sm mt-1 font-medium">{errors.phone}</p>}
                </div>

                {/* reCAPTCHA */}
                <div>
                  <ReCAPTCHA
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
                    ref={recaptchaRef}
                  />
                  {errors.recaptcha && <p className="text-red-500 text-xs sm:text-sm mt-1 font-medium">{errors.recaptcha}</p>}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full h-10 sm:h-11 md:h-12 bg-slate-900 hover:bg-slate-800 active:bg-slate-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 border-0"
                >
                  Get in Touch
                </Button>
              </form>
            </div>
          </div>

          {/* Right Side - Offer Section */}
          <div className="flex-1 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-y-auto order-1 md:order-2 h-56 sm:h-72 md:h-auto rounded-2xl shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent"></div>
            <div className="relative h-full flex flex-col items-center justify-start md:justify-center p-4 sm:p-6 md:p-10 text-white text-left">
              <h3 className="text-base sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 text-blue-300 drop-shadow-md">
                We Promise
              </h3>
              <div className="space-y-3 sm:space-y-6">
                <p className="flex items-center text-xs sm:text-sm md:text-base leading-relaxed drop-shadow-sm">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-blue-300 mr-2 sm:mr-3 shrink-0" />
                  Instant Call Back
                </p>
                <p className="flex items-center text-xs sm:text-sm md:text-base leading-relaxed drop-shadow-sm">
                  <User className="w-4 h-4 sm:w-5 sm:h-5 text-blue-300 mr-2 sm:mr-3 shrink-0" />
                  Free Site Visit
                </p>
                <p className="flex items-center text-xs sm:text-sm md:text-base leading-relaxed drop-shadow-sm">
                  <IndianRupee className="w-4 h-4 sm:w-5 sm:h-5 text-blue-300 mr-2 sm:mr-3 shrink-0" />
                  Lowest Price Guaranteed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}