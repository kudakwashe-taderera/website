import { Calendar, MapPin, Award, Target, Heart, Lightbulb } from "lucide-react"

export default function AboutPage() {
  const journey = [
    {
      year: "2019",
      title: "Started Programming Journey",
      description: "Began learning Python and web development fundamentals",
    },
    {
      year: "2020",
      title: "First Full-Stack Project",
      description: "Built my first complete web application using Django and React",
    },
    {
      year: "2021",
      title: "Data Engineering Focus",
      description: "Specialized in data pipelines and analytics platforms",
    },
    {
      year: "2022",
      title: "Entrepreneurial Ventures",
      description: "Launched multiple SaaS platforms for education and real estate",
    },
    {
      year: "2023",
      title: "AI Integration",
      description: "Incorporated machine learning into job matching and recommendation systems",
    },
    {
      year: "2024",
      title: "Scale & Innovation",
      description: "Focusing on scalable solutions and emerging technologies",
    },
  ]

  const values = [
    {
      icon: Target,
      title: "Innovation-Driven",
      description: "Constantly exploring new technologies and methodologies to solve complex problems",
    },
    {
      icon: Heart,
      title: "Impact-Focused",
      description: "Building solutions that make a real difference in education and career development",
    },
    {
      icon: Lightbulb,
      title: "Continuous Learning",
      description: "Staying ahead of technology trends and continuously expanding my skill set",
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About <span className="gradient-text">Kudakwashe</span>
              </h1>
              <h2 className="text-2xl text-uiuc-orange mb-6">Founder of NeXTStep</h2>
              <p className="text-xl text-gray-600 mb-8">
                A passionate technopreneur and full stack software engineer dedicated to building scalable systems that
                empower education, career growth, and innovation.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="text-[#FF552E]" size={20} />
                  <span className="text-gray-700">Based in Urbana-Champaign, Illinois</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="text-[#FF552E]" size={20} />
                  <span className="text-gray-700">5+ Years of Professional Experience</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="text-[#FF552E]" size={20} />
                  <span className="text-gray-700">20+ Successful Projects Delivered</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-2xl">
                <img
                  src="/Kudash.jpg"
                  alt="Kudakwashe Taderera"
                  className="w-full h-[500px] object-cover rounded-xl mb-6"
                />
                <div className="text-center space-y-3">
                  <h3 className="text-2xl font-bold text-gray-900">Kudakwashe Taderera</h3>
                  <div className="text-lg font-medium text-uiuc-orange">
                    Technopreneur & Full Stack Engineer
                  </div>
                  <div className="text-gray-600 text-sm font-medium border-t border-gray-100 pt-3 mt-3">
                    M.S. Technology Management
                    <br />
                    University of Illinois Urbana-Champaign
                    <br />
                    United States
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">My Journey</h2>

            <div className="prose prose-lg max-w-none text-gray-600 mb-16">
              <p className="text-xl leading-relaxed mb-6">
                My journey into technology began with a simple curiosity about how software could solve real-world
                problems. What started as experimenting with basic programming concepts has evolved into a passion for
                building comprehensive systems that make a tangible impact on people's lives.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Throughout my career, I've focused on three key areas: education technology, career development
                platforms, and real estate solutions. Each project has taught me valuable lessons about scalability,
                user experience, and the importance of data-driven decision making.
              </p>

              <p className="text-lg leading-relaxed">
                As a technopreneur, I don't just build software – I create solutions that address genuine market needs.
                My approach combines technical expertise with business acumen, ensuring that every project delivers both
                functional excellence and commercial value.
              </p>
            </div>

            {/* Timeline */}
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-[#FF552E]"></div>

              {journey.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-center mb-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 ml-12 md:ml-0">
                      <div className="text-[#FF552E] font-bold text-lg mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>

                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-[#FF552E] rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide my work and drive my passion for technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div key={index} className="text-center p-8 bg-white rounded-xl shadow-lg card-hover">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FF552E] rounded-full mb-6">
                    <Icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="section-padding bg-[#13294B] text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Vision for the Future</h2>
            <p className="text-xl leading-relaxed mb-8">
              I envision a world where technology seamlessly bridges the gap between education and career success, where
              data-driven insights empower individuals to make informed decisions about their future, and where
              innovative platforms create opportunities for growth and collaboration.
            </p>
            <p className="text-lg leading-relaxed opacity-90">
              My goal is to continue building solutions that not only solve today's challenges but also anticipate
              tomorrow's needs, always with a focus on scalability, sustainability, and positive impact.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
