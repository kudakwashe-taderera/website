import Link from "next/link"
import { Rocket, DollarSign, Handshake, ArrowRight } from "lucide-react"

export default function SponsorshipCallout() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600">
      <div className="container-custom">
        <div className="text-center text-white">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-6">
            <Rocket size={32} />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">Seeking Sponsorships for Innovative Projects</h2>

          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Partner with me to build the next generation of educational technology, career development platforms, and
            data-driven solutions that make a real impact.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
              <DollarSign className="mx-auto mb-4 text-yellow-300" size={32} />
              <h3 className="text-lg font-semibold mb-2">Funding Opportunities</h3>
              <p className="text-sm opacity-80">
                Looking for investors and sponsors to scale innovative EdTech solutions
              </p>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
              <Handshake className="mx-auto mb-4 text-green-300" size={32} />
              <h3 className="text-lg font-semibold mb-2">Strategic Partnerships</h3>
              <p className="text-sm opacity-80">
                Collaborate on projects that transform education and career development
              </p>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
              <Rocket className="mx-auto mb-4 text-blue-300" size={32} />
              <h3 className="text-lg font-semibold mb-2">Innovation Focus</h3>
              <p className="text-sm opacity-80">Building scalable platforms with proven market demand and impact</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?type=sponsor"
              className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Contact for Sponsorship
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              View My Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
