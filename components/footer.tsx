import { Trophy } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border py-12 px-4">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 pb-8 border-b border-border">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-4">Proudly Sponsored By</p>
              <div className="flex items-center justify-center gap-4">
                <img
                  src="/images/bivy-studio-logo.png"
                  alt="Bivy Studio"
                  className="h-16 w-auto opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-muted-foreground" />
                </div>
                <span className="text-xl font-bold text-muted-foreground">Road to Battle League</span>
              </div>
              <p className="text-muted-foreground/80 leading-relaxed">
                The ultimate CODM tournament platform where players unite, compete, and conquer together.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold mb-4 text-muted-foreground">Quick Links</h3>
              <ul className="space-y-2 text-muted-foreground/80">
                <li>
                  <a href="#home" className="hover:text-muted-foreground transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#events" className="hover:text-muted-foreground transition-colors">
                    Events
                  </a>
                </li>
                <li>
                  <a href="#news" className="hover:text-muted-foreground transition-colors">
                    News
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-muted-foreground transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Community */}
            <div>
              <h3 className="font-bold mb-4 text-muted-foreground">Community</h3>
              <ul className="space-y-2 text-muted-foreground/80">
                <li>
                  <a href="#" className="hover:text-muted-foreground transition-colors">
                    Discord
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-muted-foreground transition-colors">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-muted-foreground transition-colors">
                    YouTube
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-muted-foreground transition-colors">
                    Twitch
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground/70 text-sm">© 2025 Road to Battle League. All rights reserved.</p>
            <div className="flex gap-6 text-sm text-muted-foreground/70">
              <a href="#" className="hover:text-muted-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-muted-foreground transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
