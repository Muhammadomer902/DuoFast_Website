"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
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

  // Close menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/contact", label: "Contact" },
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-[#033231] shadow-md" : "bg-transparent"
        }`}
      >
        <div className="mx-auto w-full max-w-[95%] sm:max-w-3xl lg:max-w-5xl px-3 sm:px-4 lg:px-6">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <div
                  className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-yellow-600 to-yellow-300 rounded-md flex items-center justify-center"
                  style={{
                    backgroundImage: 'url("/Header/Logo.png")',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                />
                <span className="text-lg sm:text-xl font-medium text-white">
                  <span className="font-bold">Duo</span>Fast
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {navLinks.map(({ path, label }) => (
                <Link
                  key={path}
                  href={path}
                  className={`relative group transition-colors duration-200 text-sm sm:text-base ${
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

            {/* Desktop CTA Button */}
            <div className="hidden md:flex items-center">
              <Link
                href="/contact"
                className="bg-[#cbff54] text-gray-800 hover:bg-[#0a4a4a] hover:text-white px-4 py-1.5 sm:px-6 sm:py-2 rounded-full font-medium text-sm sm:text-base transition-all duration-200"
              >
                GET IN TOUCH
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-1.5 sm:p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5 sm:h-6 sm:w-6" />
              ) : (
                <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-56 sm:w-64 bg-[#033231] z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Close Button */}
          <div className="flex justify-end p-3 sm:p-4">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white p-1.5 sm:p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Close menu"
            >
              <X className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col space-y-2 px-3 sm:px-4 flex-1">
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                href={path}
                className={`py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg transition-colors duration-200 text-sm sm:text-base ${
                  isActive(path)
                    ? "bg-[#cbff54] text-[#033231] font-semibold"
                    : "text-white hover:bg-white/10"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="p-3 sm:p-4 border-t border-white/10">
            <Link
              href="/contact"
              className="block w-full bg-[#cbff54] text-[#033231] hover:bg-[#b8e649] px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold text-center text-sm sm:text-base transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              GET IN TOUCH
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}