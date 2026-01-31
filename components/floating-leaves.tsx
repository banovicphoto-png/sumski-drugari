"use client"

import { useEffect, useState } from "react"

interface Leaf {
  id: number
  left: number
  delay: number
  duration: number
  size: number
  emoji: string
}

export function FloatingLeaves() {
  const [leaves, setLeaves] = useState<Leaf[]>([])

  useEffect(() => {
    const leafEmojis = ["🍃", "🌿", "🍂", "🌱", "🪻"]
    const newLeaves: Leaf[] = []

    for (let i = 0; i < 15; i++) {
      newLeaves.push({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 8 + Math.random() * 7,
        size: 20 + Math.random() * 20,
        emoji: leafEmojis[Math.floor(Math.random() * leafEmojis.length)],
      })
    }

    setLeaves(newLeaves)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className="absolute animate-falling-leaf"
          style={{
            left: `${leaf.left}%`,
            fontSize: `${leaf.size}px`,
            animationDelay: `${leaf.delay}s`,
            animationDuration: `${leaf.duration}s`,
          }}
        >
          {leaf.emoji}
        </div>
      ))}
      <style jsx>{`
        @keyframes falling-leaf {
          0% {
            transform: translateY(-100px) rotate(0deg) translateX(0);
            opacity: 1;
          }
          25% {
            transform: translateY(25vh) rotate(90deg) translateX(30px);
          }
          50% {
            transform: translateY(50vh) rotate(180deg) translateX(-30px);
          }
          75% {
            transform: translateY(75vh) rotate(270deg) translateX(30px);
          }
          100% {
            transform: translateY(100vh) rotate(360deg) translateX(0);
            opacity: 0;
          }
        }

        .animate-falling-leaf {
          animation: falling-leaf linear infinite;
        }
      `}</style>
    </div>
  )
}
