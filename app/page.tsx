import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ServicesSection />
      <Footer />
    </main>
  )
}
