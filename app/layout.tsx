import type React from "react"
import type { Metadata } from "next"
import { Nunito } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _nunito = Nunito({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Šumski Drugari - Vesele dječije pjesmice",
  description: "Šumski Drugari - vesele dječije pjesmice sa šumskim prijateljima. Pjevaj s nama uz Medu, Zeku, Lisicu i Ptičicu!",
  generator: "v0.app",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="sr">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
