"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  return (
    <header
      id="header"
      className="fixed top-0 left-0 w-full z-50 px-6 py-6 md:px-12 flex justify-between items-center mix-blend-difference text-white pointer-events-none"
    >
      <Button
        variant="ghost"
        className="pointer-events-auto group flex items-center gap-2 text-sm font-medium tracking-wide hover:opacity-70 transition-opacity"
        onClick={() => router.back()}
      >
        <ArrowLeftIcon />
        Back to page
      </Button>
    </header>
  );
}
