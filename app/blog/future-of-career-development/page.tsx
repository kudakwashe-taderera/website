'use client'

import { Calendar, Clock, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import SocialShare from '@/components/SocialShare'
import PlaceholderDiagram from '@/components/PlaceholderDiagram'

export default function FutureOfCareerDevelopmentBlog() {
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
              January 4, 2024
            </div>
            <div className="flex items-center text-gray-500 text-sm">
              <Clock size={16} className="mr-1" />
              14 min read
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            The Future of Career Development: AI-Powered Job Matching
          </h1>
          
          <p className="text-xl text-gray-600 max-w-4xl leading-relaxed mb-4">
            Exploring how machine learning algorithms can revolutionize the way we match job seekers with their ideal career opportunities.
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {['AI', 'Career', 'Technology'].map((tag) => (
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
              The traditional approach to job searching and career development is undergoing a dramatic transformation, 
              driven by advances in artificial intelligence and machine learning. In this article, we'll explore how 
              AI is revolutionizing career development and job matching, making the process more efficient and 
              effective for both job seekers and employers.
            </p>

            <blockquote className="text-xl italic border-l-4 pl-4 my-6">
              "The future of career development lies not just in matching skills to jobs, but in understanding the unique potential of each individual and aligning it with opportunities for growth."
            </blockquote>

            <h2>The Current State of Job Matching</h2>
            <p>
              Traditional job matching methods face several limitations that impact both employers and job seekers:
            </p>
            <ul>
              <li>Keyword-based matching that misses contextual understanding</li>
              <li>Inability to account for soft skills and cultural fit</li>
              <li>Limited consideration of career growth potential</li>
              <li>Bias in the screening process</li>
              <li>Time-consuming manual review processes</li>
            </ul>

            <figure className="my-6">
              <PlaceholderDiagram title="AI-Powered Job Matching Process" />
              <figcaption className="text-center text-sm text-gray-500 mt-2">
                Visual representation of how AI analyzes multiple factors to create optimal job matches
              </figcaption>
            </figure>

            <div className="my-6 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">The Impact of Poor Job Matching</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="p-4 bg-white rounded-lg">
                  <h4 className="text-2xl font-bold text-uiuc-orange">$15,000</h4>
                  <p className="text-sm text-gray-600">Per bad hire</p>
                </div>
                <div className="p-4 bg-white rounded-lg">
                  <h4 className="text-2xl font-bold text-uiuc-orange">3-6</h4>
                  <p className="text-sm text-gray-600">Months</p>
                </div>
                <div className="p-4 bg-white rounded-lg">
                  <h4 className="text-2xl font-bold text-uiuc-orange">30%</h4>
                  <p className="text-sm text-gray-600">Team impact</p>
                </div>
              </div>
            </div>

            <h2>AI-Powered Job Matching: How It Works</h2>
            <p>
              Our AI-powered job matching system leverages several sophisticated algorithms and techniques to create more meaningful connections between talent and opportunity:
            </p>

            <h3>1. Natural Language Processing (NLP)</h3>
            <p>
              NLP enables our system to understand the nuances of job descriptions and resumes with unprecedented accuracy:
            </p>
            <ul>
              <li>Semantic analysis of job requirements</li>
              <li>Context-aware skill mapping</li>
              <li>Identification of implicit skills and experience</li>
              <li>Understanding of industry-specific terminology</li>
            </ul>

            <h3>2. Machine Learning Models</h3>
            <p>
              We employ various ML models to improve matching accuracy:
            </p>
            <div className="my-6 space-y-4">
              <div className="p-6 bg-gray-50 rounded-lg">
                <h4 className="text-lg font-semibold mb-4">Collaborative Filtering</h4>
                <p>
                  Similar to how Netflix recommends movies, our system learns from successful placements to improve future matches.
                </p>
              </div>

              <div className="p-6 bg-gray-50 rounded-lg">
                <h4 className="text-lg font-semibold mb-4">Deep Learning Networks</h4>
                <p>
                  Neural networks analyze patterns in successful career transitions to predict potential career paths.
                </p>
              </div>

              <div className="p-6 bg-gray-50 rounded-lg">
                <h4 className="text-lg font-semibold mb-4">Gradient Boosting</h4>
                <p>
                  Ensemble learning techniques combine multiple factors to generate highly accurate match scores.
                </p>
              </div>
            </div>

            <h2>Key Features of AI-Powered Job Matching</h2>
            
            <h3>1. Skill Gap Analysis</h3>
            <p>
              The system provides comprehensive insights into skill development needs:
            </p>
            <ul>
              <li>Current skill set vs. required skills</li>
              <li>Learning opportunities to bridge gaps</li>
              <li>Relevant training resources</li>
              <li>Expected time to acquire new skills</li>
            </ul>

            <h3>2. Career Path Prediction</h3>
            <p>
              Using historical data and industry trends, the system can:
            </p>
            <ul>
              <li>Suggest potential career trajectories</li>
              <li>Identify emerging job opportunities</li>
              <li>Recommend skill development priorities</li>
              <li>Calculate career growth potential</li>
            </ul>

            <div className="my-6 p-6 bg-gray-50 rounded-lg">
              <h4 className="text-lg font-semibold mb-4">Success Metrics</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>Match Accuracy</span>
                  <span className="text-uiuc-orange">Improved by 85%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Time-to-Hire</span>
                  <span className="text-uiuc-orange">Reduced by 60%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Retention Rate</span>
                  <span className="text-uiuc-orange">Increased by 45%</span>
                </div>
              </div>
            </div>

            <h2>Addressing Ethical Concerns</h2>
            <p>
              While AI-powered job matching offers numerous benefits, we take ethical considerations seriously:
            </p>
            <ol>
              <li>
                <strong>Bias Mitigation:</strong> Our algorithms are regularly audited and updated to prevent discriminatory outcomes.
              </li>
              <li>
                <strong>Data Privacy:</strong> Strict protocols ensure user data is protected and used responsibly.
              </li>
              <li>
                <strong>Transparency:</strong> Match recommendations include explanations of the factors considered.
              </li>
              <li>
                <strong>Human Oversight:</strong> AI recommendations are complemented by human career counselors.
              </li>
            </ol>

            <h2>Future Developments</h2>
            <div className="my-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-6 bg-gray-50 rounded-lg">
                <h4 className="text-xl font-semibold text-uiuc-orange mb-2">Real-time Skill Tracking</h4>
                <p className="text-gray-600">
                  Continuous monitoring and updating of skills based on work performance and learning activities.
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h4 className="text-xl font-semibold text-uiuc-orange mb-2">Predictive Analytics</h4>
                <p className="text-gray-600">
                  Advanced forecasting of industry trends and skill demands to guide career decisions.
                </p>
              </div>
            </div>

            <h2>Conclusion</h2>
            <p>
              AI-powered job matching represents a significant leap forward in career development. By leveraging 
              advanced algorithms and machine learning techniques, we can create more meaningful connections between 
              talent and opportunity, leading to better outcomes for both individuals and organizations.
            </p>
            
            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Learn More About AI in Career Development</h3>
              <p className="mb-4">Explore these resources:</p>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-uiuc-orange hover:text-uiuc-blue">
                    AI Career Matching Whitepaper
                  </a>
                </li>
                <li>
                  <a href="#" className="text-uiuc-orange hover:text-uiuc-blue">
                    Machine Learning in HR Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="text-uiuc-orange hover:text-uiuc-blue">
                    Future of Work Research
                  </a>
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
              <SocialShare title="The Future of Career Development: AI-Powered Job Matching" />
            </div>
          </footer>
        </div>
      </div>
    </article>
  )
} 