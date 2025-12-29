import { Star } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      rating: 4.5,
      count: "4 / 5",
      title: "Excellent FVS Super-compétent et bon. j'ai pu récupérer mon compte",
      text: "J'ai un compte avec suspension temporaire niveau 1. Réactive en 3 semaines sans problème.",
      author: "Julie H.",
    },
    {
      rating: 5,
      count: "5 / 5",
      title: "Bon (oui), nous savoir etais",
      text: "Pour mon cas, la reactivation était plus compliquée. L'équipe a mis plusieurs semaines mais c'est passé!",
      author: "Thomas R.",
    },
    {
      rating: 5,
      count: "5 / 5",
      title: "Mon compte vendeur était arrêté à réputation",
      text: "Processus clair et structuré. J'ai apprécié le suivi continu et les mises à jour régulières.",
      author: "Sarah M.",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Ils nous font confiance depuis 10 ans</h2>
          <p className="text-gray-600">Plus de 150 vendeurs Amazon nous ont fait confiance pour leur réactivation</p>
        </div>

        {/* Main rating */}
        <div className="flex items-center justify-center gap-8 mb-12">
          <div className="text-center">
            <div className="text-5xl font-bold text-gray-900">
              4,5<span className="text-2xl text-gray-400">/5</span>
            </div>
            <div className="flex items-center justify-center gap-1 my-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${i < 4 ? "fill-yellow-400 text-yellow-400" : "fill-yellow-200 text-yellow-200"}`}
                />
              ))}
            </div>
            <p className="text-sm text-gray-500">Note moyenne sur 90+ avis</p>
          </div>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(testimonial.rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "fill-gray-200 text-gray-200"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-500">{testimonial.count}</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2 text-sm">{testimonial.title}</h4>
              <p className="text-sm text-gray-600 mb-4">{testimonial.text}</p>
              <p className="text-sm font-medium text-gray-900">{testimonial.author}</p>
            </div>
          ))}
        </div>

        {/* Malt badge */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="flex items-center gap-4">
            <div className="text-2xl font-bold text-[#ff5c57]">malt</div>
            <div className="text-left">
              <p className="font-semibold text-gray-900">Top consultant Malt</p>
              <p className="text-sm text-gray-500">100% de satisfaction client</p>
            </div>
          </div>
          <div className="text-left">
            <p className="font-semibold text-gray-900">N°1 en France et en Europe</p>
            <p className="text-sm text-gray-500">+500 réactivations depuis 2015 sur les suspensions</p>
          </div>
          <div className="text-left">
            <p className="font-semibold text-gray-900">Expert Amazon Europe</p>
            <p className="text-sm text-gray-500">
              Seule expertise française 100% dédiée de conformité spécifiques à Amazon Europe
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
