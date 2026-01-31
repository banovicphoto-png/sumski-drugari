"use client"

import { Music2, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

interface TikTokVideo {
  emoji: string
  caption: string
  url: string
}

const tiktoks: TikTokVideo[] = [
  { 
    emoji: "🐻🍯", 
    caption: "Njami njami - Medo jede med",
    url: "https://www.tiktok.com/@sumski.drugari/video/7599707867670727953"
  },
  { 
    emoji: "🦊💦", 
    caption: "Lija se kupa pljas pljas!",
    url: "https://www.tiktok.com/@sumski.drugari/video/7600477084510653697"
  },
  { 
    emoji: "🐰", 
    caption: "Zeko Hop Hop",
    url: "https://www.tiktok.com/@sumski.drugari/video/7599292909615140113"
  },
  { 
    emoji: "🐻🌲", 
    caption: "Budi se Medo i skače!",
    url: "https://www.tiktok.com/@sumski.drugari/video/7597862971418643713"
  },
]

export function TikTokSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-green-50/50 to-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-8xl">♪</div>
        <div className="absolute top-1/3 right-20 text-6xl">♫</div>
        <div className="absolute bottom-20 left-1/4 text-7xl">♪</div>
        <div className="absolute bottom-1/3 right-10 text-5xl">♫</div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-foreground rounded-full mb-4">
            <Music2 className="w-5 h-5 text-background" />
            <span className="text-background font-semibold">TikTok</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Kratke Avanture
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Zabavni kratki klipovi za brzu dozu smijeha i dobre energije!
          </p>
        </div>

        {/* TikTok Grid - Phone Style */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {tiktoks.map((tiktok, index) => (
            <a
              key={index}
              href={tiktok.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              {/* Phone Frame */}
              <div className="w-44 sm:w-52 bg-foreground rounded-3xl p-2 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                {/* Phone Screen */}
                <div className="relative aspect-[9/16] bg-gradient-to-br from-primary/30 via-accent/30 to-secondary/30 rounded-2xl overflow-hidden">
                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                    <div className="text-5xl sm:text-6xl mb-4 animate-bounce-gentle">
                      {tiktok.emoji}
                    </div>
                    <p className="text-foreground font-bold text-center text-sm sm:text-base leading-tight">
                      {tiktok.caption}
                    </p>
                  </div>

                  {/* Play Indicator */}
                  <div className="absolute inset-0 flex items-center justify-center bg-foreground/0 group-hover:bg-foreground/10 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-background/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-transparent border-l-foreground ml-1" />
                    </div>
                  </div>

                  {/* TikTok Badge */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-foreground/80 text-background text-xs font-medium rounded-full flex items-center gap-1">
                    <Music2 className="w-3 h-3" />
                    Klikni za gledanje
                  </div>

                  {/* TikTok Logo */}
                  <div className="absolute top-4 left-4">
                    <Music2 className="w-6 h-6 text-foreground" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-foreground hover:bg-foreground/90 text-background rounded-full px-8 py-6 text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <a
              href="https://www.tiktok.com/@sumski.drugari"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              Prati nas na TikToku
              <ExternalLink className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce-gentle {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-8px) scale(1.05); }
        }
        .animate-bounce-gentle {
          animation: bounce-gentle 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
