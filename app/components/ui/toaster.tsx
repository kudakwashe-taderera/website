"use client"

import { useState } from "react"
import { X, CheckCircle, AlertCircle, Info } from "lucide-react"

interface Toast {
  id: string
  type: "success" | "error" | "info"
  title: string
  description?: string
}

export function Toaster() {
  const [toasts, setToasts] = useState<Toast[]>([])

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id))
  }

  const getIcon = (type: Toast["type"]) => {
    switch (type) {
      case "success":
        return <CheckCircle className="text-green-500" size={20} />
      case "error":
        return <AlertCircle className="text-red-500" size={20} />
      case "info":
        return <Info className="text-blue-500" size={20} />
    }
  }

  const getBackgroundColor = (type: Toast["type"]) => {
    switch (type) {
      case "success":
        return "bg-green-50 border-green-200"
      case "error":
        return "bg-red-50 border-red-200"
      case "info":
        return "bg-blue-50 border-blue-200"
    }
  }

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`max-w-sm w-full ${getBackgroundColor(
            toast.type,
          )} border rounded-lg shadow-lg p-4 animate-slide-up`}
        >
          <div className="flex items-start">
            <div className="flex-shrink-0">{getIcon(toast.type)}</div>
            <div className="ml-3 w-0 flex-1">
              <p className="text-sm font-medium text-gray-900">{toast.title}</p>
              {toast.description && (
                <p className="mt-1 text-sm text-gray-500">{toast.description}</p>
              )}
            </div>
            <div className="ml-4 flex-shrink-0 flex">
              <button
                onClick={() => removeToast(toast.id)}
                className="inline-flex text-gray-400 hover:text-gray-500"
              >
                <X size={16} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
