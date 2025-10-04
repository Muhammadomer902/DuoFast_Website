"use client"

import { useState, useEffect, useRef } from "react"
import { CheckCircle2 } from "lucide-react"
import Image from "next/image"

export default function AboutUs() {
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

  return (
    <section 
      ref={sectionRef}
      className="w-full bg-white py-16 md:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 md:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left Side - Images */}
          <div className={`relative transition-all duration-1000 ease-out ${
            isVisible 
              ? 'translate-x-0 opacity-100' 
              : '-translate-x-20 opacity-0'
          }`}>
            {/* Main Image */}
            <div className="relative h-[600px] overflow-hidden rounded-3xl bg-gradient-to-br from-gray-800 to-gray-900 shadow-xl">
              {/* Placeholder for main image */}
                <Image
                  src="/Home/AboutUs/MainPic.jpg"
                  alt="Main"
                  className="absolute inset-0 h-full w-full object-cover"
                />
            </div>

            {/* Overlapping Second Image */}
            <div className="absolute -bottom-6 -right-8 h-48 w-48 overflow-hidden rounded-3xl bg-gradient-to-br from-yellow-600 to-yellow-400 shadow-xl lg:h-56 lg:w-56">
              {/* Placeholder for second image */}
                <Image
                  src="/Home/AboutUs/SecondaryPic.jpg"
                  alt="Main"
                  className="absolute inset-0 h-full w-full object-cover"
                />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className={`lg:pl-8 transition-all duration-1000 ease-out ${
            isVisible 
              ? 'translate-x-0 opacity-100' 
              : 'translate-x-20 opacity-0'
          }`}
          style={{ 
            transitionDelay: isVisible ? '200ms' : '0ms' 
          }}>
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[#033231]">
              ABOUT US
            </p>
            
            <h2 className="text-4xl font-bold leading-tight text-[#033231] sm:text-5xl lg:text-6xl mb-6">
              Your Global Partner in Digital Innovation.
            </h2>
            
            <p className="text-base leading-relaxed text-gray-600 mb-8 md:text-lg">
              At DuoFast, we are passionate about crafting cutting-edge digital solutions that empower businesses worldwide. Our expertise spans a wide range of services, designed to transform your ideas into powerful, market-ready realities. We build with integrity, creativity, and a steadfast commitment to your vision and success.
            </p>

            {/* Features List */}
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0">
                  <CheckCircle2 className="h-6 w-6 text-[#cbff54]" />
                </div>
                <span className="text-base font-semibold text-[#033231]">
                  Experienced Team
                </span>
              </li>
              
              <li className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0">
                  <CheckCircle2 className="h-6 w-6 text-[#cbff54]" />
                </div>
                <span className="text-base font-semibold text-[#033231]">
                  Innovation-Driven
                </span>
              </li>
              
              <li className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0">
                  <CheckCircle2 className="h-6 w-6 text-[#cbff54]" />
                </div>
                <span className="text-base font-semibold text-[#033231]">
                  Client-Centric Approach
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}