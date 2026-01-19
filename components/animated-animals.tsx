"use client"

import { useState } from "react"

export function AnimatedAnimals() {
  const [hoveredAnimal, setHoveredAnimal] = useState<string | null>(null)

  const animals = [
    { emoji: "🐻", name: "Medo", message: "Zdravo prijatelju!" },
    { emoji: "🐰", name: "Zeko", message: "Hop hop!" },
    { emoji: "🦊", name: "Lisica", message: "Uskoro se vidimo!" },
    { emoji: "🐦", name: "Ptičica", message: "Čivit čivit!" },
  ]

  return (
    <div className="mt-12 flex flex-wrap justify-center gap-6 md:gap-10">
      {animals.map((animal, index) => (
        <div
          key={animal.name}
          className="relative group cursor-pointer"
          onMouseEnter={() => setHoveredAnimal(animal.name)}
          onMouseLeave={() => setHoveredAnimal(null)}
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          <div
            className="text-5xl md:text-6xl transform transition-all duration-300 hover:scale-125 animate-bounce-slow"
            style={{ animationDelay: `${index * 0.3}s` }}
          >
            {animal.emoji}
          </div>

          {/* Speech bubble */}
          <div
            className={`absolute -top-16 left-1/2 -translate-x-1/2 bg-white/95 text-[#2E5A1C] px-4 py-2 rounded-2xl shadow-lg text-sm font-bold whitespace-nowrap transition-all duration-300 ${hoveredAnimal === animal.name ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
          >
            {animal.message}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white/95 rotate-45" />
          </div>

          <p className="text-center mt-2 text-[#2E5A1C] font-bold text-sm">{animal.name}</p>
        </div>
      ))}

      <style jsx global>{`
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
