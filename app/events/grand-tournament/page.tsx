import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Trophy, Shield, Gamepad2, Lock, Network } from "lucide-react"
import { DiscordIcon } from "@/components/icons/discord-icon"
import Link from "next/link"

export default function GrandTournamentPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/#events" className="hover:text-primary transition-colors">
              Events
            </Link>
            <span>/</span>
            <span className="text-foreground">Grand Tournament</span>
          </div>
        </div>

        {/* Hero Banner */}
        <div className="relative bg-gradient-to-br from-primary/20 via-background to-accent/20 border-y border-border">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1920')] bg-cover bg-center opacity-10" />
          <div className="relative container mx-auto px-4 py-16">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
                <div className="flex-1">
                  <div className="text-sm font-bold text-primary mb-2 tracking-wider">CALL OF DUTY MOBILE</div>
                  <h1 className="text-5xl lg:text-7xl font-black mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                    GRAND TOURNAMENT 2025
                  </h1>
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-border">
                      <Calendar className="w-5 h-5 text-primary" />
                      <div>
                        <div className="text-xs text-muted-foreground">Date</div>
                        <div className="font-bold">December 28, 2025</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-border">
                      <Clock className="w-5 h-5 text-primary" />
                      <div>
                        <div className="text-xs text-muted-foreground">Format</div>
                        <div className="font-bold">Single Elimination</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-primary">
                      <Trophy className="w-5 h-5 text-primary" />
                      <div>
                        <div className="text-xs text-muted-foreground">Prize Pool</div>
                        <div className="font-bold text-primary">₦1,000,000</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary" className="text-sm px-3 py-1">
                      <Lock className="w-3 h-3 mr-1" />
                      Registration Opens December 1st
                    </Badge>
                    <Badge variant="default" className="text-sm px-3 py-1">
                      Main Event
                    </Badge>
                  </div>
                </div>
                <div className="lg:text-right flex flex-col items-center lg:items-end">
                  <div className="text-sm text-muted-foreground mb-2">Registration opens in</div>
                  <div className="flex gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-4xl font-black text-primary">38</div>
                      <div className="text-xs text-muted-foreground">DAYS</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-black text-primary">12</div>
                      <div className="text-xs text-muted-foreground">HOURS</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-black text-primary">45</div>
                      <div className="text-xs text-muted-foreground">MIN</div>
                    </div>
                  </div>
                  <Button size="lg" className="w-full lg:w-auto" disabled>
                    <Lock className="w-5 h-5 mr-2" />
                    Opens December 1st
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8 flex justify-end">
              <Button variant="outline" size="lg" disabled>
                <Network className="w-5 h-5 mr-2" />
                View Brackets
              </Button>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Registration Status */}
                <div className="bg-card border border-border rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-6">Registration Status</h3>
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">REGISTRATION</span>
                        <Badge variant="secondary">
                          <Lock className="w-3 h-3 mr-1" />
                          Opens December
                        </Badge>
                      </div>
                      <div className="h-2 bg-secondary rounded-full" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">CONFIRMATION</span>
                        <Badge variant="secondary">Pending</Badge>
                      </div>
                      <div className="h-2 bg-secondary rounded-full" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">SEEDING</span>
                        <Badge variant="secondary">Pending</Badge>
                      </div>
                      <div className="h-2 bg-secondary rounded-full" />
                    </div>
                  </div>
                </div>

                {/* About */}
                <div className="bg-card border border-border rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-4">About</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The RBL Grand Tournament is the ultimate Call of Duty Mobile competition! This is where legends are
                    made and champions are crowned. Compete against the best teams from around the world in an intense
                    single-elimination tournament format. With massive prizes on the line and glory awaiting the
                    victors, this is your chance to prove you're the best. Registration opens in December, so start
                    preparing your team now! Join our Discord community to stay updated on registration details, prize
                    announcements, and tournament brackets.
                  </p>
                </div>

                {/* Game Rules */}
                <div className="bg-card border border-border rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-4">Game Rules</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">
                        Tournament format: Single Elimination bracket system
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">
                        All players must be registered on Discord to participate
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">
                        Teams have 5 minutes to join the pre-game lobby before match start
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">
                        Best of 3 format for all matches (Best of 5 for finals)
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">
                        No cheating, hacking, or exploiting game mechanics allowed
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">
                        All matches will be monitored by tournament officials
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">
                        Respect all players and follow Discord community guidelines
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Links */}
                <div className="bg-card border border-border rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-4">Links</h3>
                  <div className="space-y-2">
                    <a
                      href="#"
                      className="flex items-center gap-2 text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <DiscordIcon className="w-4 h-4" />
                      <span>Join RBL Discord Server</span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-2 text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Gamepad2 className="w-4 h-4" />
                      <span>Tournament Rules & Guidelines</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Players */}
                <div className="bg-card border border-border rounded-2xl p-6">
                  <h3 className="text-lg font-bold mb-4">Players</h3>
                  <div className="space-y-4">
                    <div className="text-center py-8">
                      <Lock className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
                      <p className="text-sm text-muted-foreground">Registration opens in December</p>
                    </div>
                  </div>
                </div>

                {/* Admin */}
                <div className="bg-card border border-border rounded-2xl p-6">
                  <h3 className="text-lg font-bold mb-4">Server Moderators</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <Shield className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-bold">Bami</div>
                        <div className="text-sm text-muted-foreground">Server Moderator</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                        <Shield className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <div className="font-bold">Tiffany</div>
                        <div className="text-sm text-muted-foreground">Server Moderator</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hosted By */}
                <div className="bg-card border border-border rounded-2xl p-6">
                  <h3 className="text-lg font-bold mb-4">Hosted By</h3>
                  <div className="flex items-center gap-3">
                    <img src="/images/bivy-studio-logo.png" alt="Bivy Studio" className="w-12 h-12 rounded-xl" />
                    <div>
                      <div className="font-bold">Bivy Studio</div>
                      <div className="text-sm text-muted-foreground">Official Host</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
