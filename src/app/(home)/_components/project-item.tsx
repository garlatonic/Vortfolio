"use client";;
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { FileTextIcon } from "lucide-react";

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
      className="project-item grid lg:grid-cols-5 gap-x-15 md:w-[80dvw] md:gap-y-8 lg:gap-y-10 max-w-350 gap-y-6 group"
    >
      <div className="space-y-4 md:space-y-5 lg:space-y-6 lg:col-span-2 lg:flex lg:flex-col lg:justify-center">
        <div className="project-header space-y-2 xl:space-y-5">
          <p className="project-category text-xs md:text-sm font-medium text-muted-foreground tracking-wide">
            {project.number.toString().padStart(2, "0")} / {project.category}
          </p>
          <h3 className="project-title text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold leading-tight break-keep">
            {project.name}
          </h3>
        </div>
        <Separator />
        <div className="project-body space-y-2 xl:space-y-5">
          <p className="project-overview text-xs md:text-sm lg:text-base xl:text-lg font-medium text-muted-foreground break-keep">
            {project.overview}
          </p>
          <ul className="flex flex-wrap gap-2">
            {project.skills.map((skill, index) => (
              <li
                key={index}
                className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-muted-foreground/10 text-xs md:text-sm lg:text-base font-medium"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <Separator />
        <div className="project-links flex gap-3">
          <Button
            variant="outline"
            size="lg"
            className="cursor-pointer"
            onClick={() => onOpenModal(project.slug)}
          >
            <FileTextIcon />
            프로젝트 상세보기
          </Button>
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
    </li>
  );
}
