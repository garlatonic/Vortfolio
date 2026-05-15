"use client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { FileTextIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { TYPOGRAPHY } from "@/constants/typography";

export default function ProjectItem({
  project,
  onOpenModal,
}: {
  project: Project;
  onOpenModal: (slug: string) => void;
}) {
  return (
    <li
      key={project.slug}
      className="project-item md:w-[80dvw] max-w-350 group"
    >
      <button
        className="grid lg:grid-cols-5 gap-x-15 md:gap-y-8 lg:gap-y-10 gap-y-6 w-full text-left"
        onClick={() => onOpenModal(project.slug)}
        aria-label="프로젝트 자세히 보기"
      >
        <div className="space-y-4 md:space-y-5 lg:space-y-6 lg:col-span-2 lg:flex lg:flex-col lg:justify-center">
          <div className="project-header space-y-2 xl:space-y-5">
            <p
              className={twMerge(
                TYPOGRAPHY.project.category,
                "project-category",
              )}
            >
              {project.number.toString().padStart(2, "0")} / {project.category}
            </p>
            <h3
              className={twMerge(
                TYPOGRAPHY.project.title,
                "project-title break-keep",
              )}
            >
              {project.name}
            </h3>
          </div>
          <Separator />
          <div className="project-body space-y-2 xl:space-y-5">
            <p
              className={twMerge(
                TYPOGRAPHY.project.description,
                "project-overview break-keep",
              )}
            >
              {project.overview}
            </p>
            <ul className="flex flex-wrap gap-2">
              {project.skills.map((skill, index) => (
                <li
                  key={index}
                  className={twMerge(
                    TYPOGRAPHY.project.skillBadge,
                    "px-1.5 sm:px-2 py-0.5 sm:py-1 bg-muted-foreground/10",
                  )}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <Separator />
          <div className="project-links flex gap-3">
            <div
              className={twMerge(
                TYPOGRAPHY.ui.button,
                "inline-flex shrink-0 items-center justify-center rounded-4xl border bg-clip-padding whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:bg-transparent dark:hover:bg-input/30 h-10 gap-1.5 px-4 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3 text-xs sm:text-sm font-medium"
              )}
            >
              <FileTextIcon />
              프로젝트 상세보기
            </div>
          </div>
        </div>
        <div className="project-thumbnail relative aspect-750/500 row-start-1 lg:col-span-3 overflow-hidden h-auto border lg:row-start-auto rounded-lg md:rounded-xl lg:rounded-2xl">
          <Image
            src={project.thumbnail}
            alt={`${project.name} screenshot`}
            fill
            priority
          />
        </div>
      </button>
    </li>
  );
}
