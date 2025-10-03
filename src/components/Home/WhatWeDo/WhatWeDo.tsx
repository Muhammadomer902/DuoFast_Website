"use client"

import { useState, useEffect, useRef } from "react"
import { Globe, Smartphone, Bot } from "lucide-react"
import Link from "next/link"

export default function WhatWeDo() {
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
        threshold: 0.3,
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

  const services = [
    {
      icon: <Globe className="h-12 w-12 text-[#033231]" />,
      title: "Web Development",
      description: "We build responsive, high-performing websites optimized to work seamlessly on any device.",
      delay: "200ms",
      image: "/Home/WhatWeDo/WebDevelopmentPic.jpg"
    },
    {
      icon: <Smartphone className="h-12 w-12 text-[#033231]" />,
      title: "Mobile App Development",
      description: "We create intuitive and feature-rich mobile apps for both native and cross-platform experiences.",
      delay: "400ms",
      image: "/Home/WhatWeDo/MobileAppDevelopmentPic.jpg"
    },
    {
      icon: <Bot className="h-12 w-12 text-[#033231]" />,
      title: "Chatbots & Automations",
      description: "We develop intelligent chatbots and AI-driven systems to automate tasks and enhance customer service.",
      delay: "600ms",
      image: "/Home/WhatWeDo/ChatBot&AutomationPic.jpg"
    }
  ]

  return (
    <section 
      ref={sectionRef}
      className="w-full bg-[#f6f7f7] py-16 md:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 md:px-10">
        {/* Header */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-800 ease-out ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`}>
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#033231]">
            WHAT WE DO
          </p>
          <h2 className="text-4xl font-bold leading-tight text-[#033231] sm:text-5xl lg:text-6xl">
            Our Full-Spectrum
            <br />
            Digital Solutions 
          </h2>
        </div>

        {/* Service Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group transition-all duration-700 ease-out ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 -translate-y-20'
              }`}
              style={{ 
                transitionDelay: isVisible ? service.delay : '0ms' 
              }}
            >
              {/* Image Container - Placeholder for now */}
              <div className="relative h-64 overflow-hidden rounded-t-3xl bg-black">
                {/* Placeholder for image - you can replace this with actual images later */}
                {/* <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900"></div> */}
                <img
                  src= {service.image}
                  alt="Main"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>

              {/* Content Card */}
              <div className="relative -mt-16 mx-6 rounded-3xl bg-white p-8 shadow-lg transition-shadow duration-300 group-hover:shadow-xl text-center">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full">
                  {service.icon}
                </div>
                
                <h3 className="mb-3 text-xl font-bold text-[#033231]">
                  {service.title}
                </h3>
                
                <p className="mb-6 text-sm leading-relaxed text-gray-600">
                  {service.description}
                </p>
                
                <Link
                  href="/contact"
                  className="inline-block text-sm font-bold uppercase tracking-wider text-[#033231] underline decoration-2 underline-offset-4 transition-colors hover:text-[#033231]/80"
                >
                  ENQUIRE NOW
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}