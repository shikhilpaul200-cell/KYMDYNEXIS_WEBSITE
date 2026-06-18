"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Software Engineer",
    location: "Bangalore",
    rating: 5,
    content: "Best decision I made this year! My KYM Storm has completely transformed my daily commute. No more fuel costs, no more pollution guilt. The range is incredible - I charge once a week!",
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "College Student",
    location: "Pune",
    rating: 5,
    content: "As a student, I was looking for something affordable and stylish. KYM Spark ticks all boxes! My friends are jealous and now everyone wants one. The smart display is super cool too.",
  },
  {
    id: 3,
    name: "Amit Kumar",
    role: "Business Owner",
    location: "Delhi",
    rating: 5,
    content: "I bought the Volt Pro for my delivery business. The low maintenance cost and reliability have saved me lakhs already. Customer support is excellent - they really care about their riders.",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">Testimonials</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            What Our <span className="text-primary">Riders</span> Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join thousands of satisfied KYM DYNEXIS owners who have already made 
            the switch to electric mobility.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full glass-card rounded-2xl p-6 transition-all duration-300 hover:neon-border relative">
                {/* Quote icon */}
                <div className="absolute top-4 right-4 opacity-20">
                  <Quote className="h-12 w-12 text-primary" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground leading-relaxed mb-6 relative z-10">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
                    <span className="text-lg font-bold text-primary">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role} • {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <div className="glass-card rounded-2xl p-8 text-center">
            <p className="text-muted-foreground mb-6">Trusted by riders across India</p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
              {[
                { value: "4.9/5", label: "Average Rating" },
                { value: "10,000+", label: "Happy Customers" },
                { value: "98%", label: "Would Recommend" },
                { value: "50+", label: "Cities" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
