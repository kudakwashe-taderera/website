"use client"

import { useEffect } from "react"
import { X, ExternalLink, Github, Calendar, Users, Code, Zap, AlertTriangle, GraduationCap, Building, Brain, Briefcase, Database } from "lucide-react"

interface ProjectModalProps {
  project: {
    id: number
    title: string
    description: string
    detailedDescription: string
    howItWorks: string
    challenges: string
    impact: string
    image: string
    images: string[]
    tech: string[]
    category: string
    featured: boolean
    demoUrl: string
    githubUrl: string
    year: string
    duration: string
    teamSize: string
    status: string
  }
  isOpen: boolean
  onClose: () => void
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  // Handle escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [isOpen, onClose])

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Education Technology":
        return <GraduationCap className="w-32 h-32 text-white opacity-90" />
      case "Real Estate":
        return <Building className="w-32 h-32 text-white opacity-90" />
      case "AI/ML":
        return <Brain className="w-32 h-32 text-white opacity-90" />
      case "Career Development":
        return <Briefcase className="w-32 h-32 text-white opacity-90" />
      case "Data Engineering":
        return <Database className="w-32 h-32 text-white opacity-90" />
      default:
        return <Code className="w-32 h-32 text-white opacity-90" />
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Background Overlay */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
        aria-label="Close modal"
      />

      {/* Modal Content */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-slide-up">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
          aria-label="Close modal"
        >
          <X size={20} className="text-gray-600" />
        </button>

        {/* Header Image */}
        <div className="relative h-64 md:h-80 overflow-hidden rounded-t-2xl bg-gradient-to-br from-uiuc-orange to-uiuc-blue flex items-center justify-center">
          {getCategoryIcon(project.category)}
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute bottom-6 left-6 text-white">
            <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-3 inline-block">
              {project.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{project.title}</h1>
            <p className="text-lg opacity-90">{project.description}</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          {/* Project Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 p-4 bg-gray-50 rounded-xl">
            <div className="text-center">
              <Calendar className="mx-auto mb-2 text-uiuc-orange" size={20} />
              <div className="text-sm font-semibold text-gray-900">{project.year}</div>
              <div className="text-xs text-gray-600">Year</div>
            </div>
            <div className="text-center">
              <Users className="mx-auto mb-2 text-uiuc-orange" size={20} />
              <div className="text-sm font-semibold text-gray-900">{project.teamSize}</div>
              <div className="text-xs text-gray-600">Team Size</div>
            </div>
            <div className="text-center">
              <Code className="mx-auto mb-2 text-uiuc-orange" size={20} />
              <div className="text-sm font-semibold text-gray-900">{project.duration}</div>
              <div className="text-xs text-gray-600">Duration</div>
            </div>
            <div className="text-center">
              <Zap className="mx-auto mb-2 text-uiuc-orange" size={20} />
              <div className="text-sm font-semibold text-gray-900">{project.status}</div>
              <div className="text-xs text-gray-600">Status</div>
            </div>
          </div>

          {/* Detailed Description */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Overview</h2>
            <p className="text-gray-700 leading-relaxed">{project.detailedDescription}</p>
          </section>

          {/* How It Works */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-gray-700 leading-relaxed">{project.howItWorks}</p>
          </section>

          {/* Challenges */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <AlertTriangle className="mr-2 text-uiuc-orange" size={24} />
              Challenges & Solutions
            </h2>
            <p className="text-gray-700 leading-relaxed">{project.challenges}</p>
          </section>

          {/* Impact */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Impact & Results</h2>
            <p className="text-gray-700 leading-relaxed">{project.impact}</p>
          </section>

          {/* Tech Stack */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Technology Stack</h2>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-uiuc-blue text-white rounded-lg font-medium hover:bg-opacity-90 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Additional Screenshots */}
          {project.images && project.images.length > 0 && (
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Visual Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.images.map((_, index) => (
                  <div
                    key={index}
                    className="w-full h-48 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-center justify-center"
                  >
                    {getCategoryIcon(project.category)}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-uiuc-orange hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-uiuc-orange"
            >
              <ExternalLink size={20} />
              <span>View Live Demo</span>
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105"
            >
              <Github size={20} />
              <span>View Source Code</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
