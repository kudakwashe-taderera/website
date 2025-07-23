"use client";

import { Wrench, MonitorSmartphone, Palette, Globe, BarChart2, Users, CheckCircle, Zap, Layers, MessageCircle, Calendar, ArrowRight, Sparkles, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const services = [
  {
    icon: <Wrench className="w-8 h-8" />,
    title: "Software Engineering & Development",
    items: [
      "Full-Stack Web Development (Frontend & Backend)",
      "Custom Software Development (Web Apps, Internal Tools)",
      "API Development & Integration",
      "Mobile-Responsive Web Design",
    ],
    color: "uiuc-orange",
    modal: {
      description: "End-to-end software solutions for web, mobile, and internal tools. I build robust, scalable, and maintainable systems using modern frameworks and best practices. Whether you need a new product, an MVP, or to modernize legacy systems, I deliver full-stack expertise from architecture to deployment.",
      details: [
        { label: "Full-Stack Web Development", text: "Frontend (React, Next.js, TypeScript) and backend (Node.js, Django, FastAPI) development for seamless, performant web applications." },
        { label: "Custom Software Development", text: "Tailored web apps, internal tools, and automation to fit your unique business needs." },
        { label: "API Development & Integration", text: "RESTful and GraphQL APIs, third-party integrations, and secure data exchange." },
        { label: "Mobile-Responsive Web Design", text: "Responsive UIs that look and work great on any device." },
      ]
    }
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Website Design & Branding",
    items: [
      "UI/UX Design",
      "Website Redesign & Optimization",
      "Domain & Hosting Setup",
      "Personal/Business Website Packages",
    ],
    color: "uiuc-blue",
    modal: {
      description: "Modern, user-focused website design and branding to elevate your online presence. I create visually appealing, intuitive, and conversion-optimized sites that reflect your brand and engage your audience.",
      details: [
        { label: "UI/UX Design", text: "Wireframes, prototypes, and pixel-perfect interfaces for delightful user experiences." },
        { label: "Website Redesign & Optimization", text: "Revamp outdated sites for speed, SEO, and modern aesthetics." },
        { label: "Domain & Hosting Setup", text: "End-to-end setup, migration, and management for reliable, secure hosting." },
        { label: "Website Packages", text: "Flexible options for personal, business, and portfolio sites." },
      ]
    }
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Creative & Branding Services",
    items: [
      "Logo Design",
      "Social Media Banners",
      "Brand Identity Kits",
      "Business Cards, Flyers, and Posters",
    ],
    color: "purple-600",
    modal: {
      description: "Distinctive visual branding for businesses and individuals. I design logos, social media assets, and print materials that make your brand memorable and professional.",
      details: [
        { label: "Logo Design", text: "Unique, versatile logos that capture your brand essence." },
        { label: "Social Media Banners", text: "Cohesive banners and profile images for all major platforms." },
        { label: "Brand Identity Kits", text: "Color palettes, typography, and style guides for consistent branding." },
        { label: "Print Materials", text: "Business cards, flyers, and posters for events and promotions." },
      ]
    }
  },
  {
    icon: <BarChart2 className="w-8 h-8" />,
    title: "Social Media & Digital Marketing",
    items: [
      "Social Media Page Setup & Management (Facebook, Instagram, LinkedIn, TikTok)",
      "Paid Advertising Campaigns (Meta, TikTok, Google Ads)",
      "Monthly Content Planning & Design",
      "Analytics Tracking & Insights",
    ],
    color: "green-600",
    modal: {
      description: "Grow your reach and engagement with expert social media and digital marketing. I handle everything from page setup to ad campaigns and analytics, helping you connect with your audience and drive results.",
      details: [
        { label: "Page Setup & Management", text: "Professional setup and ongoing management for all major social platforms." },
        { label: "Paid Advertising", text: "Targeted ad campaigns on Meta, TikTok, and Google for maximum ROI." },
        { label: "Content Planning & Design", text: "Monthly calendars, post design, and copywriting." },
        { label: "Analytics & Insights", text: "Track performance and optimize strategy with actionable data." },
      ]
    }
  },
  {
    icon: <Layers className="w-8 h-8" />,
    title: "Data Services",
    items: [
      "Data Engineering (ETL pipelines, data cleaning, structuring)",
      "Data Visualization (Power BI, Tableau, Excel Dashboards)",
      "Data Science & Predictive Analytics",
      "Automation & Reporting Tools",
    ],
    color: "indigo-600",
    modal: {
      description: "Unlock the power of your data with engineering, visualization, and analytics. I build ETL pipelines, dashboards, and predictive models to help you make data-driven decisions.",
      details: [
        { label: "Data Engineering", text: "ETL pipelines, data cleaning, and structuring for reliable analytics." },
        { label: "Data Visualization", text: "Interactive dashboards in Power BI, Tableau, and Excel." },
        { label: "Data Science & Predictive Analytics", text: "Machine learning models and forecasting for business insights." },
        { label: "Automation & Reporting", text: "Automated reports and tools to save time and reduce errors." },
      ]
    }
  },
];

const ctas = [
  {
    label: "Request a Quote",
    href: "/contact?type=quote",
    icon: <Zap className="w-5 h-5" />,
    style: "bg-gradient-to-r from-orange-500 to-amber-500 text-white hover:shadow-lg hover:shadow-orange-200",
  },
  {
    label: "Schedule a Consultation",
    href: "/contact?type=consultation",
    icon: <Calendar className="w-5 h-5" />,
    style: "bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:shadow-lg hover:shadow-blue-200",
  },
  {
    label: "Contact Me",
    href: "/contact",
    icon: <MessageCircle className="w-5 h-5" />,
    style: "border-2 border-gray-300 hover:border-uiuc-orange text-gray-700 hover:text-uiuc-orange",
  },
];

export default function ServicesPage() {
  const [modalService, setModalService] = useState<number|null>(null);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-28 pb-20 text-center">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat"></div>
        </div>
        <div className="container-custom relative z-10 animate-slide-up">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-orange-100 text-orange-600 text-sm font-medium">
            <Sparkles className="w-4 h-4" /> Our Services
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-uiuc-orange">
            Transform Your Digital Presence
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
            Comprehensive solutions tailored to elevate your business, brand, and digital strategy — crafted with precision by CodeXa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center sm:items-stretch w-full mb-8">
            {ctas.map((cta, i) => (
              <Link 
                key={cta.href} 
                href={cta.href} 
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 w-auto min-w-[220px] justify-center ${
                  i === 0 ? 'bg-uiuc-orange text-white hover:bg-opacity-90' :
                  i === 1 ? 'bg-uiuc-blue text-white hover:bg-opacity-90' :
                  'border-2 border-gray-300 hover:border-uiuc-orange text-gray-700 hover:text-uiuc-orange'
                }`}
              >
                {cta.icon}
                {cta.label}
                <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
        {services.map((service, idx) => (
          <div 
            key={service.title} 
            className="group relative bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-4 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-fade-in"
          >
            <div className={`absolute top-0 left-0 w-full h-1 bg-${service.color}`}></div>
            <div className="flex items-center gap-4 mb-3">
              <div className={`p-3 rounded-lg bg-${service.color} text-white`}>
                {service.icon}
              </div>
              <h2 className="text-2xl font-bold text-gray-900">{service.title}</h2>
            </div>
            <ul className="space-y-3 text-gray-700">
              {service.items.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <svg className={`flex-shrink-0 w-5 h-5 text-${service.color} mt-0.5`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-4">
              <button 
                onClick={() => setModalService(idx)}
                className={`inline-flex items-center text-${service.color} font-medium hover:underline transition-colors`}
              >
                Learn more <ArrowRight className="ml-1 w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
        
        {/* Custom Service Card */}
        <div className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-lg p-8 flex flex-col gap-4 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
          <div className="flex items-center gap-4 mb-3">
            <div className="p-3 rounded-lg bg-gradient-to-br from-purple-600 to-pink-500 text-white">
              <Users className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-white">Custom Solution?</h2>
          </div>
          <p className="text-gray-300">
            Don't see exactly what you need? We specialize in creating tailored solutions for unique business challenges.
          </p>
          <div className="mt-auto pt-4">
            <Link 
              href="/contact" 
              className="inline-flex items-center px-5 py-2.5 rounded-lg bg-white text-gray-900 font-semibold hover:bg-gray-100 transition-colors"
            >
              Let's Discuss Your Project
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container-custom max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-10 mb-16 animate-fade-in relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-orange-100 rounded-full opacity-20"></div>
        <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-blue-100 rounded-full opacity-20"></div>
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="p-2 rounded-lg bg-orange-100 text-orange-600">
              <CheckCircle className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Why Choose CodeXa?</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center">
                    <span className="font-bold">1</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Experience</h3>
                  <p className="text-gray-600">
                    Founded in 2016, CodeXa has consistently delivered high-quality solutions across multiple industries — from legal and education to e-commerce and consultancy.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                    <span className="font-bold">2</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">One Expert, Many Skills</h3>
                  <p className="text-gray-600">
                    Get the best of both worlds: hands-on technical execution and strategic thinking across software development, design, data engineering, and digital marketing.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center">
                    <span className="font-bold">3</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom-Tailored Solutions</h3>
                  <p className="text-gray-600">
                    We don't believe in one-size-fits-all. Every project is carefully scoped and personalized to fit your goals, industry, and budget.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                    <span className="font-bold">4</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Full-Cycle Support</h3>
                  <p className="text-gray-600">
                    From planning and design to deployment and maintenance, you're supported every step of the way — including scaling, updates, and ongoing optimization.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center">
                    <span className="font-bold">5</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Trust & Transparency</h3>
                  <p className="text-gray-600">
                    We keep communication clear, timelines honest, and delivery sharp. Our work speaks for itself — and so do our long-term client relationships.
                  </p>
                </div>
              </div>
              <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg">
                <h3 className="font-semibold text-orange-800 mb-1">Ready to start?</h3>
                <p className="text-orange-700 text-sm">
                  Schedule a free 30-minute consultation to discuss your project needs and how we can help.
                </p>
                <Link 
                  href="/contact?type=consultation" 
                  className="mt-2 inline-flex items-center text-orange-600 font-medium text-sm hover:text-orange-700 transition-colors"
                >
                  Book a call <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container-custom text-center animate-slide-up">
        <div className="bg-uiuc-orange rounded-2xl p-10 border border-uiuc-orange/20">
          <h3 className="text-3xl font-bold mb-4 text-white">Let's Build Something Amazing Together</h3>
          <p className="text-lg text-white max-w-2xl mx-auto mb-8">
            Whether you need a complete solution or help with a specific challenge, we're here to turn your vision into reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center sm:items-stretch w-full">
            {ctas.map((cta, i) => (
              <Link 
                key={cta.href} 
                href={cta.href} 
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 w-auto min-w-[220px] justify-center ${
                  i === 0 ? 'bg-white text-uiuc-orange hover:bg-gray-100' :
                  i === 1 ? 'bg-white text-uiuc-blue hover:bg-gray-100' :
                  'border-2 border-white text-white hover:bg-white hover:text-uiuc-orange'
                }`}
              >
                {cta.icon}
                {cta.label}
                <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* Modal */}
      {modalService !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm animate-fade-in" onClick={() => setModalService(null)} />
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto animate-slide-up p-8">
            <button
              onClick={() => setModalService(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
              aria-label="Close modal"
            >
              <X size={20} className="text-gray-600" />
            </button>
            <div className={`flex items-center gap-3 mb-4`}>
              <div className={`p-3 rounded-lg bg-${services[modalService].color} text-white`}>{services[modalService].icon}</div>
              <h2 className="text-2xl font-bold text-gray-900">{services[modalService].title}</h2>
            </div>
            <p className="mb-4 text-gray-700">{services[modalService].modal.description}</p>
            <ul className="space-y-3">
              {services[modalService].modal.details.map((detail, i) => (
                <li key={i}>
                  <span className={`font-semibold text-${services[modalService].color}`}>{detail.label}:</span> {detail.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </main>
  );
}