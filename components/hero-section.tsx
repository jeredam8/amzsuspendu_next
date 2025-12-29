import Link from "next/link"
import { ArrowRight, CheckCircle, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative pt-20 pb-16 text-center bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="inline-flex items-center rounded-full border border-orange-200 bg-orange-100 px-3 py-1 text-sm font-medium text-orange-800 mb-8">
          <span className="flex h-2 w-2 rounded-full bg-orange-600 mr-2"></span>
          Urgence Amazon & Protection de Compte
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl mb-6">
          Compte Amazon <span className="text-secondary">Suspendu</span> ?<br />
          Réactivation en <span className="text-primary">24h</span>.
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-600 mb-8">
          Experts Amazon depuis 2014. Plus de 150 dossiers traités. Ne laissez pas votre business à l'arrêt.
        </p>
        <div className="flex justify-center gap-4 mb-12">
          <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white text-lg">
            <Link href="/contact">Audit Gratuit <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-slate-500">
          <span className="flex items-center gap-2"><CheckCircle className="text-green-500" /> 100% Conformité</span>
          <span className="flex items-center gap-2"><ShieldCheck className="text-blue-500" /> Confidentialité Totale</span>
        </div>
      </div>
    </section>
  )
}
