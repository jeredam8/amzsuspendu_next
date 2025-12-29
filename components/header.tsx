"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight text-primary">
          AMZ<span className="text-secondary">Suspendu</span>
        </Link>
        <nav className="hidden md:flex gap-6 items-center">
          <Link href="#services" className="text-sm font-medium hover:text-primary">Services</Link>
          <Link href="/blog" className="text-sm font-medium hover:text-primary">Blog</Link>
          <Button asChild variant="secondary" size="sm">
            <Link href="/contact">Audit Gratuit</Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}
