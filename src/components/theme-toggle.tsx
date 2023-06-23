"use client"

import  React,{useState,useEffect} from "react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  const [sysMode, setSysMode] = useState('');
  useEffect(() => {
    const matchDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setSysMode(matchDarkMode ? 'dark' : 'light');
  }, []);
  
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setTheme(theme === "light" ? "dark" : sysMode === "light" && theme==="system"  ? "dark":"light")}
    >
      <Icons.sun className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Icons.moon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}