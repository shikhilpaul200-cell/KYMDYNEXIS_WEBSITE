"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Battery, Gauge, Timer, Circle, Disc, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

// Standard Series - Entry level with Front-Disc, Rear-Drum brakes
const standardSeries = [
  {
    id: 1,
    name: "Cutie New",
    code: "CS2",
    tagline: "Compact & Stylish",
    topSpeed: "45 KMPH",
    range: "80 KM",
    charging: "3 Hours",
    featured: true,
    wheelSize: "Front-12 inch, Rear-10 inch",
    brakes: "Front-Disc, Rear-Drum",
    voltage: "48V/60V/72V",
    category: "standard",
  },
  {
    id: 2,
    name: "Rider Eco",
    code: "SL",
    tagline: "Eco Friendly Commuter",
    topSpeed: "55 KMPH",
    range: "90 KM",
    charging: "3.5 Hours",
    featured: false,
    wheelSize: "Front-12 inch, Rear-10 inch",
    brakes: "Front-Disc, Rear-Drum",
    voltage: "48V/60V/72V",
    category: "standard",
  },
  {
    id: 3,
    name: "Legend R",
    code: "LR",
    tagline: "Legendary Performance",
    topSpeed: "70 KMPH",
    range: "100 KM",
    charging: "4 Hours",
    featured: false,
    wheelSize: "Front-12 inch, Rear-10 inch",
    brakes: "Front-Disc, Rear-Drum",
    voltage: "48V/60V/72V",
    category: "standard",
  },
  {
    id: 4,
    name: "Royal New",
    code: "DL",
    tagline: "Premium Royalty",
    topSpeed: "65 KMPH",
    range: "95 KM",
    charging: "4 Hours",
    featured: false,
    wheelSize: "Front-12 inch, Rear-10 inch",
    brakes: "Front-Disc, Rear-Drum",
    voltage: "48V/60V/72V",
    category: "standard",
  },
  {
    id: 5,
    name: "Monarch DLX",
    code: "Activa",
    tagline: "Classic Comfort",
    topSpeed: "55 KMPH",
    range: "85 KM",
    charging: "3.5 Hours",
    featured: false,
    wheelSize: "Front-12 inch, Rear-10 inch",
    brakes: "Front-Disc, Rear-Drum",
    voltage: "48V/60V/72V",
    category: "standard",
  },
  {
    id: 6,
    name: "OLA",
    code: "OLA",
    tagline: "Modern & Sporty",
    topSpeed: "80 KMPH",
    range: "110 KM",
    charging: "4 Hours",
    featured: false,
    wheelSize: "Front-12 inch, Rear-12 inch",
    brakes: "Front-Disc, Rear-Disc",
    voltage: "48V/60V/72V",
    category: "standard",
  },
]

// Super Series - Premium with Front-Disc, Rear-Disc brakes
const superSeries = [
  {
    id: 7,
    name: "Legend Super S",
    code: "U.Light",
    tagline: "Ultra Lightweight",
    topSpeed: "75 KMPH",
    range: "100 KM",
    charging: "4 Hours",
    featured: true,
    wheelSize: "Front-12 inch, Rear-12 inch",
    brakes: "Front-Disc, Rear-Disc",
    voltage: "60V/72V",
    category: "super",
  },
  {
    id: 8,
    name: "Cutie Super",
    code: "FH",
    tagline: "Compact Powerhouse",
    topSpeed: "65 KMPH",
    range: "95 KM",
    charging: "3.5 Hours",
    featured: false,
    wheelSize: "Front-12 inch, Rear-12 inch",
    brakes: "Front-Disc, Rear-Disc",
    voltage: "60V/72V",
    category: "super",
  },
  {
    id: 9,
    name: "Legend Super Plus",
    code: "Vespa Jali",
    tagline: "Retro Style Premium",
    topSpeed: "70 KMPH",
    range: "100 KM",
    charging: "4 Hours",
    featured: false,
    wheelSize: "Front-12 inch, Rear-12 inch",
    brakes: "Front-Disc, Rear-Disc",
    voltage: "60V/72V",
    category: "super",
  },
  {
    id: 10,
    name: "Monarch Super",
    code: "Okinawa",
    tagline: "Superior Comfort",
    topSpeed: "65 KMPH",
    range: "95 KM",
    charging: "4 Hours",
    featured: false,
    wheelSize: "Front-12 inch, Rear-12 inch",
    brakes: "Front-Disc, Rear-Disc",
    voltage: "60V/72V",
    category: "super",
  },
  {
    id: 11,
    name: "Cutie Plus",
    code: "CS3",
    tagline: "Enhanced Performance",
    topSpeed: "60 KMPH",
    range: "90 KM",
    charging: "3.5 Hours",
    featured: false,
    wheelSize: "Front-12 inch, Rear-12 inch",
    brakes: "Front-Disc, Rear-Disc",
    voltage: "60V/72V",
    category: "super",
  },
  {
    id: 12,
    name: "E4",
    code: "E4",
    tagline: "Future Forward",
    topSpeed: "80 KMPH",
    range: "110 KM",
    charging: "4 Hours",
    featured: false,
    wheelSize: "Front-12 inch, Rear-12 inch",
    brakes: "Front-Disc, Rear-Disc",
    voltage: "60V/72V",
    category: "super",
  },
]

