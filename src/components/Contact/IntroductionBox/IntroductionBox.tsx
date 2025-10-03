"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"

export default function IntroductionBox() {
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
        threshold: 0.1,
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
      className="relative w-full h-[550px] bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden"
      style={{
        // Placeholder for background image - you can add it here later
        clipPath: "ellipse(120% 99% at 50% 0%)",
        backgroundImage: 'url("/IntroductionBox/NasaGlobePic.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-[#033231]/70"></div>
      
      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center justify-center px-6 sm:px-8 md:px-10 text-center py-20">
        <div className={`transition-all duration-1000 ease-out ${
          isVisible 
            ? 'translate-y-0 opacity-100' 
            : 'translate-y-10 opacity-0'
        }`}>
          {/* Label */}
          {/* <p 
            className="mb-6 text-xs font-bold uppercase tracking-widest text-[#cbff54]"
            style={{
              background: "radial-gradient(circle, rgba(203, 255, 84, 0.2) 0%, rgba(3, 50, 49, 0) 70%)",
              padding: "0.5rem 1rem",
              borderRadius: "0.5rem"
            }}
          >
            About
          </p> */}
          
          {/* Main Heading */}
          <h1 className="text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl mb-6">
            Get in Touch with DuoFast
          </h1>
          
          {/* Description */}
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white/90 mb-10 md:text-xl">
            Reach out today to schedule a free consultation and explore how we can bring your digital 
            vision to life.   
          </p>
          
          {/* Buttons */}
          {/* <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 ease-out ${
            isVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-10 opacity-0'
          }`}
          style={{ 
            transitionDelay: isVisible ? '300ms' : '0ms' 
          }}>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#cbff54] px-8 py-3 text-sm font-bold uppercase tracking-wider text-[#033231] transition-all duration-200 hover:bg-[#b8e649] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#cbff54]/50"
            >
              ENQUIRE NOW
            </Link>
            
            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-full border-2 border-white bg-transparent px-8 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all duration-200 hover:bg-white hover:text-[#033231] focus:outline-none focus:ring-2 focus:ring-white/50"
            >
              VIEW OUR WORK
            </Link>
          </div> */}
        </div>
      </div>
    </section>
  )
}