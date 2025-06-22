"use client"

import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 400)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  if (!show) return null

  return (
    <Button
      variant="outline"
      size="icon"
      className="fixed bottom-6 right-20 z-50 rounded-full bg-background/80 backdrop-blur-sm hover:bg-accent shadow-lg transition-all duration-300 transform hover:scale-105"
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      <ArrowUp className="h-4 w-4" />
    </Button>
  )
}
