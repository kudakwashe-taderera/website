'use client'

import { Inter, Merriweather } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const merriweather = Merriweather({ 
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  variable: '--font-merriweather'
})

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${merriweather.variable} font-serif`}>
      <style jsx global>{`
        .blog-content {
          font-family: var(--font-merriweather);
        }
        
        .blog-content p {
          font-size: 1.125rem;
          line-height: 1.8;
          margin-bottom: 1.5rem;
          color: #374151;
        }

        .dark .blog-content p {
          color: #D1D5DB;
        }

        .blog-content h1 {
          font-size: 2.5rem;
          line-height: 1.2;
          font-weight: 900;
          margin-bottom: 1.5rem;
          color: #111827;
        }

        .dark .blog-content h1 {
          color: #F9FAFB;
        }

        .blog-content h2 {
          font-size: 2rem;
          line-height: 1.3;
          font-weight: 700;
          margin-top: 2.5rem;
          margin-bottom: 1.25rem;
          color: #1F2937;
        }

        .dark .blog-content h2 {
          color: #F3F4F6;
        }

        .blog-content h3 {
          font-size: 1.5rem;
          line-height: 1.4;
          font-weight: 700;
          margin-top: 2rem;
          margin-bottom: 1rem;
          color: #374151;
        }

        .dark .blog-content h3 {
          color: #E5E7EB;
        }

        .blog-content ul, .blog-content ol {
          margin-bottom: 1.5rem;
          padding-left: 1.25rem;
        }

        .blog-content li {
          margin-bottom: 0.5rem;
          line-height: 1.6;
        }

        .blog-content blockquote {
          border-left: 4px solid #4B5563;
          padding-left: 1rem;
          margin: 1.5rem 0;
          font-style: italic;
          color: #6B7280;
        }

        .dark .blog-content blockquote {
          border-left-color: #9CA3AF;
          color: #9CA3AF;
        }

        .blog-content pre {
          background-color: #1F2937;
          padding: 1rem;
          border-radius: 0.5rem;
          overflow-x: auto;
          margin: 1.5rem 0;
        }

        .blog-content code {
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
          font-size: 0.875rem;
          padding: 0.2rem 0.4rem;
          background-color: #F3F4F6;
          border-radius: 0.25rem;
        }

        .dark .blog-content code {
          background-color: #374151;
        }

        .blog-content img {
          border-radius: 0.5rem;
          margin: 2rem 0;
        }

        .blog-content figure {
          margin: 2rem 0;
        }

        .blog-content figcaption {
          text-align: center;
          font-size: 0.875rem;
          color: #6B7280;
          margin-top: 0.5rem;
        }

        .blog-content hr {
          margin: 3rem 0;
          border: 0;
          border-top: 1px solid #E5E7EB;
        }

        .dark .blog-content hr {
          border-top-color: #4B5563;
        }

        .blog-content a {
          color: #2563EB;
          text-decoration: underline;
          text-decoration-thickness: 1px;
          text-underline-offset: 2px;
        }

        .blog-content a:hover {
          color: #1D4ED8;
        }

        .dark .blog-content a {
          color: #60A5FA;
        }

        .dark .blog-content a:hover {
          color: #93C5FD;
        }
      `}</style>
      {children}
    </div>
  )
} 