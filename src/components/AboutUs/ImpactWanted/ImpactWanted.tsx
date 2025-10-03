"use client"

import { useState, useEffect, useRef } from "react"
import { Target, Compass, Heart } from "lucide-react"

export default function ImpactWanted() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.25,
        rootMargin: "0px 0px -50px 0px"
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const impacts = [
    {
      icon: <Target className="h-10 w-10 text-[#cbff54]" />,
      title: "Our Vision",
      description: "We aim to create impactful digital experiences that empower businesses, inspire innovation, and foster meaningful connections worldwide.",
      delay: "200ms"
    },
    {
      icon: <Compass className="h-10 w-10 text-[#cbff54]" />,
      title: "Our Mission",
      description: "We make digital transformation seamless and reliable through expert development, clear communication, and client-first service that delivers tangible results.",
      delay: "400ms"
    },
    {
      icon: <Heart className="h-10 w-10 text-[#cbff54]" />,
      title: "Our Values",
      description: "We build with integrity, treat every project with passion, and prioritize quality over shortcuts. We're committed to doing it right, every single time.",
      delay: "600ms"
    }
  ]

  return (
    <section 
      ref={sectionRef}
      className="w-full bg-[#f6f7f7] py-16 md:py-20 lg:py-24"
    >
      <style jsx>{`
        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: translateY(-100px);
          }
          60% {
            opacity: 1;
            transform: translateY(20px);
          }
          80% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0);
          }
        }
      `}</style>

      <div className={`mx-auto w-full max-w-7xl px-6 sm:px-8 md:px-10 transition-all duration-800 ease-out ${
        isVisible 
          ? 'opacity-100' 
          : 'opacity-0'
      }`}>
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#033231]">
            IMPACTFUL
          </p>
          <h2 className="text-4xl font-bold leading-tight text-[#033231] sm:text-5xl lg:text-6xl">
            Vision, Mission & Values
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {impacts.map((impact, index) => (
            <div
              key={index}
              className={`bg-white rounded-3xl p-8 text-center shadow-lg ${
                isVisible ? 'animate-[bounceIn_1s_ease-out_forwards]' : 'opacity-0'
              }`}
              style={{ 
                animationDelay: isVisible ? impact.delay : '0ms' 
              }}
            >
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#033231]">
                {impact.icon}
              </div>
              
              <h3 className="mb-4 text-xl font-bold text-[#033231]">
                {impact.title}
              </h3>
              
              <p className="text-sm leading-relaxed text-gray-600">
                {impact.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}