import { Calendar, MapPin, Award, Target, Heart, Lightbulb, Briefcase } from "lucide-react"

export default function AboutPage() {
  const companyJourney = [
    {
      year: "2016",
      title: "Founded CodeXa",
      description: "Established CodeXa as a software development and data science company, focused on delivering high-quality solutions to clients worldwide.",
    },
    {
      year: "2017-2020",
      title: "Growth & Impact",
      description: "Expanded CodeXa's portfolio with successful projects in education, real estate, e-commerce, and legal tech, building a reputation for reliability and innovation.",
    },
    {
      year: "2021-2024",
      title: "Innovation & Leadership",
      description: "Launched and operated major platforms including NeXTStep, Kart, and NeXTStep Housing, empowering thousands of users and businesses.",
    },
  ]

  const values = [
    {
      icon: Target,
      title: "Client-Centric",
      description: "Every solution is tailored to deliver measurable business value and long-term success for clients.",
    },
    {
      icon: Heart,
      title: "Integrity & Trust",
      description: "Building lasting relationships through transparency, reliability, and ethical practices.",
    },
    {
      icon: Lightbulb,
      title: "Continuous Innovation",
      description: "Staying ahead of technology trends to provide cutting-edge solutions in software and data science.",
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
                About <span className="gradient-text">CodeXa</span>
              </h1>
              <h2 className="text-2xl text-uiuc-orange mb-6">Founded & Led by Kudakwashe Taderera</h2>
              <p className="text-xl text-gray-600 mb-8">
                I am the sole founder and principal engineer at CodeXa, a software development and data science company established in 2016. With deep expertise in full-stack development, AI, and data-driven solutions, I help businesses achieve their goals through technology.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="text-[#FF552E]" size={20} />
                  <span className="text-gray-700">Based in Urbana-Champaign, Illinois</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="text-[#FF552E]" size={20} />
                  <span className="text-gray-700">8+ Years of Professional Experience</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="text-[#FF552E]" size={20} />
                  <span className="text-gray-700">30+ Successful Projects Delivered</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Briefcase className="text-[#FF552E]" size={20} />
                  <span className="text-gray-700">Sole Founder & Lead Consultant</span>
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
                    Founder, CodeXa
                  </div>
                  <div className="text-gray-600 text-sm font-medium border-t border-gray-100 pt-3 mt-3">
                    M.S. Technology Management<br />
                    University of Illinois Urbana-Champaign<br />
                    United States
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Company Story Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Our Story</h2>
            <div className="prose prose-lg max-w-none text-gray-600 mb-16">
              <p className="text-xl leading-relaxed mb-6">
                CodeXa was founded in 2016 with a vision to deliver world-class software and data solutions to clients across the globe. As the sole founder, I have led every project with a hands-on approach, ensuring the highest standards of quality, innovation, and client satisfaction.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Over the years, CodeXa has built a reputation for delivering robust, scalable, and impactful solutions in industries such as education, real estate, e-commerce, and legal technology. My expertise in full-stack development and data science enables me to tackle complex business challenges and drive measurable results for clients.
              </p>
              <p className="text-lg leading-relaxed">
                Today, CodeXa continues to innovate, operating major platforms and serving clients worldwide with a commitment to excellence, integrity, and long-term partnership.
              </p>
            </div>
            {/* Timeline */}
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-[#FF552E]"></div>
              {companyJourney.map((item, index) => (
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide CodeXa and every client engagement
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
      {/* Platforms Section */}
      <section className="section-padding bg-[#13294B] text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Major Platforms Operated by CodeXa</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="bg-white/10 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-2">NeXTStep</h3>
                <p className="text-base mb-2">A comprehensive learning management system empowering students across Africa with personalized education and career tools.</p>
              </div>
              <div className="bg-white/10 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-2">Kart</h3>
                <p className="text-base mb-2">A marketplace platform similar to Amazon, built for Zimbabwe, enabling local businesses to reach a wider audience.</p>
              </div>
              <div className="bg-white/10 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-2">NeXTStep Housing</h3>
                <p className="text-base mb-2">A U.S.-based platform helping students find housing near university campuses, with advanced search and landlord verification.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
