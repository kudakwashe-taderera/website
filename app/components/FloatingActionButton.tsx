"use client"

import { useState } from "react"
import Link from "next/link"
import { MessageCircle, X, Mail, Briefcase, FileText, Heart, Phone } from "lucide-react"

export default function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false)

  const actions = [
    { 
      icon: Phone, 
      label: "WhatsApp", 
      href: `https://wa.me/14479025849?text=${encodeURIComponent("Hi Kudakwashe, is this the right time to chat?")}`, 
      color: "bg-green-500 hover:bg-green-600",
      isExternal: true 
    },
    { 
      icon: Mail, 
      label: "Contact Me", 
      href: "/contact", 
      color: "bg-blue-500 hover:bg-blue-600",
      isExternal: false 
    },
    { 
      icon: Briefcase, 
      label: "Hire Me", 
      href: "/contact?type=hire", 
      color: "bg-green-500 hover:bg-green-600",
      isExternal: false 
    },
    { 
      icon: Heart, 
      label: "Sponsor", 
      href: "/contact?type=sponsor", 
      color: "bg-purple-500 hover:bg-purple-600",
      isExternal: false 
    },
    { 
      icon: FileText, 
      label: "Resume", 
      href: "/resume.pdf", 
      color: "bg-orange-500 hover:bg-orange-600",
      isExternal: false 
    },
  ]

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Action Buttons */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 space-y-3 animate-slide-up">
          {actions.map((action, index) => {
            const Icon = action.icon
            const LinkComponent = action.isExternal ? 'a' : Link
            return (
              <LinkComponent
                key={index}
                href={action.href}
                className={`flex items-center space-x-3 ${action.color} text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 group`}
                style={{ animationDelay: `${index * 100}ms` }}
                {...(action.isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                <Icon size={20} />
                <span className="text-sm font-medium whitespace-nowrap">{action.label}</span>
              </LinkComponent>
            )
          })}
        </div>
      )}

      {/* Main FAB */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-uiuc-orange hover:bg-opacity-90 text-white rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
        aria-label="Quick actions"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </div>
  )
}
