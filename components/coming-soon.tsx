"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { FloatingLeaves } from "./floating-leaves"
import { AnimatedAnimals } from "./animated-animals"
import { BouncingText } from "./bouncing-text"
import { Sparkles } from "./sparkles"
import { FlyingButterflies } from "./flying-butterflies"
import { AnimatedClouds } from "./animated-clouds"

export function ComingSoon() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#87CEEB] via-[#98D8AA] to-[#4CAF50]">
      <AnimatedClouds />

      <Sparkles />

      <FlyingButterflies />

      {/* Floating leaves animation */}
      <FloatingLeaves />

      {/* Main content */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-8">
        {/* Logo with bounce animation */}
        <div
          className={`transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}
        >
          <div className="animate-bounce-slow hover:animate-none group cursor-pointer">
            <Image
              src="/images/sumskidrugarilogo.png"
              alt="Šumski Drugari Logo"
              width={380}
              height={380}
              className="drop-shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_30px_rgba(76,175,80,0.5)]"
              priority
            />
          </div>
        </div>

        {/* Coming soon text */}
        <div
          className={`mt-8 text-center transition-all duration-1000 delay-300 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <BouncingText text="Sajt je u izradi!" />
          <p className="mt-6 text-xl md:text-2xl text-[#2E5A1C] font-bold animate-wiggle">Uskoro dolazimo!</p>
          <p className="mt-2 text-lg text-[#4A7C2F] animate-pulse">Pripremamo nešto posebno za vas...</p>
        </div>

        {/* Animated animals at the bottom */}
        <AnimatedAnimals />

        {/* Grass decoration at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
          <div className="flex justify-around items-end h-full">
            {[...Array(25)].map((_, i) => (
              <div
                key={i}
                className="w-3 bg-gradient-to-t from-[#228B22] to-[#32CD32] rounded-t-full animate-sway"
                style={{
                  height: `${Math.random() * 60 + 40}px`,
                  animationDelay: `${i * 0.1}s`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-10 text-4xl animate-bounce-slow">🍄</div>
        <div className="absolute bottom-16 right-16 text-3xl animate-wiggle" style={{ animationDelay: "0.3s" }}>
          🍄
        </div>
        <div className="absolute bottom-6 left-1/4 text-2xl animate-spin-slow" style={{ animationDelay: "0.6s" }}>
          🌸
        </div>
        <div className="absolute bottom-14 right-1/4 text-2xl animate-bounce-slow" style={{ animationDelay: "0.9s" }}>
          🌼
        </div>
        <div className="absolute bottom-20 left-1/6 text-xl animate-wiggle" style={{ animationDelay: "1.2s" }}>
          🌻
        </div>
        <div className="absolute bottom-10 right-10 text-3xl animate-spin-slow" style={{ animationDelay: "1.5s" }}>
          🐝
        </div>
      </main>

      {/* Custom styles for animations */}
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

        @keyframes sway {
          0%,
          100% {
            transform: rotate(-5deg);
          }
          50% {
            transform: rotate(5deg);
          }
        }

        @keyframes wiggle {
          0%, 100% {
            transform: rotate(-3deg);
          }
          50% {
            transform: rotate(3deg);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }

        .animate-sway {
          animation: sway 2s ease-in-out infinite;
          transform-origin: bottom center;
        }

        .animate-wiggle {
          animation: wiggle 1s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  )
}
