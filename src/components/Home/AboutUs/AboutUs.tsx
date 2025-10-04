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
      className="w-full bg-white py-12 sm:py-16 lg:py-20 overflow-hidden"
    >
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 md:px-10">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
          {/* Left Side - Images */}
          <div className={`relative pr-8 sm:pr-12 pb-8 sm:pb-12 transition-all duration-1000 ease-out ${
            isVisible 
              ? 'translate-x-0 opacity-100' 
              : '-translate-x-20 opacity-0'
          }`}>
            {/* Main Image */}
            <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg">
              <Image
                src="/Home/AboutUs/MainPic.jpg"
                alt="DuoFast team working on digital solutions"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 500px"
              />
            </div>

            {/* Overlapping Second Image */}
            <div className="absolute bottom-0 right-0 h-24 w-24 sm:h-32 sm:w-32 lg:h-40 lg:w-40 overflow-hidden rounded-2xl bg-gradient-to-br from-yellow-600 to-yellow-400 shadow-lg">
              <Image
                src="/Home/AboutUs/SecondaryPic.jpg"
                alt="Digital innovation showcase"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 96px, (max-width: 1024px) 128px, 160px"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className={`lg:pl-6 transition-all duration-1000 ease-out ${
            isVisible 
              ? 'translate-x-0 opacity-100' 
              : 'translate-x-20 opacity-0'
          }`}
          style={{ 
            transitionDelay: isVisible ? '200ms' : '0ms' 
          }}>
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#033231]">
              ABOUT US
            </p>
            
            <h2 className="text-3xl font-bold leading-tight text-[#033231] sm:text-4xl lg:text-5xl mb-5">
              Your Global Partner in Digital Innovation.
            </h2>
            
            <p className="text-base leading-relaxed text-gray-600 mb-6">
              At DuoFast, we are passionate about crafting cutting-edge digital solutions that empower businesses worldwide. Our expertise spans a wide range of services, designed to transform your ideas into powerful, market-ready realities. We build with integrity, creativity, and a steadfast commitment to your vision and success.
            </p>

            {/* Features List */}
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <div className="mt-1 flex-shrink-0">
                  <CheckCircle2 className="h-5 w-5 text-[#cbff54]" />
                </div>
                <span className="text-base font-semibold text-[#033231]">
                  Experienced Team
                </span>
              </li>
              
              <li className="flex items-start gap-2">
                <div className="mt-1 flex-shrink-0">
                  <CheckCircle2 className="h-5 w-5 text-[#cbff54]" />
                </div>
                <span className="text-base font-semibold text-[#033231]">
                  Innovation-Driven
                </span>
              </li>
              
              <li className="flex items-start gap-2">
                <div className="mt-1 flex-shrink-0">
                  <CheckCircle2 className="h-5 w-5 text-[#cbff54]" />
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