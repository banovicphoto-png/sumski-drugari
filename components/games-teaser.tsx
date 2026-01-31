"use client"

import Link from "next/link"
import { Gamepad2, Sparkles, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"

const gameFeatures = [
  { icon: "🎨", title: "Bojanje", description: "Oboji šumske drugare" },
  { icon: "🧩", title: "Slagalice", description: "Složi puzzle sa likovima" },
  { icon: "🎵", title: "Muzička igra", description: "Pjevaj i pogađaj pjesme" },
  { icon: "📚", title: "Učenje", description: "Uči slova i brojeve" },
]

export function GamesTeaser() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-accent/10 via-primary/10 to-secondary/10 relative overflow-hidden">
      {/* Floating Game Icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-[10%] text-5xl animate-float-slow opacity-30">🎮</div>
        <div className="absolute top-40 right-[15%] text-4xl animate-float-medium opacity-30">🕹️</div>
        <div className="absolute bottom-32 left-[20%] text-5xl animate-float-fast opacity-30">📱</div>
        <div className="absolute bottom-20 right-[25%] text-4xl animate-float-slow opacity-30">⭐</div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-full mb-4">
            <Gamepad2 className="w-5 h-5 text-accent" />
            <span className="text-accent font-semibold">Uskoro</span>
            <Sparkles className="w-4 h-4 text-accent" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Šumske Igrice
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Uskoro dolaze zabavne mobilne igrice za naše male šumske prijatelje!
          </p>
        </div>

        {/* Phone Mockup with Features */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Phone Mockup */}
          <div className="relative w-64 lg:w-72">
            {/* Phone Frame */}
            <div className="relative bg-foreground rounded-[3rem] p-3 shadow-2xl">
              {/* Phone Screen */}
              <div className="aspect-[9/19] bg-gradient-to-br from-primary/40 via-accent/40 to-secondary/40 rounded-[2.5rem] overflow-hidden relative">
                {/* Notch */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-foreground rounded-full" />
                
                {/* Screen Content */}
                <div className="pt-12 px-4 text-center">
                  <div className="text-6xl mb-4 animate-bounce-slow">🎮</div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Šumske Igrice</h3>
                  <p className="text-sm text-muted-foreground mb-4">Uskoro na telefonu!</p>
                  
                  {/* Fake App Icons */}
                  <div className="grid grid-cols-3 gap-3 mt-6">
                    {["🐻", "🐰", "🦊", "🐦", "🌲", "⭐"].map((emoji, i) => (
                      <div
                        key={i}
                        className="aspect-square bg-background/80 rounded-2xl flex items-center justify-center text-2xl shadow-md"
                      >
                        {emoji}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Coming Soon Badge */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 px-4 py-2 bg-accent text-accent-foreground rounded-full font-bold text-sm animate-pulse">
                  USKORO!
                </div>
              </div>
            </div>

            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-accent/20 rounded-[4rem] blur-2xl -z-10" />
          </div>

          {/* Features List */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {gameFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className="p-6 bg-card rounded-2xl border-2 border-border hover:border-primary/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Notify CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-card rounded-3xl border-2 border-dashed border-primary/30">
            <Bell className="w-8 h-8 text-primary animate-wiggle" />
            <div className="text-left">
              <p className="font-bold text-foreground">Budi prvi koji sazna!</p>
              <p className="text-sm text-muted-foreground">Prati nas na društvenim mrežama</p>
            </div>
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6"
            >
              <Link href="/igrice">Saznaj više</Link>
            </Button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-5deg); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(3deg); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes wiggle {
          0%, 100% { transform: rotate(-10deg); }
          50% { transform: rotate(10deg); }
        }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 5s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 4s ease-in-out infinite; }
        .animate-bounce-slow { animation: bounce-slow 2s ease-in-out infinite; }
        .animate-wiggle { animation: wiggle 1s ease-in-out infinite; }
      `}</style>
    </section>
  )
}
