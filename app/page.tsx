import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { EventSection } from "@/components/event-section"
import { LivestreamSection } from "@/components/livestream-section"
import { HotNewsSection } from "@/components/hot-news-section"
import { FAQSection } from "@/components/faq-section"
import { SponsorshipSection } from "@/components/sponsorship-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <EventSection />
        <LivestreamSection />
        <HotNewsSection />
        <FAQSection />
        <SponsorshipSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
