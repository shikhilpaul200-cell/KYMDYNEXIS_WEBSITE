"use client"

import { motion } from "framer-motion"
import { 
  Battery, 
  Zap, 
  Gauge, 
  Leaf, 
  Sofa, 
  Wrench,
  Smartphone,
  Shield,
  Sun
} from "lucide-react"

const features = [
  {
    icon: Battery,
    title: "Long Battery Life",
    description: "High-capacity lithium-ion batteries that deliver up to 150km on a single charge.",
  },
  {
    icon: Zap,
    title: "Fast Charging",
    description: "Advanced fast-charging technology gets you back on the road in just 3-4 hours.",
  },
  {
    icon: Smartphone,
    title: "Smart Digital Display",
    description: "Intuitive LCD dashboard with real-time stats, navigation, and smartphone connectivity.",
  },
  {
    icon: Leaf,
    title: "Eco Friendly",
    description: "Zero emissions, zero guilt. Contribute to a cleaner, greener India with every ride.",
  },
  {
    icon: Sofa,
    title: "Comfortable Ride",
    description: "Ergonomic design with premium suspension for the smoothest ride in any terrain.",
  },
  {
    icon: Wrench,
    title: "Low Maintenance",
    description: "Fewer moving parts means less wear and tear. Save time and money on servicing.",
  },
  {
    icon: Gauge,
    title: "Powerful Motor",
    description: "High-torque BLDC motors deliver instant acceleration and hill-climbing capability.",
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "Advanced braking system, LED lights, and robust build for maximum safety.",
  },
  {
    icon: Sun,
    title: "All Weather Ready",
    description: "IP67 rated components ensure reliable performance in rain or shine.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Features That <span className="text-primary">Set Us Apart</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every KYM DYNEXIS scooter is engineered with cutting-edge technology 
            to deliver an unmatched riding experience.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full glass-card rounded-2xl p-6 transition-all duration-300 hover:neon-border hover:bg-secondary/50">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-8 glass-card rounded-full px-8 py-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">3 Years</div>
              <div className="text-xs text-muted-foreground">Battery Warranty</div>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-xs text-muted-foreground">Service Centers</div>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">24/7</div>
              <div className="text-xs text-muted-foreground">Road Assistance</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
