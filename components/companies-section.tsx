export function CompaniesSection() {
  const companies = ["FRAZER", "LORIENT", "OpenClassrooms", "Qonto", "LYRECO"]

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Entreprises qui nous font confiance</h3>
          <p className="text-sm text-gray-600">Plus de 150 entreprises nous ont choisi pour leur réactivation Amazon</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-60 grayscale">
          {companies.map((company, index) => (
            <div key={index} className="text-xl font-bold text-gray-400">
              {company}
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-500 mt-8">
          +100 entreprises nous ont fait confiance pour leur réactivation Amazon
        </p>
      </div>
    </section>
  )
}
