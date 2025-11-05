"use client"

import { useState, useEffect } from "react"
import { Moon, Sun, Languages, Home, Calculator, CreditCard } from "lucide-react"
import { useTheme } from "next-themes"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/src/components/ui/button"
import { useTranslation } from "@/src/contexts/translation-context"

export function Header() {
  const { setTheme, theme } = useTheme()
  const { language, setLanguage } = useTranslation()
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
  }, [])

  const navItems = [
    { href: "/", label: language === 'km' ? 'ទំព័រដើម' : 'Home', icon: Home },
    { href: "/loan-calculator", label: language === 'km' ? 'គណនាកម្ចី' : 'Loan Calculator', icon: Calculator },
    { href: "/credit-calculator", label: language === 'km' ? 'ឥណទានបុគ្គល' : 'Credit Calculator', icon: CreditCard },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm">
      {/* Company Logo */}
      <Link href="/" className="flex items-center">
        <div className="relative h-16 w-60 md:h-12 md:w-48 ">
          <Image
            src={mounted && theme === 'dark' ? '/logo-kh-dark-mode.png' : '/logo-kh-light-mode.png'}
            alt="Luy Leun Logo"
            fill
            className="object-contain"
            priority
            onError={(e) => {
              e.currentTarget.src = '/logo-kh-light-mode.png'
            }}
          />
        </div>
      </Link>

      {/* Navigation Menu */}
      <nav className="hidden md:flex items-center gap-4">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </Link>
          )
        })}
      </nav>
      
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