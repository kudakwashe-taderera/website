"use client"

import { useState } from "react"
import Link from "next/link"
import { FaWhatsapp } from "react-icons/fa";
import { X } from "lucide-react"

export default function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false)

  const actions = [
    {
      icon: FaWhatsapp,
      label: "WhatsApp",
      href: `https://wa.me/14479025849?text=${encodeURIComponent("Hi Kudakwashe, is this the right time to chat?")}`,
      color: "bg-green-500 hover:bg-green-600",
      isExternal: true
    },
  ]

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Action Buttons */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 space-y-3 animate-slide-up">
          {actions.map((action, index) => {
            const Icon = action.icon;
            const LinkComponent = action.isExternal ? 'a' : Link;
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
            );
          })}
        </div>
      )}

      {/* Main FAB with MessageCircle icon */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
        aria-label="Quick actions"
      >
        {isOpen ? <X size={24} /> : <FaWhatsapp size={24} />}
      </button>
    </div>
  )
}
