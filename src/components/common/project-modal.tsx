"use client";

import { useEffect } from "react";
import { projects } from "@/data/projects";
import { ExternalLinkIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Video from "@/components/ui/video";
import GithubIcon from "@/components/common/github-icon";
import SectionTitle from "@/components/common/section-title";
import SectionWrapper from "@/components/common/section-wrapper";
import ImageGrid from "@/app/projects/[slug]/_components/image-grid";
import Description from "@/app/projects/[slug]/_components/description";
import TroubleShooting from "@/app/projects/[slug]/_components/trouble-shooting";
import { Fragment } from "react/jsx-runtime";
import Modal from "./modal";

type ProjectModalProps = {
  slug: string | null;
  onClose: () => void;
};

export default function ProjectModal({ slug, onClose }: ProjectModalProps) {
  const project = slug ? projects.find((p) => p.slug === slug) : null;

  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  if (!project) return null;

  return (
    <Modal onClose={onClose}>
      <SectionWrapper className="project-hero" isFullWidth>
        <div className="space-y-5">
          <div className="space-y-8">
            <p className="font-medium text-xs sm:text-sm md:text-base xl:text-lg text-muted-foreground leading-relaxed">
              {project.number.toString().padStart(2, "0")} / {project.category}
            </p>
            <h1 className="text-2xl lg:text-4xl xl:text-6xl font-black">
              {project.name}
            </h1>
            <p className="font-medium text-xs sm:text-sm md:text-base xl:text-lg text-muted-foreground leading-relaxed">
              {project.overview}
            </p>
          </div>
          <div className="flex gap-2 md:gap-4">
            {project.link && (
              <Link href={project.link} target="_blank">
                <Button variant="outline" size="lg" className="rounded-none">
                  <ExternalLinkIcon />
                  <span className="sr-only sm:not-sr-only">
                    배포 사이트로 이동
                  </span>
                </Button>
              </Link>
            )}
            {project.githubLink && (
              <Link href={project.githubLink} target="_blank">
                <Button size="lg" className="rounded-none">
                  <GithubIcon />
                  <span className="sr-only sm:not-sr-only">
                    프로젝트 저장소로 이동
                  </span>
                </Button>
              </Link>
            )}
          </div>
        </div>
      </SectionWrapper>
      <Separator />
      <SectionWrapper className="project-detail" isFullWidth>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          <ImageGrid project={project} />
          <Description project={project} />
        </div>
      </SectionWrapper>
      <Separator />
      {project.video && (
        <SectionWrapper className="video-showcase" isFullWidth>
          <Video
            src={project.video.src}
            type={project.video.type}
            thumbnail={project.videoThumbnail}
          />
        </SectionWrapper>
      )}
      {project.troubleshooting && (
        <SectionWrapper className="project-problem" isFullWidth>
          <SectionTitle title="Challenge & Solution" />
          {project.troubleshooting.map((ts, index) => (
            <Fragment key={ts.title}>
              <TroubleShooting troubleShooting={ts} slug={project.slug} />
              {index !== (project.troubleshooting?.length ?? 0) - 1 && (
                <Separator />
              )}
            </Fragment>
          ))}
        </SectionWrapper>
      )}
    </Modal>
  );
}
