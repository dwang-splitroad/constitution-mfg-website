"use client"

import { useState, useEffect } from "react"
import { ConstitutionLogo } from "./constitution-logo"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <ConstitutionLogo className="h-12 w-auto" />
          </button>

          <div className="flex items-center gap-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium bg-primary text-primary-foreground px-6 py-2 rounded hover:bg-primary/90 transition-colors"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
