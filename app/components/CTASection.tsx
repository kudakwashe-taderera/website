import Link from "next/link"
import { ArrowRight, MessageCircle } from "lucide-react"

export default function CTASection() {
  return (
    <section className="section-padding bg-gradient-to-r from-[#13294B] to-[#FF552E]">
      <div className="container-custom">
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Something Amazing?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Let's collaborate on your next project. Whether you need a full-stack application, data engineering
            solution, or technical consultation, I'm here to help bring your vision to life.
          </p>

          <div className="flex flex-row flex-wrap gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-5 py-2.5 sm:px-6 sm:py-3 bg-white text-[#13294B] text-sm sm:text-base font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap"
            >
              <MessageCircle className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">Start a Conversation</span>
              <span className="sm:hidden">Contact</span>
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center px-5 py-2.5 sm:px-6 sm:py-3 border-2 border-white text-white text-sm sm:text-base font-semibold rounded-full hover:bg-white hover:text-[#13294B] transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
            >
              Explore My Work
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold mb-2">Fast Delivery</div>
              <div className="opacity-80">Quality solutions delivered on time</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2">Scalable Architecture</div>
              <div className="opacity-80">Built for growth and performance</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2">Ongoing Support</div>
              <div className="opacity-80">Continuous maintenance and updates</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
