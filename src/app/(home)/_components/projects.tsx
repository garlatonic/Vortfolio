"use client";

import ProjectItem from "@/app/(home)/_components/project-item";
import SectionTitle from "@/components/common/section-title";
import SectionWrapper from "@/components/common/section-wrapper";

import { projects } from "@/data/projects";
import type { RefObject } from "react";
import { twMerge } from "tailwind-merge";

type ProjectsProps = {
  className?: string;
  sectionRef?: RefObject<HTMLDivElement | null>;
  wrapperRef?: RefObject<HTMLDivElement | null>;
  trackRef?: RefObject<HTMLUListElement | null>;
  onOpenModal: (slug: string) => void;
};

export default function Projects({
  className,
  sectionRef,
  wrapperRef,
  trackRef,
  onOpenModal,
}: ProjectsProps) {
  return (
    <SectionWrapper
      ref={sectionRef}
      className={twMerge("py-10", className)}
      isFullWidth
    >
      <SectionTitle title="Projects" className="inner projects-section-title" />
      <div ref={wrapperRef} className="projects-track-wrapper overflow-hidden">
        <ul
          ref={trackRef}
          className="md:inline-flex flex md:w-max flex-col md:flex-row gap-20 md:flex-nowrap md:gap-10 lg:gap-20 xl:gap-40 px-8 lg:px-12 "
        >
          {projects.map((project) => (
            <ProjectItem
              key={project.slug}
              project={project}
              onOpenModal={onOpenModal}
            />
          ))}
        </ul>
      </div>
    </SectionWrapper>
  );
}
