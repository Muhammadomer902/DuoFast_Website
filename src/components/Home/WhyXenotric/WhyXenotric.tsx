"use client"

import { User, Users, Building, Heart } from "lucide-react"
import { useState, useEffect, useRef } from "react"

export default function WhyXenotric() {
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
        threshold: 0.2, // Trigger when 20% of the section is visible
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
      className="w-full bg-[#f6f7f7] py-16 md:py-20 lg:py-24"
    >
      <style jsx>{`
        @keyframes slideInLeft {
          0% {
            transform: translateX(-40px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 md:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          {/* Left Content */}
          <div className={`lg:pr-8 transition-all duration-800 ease-out ${
            isVisible 
              ? 'translate-x-0 opacity-100' 
              : '-translate-x-10 opacity-0'
          }`}>
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[#033231]">
              WHY DuoFast
            </p>
            <h2 className="text-pretty text-4xl font-bold leading-tight text-[#033231] sm:text-5xl lg:text-6xl">
              What Sets Us
              <br />
              Apart
            </h2>
            <p className="mt-6 text-base leading-relaxed text-gray-600 md:text-lg">
              We&apos;re more than just developers — we&apos;re your global digital partner. We work with clients 
              around the world to deliver high-quality, innovative solutions with precision, pride, and a 
              focus on your success. 
            </p>
          </div>

          {/* Right Content - Features Grid */}
          <div className="grid gap-6 sm:grid-cols-2">
            {/* Local Knowledge */}
            <div className={`group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 ease-out ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-5'
            }`}
            style={{ 
              transitionDelay: isVisible ? '200ms' : '0ms' 
            }}>
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#033231]">
                <User className="h-8 w-8 text-[#cbff54]" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-[#033231]">
                Global Perspective
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                Our team brings a diverse, worldwide understanding of technology trends and user 
                behavior, ensuring your project is ready for a global audience. 
              </p>
            </div>

            {/* Pro Team */}
            <div className={`group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 ease-out ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-5'
            }`}
            style={{ 
              transitionDelay: isVisible ? '400ms' : '0ms' 
            }}>
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#033231]">
                <Users className="h-8 w-8 text-[#cbff54]" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-[#033231]">
                Expert Team
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                We are a collective of highly skilled developers, designers, and strategists committed to 
                delivering high-quality, innovative digital solutions. 
              </p>
            </div>

            {/* Smart Designs */}
            <div className={`group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 ease-out ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-5'
            }`}
            style={{ 
              transitionDelay: isVisible ? '600ms' : '0ms' 
            }}>
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#033231]">
                <Building className="h-8 w-8 text-[#cbff54]" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-[#033231]">
                Innovation-Driven
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                We stay ahead of the curve by leveraging the latest technologies and best practices to 
                build forward-thinking products that give you a competitive edge. 
              </p>
            </div>

            {/* Client Focus */}
            <div className={`group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 ease-out ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-5'
            }`}
            style={{ 
              transitionDelay: isVisible ? '800ms' : '0ms' 
            }}>
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#033231]">
                <Heart className="h-8 w-8 text-[#cbff54]" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-[#033231]">
                Client-Centric Approach
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                Your vision is our priority. We work closely with you through every step of the process, 
                ensuring transparent communication and a final product that exceeds your expectations. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}