"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter, usePathname } from "next/navigation"

const navItems = [
  { name: "Početna", href: "/", hash: null },
  { name: "Pjesmice", href: "/", hash: "pjesmice" },
  { name: "Likovi", href: "/likovi", hash: null },
  { name: "Igrice", href: "/igrice", hash: null },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  const handleNavClick = (href: string, hash: string | null) => {
    setIsOpen(false)
    
    if (hash) {
      if (pathname === "/") {
        const element = document.getElementById(hash)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      } else {
        router.push(`/${hash ? `#${hash}` : ""}`)
      }
    } else {
      router.push(href)
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/images/sumskidrugarilogo.png"
              alt="Šumski Drugari"
              width={50}
              height={50}
              className="transition-transform duration-300 group-hover:scale-110"
            />
            <span className="font-bold text-xl text-primary hidden sm:block">
              Šumski Drugari
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                type="button"
                key={item.name}
                onClick={() => handleNavClick(item.href, item.hash)}
                className="text-foreground/80 hover:text-primary font-semibold transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
              >
                {item.name}
              </button>
            ))}
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6">
              <a href="https://www.youtube.com/@sumskidrugari" target="_blank" rel="noopener noreferrer">
                YouTube
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-primary/20">
          <div className="px-4 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                type="button"
                key={item.name}
                onClick={() => handleNavClick(item.href, item.hash)}
                className="text-foreground/80 hover:text-primary font-semibold transition-colors duration-200 py-2 text-left"
              >
                {item.name}
              </button>
            ))}
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full w-full">
              <a href="https://www.youtube.com/@sumskidrugari" target="_blank" rel="noopener noreferrer">
                YouTube
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
