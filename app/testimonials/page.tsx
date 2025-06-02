import { Star, Quote, Linkedin, Twitter } from "lucide-react"

export default function TestimonialsPage() {
  const testimonials = [
    {
      id: 1,
      name: "Tendai Moyo",
      role: "Chief Technology Officer",
      company: "Econet Wireless Zimbabwe",
      image: "/images/avatar.svg",
      rating: 5,
      text: "Kudakwashe delivered an exceptional mobile banking platform that has transformed how we serve our rural communities. His technical expertise in full-stack development and understanding of the African market made him an invaluable partner. The platform's success has significantly increased financial inclusion in Zimbabwe.",
      project: "Mobile Banking Platform",
      linkedin: "https://linkedin.com/in/tendai-moyo",
    },
    {
      id: 2,
      name: "Thabo Nkosi",
      role: "Head of Digital Innovation",
      company: "Standard Bank South Africa",
      image: "/images/avatar.svg",
      rating: 5,
      text: "Working with Kudakwashe on our risk management system was a game-changer. His data engineering expertise and attention to security compliance helped us build a robust platform that serves millions of customers across Southern Africa. The system's analytics capabilities have revolutionized our risk assessment process.",
      project: "Risk Management System",
      linkedin: "https://linkedin.com/in/thabo-nkosi",
      twitter: "https://twitter.com/thabonkosi",
    },
    {
      id: 3,
      name: "Rumbidzai Dziva",
      role: "Founder & CEO",
      company: "EduTech Zimbabwe",
      image: "/images/avatar.svg",
      rating: 5,
      text: "Kudakwashe's innovative approach to educational technology is remarkable. He built us a comprehensive learning management system that has helped thousands of students access quality education, even in remote areas. The offline capabilities and mobile-first design have been crucial for our success in Zimbabwe.",
      project: "Learning Management System",
      linkedin: "https://linkedin.com/in/rumbidzai-dziva",
      twitter: "https://twitter.com/rumbidzaidziva",
    },
    {
      id: 4,
      name: "Mandla Thabethe",
      role: "Director of Operations",
      company: "Shoprite Holdings SA",
      image: "/images/avatar.svg",
      rating: 5,
      text: "The e-commerce platform Kudakwashe developed for our African market has significantly improved our digital presence. His understanding of local consumer behavior and technical excellence delivered exactly what we needed. The platform's performance during high-traffic periods is exceptional.",
      project: "E-commerce Platform",
      linkedin: "https://linkedin.com/in/mandla-thabethe",
    },
    {
      id: 5,
      name: "Tatenda Makoni",
      role: "Chief Innovation Officer",
      company: "CBZ Bank Zimbabwe",
      image: "/images/avatar.svg",
      rating: 5,
      text: "Kudakwashe's work on our digital banking transformation has been outstanding. The integration of mobile money services and traditional banking features has given us a competitive edge in the market. His expertise in fintech solutions is truly world-class.",
      project: "Digital Banking System",
      linkedin: "https://linkedin.com/in/tatenda-makoni",
    },
    {
      id: 6,
      name: "Nomvula Dlamini",
      role: "Technology Director",
      company: "Discovery Limited SA",
      image: "/images/avatar.svg",
      rating: 5,
      text: "The health analytics platform Kudakwashe built for us has transformed how we process and analyze patient data. The system's machine learning capabilities and real-time analytics have improved our service delivery significantly. His expertise in healthcare technology is exceptional.",
      project: "Health Analytics Platform",
      linkedin: "https://linkedin.com/in/nomvula-dlamini",
      twitter: "https://twitter.com/nomvuladlamini",
    },
  ]

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Client <span className="gradient-text">Testimonials</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Hear from satisfied clients and collaborators who have experienced the quality and impact of my work
              firsthand.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-uiuc-orange mb-2">50+</div>
              <div className="text-gray-600 dark:text-gray-400">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-uiuc-orange mb-2">4.9/5</div>
              <div className="text-gray-600 dark:text-gray-400">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-uiuc-orange mb-2">100%</div>
              <div className="text-gray-600 dark:text-gray-400">Project Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-uiuc-orange mb-2">95%</div>
              <div className="text-gray-600 dark:text-gray-400">Client Retention</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-100 dark:border-gray-700 card-hover relative"
              >
                <Quote className="absolute top-6 right-6 text-uiuc-orange opacity-20" size={32} />

                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </blockquote>

                {/* Project */}
                <div className="mb-4">
                  <span className="px-3 py-1 bg-uiuc-orange bg-opacity-10 text-uiuc-orange rounded-full text-sm font-medium">
                    {testimonial.project}
                  </span>
                </div>

                {/* Client Info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</div>
                      <div className="text-gray-600 dark:text-gray-400 text-sm">{testimonial.role}</div>
                      <div className="text-uiuc-orange text-sm font-medium">{testimonial.company}</div>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex space-x-2">
                    {testimonial.linkedin && (
                      <a
                        href={testimonial.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
                      >
                        <Linkedin size={16} />
                      </a>
                    )}
                    {testimonial.twitter && (
                      <a
                        href={testimonial.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-400 hover:text-blue-400 transition-colors"
                      >
                        <Twitter size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-uiuc-blue to-uiuc-orange">
        <div className="container-custom">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Join These Success Stories?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Let's work together to build something amazing. I'm committed to delivering exceptional results that
              exceed your expectations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-uiuc-blue font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Start Your Project
              </a>
              <a
                href="/projects"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-uiuc-blue transition-all duration-300 transform hover:scale-105"
              >
                View My Work
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
