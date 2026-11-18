import { Shield, Award } from "lucide-react"

const capabilities = [
  {
    icon: Shield,
    title: "Quality Assurance",
    description:
      "Constitution Mfg is committed to meeting customer requirements; we strive for Continuous Improvement in our products and our people.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Manufacturing Excellence</h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Our capabilities span the full spectrum of precision manufacturing, delivering components that meet the
            highest standards of quality and performance.
          </p>
        </div>

        <div className="grid gap-8 max-w-3xl mx-auto">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{capability.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{capability.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-16 max-w-3xl mx-auto bg-card border border-border rounded-lg p-8">
          <h3 className="text-2xl font-bold text-foreground mb-4 text-center">Core Competencies</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Aerospace and Defense Industries",
              "Precision Swiss Parts",
              "4-Axis and 5-Axis CNC Milling",
              "Tight Tolerance Machining",
              "State-of-the-art inspection equipment",
              "Regulatory Compliance",
            ].map((competency, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-muted-foreground">{competency}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
