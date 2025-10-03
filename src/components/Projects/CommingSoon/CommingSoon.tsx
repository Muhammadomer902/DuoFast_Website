"use client"

import { useState, useEffect, useRef } from "react"
import { CheckCircle2 } from "lucide-react"
import Link from "next/link"

export default function ComingSoon() {
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const boxRef = useRef<HTMLDivElement>(null)
  
  // Position and velocity state
  const [position, setPosition] = useState({ x: 50, y: 50 })
  const [velocity, setVelocity] = useState({ dx: 1, dy: 0.5 })
  
  // Animation frame reference
  const animationRef = useRef<number>(0)

  // IntersectionObserver for visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [])

  // Animation loop
  useEffect(() => {
    if (!isVisible) return

    const animate = () => {
      if (!containerRef.current || !boxRef.current) return

      const container = containerRef.current
      const box = boxRef.current
      
      // Get dimensions
      const containerWidth = container.clientWidth - 3.5
      const containerHeight = container.clientHeight
      const boxWidth = box.clientWidth
      const boxHeight = box.clientHeight

      // Calculate new position
      let newX = position.x + velocity.dx
      let newY = position.y + velocity.dy
      let newDx = velocity.dx
      let newDy = velocity.dy

      // Check boundaries and bounce
      // Right boundary
      if (newX + boxWidth >= containerWidth) {
        newX = containerWidth - boxWidth
        newDx = -Math.abs(velocity.dx) // Bounce left
      }
      // Left boundary
      else if (newX <= 0) {
        newX = 0
        newDx = Math.abs(velocity.dx) // Bounce right
      }

      // Bottom boundary
      if (newY + boxHeight >= containerHeight) {
        newY = containerHeight - boxHeight
        newDy = -Math.abs(velocity.dy) // Bounce up
      }
      // Top boundary
      else if (newY <= 0) {
        newY = 0
        newDy = Math.abs(velocity.dy) // Bounce down
      }

      // Update position and velocity
      setPosition({ x: newX, y: newY })
      setVelocity({ dx: newDx, dy: newDy })

      // Continue animation
      animationRef.current = requestAnimationFrame(animate)
    }

    // Start animation
    animationRef.current = requestAnimationFrame(animate)

    // Clean up
    return () => {
      cancelAnimationFrame(animationRef.current)
    }
  }, [isVisible, position, velocity])

  return (
    <div 
      ref={containerRef} 
      className="relative h-[400px] bg-gradient-to-br from-yellow-600 to-yellow-300 rounded-2xl overflow-hidden border border-gray-200 my-20 mx-25"
    >
      <div
        ref={boxRef}
        className="absolute bg-white rounded-2xl shadow-lg flex flex-col items-center justify-center p-6 border-2 border-gradient-to-br from-gray-900 to-gray-800"
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
          transition: 'transform 0.1s',
          transform: `scale(${isVisible ? 1 : 0.8})`,
          opacity: isVisible ? 1 : 0
        }}
      >
        <div className="flex items-center gap-2 mb-2">
          <CheckCircle2 className="text-black-500" size={24} />
          <h2 className="text-2xl font-bold text-gray-800">Coming Soon</h2>
        </div>
        <p className="text-gray-600 text-center">Exciting new features on the way!</p>
        <Link 
          href="/" 
          className="mt-4 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}