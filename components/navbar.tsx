"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

const navLinks = [
  { name: "MODELS", href: "#models" },
  { name: "BATTERIES", href: "#battery" },
  { name: "FUTURE IS ELECTRIC", href: "#features" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-black/70 backdrop-blur-md py-2 border-b border-white/10" 
          : "bg-transparent py-3"
      }`}
    >
      <nav className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="#home" className="flex items-center gap-3 group">
          <div className="relative h-12 w-12 flex-shrink-0">
            <Image
              src="/images/logo.jpeg.png"
              alt="KYM Logo"
              fill
              className="object-contain rounded-lg"
            />
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <div className="h-8 w-px bg-border" />
            <div className="flex flex-col leading-tight">
              <span className="text-xs font-medium text-muted-foreground tracking-wider">KYM</span>
              <span className="text-lg font-bold tracking-wide">
                <span className="text-landing-accent">DYNEX</span>
                <span className="text-foreground">IS</span>
              </span>
              <span className="text-[10px] font-medium text-muted-foreground tracking-[0.2em]">SOLUTIONS</span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-foreground hover:text-primary transition-colors tracking-wide"
            >
              {link.name}
            </Link>
          ))}
          <ThemeToggle />
          <Link
            href="#contact"
            className="ml-2 px-6 py-2.5 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-sm rounded-full transition-all hover:scale-105 tracking-wide"
          >
            GET STARTED
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-background/95 backdrop-blur-md border-t border-border"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-semibold text-foreground hover:text-primary transition-colors py-2 tracking-wide"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-sm rounded-full transition-all text-center tracking-wide"
              >
                GET STARTED
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
