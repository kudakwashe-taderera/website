'use client'

import Link from 'next/link'
import { Calendar, Clock, ArrowRight, Code, Brain, Database, Lightbulb, Briefcase, BookOpen, Laptop, Rocket } from 'lucide-react'

const blogPosts = [
  {
    id: 'building-scalable-edtech',
    title: 'Building Scalable EdTech Platforms: Lessons from NeXTStep',
    excerpt: 'Discover the key architectural decisions and challenges faced while building a comprehensive learning management system that serves thousands of students.',
    author: 'Kudakwashe Taderera',
    date: '2024-01-14',
    readTime: '24 min read',
    category: 'Technology',
    tags: ['EdTech', 'React', 'Django', 'Scalability'],
    featured: true,
  },
  {
    id: 'mastering-system-design',
    title: 'Mastering System Design: A Practical Guide',
    excerpt: 'Essential principles and practices for designing scalable, resilient, and maintainable software systems.',
    author: 'Kudakwashe Taderera',
    date: '2024-01-20',
    readTime: '18 min read',
    category: 'Technology',
    tags: ['Architecture', 'Scalability', 'Design'],
    featured: true,
  },
  {
    id: 'impact-of-ai-on-software-development',
    title: 'The Impact of AI on Software Development',
    excerpt: 'How artificial intelligence is transforming the way we write, test, and maintain code.',
    author: 'Kudakwashe Taderera',
    date: '2024-01-25',
    readTime: '16 min read',
    category: 'AI/ML',
    tags: ['AI', 'Programming', 'Future'],
    featured: false,
  },
  {
    id: 'building-high-performance-teams',
    title: 'Building High-Performance Engineering Teams',
    excerpt: 'Strategies and insights for building and leading engineering teams that consistently deliver exceptional results.',
    author: 'Kudakwashe Taderera',
    date: '2024-01-30',
    readTime: '20 min read',
    category: 'Career Advice',
    tags: ['Leadership', 'Teams', 'Culture'],
    featured: false,
  },
  {
    id: 'from-idea-to-mvp',
    title: 'From Idea to MVP: My Entrepreneurial Journey',
    excerpt: 'A personal reflection on the challenges and triumphs of building multiple tech startups from concept to market validation.',
    author: 'Kudakwashe Taderera',
    date: '2023-12-27',
    readTime: '15 min read',
    category: 'Entrepreneurship',
    tags: ['Startup', 'MVP', 'Business'],
    featured: true,
  },
  {
    id: 'future-of-career-development',
    title: 'The Future of Career Development: AI-Powered Job Matching',
    excerpt: 'Exploring how machine learning algorithms can revolutionize the way we match job seekers with their ideal career opportunities.',
    author: 'Kudakwashe Taderera',
    date: '2024-01-04',
    readTime: '14 min read',
    category: 'AI/ML',
    tags: ['AI', 'Career', 'Technology'],
    featured: false,
  },
]

export default function BlogPage() {
  const categories = ["All", "Technology", "AI/ML", "Data Engineering", "Entrepreneurship", "Career Advice"]
  const featuredPosts = blogPosts.filter((post) => post.featured)
  const recentPosts = blogPosts.filter((post) => !post.featured)

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Technology":
        return <Laptop className="w-16 h-16 text-uiuc-orange" />
      case "AI/ML":
        return <Brain className="w-16 h-16 text-uiuc-orange" />
      case "Data Engineering":
        return <Database className="w-16 h-16 text-uiuc-orange" />
      case "Entrepreneurship":
        return <Rocket className="w-16 h-16 text-uiuc-orange" />
      case "Career Advice":
        return <Briefcase className="w-16 h-16 text-uiuc-orange" />
      default:
        return <BookOpen className="w-16 h-16 text-uiuc-orange" />
    }
  }

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              My <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Insights on technology, entrepreneurship, career development, and the journey of building impactful
              software solutions.
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-uiuc-orange hover:text-white hover:border-uiuc-orange transition-all duration-300"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Featured Articles</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {featuredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden card-hover"
              >
                <div className="relative h-48 bg-gray-50 flex items-center justify-center group-hover:bg-gray-100 transition-colors duration-300">
                  {getCategoryIcon(post.category)}
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="px-3 py-1 bg-uiuc-orange bg-opacity-10 text-uiuc-orange rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar size={16} className="mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock size={16} className="mr-1" />
                      {post.readTime}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center text-uiuc-orange hover:text-uiuc-blue transition-colors font-medium"
                  >
                    Read More
                    <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Recent Posts */}
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Recent Articles</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden card-hover group"
              >
                <div className="relative h-40 bg-gray-50 flex items-center justify-center group-hover:bg-gray-100 transition-colors duration-300">
                  {getCategoryIcon(post.category)}
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-uiuc-orange bg-opacity-10 text-uiuc-orange rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock size={14} className="mr-1" />
                      {post.readTime}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2">{post.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar size={14} className="mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <Link
                      href={`/blog/${post.id}`}
                      className="text-uiuc-orange hover:text-uiuc-blue transition-colors font-medium"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated with My Latest Posts</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Subscribe to get notified when I publish new articles about technology, entrepreneurship, and career
              development.
            </p>
            <Link href="/projects" className="btn-primary">
              View My Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 