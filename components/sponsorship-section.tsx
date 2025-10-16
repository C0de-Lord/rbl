import { Button } from "@/components/ui/button"
import { Handshake, TrendingUp, Users } from "lucide-react"

export function SponsorshipSection() {
  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="bg-card border border-border rounded-3xl p-12 text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Handshake className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6">Partner With RBL</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Join us in building the future of competitive gaming. Reach thousands of passionate CODM players and
              showcase your brand to our growing community.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="bg-background/50 rounded-xl p-6">
                <TrendingUp className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-bold mb-2">Brand Visibility</h3>
                <p className="text-sm text-muted-foreground">Reach engaged gaming audiences across our platforms</p>
              </div>
              <div className="bg-background/50 rounded-xl p-6">
                <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-bold mb-2">Community Impact</h3>
                <p className="text-sm text-muted-foreground">Support grassroots esports and player development</p>
              </div>
              <div className="bg-background/50 rounded-xl p-6">
                <Handshake className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-bold mb-2">Partnership Benefits</h3>
                <p className="text-sm text-muted-foreground">Custom packages tailored to your marketing goals</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                Become a Sponsor
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent">
                View Partnership Packages
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
