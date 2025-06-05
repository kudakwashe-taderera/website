"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Mail, MapPin, Clock, ChevronDown, MessageCircle, Send, CheckCircle, Plus, Minus } from "lucide-react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"

interface FAQItem {
  question: string
  answer: string | React.ReactNode
}

function FAQAccordion({ faq, index }: { faq: FAQItem; index: number }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-start justify-between text-left"
      >
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-uiuc-blue transition-colors pr-4">
          {faq.question}
        </h3>
        <span className={`flex-shrink-0 ml-4 mt-1 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronDown className="w-5 h-5 text-uiuc-orange" />
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="pb-2 text-gray-600 leading-relaxed">
          {faq.answer}
        </div>
      </div>
    </div>
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
          title: "Message sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        })
        form.reset()
      } else {
        throw new Error("Failed to send message")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      })
    }
  }

  const faqs: FAQItem[] = [
    {
      question: "What services does NeXTStep offer?",
      answer: (
        <div className="space-y-2">
          <p>NeXTStep is a comprehensive technology solutions provider offering:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Full-stack web and mobile application development</li>
            <li>Data engineering and analytics platforms</li>
            <li>AI/ML integration and implementation</li>
            <li>Career development and educational technology solutions</li>
            <li>Real estate technology innovations</li>
            <li>Technical consultation and system architecture</li>
          </ul>
        </div>
      ),
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
      question: "What makes NeXTStep different from other technology companies?",
      answer: (
        <div className="space-y-2">
          <p>NeXTStep stands out through our:</p>
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
            I offer flexible engagement models including project-based, retainer, and consulting arrangements. Each project
            is quoted individually based on requirements, timeline, and complexity.
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
  ]

  return (
    <div className="pt-20">
      {/* Header */}
      <section id="contact-form" className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Let's <span className="gradient-text">Connect</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to discuss your next project? I'd love to hear about your ideas and explore how we can work together
              to bring them to life.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h2>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4 p-4 hover:bg-gray-50 rounded-xl transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 bg-uiuc-orange/10 rounded-xl flex items-center justify-center">
                      <Mail className="text-uiuc-orange" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <p className="text-gray-600 mt-1">Use the contact form to reach me securely</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 hover:bg-gray-50 rounded-xl transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 bg-uiuc-blue/10 rounded-xl flex items-center justify-center">
                      <MapPin className="text-uiuc-blue" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Location</h3>
                      <p className="text-gray-600 mt-1">Urbana-Champaign, Illinois, USA</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 hover:bg-gray-50 rounded-xl transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 bg-uiuc-orange/10 rounded-xl flex items-center justify-center">
                      <Clock className="text-uiuc-orange" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Response Time</h3>
                      <p className="text-gray-600 mt-1">Usually within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#13294B] to-[#FF552E] p-6 rounded-xl text-white">
                <h3 className="text-xl font-bold mb-4">What I Can Help With</h3>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle size={16} />
                    <span>Full-stack web application development</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle size={16} />
                    <span>Data engineering and analytics platforms</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle size={16} />
                    <span>AI/ML integration and implementation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle size={16} />
                    <span>Technical consultation and architecture</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle size={16} />
                    <span>System optimization and scaling</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Send a Message</h2>
              <p className="text-gray-600 mb-8">Fill out the form and I'll get back to you as soon as possible.</p>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700">Full Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="John Doe" 
                              {...field} 
                              className="h-12 px-4 border-gray-300 focus:border-uiuc-orange focus:ring-2 focus:ring-uiuc-orange/20 rounded-lg transition-all duration-200 placeholder-gray-400 text-gray-700"
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
                          <FormLabel className="text-gray-700">Email</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="john@example.com" 
                              type="email" 
                              {...field} 
                              className="h-12 px-4 border-gray-300 focus:border-uiuc-orange focus:ring-2 focus:ring-uiuc-orange/20 rounded-lg transition-all duration-200 placeholder-gray-400 text-gray-700"
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
                        <FormLabel className="text-gray-700">Subject</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="How can I help you?"
                            {...field}
                            value={field.value || ''}
                            className="h-12 px-4 border-gray-300 focus:border-uiuc-orange focus:ring-2 focus:ring-uiuc-orange/20 rounded-lg transition-all duration-200 placeholder-gray-400 text-gray-700"
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
                        <FormLabel className="text-gray-700">Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell me about your project..."
                            className="min-h-[150px] p-4 border-gray-300 focus:border-uiuc-orange focus:ring-2 focus:ring-uiuc-orange/20 rounded-lg transition-all duration-200 placeholder-gray-400 text-gray-700 resize-y"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-red-500 text-sm" />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-uiuc-orange to-uiuc-orange/90 hover:from-uiuc-orange/90 hover:to-uiuc-orange/80 h-14 text-lg font-medium shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 rounded-lg"
                  >
                    <Send className="mr-2 h-5 w-5" /> Send Message
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block bg-uiuc-orange/10 text-uiuc-orange text-sm font-medium px-4 py-1.5 rounded-full mb-4">
              Common Questions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-uiuc-orange to-uiuc-blue mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about my services, process, and more. Can't find what you're looking for? Feel free to reach out!
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 hover:border-uiuc-orange/30"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-uiuc-orange/10 to-uiuc-blue/10 flex items-center justify-center mt-1 group-hover:from-uiuc-orange/20 group-hover:to-uiuc-blue/20 transition-all duration-300">
                    <span className="bg-gradient-to-r from-uiuc-orange to-uiuc-blue bg-clip-text text-transparent font-bold">Q{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <FAQAccordion faq={faq} index={index} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-3 bg-white px-6 py-3 rounded-full shadow-sm border border-gray-200 hover:shadow-md hover:border-uiuc-orange/50 transition-all duration-300">
              <MessageCircle className="w-5 h-5 text-uiuc-orange flex-shrink-0" />
              <p className="text-gray-700">
                Still have questions?{" "}
                <a 
                  href="#contact-form" 
                  className="text-uiuc-blue hover:underline font-medium hover:text-uiuc-orange transition-colors"
                >
                  Contact me directly
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
