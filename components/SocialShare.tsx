"use client"

import { useState } from 'react'
import { Twitter, Linkedin, Facebook, Link as LinkIcon, Check } from 'lucide-react'

interface SocialShareProps {
  title: string
}

export default function SocialShare({ title }: SocialShareProps) {
  const [copied, setCopied] = useState(false)

  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''
  const encodedUrl = encodeURIComponent(shareUrl)
  const encodedTitle = encodeURIComponent(title)

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy link:', err)
    }
  }

  return (
    <div className="flex items-center space-x-3">
      <a
        href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 text-gray-500 hover:text-[#1DA1F2] transition-colors"
        title="Share on Twitter"
      >
        <Twitter size={20} />
      </a>
      <a
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 text-gray-500 hover:text-[#0077B5] transition-colors"
        title="Share on LinkedIn"
      >
        <Linkedin size={20} />
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 text-gray-500 hover:text-[#4267B2] transition-colors"
        title="Share on Facebook"
      >
        <Facebook size={20} />
      </a>
      <button
        onClick={handleCopyLink}
        className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
        title="Copy link"
      >
        {copied ? <Check size={20} className="text-green-500" /> : <LinkIcon size={20} />}
      </button>
    </div>
  )
} 