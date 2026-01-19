"use client"

import { useEffect, useState } from "react"

interface Butterfly {
  id: number
  startX: number
  startY: number
  color: string
  delay: number
  duration: number
  size: number
}

export function FlyingButterflies() {
  const [butterflies, setButterflies] = useState<Butterfly[]>([])

  useEffect(() => {
    const colors = ["#FF69B4", "#FFB6C1", "#DDA0DD", "#87CEEB", "#FFA500"]
    const newButterflies: Butterfly[] = []

    for (let i = 0; i < 6; i++) {
      newButterflies.push({
        id: i,
        startX: Math.random() * 100,
        startY: 20 + Math.random() * 60,
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 5,
        duration: 8 + Math.random() * 6,
        size: 24 + Math.random() * 16,
      })
    }
    setButterflies(newButterflies)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {butterflies.map((butterfly) => (
        <div
          key={butterfly.id}
          className="absolute animate-butterfly"
          style={{
            left: `${butterfly.startX}%`,
            top: `${butterfly.startY}%`,
            animationDelay: `${butterfly.delay}s`,
            animationDuration: `${butterfly.duration}s`,
          }}
        >
          <svg width={butterfly.size} height={butterfly.size} viewBox="0 0 32 32" className="animate-flutter">
            {/* Left wing */}
            <ellipse cx="10" cy="14" rx="9" ry="12" fill={butterfly.color} opacity="0.8" />
            {/* Right wing */}
            <ellipse cx="22" cy="14" rx="9" ry="12" fill={butterfly.color} opacity="0.8" />
            {/* Body */}
            <ellipse cx="16" cy="16" rx="2" ry="10" fill="#4A3728" />
            {/* Antennae */}
            <path d="M15 6 Q12 2 10 3 M17 6 Q20 2 22 3" stroke="#4A3728" strokeWidth="1" fill="none" />
          </svg>
        </div>
      ))}
      <style jsx>{`
        @keyframes butterfly-path {
          0% {
            transform: translateX(0) translateY(0);
          }
          25% {
            transform: translateX(100px) translateY(-30px);
          }
          50% {
            transform: translateX(200px) translateY(20px);
          }
          75% {
            transform: translateX(100px) translateY(-20px);
          }
          100% {
            transform: translateX(0) translateY(0);
          }
        }
        @keyframes flutter {
          0%, 100% {
            transform: scaleX(1);
          }
          50% {
            transform: scaleX(0.6);
          }
        }
        .animate-butterfly {
          animation: butterfly-path ease-in-out infinite;
        }
        .animate-flutter {
          animation: flutter 0.15s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
