'use client'

import { Calendar, Clock, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import SocialShare from '@/components/SocialShare'
import PlaceholderDiagram from '@/components/PlaceholderDiagram'

export default function BuildingScalableEdTechBlog() {
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
              Technology
            </span>
            <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
              <Calendar size={16} className="mr-1" />
              January 14, 2024
            </div>
            <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
              <Clock size={16} className="mr-1" />
              24 min read
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Building Scalable EdTech Platforms: Lessons from NeXTStep
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl leading-relaxed mb-4">
            Discover the key architectural decisions and challenges faced while building a comprehensive learning management system that serves thousands of students.
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {['EdTech', 'React', 'Django', 'Scalability'].map((tag) => (
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
              In the rapidly evolving landscape of educational technology, building scalable platforms that can handle thousands of concurrent users while maintaining performance and reliability is crucial. This blog post delves into our journey of building NeXTStep, a comprehensive learning management system that combines traditional LMS features with modern career development tools.
            </p>

            <blockquote className="text-xl italic border-l-4 pl-4 my-6">
              "The key to building scalable systems isn't just about handling current load—it's about designing for future growth while maintaining performance and reliability."
            </blockquote>

            <h2>The Challenge</h2>
            <p>
              When we started developing NeXTStep, we faced several key challenges that would shape our architectural decisions:
            </p>
            <ul>
              <li>Supporting thousands of concurrent users accessing course content</li>
              <li>Real-time collaboration features for student-teacher interactions</li>
              <li>Integration with multiple third-party services and APIs</li>
              <li>Handling large volumes of video content and streaming</li>
              <li>Ensuring data consistency across microservices</li>
            </ul>

            <figure className="my-6">
              <PlaceholderDiagram title="NeXTStep Architecture Overview" />
              <figcaption className="text-center text-sm text-gray-500 dark:text-gray-400 mt-2">
                High-level architecture diagram showing the main components of NeXTStep
              </figcaption>
            </figure>

            <h2>Architecture Overview</h2>
            <div className="my-6 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Tech Stack Highlights</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="p-4 bg-white dark:bg-gray-700 rounded-lg">
                  <h4 className="font-medium text-uiuc-orange">Frontend</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">React, Next.js, TypeScript</p>
                </div>
                <div className="p-4 bg-white dark:bg-gray-700 rounded-lg">
                  <h4 className="font-medium text-uiuc-orange">Backend</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Django, PostgreSQL, Redis</p>
                </div>
                <div className="p-4 bg-white dark:bg-gray-700 rounded-lg">
                  <h4 className="font-medium text-uiuc-orange">Infrastructure</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">AWS, Docker, Kubernetes</p>
                </div>
              </div>
            </div>

            <p>
              We adopted a microservices architecture to ensure each component could scale independently based on demand. The core services include:
            </p>
            <ul>
              <li>Authentication and User Management</li>
              <li>Course Content Delivery</li>
              <li>Real-time Collaboration</li>
              <li>Assessment Engine</li>
              <li>Analytics and Reporting</li>
            </ul>

            <h2>Key Technical Decisions</h2>
            
            <h3>1. Content Delivery Strategy</h3>
            <p>
              To handle large volumes of educational content efficiently, we implemented:
            </p>
            <ul>
              <li>CDN integration for static content delivery</li>
              <li>Adaptive bitrate streaming for video content</li>
              <li>Lazy loading and progressive enhancement</li>
              <li>Content caching at multiple levels</li>
            </ul>

            <div className="my-6 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h4 className="text-lg font-semibold mb-4">Performance Improvements</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>Page Load Time</span>
                  <span className="text-uiuc-orange">Reduced by 60%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Video Start Time</span>
                  <span className="text-uiuc-orange">Reduced by 75%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Bandwidth Usage</span>
                  <span className="text-uiuc-orange">Reduced by 40%</span>
                </div>
              </div>
            </div>

            <h3>2. Database Optimization</h3>
            <p>
              Efficient database design and optimization were crucial for handling thousands of concurrent users. We implemented:
            </p>
            <ul>
              <li>Read replicas for scaling read operations</li>
              <li>Materialized views for complex reports</li>
              <li>Database sharding for user data</li>
              <li>Query optimization and indexing strategies</li>
            </ul>

            <h3>3. Real-time Features</h3>
            <p>
              For real-time collaboration and updates, we used:
            </p>
            <ul>
              <li>WebSocket connections for live updates</li>
              <li>Redis pub/sub for event broadcasting</li>
              <li>Message queues for asynchronous processing</li>
            </ul>

            <h2>Lessons Learned</h2>
            <p>
              Throughout the development process, we learned several valuable lessons:
            </p>
            <ol>
              <li>
                <strong>Start with Monitoring:</strong> Implement comprehensive monitoring from day one. It's crucial for understanding system behavior and identifying bottlenecks.
              </li>
              <li>
                <strong>Cache Strategically:</strong> Implement caching at multiple levels, but be careful with cache invalidation strategies.
              </li>
              <li>
                <strong>Plan for Scale:</strong> Design your architecture to scale horizontally from the beginning. Vertical scaling has limitations.
              </li>
              <li>
                <strong>Test at Scale:</strong> Regular load testing with realistic user scenarios is essential for identifying potential issues before they affect users.
              </li>
            </ol>

            <h2>Impact and Results</h2>
            <div className="my-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h4 className="text-xl font-semibold text-uiuc-orange mb-2">User Growth</h4>
                <p className="text-4xl font-bold">5,000+</p>
                <p className="text-gray-600 dark:text-gray-400">Active daily users</p>
              </div>
              <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h4 className="text-xl font-semibold text-uiuc-orange mb-2">Course Completion</h4>
                <p className="text-4xl font-bold">85%</p>
                <p className="text-gray-600 dark:text-gray-400">Average completion rate</p>
              </div>
            </div>

            <h2>Conclusion</h2>
            <p>
              Building a scalable EdTech platform requires careful planning, the right architectural decisions, and continuous optimization. By focusing on performance, scalability, and user experience, we've created a platform that effectively serves thousands of students while maintaining high performance and reliability.
            </p>
            
            <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Want to Learn More?</h3>
              <p className="mb-4">Check out these resources:</p>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-uiuc-orange hover:text-uiuc-blue">
                    NeXTStep Technical Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-uiuc-orange hover:text-uiuc-blue">
                    System Architecture Overview
                  </a>
                </li>
                <li>
                  <a href="#" className="text-uiuc-orange hover:text-uiuc-blue">
                    Performance Optimization Guide
                  </a>
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
              <SocialShare title="Building Scalable EdTech Platforms: Lessons from NeXTStep" />
            </div>
          </footer>
        </div>
      </div>
    </article>
  )
} 