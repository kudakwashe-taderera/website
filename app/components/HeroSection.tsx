"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, Download, Mail } from "lucide-react"
import ParticlesBackground from "./ParticlesBackground"

export default function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0)
  const roles = ["Technopreneur", "Full Stack Engineer", "Data Engineer", "System Architect", "Innovation Leader"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white">
        <ParticlesBackground />
        {/* Background Elements - keeping them for additional depth */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-uiuc-orange rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
          <div
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-uiuc-blue rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Content */}
            <div className="text-center lg:text-left animate-slide-up">
              <div className="mb-6">
                <span className="inline-block px-3 py-2 md:px-4 md:py-2 bg-uiuc-orange bg-opacity-10 text-uiuc-orange rounded-full text-sm font-medium mb-4">
                  Available for New Opportunities
                </span>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                  Hi, I'm <span className="gradient-text">Kudakwashe</span>
                </h1>
                <div className="text-xl sm:text-2xl md:text-3xl text-gray-600 mb-6 h-12">
                  <span className="font-semibold text-uiuc-blue">{roles[currentRole]}</span>
                </div>
              </div>

              <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                I build scalable and impactful software systems that empower education, career growth, and the real estate
                industry. I also specialize in end-to-end development with a focus on data engineering and innovation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Link href="/projects" className="btn-primary">
                  View My Work
                  <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Let's Connect
                  <Mail className="ml-2" size={20} />
                </Link>
              </div>

              {/* Quick Actions */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 text-sm border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Download size={16} className="mr-2" />
                  Download Resume
                </a>
                <Link
                  href="/contact?type=sponsor"
                  className="inline-flex items-center px-4 py-2 text-sm bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors"
                >
                  Sponsorship Opportunities
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-4 sm:gap-6 justify-center lg:justify-start max-w-md mx-auto lg:mx-0">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-uiuc-blue">20+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Projects Built</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-uiuc-blue">5+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-uiuc-blue">12+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Companies Served</div>
                </div>
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative mt-8 lg:mt-0">
              <div className="relative w-full max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-uiuc-blue to-uiuc-orange rounded-3xl transform rotate-6"></div>
                <div className="relative bg-white p-6 md:p-8 rounded-3xl shadow-2xl">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-2 bg-uiuc-orange rounded w-1/2"></div>
                      <div className="h-2 bg-gray-200 rounded w-5/6"></div>
                      <div className="h-2 bg-uiuc-blue rounded w-2/3"></div>
                    </div>
                    <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                      <div className="text-sm text-gray-600 mb-2">Latest Project</div>
                      <div className="font-semibold text-uiuc-blue">NeXTStep Platform</div>
                      <div className="text-sm text-gray-500">Full Stack LMS + Career Portal</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
