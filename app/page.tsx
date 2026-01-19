import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"
import { Banner } from "@/components/banner"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Banner />
      <Services />
      <Contact />
    </main>
  )
}
