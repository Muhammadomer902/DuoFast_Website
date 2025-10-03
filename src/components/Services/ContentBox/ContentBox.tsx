"use client"

import Box from "./Box/Box"

export default function ContentBox() {
  const services = [
    {
      title: "Web Development",
      description: "We specialize in crafting custom websites designed around your business goals, brand identity, and target audience — built with care, high-quality code, and a focus on user experience.",
      benefits: [
        "Customized Design & Functionality",
        "Responsive & High-Performing",
        "SEO-Optimized Architecture",
        "Scalable & Secure"
      ],
      imagePosition: "left" as const,
      imageUrl: "/Services/ContentBox/WebDevelopmentPic.jpg"
    },
    {
      title: "Mobile App Development",
      description: "From simple utility tools to complex enterprise systems, we create efficient, intuitive, and powerful mobile apps that help your business thrive.",
      benefits: [
        "Apps to Match Your Business Goals",
        "Timely Delivery and Project Coordination",
        "UX/UI-Centric Design",
        "Seamless Functionality & Cross-Platform Compatibility"
      ],
      imagePosition: "left" as const,
      imageUrl: "/Services/ContentBox/MobileAppDevelopmentPic.jpg"
    },
    {
      title: "Chatbots & Automations",
      description: "We breathe new life into outdated workflows and manual processes—making them more efficient, intelligent, and profitable.",
      benefits: [
        "Enhanced Customer Support",
        "Streamlined Operations",
        "Improved Lead Generation",
        "Expert Implementation & Integration"
      ],
      imagePosition: "left" as const,
      imageUrl: "/Services/ContentBox/ChatBot&AutomationPic.jpg"
    }
  ]

  return (
    <section className="w-full py-16 md:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 md:px-10">
        <div className="space-y-8">
          {services.map((service, index) => (
            <Box
              key={index}
              title={service.title}
              description={service.description}
              benefits={service.benefits}
              imagePosition={service.imagePosition}
              imageUrl={service.imageUrl}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  )
}