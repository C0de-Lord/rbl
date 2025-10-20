import { Button } from "@/components/ui/button"
import { Trophy, Users, Gamepad2 } from "lucide-react"
import { DiscordIcon } from "@/components/icons/discord-icon"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-20 px-4 overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/placeholder.svg?height=1080&width=1920"
          alt="CODM Battle Scene"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background/95" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Small Label Above Logo */}
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-muted-foreground font-semibold">
              Call of Duty Mobile Tournament
            </span>
          </div>

          {/* Logo Placeholder */}
          <div className="mb-8 flex justify-center">
            <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-2xl border-2 border-primary/20">
              <span className="text-4xl font-bold text-primary-foreground">RBL</span>
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 text-balance leading-[0.95] tracking-tight">
            Create Your Team And Win The Tournament Now
          </h1>

          {/* Description */}
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              RBL, the place where you can meet CODM players around the world, create a team, and win tournaments
              together.
            </p>
            <p className="text-xl md:text-2xl font-bold text-foreground mb-4">What else? Create your team now!</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="text-lg px-10 py-7 font-bold">
              <DiscordIcon className="w-5 h-5 mr-2" />
              Join Our Discord
            </Button>
          </div>

          {/* Competition Info Cards */}
          <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-12">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4">
              <div className="text-sm text-muted-foreground mb-1">Tournament Status</div>
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                <span className="font-bold text-accent">Active</span>
              </div>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4">
              <div className="text-sm text-muted-foreground mb-1">Next Event</div>
              <div className="font-bold">Preshow</div>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4">
              <div className="text-sm text-muted-foreground mb-1">Prize Pool</div>
              <div className="flex items-center justify-center gap-2">
                <Trophy className="w-4 h-4 text-primary" />
                <span className="font-bold text-primary">No Prizes</span>
              </div>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <div className="bg-card/30 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Global Community</h3>
              <p className="text-muted-foreground">Connect with CODM players from around the world</p>
            </div>

            <div className="bg-card/30 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary transition-colors">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Gamepad2 className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2">Competitive CODM</h3>
              <p className="text-muted-foreground">Compete in Call of Duty Mobile tournaments</p>
            </div>

            <div className="bg-card/30 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Trophy className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Win Prizes</h3>
              <p className="text-muted-foreground">Compete for amazing prizes and glory</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
