"use client"

import { useState } from "react"
import { MapPin, Users, Calendar, Phone, Building, Landmark, ShoppingCart, Activity, Tv, Server, ArrowRight } from "lucide-react"

interface Company {
  name: string
  logo: string
  country: string
  industry: string
  project: string
  year: string
  description: string
  employees: string
  website: string
}

interface Tab {
  id: string
  label: string
  count: number
}

const CompaniesSection = () => {
  const [activeTab, setActiveTab] = useState<string>("all")

  const companies: Company[] = [
    // Zimbabwean Companies
    {
      name: "Econet Wireless Zimbabwe",
      logo: "/placeholder.svg?height=80&width=120",
      country: "Zimbabwe",
      industry: "Telecommunications",
      project: "Mobile Banking Platform",
      year: "2023",
      description: "Developed a secure mobile banking solution for rural communities",
      employees: "5000+",
      website: "https://econet.co.zw",
    },
    {
      name: "Delta Corporation",
      logo: "/placeholder.svg?height=80&width=120",
      country: "Zimbabwe",
      industry: "Beverages & Hospitality",
      project: "Supply Chain Management System",
      year: "2023",
      description: "Built an integrated supply chain and inventory management platform",
      employees: "3000+",
      website: "https://delta.co.zw",
    },
    {
      name: "Old Mutual Zimbabwe",
      logo: "/placeholder.svg?height=80&width=120",
      country: "Zimbabwe",
      industry: "Financial Services",
      project: "Customer Portal & Analytics",
      year: "2022",
      description: "Created a comprehensive customer portal with data analytics dashboard",
      employees: "2000+",
      website: "https://oldmutual.co.zw",
    },
    {
      name: "Cassava Technologies",
      logo: "/placeholder.svg?height=80&width=120",
      country: "Zimbabwe",
      industry: "Technology",
      project: "Fintech Integration Platform",
      year: "2023",
      description: "Developed API integration platform for fintech services",
      employees: "1500+",
      website: "https://cassavatechnologies.com",
    },
    {
      name: "ZB Bank",
      logo: "/placeholder.svg?height=80&width=120",
      country: "Zimbabwe",
      industry: "Banking",
      project: "Digital Banking Solution",
      year: "2022",
      description: "Built modern digital banking platform with real-time transactions",
      employees: "1000+",
      website: "https://zbbank.co.zw",
    },
    {
      name: "Steward Bank",
      logo: "/placeholder.svg?height=80&width=120",
      country: "Zimbabwe",
      industry: "Banking",
      project: "Mobile Payment System",
      year: "2023",
      description: "Developed mobile payment and wallet management system",
      employees: "800+",
      website: "https://stewardbank.co.zw",
    },
    // South African Companies
    {
      name: "Shoprite Holdings",
      logo: "/placeholder.svg?height=80&width=120",
      country: "South Africa",
      industry: "Retail",
      project: "E-commerce Platform",
      year: "2023",
      description: "Built scalable e-commerce platform for African markets",
      employees: "150000+",
      website: "https://shopriteholdings.co.za",
    },
    {
      name: "MTN Group",
      logo: "/placeholder.svg?height=80&width=120",
      country: "South Africa",
      industry: "Telecommunications",
      project: "Data Analytics Platform",
      year: "2023",
      description: "Developed customer analytics and business intelligence platform",
      employees: "17000+",
      website: "https://mtn.com",
    },
    {
      name: "Standard Bank",
      logo: "/placeholder.svg?height=80&width=120",
      country: "South Africa",
      industry: "Banking",
      project: "Risk Management System",
      year: "2022",
      description: "Created advanced risk assessment and management platform",
      employees: "50000+",
      website: "https://standardbank.co.za",
    },
    {
      name: "Naspers",
      logo: "/placeholder.svg?height=80&width=120",
      country: "South Africa",
      industry: "Technology & Media",
      project: "Content Management Platform",
      year: "2023",
      description: "Built scalable content management and distribution system",
      employees: "25000+",
      website: "https://naspers.com",
    },
    {
      name: "Discovery Limited",
      logo: "/placeholder.svg?height=80&width=120",
      country: "South Africa",
      industry: "Insurance & Healthcare",
      project: "Health Analytics Platform",
      year: "2022",
      description: "Developed health data analytics and wellness tracking platform",
      employees: "15000+",
      website: "https://discovery.co.za",
    },
    {
      name: "Capitec Bank",
      logo: "/placeholder.svg?height=80&width=120",
      country: "South Africa",
      industry: "Banking",
      project: "Digital Banking Infrastructure",
      year: "2023",
      description: "Enhanced digital banking infrastructure and mobile applications",
      employees: "12000+",
      website: "https://capitecbank.co.za",
    },
  ]

  const tabs: Tab[] = [
    { id: "all", label: "All Companies", count: companies.length },
    { id: "zimbabwe", label: "Zimbabwe", count: companies.filter((c) => c.country === "Zimbabwe").length },
    { id: "south-africa", label: "South Africa", count: companies.filter((c) => c.country === "South Africa").length },
  ]

  const getIndustryIcon = (industry: string) => {
    switch (industry) {
      case "Telecommunications":
        return <Phone className="w-12 h-12 text-uiuc-orange" />
      case "Banking":
        return <Landmark className="w-12 h-12 text-uiuc-orange" />
      case "Retail":
        return <ShoppingCart className="w-12 h-12 text-uiuc-orange" />
      case "Technology":
      case "Technology & Media":
        return <Server className="w-12 h-12 text-uiuc-orange" />
      case "Insurance & Healthcare":
        return <Activity className="w-12 h-12 text-uiuc-orange" />
      case "Beverages & Hospitality":
        return <Building className="w-12 h-12 text-uiuc-orange" />
      case "Financial Services":
        return <Landmark className="w-12 h-12 text-uiuc-orange" />
      default:
        return <Building className="w-12 h-12 text-uiuc-orange" />
    }
  }

  const filteredCompanies = companies.filter((company) => {
    if (activeTab === "all") return true
    if (activeTab === "zimbabwe") return company.country === "Zimbabwe"
    if (activeTab === "south-africa") return company.country === "South Africa"
    return false
  })

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId)
  }

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Leading <span className="gradient-text">Companies</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Collaborating with top organizations across Zimbabwe and South Africa to deliver innovative technology
            solutions
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => handleTabClick(tab.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                  isActive
                    ? "bg-uiuc-orange text-white"
                    : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    isActive
                      ? "bg-white bg-opacity-20 text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            )
          })}
        </div>

        {/* Companies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCompanies.map((company, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    {getIndustryIcon(company.industry)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{company.name}</h3>
                    <p className="text-sm text-gray-600">{company.industry}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-center text-gray-600">
                  <MapPin size={16} className="mr-2" />
                  <span>{company.country}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Users size={16} className="mr-2" />
                  <span>{company.employees}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Calendar size={16} className="mr-2" />
                  <span>{company.year}</span>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <p className="text-gray-700 mb-4">{company.description}</p>
                <a
                  href={company.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-uiuc-orange hover:text-uiuc-blue transition-colors font-medium inline-flex items-center"
                >
                  Visit Website
                  <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-uiuc-orange mb-2">{companies.length}+</div>
            <div className="text-gray-600">Companies Served</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-uiuc-orange mb-2">2</div>
            <div className="text-gray-600">Countries</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-uiuc-orange mb-2">8</div>
            <div className="text-gray-600">Industries</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-uiuc-orange mb-2">100%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompaniesSection
