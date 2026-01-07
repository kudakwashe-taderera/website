import { ArrowRight, Calendar, Mail, Code, Database, Cpu, Layers, Shield, Terminal } from "lucide-react"
import { motion } from "framer-motion"
import ParticlesBackground from "./ParticlesBackground"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white">
      {/* Subtle Particles Background */}
      <div className="absolute inset-0 w-full h-full z-0 opacity-15 pointer-events-none">
        <ParticlesBackground />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center"
          >
            {/* Profile */}
            <div className="mb-12">
              <motion.div 
                className="relative mb-8 flex justify-center"
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <img 
                  src="/Kudash.jpeg" 
                  alt="Kudakwashe Taderera" 
                  className="w-40 h-40 rounded-full border-4 border-uiuc-orange object-cover shadow-lg mx-auto"
                />
                <div className="absolute left-1/2 -bottom-4 transform -translate-x-1/2 bg-white px-4 py-1 rounded-full shadow-sm border border-gray-200 flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-xs font-medium text-gray-700">Available</span>
                </div>
              </motion.div>

              <motion.h1 
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Kudakwashe <span className="text-uiuc-orange">Taderera</span>
              </motion.h1>

              <motion.div
                className="text-2xl text-uiuc-blue font-semibold mb-6 flex items-center justify-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Terminal className="w-6 h-6" />
                <span>Full-Stack Engineer</span>
                <span className="text-gray-300">|</span>
                <Shield className="w-6 h-6" />
                <span>Cyber Specialist</span>
              </motion.div>
            </div>

            {/* Introduction */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
                As the founder and principal engineer at <span className="font-semibold text-uiuc-blue">CodeXa</span>, 
                I architect and build high-performance software solutions that drive business growth. 
                With 8+ years of experience, I specialize in full-stack engineering, delivering scalable web applications, 
                and implementing robust cybersecurity solutions to protect digital assets and infrastructure.
              </p>

              <div className="flex flex-row flex-wrap gap-3 justify-center">
                <a 
                  href="/contact" 
                  className="inline-flex items-center justify-center px-5 py-2.5 sm:px-6 sm:py-3 bg-uiuc-orange text-white text-sm sm:text-base font-medium rounded-full shadow-sm hover:shadow-md transition-all hover:bg-orange-600 whitespace-nowrap"
                >
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  <span className="hidden sm:inline">Schedule Consultation</span>
                  <span className="sm:hidden">Schedule</span>
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a 
                  href="/projects" 
                  className="inline-flex items-center justify-center px-5 py-2.5 sm:px-6 sm:py-3 bg-white border border-gray-300 text-gray-700 text-sm sm:text-base font-medium rounded-full shadow-sm hover:shadow-md transition-all hover:border-uiuc-orange hover:text-uiuc-orange whitespace-nowrap"
                >
                  View My Work
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </div>
            </motion.div>

            {/* Expertise Highlights */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              {[
                { icon: <Code className="w-8 h-8 text-uiuc-orange" />, title: "Web Development", desc: "React, Next.js, Node" },
                { icon: <Database className="w-8 h-8 text-uiuc-blue" />, title: "Data Engineering", desc: "ETL, Analytics, BI" },
                { icon: <Cpu className="w-8 h-8 text-uiuc-orange" />, title: "Cloud Architecture", desc: "AWS, GCP, Azure" },
                { icon: <Layers className="w-8 h-8 text-uiuc-blue" />, title: "System Design", desc: "Scalable Solutions" }
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-14 h-14 bg-uiuc-orange/10 rounded-full flex items-center justify-center mb-4">
                      {item.icon}
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}