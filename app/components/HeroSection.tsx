import ParticlesBackground from "./ParticlesBackground"

export default function HeroSection() {
  return (
    <section className="relative section-padding bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-0">
        <ParticlesBackground />
      </div>
      <div className="container-custom text-center py-32 relative z-10 flex flex-col items-center justify-center min-h-[60vh]">
        <img src="/Kudash.jpg" alt="Kudakwashe Taderera" className="w-32 h-32 rounded-full border-4 border-uiuc-orange shadow-lg mb-6" />
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 drop-shadow-lg">
          Kudakwashe Taderera
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 mb-4">
          <span className="inline-block bg-uiuc-orange/10 text-uiuc-orange text-lg font-semibold px-5 py-2 rounded-full shadow-sm">Personal Website</span>
          <span className="inline-block bg-uiuc-blue/10 text-uiuc-blue text-lg font-semibold px-5 py-2 rounded-full shadow-sm">Founder of CodeXa</span>
        </div>
        <h2 className="text-2xl md:text-3xl text-uiuc-orange mb-6 font-semibold">
          Expert in Full-Stack Development & Data Science
        </h2>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
          I am the sole founder and principal engineer at CodeXa, established in 2016. With 8+ years of experience, I deliver high-quality, scalable software and data solutions for businesses worldwide.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
          <a href="/contact" className="btn-primary text-lg px-8 py-4 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-200">
            Book a Consultation
          </a>
          <a href="/contact" className="btn-secondary text-lg px-8 py-4 rounded-lg font-semibold border border-uiuc-orange text-uiuc-orange hover:bg-uiuc-orange hover:text-white transition-all duration-200">
            Request a Quote
          </a>
        </div>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-8">
          <div className="text-gray-600 text-lg">
            <span className="font-bold text-gray-900">Established 2016</span> &bull; <span>Trusted by business clients</span>
          </div>
          <div className="text-gray-600 text-lg">
            <span className="font-bold text-gray-900">Sole Founder</span> &bull; <span>Expert in Full-Stack & Data Science</span>
          </div>
        </div>
      </div>
    </section>
  )
}
