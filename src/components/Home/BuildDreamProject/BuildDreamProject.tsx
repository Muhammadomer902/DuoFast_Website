"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"

export default function BuildDreamProject() {
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
        threshold: 0.4, // Trigger when 20% of the section is visible
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
      className="relative w-full bg-gradient-to-r from-slate-600 to-slate-500 py-12 md:py-16 overflow-hidden"
      style={{
        // Placeholder for background image - you can add it here later
        backgroundImage: 'url("/Home/BuildDreamProject/MainPic.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-8 md:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className={`flex-1 max-w-3xl transition-all duration-800 ease-out ${
            isVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-10 opacity-0'
          }`}>
            <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl mb-4">
              Your Vision, Our Expertise.
            </h1>
            
            <p className="text-base leading-relaxed text-white/90 md:text-lg">
              We&apos;re here to turn your ideas into a powerful online reality. 
              Let&apos;s connect and discuss how our solutions can help your business grow. 
            </p>
          </div>
          
          <div className={`flex-shrink-0 transition-all duration-800 ease-out ${
            isVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-10 opacity-0'
          }`}
          style={{ 
            transitionDelay: isVisible ? '300ms' : '0ms' 
          }}>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#cbff54] px-8 py-3 text-sm font-bold uppercase tracking-wider text-[#033231] transition-all duration-200 hover:bg-[#0a4a4a] hover:text-white hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#cbff54]/50"
            >
              ENQUIRE NOW
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}