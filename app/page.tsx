"use client"

import { LoadingScreen } from "@/components/loading-screen"
import { Navbar } from "@/components/navbar"
import { LandingPage } from "@/components/landing-page"
import { ProductShowcase } from "@/components/product-showcase"
import { FeaturesSection } from "@/components/features-section"
import { BatteryTechnology } from "@/components/battery-technology"
import { AboutSection } from "@/components/about-section"
import { GallerySection } from "@/components/gallery-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <main className="relative overflow-hidden pt-20 md:pt-24">
        <Navbar />
        <LandingPage />
        <ProductShowcase />
        <FeaturesSection />
        <BatteryTechnology />
        <AboutSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  )
}
