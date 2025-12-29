import { Search, Target, Gavel, AlertTriangle } from "lucide-react"

export function SuspensionAlert() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl md:text-2xl font-bold text-center text-gray-900 mb-8">
          Suspension détectée ? Protocole d'intervention immédiat
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Card 1 */}
          <div className="bg-white rounded-xl p-6 border border-gray-100">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
              <Search className="w-6 h-6 text-[#2563eb]" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Analyse approfondie</h3>
            <p className="text-sm text-gray-600">
              Évaluation complète de votre suspension avec identification précise des violations.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl p-6 border border-gray-100">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-[#f97316]" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Stratégie sur mesure</h3>
            <p className="text-sm text-gray-600">
              Développer un plan d'action adapté à votre type d'infraction Amazon.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl p-6 border border-gray-100">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
              <Gavel className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Process jusqu'à médiation</h3>
            <p className="text-sm text-gray-600">
              Accompagnement jusqu'à la médiation, l'escalade possible si réactivation échoue.
            </p>
          </div>
        </div>

        {/* Warning banner */}
        <div className="bg-[#fef3c7] border border-[#f59e0b] rounded-xl p-4 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-[#f59e0b] flex-shrink-0 mt-0.5" />
          <p className="text-sm text-[#92400e]">
            <span className="font-semibold">Chaque heure compte :</span> plus vous attendez, plus la réactivation
            devient complexe
          </p>
        </div>
      </div>
    </section>
  )
}
