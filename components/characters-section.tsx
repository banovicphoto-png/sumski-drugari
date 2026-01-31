"use client"

import { useState } from "react"

interface Character {
  name: string
  emoji: string
  color: string
  description: string
  trait: string
}

const characters: Character[] = [
  {
    name: "Medo",
    emoji: "🐻",
    color: "bg-amber-100 border-amber-400",
    description: "Medo je naš hrabri i snažni prijatelj koji voli med i avanture u šumi.",
    trait: "Hrabrost",
  },
  {
    name: "Zeka",
    emoji: "🐰",
    color: "bg-pink-100 border-pink-400",
    description: "Zeka je brza i vesela, uvijek spremna za igru i skakanje po livadi.",
    trait: "Radost",
  },
  {
    name: "Lisica",
    emoji: "🦊",
    color: "bg-orange-100 border-orange-400",
    description: "Lisica je pametna i lukava, zna rješenje za svaki problem.",
    trait: "Mudrost",
  },
  {
    name: "Ptičica",
    emoji: "🐦",
    color: "bg-sky-100 border-sky-400",
    description: "Ptičica pjeva najljepše pjesme i donosi radost svuda gdje doleti.",
    trait: "Muzika",
  },
]

export function CharactersSection() {
  const [activeCharacter, setActiveCharacter] = useState<number | null>(null)

  return (
    <section id="o-nama" className="py-20 px-4 bg-gradient-to-b from-yellow-50/30 to-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Upoznaj Šumske Drugare
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Četiri prijatelja koji žive u čarobnoj šumi i zajedno pjevaju, uče i igraju se!
          </p>
        </div>

        {/* Characters Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {characters.map((character, index) => (
            <div
              key={character.name}
              className={`relative p-6 rounded-3xl border-4 ${character.color} transition-all duration-500 cursor-pointer hover:scale-105 ${
                activeCharacter === index ? "scale-105 shadow-2xl" : "shadow-lg"
              }`}
              onMouseEnter={() => setActiveCharacter(index)}
              onMouseLeave={() => setActiveCharacter(null)}
            >
              {/* Character Emoji */}
              <div className="text-7xl md:text-8xl mb-4 text-center animate-bounce-slow">
                {character.emoji}
              </div>
              
              {/* Character Name */}
              <h3 className="text-xl md:text-2xl font-bold text-foreground text-center mb-2">
                {character.name}
              </h3>
              
              {/* Trait Badge */}
              <div className="inline-flex w-full justify-center">
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-background/80 text-foreground">
                  {character.trait}
                </span>
              </div>

              {/* Description (shown on hover) */}
              <div
                className={`mt-4 text-sm text-center text-muted-foreground transition-all duration-300 ${
                  activeCharacter === index ? "opacity-100 max-h-20" : "opacity-0 max-h-0 overflow-hidden"
                }`}
              >
                {character.description}
              </div>
            </div>
          ))}
        </div>

        {/* Fun Fact */}
        <div className="mt-16 text-center p-8 bg-primary/10 rounded-3xl border-2 border-primary/20">
          <p className="text-lg md:text-xl text-foreground font-medium">
            Zajedno učimo o prijateljstvu, prirodi i važnosti pomaganja drugima kroz
            vesele pjesmice i šumske avanture!
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
