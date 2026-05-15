"use client";

import ProjectItem from "@/app/(home)/_components/project-item";
import SectionTitle from "@/components/common/section-title";
import SectionWrapper from "@/components/common/section-wrapper";
import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";

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
          className="flex flex-col gap-20 px-8 md:inline-flex md:w-max md:flex-row md:flex-nowrap md:gap-10 lg:gap-20 lg:px-12 xl:gap-40"
        >
          {projects.slice(0, 3).map((project) => (
            <ProjectItem
              key={project.slug}
              project={project}
              onOpenModal={onOpenModal}
            />
          ))}
          <li className="project-item w-full self-center md:w-auto">
            <Link
              href="/projects"
              className="group hover:bg-primary/10 border-border bg-background hover:text-foreground dark:hover:bg-input/30 flex shrink-0 flex-col items-center justify-center gap-1.5 rounded-2xl border bg-clip-padding p-10 transition-all md:aspect-square md:w-auto md:rounded-full md:p-12"
            >
              <p className="text-muted-foreground project-category text-xs font-medium tracking-wide md:text-sm">
                More Works
              </p>
              <h3 className="project-title flex items-center gap-2 text-lg leading-tight font-extrabold break-keep sm:text-xl md:text-2xl lg:text-3xl">
                All Projects
                <ArrowUpRightIcon className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 md:size-6 lg:size-8" />
              </h3>
            </Link>
          </li>
        </ul>
      </div>
    </SectionWrapper>
  );
}
