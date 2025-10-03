"use client"

import { useState, useEffect, useRef } from "react"
import { CheckCircle2 } from "lucide-react"

export default function OurFoundation() {
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

  const features = [
    "Experienced Professionals",
    "Customized Digital Solutions",
    "Reliable Timelines",
    "Transparent Processes"
  ]

  return (
    <section 
      ref={sectionRef}
      className="w-full bg-white py-16 md:py-20 lg:py-24"
    >
      <div className={`mx-auto w-full max-w-7xl px-6 sm:px-8 md:px-10 transition-all duration-1000 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      }`}>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left Side - Image */}
          <div className="relative h-[500px] overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-gray-700 shadow-xl lg:h-[600px]">
            {/* Placeholder for image - you can replace this with actual image later */}
            <div className="absolute inset-0 bg-black"
              style={{
              // Placeholder for background image - you can add it here later
              backgroundImage: 'url("/AboutUs/OurFoundation/MainPic.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
            ></div>
          </div>

          {/* Right Side - Content */}
          <div className="lg:pl-8">
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[#033231]">
              REAL FOUNDATION
            </p>
            
            <h2 className="text-4xl font-bold leading-tight text-[#033231] sm:text-5xl lg:text-6xl mb-6">
              What Drives Us
            </h2>
            
            <p className="text-base leading-relaxed text-gray-600 mb-8 md:text-lg">
              We started DuoFast to bring reliability back to the digital world. That means honest timelines, clear communication, and work that performs flawlessly — from the front end to the back-end. We&apos;re proud to partner with businesses and innovators who care about quality as much as we do.
            </p>

            {/* Features List */}
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6 text-[#033231]" />
                  </div>
                  <span className="text-base font-semibold text-[#033231]">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}