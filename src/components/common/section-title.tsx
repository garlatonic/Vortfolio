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
          "section-title text-muted bg-background inline-block pr-10 text-5xl font-semibold italic lg:text-8xl",
          bodoniModa.className,
        )}
      >
        {title}
      </h2>
      <div
        className="bg-muted absolute top-1/2 left-0 -z-1 h-px w-full"
        aria-label="꾸밈"
      />
    </div>
  );
}
