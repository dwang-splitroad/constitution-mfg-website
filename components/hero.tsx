"use client"

import { ConstitutionLogo } from "./constitution-logo"

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-hero-pattern">
      <div className="container mx-auto px-4 py-32">
        <div className="max-w-4xl mx-auto text-center">
          

          <ConstitutionLogo className="h-32 w-auto mx-auto mb-8" />

          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-8 text-balance">
            Precision Manufacturing
            <br />
            <span className="text-primary">Made in America</span>
          </h1>

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
