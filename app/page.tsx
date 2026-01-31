import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { CharactersSection } from "@/components/characters-section"
import { VideosSection } from "@/components/videos-section"
import { TikTokSection } from "@/components/tiktok-section"
import { GamesTeaser } from "@/components/games-teaser"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <CharactersSection />
      <VideosSection />
      <TikTokSection />
      <GamesTeaser />
      <Footer />
    </main>
  )
}
