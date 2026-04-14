"use client";
import Hero from "@/app/(home)/_components/hero";
import About from "@/app/(home)/_components/about";
import TechStack from "@/app/(home)/_components/tech-stack";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Container() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const query = gsap.utils.selector(container);

      gsap.fromTo(
        ".hero",
        { opacity: 1, scale: 1 },
        {
          opacity: 0,
          scale: 0.9,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        },
      );

      // About
      const aboutSection = query(".about");
      const aboutActiveLine = query(".about-active");

      gsap.fromTo(
        aboutActiveLine,
        { yPercent: 100 },
        {
          yPercent: 0,
          duration: 0.8,
          ease: "easeOut",
          scrollTrigger: {
            trigger: aboutSection,
            start: "top 60%",
            toggleActions: "play none none reverse",
            invalidateOnRefresh: true,
          },
        },
      );

      // 기술스택 라인 애니메이션
      const lines = query(".tech-stack .line") as HTMLElement[];

      const updateSelectedByViewportCenter = () => {
        const centerY = window.innerHeight * 0.5;

        lines.forEach((line) => {
          const rect = line.getBoundingClientRect();
          const lineCenterY = rect.top + rect.height / 2;
          line.classList.toggle("selected", lineCenterY <= centerY);
        });
      };

      let trigger: ScrollTrigger | undefined;

      if (lines.length) {
        trigger = ScrollTrigger.create({
          trigger: ".tech-stack",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          onUpdate: updateSelectedByViewportCenter,
          onRefresh: updateSelectedByViewportCenter,
        });

        updateSelectedByViewportCenter();
      }

      return () => {
        trigger?.kill();
      };
    },
    { scope: container },
  );

  return (
    <main ref={container} className="space-y-50">
      <Hero className="hero" />
      <About className="about" />
      <TechStack className="tech-stack" />
    </main>
  );
}
