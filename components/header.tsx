"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { DiscordIcon } from "@/components/icons/discord-icon"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === "/"

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">RBL</span>
            </div>
            <span className="text-lg font-bold hidden sm:inline">Road to Battle League</span>
            <span className="text-lg font-bold sm:hidden">RBL</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Home
            </Link>
            {isHome ? (
              <button
                onClick={() => scrollToSection("events")}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Events
              </button>
            ) : (
              <Link
                href="/#events"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Events
              </Link>
            )}
            <Link
              href="/news"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              News
            </Link>
            {isHome ? (
              <button
                onClick={() => scrollToSection("faq")}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                FAQ
              </button>
            ) : (
              <Link
                href="/#faq"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                FAQ
              </Link>
            )}
            {isHome ? (
              <button
                onClick={() => scrollToSection("contact")}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Contact Us
              </button>
            ) : (
              <Link
                href="/#contact"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Contact Us
              </Link>
            )}
          </nav>

          <Button className="hidden md:flex font-bold" size="lg">
            <DiscordIcon className="w-4 h-4 mr-2" />
            Join Discord
          </Button>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-foreground hover:text-primary transition-colors text-left"
            >
              Home
            </Link>
            {isHome ? (
              <button
                onClick={() => scrollToSection("events")}
                className="text-foreground hover:text-primary transition-colors text-left"
              >
                Events
              </button>
            ) : (
              <Link
                href="/#events"
                onClick={() => setMobileMenuOpen(false)}
                className="text-foreground hover:text-primary transition-colors text-left"
              >
                Events
              </Link>
            )}
            <Link
              href="/news"
              onClick={() => setMobileMenuOpen(false)}
              className="text-foreground hover:text-primary transition-colors text-left"
            >
              News
            </Link>
            {isHome ? (
              <button
                onClick={() => scrollToSection("faq")}
                className="text-foreground hover:text-primary transition-colors text-left"
              >
                FAQ
              </button>
            ) : (
              <Link
                href="/#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="text-foreground hover:text-primary transition-colors text-left"
              >
                FAQ
              </Link>
            )}
            {isHome ? (
              <button
                onClick={() => scrollToSection("contact")}
                className="text-foreground hover:text-primary transition-colors text-left"
              >
                Contact Us
              </button>
            ) : (
              <Link
                href="/#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-foreground hover:text-primary transition-colors text-left"
              >
                Contact Us
              </Link>
            )}
            <Button className="w-full">
              <DiscordIcon className="w-4 h-4 mr-2" />
              Join Discord
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}
