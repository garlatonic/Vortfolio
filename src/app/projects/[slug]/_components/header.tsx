"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  return (
    <header className="fixed top-0 right-0 left-0 z-50 mix-blend-difference text-white pointer-events-none">
      <div className="inner flex py-5 justify-between items-center">
        <Button
          variant="ghost"
          className="pointer-events-auto group flex items-center gap-2 text-sm font-medium tracking-wide hover:opacity-70 transition-opacity px-0 hover:bg-transparent"
          onClick={() => router.back()}
        >
          <ArrowLeftIcon />
          Back to page
        </Button>
      </div>
    </header>
  );
}
