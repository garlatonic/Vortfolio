"use client";

import Hero from "@/app/(home)/_components/hero";
import About from "@/app/(home)/_components/about";
import Projects from "@/app/(home)/_components/projects";
import Footer from "@/components/common/footer";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectModal from "@/components/common/project-modal";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Container() {
  const container = useRef<HTMLDivElement>(null);
  const projectsSectionRef = useRef<HTMLDivElement>(null);
  const projectsWrapperRef = useRef<HTMLDivElement>(null);
  const projectsTrackRef = useRef<HTMLUListElement>(null);
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);

  useGSAP(
    () => {
      const query = gsap.utils.selector(container);

      // Hero 섹션 페이드 아웃 및 축소 애니메이션
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

      // About 섹션 활성화 라인 애니메이션
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

      let trigger: ScrollTrigger | undefined;

      // 프로젝트 섹션 가로 스크롤 애니메이션 (모바일 제외)
      const projectsSection = projectsSectionRef.current;
      const projectsWrapper = projectsWrapperRef.current;
      const projectsTrack = projectsTrackRef.current;

      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px)", () => {
        if (!projectsSection || !projectsWrapper || !projectsTrack) return;

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

        trigger = projectsTween.scrollTrigger ?? undefined;
      });

      return () => {
        trigger?.kill();
      };
    },
    { scope: container },
  );

  return (
    <main ref={container} className="space-y-50 overflow-hidden">
      <Hero className="hero" />
      <About className="about" />
      <Projects
        className="projects"
        sectionRef={projectsSectionRef}
        wrapperRef={projectsWrapperRef}
        trackRef={projectsTrackRef}
        onOpenModal={setSelectedSlug}
      />
      <Footer />
      <ProjectModal slug={selectedSlug} onClose={() => setSelectedSlug(null)} />
    </main>
  );
}
