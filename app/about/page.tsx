import { Calendar, MapPin, Award, Target, Heart, Lightbulb, Briefcase, Globe, Code, Database, Users, BarChart, Shield, Rocket, ArrowRight, TrendingUp } from "lucide-react"

export default function AboutPage() {
  const companyJourney = [
    {
      year: "2016",
      title: "Founded CodeXa",
      description: "Established CodeXa as a software development and data science company, focused on delivering high-quality solutions to clients worldwide.",
      milestones: ["First client project completed", "Established development processes", "Built initial technical infrastructure"]
    },
    {
      year: "2017-2020",
      title: "Growth & Impact",
      description: "Expanded CodeXa's portfolio with successful projects in education, real estate, e-commerce, and legal tech, building a reputation for reliability and innovation.",
      milestones: ["10+ projects delivered", "Expanded to international clients", "Developed proprietary frameworks"]
    },
    {
      year: "2021-2024",
      title: "Innovation & Leadership",
      description: "Launched and operated major platforms including NeXTStep, Kart, and NeXTStep Housing, empowering thousands of users and businesses.",
      milestones: ["30+ successful projects", "Platforms serving thousands of users", "Advanced data science capabilities"]
    }
  ]

  const values = [
    {
      icon: Target,
      title: "Client-Centric",
      description: "Every solution is tailored to deliver measurable business value and long-term success for clients.",
      extended: "We begin each project by deeply understanding your business objectives, then craft solutions that align with your specific needs and growth trajectory."
    },
    {
      icon: Heart,
      title: "Integrity & Trust",
      description: "Building lasting relationships through transparency, reliability, and ethical practices.",
      extended: "Our commitment to honesty means clear communication about capabilities, timelines, and costs—no surprises, just dependable delivery."
    },
    {
      icon: Lightbulb,
      title: "Continuous Innovation",
      description: "Staying ahead of technology trends to provide cutting-edge solutions in software and data science.",
      extended: "We invest in ongoing learning and technology evaluation to ensure our solutions leverage the most effective modern tools and approaches."
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rigorous testing and validation processes for flawless performance.",
      extended: "Every line of code undergoes meticulous review and testing to ensure reliability, security, and optimal performance."
    },
    {
      icon: Rocket,
      title: "Results-Driven",
      description: "Focusing on outcomes that move your business forward.",
      extended: "We measure success by the tangible impact our solutions have on your operations, efficiency, and bottom line."
    }
  ]

  const expertiseAreas = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "End-to-end web application development with modern frameworks"
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "ETL pipelines, data warehousing, and business intelligence"
    },
    {
      icon: Globe,
      title: "Cloud Architecture",
      description: "Scalable, secure cloud infrastructure design and implementation"
    },
    {
      icon: Users,
      title: "UX/UI Design",
      description: "User-centered interfaces that drive engagement"
    },
    {
      icon: BarChart,
      title: "Data Science",
      description: "Predictive analytics and machine learning solutions"
    }
  ]

  const platforms = [
    {
      name: "NeXTStep",
      description: "A comprehensive learning management system empowering students across Africa with personalized education and career tools.",
      stats: "10,000+ active users",
      impact: "Improved learning outcomes for students in 5 countries"
    },
    {
      name: "Kart",
      description: "A marketplace platform similar to Amazon, built for Zimbabwe, enabling local businesses to reach a wider audience.",
      stats: "200+ registered merchants",
      impact: "Increased sales for small businesses by 40% on average"
    },
    {
      name: "NeXTStep Housing",
      description: "A U.S.-based platform helping students find housing near university campuses, with advanced search and landlord verification.",
      stats: "500+ verified properties",
      impact: "Reduced housing search time by 60% for students"
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-orange-100 text-orange-600 text-sm font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                </span>
                About CodeXa
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Technology Solutions <span className="text-[#FF552E]">Built for Impact</span>
              </h1>
              <h2 className="text-2xl text-uiuc-orange mb-6">Founded & Led by Kudakwashe Taderera</h2>
              <p className="text-xl text-gray-600 mb-8">
                As the sole founder and principal engineer at CodeXa, I combine technical expertise with business acumen to deliver comprehensive digital solutions that drive growth and innovation for clients worldwide.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex items-center space-x-3">
                    <Calendar className="text-[#FF552E]" size={20} />
                    <span className="text-gray-700 font-medium">8+ Years</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">Experience</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex items-center space-x-3">
                    <Award className="text-[#FF552E]" size={20} />
                    <span className="text-gray-700 font-medium">30+</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">Projects</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex items-center space-x-3">
                    <Globe className="text-[#FF552E]" size={20} />
                    <span className="text-gray-700 font-medium">5+</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">Countries</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex items-center space-x-3">
                    <Users className="text-[#FF552E]" size={20} />
                    <span className="text-gray-700 font-medium">10K+</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">Users Impacted</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3">
                <a href="/contact" className="px-6 py-3 bg-[#FF552E] text-white rounded-lg font-medium hover:bg-orange-600 transition-colors flex items-center gap-2">
                  Get in Touch
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a href="/services" className="px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg font-medium hover:border-[#FF552E] hover:text-[#FF552E] transition-colors flex items-center gap-2">
                  Our Services
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
            
            <div className="relative order-1 lg:order-2">
              <div className="bg-white p-1 rounded-2xl shadow-2xl relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#FF552E] to-orange-400 rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 blur-sm"></div>
                <img
                  src="/Kudash.jpeg"
                  alt="Kudakwashe Taderera"
                  className="w-full h-[500px] object-cover rounded-xl mb-6"
                />
                <div className="text-center space-y-3 px-6 pb-6">
                  <h3 className="text-2xl font-bold text-gray-900">Kudakwashe Taderera</h3>
                  <div className="text-lg font-medium text-uiuc-orange">
                    Founder & Principal Engineer
                  </div>
                  <div className="text-gray-600 text-sm font-medium border-t border-gray-100 pt-3 mt-3">
                    M.S. Technology Management • University of Illinois<br />
                    B.S. Computer Science • Software Engineering Focus<br />
                    Urbana-Champaign, Illinois, United States
                  </div>
                </div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-md border border-gray-100 flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">Available for projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Core Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technical capabilities to solve complex business challenges
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {expertiseAreas.map((area, index) => {
              const Icon = area.icon
              return (
                <div key={index} className="bg-gray-50 rounded-xl p-6 group hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100">
                  <div className="w-12 h-12 bg-[#FF552E]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#FF552E]/20">
                    <Icon className="w-6 h-6 text-[#FF552E]" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{area.title}</h3>
                  <p className="text-gray-600 text-sm">{area.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The evolution of CodeXa from founding to industry leader
              </p>
            </div>
            
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-[#FF552E] to-orange-400"></div>
              
              {companyJourney.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-start mb-12 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 ml-12 md:ml-0 relative overflow-hidden">
                      <div className="absolute -right-8 -top-8 w-32 h-32 bg-[#FF552E]/5 rounded-full"></div>
                      <div className="text-[#FF552E] font-bold text-lg mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-600 mb-4">{item.description}</p>
                      <ul className="space-y-2">
                        {item.milestones.map((milestone, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <svg className="flex-shrink-0 w-4 h-4 text-[#FF552E] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span className="text-gray-700">{milestone}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-[#FF552E] rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-gradient-to-r from-[#FF552E] to-orange-500 rounded-2xl p-8 text-white mt-16">
              <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-2xl font-bold mb-4">Today & Beyond</h3>
                <p className="text-lg mb-6">
                  CodeXa continues to push boundaries in software engineering and data science, with an expanding portfolio of platforms and client solutions that demonstrate our commitment to technological excellence and business impact.
                </p>
                <a href="/projects" className="inline-flex items-center px-6 py-3 bg-white text-[#FF552E] rounded-lg font-medium hover:bg-gray-100 transition-colors">
                  View Our Projects
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide every decision and client engagement
            </p>
          </div>
          
          <div className="flex flex-col gap-6 mb-16">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div key={index} className="bg-gray-50 rounded-xl p-6 flex items-start gap-6 border border-gray-100 shadow-sm hover:bg-white hover:shadow-lg transition-all duration-300">
                  <div className="flex-shrink-0 w-14 h-14 bg-[#FF552E]/10 rounded-lg flex items-center justify-center">
                    <Icon className="w-7 h-7 text-[#FF552E]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-gray-600 mb-1">{value.description}</p>
                    {index === 0 && (
                      <p className="text-gray-500 text-sm mt-2">{value.extended}</p>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
          
          <div className="max-w-4xl mx-auto bg-gray-50 rounded-xl p-8 border border-gray-200">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Our Approach</h3>
                <p className="text-gray-600 mb-4">
                  At CodeXa, we combine technical excellence with deep business understanding to deliver solutions that drive real impact.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <svg className="flex-shrink-0 w-5 h-5 text-[#FF552E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">Strategic planning aligned with business objectives</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="flex-shrink-0 w-5 h-5 text-[#FF552E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">Agile development methodology</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="flex-shrink-0 w-5 h-5 text-[#FF552E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">Continuous client collaboration</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Why Clients Choose Us</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#FF552E]/10 rounded-full flex items-center justify-center">
                      <span className="text-[#FF552E] text-sm font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Founder-Led Expertise</h4>
                      <p className="text-gray-600 text-sm">Direct access to senior-level technical leadership</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#FF552E]/10 rounded-full flex items-center justify-center">
                      <span className="text-[#FF552E] text-sm font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">End-to-End Ownership</h4>
                      <p className="text-gray-600 text-sm">Single point of accountability from concept to delivery</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#FF552E]/10 rounded-full flex items-center justify-center">
                      <span className="text-[#FF552E] text-sm font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Technical Depth</h4>
                      <p className="text-gray-600 text-sm">Cutting-edge solutions with future-proof architecture</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="section-padding bg-[#13294B] text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Major Platforms & Solutions</h2>
            <p className="text-xl text-blue-100">
              Innovative products developed by CodeXa that create real-world impact
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <div key={index} className="bg-white/10 p-6 rounded-xl hover:bg-white/15 transition-colors duration-300 group relative overflow-hidden">
                <div className="absolute -right-6 -top-6 w-24 h-24 bg-[#FF552E]/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h3 className="text-xl font-bold mb-3 relative z-10">{platform.name}</h3>
                <p className="text-blue-100 mb-4 relative z-10">{platform.description}</p>
                <div className="pt-4 mt-4 border-t border-white/10 relative z-10">
                  <div className="flex items-center gap-2 text-sm text-blue-100">
                    <BarChart className="w-4 h-4" />
                    <span>{platform.stats}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-blue-100 mt-2">
                    <TrendingUp className="w-4 h-4" />
                    <span>{platform.impact}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <a href="/contact" className="inline-flex items-center px-6 py-3 bg-[#FF552E] text-white rounded-lg font-medium hover:bg-orange-600 transition-colors">
              Start Your Project
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}