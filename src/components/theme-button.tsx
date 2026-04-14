"use client";

import { Computer, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export default function ThemeButton() {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = (theme?: string) => {
    if (!theme) return;

    if (theme === "light") setTheme("dark");
    else if (theme === "dark") setTheme("system");
    else setTheme("light");
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => handleThemeChange(theme)}
    >
      {theme === "light" && (
        <Sun className="h-[1.2rem] w-[1.2rem] -rotate-90 transition-all" />
      )}
      {theme === "dark" && (
        <Moon className="h-[1.2rem] w-[1.2rem] -rotate-90 transition-all" />
      )}
      {theme === "system" && (
        <Computer className="h-[1.2rem] w-[1.2rem] -rotate-90 transition-all" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
