"use client";
import SectionTitle from "@/components/common/section-title";
import SectionWrapper from "@/components/common/section-wrapper";
import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import type { RefObject } from "react";
import { twMerge } from "tailwind-merge";
import ProjectItem from "./project-item";

type ProjectsProps = {
  className?: string;
  sectionRef?: RefObject<HTMLDivElement | null>;
  wrapperRef?: RefObject<HTMLDivElement | null>;
  trackRef?: RefObject<HTMLUListElement | null>;
};

export default function Projects({
  className,
  sectionRef,
  wrapperRef,
  trackRef,
}: ProjectsProps) {
  return (
    <SectionWrapper
      ref={sectionRef}
      className={twMerge("py-10", className)}
      isFullWidth
    >
      <SectionTitle title="Projects" className="inner projects-section-title" />
      <div
        ref={wrapperRef}
        className="px-4 md:px-8 lg:px-12 projects-track-wrapper overflow-hidden"
      >
        <ul
          ref={trackRef}
          className="inline-flex w-max flex-nowrap gap-5 md:gap-10 lg:gap-20 xl:gap-40"
        >
          {projects.map((project) => (
            <ProjectItem key={project.id} project={project} />
          ))}
        </ul>
      </div>
    </SectionWrapper>
  );
}
