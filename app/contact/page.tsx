"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Mail, MapPin, Clock, ChevronDown, MessageCircle, Send, CheckCircle, Plus, Minus, Phone, Zap, Calendar, User, Briefcase } from "lucide-react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { motion } from "framer-motion"

interface FAQItem {
  question: string
  answer: string | React.ReactNode
}

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

function FAQAccordion({ faq, index, openIndex, setOpenIndex }: { faq: FAQItem; index: number; openIndex: number | null; setOpenIndex: (i: number | null) => void }) {
  const isOpen = openIndex === index;
  return (
    <motion.div 
      className="w-full"
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <button
        onClick={() => setOpenIndex(isOpen ? null : index)}
        className="w-full flex items-center justify-between text-left py-5 px-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-uiuc-orange rounded-lg transition-all hover:bg-gray-50"
      >
        <span className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</span>
        <span className="ml-4 flex-shrink-0">
          {isOpen ? (
            <Minus className="w-6 h-6 text-uiuc-orange" />
          ) : (
            <Plus className="w-6 h-6 text-uiuc-orange" />
          )}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="pb-6 px-6 text-gray-600 leading-relaxed">
          {faq.answer}
        </div>
      </div>
    </motion.div>
  )
}

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})

export default function ContactPage() {
  const searchParams = useSearchParams()
  const serviceType = searchParams?.get("type") || ""
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: serviceType ? `Inquiry about ${serviceType}` : "",
      message: "",
    },
  })

  useEffect(() => {
    if (serviceType) {
      const serviceMap: { [key: string]: string } = {
        fullstack: "Full Stack Development",
        data: "Data Engineering",
        ai: "AI/ML Solutions",
        consulting: "Technical Consulting",
        mobile: "Mobile Development",
        cloud: "Cloud Architecture",
      }
      form.setValue('subject', `Inquiry about ${serviceMap[serviceType] || serviceType}`)
    }
  }, [serviceType, form])

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch("https://formspree.io/f/mzzgbbqn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. I'll get back to you within 24 hours.",
          action: (
            <Button 
              variant="ghost" 
              className="text-uiuc-orange hover:text-uiuc-orange/80"
              onClick={() => form.reset()}
            >
              Send another
            </Button>
          ),
        })
        form.reset()
      } else {
        throw new Error("Failed to send message")
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later or contact me directly at my email.",
        variant: "destructive",
      })
    }
  }

  const faqs: FAQItem[] = [
    {
      question: "What services does CodeXa offer?",
      answer: (
        <div className="space-y-2">
          <p>CodeXa is a software development and data science company offering:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Full-stack web and mobile application development</li>
            <li>Data engineering and analytics platforms</li>
            <li>AI/ML integration and implementation</li>
            <li>Business process automation</li>
            <li>Technical consultation and system architecture</li>
          </ul>
        </div>
      ),
    },
    {
      question: "Who leads CodeXa?",
      answer: "CodeXa is founded and led by Kudakwashe Taderera, an expert in full-stack development and data science with 8+ years of experience.",
    },
    {
      question: "How long has CodeXa been in business?",
      answer: "CodeXa was established in 2016 and has been delivering high-quality software and data solutions to clients worldwide ever since.",
    },
    {
      question: "What technologies and frameworks do you specialize in?",
      answer: (
        <div className="space-y-2">
          <p>I work with a comprehensive stack of modern technologies:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Frontend: React, Next.js, TypeScript, Tailwind CSS, Material-UI</li>
            <li>Backend: Node.js, Python (Django, FastAPI), Java Spring Boot</li>
            <li>Databases: PostgreSQL, MongoDB, Redis, Elasticsearch</li>
            <li>Cloud: AWS, Google Cloud, Azure, Vercel, Digital Ocean</li>
            <li>AI/ML: TensorFlow, PyTorch, scikit-learn, Hugging Face</li>
            <li>DevOps: Docker, Kubernetes, CI/CD (GitHub Actions, Jenkins)</li>
          </ul>
        </div>
      ),
    },
    {
      question: "How does your development process work?",
      answer: (
        <div className="space-y-2">
          <p>My development process follows industry best practices:</p>
          <ol className="list-decimal pl-6 space-y-1">
            <li>Initial Consultation & Requirements Gathering</li>
            <li>Project Planning & Architecture Design</li>
            <li>Agile Development with 2-week Sprints</li>
            <li>Regular Client Updates & Feedback Integration</li>
            <li>Thorough Testing & Quality Assurance</li>
            <li>Deployment & Post-Launch Support</li>
          </ol>
          <p className="mt-2">
            I emphasize transparent communication and agile methodologies to ensure project success.
          </p>
        </div>
      ),
    },
    {
      question: "What makes CodeXa different from other technology companies?",
      answer: (
        <div className="space-y-2">
          <p>CodeXa stands out through our:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Focus on educational technology and career development solutions</li>
            <li>Integration of cutting-edge AI/ML technologies in practical applications</li>
            <li>Expertise in both technical implementation and business strategy</li>
            <li>Commitment to scalable, maintainable, and future-proof solutions</li>
            <li>Strong emphasis on user experience and accessibility</li>
            <li>Dedication to fostering innovation in the African tech ecosystem</li>
          </ul>
        </div>
      ),
    },
    {
      question: "Do you work with international clients?",
      answer: "Yes! I work with clients globally, with a particular focus on the United States, Zimbabwe, and South Africa. I have experience managing remote projects effectively across different time zones and cultural contexts. My communication and project management processes are designed to ensure smooth collaboration regardless of geographical location.",
    },
    {
      question: "What are your typical project timelines and pricing?",
      answer: (
        <div className="space-y-2">
          <p>Project timelines and pricing vary based on scope and complexity:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>MVP Development: 4-8 weeks</li>
            <li>Full-scale Applications: 8-16 weeks</li>
            <li>Enterprise Solutions: 16+ weeks</li>
          </ul>
          <p className="mt-2">
            I offer flexible engagement models including project-based, retainer, and consulting arrangements. Each project is quoted individually based on requirements, timeline, and complexity.
          </p>
        </div>
      ),
    },
    {
      question: "How do you handle project maintenance and support?",
      answer: "I offer comprehensive maintenance and support packages that include: regular updates, security patches, performance monitoring, bug fixes, and feature enhancements. Support response times are typically within 24 hours, and critical issues are addressed immediately. We can customize a maintenance plan based on your specific needs and budget.",
    },
    {
      question: "Can you help with existing projects or legacy system modernization?",
      answer: (
        <div className="space-y-2">
          <p>Absolutely! I specialize in:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Legacy system assessment and modernization planning</li>
            <li>Gradual migration to modern technologies</li>
            <li>Code refactoring and optimization</li>
            <li>Integration of new features with existing systems</li>
            <li>Performance optimization and scaling</li>
            <li>Security audits and improvements</li>
          </ul>
        </div>
      ),
    },
    {
      question: "What industries do you have experience in?",
      answer: (
        <div className="space-y-2">
          <p>I have extensive experience across various industries:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Education Technology (Learning Management Systems, Career Portals)</li>
            <li>Real Estate (Property Management, Market Analysis)</li>
            <li>Financial Services (Banking, Payment Systems)</li>
            <li>Healthcare (Patient Management, Analytics)</li>
            <li>E-commerce (Online Stores, Marketplace Platforms)</li>
            <li>Telecommunications (Data Management, Customer Portals)</li>
          </ul>
        </div>
      ),
    },
    // Additional FAQs for a comprehensive knowledge base
    {
      question: "Can you sign an NDA (Non-Disclosure Agreement)?",
      answer: "Yes, I am happy to sign an NDA to protect your confidential information and project details.",
    },
    {
      question: "Do you offer free consultations?",
      answer: "Yes, I offer a free 30-minute consultation to discuss your project needs and how I can help.",
    },
    {
      question: "What is your preferred communication method?",
      answer: "I am available via email, WhatsApp, Zoom, and Google Meet. I adapt to your preferred communication channel.",
    },
    {
      question: "How do you ensure project security and data privacy?",
      answer: (
        <div className="space-y-2">
          <p>I follow industry best practices for security and privacy, including:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Secure coding standards and regular code reviews</li>
            <li>Data encryption in transit and at rest</li>
            <li>Access controls and authentication</li>
            <li>Compliance with GDPR and other relevant regulations</li>
          </ul>
        </div>
      ),
    },
    {
      question: "Can you work with my in-house team or other vendors?",
      answer: "Absolutely! I am experienced in collaborating with in-house teams, agencies, and third-party vendors to ensure project success.",
    },
    {
      question: "Do you provide training or documentation?",
      answer: "Yes, I provide detailed documentation and can offer training sessions for your team to ensure smooth handover and adoption.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "I accept bank transfers, PayPal, and other secure online payment methods. Payment terms are discussed and agreed upon before project start.",
    },
    {
      question: "How do you handle urgent requests or support?",
      answer: "For urgent issues, I offer priority support and aim to respond within a few hours. Critical issues are addressed immediately.",
    },
    {
      question: "Can you help with cloud migration or DevOps?",
      answer: "Yes, I have experience with AWS, Azure, Google Cloud, Docker, Kubernetes, and CI/CD pipelines for cloud migration and DevOps automation.",
    },
    {
      question: "Do you offer discounts for startups or non-profits?",
      answer: "I am open to discussing special rates for startups, non-profits, and educational organizations. Let's talk about your needs!",
    },
    {
      question: "What is your project onboarding process?",
      answer: (
        <div className="space-y-2">
          <ol className="list-decimal pl-6 space-y-1">
            <li>Introductory call and requirements gathering</li>
            <li>Proposal and scope definition</li>
            <li>Agreement and kickoff</li>
            <li>Project planning and timeline setup</li>
            <li>Development and regular updates</li>
            <li>Testing, delivery, and support</li>
          </ol>
        </div>
      ),
    },
    {
      question: "Can you help with UI/UX design?",
      answer: "Yes, I offer UI/UX design services including wireframes, prototypes, and user testing to ensure a great user experience.",
    },
    {
      question: "Do you provide SEO optimization?",
      answer: "Yes, I follow SEO best practices for all web projects and can provide advanced SEO optimization upon request.",
    },
    {
      question: "How do you handle project feedback and revisions?",
      answer: "I encourage regular feedback and offer multiple revision rounds to ensure the final product meets your expectations.",
    },
    {
      question: "What is your cancellation or refund policy?",
      answer: "Project cancellation and refund terms are discussed and agreed upon in the contract before work begins.",
    },
    {
      question: "Can you help with mobile app development?",
      answer: "Yes, I develop cross-platform mobile apps using React Native and other modern frameworks.",
    },
    {
      question: "Do you offer ongoing consulting or retainer services?",
      answer: "Yes, I offer ongoing consulting and retainer packages for long-term support and strategy.",
    },
    {
      question: "How do you ensure accessibility in your projects?",
      answer: "I follow accessibility best practices (WCAG) to ensure all users can access and use your digital products.",
    },
    {
      question: "Can you help with branding and marketing?",
      answer: "Yes, I offer branding, logo design, and digital marketing services to help you grow your business online.",
    },
    {
      question: "What is your preferred project management tool?",
      answer: "I use tools like Trello, Jira, Asana, and Notion, but can adapt to your team's preferred platform.",
    },
    {
      question: "How do you handle time zone differences?",
      answer: "I am flexible with meeting times and use asynchronous communication to ensure smooth collaboration across time zones.",
    },
    {
      question: "Can you provide references or case studies?",
      answer: "Yes, I am happy to provide references and case studies upon request.",
    },
    {
      question: "What is your code review and quality assurance process?",
      answer: (
        <div className="space-y-2">
          <ul className="list-disc pl-6 space-y-1">
            <li>Peer code reviews and automated testing</li>
            <li>Continuous integration and deployment</li>
            <li>Manual QA and user acceptance testing</li>
            <li>Performance and security audits</li>
          </ul>
        </div>
      ),
    },
    {
      question: "Do you offer white-label or partnership opportunities?",
      answer: "Yes, I am open to white-label development and partnership opportunities with agencies and consultants.",
    },
    {
      question: "How do you keep up with the latest technology trends?",
      answer: "I invest in continuous learning, attend industry conferences, and participate in online communities to stay ahead of the curve.",
    },
    {
      question: "Can you help with emergency bug fixes?",
      answer: "Yes, I offer emergency support for critical issues and can prioritize urgent bug fixes as needed.",
    },
    {
      question: "What languages do you speak?",
      answer: "I am fluent in English, Zulu, Xhosa, Afrikaans, Northern Sotho (Sepedi), Tswana, Southern Sotho (Sesotho), Venda, Ndebele, Shona, and many more.",
    },
    {
      question: "How do you ensure project transparency?",
      answer: "I provide regular progress updates, clear documentation, and open communication throughout every project.",
    },
    {
      question: "Do you offer hosting or domain registration?",
      answer: "Yes, I can assist with domain registration, hosting setup, and ongoing management for your website or app.",
    },
    {
      question: "Can you help with grant or funding applications?",
      answer: "Yes, I have experience supporting clients with technical documentation and proposals for grants and funding.",
    },
    {
      question: "What is your approach to project scalability?",
      answer: "I design solutions with scalability in mind, using modular architectures and cloud-native technologies.",
    },
    {
      question: "How do you handle confidential or sensitive projects?",
      answer: "I treat all client information with strict confidentiality and am happy to sign NDAs as needed.",
    },
    {
      question: "Do you offer post-launch analytics and reporting?",
      answer: "Yes, I provide analytics integration and post-launch reporting to help you track success and optimize your product.",
    },
    {
      question: "Can you help with internationalization (i18n)?",
      answer: "Yes, I can build multilingual and internationalized applications to reach a global audience.",
    },
    {
      question: "What is your availability for new projects?",
      answer: "I am currently accepting new projects and would love to discuss your needs!",
    },
  ];

  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "Use the contact form for secure communication",
      color: "text-uiuc-orange",
      bg: "bg-uiuc-orange/10"
    },
    {
      icon: MapPin,
      title: "Location",
      description: "Urbana-Champaign, Illinois, USA",
      color: "text-uiuc-blue",
      bg: "bg-uiuc-blue/10"
    },
    {
      icon: Clock,
      title: "Response Time",
      description: "Typically within 24 hours",
      color: "text-uiuc-orange",
      bg: "bg-uiuc-orange/10"
    }
  ]

  const quickActions = [
    {
      title: "Request Quote",
      description: "Get a customized estimate",
      icon: Zap,
      href: "/contact?type=quote",
      color: "text-uiuc-orange"
    },
    {
      title: "Schedule Call",
      description: "Book a consultation",
      icon: Calendar,
      href: "/contact?type=consultation",
      color: "text-uiuc-blue"
    },
    {
      title: "View Services",
      description: "Explore offerings",
      icon: Briefcase,
      href: "/services",
      color: "text-uiuc-orange"
    }
  ]

  return (
    <div className="pt-20">
      {/* Header */}
      <section id="contact-form" className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block bg-uiuc-orange/10 text-uiuc-orange text-sm font-medium px-4 py-1.5 rounded-full mb-4">
              Contact CodeXa
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Let's Build Something <span className="text-uiuc-orange">Exceptional</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-uiuc-orange to-uiuc-blue mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              As the sole founder and technical expert at CodeXa, I'm ready to help transform your ideas into high-performance digital solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
                  <User className="text-uiuc-orange" size={24} />
                  Contact Information
                </h2>

                <div className="space-y-6">
                  {contactMethods.map((method, index) => (
                    <div 
                      key={index}
                      className="flex items-start space-x-4 p-4 hover:bg-gray-50 rounded-xl transition-all duration-200"
                    >
                      <div className={`flex-shrink-0 w-12 h-12 ${method.bg} rounded-xl flex items-center justify-center`}>
                        <method.icon className={method.color} size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{method.title}</h3>
                        <p className="text-gray-600 mt-1">{method.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {quickActions.map((action, index) => (
                      <a
                        key={index}
                        href={action.href}
                        className="bg-white border border-gray-200 rounded-lg p-4 hover:border-uiuc-orange/50 hover:shadow-md transition-all duration-200 group"
                      >
                        <div className={`w-10 h-10 ${action.color} bg-opacity-10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-uiuc-orange/20 transition-colors`}>
                          <action.icon className="w-5 h-5" />
                        </div>
                        <h4 className="font-medium text-gray-900">{action.title}</h4>
                        <p className="text-sm text-gray-500 mt-1">{action.description}</p>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#13294B] to-[#13294B]/90 p-8 rounded-2xl text-white">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <CheckCircle size={24} className="text-uiuc-orange" />
                  What I Specialize In
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle size={18} className="text-uiuc-orange flex-shrink-0 mt-0.5" />
                    <span>End-to-end web application development</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle size={18} className="text-uiuc-orange flex-shrink-0 mt-0.5" />
                    <span>Data engineering and business intelligence solutions</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle size={18} className="text-uiuc-orange flex-shrink-0 mt-0.5" />
                    <span>AI/ML integration for practical business applications</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle size={18} className="text-uiuc-orange flex-shrink-0 mt-0.5" />
                    <span>Technical consultation and system architecture</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle size={18} className="text-uiuc-orange flex-shrink-0 mt-0.5" />
                    <span>Legacy system modernization and optimization</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <MessageCircle className="text-uiuc-orange" size={24} />
                  Send a Direct Message
                </h2>
                <p className="text-gray-600">Fill out this form and I'll respond within 24 hours.</p>
              </div>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700">Full Name *</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="John Doe" 
                              {...field} 
                              className="h-12 px-4 border-gray-300 focus:border-uiuc-orange focus:ring-2 focus:ring-uiuc-orange/20 rounded-lg transition-all duration-200 placeholder-gray-400 placeholder:opacity-70 text-gray-700"
                            />
                          </FormControl>
                          <FormMessage className="text-red-500 text-sm" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700">Email *</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="john@example.com" 
                              type="email" 
                              {...field} 
                              className="h-12 px-4 border-gray-300 focus:border-uiuc-orange focus:ring-2 focus:ring-uiuc-orange/20 rounded-lg transition-all duration-200 placeholder-gray-400 placeholder:opacity-70 text-gray-700"
                            />
                          </FormControl>
                          <FormMessage className="text-red-500 text-sm" />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700">Subject *</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="How can I help you?"
                            {...field}
                            value={field.value || ''}
                            className="h-12 px-4 border-gray-300 focus:border-uiuc-orange focus:ring-2 focus:ring-uiuc-orange/20 rounded-lg transition-all duration-200 placeholder-gray-400 placeholder:opacity-70 text-gray-700"
                          />
                        </FormControl>
                        <FormMessage className="text-red-500 text-sm" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700">Message *</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell me about your project goals, timeline, and any specific requirements..."
                            className="min-h-[180px] p-4 border-gray-300 focus:border-uiuc-orange focus:ring-2 focus:ring-uiuc-orange/20 rounded-lg transition-all duration-200 placeholder-gray-400 placeholder:opacity-70 text-gray-700 resize-y"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-red-500 text-sm" />
                      </FormItem>
                    )}
                  />

                  <div className="pt-2">
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-uiuc-orange to-uiuc-orange/90 hover:from-uiuc-orange hover:to-uiuc-orange/80 h-14 text-lg font-medium shadow-md hover:shadow-lg transition-all duration-200 rounded-lg group"
                    >
                      <span className="relative">
                        <span className="absolute -inset-1 bg-white/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                        <span className="relative flex items-center justify-center gap-2">
                          <Send className="h-5 w-5" /> 
                          Send Message
                        </span>
                      </span>
                    </Button>
                  </div>
                </form>
              </Form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block bg-uiuc-orange/10 text-uiuc-orange text-sm font-medium px-4 py-1.5 rounded-full mb-4">
              Knowledge Base
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-uiuc-orange to-uiuc-blue mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Answers to common questions about my services, process, and expertise.
            </p>
          </motion.div>

          <motion.div 
            className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`${index !== faqs.length - 1 ? 'border-b border-gray-200' : ''}`}
              >
                <FAQAccordion faq={faq} index={index} openIndex={openFAQ} setOpenIndex={setOpenFAQ} />
              </div>
            ))}
          </motion.div>
          
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a 
              href="#contact-form" 
              className="inline-flex items-center px-6 py-3 bg-uiuc-orange text-white rounded-lg font-medium shadow-md hover:bg-uiuc-orange/90 hover:shadow-lg transition-all duration-200"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Still have questions? Contact me directly
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}