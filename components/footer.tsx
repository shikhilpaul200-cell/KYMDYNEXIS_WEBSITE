"use client"

import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, Linkedin, Github, MapPin, FileText } from "lucide-react"

const footerLinks = {
  products: [
    { name: "Standard Series", href: "#models" },
    { name: "Super Series", href: "#models" },
    { name: "Pro Series", href: "#models" },
    { name: "Specialty Vehicles", href: "#models" },
    { name: "All 18 Models", href: "#models" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Careers", href: "#" },
    { name: "Press", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Contact", href: "#contact" },
  ],
  support: [
    { name: "Help Center", href: "#" },
    { name: "Service Centers", href: "#" },
    { name: "Warranty", href: "#" },
    { name: "FAQs", href: "#" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Refund Policy", href: "#" },
    { name: "Cookie Policy", href: "#" },
  ],
}

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "YouTube", icon: Youtube, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "GitHub", icon: Github, href: "https://github.com/shikhilpaul200-cell" },
]

export function Footer() {
  return (
    <footer className="relative pt-24 pb-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-card via-background to-background" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link href="#home" className="flex items-center gap-3 mb-4">
              <img src="/images/logo.jpeg" alt="KYM Logo" className="h-12 w-12 rounded-lg object-contain" />
              <div className="flex flex-col leading-tight">
                <span className="text-xs font-medium text-muted-foreground tracking-wider">KYM</span>
                <span className="text-lg font-bold tracking-wide">
                  <span className="text-landing-accent">DYNEX</span>
                  <span className="text-foreground">IS</span>
                </span>
                <span className="text-[10px] font-medium text-muted-foreground tracking-[0.2em]">SOLUTIONS</span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm mb-6 max-w-xs leading-relaxed">
              Driving Precision. Powering Mobility. India&apos;s trusted electric scooter brand 
              with 18 models for every lifestyle. Powered by Infinite Lithium Ion Batteries.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:neon-border transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>

            {/* Business Credentials */}
            <div className="mt-6 pt-6 border-t border-border">
              <div className="flex items-start gap-2 mb-3">
                <FileText className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground">GSTIN</p>
                  <p className="text-sm font-medium">06DBIPK0514B1ZB</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground">Registered Office</p>
                  <p className="text-sm">KYM DYNEXIS SOLUTIONS</p>
                  <p className="text-xs text-muted-foreground">Jagadhri Road, Bilaspur</p>
                  <p className="text-xs text-muted-foreground">Yamunanagar, Haryana - 135102</p>
                </div>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>



        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} KYM DYNEXIS SOLUTIONS (KYM E-Mobility). All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <span>Prop:</span> Paramjeet Kaur
            </span>
            <span className="text-xs text-muted-foreground">
              Made with care in India
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
