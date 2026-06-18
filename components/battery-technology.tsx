"use client"

import { motion } from "framer-motion"
import { Battery, Shield, Zap, Leaf, Clock, Weight, Wrench, TrendingUp, IndianRupee } from "lucide-react"

const batteryAdvantages = [
  {
    icon: TrendingUp,
    title: "2X More Range",
    description: "Go farther on a single charge",
  },
  {
    icon: Shield,
    title: "Superior Safety",
    description: "Built-in BMS protection, no risk of leakage",
  },
  {
    icon: Zap,
    title: "Fast Charging",
    description: "80% charge in 2-3 hours",
  },
  {
    icon: Clock,
    title: "Longer Life",
    description: "2000+ cycles, lasts 3-5X longer",
  },
  {
    icon: Weight,
    title: "Lightweight",
    description: "Up to 60% lighter, better performance",
  },
  {
    icon: Wrench,
    title: "Zero Maintenance",
    description: "No water topping up, hassle free",
  },
  {
    icon: Leaf,
    title: "Eco Friendly",
    description: "Non-toxic, recyclable, safe for environment",
  },
  {
    icon: Battery,
    title: "Better Performance",
    description: "Consistent power output in all conditions",
  },
  {
    icon: IndianRupee,
    title: "Cost Effective",
    description: "Higher upfront, lower long-term cost",
  },
]

export function BatteryTechnology() {
  return (
    <section id="battery" className="py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">Powered by Infinite Lithium</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">
            Power That <span className="text-primary neon-text">Outperforms</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The clear choice for a better, smarter &amp; greener ride. Our advanced Lithium Ion batteries 
            deliver superior performance compared to traditional Lead Acid batteries.
          </p>
        </motion.div>

        {/* Battery Comparison Infographic */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16 rounded-2xl overflow-hidden glass-card p-2"
        >
          <img 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-17%20at%201.07.07%20PM-Mwaux63kUMhhNCMa2VcPqpQjySZnn1.jpeg" 
            alt="Lithium Ion vs Lead Acid Battery Comparison - KYM E-Mobility powered by Infinite Lithium"
            className="w-full h-auto object-cover rounded-xl"
          />
        </motion.div>

        {/* Advantages Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            Why <span className="text-primary">Lithium Ion</span> is the Smart Choice
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {batteryAdvantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="glass-card p-6 rounded-xl hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <advantage.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">{advantage.title}</h4>
                    <p className="text-muted-foreground text-sm">{advantage.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Battery Technology Infographic */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="rounded-2xl overflow-hidden glass-card p-2"
        >
          <h3 className="text-2xl font-bold text-center py-6">
            The Power Behind a <span className="text-primary">Smarter Future</span>
          </h3>
          <img 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-17%20at%201.07.12%20PM-VSVxeZluEfRvIdi97OPwV5l6PY2IMY.jpeg" 
            alt="How Lithium Ion Battery is Made - Types of Batteries and LFM Comparison by Infinite Lithium"
            className="w-full h-auto object-cover rounded-xl"
          />
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-xl md:text-2xl font-bold">
            Smart Choice Today, <span className="text-primary neon-text">Better Tomorrow.</span>
          </p>
          <p className="text-muted-foreground mt-2">Go Electric. Go Infinite.</p>
        </motion.div>
      </div>
    </section>
  )
}
