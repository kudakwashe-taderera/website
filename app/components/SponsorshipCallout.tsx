import Link from "next/link"
import { Rocket, DollarSign, Handshake, ArrowRight, Code, Database } from "lucide-react"

export default function SponsorshipCallout() {
  return (
    <section className="py-16 bg-gradient-to-r from-uiuc-blue to-uiuc-orange">
      <div className="container-custom">
        <div className="text-center text-white">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-6">
            <Rocket size={32} />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">Partner with a Software Engineer & Data Scientist</h2>

          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Join me in building the next generation of digital solutions—spanning full-stack software, data engineering, and AI-driven platforms. Let's create real impact in education, business, and beyond.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
              <DollarSign className="mx-auto mb-4 text-yellow-300" size={32} />
              <h3 className="text-lg font-semibold mb-2">Tech Investment</h3>
              <p className="text-sm opacity-80">
                Seeking sponsors and investors for scalable software and data science projects
              </p>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
              <Handshake className="mx-auto mb-4 text-green-300" size={32} />
              <h3 className="text-lg font-semibold mb-2">Strategic Collaboration</h3>
              <p className="text-sm opacity-80">
                Collaborate on innovative platforms, SaaS, and AI/data-driven solutions
              </p>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
              <Code className="mx-auto mb-4 text-uiuc-orange" size={32} />
              <h3 className="text-lg font-semibold mb-2">Innovation in Software & Data</h3>
              <p className="text-sm opacity-80">Empowering businesses and learners with modern technology</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center sm:items-stretch w-full">
            <Link
              href="/contact?type=sponsor"
              className="inline-flex items-center px-8 py-4 bg-white text-uiuc-blue font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg w-auto min-w-[220px] justify-center"
            >
              Contact for Sponsorship
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-uiuc-blue transition-all duration-300 transform hover:scale-105 w-auto min-w-[220px] justify-center"
            >
              View My Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
