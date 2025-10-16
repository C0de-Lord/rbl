import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function HotNewsSection() {
  const news = [
    {
      id: "rbl-season-2-announcement",
      title: "RBL Season 2 Announced - Bigger Prize Pool for CODM Players",
      image: "/placeholder.svg?height=400&width=600",
      featured: true,
    },
    {
      id: "team-phoenix-victory",
      title: "Team Phoenix Dominates RBL Preshow Tournament",
      image: "/placeholder.svg?height=300&width=400",
      featured: false,
    },
    {
      id: "new-moderators-join",
      title: "Welcome Tiffany - New Server Moderator Joins RBL Team",
      image: "/placeholder.svg?height=300&width=400",
      featured: false,
    },
  ]

  return (
    <section id="news" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Hottest News</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Featured News */}
            <Link href={`/news/${news[0].id}`} className="md:row-span-2 group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl bg-card border border-border h-full hover:border-primary transition-colors">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={news[0].image || "/placeholder.svg"}
                    alt={news[0].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{news[0].title}</h3>
                </div>
              </div>
            </Link>

            {/* Secondary News */}
            {news.slice(1).map((item, index) => (
              <Link key={index} href={`/news/${item.id}`} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl bg-card border border-border h-full hover:border-primary transition-colors">
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{item.title}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="flex justify-center">
            <Link href="/news">
              <Button variant="outline" size="lg" className="gap-2 bg-transparent">
                View All News
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
