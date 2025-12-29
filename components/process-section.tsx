import { Button } from "@/components/ui/button"
import { Search, FileText, RefreshCw, ArrowUpRight, Scale } from "lucide-react"

export function ProcessSection() {
  const steps = [
    {
      number: 1,
      icon: Search,
      title: "Diagnostic Initial",
      description: "Analyse complète de votre suspension et identification des causes racines",
      position: "left",
    },
    {
      number: 2,
      icon: FileText,
      title: "Plan d'action personnalisé",
      description: "Stratégie sur mesure adaptée à votre cas de marketplace",
      position: "right",
    },
    {
      number: 3,
      icon: RefreshCw,
      title: "Itérations stratégiques",
      description: "Mise en œuvre progressive avec ajustements selon les retours Amazon",
      position: "left",
    },
    {
      number: 4,
      icon: ArrowUpRight,
      title: "Escalade hiérarchique",
      description: "Montée en gamme vers les équipes spécialisées Amazon si nécessaire",
      position: "right",
    },
    {
      number: 5,
      icon: Scale,
      title: "Médiation Amazon",
      description: "Recours final via les canaux officiels de médiation Amazon",
      position: "left",
    },
  ]

  return (
    <section id="process" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Notre Processus de Réactivation</h2>
          <p className="text-gray-600">Méthodologie éprouvée en 5 étapes pour maximiser vos chances de succès</p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-blue-600/20" />

          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative flex items-center mb-12 ${
                step.position === "left" ? "justify-start" : "justify-end"
              }`}
            >
              {/* Step content */}
              <div className={`w-5/12 ${step.position === "left" ? "pr-8 text-right" : "pl-8 text-left"}`}>
                <div
                  className={`bg-white rounded-xl p-4 border border-gray-100 shadow-sm ${
                    step.position === "left" ? "ml-auto" : "mr-auto"
                  }`}
                >
                  <div
                    className={`flex items-center gap-2 mb-2 ${step.position === "left" ? "justify-end" : "justify-start"}`}
                  >
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <step.icon className="w-4 h-4 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900">{step.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              </div>

              {/* Center circle */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold z-10 shadow-md border-4 border-white">
                {step.number}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all">
            Initier le processus maintenant
          </Button>
        </div>
      </div>
    </section>
  )
}
