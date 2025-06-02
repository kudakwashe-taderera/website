"use client"

import { useEffect, useState } from "react"
import { Code, Users, Award, Zap } from "lucide-react"

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("stats-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const stats = [
    {
      icon: Code,
      value: 20,
      suffix: "+",
      label: "Projects Delivered",
      description: "Full-stack applications across education, career, and real estate",
    },
    {
      icon: Users,
      value: 1000,
      suffix: "+",
      label: "Users Impacted",
      description: "Students and professionals empowered through my platforms",
    },
    {
      icon: Award,
      value: 15,
      suffix: "+",
      label: "Technologies Mastered",
      description: "From frontend frameworks to cloud infrastructure",
    },
    {
      icon: Zap,
      value: 99,
      suffix: "%",
      label: "Client Satisfaction",
      description: "Delivering solutions that exceed expectations",
    },
  ]

  return (
    <section id="stats-section" className="py-20 bg-uiuc-blue">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Impact Through Innovation</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transforming ideas into scalable solutions that make a real difference
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20 hover:bg-white hover:bg-opacity-20 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-uiuc-orange rounded-full mb-4">
                  <Icon size={32} className="text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">
                  {isVisible ? <CountUp end={stat.value} suffix={stat.suffix} /> : "0"}
                </div>
                <div className="text-lg font-semibold text-uiuc-orange mb-2">{stat.label}</div>
                <div className="text-gray-300 text-sm">{stat.description}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function CountUp({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = end / steps
    const stepDuration = duration / steps

    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [end])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}
