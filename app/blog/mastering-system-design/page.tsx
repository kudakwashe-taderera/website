'use client'

import { Calendar, Clock, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import SocialShare from '@/components/SocialShare'
import PlaceholderDiagram from '@/components/PlaceholderDiagram'

export default function MasteringSystemDesignBlog() {
  return (
    <article className="pt-16 blog-content">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container-custom py-8">
          <Link 
            href="/blog"
            className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-uiuc-orange dark:hover:text-uiuc-orange mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>

          <div className="flex items-center space-x-4 mb-4">
            <span className="px-3 py-1 bg-uiuc-orange bg-opacity-10 text-uiuc-orange rounded-full text-sm font-medium">
              Architecture
            </span>
            <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
              <Calendar size={16} className="mr-1" />
              January 20, 2024
            </div>
            <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
              <Clock size={16} className="mr-1" />
              18 min read
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Mastering System Design: A Practical Guide
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl leading-relaxed mb-4">
            Essential principles and practices for designing scalable, resilient, and maintainable software systems.
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {['Architecture', 'Scalability', 'Design'].map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-sm rounded"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Author Preview */}
          <div className="flex items-center">
            <Image
              src="/images/avatar.svg"
              alt="Kudakwashe Taderera"
              width={48}
              height={48}
              className="rounded-full bg-gray-100"
            />
            <div className="ml-4">
              <div className="text-sm text-gray-500 dark:text-gray-400">Written by</div>
              <div className="font-medium text-gray-900 dark:text-white">Kudakwashe Taderera</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom py-12">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {/* First Letter Styling */}
            <p className="first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1">
              System design is a crucial skill that distinguishes senior engineers from their peers. It's not just about drawing boxes and arrows—it's about making informed decisions that will impact your application's scalability, reliability, and maintainability for years to come.
            </p>

            <blockquote className="text-xl italic border-l-4 pl-4 my-6">
              "The best architectures emerge from a deep understanding of both business requirements and technical constraints."
            </blockquote>

            <h2>Core Principles of System Design</h2>
            <p>
              Before diving into specific patterns and practices, let's establish the fundamental principles that should guide your system design decisions:
            </p>
            <ul>
              <li>Separation of Concerns</li>
              <li>Single Responsibility Principle</li>
              <li>Design for Scale</li>
              <li>Plan for Failure</li>
              <li>Keep It Simple</li>
            </ul>

            <figure className="my-6">
              <PlaceholderDiagram title="System Design Architecture Overview" />
              <figcaption className="text-center text-sm text-gray-500 dark:text-gray-400 mt-2">
                High-level overview of a well-designed system architecture
              </figcaption>
            </figure>

            <h2>Key Components of Modern System Design</h2>
            <div className="my-6 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Essential Building Blocks</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="p-4 bg-white dark:bg-gray-700 rounded-lg">
                  <h4 className="font-medium text-uiuc-orange">Load Balancers</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Traffic distribution</p>
                </div>
                <div className="p-4 bg-white dark:bg-gray-700 rounded-lg">
                  <h4 className="font-medium text-uiuc-orange">Caching</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Performance optimization</p>
                </div>
                <div className="p-4 bg-white dark:bg-gray-700 rounded-lg">
                  <h4 className="font-medium text-uiuc-orange">Message Queues</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Async processing</p>
                </div>
              </div>
            </div>

            <h2>Scalability Patterns</h2>
            <p>
              Scalability is a key concern in modern system design. Here are essential patterns to consider:
            </p>
            <ol>
              <li>
                <strong>Horizontal Scaling:</strong> Adding more machines to handle increased load.
              </li>
              <li>
                <strong>Vertical Scaling:</strong> Upgrading existing hardware for better performance.
              </li>
              <li>
                <strong>Database Sharding:</strong> Distributing data across multiple databases.
              </li>
              <li>
                <strong>Microservices:</strong> Breaking down monolithic applications.
              </li>
            </ol>

            <h2>Real-World Examples</h2>
            <div className="my-6 space-y-4">
              <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h4 className="text-lg font-semibold mb-4">Case Study: Social Media Platform</h4>
                <ul>
                  <li>Handling millions of concurrent users</li>
                  <li>Real-time message delivery</li>
                  <li>Content delivery optimization</li>
                  <li>Data consistency challenges</li>
                </ul>
              </div>
            </div>

            <h2>Common Pitfalls to Avoid</h2>
            <p>
              Learn from these common mistakes in system design:
            </p>
            <ul>
              <li>Over-engineering from the start</li>
              <li>Ignoring operational complexity</li>
              <li>Not planning for failure</li>
              <li>Premature optimization</li>
            </ul>

            <h2>Best Practices for Success</h2>
            <div className="my-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h4 className="text-xl font-semibold text-uiuc-orange mb-2">Documentation</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Maintain clear, up-to-date documentation of your system architecture
                </p>
              </div>
              <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h4 className="text-xl font-semibold text-uiuc-orange mb-2">Monitoring</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Implement comprehensive monitoring and alerting
                </p>
              </div>
            </div>

            <h2>Conclusion</h2>
            <p>
              Mastering system design is a journey that requires continuous learning and practical experience. Start with the fundamentals, understand the trade-offs, and always design with scalability and maintainability in mind.
            </p>
            
            <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Related Articles</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/blog/building-scalable-edtech" className="text-uiuc-orange hover:text-uiuc-blue">
                    Building Scalable EdTech Platforms
                  </Link>
                </li>
                <li>
                  <Link href="/blog/from-idea-to-mvp" className="text-uiuc-orange hover:text-uiuc-blue">
                    From Idea to MVP: My Entrepreneurial Journey
                  </Link>
                </li>
                <li>
                  <Link href="/blog/future-of-career-development" className="text-uiuc-orange hover:text-uiuc-blue">
                    The Future of Career Development
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Author and Share Section */}
          <footer className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Image
                  src="/images/avatar.svg"
                  alt="Kudakwashe Taderera"
                  width={64}
                  height={64}
                  className="rounded-full bg-gray-100"
                />
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">Kudakwashe Taderera</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Technopreneur | Full Stack Software Engineer | Data Scientist</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Building innovative solutions at the intersection of technology and business
                  </div>
                </div>
              </div>
              <SocialShare title="Mastering System Design: A Practical Guide" />
            </div>
          </footer>
        </div>
      </div>
    </article>
  )
} 