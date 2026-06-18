"use client"

import { motion } from "framer-motion"
import { Target, Users, Award, TrendingUp } from "lucide-react"

const stats = [
  { icon: Users, value: "10,000+", label: "Happy Customers" },
  { icon: Target, value: "50+", label: "Cities Covered" },
  { icon: Award, value: "15+", label: "Awards Won" },
  { icon: TrendingUp, value: "99%", label: "Customer Satisfaction" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">About KYM DYNEXIS</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              Driving India Towards a <span className="text-primary">Greener Future</span>
            </h2>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                KYM DYNEXIS is dedicated to building the future of electric mobility in India 
                by providing stylish, reliable, and affordable electric scooters. Founded 
                with a vision to make sustainable transportation accessible to everyone.
              </p>
              <p>
                Our mission is to accelerate India&apos;s transition to electric vehicles while 
                delivering products that don&apos;t compromise on performance, style, or affordability. 
                Every scooter we build is designed with the modern Indian commuter in mind.
              </p>
              <p>
                With state-of-the-art manufacturing facilities and a commitment to innovation, 
                we&apos;re not just building scooters — we&apos;re building a movement towards cleaner, 
                smarter transportation.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { title: "Innovation", desc: "Cutting-edge technology" },
                { title: "Sustainability", desc: "Eco-conscious design" },
                { title: "Quality", desc: "Premium craftsmanship" },
                { title: "Affordability", desc: "Value for money" },
              ].map((value) => (
                <div key={value.title} className="glass-card rounded-xl p-4">
                  <div className="text-primary font-semibold">{value.title}</div>
                  <div className="text-sm text-muted-foreground">{value.desc}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Visual & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Main Visual */}
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl" />
              <div className="absolute inset-4 glass-card rounded-2xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl font-bold text-primary neon-text mb-4">KYM</div>
                  <div className="text-2xl font-light tracking-widest text-foreground">ELECTRIC</div>
                  <div className="mt-4 text-sm text-muted-foreground">Est. 2023</div>
                  <div className="mt-6 text-xs text-muted-foreground max-w-xs">
                    &ldquo;Empowering India with sustainable mobility solutions&rdquo;
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-primary/30 rounded-xl rotate-12" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 border border-primary/20 rounded-xl -rotate-12" />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="glass-card rounded-xl p-4 text-center"
                >
                  <stat.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
