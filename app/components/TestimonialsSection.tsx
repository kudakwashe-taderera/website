"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Tendai Moyo",
      role: "Chief Technology Officer",
      company: "Econet Wireless Zimbabwe",
      image: "/images/avatar.svg",
      rating: 5,
      text: "Kudakwashe delivered an exceptional mobile banking platform that has transformed how we serve our rural communities. His technical expertise in full-stack development and understanding of the African market made him an invaluable partner.",
    },
    {
      name: "Thabo Nkosi",
      role: "Head of Digital Innovation",
      company: "Standard Bank South Africa",
      image: "/images/avatar.svg",
      rating: 5,
      text: "Working with Kudakwashe on our risk management system was a game-changer. His data engineering expertise and attention to security compliance helped us build a robust platform that serves millions of customers across Southern Africa.",
    },
    {
      name: "Rumbidzai Dziva",
      role: "Founder & CEO",
      company: "EduTech Zimbabwe",
      image: "/images/avatar.svg",
      rating: 5,
      text: "Kudakwashe's innovative approach to educational technology is remarkable. He built us a comprehensive learning management system that has helped thousands of students access quality education, even in remote areas.",
    },
    {
      name: "Mandla Thabethe",
      role: "Director of Operations",
      company: "Shoprite Holdings SA",
      image: "/images/avatar.svg",
      rating: 5,
      text: "The e-commerce platform Kudakwashe developed for our African market has significantly improved our digital presence. His understanding of local consumer behavior and technical excellence delivered exactly what we needed.",
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Testimonials from satisfied clients and collaborators who have experienced the quality of my work
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative">
            <Quote className="absolute top-6 left-6 text-uiuc-orange opacity-20" size={48} />

            <div className="text-center">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={24} />
                ))}
              </div>

              <blockquote className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                "{testimonials[currentTestimonial].text}"
              </blockquote>

              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="text-left">
                  <div className="font-semibold text-gray-900">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-gray-600">{testimonials[currentTestimonial].role}</div>
                  <div className="text-uiuc-orange font-medium">{testimonials[currentTestimonial].company}</div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-8">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>

              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentTestimonial ? "bg-uiuc-orange" : "bg-gray-300"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
