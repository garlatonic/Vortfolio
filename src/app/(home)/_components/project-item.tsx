"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import GithubIcon from "@/../public/ico/ico_github.svg";
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
                <GithubIcon />
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
