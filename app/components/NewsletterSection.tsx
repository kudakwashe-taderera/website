"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Send, CheckCircle } from "lucide-react"

export default function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch("https://formspree.io/f/xdkzokow", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          email,
          _replyto: email,
          subject: "New Newsletter Subscription",
          message: `New subscription request from: ${email}`
        }),
      })

      if (response.ok) {
        setIsSubscribed(true)
        setEmail("")
      } else {
        throw new Error("Failed to subscribe")
      }
    } catch (error) {
      alert("Failed to subscribe. Please try again later.")
    } finally {
      setIsLoading(false)
      // Reset subscription message after 3 seconds
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  return (
    <section className="section-padding bg-uiuc-blue dark:bg-gray-900">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-uiuc-orange rounded-full mb-6">
            <Mail size={32} className="text-white" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Stay Updated with My Journey</h2>

          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to get updates on new projects, blog posts, career insights, and opportunities for collaboration.
          </p>

          {isSubscribed ? (
            <div className="bg-green-500 text-white p-6 rounded-lg inline-flex items-center space-x-3">
              <CheckCircle size={24} />
              <span className="text-lg font-semibold">Successfully subscribed! Thank you for joining.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-uiuc-orange focus:border-transparent text-gray-900"
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isLoading ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  ) : (
                    <Send className="mr-2" size={20} />
                  )}
                  Subscribe
                </button>
              </div>
              <p className="text-gray-400 text-sm mt-4">
                No spam, unsubscribe at any time. Your privacy is important to me.
              </p>
            </form>
          )}

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-white mb-2">Weekly Updates</div>
              <div className="text-gray-300">Project progress and insights</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-2">Exclusive Content</div>
              <div className="text-gray-300">Behind-the-scenes development stories</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-2">Early Access</div>
              <div className="text-gray-300">First to know about new opportunities</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
