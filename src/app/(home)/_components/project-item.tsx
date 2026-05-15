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
      className="project-item group max-w-350 md:w-[80dvw]"
    >
      <button
        className="grid w-full gap-x-15 gap-y-6 text-left md:gap-y-8 lg:grid-cols-5 lg:gap-y-10"
        onClick={() => onOpenModal(project.slug)}
        aria-label="프로젝트 자세히 보기"
      >
        <div className="space-y-4 md:space-y-5 lg:col-span-2 lg:flex lg:flex-col lg:justify-center lg:space-y-6">
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
                    "bg-muted-foreground/10 px-1.5 py-0.5 sm:px-2 sm:py-1",
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
                "focus-visible:border-ring focus-visible:ring-ring/30 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-input/30 inline-flex h-10 shrink-0 items-center justify-center gap-1.5 rounded-4xl border bg-clip-padding px-4 text-xs font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:ring-3 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3 aria-invalid:ring-3 sm:text-sm dark:bg-transparent [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
              )}
            >
              <FileTextIcon />
              프로젝트 상세보기
            </div>
          </div>
        </div>
        <div className="project-thumbnail relative row-start-1 aspect-750/500 h-auto overflow-hidden rounded-lg border md:rounded-xl lg:col-span-3 lg:row-start-auto lg:rounded-2xl">
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
