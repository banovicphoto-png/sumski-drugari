'use client';

import Link from "next/link"
import Image from "next/image"
import { Youtube, Music2, Heart, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo & About */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <Image
                src="/images/sumskidrugarilogo.png"
                alt="Šumski Drugari"
                width={60}
                height={60}
                className="rounded-xl"
              />
              <span className="text-xl font-bold">Šumski Drugari</span>
            </div>
            <p className="text-background/70 text-sm">
              Vesele dječije pjesmice sa šumskim prijateljima. Učimo, pjevamo i igramo se zajedno!
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="font-bold text-lg mb-4">Linkovi</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="/" className="text-background/70 hover:text-background transition-colors">
                  Početna
                </Link>
              </li>
              <li>
                <Link href="#pjesmice" className="text-background/70 hover:text-background transition-colors">
                  Pjesmice
                </Link>
              </li>
              <li>
                <Link href="#o-nama" className="text-background/70 hover:text-background transition-colors">
                  O nama
                </Link>
              </li>
              <li>
                <Link href="/igrice" className="text-background/70 hover:text-background transition-colors">
                  Igrice
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h3 className="font-bold text-lg mb-4">Prati nas</h3>
            <div className="flex items-center justify-center md:justify-end gap-4">
              <a
                href="https://www.youtube.com/@sumskidrugari"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center hover:bg-red-700 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-6 h-6" />
              </a>
              <a
                href="https://www.tiktok.com/@sumski.drugari"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-background text-foreground flex items-center justify-center hover:bg-background/90 transition-colors"
                aria-label="TikTok"
              >
                <Music2 className="w-6 h-6" />
              </a>
            </div>
            
            {/* Contact Email */}
            <div className="mt-4">
              <a
                href="mailto:sumskidrugari@gmail.com"
                className="inline-flex items-center gap-2 text-background/70 hover:text-background transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                sumskidrugari@gmail.com
              </a>
            </div>
            
            {/* Characters */}
            <div className="mt-4 flex items-center justify-center md:justify-end gap-2 text-2xl">
              <span className="animate-wave inline-block" style={{ animationDelay: "0s" }}>🐻</span>
              <span className="animate-wave inline-block" style={{ animationDelay: "0.1s" }}>🐰</span>
              <span className="animate-wave inline-block" style={{ animationDelay: "0.2s" }}>🦊</span>
              <span className="animate-wave inline-block" style={{ animationDelay: "0.3s" }}>🐦</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-background/60 text-sm text-center sm:text-left">
              © 2026 Šumski Drugari. Sva prava zadržana.
            </p>
            <p className="text-background/60 text-sm flex items-center gap-1">
              Napravljeno sa <Heart className="w-4 h-4 text-red-500" fill="currentColor" /> za male šumske prijatelje
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes wave {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          25% { transform: translateY(-5px) rotate(10deg); }
          75% { transform: translateY(-5px) rotate(-10deg); }
        }
        .animate-wave {
          animation: wave 1.5s ease-in-out infinite;
        }
      `}</style>
    </footer>
  )
}
