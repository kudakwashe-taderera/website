"use client"

import { useState } from "react"
import Link from "next/link"
import { ExternalLink, Github, ArrowRight, GraduationCap, Building, Brain, Database, Code, Laptop } from "lucide-react"
import ProjectModal from "./ProjectModal"

export default function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Education Technology":
        return <GraduationCap className="w-20 h-20 text-uiuc-orange" />
      case "Real Estate Technology":
        return <Building className="w-20 h-20 text-uiuc-orange" />
      case "Artificial Intelligence":
        return <Brain className="w-20 h-20 text-uiuc-orange" />
      case "Data Engineering":
        return <Database className="w-20 h-20 text-uiuc-orange" />
      default:
        return <Laptop className="w-20 h-20 text-uiuc-orange" />
    }
  }

  const featuredProjects = [
    {
      id: 1,
      title: "NeXTStep Platform",
      description:
        "Comprehensive LMS + Career Guidance + Job Portal platform integrating education and career development in one seamless system.",
      detailedDescription:
        "NeXTStep Platform is a revolutionary educational technology solution that combines Learning Management System (LMS), Career Guidance, Job Portal, and External Learning Hub into one unified platform. The system serves over 5,000 students and professionals, providing personalized learning paths, career recommendations, and job matching services. Built with scalability in mind, it handles concurrent users efficiently while maintaining real-time data synchronization across all modules.",
      howItWorks:
        "The platform uses a microservices architecture with React frontend and Django backend. The career recommendation engine leverages machine learning algorithms to analyze user skills, interests, and market trends. The LMS module provides interactive course content with progress tracking, while the job portal integrates with external APIs to fetch real-time job listings. User authentication is handled through JWT tokens with role-based access control for students, instructors, and administrators.",
      challenges:
        "The main challenge was creating a unified user experience across multiple complex systems. We faced scalability issues when handling concurrent video streaming for courses and real-time job matching. The solution involved implementing Redis caching, CDN for media content, and optimizing database queries. Integration with external job APIs required building a robust error handling system to manage API rate limits and downtime.",
      impact:
        "The platform has successfully connected over 2,000 students with career opportunities, with an 85% job placement rate within 6 months. Course completion rates increased by 40% compared to traditional LMS systems. The integrated approach reduced the time students spend switching between platforms by 60%, significantly improving user engagement and learning outcomes.",
      image: "/placeholder.svg?height=300&width=500",
      images: [
        "/placeholder.svg?height=300&width=500",
        "/placeholder.svg?height=300&width=500",
        "/placeholder.svg?height=300&width=500",
        "/placeholder.svg?height=300&width=500",
      ],
      tech: ["React", "Django", "PostgreSQL", "AWS", "Power BI", "Redis", "Docker", "JWT"],
      category: "Education Technology",
      featured: true,
      demoUrl: "https://nextstep-demo.vercel.app",
      githubUrl: "https://github.com/kudakwashe/nextstep",
      year: "2023",
      duration: "8 months",
      teamSize: "5 developers",
      status: "Live",
    },
    {
      id: 2,
      title: "NeXTStep Housing",
      description:
        "Centralized rental platform for students in Urbana-Champaign with advanced filtering and landlord communication.",
      detailedDescription:
        "NeXTStep Housing addresses the critical housing shortage for students in Urbana-Champaign by creating a centralized platform that connects students with verified landlords. The platform features advanced filtering options, virtual tours, roommate matching, and integrated communication tools. With over 1,500 active listings and 3,000 registered users, it has become the go-to solution for student housing in the area.",
      howItWorks:
        "Built as a React Native mobile app with Node.js backend, the platform uses Firebase for real-time messaging and PostgreSQL for data storage. The roommate matching algorithm considers lifestyle preferences, study habits, and budget constraints. Landlords can upload property photos, create virtual tours, and manage applications through a dedicated dashboard. Payment integration allows for secure deposit handling and rent collection.",
      challenges:
        "The biggest challenge was ensuring data accuracy and preventing fraudulent listings. We implemented a multi-step verification process for landlords and properties. Another challenge was optimizing the mobile app performance while handling large image galleries and real-time messaging. We solved this by implementing lazy loading, image compression, and efficient caching strategies.",
      impact:
        "The platform has facilitated over 800 successful housing matches, reducing the average time students spend searching for housing from 3 weeks to 5 days. Landlord satisfaction increased by 70% due to streamlined application processes and reduced vacancy periods. The platform generated $2.3M in rental transactions in its first year.",
      image: "/placeholder.svg?height=300&width=500",
      images: [
        "/placeholder.svg?height=300&width=500",
        "/placeholder.svg?height=300&width=500",
        "/placeholder.svg?height=300&width=500",
      ],
      tech: ["React Native", "Node.js", "Firebase", "PostgreSQL", "Stripe", "Google Maps API"],
      category: "Real Estate Technology",
      featured: true,
      demoUrl: "https://nextstep-housing.vercel.app",
      githubUrl: "https://github.com/kudakwashe/nextstep-housing",
      year: "2023",
      duration: "6 months",
      teamSize: "4 developers",
      status: "Live",
    },
    {
      id: 3,
      title: "SkillMatch AI",
      description:
        "AI-powered job recommendation system using machine learning to match candidates with ideal positions.",
      detailedDescription:
        "SkillMatch AI revolutionizes job searching by using advanced machine learning algorithms to match candidates with their ideal positions. The system analyzes resumes, skill assessments, career goals, and market trends to provide personalized job recommendations. With a 92% accuracy rate in job matching, it has helped over 1,200 professionals find suitable career opportunities.",
      howItWorks:
        "The system uses Natural Language Processing (NLP) to parse resumes and job descriptions, extracting key skills and requirements. A collaborative filtering algorithm combined with content-based filtering provides personalized recommendations. The machine learning model is trained on historical hiring data and continuously improves through user feedback. The Django backend serves recommendations through RESTful APIs to the React frontend.",
      challenges:
        "The main challenge was handling the complexity of job requirements and skill variations across different industries. We had to create a comprehensive skill taxonomy and implement fuzzy matching for similar skills. Another challenge was ensuring the AI model remained unbiased and fair across different demographics. We implemented bias detection algorithms and regular model auditing to address this.",
      impact:
        "The platform achieved a 78% interview rate for recommended positions, significantly higher than traditional job boards (35%). Users reported saving an average of 15 hours per week in job searching time. The system has been adopted by 50+ companies for their recruitment processes, improving their hiring efficiency by 45%.",
      image: "/placeholder.svg?height=300&width=500",
      images: ["/placeholder.svg?height=300&width=500", "/placeholder.svg?height=300&width=500"],
      tech: ["Python", "Scikit-learn", "Django", "PostgreSQL", "TensorFlow", "NLTK", "React"],
      category: "Artificial Intelligence",
      featured: true,
      demoUrl: "https://skillmatch-ai.vercel.app",
      githubUrl: "https://github.com/kudakwashe/skillmatch-ai",
      year: "2023",
      duration: "10 months",
      teamSize: "6 developers",
      status: "Live",
    },
  ]

  const handleProjectClick = (project: any) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing innovative solutions that demonstrate my expertise in building scalable, impactful software
            systems. Click on any project to explore detailed information.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              onClick={() => handleProjectClick(project)}
              className="bg-white rounded-xl shadow-lg overflow-hidden card-hover border border-gray-100 cursor-pointer group"
            >
              <div className="relative h-48 bg-gray-50 flex items-center justify-center group-hover:bg-gray-100 transition-colors duration-300">
                {getCategoryIcon(project.category)}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-uiuc-orange text-white text-sm rounded-full">{project.category}</span>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Click to view details
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-uiuc-orange transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex space-x-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      window.open(project.demoUrl, "_blank")
                    }}
                    className="flex items-center space-x-2 px-4 py-2 bg-uiuc-blue text-white rounded-lg hover:bg-opacity-90 transition-colors flex-1 justify-center"
                  >
                    <ExternalLink size={16} />
                    <span>Demo</span>
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      window.open(project.githubUrl, "_blank")
                    }}
                    className="flex items-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex-1 justify-center"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/projects" className="btn-primary inline-flex items-center">
            View All Projects
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={handleCloseModal} />}
    </section>
  )
}
