"use client"

import { useState, useEffect, useRef } from "react"
import { Clock, ShieldCheck, Award } from "lucide-react"

export default function StandOutBox() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

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
    {
      icon: <Clock className="h-8 w-8 text-[#cbff54]" />,
      title: "On Time",
      description: "We respect your time with predictable project timelines and transparent communication from start to finish.",
      delay: "0ms"
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-[#cbff54]" />,
      title: "Quality Assurance",
      description: "We follow rigorous development processes and best practices to ensure every solution we deliver is robust and reliable.",
      delay: "200ms"
    },
    {
      icon: <Award className="h-8 w-8 text-[#cbff54]" />,
      title: "Proven Expertise",
      description: "Our team of skilled professionals delivers exceptional digital solutions backed by years of experience and a track record of success.",
      delay: "400ms"
    }
  ]

  return (
    <div 
      ref={sectionRef}
      className="mx-auto -mt-20 w-full max-w-7xl px-6 sm:px-8 md:px-10 relative z-20"
    >
      <div className="grid gap-6 md:grid-cols-3 bg-white rounded-3xl shadow-2xl p-8 md:p-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`text-center transition-all duration-700 ease-out ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 -translate-y-10'
            }`}
            style={{ 
              transitionDelay: isVisible ? feature.delay : '0ms' 
            }}
          >
            <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#033231]">
              {feature.icon}
            </div>
            
            <h3 className="mb-3 text-lg font-bold text-[#033231]">
              {feature.title}
            </h3>
            
            <p className="text-sm leading-relaxed text-gray-600">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}