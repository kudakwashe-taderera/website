'use client'

import { Calendar, Clock, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import SocialShare from '@/components/SocialShare'
import PlaceholderDiagram from '@/components/PlaceholderDiagram'

export default function AIImpactOnSoftwareDevelopmentBlog() {
  return (
    <article className="pt-16 blog-content">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom py-8">
          <Link 
            href="/blog"
            className="inline-flex items-center text-gray-600 hover:text-uiuc-orange mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>

          <div className="flex items-center space-x-4 mb-4">
            <span className="px-3 py-1 bg-uiuc-orange bg-opacity-10 text-uiuc-orange rounded-full text-sm font-medium">
              AI/ML
            </span>
            <div className="flex items-center text-gray-500 text-sm">
              <Calendar size={16} className="mr-1" />
              January 25, 2024
            </div>
            <div className="flex items-center text-gray-500 text-sm">
              <Clock size={16} className="mr-1" />
              16 min read
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            The Impact of AI on Software Development
          </h1>
          
          <p className="text-xl text-gray-600 max-w-4xl leading-relaxed mb-4">
            How artificial intelligence is transforming the way we write, test, and maintain code.
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {['AI', 'Programming', 'Future'].map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded"
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
              <div className="text-sm text-gray-500">Written by</div>
              <div className="font-medium text-gray-900">Kudakwashe Taderera</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom py-12">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg max-w-none">
            {/* First Letter Styling */}
            <p className="first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1">
              Artificial Intelligence is revolutionizing every aspect of software development, from code generation to testing and deployment. As we stand at the cusp of this transformation, it's crucial to understand how AI is reshaping our industry and what it means for developers.
            </p>

            <blockquote className="text-xl italic border-l-4 pl-4 my-6">
              "AI won't replace developers, but developers who use AI will replace those who don't."
            </blockquote>

            <h2>The Current State of AI in Development</h2>
            <p>
              AI tools are already making significant impacts in various areas of software development:
            </p>
            <ul>
              <li>Intelligent code completion and generation</li>
              <li>Automated testing and bug detection</li>
              <li>Code review and quality analysis</li>
              <li>Performance optimization</li>
              <li>Natural language to code translation</li>
            </ul>

            <figure className="my-6">
              <PlaceholderDiagram title="AI-Powered Development Workflow" />
              <figcaption className="text-center text-sm text-gray-500 mt-2">
                Modern development workflow enhanced by AI tools
              </figcaption>
            </figure>

            <h2>Key Areas of Impact</h2>
            <div className="my-6 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">AI-Powered Development Tools</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="p-4 bg-white rounded-lg">
                  <h4 className="font-medium text-uiuc-orange">Code Generation</h4>
                  <p className="text-sm text-gray-600">40% productivity boost</p>
                </div>
                <div className="p-4 bg-white rounded-lg">
                  <h4 className="font-medium text-uiuc-orange">Bug Detection</h4>
                  <p className="text-sm text-gray-600">60% faster debugging</p>
                </div>
                <div className="p-4 bg-white rounded-lg">
                  <h4 className="font-medium text-uiuc-orange">Code Review</h4>
                  <p className="text-sm text-gray-600">30% better quality</p>
                </div>
              </div>
            </div>

            <h2>Transforming Development Practices</h2>
            <p>
              AI is changing how we approach software development in several ways:
            </p>
            <ol>
              <li>
                <strong>Automated Code Generation:</strong> AI can now generate boilerplate code and even complex functions.
              </li>
              <li>
                <strong>Intelligent Testing:</strong> AI-powered testing tools can identify edge cases and potential bugs.
              </li>
              <li>
                <strong>Smart Code Reviews:</strong> AI assistants can review code for best practices and potential issues.
              </li>
              <li>
                <strong>Natural Language Programming:</strong> Converting requirements into code is becoming more intuitive.
              </li>
            </ol>

            <h2>Challenges and Considerations</h2>
            <div className="my-6 space-y-4">
              <div className="p-6 bg-gray-50 rounded-lg">
                <h4 className="text-lg font-semibold mb-4">Key Challenges</h4>
                <ul>
                  <li>Ensuring code quality and reliability</li>
                  <li>Managing AI tool dependencies</li>
                  <li>Balancing automation with human oversight</li>
                  <li>Addressing security concerns</li>
                </ul>
              </div>
            </div>

            <h2>Best Practices for AI Integration</h2>
            <p>
              To effectively integrate AI into your development workflow:
            </p>
            <ul>
              <li>Start with small, well-defined tasks</li>
              <li>Validate AI-generated code thoroughly</li>
              <li>Keep humans in the loop for critical decisions</li>
              <li>Stay updated with AI tool capabilities</li>
            </ul>

            <h2>Future Outlook</h2>
            <div className="my-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-6 bg-gray-50 rounded-lg">
                <h4 className="text-xl font-semibold text-uiuc-orange mb-2">Short Term</h4>
                <p className="text-gray-600">
                  Enhanced code generation and automated testing capabilities
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h4 className="text-xl font-semibold text-uiuc-orange mb-2">Long Term</h4>
                <p className="text-gray-600">
                  Full-scale AI pair programming and autonomous development
                </p>
              </div>
            </div>

            <h2>Conclusion</h2>
            <p>
              AI is not just changing how we write code—it's transforming the entire software development lifecycle. Embracing these tools while maintaining human oversight and creativity will be key to success in the future of software development.
            </p>
            
            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Related Articles</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/blog/mastering-system-design" className="text-uiuc-orange hover:text-uiuc-blue">
                    Mastering System Design: A Practical Guide
                  </Link>
                </li>
                <li>
                  <Link href="/blog/future-of-career-development" className="text-uiuc-orange hover:text-uiuc-blue">
                    The Future of Career Development
                  </Link>
                </li>
                <li>
                  <Link href="/blog/building-scalable-edtech" className="text-uiuc-orange hover:text-uiuc-blue">
                    Building Scalable EdTech Platforms
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Author and Share Section */}
          <footer className="mt-8 pt-6 border-t border-gray-200">
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
                  <div className="font-medium text-gray-900">Kudakwashe Taderera</div>
                  <div className="text-sm text-gray-500">Technopreneur | Full Stack Software Engineer | Data Scientist</div>
                  <div className="text-sm text-gray-500 mt-1">
                    Building innovative solutions at the intersection of technology and business
                  </div>
                </div>
              </div>
              <SocialShare title="The Impact of AI on Software Development" />
            </div>
          </footer>
        </div>
      </div>
    </article>
  )
} 