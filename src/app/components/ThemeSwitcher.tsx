// app/components/ThemeSwitcher.tsx
"use client"

import { Button } from "@nextui-org/react"
import { SunMoon, Moon } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <div>
      <Button
        isIconOnly
        variant='faded'
        aria-label='切换主题'
        onClick={toggleTheme}
      >
        {theme === "light" ? <Moon /> : <SunMoon />}
      </Button>
    </div>
  )
}
