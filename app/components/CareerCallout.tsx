import Link from "next/link"
import { Briefcase, Clock, MapPin, ArrowRight, CheckCircle, Code, Database } from "lucide-react"

export default function CareerCallout() {
  return (
    <section className="py-16 bg-gradient-to-r from-uiuc-orange to-uiuc-blue px-4 sm:px-0">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-center lg:text-left">
          <div className="text-white max-w-3xl mx-auto lg:mx-0 lg:pr-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-6 mx-auto lg:mx-0">
              <Code size={32} />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">Open to Software & Data Science Roles</h2>

            <p className="text-xl mb-6 opacity-90">
              Seeking full-time, freelance, and consulting opportunities in software engineering, data science, and cloud solutions. Let's build the future together.
            </p>

            <div className="space-y-3 mb-8 text-left">
              <div className="flex items-center space-x-3">
                <CheckCircle size={20} className="text-orange-200 flex-shrink-0" />
                <span>Full-time Software Developer & Data Scientist roles</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle size={20} className="text-orange-200 flex-shrink-0" />
                <span>Freelance & Contract projects (Web, Data, AI/ML)</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle size={20} className="text-orange-200 flex-shrink-0" />
                <span>Technical consulting & cloud architecture</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle size={20} className="text-orange-200 flex-shrink-0" />
                <span>Remote, hybrid, or on-site work arrangements</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/contact?type=hire"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-uiuc-blue font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Hire Me
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                href="/resume.pdf"
                target="_blank"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-uiuc-blue transition-all duration-300 transform hover:scale-105"
              >
                Download Resume
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-2xl mx-auto max-w-md lg:mx-0">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Stats</h3>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="text-uiuc-orange" size={24} />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">8+ Years</div>
                  <div className="text-gray-600">Professional Experience</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Briefcase className="text-uiuc-blue" size={24} />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">30+ Projects</div>
                  <div className="text-gray-600">Delivered (Web, Data, AI/ML)</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Database className="text-purple-600" size={24} />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">20+ Technologies</div>
                  <div className="text-gray-600">Mastered (React, Python, AWS, ML)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
