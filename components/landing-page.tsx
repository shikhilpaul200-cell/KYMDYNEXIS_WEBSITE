"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const slides = [
  {
    id: 1,
    image: "/images/slider-1.jpeg",
    alt: "Power of Infinite Lithium - High Power Stronger Performance",
  },
  {
    id: 2,
    image: "/images/slider-2.jpeg",
    alt: "KYM DYNEXIS SOLUTIONS - EV Bikes Assembly Sales Service",
  },
  {
    id: 3,
    image: "/images/slider-3.jpeg",
    alt: "KYM E-Mobility - Future is Electric",
  },
]

export function LandingPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 5000)
  }

  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      nextSlide()
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, nextSlide])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prevSlide()
        setIsAutoPlaying(false)
      } else if (e.key === "ArrowRight") {
        nextSlide()
        setIsAutoPlaying(false)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [nextSlide, prevSlide])

  return (
    <section id="home" className="relative w-full bg-[#0a1628]">
      {/* Slider Container - using aspect ratio matching banner images (approx 3:1) */}
      <div className="relative w-full min-h-[250px] md:min-h-[350px] lg:min-h-[450px] xl:min-h-[550px] overflow-hidden">
        {/* Slides */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Image
              src={slides[currentSlide].image}
              alt={slides[currentSlide].alt}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={() => {
            prevSlide()
            setIsAutoPlaying(false)
          }}
          className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 rounded-full bg-black/50 hover:bg-primary/80 text-white backdrop-blur-sm transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 md:w-7 md:h-7" />
        </button>
        
        <button
          onClick={() => {
            nextSlide()
            setIsAutoPlaying(false)
          }}
          className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 rounded-full bg-black/50 hover:bg-primary/80 text-white backdrop-blur-sm transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 md:w-7 md:h-7" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2 md:gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 md:h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black ${
                index === currentSlide
                  ? "w-8 md:w-12 bg-primary shadow-lg shadow-primary/50"
                  : "w-2 md:w-3 bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentSlide ? "true" : "false"}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/30 z-20">
          <motion.div
            key={currentSlide}
            className="h-full bg-primary"
            initial={{ width: "0%" }}
            animate={{ width: isAutoPlaying ? "100%" : "0%" }}
            transition={{ duration: 4, ease: "linear" }}
          />
        </div>

        {/* Slide Counter */}
        <div className="absolute top-4 right-4 z-20 bg-black/50 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-medium">
          {currentSlide + 1} / {slides.length}
        </div>
      </div>
    </section>
  )
}
