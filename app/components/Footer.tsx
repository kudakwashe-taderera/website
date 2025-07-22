"use client"

import Link from "next/link"
import { Github, Linkedin, Twitter, Mail, MapPin, Calendar } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/contact", label: "Contact" },
  ]

  const services = [
    { href: "/contact?type=fullstack", label: "Full Stack Development" },
    { href: "/contact?type=data", label: "Data Engineering" },
    { href: "/contact?type=ai", label: "AI/ML Solutions" },
    { href: "/contact?type=consulting", label: "Technical Consulting" },
    { href: "/contact?type=mobile", label: "Mobile Development" },
    { href: "/contact?type=cloud", label: "Cloud Architecture" },
  ]

  return (
    <footer className="bg-uiuc-blue text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Kudakwashe Taderera</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Technopreneur and Full Stack Software Engineer passionate about building scalable systems that empower
              education, career growth, and real estate innovation.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-uiuc-orange" />
                <span className="text-gray-300">Urbana-Champaign, Illinois, USA</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-uiuc-orange" />
                <span className="text-gray-300">Available via contact form</span>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar size={16} className="text-uiuc-orange" />
                <span className="text-gray-300">Available for new projects</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/in/kudakwashe-taderera"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-uiuc-orange rounded-lg hover:bg-opacity-80 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/kudakwashe-taderera"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-uiuc-orange rounded-lg hover:bg-opacity-80 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://x.com/kudash_twakkie"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-uiuc-orange rounded-lg hover:bg-opacity-80 transition-colors"
                aria-label="X (formerly Twitter)"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-300 hover:text-uiuc-orange transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.href}>
                  <Link href={service.href} className="text-gray-300 hover:text-uiuc-orange transition-colors">
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-300 text-center md:text-left">
              © {currentYear} Kudakwashe Taderera. All rights reserved. <span className="font-semibold">Founder of CodeXa</span>.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-300 hover:text-uiuc-orange transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-300 hover:text-uiuc-orange transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-gray-300 hover:text-uiuc-orange transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
