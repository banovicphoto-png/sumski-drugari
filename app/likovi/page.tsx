"use client"

import React from "react"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FloatingLeaves } from "@/components/floating-leaves"
import { ArrowLeft, Heart, Star, Music, Zap } from "lucide-react"
import Link from "next/link"

interface Character {
  name: string
  emoji: string
  color: string
  bgColor: string
  description: string
  fullDescription: string
  trait: string
  icon: React.ReactNode
  funFacts: string[]
}

const characters: Character[] = [
  {
    name: "Medo",
    emoji: "🐻",
    color: "text-amber-600",
    bgColor: "bg-amber-100",
    trait: "Hrabrost",
    icon: <Zap className="w-5 h-5" />,
    description: "Naš hrabri i snažni prijatelj",
    fullDescription:
      "Medo je najhrabriji stanovnik šume. Uvijek je spreman pomoći prijateljima i nikada se ne plaši novih izazova. Voli med više od svega na svijetu i često pjeva dok ga traži po šumi.",
    funFacts: [
      "Može pojesti cijelu teglu meda odjednom",
      "Ima najjači zagrljaj u šumi",
      "Voli spavati tokom zime",
    ],
  },
  {
    name: "Zeka",
    emoji: "🐰",
    color: "text-pink-600",
    bgColor: "bg-pink-100",
    trait: "Radost",
    icon: <Heart className="w-5 h-5" />,
    description: "Brza i vesela prijateljica",
    fullDescription:
      "Zeka je uvijek puna energije i radosti! Skaće po livadi od jutra do mraka i širi dobru energiju gdje god ode. Njena sreća je zarazna i svi je vole.",
    funFacts: [
      "Može skočiti preko bilo čega",
      "Ima najduže i najmekše uši",
      "Obožava mrkvu i salatu",
    ],
  },
  {
    name: "Lisica",
    emoji: "🦊",
    color: "text-orange-600",
    bgColor: "bg-orange-100",
    trait: "Mudrost",
    icon: <Star className="w-5 h-5" />,
    description: "Pametna i lukava prijateljica",
    fullDescription:
      "Lisica je najpametnija u cijeloj šumi. Uvijek ima rješenje za svaki problem i voli učiti nove stvari. Njeni savjeti pomažu svim šumskim drugarima.",
    funFacts: [
      "Zna odgovor na svako pitanje",
      "Ima najljepši crveni rep",
      "Čita knjige svake noći",
    ],
  },
  {
    name: "Ptičica",
    emoji: "🐦",
    color: "text-sky-600",
    bgColor: "bg-sky-100",
    trait: "Muzika",
    icon: <Music className="w-5 h-5" />,
    description: "Pjeva najljepše pjesme",
    fullDescription:
      "Ptičica ima najljepši glas u šumi i budi sve životinje svojim pjevanjem. Leti visoko iznad drveća i prenosi vijesti svim stanovnicima šume.",
    funFacts: [
      "Zna 100 različitih pjesama",
      "Leti brže od vjetra",
      "Pravi najljepša gnijezda",
    ],
  },
]

export default function CharactersPage() {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null)

  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 via-background to-yellow-50/30">
      <Navbar />
      <FloatingLeaves />

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
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
              Upoznaj Šumske Drugare
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Klikni na lika da saznaš više o njemu!
            </p>
          </div>

          {/* Characters Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {characters.map((character) => (
              <button
                key={character.name}
                onClick={() => setSelectedCharacter(character)}
                className={`relative p-8 rounded-3xl border-4 ${character.bgColor} border-current ${character.color} transition-all duration-500 cursor-pointer hover:scale-[1.02] shadow-xl hover:shadow-2xl text-left group`}
              >
                <div className="flex items-start gap-6">
                  {/* Character Emoji */}
                  <div className="text-7xl md:text-8xl group-hover:scale-110 transition-transform duration-300">
                    {character.emoji}
                  </div>

                  <div className="flex-1">
                    {/* Character Name */}
                    <h2 className={`text-3xl font-bold ${character.color} mb-2`}>
                      {character.name}
                    </h2>

                    {/* Trait Badge */}
                    <div
                      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${character.bgColor} border-2 border-current mb-3`}
                    >
                      {character.icon}
                      <span className="font-semibold">{character.trait}</span>
                    </div>

                    {/* Description */}
                    <p className="text-foreground/80">{character.description}</p>

                    {/* Click hint */}
                    <p className="text-sm text-muted-foreground mt-4 group-hover:text-foreground transition-colors">
                      Klikni za više informacija →
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Character Modal */}
          {selectedCharacter && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/50 backdrop-blur-sm"
              onClick={() => setSelectedCharacter(null)}
            >
              <div
                className={`relative max-w-2xl w-full ${selectedCharacter.bgColor} rounded-3xl p-8 shadow-2xl animate-scale-in`}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedCharacter(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 flex items-center justify-center hover:bg-background transition-colors"
                  aria-label="Zatvori"
                >
                  ✕
                </button>

                <div className="text-center mb-6">
                  <div className="text-8xl mb-4 animate-bounce-slow">{selectedCharacter.emoji}</div>
                  <h2 className={`text-4xl font-bold ${selectedCharacter.color}`}>
                    {selectedCharacter.name}
                  </h2>
                  <div
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${selectedCharacter.bgColor} border-2 ${selectedCharacter.color} mt-3`}
                  >
                    {selectedCharacter.icon}
                    <span className="font-semibold">{selectedCharacter.trait}</span>
                  </div>
                </div>

                <p className="text-lg text-foreground/80 text-center mb-8">
                  {selectedCharacter.fullDescription}
                </p>

                {/* Fun Facts */}
                <div className="bg-background/50 rounded-2xl p-6">
                  <h3 className={`text-xl font-bold ${selectedCharacter.color} mb-4`}>
                    Zanimljivosti:
                  </h3>
                  <ul className="space-y-3">
                    {selectedCharacter.funFacts.map((fact, index) => (
                      <li key={index} className="flex items-center gap-3 text-foreground/80">
                        <span className="text-xl">⭐</span>
                        {fact}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />

      <style jsx>{`
        @keyframes scale-in {
          0% {
            transform: scale(0.9);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
      `}</style>
    </main>
  )
}
