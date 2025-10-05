"use client"

import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Twitter, Github, Linkedin } from "lucide-react"
import { usePathname } from "next/navigation";

export default function Footer() {
  // Move usePathname to the top level of the component
  const pathname = usePathname();

  return (
    <footer className="w-full bg-[#033231] text-white pt-5">
      {/* CTA Banner */}
      <section className="mx-auto w-full max-w-7xl px-6 sm:px-8 md:px-10">
        <div className="mt-12 rounded-3xl bg-[#cbff54] px-6 py-10 sm:p-10 md:p-12 lg:p-14">
          <div className="grid gap-8 lg:grid-cols-13 lg:items-center">
            <div className="lg:col-span-7">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#033231]">
                Ready to start your project?
              </p>
              <h2 className="text-pretty text-3xl font-bold leading-tight text-[#033231] sm:text-4xl md:text-5xl">
                From Idea to Impact,
                <br />
                Let’s Begin
              </h2>
            </div>

            <div className="lg:col-span-6 lg:pl-8">
              <p className="mb-6 text-sm leading-relaxed text-[#033231]/80 md:text-base">
                Your business is more than just a brand; it&apos;s a vision waiting to be built. We are here to help you create a digital presence that reflects your goals, values, and ambitions. 
              </p>

              <div className="flex lg:justify-start">
                <a
                  href="/contact"
                  className="inline-flex items-center text-[#cbff54] justify-center rounded-full bg-[#033231] px-9 py-3 text-sm font-semibold uppercase tracking-wider transition-colors hover:bg-[#022a28] focus:outline-none focus:ring-2 focus:ring-white/30"
                >
                  Let’s Talk
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer Content */}
      <section className="mx-auto w-full max-w-7xl px-6 pt-12 sm:px-8 md:px-10">
        <div className="grid gap-20 pb-10 md:grid-cols-8">
          {/* Brand / About */}
          <div className="md:col-span-2">
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <div
                  className="w-8 h-8 bg-gradient-to-br from-yellow-600 to-yellow-300 rounded-lg flex items-center justify-center"
                  style={{
                    backgroundImage: 'url("/Header/Logo.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                />
                <span className="text-xl font-medium text-white">
                  <span className="font-bold">Duo</span>Fast
                </span>
              </div>
            </div>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/80">
              At DuoFast, we are passionate about building cutting-edge digital products that drive growth and redefine possibilities.
            </p>

            <div className="mt-6 flex items-center gap-4">
              <a aria-label="GitHub" href="https://github.com/duofast" className="rounded-full p-2 text-white/80 transition hover:text-white">
                <Github className="h-5 w-5" />
              </a>
              <a aria-label="Instagram" href="https://www.instagram.com/duofast.ltd/" className="rounded-full p-2 text-white/80 transition hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a aria-label="LinkedIn" href="https://www.linkedin.com/in/duofast/" className="rounded-full p-2 text-white/80 transition hover:text-white">
                <Linkedin className="h-5 w-5" />
              </a>
              {/* <a
                aria-label="Twitter / X"
                href="#"
                className="rounded-full p-2 text-white/80 transition hover:text-white"
              >
                <Twitter className="h-5 w-5" />
              </a> */}
            </div>
          </div>

          {/* Company */}
          <div className="md:col-span-2">
            <h3 className="mb-4 text-base font-bold">Company</h3>
            <ul className="space-y-3 text-sm text-white/80 font-semibold">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/services", label: "Services" },
                { href: "/contact", label: "Contact" },
              ].map((item) => {
                const isActive = pathname === item.href; // Use pathname variable
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className={`hover:text-[#cbff54] ${isActive ? "text-[#cbff54]" : ""}`}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Support */}
          <div className="md:col-span-2">
            {/* <h3 className="mb-4 text-base font-bold">Support</h3>
            <ul className="space-y-3 text-sm text-white/80 font-semibold">
              {[
                { href: "/blog", label: "Blog" },
                { href: "/careers", label: "Careers" },
                { href: "/testimonials", label: "Testimonials" },
              ].map((item) => {
                const isActive = pathname === item.href; // Use pathname variable
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className={`hover:text-[#cbff54] ${isActive ? "text-[#cbff54]" : ""}`}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul> */}
          </div>

          {/* Contact */}
          <div className="md:col-span-2">
            <h3 className="mb-4 text-base font-bold">Contact Us</h3>
            <ul className="space-y-5 text-sm font-semibold">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#cbff54]">
                  <Phone className="h-5 w-5 text-[#033231]" />
                </span>
                <div>
                  <p className="font-semibold">Call us</p>
                  <p className="text-white/80">+92 339 486 7797</p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#cbff54]">
                  <Mail className="h-5 w-5 text-[#033231]" />
                </span>
                <div>
                  <p className="font-semibold">Send Email</p>
                  <p className="text-white/80">duofast.ltd@gmail.com</p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#cbff54]">
                  <MapPin className="h-5 w-5 text-[#033231]" />
                </span>
                <div>
                  <p className="font-semibold">Address</p>
                  <p className="text-white/80">Islamabad, Pakistan</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 border-t border-white" />

        {/* Bottom bar */}
        <div className="flex flex-col items-center font-semibold justify-between gap-4 py-4 text-sm text-white/75 md:flex-row">
          <p className="order-2 md:order-1">© 2025 Copyright by DuoFast</p>
          {/* <nav className="order-1 flex items-center gap-6 md:order-2">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Terms &amp; Condition
            </a>
          </nav> */}
        </div>
      </section>
    </footer>
  )
}