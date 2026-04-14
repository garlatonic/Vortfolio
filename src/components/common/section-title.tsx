"use client";

import { Bodoni_Moda } from "next/font/google";
import { twMerge } from "tailwind-merge";

const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-bodoni-moda",
  weight: ["500"],
});

export default function SectionTitle({
  className,
  title,
}: {
  className?: string;
  title: string;
}) {
  return (
    <div className={twMerge("relative", className)}>
      <h2
        className={twMerge(
          "section-title text-5xl lg:text-8xl font-semibold italic text-muted bg-background pr-10 inline-block",
          bodoniModa.className,
        )}
      >
        {title}
      </h2>
      <div
        className="absolute top-1/2 left-0 w-full h-px bg-muted -z-1"
        aria-label="꾸밈"
      />
    </div>
  );
}
