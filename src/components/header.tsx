"use client"

import { useState, useEffect } from "react"
import { Moon, Sun, Languages } from "lucide-react"
import { useTheme } from "next-themes"
import Image from "next/image"
import { Button } from "@/src/components/ui/button"
import { useTranslation } from "@/src/contexts/translation-context"

export function Header() {
  const { setTheme, theme } = useTheme()
  const { language, setLanguage } = useTranslation()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
      {/* Company Logo */}
      <div className="flex items-start gap-0">
        <div className="relative rounded-lg w-50 h-13 m-0 p-0">
          <Image
            src={mounted && theme === 'dark' ? '/logo-kh-dark-mode.png' : '/logo-kh-light-mode.png'}
            alt="Luy Leun Logo"
            fill
            className="object-contain"
            priority
            onError={(e) => {
              // Fallback to light mode logo if dark mode logo fails
              e.currentTarget.src = '/logo-kh-light-mode.png';
            }}
          />
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        {/* Language Toggle */}
        <Button
          variant="outline"
          size="sm"
          onClick={() => setLanguage(language === 'km' ? 'en' : 'km')}
          className="flex items-center gap-2"
        >
          <Languages className="h-4 w-4" />
          {language === 'km' ? 'EN' : 'ខ្មែរ'}
        </Button>

        {/* Theme Toggle */}
        <Button
          variant="outline"
          size="sm"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
    </header>
  )
}