"use client"

import { ConstitutionLogo } from "./constitution-logo"

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-hero-pattern">
      <div className="container mx-auto px-4 py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <p className="text-6xl md:text-8xl font-bold text-primary uppercase tracking-wider">Coming Soon</p>
          </div>

          <ConstitutionLogo className="h-32 w-auto mx-auto mb-8" />

          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Precision Manufacturing
            <br />
            <span className="text-primary">American Made</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty leading-relaxed">
            Constitution MFG delivers uncompromising quality in precision gun parts manufacturing. Built on American
            values of excellence, integrity, and craftsmanship.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                const element = document.getElementById("services")
                if (element) element.scrollIntoView({ behavior: "smooth" })
              }}
              className="px-8 py-3 bg-primary text-primary-foreground font-medium rounded hover:bg-primary/90 transition-colors"
            >
              Our Capabilities
            </button>
            <button
              onClick={() => {
                const element = document.getElementById("contact")
                if (element) element.scrollIntoView({ behavior: "smooth" })
              }}
              className="px-8 py-3 bg-secondary text-secondary-foreground font-medium rounded hover:bg-secondary/90 transition-colors"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
