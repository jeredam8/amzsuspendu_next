import { Shield, RotateCcw, TrendingUp, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const services = [
  {
    title: "Réactivation d'Urgence",
    icon: RotateCcw,
    features: ["Diagnostic immédiat", "Plan d'action sur-mesure", "Suivi jusqu'à réactivation"],
    cta: "SOS Réactivation",
    highlight: true
  },
  {
    title: "Protection Pro",
    icon: Shield,
    features: ["Monitoring 24/7", "Audit préventif mensuel", "Support prioritaire"],
    cta: "Protéger mon compte",
    highlight: false
  },
  {
    title: "M&A Amazon",
    icon: TrendingUp,
    features: ["Valorisation précise", "Due Diligence technique", "Transfert sécurisé"],
    cta: "Parler à un expert",
    highlight: false
  }
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nos Solutions d'Expertise</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className={service.highlight ? 'border-secondary shadow-lg' : ''}>
              <CardHeader>
                <div className="mb-4 w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {service.features.map((f) => (
                    <li key={f} className="flex gap-2 text-sm"><Check className="h-4 w-4 text-green-500" /> {f}</li>
                  ))}
                </ul>
                <Button asChild className="w-full" variant={service.highlight ? "default" : "outline"}>
                  <Link href="/contact">{service.cta}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
