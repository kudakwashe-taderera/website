'use client'

import { Calendar, Clock, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import SocialShare from '@/components/SocialShare'
import PlaceholderDiagram from '@/components/PlaceholderDiagram'

export default function BuildingHighPerformanceTeamsBlog() {
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
              Leadership
            </span>
            <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
              <Calendar size={16} className="mr-1" />
              January 30, 2024
            </div>
            <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
              <Clock size={16} className="mr-1" />
              20 min read
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Building High-Performance Engineering Teams
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl leading-relaxed mb-4">
            Strategies and insights for building and leading engineering teams that consistently deliver exceptional results.
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {['Leadership', 'Teams', 'Culture'].map((tag) => (
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
              Building a high-performance engineering team is both an art and a science. It requires careful attention to culture, processes, and people. Through my experience leading multiple successful teams, I've identified key principles that consistently lead to exceptional performance.
            </p>

            <blockquote className="text-xl italic border-l-4 pl-4 my-6">
              "Great teams are built on trust, clear communication, and a shared commitment to excellence."
            </blockquote>

            <h2>The Foundation: Core Values</h2>
            <p>
              Every high-performance team needs a strong foundation built on core values:
            </p>
            <ul>
              <li>Psychological Safety</li>
              <li>Continuous Learning</li>
              <li>Ownership Mentality</li>
              <li>Results-Driven Focus</li>
              <li>Collaborative Spirit</li>
            </ul>

            <figure className="my-6">
              <PlaceholderDiagram title="High-Performance Team Framework" />
              <figcaption className="text-center text-sm text-gray-500 dark:text-gray-400 mt-2">
                The key components of building high-performance teams
              </figcaption>
            </figure>

            <h2>Key Elements of Success</h2>
            <div className="my-6 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Performance Metrics</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="p-4 bg-white dark:bg-gray-700 rounded-lg">
                  <h4 className="font-medium text-uiuc-orange">Delivery Speed</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">30% faster cycles</p>
                </div>
                <div className="p-4 bg-white dark:bg-gray-700 rounded-lg">
                  <h4 className="font-medium text-uiuc-orange">Code Quality</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">50% fewer bugs</p>
                </div>
                <div className="p-4 bg-white dark:bg-gray-700 rounded-lg">
                  <h4 className="font-medium text-uiuc-orange">Team Satisfaction</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">90% retention</p>
                </div>
              </div>
            </div>

            <h2>Building the Right Culture</h2>
            <p>
              Culture is the invisible force that shapes team behavior and performance:
            </p>
            <ol>
              <li>
                <strong>Foster Open Communication:</strong> Create channels for honest, constructive feedback.
              </li>
              <li>
                <strong>Encourage Innovation:</strong> Give teams space to experiment and learn from failures.
              </li>
              <li>
                <strong>Celebrate Success:</strong> Recognize both individual and team achievements.
              </li>
              <li>
                <strong>Promote Growth:</strong> Invest in continuous learning and development.
              </li>
            </ol>

            <h2>Leadership Strategies</h2>
            <div className="my-6 space-y-4">
              <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h4 className="text-lg font-semibold mb-4">Effective Leadership Practices</h4>
                <ul>
                  <li>Lead by example</li>
                  <li>Set clear expectations</li>
                  <li>Provide regular feedback</li>
                  <li>Remove obstacles</li>
                  <li>Empower decision-making</li>
                </ul>
              </div>
            </div>

            <h2>Measuring and Improving Performance</h2>
            <p>
              Key metrics to track and improve team performance:
            </p>
            <ul>
              <li>Sprint velocity and completion rates</li>
              <li>Code quality metrics</li>
              <li>Team happiness and engagement</li>
              <li>Customer satisfaction scores</li>
            </ul>

            <h2>Scaling High-Performance Teams</h2>
            <div className="my-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h4 className="text-xl font-semibold text-uiuc-orange mb-2">Growth Challenges</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Managing team expansion while maintaining culture and performance
                </p>
              </div>
              <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h4 className="text-xl font-semibold text-uiuc-orange mb-2">Solutions</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Structured onboarding and mentorship programs
                </p>
              </div>
            </div>

            <h2>Conclusion</h2>
            <p>
              Building high-performance teams is an ongoing journey that requires dedication, patience, and consistent effort. Focus on creating the right environment, setting clear expectations, and nurturing both individual and collective growth.
            </p>
            
            <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Related Articles</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/blog/from-idea-to-mvp" className="text-uiuc-orange hover:text-uiuc-blue">
                    From Idea to MVP: My Entrepreneurial Journey
                  </Link>
                </li>
                <li>
                  <Link href="/blog/mastering-system-design" className="text-uiuc-orange hover:text-uiuc-blue">
                    Mastering System Design: A Practical Guide
                  </Link>
                </li>
                <li>
                  <Link href="/blog/impact-of-ai-on-software-development" className="text-uiuc-orange hover:text-uiuc-blue">
                    The Impact of AI on Software Development
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
              <SocialShare title="Building High-Performance Engineering Teams" />
            </div>
          </footer>
        </div>
      </div>
    </article>
  )
} 