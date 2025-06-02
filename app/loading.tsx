"use client"

export default function Loading() {
  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50">
      <div className="h-full bg-uiuc-orange animate-loading-bar" />
    </div>
  )
} 