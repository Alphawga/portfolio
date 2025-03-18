"use client"

import { useEffect, useRef } from "react"

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let particles: Particle[] = []

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()

    // Particle class
    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string

      constructor() {
        this.x = Math.random() * (canvas?.width ?? 0)
        this.y = Math.random() * (canvas?.height ?? 0)  
        this.size = Math.random() * 3 + 1
        this.speedX = (Math.random() - 0.5) * 0.5
        this.speedY = (Math.random() - 0.5) * 0.5
        this.color = "#A5C8D6"
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > (canvas?.width ?? 0)) this.x = 0
        else if (this.x < 0) this.x = (canvas?.width ?? 0)
        if (this.y > (canvas?.height ?? 0)) this.y = 0
        else if (this.y < 0) this.y = (canvas?.height ?? 0)
      }

      draw() {
        if (!ctx) return
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Initialize particles
    function initParticles() {
      particles = []
      const numberOfParticles = (canvas?.width ?? 0) * (canvas?.height ?? 0) / 15000
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle())
      }
    }

    // Animation loop
    function animate() {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas?.width ?? 0, canvas?.height ?? 0)

      for (let i = 0; i < particles.length; i++) {
        particles[i].update()
        particles[i].draw()

        // Connect particles with lines
        connectParticles(particles[i], particles)
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    // Connect particles with lines if they are close enough
    function connectParticles(p1: Particle, particles: Particle[]) {
      if (!ctx) return
      for (let i = 0; i < particles.length; i++) {
        const p2 = particles[i]
        const distance = Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2))

        if (distance < 100) {
          ctx.beginPath()
          ctx.strokeStyle = `rgba(165, 200, 214, ${1 - distance / 100})`
          ctx.lineWidth = 0.5
          ctx.moveTo(p1.x, p1.y)
          ctx.lineTo(p2.x, p2.y)
          ctx.stroke()
        }
      }
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10 opacity-30" />
}

