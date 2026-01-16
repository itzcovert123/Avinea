import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Building2, Calendar, Home, Download, Check, Sparkles } from "lucide-react"

export default function PropertyDetails() {
  const projectData = {
    name: "Vyom Sigma Avinea Hadapsar",
    developer: "",
    location: "Hadapsar, Pune",
    rating: 4.8,
    reviews: 109,
    bookingAmount: "5 Lacs",
    priceStart: "1.29* Cr",
  }

  const keyStats = [
    
    {
      icon: Home,
      label: "Floors",
      value: "3B+G+2P+37",
    },
    {
      icon: Calendar,
      label: "Possession",
      value: "December 2029",
    },
  ]

  const configurations = [
    { bhk: "2 BHK", area: "946 - 960 sq.ft", price: "1.29 - 1.31Cr onwards" },
    { bhk: "3 BHK", area: "1213 - 1262 sq.ft", price: "1.69 - 1.76 Cr onwards" },
    { bhk: "4 BHK", area: "1780 sq.ft", price: "2.42Cr onwards" },
  ]

  const paymentPlans = [
    {
      name: "Flexible Payment Plan",
      structure: "Custom payment options",
      details: "Tailored to your financial needs",
    },
    {
      name: "30:70 Payment Plan",
      structure: "30% Down | 70% on Possession",
      details: "Mantra Burgundy's signature flexible plan",
    },
    {
      name: "95:05 Payment Plan",
      structure: "95% on Possession | 5% Booking",
      details: "Maximum down payment flexibility",
    },
  ]

  const whatsappLink =
    "https://wa.me/919657119798?text=" +
    encodeURIComponent("Send me Brochure of Vyom Sigma Avinea Hadapsar , Pune")

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/50">
      {/* HEADER - Enhanced Glass Effect */}
      <div className="border-b border-slate-200/50 bg-white/80 backdrop-blur-xl relative overflow-hidden shadow-xl">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-white/20 to-blue-500/5 -skew-x-12 opacity-0 group-hover:opacity-100 transition-all duration-1000 -translate-x-full"></div>
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8">
          <div className="space-y-8">
            <div className="group">
              <h1 className="text-5xl md:text-6xl font-serif font-black bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent leading-tight group-hover:drop-shadow-2xl transition-all duration-700">
                {projectData.name}
              </h1>
              <p className="mt-4 text-xl text-slate-600 font-semibold bg-slate-100/50 px-4 py-2 rounded-full inline-block animate-pulse">
                {projectData.developer}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-8">
              <div className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-blue-400/10 rounded-2xl group hover:bg-blue-500/20 transition-all duration-500 shadow-xl hover:shadow-2xl border border-blue-200/50 hover:scale-105">
                <MapPin className="h-6 w-6 text-blue-500 group-hover:animate-bounce group-hover:scale-110 transition-all" />
                <span className="text-xl font-bold text-slate-900">{projectData.location}</span>
              </div>
              <div className="flex items-center gap-3 px-6 py-3 bg-white/60 backdrop-blur-sm rounded-2xl shadow-2xl border border-slate-200/50 group hover:shadow-3xl hover:-translate-y-1 transition-all duration-500">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 transition-all duration-500 ${
                        i < Math.floor(projectData.rating)
                          ? "fill-blue-500 text-blue-500 drop-shadow-lg animate-pulse"
                          : "text-slate-400"
                      }`}
                    />
                  ))}
                </div>
                <span className="font-black text-xl text-slate-900">
                  {projectData.rating}
                </span>
                <span className="text-lg font-semibold text-slate-600 ml-1">
                  ({projectData.reviews}+ Reviews)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8">
        {/* Key Metrics Section - GLASSMORPHISM CARDS */}
        <div className="mb-20 relative group">
          <div className="absolute inset-0 border-4 border-dashed border-blue-200/80 rounded-3xl -m-6 pointer-events-none z-0 animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-white/30 to-blue-500/20 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-1000 -m-12"></div>
          <h2 className="text-4xl md:text-5xl font-serif font-black bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent mb-12 relative z-10 group-hover:scale-105 transition-all duration-700 drop-shadow-2xl">
            Project Highlights ✨
          </h2>
          <div className="grid gap-8 sm:grid-cols-3 relative z-10">
            {keyStats.map((stat, idx) => {
              const IconComponent = stat.icon
              return (
                <Card
                  key={idx}
                  className="border border-slate-200/50 bg-white/70 backdrop-blur-xl p-10 hover:border-blue-500/70 hover:shadow-3xl hover:-translate-y-6 transition-all duration-1000 relative z-10 group/card overflow-hidden rounded-3xl shadow-2xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-white/40 to-blue-500/30 -skew-x-12 opacity-0 group-hover/card:opacity-100 transition-all duration-1500 -translate-x-full group-hover/card:translate-x-full rounded-3xl blur-sm"></div>
                  <div className="flex flex-col gap-6 relative z-10">
                    <div className="rounded-2xl bg-gradient-to-r from-blue-500/20 to-blue-400/20 w-fit p-5 group-hover/card:scale-125 transition-all duration-700 hover:rotate-6 shadow-2xl border border-blue-200/50">
                      <IconComponent className="h-10 w-10 text-blue-500 drop-shadow-lg group-hover/card:animate-bounce group-hover/card:scale-110 transition-all duration-500" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-600 uppercase tracking-widest animate-pulse bg-slate-100/50 px-3 py-1 rounded-full inline-block">
                        {stat.label}
                      </p>
                      <p className="mt-4 text-4xl md:text-5xl font-black bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent group-hover/card:drop-shadow-2xl transition-all duration-700">
                        {stat.value}
                      </p>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>

        {/* 🔥 EYE-CATCHING PRICING HERO SECTION 🔥 */}
        <div className="mb-20 relative group">
          {/* Multi-layered borders with enhanced glow */}
          <div className="absolute inset-0 border-8 border-dashed border-blue-200/90 rounded-3xl -m-4 pointer-events-none z-10 animate-pulse"></div>
          <div className="absolute inset-0 border-4 border-dashed border-blue-500/70 rounded-3xl -m-2 pointer-events-none z-20 animate-ping [animation-duration:2s]"></div>
          <div className="absolute inset-0 border-2 border-dashed border-white/80 rounded-3xl -m-1 pointer-events-none z-25 animate-pulse [animation-delay:-1s]"></div>
          
          {/* Dynamic shine effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100 transition-all duration-1500 -translate-x-full group-hover:translate-x-full rounded-3xl z-30 blur-sm"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-white/60 to-blue-500/30 rounded-3xl blur-xl opacity-20 group-hover:opacity-50 transition-all duration-1000 z-25"></div>

          <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-blue-900/90 to-slate-900/80 backdrop-blur-xl text-white relative overflow-hidden z-40 shadow-3xl group-hover:shadow-[0_35px_100px_-15px_rgba(59,130,246,0.5)] transition-all duration-1000 hover:-translate-y-4">
            
            {/* 🔥 GLOWING HEADER BAR */}
            <div className="relative w-full text-center text-sm md:text-lg font-black tracking-widest py-6 bg-gradient-to-r from-slate-800/90 to-blue-900/90 shadow-2xl rounded-3xl border-4 border-dashed border-blue-400/50 overflow-hidden group">
              <div className="absolute inset-0 border-3 border-dashed border-white/90 rounded-3xl -m-px pointer-events-none animate-pulse [animation-duration:1.5s]"></div>
              
              {/* Triple shine sweep */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100 transition-all duration-2000 -translate-x-full group-hover:translate-x-full rounded-3xl blur-sm"></div>
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/40 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100 transition-all duration-2500 delay-1000 -translate-x-full group-hover:translate-x-full rounded-3xl"></div>
              
              <div className="relative z-10 px-8">
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-400/40 via-white/50 to-blue-400/40 px-8 py-4 rounded-3xl border-3 border-white/70 backdrop-blur-xl shadow-3xl group-hover:scale-110 transition-all duration-700">
                  <Sparkles className="h-6 w-6 text-blue-300 animate-spin drop-shadow-lg" />
                  <span className="text-lg md:text-xl font-black tracking-widest text-white/95 drop-shadow-2xl">BOOKING AMOUNT</span>
                </div>
                
                <p className="mt-6 text-3xl md:text-5xl lg:text-6xl font-black tracking-widest bg-gradient-to-r from-blue-400 via-white to-blue-500 bg-clip-text text-transparent drop-shadow-4xl animate-bounce [animation-duration:1.5s]">
                  ₹5 LACS ONLY
                </p>
                
                <p className="mt-3 text-lg font-bold text-blue-100/95 tracking-wider animate-pulse bg-white/20 px-6 py-3 rounded-2xl inline-block backdrop-blur-sm border border-white/40 shadow-xl">
                  Special Offers On Spot Booking* 
                </p>
              </div>
            </div>

            {/* ✨ CONTENT SECTION */}
            <div className="m-10 rounded-3xl border-6 border-dashed border-white/70 px-10 py-12 relative z-10 group/inner backdrop-blur-xl">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/50 via-white/90 to-blue-400/50 rounded-3xl blur-3xl opacity-50 animate-pulse"></div>
              
              <p className="text-center text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-widest mb-12 relative z-20 group-hover/inner:scale-105 transition-all duration-1000 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
                VYOM SIGMA AVINEA HADAPSAR
                <span className="block text-5xl md:text-6xl lg:text-7xl font-serif bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent animate-pulse drop-shadow-4xl"></span>
              </p>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 relative z-20">
                <div className="group/item text-center p-8 bg-white/20 backdrop-blur-xl rounded-3xl border-2 border-white/50 shadow-2xl hover:shadow-4xl hover:scale-110 hover:rotate-2 transition-all duration-700 hover:bg-white/40">
                  <p className="text-sm font-black uppercase tracking-widest mb-4 text-blue-200 drop-shadow-lg">PAYMENT PLAN</p>
                  <p className="text-4xl md:text-5xl font-black text-white drop-shadow-2xl animate-pulse bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">30:70</p>
                </div>
                <div className="group/item text-center p-8 bg-white/20 backdrop-blur-xl rounded-3xl border-2 border-white/50 shadow-2xl hover:shadow-4xl hover:scale-110 hover:-rotate-2 transition-all duration-700 hover:bg-white/40">
                  <p className="text-sm font-black uppercase tracking-widest mb-4 text-blue-200 drop-shadow-lg">DOWN PAYMENT PLAN</p>
                  <p className="text-4xl md:text-5xl font-black text-white drop-shadow-2xl animate-pulse bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">95:05</p>
                </div>
              </div>
            </div>

            {/* 🚀 ULTIMATE CTA SECTION */}
            <div className="relative px-10 pb-10 pt-8 group/cta">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-2 bg-gradient-to-r from-blue-400 to-white rounded-full opacity-90 animate-pulse shadow-2xl"></div>
              
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="text-center lg:text-left group/cta">
                  <p className="text-lg font-black tracking-widest uppercase mb-6 text-blue-200 animate-pulse bg-white/30 px-8 py-4 rounded-3xl inline-block backdrop-blur-sm border border-white/50 shadow-xl">
                    Luxurious 2, 3, 4 BHK
                  </p>
                  <p className="text-4xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-blue-400 via-white to-blue-500 bg-clip-text text-transparent drop-shadow-4xl group-hover/cta:scale-110 transition-all duration-700">
                    ₹{projectData.priceStart} <span className="text-2xl font-normal block mt-4 text-white/90">Onwards</span>
                  </p>
                </div>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full lg:w-auto group-hover:scale-110 transition-all duration-500 relative z-20"
                >
                  <button className="group/btn w-full lg:w-auto flex items-center justify-center gap-4 rounded-3xl bg-gradient-to-r from-white via-slate-50 to-blue-50 text-slate-900 px-12 py-8 text-xl font-black shadow-4xl hover:shadow-[0_25px_80px_-10px_rgba(59,130,246,0.6)] hover:-translate-y-4 transition-all duration-1000 border-4 border-white/60 backdrop-blur-xl relative overflow-hidden transform-gpu">
                    <Download className="h-8 w-8 group-hover/btn:rotate-180 group-hover/btn:scale-125 transition-all duration-1000 drop-shadow-2xl" />
                    <span className="relative z-10 drop-shadow-2xl tracking-widest">Download Brochure</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/40 via-white/60 to-blue-400/40 rounded-3xl -skew-x-12 opacity-0 group-hover/btn:opacity-100 transition-all duration-1500 -translate-x-full group-hover/btn:translate-x-full blur-sm"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/40 via-white/50 to-blue-500/40 rounded-3xl opacity-0 group-hover/btn:opacity-100 transition-all duration-1000 blur"></div>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
