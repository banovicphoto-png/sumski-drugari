"use client"

import { useEffect, useState } from "react"

interface Cloud {
  id: number
  top: number
  size: number
  duration: number
  delay: number
  opacity: number
}

export function AnimatedClouds() {
  const [clouds, setClouds] = useState<Cloud[]>([])

  useEffect(() => {
    const newClouds: Cloud[] = []
    for (let i = 0; i < 5; i++) {
      newClouds.push({
        id: i,
        top: 5 + Math.random() * 25,
        size: 80 + Math.random() * 60,
        duration: 20 + Math.random() * 15,
        delay: Math.random() * 10,
        opacity: 0.6 + Math.random() * 0.3,
      })
    }
    setClouds(newClouds)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {clouds.map((cloud) => (
        <div
          key={cloud.id}
          className="absolute animate-cloud"
          style={{
            top: `${cloud.top}%`,
            animationDuration: `${cloud.duration}s`,
            animationDelay: `${cloud.delay}s`,
          }}
        >
          <svg width={cloud.size} height={cloud.size * 0.5} viewBox="0 0 100 50" style={{ opacity: cloud.opacity }}>
            <ellipse cx="25" cy="35" rx="20" ry="15" fill="white" />
            <ellipse cx="45" cy="30" rx="25" ry="18" fill="white" />
            <ellipse cx="70" cy="35" rx="22" ry="15" fill="white" />
            <ellipse cx="35" cy="25" rx="18" ry="12" fill="white" />
            <ellipse cx="60" cy="22" rx="20" ry="14" fill="white" />
          </svg>
        </div>
      ))}
      <style jsx>{`
        @keyframes cloud-drift {
          0% {
            left: -150px;
          }
          100% {
            left: 100%;
          }
        }
        .animate-cloud {
          animation: cloud-drift linear infinite;
        }
      `}</style>
    </div>
  )
}
