"use client"

import { useState } from "react"
import Link from "next/link"
import { ExternalLink, Github, ArrowRight, GraduationCap, Building, Brain, Database, Code, Laptop } from "lucide-react"
import ProjectModal from "./ProjectModal"

export default function FeaturedProjects({ showCount = null, showViewAll = false }: { showCount?: number | null, showViewAll?: boolean }) {
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
      id: 1001,
      title: "Shomang Zenda Projects",
      description: "A modern, responsive website for a leading construction company, showcasing projects and enabling client engagement.",
      detailedDescription: "Developed a professional online presence for Shomang Zenda Projects, a construction firm, featuring a portfolio of completed works, service listings, and a streamlined contact process for prospective clients. The site emphasizes trust, quality, and the company’s expertise in the construction industry.",
      howItWorks: "Built with React and Next.js, the site features a dynamic project gallery, service pages, and a secure contact form. SEO best practices and fast load times ensure maximum visibility and user engagement.",
      challenges: "Ensuring the site reflected the company’s credibility and handled high-resolution project images efficiently. Implemented image optimization and a robust CMS for easy updates.",
      impact: "Increased client inquiries by 40% and improved the company’s digital reputation, leading to new business opportunities.",
      image: "/placeholder-logo.png",
      images: ["/placeholder-logo.png"],
      tech: ["Next.js", "React", "Tailwind CSS", "Vercel"],
      category: "Real Estate Technology",
      featured: true,
      demoUrl: "https://shomang-zendaprojects.vercel.app",
      githubUrl: "#",
      year: "2023",
      duration: "3 months",
      teamSize: "1 developer",
      status: "Live",
    },
    {
      id: 1002,
      title: "Party Fantasy Website",
      description: "A vibrant e-commerce and event site for Party Fantasy, specializing in party packs and event planning.",
      detailedDescription: "Created a user-friendly online store and event showcase for Party Fantasy, enabling customers to browse products, book event services, and request custom party packages. The site features secure checkout and engaging visuals tailored to the brand.",
      howItWorks: "Utilized Shopify integration for e-commerce, React for the frontend, and Stripe for secure payments. The event gallery and booking system streamline customer engagement.",
      challenges: "Designing a playful yet professional interface that appeals to both parents and corporate clients. Ensured mobile responsiveness and accessibility.",
      impact: "Boosted online sales by 60% and expanded the client base to include corporate event planners.",
      image: "/placeholder-logo.png",
      images: ["/placeholder-logo.png"],
      tech: ["React", "Shopify", "Stripe", "Tailwind CSS"],
      category: "E-commerce",
      featured: true,
      demoUrl: "https://partyfantasyzw.com",
      githubUrl: "#",
      year: "2023",
      duration: "2 months",
      teamSize: "1 developer",
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
    // --- New Client Projects ---
    {
      id: 1003,
      title: "Zitheka Law Assist",
      description: "A digital platform for legal consultation, connecting clients with legal experts efficiently.",
      detailedDescription: "Developed Zitheka Law Assist, a secure web application that streamlines legal consultations, appointment scheduling, and document sharing between clients and attorneys. The platform prioritizes confidentiality and ease of use.",
      howItWorks: "Built with Next.js and Node.js, featuring encrypted messaging, calendar integration, and a client dashboard. Automated reminders and document uploads enhance the client experience.",
      challenges: "Ensuring data privacy and compliance with legal industry standards. Implemented end-to-end encryption and secure authentication.",
      impact: "Reduced client onboarding time by 50% and improved client satisfaction through seamless digital interactions.",
      image: "/placeholder-logo.png",
      images: ["/placeholder-logo.png"],
      tech: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
      category: "Legal Technology",
      featured: true,
      demoUrl: "#",
      githubUrl: "#",
      year: "2023",
      duration: "4 months",
      teamSize: "1 developer",
      status: "Live",
    },
    {
      id: 1004,
      title: "AbroadPrep Consultancy",
      description: "A comprehensive platform for international students applying to study abroad, offering guidance and application management.",
      detailedDescription: "AbroadPrep Consultancy provides students with tools to research universities, manage applications, and receive expert advice. The platform includes document checklists, deadline tracking, and personalized recommendations.",
      howItWorks: "Developed with React and Firebase, the platform features a student dashboard, resource library, and real-time chat with consultants. Automated notifications keep students on track throughout the application process.",
      challenges: "Integrating multiple university APIs and ensuring a seamless user experience for students from diverse backgrounds.",
      impact: "Helped over 500 students successfully apply to international universities, increasing acceptance rates by 30%.",
      image: "/placeholder-logo.png",
      images: ["/placeholder-logo.png"],
      tech: ["React", "Firebase", "Node.js", "Tailwind CSS"],
      category: "Education Technology",
      featured: true,
      demoUrl: "#",
      githubUrl: "#",
      year: "2023",
      duration: "5 months",
      teamSize: "1 developer",
      status: "Live",
    },
    // --- CodeXa-Owned Platforms ---
    {
      id: 2001,
      title: "NeXTStep",
      description: "A comprehensive learning management system empowering students across Africa with personalized education and career tools.",
      detailedDescription: "NeXTStep is CodeXa’s flagship LMS, serving thousands of students with interactive courses, career guidance, and job placement features. The platform integrates AI-driven recommendations and real-time analytics to maximize student success.",
      howItWorks: "Built with React, Django, and AWS, NeXTStep offers scalable, secure, and engaging learning experiences. The system supports multi-language content and robust reporting for educators.",
      challenges: "Scaling to support thousands of concurrent users and integrating diverse educational content providers.",
      impact: "Empowered over 5,000 students and professionals, achieving an 85% job placement rate for graduates.",
      image: "/placeholder-logo.png",
      images: ["/placeholder-logo.png"],
      tech: ["React", "Django", "AWS", "PostgreSQL"],
      category: "Education Technology",
      featured: true,
      demoUrl: "#",
      githubUrl: "#",
      year: "2022",
      duration: "Ongoing",
      teamSize: "1 developer",
      status: "Live",
    },
    {
      id: 2002,
      title: "Kart",
      description: "A marketplace platform similar to Amazon, built for Zimbabwe, enabling local businesses to reach a wider audience.",
      detailedDescription: "Kart is a robust e-commerce platform developed and operated by CodeXa, featuring product listings, secure payments, and logistics integration. The platform supports local vendors and provides a seamless shopping experience for customers across Zimbabwe.",
      howItWorks: "Developed with Next.js, Node.js, and Stripe, Kart offers vendor dashboards, order tracking, and customer support tools. The platform is optimized for mobile and low-bandwidth environments.",
      challenges: "Adapting to local payment systems and ensuring reliable delivery logistics in Zimbabwe.",
      impact: "Enabled hundreds of businesses to sell online, processing thousands of orders monthly and supporting economic growth.",
      image: "/placeholder-logo.png",
      images: ["/placeholder-logo.png"],
      tech: ["Next.js", "Node.js", "Stripe", "MongoDB"],
      category: "E-commerce",
      featured: true,
      demoUrl: "#",
      githubUrl: "#",
      year: "2022",
      duration: "Ongoing",
      teamSize: "1 developer",
      status: "Live",
    },
    {
      id: 2003,
      title: "NeXTStep Housing",
      description: "A U.S.-based platform helping students find housing near university campuses, with advanced search and landlord verification.",
      detailedDescription: "NeXTStep Housing, owned and operated by CodeXa, connects students with verified landlords, offering virtual tours, roommate matching, and secure payment options. The platform is trusted by students and property owners alike.",
      howItWorks: "Built with React Native, Node.js, and Firebase, the platform provides real-time messaging, listing management, and payment integration.",
      challenges: "Ensuring data accuracy and preventing fraudulent listings while maintaining a seamless user experience.",
      impact: "Facilitated over 800 successful housing matches and processed millions in rental transactions.",
      image: "/placeholder-logo.png",
      images: ["/placeholder-logo.png"],
      tech: ["React Native", "Node.js", "Firebase", "Stripe"],
      category: "Real Estate Technology",
      featured: true,
      demoUrl: "#",
      githubUrl: "#",
      year: "2022",
      duration: "Ongoing",
      teamSize: "1 developer",
      status: "Live",
    },
  ]

  const displayedProjects = showCount ? featuredProjects.slice(0, showCount) : featuredProjects;

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
          {displayedProjects.map((project, index) => (
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

        {showViewAll && (
          <div className="text-center mt-8">
            <Link href="/projects" className="btn-primary inline-flex items-center">
              View All Projects
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        )}
      </div>

      {/* Project Modal */}
      {selectedProject && <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={handleCloseModal} />}
    </section>
  )
}
