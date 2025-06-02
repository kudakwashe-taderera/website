'use client'

import { Calendar, Clock, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import SocialShare from '@/components/SocialShare'
import PlaceholderDiagram from '@/components/PlaceholderDiagram'

export default function FromIdeaToMVPBlog() {
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
              Entrepreneurship
            </span>
            <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
              <Calendar size={16} className="mr-1" />
              December 27, 2023
            </div>
            <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
              <Clock size={16} className="mr-1" />
              15 min read
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            From Idea to MVP: My Entrepreneurial Journey
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl leading-relaxed mb-4">
            A personal reflection on the challenges and triumphs of building multiple tech startups from concept to market validation.
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {['Startup', 'MVP', 'Business'].map((tag) => (
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
              Every entrepreneurial journey starts with a moment of inspiration. For me, it was witnessing the challenges students faced in finding relevant career opportunities while studying at the University of Illinois. This observation led to the inception of NeXTStep, but the path from idea to successful product was far from straightforward.
            </p>

            <blockquote className="text-xl italic border-l-4 pl-4 my-6">
              "The most valuable lessons in entrepreneurship come not from the successes, but from the challenges we face and overcome along the way."
            </blockquote>

            <h2>Identifying the Problem</h2>
            <p>
              The first crucial step in any successful startup is deeply understanding the problem you're trying to solve. Through extensive research and countless conversations with stakeholders, we identified several critical pain points in the current career development landscape:
            </p>
            <ul>
              <li>Disconnect between academic learning and industry requirements</li>
              <li>Inefficient job search and application processes</li>
              <li>Lack of personalized career guidance</li>
              <li>Limited access to industry mentors</li>
              <li>Difficulty in tracking skill development</li>
            </ul>

            <figure className="my-6">
              <PlaceholderDiagram title="MVP Development Journey" />
              <figcaption className="text-center text-sm text-gray-500 dark:text-gray-400 mt-2">
                The iterative process of developing our Minimum Viable Product
              </figcaption>
            </figure>

            <div className="my-6 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Initial Market Research</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="p-4 bg-white dark:bg-gray-700 rounded-lg">
                  <h4 className="font-medium text-uiuc-orange">Students Interviewed</h4>
                  <p className="text-3xl font-bold">200+</p>
                </div>
                <div className="p-4 bg-white dark:bg-gray-700 rounded-lg">
                  <h4 className="font-medium text-uiuc-orange">Universities Analyzed</h4>
                  <p className="text-3xl font-bold">15</p>
                </div>
                <div className="p-4 bg-white dark:bg-gray-700 rounded-lg">
                  <h4 className="font-medium text-uiuc-orange">Industry Partners</h4>
                  <p className="text-3xl font-bold">25</p>
                </div>
              </div>
            </div>

            <h2>Building the MVP</h2>
            <p>
              With a clear understanding of the problem space, we moved to building our Minimum Viable Product. Our approach was methodical yet flexible, focusing on four key principles:
            </p>
            <ol>
              <li>
                <strong>Core Feature Identification:</strong> We prioritized features that would deliver immediate value to users while being feasible to implement quickly.
              </li>
              <li>
                <strong>Rapid Prototyping:</strong> Using design sprints to quickly iterate through potential solutions and get user feedback.
              </li>
              <li>
                <strong>Lean Development:</strong> Building only what was necessary to validate our core assumptions and gather meaningful user feedback.
              </li>
              <li>
                <strong>Continuous User Testing:</strong> Regular feedback sessions with potential users to ensure we were on the right track.
              </li>
            </ol>

            <h2>Key Challenges and Solutions</h2>
            <div className="my-6 space-y-4">
              <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h4 className="text-lg font-semibold mb-4">Challenge 1: User Acquisition</h4>
                <p>
                  Initially, getting students to try our platform was our biggest hurdle. We overcame this through:
                </p>
                <ul>
                  <li>Strategic partnerships with student organizations</li>
                  <li>Early access programs with exclusive benefits</li>
                  <li>Creating valuable content to drive organic traffic</li>
                </ul>
              </div>

              <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h4 className="text-lg font-semibold mb-4">Challenge 2: Product-Market Fit</h4>
                <p>
                  Finding the right balance of features required constant iteration and:
                </p>
                <ul>
                  <li>Regular user interviews and feedback sessions</li>
                  <li>A/B testing different feature sets</li>
                  <li>Analyzing user behavior data</li>
                </ul>
              </div>

              <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h4 className="text-lg font-semibold mb-4">Challenge 3: Scaling Operations</h4>
                <p>
                  As our user base grew, we adapted our operations by:
                </p>
                <ul>
                  <li>Implementing automated onboarding processes</li>
                  <li>Building self-service support resources</li>
                  <li>Optimizing our infrastructure for scale</li>
                </ul>
              </div>
            </div>

            <h2>Measuring Success</h2>
            <p>
              Success in the early stages of a startup isn't just about user numbers—it's about validation and learning:
            </p>
            <div className="my-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h4 className="text-xl font-semibold text-uiuc-orange mb-2">User Growth</h4>
                <p className="text-4xl font-bold">300%</p>
                <p className="text-gray-600 dark:text-gray-400">Quarter-over-quarter growth</p>
              </div>
              <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h4 className="text-xl font-semibold text-uiuc-orange mb-2">Job Placements</h4>
                <p className="text-4xl font-bold">500+</p>
                <p className="text-gray-600 dark:text-gray-400">Successful matches</p>
              </div>
            </div>

            <h2>Lessons Learned</h2>
            <p>
              This journey has taught me invaluable lessons about entrepreneurship that go beyond textbook knowledge:
            </p>
            <ol>
              <li>
                <strong>Start with the Problem, Not the Solution:</strong> Understanding the problem deeply is more important than rushing to build a solution.
              </li>
              <li>
                <strong>Listen to Your Users:</strong> User feedback is invaluable, but you need to distinguish between what users say they want and what they actually need.
              </li>
              <li>
                <strong>Move Fast, But Don't Break Things:</strong> While speed is important, maintaining quality and reliability is crucial for building trust.
              </li>
              <li>
                <strong>Build a Strong Team:</strong> Surround yourself with people who complement your skills and share your vision.
              </li>
            </ol>

            <h2>Looking Forward</h2>
            <p>
              The journey from idea to MVP is just the beginning. We continue to iterate and improve based on user feedback, market demands, and technological advancements. Our focus remains on creating value for our users while building a sustainable and scalable business.
            </p>
            
            <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Want to Start Your Own Journey?</h3>
              <p className="mb-4">Here are some resources that helped me along the way:</p>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-uiuc-orange hover:text-uiuc-blue">
                    Startup Validation Checklist
                  </a>
                </li>
                <li>
                  <a href="#" className="text-uiuc-orange hover:text-uiuc-blue">
                    MVP Development Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="text-uiuc-orange hover:text-uiuc-blue">
                    User Research Templates
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
              <SocialShare title="From Idea to MVP: My Entrepreneurial Journey" />
            </div>
          </footer>
        </div>
      </div>
    </article>
  )
} 