"use client"

import { Play, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Video {
  title: string
  thumbnail: string
  emoji: string
  url: string
}

const videos: Video[] = [
  {
    title: "Medo našao med!",
    thumbnail: "bg-amber-200",
    emoji: "🐻🍯",
    url: "https://www.youtube.com/watch?v=ThjOTFW71DI",
  },
  {
    title: "Zeko hop u šumi",
    thumbnail: "bg-pink-200",
    emoji: "🐰",
    url: "https://www.youtube.com/watch?v=3k_cuDcRkyg",
  },
  {
    title: "Lija pljus pljas",
    thumbnail: "bg-orange-200",
    emoji: "🦊💦",
    url: "https://www.youtube.com/watch?v=b9TTV188xHc",
  },
  {
    title: "Ide Medo - tap tap tap",
    thumbnail: "bg-green-200",
    emoji: "🐻",
    url: "https://www.youtube.com/watch?v=NQwP-5lrkZo",
  },
]

export function VideosSection() {
  return (
    <section id="pjesmice" className="py-20 px-4 bg-gradient-to-b from-background to-green-50/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 rounded-full mb-4">
            <Play className="w-5 h-5 text-red-600" />
            <span className="text-red-600 font-semibold">YouTube</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Naše Pjesmice
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pjevaj s nama! Svaka pjesmica je avantura puna učenja i smijeha.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          {videos.map((video) => (
            <a
              key={video.title}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
            >
              {/* Thumbnail Placeholder */}
              <div className={`aspect-video ${video.thumbnail} relative`}>
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300">
                  <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center shadow-xl transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <Play className="w-8 h-8 text-white ml-1" fill="white" />
                  </div>
                </div>

                {/* Emoji Decoration */}
                <div className="absolute top-4 left-4 text-4xl animate-wiggle">
                  {video.emoji}
                </div>

                {/* YouTube Badge */}
                <div className="absolute bottom-2 right-2 px-3 py-1 bg-red-600 text-white text-sm font-medium rounded-full flex items-center gap-1">
                  <Play className="w-3 h-3" fill="white" />
                  YouTube
                </div>
              </div>

              {/* Video Info */}
              <div className="p-4 bg-card">
                <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                  {video.title}
                </h3>
                <p className="text-sm text-muted-foreground">Klikni za gledanje</p>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-white rounded-full px-8 py-6 text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <a
              href="https://www.youtube.com/@sumskidrugari"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              Gledaj na YouTube
              <ExternalLink className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>

      <style jsx>{`
        @keyframes wiggle {
          0%, 100% { transform: rotate(-5deg); }
          50% { transform: rotate(5deg); }
        }
        .animate-wiggle {
          animation: wiggle 1s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
