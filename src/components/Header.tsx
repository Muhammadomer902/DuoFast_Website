"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link" // Import Link from next/link

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname.startsWith(path)) return true
    return false
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#033231] shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div
                className="w-8 h-8 bg-gradient-to-br from-yellow-600 to-yellow-300 rounded-lg flex items-center justify-center"
                style={{
                  backgroundImage: 'url("/Header/Logo.png")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              <span className="text-xl font-medium text-white">
                <span className="font-bold">Duo</span>Fast
              </span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { path: "/", label: "Home" },
              { path: "/about", label: "About" },
              { path: "/services", label: "Services" },
              { path: "/contact", label: "Contact" },
            ].map(({ path, label }) => (
              <Link
                key={path}
                href={path}
                className={`relative group transition-colors duration-200 ${
                  isActive(path) ? "text-[#cbff54]" : "text-white hover:text-[#cbff54]"
                }`}
              >
                {label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-[#cbff54] transition-all duration-200 ${
                    isActive(path) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            ))}
          </nav>

          {/* Download Button */}
          <div className="flex items-center">
            <Link
              href="/contact"
              className="bg-[#cbff54] text-gray-800 hover:bg-[#0a4a4a] hover:text-white px-6 py-2 rounded-full font-medium transition-all duration-200"
            >
              GET IN TOUCH
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}