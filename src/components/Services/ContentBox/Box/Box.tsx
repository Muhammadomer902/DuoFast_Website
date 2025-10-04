"use client"

import { useState, useEffect, useRef } from "react"
import { CheckCircle2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface BoxProps {
  title: string
  description: string
  benefits: string[]
  imagePosition: "left" | "right"
  imageUrl: string
  delay: number
}

export default function Box({ title, description, benefits, imagePosition, imageUrl, delay }: BoxProps) {
  const [isVisible, setIsVisible] = useState(false)
  const boxRef = useRef<HTMLDivElement>(null)

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

    if (boxRef.current) {
      observer.observe(boxRef.current)
    }

    return () => {
      if (boxRef.current) {
        observer.unobserve(boxRef.current)
      }
    }
  }, [])

  return (
    <div ref={boxRef}>
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

      <div
        className={`bg-white mb-25 rounded-3xl shadow-lg overflow-hidden ${
          isVisible ? 'animate-[bounceIn_1s_ease-out_forwards]' : 'opacity-0'
        }`}
        style={{ 
          animationDelay: isVisible ? `${delay}ms` : '0ms' 
        }}
      >
        <div className={`grid gap-0 lg:grid-cols-2 ${imagePosition === "right" ? "lg:grid-flow-dense" : ""}`}>
          {/* Image Section */}
          <div className={`relative h-64 lg:h-auto ${imagePosition === "right" ? "lg:col-start-2" : ""}`}>
            <div 
              className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-700 rounded-tr-[200px]"
              style={{
                backgroundImage: `url("${imageUrl}")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              {/* Placeholder - the background will show your image when you add it */}
            </div>
          </div>

          {/* <div className={`relative h-64 lg:h-auto ${imagePosition === "right" ? "lg:col-start-2" : ""}`}>
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover rounded-tr-[200px]"
              priority={false} // Set to true for above-the-fold images
              quality={75} // Adjust for balance between quality and size
            />
          </div> */}

          {/* Content Section */}
          <div className={`p-8 lg:p-10 flex flex-col justify-center ${imagePosition === "right" ? "lg:col-start-1" : ""}`}>
            <h3 className="text-2xl font-bold text-[#033231] mb-4 lg:text-3xl">
              {title}
            </h3>
            
            <p className="text-base leading-relaxed text-gray-600 mb-6">
              {description}
            </p>

            <div className="mb-6">
              <p className="text-sm font-bold uppercase tracking-wider text-[#033231] mb-4">
                Key Benefits
              </p>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-0.5 flex-shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-[#033231]" />
                    </div>
                    <span className="text-sm text-gray-600">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#cbff54] px-8 py-3 text-sm font-bold uppercase tracking-wider text-[#033231] transition-all duration-200 hover:bg-[#b8e649] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#cbff54]/50"
              >
                ENQUIRE NOW
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}