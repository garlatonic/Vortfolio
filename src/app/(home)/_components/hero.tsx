"use client";

import CircularText from "../../../components/react-bits/circular-text";
import Silk from "../../../components/react-bits/silk";
import { twMerge } from "tailwind-merge";
import Header from "@/components/common/header";
import { IBM_Plex_Mono } from "next/font/google";
import { AsteriskIcon } from "lucide-react";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  weight: ["400", "500", "600", "700"],
});

export default function Hero({ className }: { className?: string }) {
  return (
    <>
      <section
        className={twMerge(
          "relative w-full h-screen overflow-hidden",
          className,
        )}
      >
        <div className="inner h-full flex  items-center">
          <Header className={twMerge(ibmPlexMono.className)} isMain />
          <h1 className="flex flex-col text-3xl sm:text-5xl md:text-7xl lg:text-9xl font-bold leading-snug pointer-events-none">
            <span>Hello, I&rsquo;m</span>
            <span>SangA Park.</span>
          </h1>
          <div className="absolute bottom-0 left-0 w-full h-32 sm:h-36 md:h-40 lg:h-44 flex justify-end items-center mb-5">
            <div className="relative size-32 sm:size-36 md:size-40 lg:size-44">
              <CircularText
                className="opacity-50"
                text="SCROLL DOWN SCROLL DOWN "
                onHover="speedUp"
                spinDuration={20}
                radiusOffset={12}
              />
              <AsteriskIcon className="absolute left-1/2 top-1/2 size-10 -translate-x-1/2 -translate-y-1/2 animate-spin animation-duration-[10s] direction-[reverse] " />
            </div>
          </div>
        </div>
        <div className="absolute inset-0 -z-10 dark:opacity-100 opacity-5">
          <Silk
            speed={1.0}
            scale={0.7}
            color="#3f3f46"
            noiseIntensity={0}
            rotation={1}
          />
        </div>
      </section>
    </>
  );
}
