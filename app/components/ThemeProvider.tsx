"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"

type Theme = "light"

type ThemeContextType = {
  theme: Theme
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

// Function to check if device is mobile
function isMobileDevice() {
  return typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Always ensure light theme
    document.documentElement.classList.remove("dark")
    document.documentElement.style.colorScheme = "light"
    setMounted(true)
  }, [])

  // Prevent hydration mismatch
  if (!mounted) {
    return <ThemeContext.Provider value={{ theme: "light" }}>{children}</ThemeContext.Provider>
  }

  return <ThemeContext.Provider value={{ theme: "light" }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
