"use client"

import { useState } from "react"
import { Code, Database, Cloud, Wrench, Brain, Palette, Shield, Terminal } from "lucide-react"

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(0)

  const skillCategories = [
    {
      icon: Terminal,
      title: "Full-Stack Development",
      color: "from-blue-500 to-purple-600",
      skills: [
        { name: "Python", level: 95 },
        { name: "Django", level: 93 },
        { name: "React", level: 95 },
        { name: "JavaScript", level: 94 },
        { name: "Next.js", level: 90 },
      ],
    },
    {
      icon: Database,
      title: "Databases",
      color: "from-green-500 to-teal-600",
      skills: [
        { name: "PostgreSQL", level: 90 },
        { name: "MongoDB", level: 85 },
        { name: "SQL", level: 92 },
        { name: "Database Design", level: 88 },
        { name: "ORM (Django)", level: 93 },
      ],
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      color: "from-red-500 to-orange-600",
      skills: [
        { name: "Security Architecture", level: 88 },
        { name: "Secure Coding", level: 90 },
        { name: "Authentication", level: 92 },
        { name: "Data Protection", level: 87 },
        { name: "Security Best Practices", level: 89 },
      ],
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      color: "from-orange-500 to-red-600",
      skills: [
        { name: "AWS", level: 88 },
        { name: "Docker", level: 85 },
        { name: "Vercel", level: 92 },
        { name: "GitHub Actions", level: 80 },
        { name: "Azure", level: 75 },
      ],
    },
    {
      icon: Brain,
      title: "Data & Analytics",
      color: "from-purple-500 to-pink-600",
      skills: [
        { name: "Data Processing", level: 90 },
        { name: "ETL Pipelines", level: 85 },
        { name: "Analytics", level: 87 },
        { name: "Power BI", level: 87 },
        { name: "BigQuery", level: 80 },
      ],
    },
    {
      icon: Wrench,
      title: "Tools & Workflow",
      color: "from-indigo-500 to-blue-600",
      skills: [
        { name: "Git", level: 95 },
        { name: "VS Code", level: 98 },
        { name: "Figma", level: 78 },
        { name: "Postman", level: 88 },
        { name: "Jenkins", level: 75 },
      ],
    },
    {
      icon: Palette,
      title: "Design & UX",
      color: "from-pink-500 to-rose-600",
      skills: [
        { name: "UI/UX Design", level: 82 },
        { name: "Responsive Design", level: 95 },
        { name: "User Research", level: 78 },
        { name: "Prototyping", level: 80 },
        { name: "Accessibility", level: 85 },
      ],
    },
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Technical Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Specializing in full-stack engineering with Python, Django, React, JavaScript, and databases, plus cybersecurity expertise. Cloud and data capabilities available.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Category Tabs */}
          <div className="lg:col-span-1">
            <div className="space-y-2">
              {skillCategories.map((category, index) => {
                const Icon = category.icon
                return (
                  <button
                    key={index}
                    onClick={() => setActiveCategory(index)}
                    className={`w-full text-left p-3 md:p-4 rounded-lg transition-all duration-300 ${
                      activeCategory === index
                        ? "bg-[#FF552E] text-white shadow-lg"
                        : "bg-white text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <Icon size={20} className="md:w-6 md:h-6" />
                      <span className="font-semibold text-sm md:text-base">{category.title}</span>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Skills Display */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg">
              <div className="mb-6">
                <div className="flex items-center space-x-3 mb-4">
                  {(() => {
                    const Icon = skillCategories[activeCategory].icon
                    return <Icon size={28} className="text-[#FF552E] md:w-8 md:h-8" />
                  })()}
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                    {skillCategories[activeCategory].title}
                  </h3>
                </div>
              </div>

              <div className="space-y-4 md:space-y-6">
                {skillCategories[activeCategory].skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700 text-sm md:text-base">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-[#13294B] to-[#FF552E] h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