// Pro Series - High performance
const proSeries = [
  {
    id: 13,
    name: "Rider H Pro",
    code: "H Pro",
    tagline: "High Performance",
    topSpeed: "85 KMPH",
    range: "120 KM",
    charging: "4.5 Hours",
    featured: true,
    wheelSize: "Front-12 inch, Rear-12 inch",
    brakes: "Front-Disc, Rear-Disc",
    voltage: "60V/72V",
    category: "pro",
  },
  {
    id: 14,
    name: "Legend Alpha",
    code: "Alpha",
    tagline: "Alpha Power",
    topSpeed: "90 KMPH",
    range: "130 KM",
    charging: "5 Hours",
    featured: false,
    wheelSize: "Front-12 inch, Rear-12 inch",
    brakes: "Front-Disc, Rear-Disc",
    voltage: "60V/72V",
    category: "pro",
  },
  {
    id: 17,
    name: "Vision Edge",
    code: "Edge",
    tagline: "Cutting Edge Tech",
    topSpeed: "85 KMPH",
    range: "115 KM",
    charging: "4.5 Hours",
    featured: false,
    wheelSize: "Front-12 inch, Rear-12 inch",
    brakes: "Front-Disc, Rear-Disc",
    voltage: "60V/72V",
    category: "pro",
  },
  {
    id: 18,
    name: "Tank",
    code: "Tank",
    tagline: "Built Tough",
    topSpeed: "75 KMPH",
    range: "100 KM",
    charging: "4 Hours",
    featured: false,
    wheelSize: "Front-12 inch, Rear-12 inch",
    brakes: "Front-Disc, Rear-Disc",
    voltage: "60V/72V",
    category: "pro",
  },
]

// Specialty Series - Commercial & Accessibility
const specialtySeries = [
  {
    id: 15,
    name: "2 Wheeler Loader",
    code: "Loader",
    tagline: "Commercial Cargo",
    topSpeed: "45 KMPH",
    range: "70 KM",
    charging: "4 Hours",
    featured: false,
    wheelSize: "Front-10 inch, Rear-10 inch",
    brakes: "Front-Disc, Rear-Drum",
    voltage: "60V/72V",
    category: "specialty",
  },
  {
    id: 16,
    name: "Handicapped",
    code: "3W",
    tagline: "Accessible Mobility",
    topSpeed: "40 KMPH",
    range: "60 KM",
    charging: "4 Hours",
    featured: false,
    wheelSize: "Front-12 inch, Rear-12 inch",
    brakes: "Front-Disc, Rear-Disc",
    voltage: "60V/72V",
    category: "specialty",
  },
]

const allModels = [...standardSeries, ...superSeries, ...proSeries, ...specialtySeries]

const categories = [
  { id: "all", name: "All Models", count: allModels.length },
  { id: "standard", name: "Standard Series", count: standardSeries.length },
  { id: "super", name: "Super Series", count: superSeries.length },
  { id: "pro", name: "Pro Series", count: proSeries.length },
  { id: "specialty", name: "Specialty", count: specialtySeries.length },
]

export function ProductShowcase() {
  const [activeCategory, setActiveCategory] = useState("all")
  
  const filteredModels = activeCategory === "all" 
    ? allModels 
    : allModels.filter(m => m.category === activeCategory)
  return (
    <section id="models" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-background to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">Our Collection</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Choose Your <span className="text-primary">Perfect Ride</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our range of electric scooters designed for every lifestyle. 
            From daily commutes to weekend adventures.
          </p>
        </motion.div>

        {/* Full Catalog Image Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 rounded-2xl overflow-hidden glass-card p-2"
        >
          <img 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-17%20at%201.07.30%20PM-g8eN4EqqRFjh5FUCS8tyhJTwTIHE7O.jpeg" 
            alt="KYM E-Mobility Complete Product Lineup - 18 Electric Scooter Models"
            className="w-full h-auto object-cover rounded-xl"
          />
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-primary text-primary-foreground neon-border"
                  : "glass-card hover:bg-primary/10"
              }`}
            >
              {cat.name} <span className="text-xs opacity-70">({cat.count})</span>
            </button>
          ))}
        </motion.div>

        {/* Product Photos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12 grid md:grid-cols-3 gap-6"
        >
          <div className="rounded-2xl overflow-hidden glass-card p-2">
            <img 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/model1-3pNqf6EnfdS49uOHIVnCimC7qtYKeC.jpeg" 
              alt="KYM E-Mobility White Scooter - Classic design with comfortable seat"
              className="w-full h-64 object-cover rounded-xl"
            />
          </div>
          <div className="rounded-2xl overflow-hidden glass-card p-2">
            <img 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mpdel2-xRtaihGbSv6SpCYvzzQLSrq9bRNhyb.jpeg" 
              alt="KYM E-Mobility Sport Scooter - Black model with LED lights"
              className="w-full h-64 object-cover rounded-xl"
            />
          </div>
          <div className="rounded-2xl overflow-hidden glass-card p-2">
            <img 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/model3-Uvt6ppsfyuDhqBgdIa2CKqM7USmKAu.jpeg" 
              alt="KYM E-Mobility Rider - Scooter in action with rider"
              className="w-full h-64 object-cover rounded-xl"
            />
          </div>
        </motion.div>

        {/* Product Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
          {filteredModels.map((model, index) => (
            <motion.div
              key={model.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative ${model.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <div className={`relative h-full glass-card rounded-2xl p-6 transition-all duration-500 hover:scale-[1.02] hover:neon-border ${model.featured ? 'border-primary/30' : ''}`}>
                {model.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                    Best Seller
                  </div>
                )}

                {/* Specs Header */}
                <div className="space-y-3 mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{model.name} <span className="text-primary">({model.code})</span></h3>
                    <p className="text-sm text-muted-foreground">{model.tagline}</p>
                  </div>
                </div>

                {/* Performance Specs */}
                <div className="grid grid-cols-3 gap-2 py-3 border-y border-border mb-3">
                  <div className="text-center">
                    <Gauge className="h-4 w-4 mx-auto text-primary mb-1" />
                    <div className="text-sm font-semibold">{model.topSpeed}</div>
                    <div className="text-xs text-muted-foreground">Top Speed</div>
                  </div>
                  <div className="text-center">
                    <Battery className="h-4 w-4 mx-auto text-primary mb-1" />
                    <div className="text-sm font-semibold">{model.range}</div>
                    <div className="text-xs text-muted-foreground">Range</div>
                  </div>
                  <div className="text-center">
                    <Timer className="h-4 w-4 mx-auto text-primary mb-1" />
                    <div className="text-sm font-semibold">{model.charging}</div>
                    <div className="text-xs text-muted-foreground">Charge</div>
                  </div>
                </div>

                {/* Additional Specs */}
                <div className="space-y-2 py-3 border-b border-border mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Circle className="h-3 w-3 text-primary" />
                    <span className="text-muted-foreground">Wheel:</span>
                    <span className="font-medium">{model.wheelSize}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Disc className="h-3 w-3 text-primary" />
                    <span className="text-muted-foreground">Brakes:</span>
                    <span className="font-medium">{model.brakes}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Zap className="h-3 w-3 text-primary" />
                    <span className="text-muted-foreground">Voltage:</span>
                    <span className="font-medium">{model.voltage}</span>
                  </div>
                </div>

                  {/* CTA */}
                <div className="flex justify-center">
                  <Button size="sm" variant={model.featured ? "default" : "outline"} className={model.featured ? "bg-primary text-primary-foreground" : ""}>
                    View Details
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
