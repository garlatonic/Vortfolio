"use client";

import { MoonStarIcon, SunDimIcon, SunMoonIcon } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { useIsMounted } from "@/hooks/useIsMounted";

export default function ThemeButton() {
  const { theme, setTheme } = useTheme();
  const mounted = useIsMounted();

  const handleThemeChange = (theme?: string) => {
    if (!theme) return;

    if (theme === "light") setTheme("dark");
    else if (theme === "dark") setTheme("system");
    else setTheme("light");
  };

  if (!mounted) {
    return (
      <Button variant="outline" size="icon" disabled>
        <SunDimIcon className="size-5" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    );
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => handleThemeChange(theme)}
    >
      {theme === "light" && <SunDimIcon className="size-5" />}
      {theme === "dark" && <MoonStarIcon className="size-5" />}
      {theme === "system" && <SunMoonIcon className="size-5" />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
