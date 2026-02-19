"use client";

import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  }

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="rounded-full bg-white dark:bg-input/50 md:dark:bg-background text-foreground/70 hover:text-foreground hover:bg-accent dark:hover:bg-input/50 transition-all duration-200 z-10 shadow-none border-0 h-10 w-10"
        aria-label="Toggle theme"
      >
        <Sun className="h-5 w-5" />
      </Button>
    );
  }
  
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="rounded-full bg-white dark:bg-input/50 md:dark:bg-background text-foreground/70 hover:text-foreground hover:bg-accent dark:hover:bg-input/50 transition-all duration-200 z-10 shadow-none border-0 h-10 w-10"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? (
        <Sun className="h-5 w-5 transition-transform duration-200" />
      ) : (
        <Moon className="h-5 w-5 transition-transform duration-200" />
      )}
    </Button>
  );
}
  