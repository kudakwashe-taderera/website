"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"

type Theme = "light" | "dark"

type ThemeContextType = {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

// Function to check if device is mobile
function isMobileDevice() {
  return typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light")
  const [mounted, setMounted] = useState(false)

  // Function to force light theme on mobile
  const forceLightThemeOnMobile = () => {
    if (isMobileDevice()) {
      setTheme("light")
      document.documentElement.classList.remove("dark")
      document.documentElement.style.colorScheme = "light"
      localStorage.setItem("theme", "light")
    }
  }

  useEffect(() => {
    // Add listener for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = () => forceLightThemeOnMobile()
    mediaQuery.addEventListener('change', handleChange)

    // Initial setup
    if (isMobileDevice()) {
      forceLightThemeOnMobile()
    } else {
      const savedTheme = localStorage.getItem("theme") as Theme
      const initialTheme = savedTheme || "light"
      setTheme(initialTheme)

      if (initialTheme === "dark") {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      }
    }

    setMounted(true)

    // Cleanup
    return () => {
      mediaQuery.removeEventListener('change', handleChange)
    }
  }, [])

  // Add listener for mobile breakpoint changes
  useEffect(() => {
    const mobileMediaQuery = window.matchMedia('(max-width: 768px)')
    const handleMobileChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        forceLightThemeOnMobile()
      }
    }
    
    mobileMediaQuery.addEventListener('change', handleMobileChange)
    return () => mobileMediaQuery.removeEventListener('change', handleMobileChange)
  }, [])

  const toggleTheme = () => {
    // If it's a mobile device, don't allow theme toggle
    if (isMobileDevice()) {
      return
    }

    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  // Prevent hydration mismatch by not rendering theme-dependent content until mounted
  if (!mounted) {
    return <ThemeContext.Provider value={{ theme: "light", toggleTheme: () => {} }}>{children}</ThemeContext.Provider>
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
