import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Building2, Calendar, Home, Download, Check, Sparkles, Users } from "lucide-react"

export default function PropertyDetails() {
  const projectData = {
    name: "Vyom Sigma Avinea Hadapsar",
    developer: "Vyom Sigma Buildzone",
    location: "Hadapsar, Pune",
    rating: 4.8,
    reviews: 156,
    bookingAmount: "2 Lacs",
    priceStart: "₹1.29 Cr*",
    towers: "7 Towers (T1-T7)",
    acres: "10.5 Acres"
  }

  const keyStats = [
    {
      icon: Building2,
      label: "Scale",
      value: `${projectData.acres} Premium Acres`,
    },
    {
      icon: Home,
      label: "Structure", 
      value: "G+5P+32 Storeys",
    },
    {
      icon: Users,
      label: "Towers",
      value: projectData.towers,
    },
    {
      icon: Calendar,
      label: "Possession",
      value: "Dec 2028",
    }
  ]

  const configurations = [
    { 
      bhk: "2 BHK", 
      carpet: "946 sq.ft", 
      price: "₹1.29 - 1.31 Cr*", 
      type: "Premium"
    },
    { 
      bhk: "3 BHK", 
      carpet: "1213 - 1262 sq.ft", 
      price: "₹1.69 - 1.76 Cr*", 
      type: "Luxury"
    },
    { 
      bhk: "4 BHK", 
      carpet: "1780 sq.ft", 
      price: "₹2.42 Cr*", 
      type: "Ultra-Luxury"
    },
    { 
      bhk: "5 BHK", 
      carpet: "2500 sq.ft", 
      price: "₹3.45 Cr*", 
      type: "Penthouse"
    },
    { 
      bhk: "5.5 BHK Jodi", 
      carpet: "Up to 2500+ sq.ft", 
      price: "₹3.45 Cr+*", 
      type: "Couplet"
    }
  ]

  const towers = [
    { name: "T1 - Avalon", status: "Ready" },
    { name: "T2 - Avante", status: "Under Construction" },
    { name: "T3 - Altus", status: "Ready" },
    { name: "T4 - Amore", status: "Ready" },
    { name: "T5 - Ariana", status: "Under Construction" },
    { name: "T6 - Avana", status: "Ready" },
    { name: "T7 - Altair", status: "Ready" }
  ]

  const highlights = [
    "Mi-Van Construction Technology",
    "65%+ Open Green Spaces", 
    "Eco-Friendly Design",
    "7 Iconic Towers",
    "Prime Hadapsar Location"
  ]

  const paymentPlans = [
    {
      name: "30:70 Plan",
      structure: "30% Down | 70% on Possession",
      bestFor: "Balanced payments"
    },
    {
      name: "95:05 Plan", 
      structure: "95% on Booking | 5% on Possession",
      bestFor: "Maximum flexibility"
    },
    {
      name: "Custom Plan",
      structure: "Tailored to your needs",
      bestFor: "Personalized options"
    }
  ]

  const whatsappLink = "https://wa.me/919657119798?text=" + 
    encodeURIComponent(`Hi, interested in Vyom Sigma Avinea Hadapsar. Please share brochure, floor plans & current offers for ${projectData.location}`);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50/30">
      {/* HEADER */}
      <div className="border-b border-slate-200/50 bg-white/80 backdrop-blur-xl shadow-xl relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8">
          <div className="space-y-8">
            <div className="group">
              <h1 className="text-5xl md:text-6xl font-serif font-black bg-gradient-to-r from-slate-900 via-emerald-900 to-slate-900 bg-clip-text text-transparent leading-tight">
                {projectData.name}
              </h1>
              <Badge className="mt-4 text-lg bg-emerald-100 text-emerald-800 border-emerald-200 font-semibold px-6 py-2">
                {projectData.developer} 
                <span className="ml-2 text-xs">(Vyom Buildcon + Sigma Buildzone)</span>
              </Badge>
            </div>

            <div className="flex flex-wrap items-center gap-8">
              <div className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-emerald-500/10 to-emerald-400/10 rounded-2xl shadow-xl border border-emerald-200/50 hover:scale-105 transition-all">
                <MapPin className="h-6 w-6 text-emerald-500 animate-bounce" />
                <span className="text-xl font-bold text-slate-900">{projectData.location}</span>
              </div>
              <div className="flex items-center gap-3 px-6 py-3 bg-white/60 backdrop-blur-sm rounded-2xl shadow-2xl border border-slate-200/50 hover:shadow-3xl">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-5 w-5 ${i < Math.floor(projectData.rating) ? "fill-emerald-500 text-emerald-500" : "text-slate-400"}`} />
                  ))}
                </div>
                <span className="font-black text-xl text-slate-900">{projectData.rating}</span>
                <span className="text-lg font-semibold text-slate-600">({projectData.reviews}+ Reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 space-y-20">
        
        {/* PROJECT HIGHLIGHTS */}
        <section className="relative group">
          <h2 className="text-4xl md:text-5xl font-serif font-black bg-gradient-to-r from-slate-900 to-emerald-900 bg-clip-text text-transparent mb-12">
            Project Highlights ✨
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {keyStats.map((stat, idx) => {
              const IconComponent = stat.icon
              return (
                <Card key={idx} className="group/card p-8 border-emerald-200/50 bg-white/70 backdrop-blur-xl hover:shadow-3xl hover:-translate-y-4 rounded-2xl shadow-xl border hover:border-emerald-400/70 transition-all duration-700">
                  <div className="flex flex-col items-center gap-4 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-emerald-500/20 to-emerald-400/20 rounded-2xl flex items-center justify-center group-hover/card:scale-110 transition-all">
                      <IconComponent className="h-8 w-8 text-emerald-500" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-emerald-600 uppercase tracking-wider">{stat.label}</p>
                      <p className="text-3xl font-black text-slate-900 mt-2">{stat.value}</p>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </section>

        {/* CONFIGURATIONS */}
        <section className="relative group">
          <h2 className="text-4xl md:text-5xl font-serif font-black bg-gradient-to-r from-slate-900 to-emerald-900 bg-clip-text text-transparent mb-12">
            Configurations
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {configurations.map((config, idx) => (
              <Card key={idx} className="group p-8 border-emerald-200/50 hover:shadow-3xl hover:-translate-y-3 rounded-2xl shadow-xl border hover:border-emerald-400/70 transition-all duration-700 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-emerald-400/5 -skew-x-12 opacity-0 group-hover:opacity-100 transition-all duration-1000 -translate-x-full group-hover:translate-x-full" />
                <div className="relative z-10 space-y-4">
                  <Badge className="bg-gradient-to-r from-emerald-500/20 to-emerald-400/20 text-emerald-700 border-emerald-200 font-bold">
                    {config.type}
                  </Badge>
                  <h3 className="text-2xl font-black text-slate-900">{config.bhk}</h3>
                  <p className="text-3xl font-black bg-gradient-to-r from-slate-900 to-emerald-900 bg-clip-text text-transparent">
                    {config.price}
                  </p>
                  <p className="text-lg text-slate-600 font-medium">{config.carpet}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* PRICING HERO */}
        <section className="relative group">
          <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-emerald-900/90 to-slate-900/80 backdrop-blur-xl text-white shadow-3xl overflow-hidden">
            <div className="p-12 text-center relative z-10">
              <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-xl px-8 py-4 rounded-3xl border-2 border-white/40 mb-8">
                <Sparkles className="h-6 w-6 text-emerald-300 animate-spin" />
                <span className="text-xl font-black tracking-widest">BOOKING STARTS AT</span>
              </div>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-emerald-400 via-white to-emerald-500 bg-clip-text text-transparent drop-shadow-4xl mb-6">
                {projectData.bookingAmount}
              </h2>
              <p className="text-2xl font-bold text-emerald-100 mb-12">Special Launch Offers Available</p>
              
              <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
                <div>
                  <p className="text-4xl md:text-6xl font-black bg-gradient-to-r from-emerald-400 via-white to-emerald-500 bg-clip-text text-transparent">
                    {projectData.priceStart} Onwards
                  </p>
                  <p className="text-lg text-emerald-200 mt-2">2, 3, 4 & 5 BHK Homes</p>
                </div>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="group">
                  <button className="group/btn flex items-center gap-4 bg-white text-slate-900 px-12 py-6 text-xl font-black rounded-3xl shadow-4xl hover:shadow-[0_25px_80px_rgba(16,185,129,0.6)] hover:-translate-y-2 transition-all duration-700 border-4 border-white/50 backdrop-blur-xl">
                    <Download className="h-6 w-6 group-hover/btn:rotate-180 transition-all" />
                    Download Brochure
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* TOWERS GRID */}
        <section>
          <h2 className="text-4xl md:text-5xl font-serif font-black bg-gradient-to-r from-slate-900 to-emerald-900 bg-clip-text text-transparent mb-12 text-center">
            7 Iconic Towers
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {towers.map((tower, idx) => (
              <Card key={idx} className="p-8 text-center border-emerald-200/50 hover:shadow-2xl hover:border-emerald-400/70 transition-all group">
                <h3 className="text-2xl font-black text-slate-900 mb-4">{tower.name}</h3>
                <Badge className={`font-bold ${tower.status === 'Ready' ? 'bg-emerald-100 text-emerald-800' : 'bg-blue-100 text-blue-800'}`}>
                  {tower.status}
                </Badge>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
