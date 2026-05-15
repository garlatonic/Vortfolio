"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  return (
    <header className="pointer-events-none fixed top-0 right-0 left-0 z-50 text-white mix-blend-difference">
      <div className="inner flex items-center justify-between py-5">
        <Button
          variant="ghost"
          className="group pointer-events-auto flex items-center gap-2 px-0 text-sm font-medium tracking-wide transition-opacity hover:bg-transparent hover:opacity-70"
          onClick={() => router.back()}
        >
          <ArrowLeftIcon />
          Back to page
        </Button>
      </div>
    </header>
  );
}
