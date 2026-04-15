"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import { ExternalLinkIcon, FileTextIcon } from "lucide-react";

export default function ProjectItem({ project }: { project: Project }) {
  return (
    <li
      key={project.slug}
      className="project-item flex shrink-0 items-start flex-col-reverse xl:flex-row gap-y-10 gap-x-15 w-[80dvw] max-w-350 group xl:items-center group"
    >
      <div className="space-y-5 xl:space-y-10 flex-1">
        <div className="project-header space-y-3 xl:space-y-5">
          <p className="project-category text-xs md:text-base font-medium text-muted-foreground  tracking-wide">
            {project.number.toString().padStart(2, "0")} / {project.category}
          </p>
          <h3 className="project-title text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-bold leading-tight break-keep">
            {project.name}
          </h3>
        </div>
        <Separator />
        <div className="project-body space-y-3 xl:space-y-5">
          <p className="project-overview text-sm md:text-base xl:text-lg font-medium text-muted-foreground line-clamp-2">
            {project.description[0]}
          </p>
          <ul className="flex flex-wrap gap-2">
            {project.skills.map((skill, index) => (
              <li
                key={index}
                className="px-2 py-1 bg-muted-foreground/10 text-xs md:text-base font-medium"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <Separator />
        <div className="project-links flex gap-3">
          <Button variant="outline" size="icon-lg" className="cursor-pointer">
            <Link href={`/projects/${project.slug}`}>
              <FileTextIcon />
              <span className="sr-only">프로젝트 상세보기</span>
            </Link>
          </Button>
          {project.link && (
            <Button variant="outline" size="icon-lg" className="cursor-pointer">
              <Link href={project.link} target="_blank">
                <ExternalLinkIcon />
                <span className="sr-only">사이트로 이동</span>
              </Link>
            </Button>
          )}
          {project.githubLink && (
            <Button size="icon-lg" className="cursor-pointer">
              <Link href={project.githubLink} target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-github"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                </svg>
                <span className="sr-only">GitHub에서 프로젝트 보기</span>
              </Link>
            </Button>
          )}
        </div>
      </div>
      <div className="project-thumbnail relative aspect-750/500 flex-1.5 rounded-4xl overflow-hidden h-auto border">
        <Image
          src={project.thumbnail}
          alt={`${project.name} screenshot`}
          width={750}
          height={500}
          className="transition-transform duration-300 group-hover:scale-105"
          priority
        />
      </div>
    </li>
  );
}
