"use client"

import Link from "next/link"
import { Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  const handleEmailClick = () => {
    window.open("mailto:econova455@gmail.com", "_blank")
  }

  const handleLinkClick = () => {
    // Scroll to top when clicking footer links
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100)
  }

  return (
    <footer className="bg-gradient-to-br from-econova-primary via-econova-primary-light to-econova-primary-lighter text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6 animate-slide-in-left">
            <Link href="/" className="flex items-center space-x-3 group" onClick={handleLinkClick}>
              <img
                src="/images/email-logo.png"
                alt="EcoNova"
                className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300"
                style={{
                  filter: "drop-shadow(0 0 20px rgba(16, 185, 129, 0.3))",
                }}
              />
              <span className="text-2xl font-bold">EcoNova Labs</span>
            </Link>
            <p className="text-white/80 leading-relaxed text-lg">
              Leading India's sustainable e-waste management revolution with innovative solutions for a cleaner future.
            </p>
            <div className="flex space-x-4">
              {[
                { Icon: Facebook, href: "#" },
                { Icon: Twitter, href: "https://x.com/EcoNovaLabs" },
                { Icon: Instagram, href: "https://www.instagram.com/weareeconovaofficial/" },
                { Icon: Linkedin, href: "http://linkedin.com/company/econovalabs" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:bg-white/10 p-3 rounded-full hover:scale-110 transition-all duration-300 inline-block"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <social.Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-slide-in-left" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Schedule Pickup", href: "/schedule-pickup" },
                { name: "Refurbished Store", href: "/store" },
                { name: "Business Solutions", href: "/business" },
                { name: "Track Pickup", href: "/track" },
                { name: "Careers", href: "/careers" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    onClick={handleLinkClick}
                    className="text-white/80 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block group"
                  >
                    <span className="group-hover:text-econova-accent transition-colors duration-300">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="animate-slide-in-left" style={{ animationDelay: "0.4s" }}>
            <h3 className="text-xl font-semibold mb-6">Support</h3>
            <ul className="space-y-3">
              {[
                { name: "Help Center", href: "/help" },
                { name: "Contact Us", href: "/contact" },
                { name: "Privacy Policy", href: "/privacy" },
                { name: "Terms of Service", href: "/terms" },
                { name: "FAQ", href: "/faq" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    onClick={handleLinkClick}
                    className="text-white/80 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block group"
                  >
                    <span className="group-hover:text-econova-accent transition-colors duration-300">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="animate-slide-in-left" style={{ animationDelay: "0.6s" }}>
            <h3 className="text-xl font-semibold mb-6">Stay Connected</h3>
            <div className="space-y-4 mb-8">
              <div
                className="flex items-center space-x-3 text-white/80 group hover:text-white transition-colors duration-300 cursor-pointer"
                onClick={handleEmailClick}
              >
                <img
                  src="/images/email-logo.png"
                  alt="Email"
                  className="w-5 h-5 object-contain group-hover:scale-110 transition-transform duration-300"
                />
                <span>econova455@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-white/80 group hover:text-white transition-colors duration-300">
                <Phone className="h-5 w-5 group-hover:text-econova-accent transition-colors duration-300" />
                <span>+91 78967840xx</span>
              </div>
              <div className="flex items-center space-x-3 text-white/80 group hover:text-white transition-colors duration-300">
                <MapPin className="h-5 w-5 group-hover:text-econova-accent transition-colors duration-300" />
                <span>Prayagraj, Uttar Pradesh, India</span>
              </div>
            </div>

            <div>
              <p className="text-white/80 mb-4 text-lg">Subscribe to our newsletter</p>
              <div className="flex space-x-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 backdrop-blur-sm focus:bg-white/20 transition-all duration-300"
                />
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-econova-accent to-econova-secondary hover:from-econova-accent/90 hover:to-econova-secondary/90 text-white px-6 hover:scale-105 transition-all duration-300"
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-16 pt-8 text-center animate-slide-up">
          <p className="text-white/60 flex items-center justify-center gap-2">
            © 2024 EcoNova Labs. Made with <Heart className="h-4 w-4 text-red-400 animate-pulse" /> for a sustainable
            future. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
