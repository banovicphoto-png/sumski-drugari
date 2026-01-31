"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Youtube, Music } from "lucide-react"
import { FloatingLeaves } from "./floating-leaves"
import { Sparkles } from "./sparkles"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-green-50 via-background to-yellow-50/30">
      {/* Background Decorations */}
      <FloatingLeaves />
      <Sparkles />
      
      {/* Animated Background Trees */}
      <div className="absolute bottom-0 left-0 w-32 h-48 md:w-48 md:h-64">
        <div className="absolute bottom-0 w-full h-full bg-primary/20 rounded-t-full animate-sway" />
      </div>
      <div className="absolute bottom-0 right-0 w-32 h-48 md:w-48 md:h-64">
        <div className="absolute bottom-0 w-full h-full bg-primary/20 rounded-t-full animate-sway-reverse" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 py-20 text-center">
        {/* Animated Logo */}
        <div className="relative inline-block mb-8 animate-float">
          <Image
            src="/images/sumskidrugarilogo.png"
            alt="Šumski Drugari"
            width={320}
            height={320}
            className="w-64 h-64 md:w-80 md:h-80 drop-shadow-2xl hover:scale-105 transition-transform duration-500"
            priority
          />
          <div className="absolute -inset-4 bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse" />
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 text-balance">
          Dobrodošli u{" "}
          <span className="text-primary relative">
            šumu
            <svg
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 200 12"
              fill="none"
            >
              <path
                d="M2 10C50 2 150 2 198 10"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                className="text-accent"
              />
            </svg>
          </span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
          Vesele dječije pjesmice sa šumskim prijateljima! Zapjevaj s nama i upoznaj 
          Medu, Zeku, Lisicu i Ptičicu u šumskim avanturama punim smijeha i učenja.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-white rounded-full px-8 py-6 text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <a
              href="https://www.youtube.com/@sumskidrugari"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Youtube className="w-6 h-6" />
              Gledaj na YouTube
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full px-8 py-6 text-lg font-bold transition-all duration-300 hover:scale-105 bg-transparent"
          >
            <a href="#pjesmice" className="flex items-center gap-2">
              <Music className="w-6 h-6" />
              Naše pjesmice
            </a>
          </Button>
        </div>


      </div>

      {/* Bottom Grass Decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-primary/30 to-transparent" />
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes sway {
          0%, 100% { transform: rotate(-3deg); }
          50% { transform: rotate(3deg); }
        }
        @keyframes sway-reverse {
          0%, 100% { transform: rotate(3deg); }
          50% { transform: rotate(-3deg); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-sway {
          animation: sway 4s ease-in-out infinite;
          transform-origin: bottom center;
        }
        .animate-sway-reverse {
          animation: sway-reverse 4s ease-in-out infinite;
          transform-origin: bottom center;
        }
      `}</style>
    </section>
  )
}
