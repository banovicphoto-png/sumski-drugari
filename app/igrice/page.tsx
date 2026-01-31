"use client"

import React from "react"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Sparkles } from "@/components/sparkles"
import { BearJumpGame } from "@/components/bear-jump-game"
import {
  ArrowLeft,
  Gamepad2,
  Palette,
  Puzzle,
  Music,
  BookOpen,
  Bell,
  Check,
  Smartphone,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const upcomingGames = [
  {
    icon: <Palette className="w-8 h-8" />,
    emoji: "🎨",
    title: "Bojanka",
    description: "Oboji šumske drugare u raznim bojama! Kreativna igra za male umjetnike.",
    color: "bg-pink-100 border-pink-400 text-pink-600",
  },
  {
    icon: <Puzzle className="w-8 h-8" />,
    emoji: "🧩",
    title: "Slagalice",
    description: "Složi puzzle sa omiljenim likovima. Različiti nivoi težine za sve uzraste.",
    color: "bg-blue-100 border-blue-400 text-blue-600",
  },
  {
    icon: <Music className="w-8 h-8" />,
    emoji: "🎵",
    title: "Muzička igra",
    description: "Pjevaj i pogađaj pjesme sa šumskim drugarima. Zabava za cijelu porodicu!",
    color: "bg-purple-100 border-purple-400 text-purple-600",
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    emoji: "📚",
    title: "Učimo zajedno",
    description: "Uči slova, brojeve i boje kroz igru. Edukativno i zabavno!",
    color: "bg-green-100 border-green-400 text-green-600",
  },
]

export default function GamesPage() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail("")
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-accent/10 via-primary/5 to-background">
      <Navbar />
      <Sparkles />

      <div className="pt-24 pb-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Back Link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Nazad na početnu
          </Link>

          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-full mb-4">
              <Gamepad2 className="w-5 h-5 text-accent" />
              <span className="text-accent font-semibold">U razvoju</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
              Šumske Igrice
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Zabavne mobilne igrice za naše male šumske prijatelje dolaze uskoro! Učenje kroz igru
              nikad nije bilo zabavnije.
            </p>
          </div>

          {/* Phone Mockup Hero */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
            {/* Phone */}
            <div className="relative w-64 lg:w-80 flex-shrink-0">
              <div className="relative bg-foreground rounded-[3rem] p-3 shadow-2xl">
                <div className="aspect-[9/19] bg-gradient-to-br from-primary/40 via-accent/40 to-secondary/40 rounded-[2.5rem] overflow-hidden relative">
                  {/* Notch */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-foreground rounded-full" />

                  {/* Screen Content */}
                  <div className="pt-16 px-6 text-center">
                    <div className="text-7xl mb-4 animate-bounce-slow">🎮</div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">Šumske Igrice</h3>
                    <p className="text-sm text-muted-foreground mb-6">Uskoro na telefonu!</p>

                    {/* Fake App Icons */}
                    <div className="grid grid-cols-3 gap-3">
                      {["🎨", "🧩", "🎵", "📚", "🐻", "🐰"].map((emoji, i) => (
                        <div
                          key={i}
                          className="aspect-square bg-background/80 rounded-2xl flex items-center justify-center text-3xl shadow-md animate-wiggle"
                          style={{ animationDelay: `${i * 0.1}s` }}
                        >
                          {emoji}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Coming Soon Badge */}
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 px-6 py-3 bg-accent text-accent-foreground rounded-full font-bold animate-pulse">
                    USKORO DOLAZI!
                  </div>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-accent/20 rounded-[4rem] blur-3xl -z-10" />
            </div>

            {/* Features */}
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Zašto će djeca obožavati naše igrice?
              </h2>
              <div className="space-y-4">
                {[
                  { icon: "🎯", text: "Prilagođeno uzrastu od 2 do 8 godina" },
                  { icon: "🔒", text: "Sigurno okruženje bez reklama" },
                  { icon: "🎓", text: "Edukativni sadržaj kroz igru" },
                  { icon: "🎨", text: "Veseli i šareni dizajn" },
                  { icon: "📱", text: "Radi offline - igraj gdje god želiš" },
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-card rounded-2xl shadow-md">
                    <span className="text-3xl">{feature.icon}</span>
                    <span className="text-foreground font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mini Game */}
          <div className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
              Probaj Medo Skakac!
            </h2>
            <div className="flex justify-center">
              <BearJumpGame />
            </div>
          </div>

          {/* Games Grid */}
          <div className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
              Igrice u pripremi
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {upcomingGames.map((game) => (
                <div
                  key={game.title}
                  className={`relative p-6 rounded-3xl border-4 ${game.color} transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl group`}
                >
                  {/* Emoji */}
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                    {game.emoji}
                  </div>

                  {/* Icon */}
                  <div className="mb-3">{game.icon}</div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-2">{game.title}</h3>

                  {/* Description */}
                  <p className="text-sm opacity-80">{game.description}</p>

                  {/* Coming Soon Badge */}
                  <div className="absolute top-4 right-4 px-2 py-1 bg-background/80 rounded-full text-xs font-bold">
                    Uskoro
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="max-w-2xl mx-auto text-center p-8 bg-card rounded-3xl border-2 border-primary/20 shadow-xl">
            <Bell className="w-12 h-12 text-primary mx-auto mb-4 animate-wiggle" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Budi prvi koji sazna!
            </h2>
            <p className="text-muted-foreground mb-6">
              Prati nas na društvenim mrežama i saznaj prvi kada igrice budu dostupne.
            </p>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <a
                href="https://www.youtube.com/@sumskidrugari"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-full font-bold hover:bg-red-700 transition-colors"
              >
                YouTube
              </a>
              <a
                href="https://www.tiktok.com/@sumski.drugari"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full font-bold hover:bg-foreground/90 transition-colors"
              >
                TikTok
              </a>
            </div>

            <div className="flex items-center justify-center gap-4">
              <Smartphone className="w-6 h-6 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                Dolazi na iOS i Android uređaje
              </span>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      <style jsx>{`
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        @keyframes wiggle {
          0%,
          100% {
            transform: rotate(-3deg);
          }
          50% {
            transform: rotate(3deg);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        .animate-wiggle {
          animation: wiggle 1s ease-in-out infinite;
        }
      `}</style>
    </main>
  )
}
