"use client"

import { useState, useEffect, useRef } from "react"
import { ClipboardList, PenTool, Rocket } from "lucide-react"
import Link from "next/link"

export default function OurProcess() {
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

  const steps = [
    {
      icon: <ClipboardList className="h-12 w-12 text-[#cbff54]" />,
      title: "1. Plan & Discover",
      description: "We begin with a detailed consultation to understand your vision, goals, and budget— followed by a strategic analysis and early planning advice.",
      delay: "0ms"
    },
    {
      icon: <PenTool className="h-12 w-12 text-[#cbff54]" />,
      title: "2. Design & Prototype",
      description: "You'll receive a tailored design proposal, feature insights, and a clear, itemized project plan— no guesswork, just straightforward numbers.",
      delay: "200ms"
    },
    {
      icon: <Rocket className="h-12 w-12 text-[#cbff54]" />,
      title: "3. Develop & Deliver",
      description: "Our skilled team gets to work, keeping you informed at every stage. We wrap up with a final launch and a product you'll be proud to call yours.",
      delay: "400ms"
    }
  ]

  return (
    <section 
      ref={sectionRef}
      className="w-full bg-[#f6f7f7] -mt-[75px] py-16 md:py-20 lg:py-24"
    >
      <style jsx>{`
        @keyframes scaleIn {
          0% {
            opacity: 0;
            transform: scale(0.5) rotate(-5deg);
          }
          70% {
            transform: scale(1.05) rotate(2deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }
      `}</style>

      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 md:px-10">
        {/* Header */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-800 ease-out ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`}>
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#033231]">
            3-STEP PROCESS
          </p>
          <h2 className="text-4xl font-bold leading-tight text-[#033231] sm:text-5xl lg:text-6xl mb-6">
            Our Process, Made Simple
          </h2>
          <p className="mx-auto max-w-4xl text-base leading-relaxed text-gray-600 md:text-lg">
            We believe great digital solutions start with clear communication. That&apos;s why our process is built around transparency, trust, and timely execution—so you always know what to expect.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid gap-8 md:grid-cols-3 mb-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`bg-white rounded-3xl p-8 text-center shadow-lg ${
                isVisible ? 'animate-[scaleIn_0.8s_ease-out_forwards]' : 'opacity-0'
              }`}
              style={{ 
                animationDelay: isVisible ? step.delay : '0ms' 
              }}
            >
              <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-[#033231]">
                {step.icon}
              </div>
              
              <h3 className="mb-4 text-xl font-bold text-[#033231]">
                {step.title}
              </h3>
              
              <p className="text-sm leading-relaxed text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className={`text-center transition-all duration-800 ease-out ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`}
        style={{ 
          transitionDelay: isVisible ? '600ms' : '0ms' 
        }}>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[#cbff54] px-8 py-3 text-sm font-bold uppercase tracking-wider text-[#033231] transition-all duration-200 hover:bg-[#b8e649] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#cbff54]/50"
          >
            SCHEDULE A FREE CONSULTATION
          </Link>
        </div>
      </div>
    </section>
  )
}