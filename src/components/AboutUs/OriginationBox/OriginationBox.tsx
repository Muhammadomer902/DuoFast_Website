"use client"

import { useState, useEffect, useRef } from "react"

export default function OriginationBox() {
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
        threshold: 0.2,
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

  return (
    <section 
      ref={sectionRef}
      className="w-full bg-white py-16 md:py-20 lg:py-24 overflow-hidden"
    >
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 md:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Left Side - Main Heading */}
          <div className={`transition-all duration-1000 ease-out ${
            isVisible 
              ? 'translate-x-0 opacity-100' 
              : '-translate-x-20 opacity-0'
          }`}>
            <h2 className="text-4xl font-bold leading-tight text-[#033231] sm:text-4xl lg:text-5xl">
              Built on a Foundation of Passion. Trusted by Clients Worldwide.
            </h2>
          </div>

          {/* Right Side - Description */}
          <div className={`transition-all duration-1000 ease-out ${
            isVisible 
              ? 'translate-x-0 opacity-100' 
              : 'translate-x-20 opacity-0'
          }`}
          style={{ 
            transitionDelay: isVisible ? '200ms' : '0ms' 
          }}>
            <p className="text-base leading-relaxed text-gray-600 md:text-lg">
              At DuoFast, we believe that great digital products are the result of true passion and a collaborative partnership. We go beyond just building technology; we work alongside our clients to understand their unique challenges and ambitions. With a diverse and dedicated team, we craft innovative solutions that not only meet your needs but also establish a lasting digital legacy.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}