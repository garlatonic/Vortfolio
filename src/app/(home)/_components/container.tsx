"use client";
import Hero from "@/app/(home)/_components/hero";
import About from "@/app/(home)/_components/about";
import TechStack from "@/app/(home)/_components/tech-stack";
import Projects from "@/app/(home)/_components/projects";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Contact from "./contact";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Container() {
  const container = useRef<HTMLDivElement>(null);
  const projectsSectionRef = useRef<HTMLDivElement>(null);
  const projectsWrapperRef = useRef<HTMLDivElement>(null);
  const projectsTrackRef = useRef<HTMLUListElement>(null);

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
      let projectsHorizontalTrigger: ScrollTrigger | undefined;

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

      const projectsSection = projectsSectionRef.current;
      const projectsWrapper = projectsWrapperRef.current;
      const projectsTrack = projectsTrackRef.current;

      if (projectsSection && projectsWrapper && projectsTrack) {
        const projectsTween = gsap.to(projectsTrack, {
          x: () =>
            `-${projectsTrack.scrollWidth - projectsWrapper.offsetWidth}px`,
          ease: "none",
          scrollTrigger: {
            trigger: projectsSection,
            start: "top top",
            end: () =>
              `+=${projectsTrack.scrollWidth - projectsWrapper.offsetWidth}`,
            scrub: true,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        projectsHorizontalTrigger = projectsTween.scrollTrigger ?? undefined;
      }

      return () => {
        trigger?.kill();
        projectsHorizontalTrigger?.kill();
      };
    },
    { scope: container },
  );

  return (
    <main ref={container} className="space-y-50">
      <Hero className="hero" />
      <About className="about" />
      <TechStack className="tech-stack" />
      <Projects
        className="projects"
        sectionRef={projectsSectionRef}
        wrapperRef={projectsWrapperRef}
        trackRef={projectsTrackRef}
      />
      <Contact />
    </main>
  );
}
