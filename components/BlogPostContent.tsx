import { MDXRemote } from 'next-mdx-remote'
import { Calendar, Clock, Share2 } from 'lucide-react'
import SocialShare from './SocialShare'

interface BlogPostContentProps {
  initialData: {
    metadata: {
      title: string
      excerpt: string
      author: string
      date: string
      readTime: string
      category: string
      tags: string[]
      featured: boolean
      image: string
    }
    content: any
  } | null
}

export default function BlogPostContent({ initialData }: BlogPostContentProps) {
  if (!initialData) {
    return (
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
          <p className="text-gray-600">
            Sorry, the blog post you're looking for doesn't exist or has been removed.
          </p>
        </div>
      </div>
    )
  }

  const { metadata, content } = initialData

  return (
    <article className="container-custom">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center space-x-4 mb-4">
            <span className="px-3 py-1 bg-uiuc-orange bg-opacity-10 text-uiuc-orange rounded-full text-sm font-medium">
              {metadata.category}
            </span>
            <div className="flex items-center text-gray-500 text-sm">
              <Calendar size={16} className="mr-1" />
              {new Date(metadata.date).toLocaleDateString()}
            </div>
            <div className="flex items-center text-gray-500 text-sm">
              <Clock size={16} className="mr-1" />
              {metadata.readTime}
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{metadata.title}</h1>
          <p className="text-xl text-gray-600">{metadata.excerpt}</p>

          <div className="flex flex-wrap gap-2 mt-6">
            {metadata.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded"
              >
                #{tag}
              </span>
            ))}
          </div>
        </header>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <MDXRemote {...content} />
        </div>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-gray-200" />
              <div>
                <div className="font-medium text-gray-900">{metadata.author}</div>
                <div className="text-sm text-gray-500">Author</div>
              </div>
            </div>
            <SocialShare title={metadata.title} />
          </div>
        </footer>
      </div>
    </article>
  )
} 