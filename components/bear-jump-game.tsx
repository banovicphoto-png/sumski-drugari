"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { Button } from "@/components/ui/button"
import { RotateCcw, Play } from "lucide-react"

const GAME_HEIGHT = 200
const GAME_WIDTH = 400
const BEAR_SIZE = 50
const OBSTACLE_WIDTH = 30
const OBSTACLE_HEIGHT = 50
const GROUND_HEIGHT = 30
const GRAVITY = 0.8
const JUMP_FORCE = -14
const OBSTACLE_SPEED = 5

export function BearJumpGame() {
  const [gameState, setGameState] = useState<"idle" | "playing" | "gameover">("idle")
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const [bearY, setBearY] = useState(GAME_HEIGHT - GROUND_HEIGHT - BEAR_SIZE)
  const [bearVelocity, setBearVelocity] = useState(0)
  const [obstacles, setObstacles] = useState<{ x: number; passed: boolean }[]>([])
  
  const gameLoopRef = useRef<number | null>(null)
  const lastObstacleRef = useRef(0)

  const jump = useCallback(() => {
    if (gameState === "idle") {
      setGameState("playing")
      setScore(0)
      setObstacles([])
      setBearY(GAME_HEIGHT - GROUND_HEIGHT - BEAR_SIZE)
      setBearVelocity(JUMP_FORCE)
      lastObstacleRef.current = 0
    } else if (gameState === "playing") {
      const groundY = GAME_HEIGHT - GROUND_HEIGHT - BEAR_SIZE
      if (bearY >= groundY - 5) {
        setBearVelocity(JUMP_FORCE)
      }
    }
  }, [gameState, bearY])

  const resetGame = () => {
    setGameState("idle")
    setScore(0)
    setBearY(GAME_HEIGHT - GROUND_HEIGHT - BEAR_SIZE)
    setBearVelocity(0)
    setObstacles([])
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Space" || e.key === " ") {
        e.preventDefault()
        jump()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [jump])

  useEffect(() => {
    if (gameState !== "playing") return

    const gameLoop = () => {
      setBearVelocity((vel) => vel + GRAVITY)
      setBearY((y) => {
        const newY = y + bearVelocity
        const groundY = GAME_HEIGHT - GROUND_HEIGHT - BEAR_SIZE
        if (newY >= groundY) {
          setBearVelocity(0)
          return groundY
        }
        return newY
      })

      setObstacles((prev) => {
        let newObstacles = prev
          .map((obs) => ({ ...obs, x: obs.x - OBSTACLE_SPEED }))
          .filter((obs) => obs.x > -OBSTACLE_WIDTH)

        lastObstacleRef.current += 1
        if (lastObstacleRef.current > 80 + Math.random() * 40) {
          newObstacles = [...newObstacles, { x: GAME_WIDTH, passed: false }]
          lastObstacleRef.current = 0
        }

        return newObstacles
      })

      gameLoopRef.current = requestAnimationFrame(gameLoop)
    }

    gameLoopRef.current = requestAnimationFrame(gameLoop)
    return () => {
      if (gameLoopRef.current) cancelAnimationFrame(gameLoopRef.current)
    }
  }, [gameState, bearVelocity])

  useEffect(() => {
    if (gameState !== "playing") return

    const bearLeft = 50
    const bearRight = bearLeft + BEAR_SIZE - 10
    const bearTop = bearY + 10
    const bearBottom = bearY + BEAR_SIZE
    const groundY = GAME_HEIGHT - GROUND_HEIGHT

    for (const obs of obstacles) {
      const obsLeft = obs.x
      const obsRight = obs.x + OBSTACLE_WIDTH
      const obsTop = groundY - OBSTACLE_HEIGHT
      const obsBottom = groundY

      if (
        bearRight > obsLeft &&
        bearLeft < obsRight &&
        bearBottom > obsTop &&
        bearTop < obsBottom
      ) {
        setGameState("gameover")
        if (score > highScore) {
          setHighScore(score)
        }
        return
      }

      if (!obs.passed && obs.x + OBSTACLE_WIDTH < bearLeft) {
        obs.passed = true
        setScore((s) => s + 1)
      }
    }
  }, [bearY, obstacles, gameState, score, highScore])

  return (
    <div className="bg-card rounded-3xl border-2 border-primary/20 p-6 shadow-xl">
      <div className="text-center mb-4">
        <h3 className="text-xl font-bold text-foreground mb-1">Medo Skakac</h3>
        <p className="text-sm text-muted-foreground">
          Klikni ili pritisni SPACE da skocis preko prepreka!
        </p>
      </div>

      <div className="flex justify-center gap-4 mb-4">
        <div className="px-4 py-2 bg-accent/20 rounded-full">
          <span className="text-sm font-bold text-accent">Rezultat: {score}</span>
        </div>
        <div className="px-4 py-2 bg-primary/20 rounded-full">
          <span className="text-sm font-bold text-primary">Rekord: {highScore}</span>
        </div>
      </div>

      <div
        className="relative mx-auto overflow-hidden rounded-2xl cursor-pointer select-none"
        style={{
          width: GAME_WIDTH,
          maxWidth: "100%",
          height: GAME_HEIGHT,
          background: "linear-gradient(to bottom, #87CEEB 0%, #87CEEB 70%, #8B4513 70%, #8B4513 100%)",
        }}
        onClick={jump}
        onKeyDown={(e) => e.key === " " && jump()}
        tabIndex={0}
        role="button"
        aria-label="Klikni da skocis"
      >
        {/* Clouds */}
        <div className="absolute top-4 left-8 w-12 h-6 bg-white rounded-full opacity-80" />
        <div className="absolute top-8 left-20 w-8 h-4 bg-white rounded-full opacity-60" />
        <div className="absolute top-6 right-12 w-10 h-5 bg-white rounded-full opacity-70" />

        {/* Grass */}
        <div 
          className="absolute left-0 right-0 bg-green-500"
          style={{ 
            top: GAME_HEIGHT - GROUND_HEIGHT - 10, 
            height: 10 
          }}
        />

        {/* Trees in background */}
        <div className="absolute text-3xl" style={{ top: GAME_HEIGHT - GROUND_HEIGHT - 50, left: "70%" }}>
          🌲
        </div>
        <div className="absolute text-2xl" style={{ top: GAME_HEIGHT - GROUND_HEIGHT - 40, left: "85%" }}>
          🌳
        </div>

        {/* Bear */}
        <div
          className="absolute transition-transform"
          style={{
            left: 50,
            top: bearY,
            width: BEAR_SIZE,
            height: BEAR_SIZE,
            fontSize: BEAR_SIZE - 10,
            transform: bearVelocity < 0 ? "rotate(-10deg)" : "rotate(0deg)",
          }}
        >
          🐻
        </div>

        {/* Obstacles (mushrooms/rocks) */}
        {obstacles.map((obs, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: obs.x,
              top: GAME_HEIGHT - GROUND_HEIGHT - OBSTACLE_HEIGHT,
              width: OBSTACLE_WIDTH,
              height: OBSTACLE_HEIGHT,
              fontSize: OBSTACLE_HEIGHT - 10,
            }}
          >
            🪨
          </div>
        ))}

        {/* Idle state overlay */}
        {gameState === "idle" && (
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
            <Play className="w-12 h-12 text-white mb-2" />
            <p className="text-white font-bold text-lg">Klikni za start!</p>
          </div>
        )}

        {/* Game over overlay */}
        {gameState === "gameover" && (
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center">
            <p className="text-white font-bold text-2xl mb-2">Kraj igre!</p>
            <p className="text-white text-lg mb-4">Rezultat: {score}</p>
          </div>
        )}
      </div>

      {gameState === "gameover" && (
        <div className="flex justify-center mt-4">
          <Button onClick={resetGame} className="gap-2">
            <RotateCcw className="w-4 h-4" />
            Igraj ponovo
          </Button>
        </div>
      )}

      <p className="text-center text-xs text-muted-foreground mt-4">
        Pomozi Medi da preskoci sve prepreke u sumi!
      </p>
    </div>
  )
}
