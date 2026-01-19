"use client"

interface BouncingTextProps {
  text: string
}

export function BouncingText({ text }: BouncingTextProps) {
  return (
    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#2E5A1C] flex flex-wrap justify-center gap-1">
      {text.split("").map((char, index) => (
        <span
          key={index}
          className="inline-block animate-bounce-letter hover:text-[#4CAF50] transition-colors"
          style={{
            animationDelay: `${index * 0.05}s`,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
      <style jsx>{`
        @keyframes bounce-letter {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        .animate-bounce-letter {
          animation: bounce-letter 1.5s ease-in-out infinite;
        }
      `}</style>
    </h1>
  )
}
