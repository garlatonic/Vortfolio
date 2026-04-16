import GithubIcon from "@/components/common/github-icon";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Video from "@/components/ui/video";
import { projects } from "@/data/projects";
import { ExternalLinkIcon } from "lucide-react";
import Link from "next/link";
import Description from "./_components/description";
import SectionTitle from "@/components/common/section-title";
import SectionWrapper from "@/components/common/section-wrapper";
import ImageGrid from "./_components/image-grid";
import TroubleShooting from "./_components/trouble-shooting";
import { Fragment } from "react/jsx-runtime";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <main className="py-10 inner flex flex-col justify-center items-center min-h-screen">
        <h1 className="text-4xl font-bold text-center">
          존재하지 않는 프로젝트입니다.
        </h1>
        <p className="text-center mt-4 text-neutral-600">
          입력하신 URL의 프로젝트를 찾을 수 없습니다. URL이 올바른지
          확인해주세요.
        </p>
        <div className="flex justify-center mt-8">
          <Link
            href="/"
            className="px-6 py-3 border  text-sm font-medium hover:bg-neutral-900 hover:text-white transition-all duration-300"
          >
            Back to Home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="py-30 space-y-10 sm:space-y-20 inner">
      <SectionWrapper className="project-hero" isFullWidth>
        <div className="flex justify-between lg:items-end gap-5 md:gap-10 flex-col lg:flex-row">
          <div className="space-y-8 ">
            <h1 className="text-4xl lg:text-7xl xl:text-8xl font-bold">
              {project?.name}
            </h1>
            <p className="font-medium text-base sm:text-lg md:text-2xl text-muted-foreground leading-relaxed">
              {project?.overview}
            </p>
          </div>
          <div className="flex gap-2 md:gap-4">
            {project?.link && (
              <Link href={project.link} target="_blank">
                <Button variant="outline" size="lg" className="rounded-none">
                  <ExternalLinkIcon />
                  <span className="sr-only sm:not-sr-only">
                    배포 사이트로 이동
                  </span>
                </Button>
              </Link>
            )}
            {project?.githubLink && (
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <ImageGrid project={project} />
          <Description project={project} />
        </div>
      </SectionWrapper>
      <Separator />
      {project?.video && (
        <SectionWrapper className="video-showcase" isFullWidth>
          <Video
            src={project.video.src}
            type={project.video.type}
            thumbnail={project?.videoThumbnail}
          />
        </SectionWrapper>
      )}
      {project.troubleshooting && (
        <SectionWrapper className="project-problem" isFullWidth>
          <SectionTitle title="Challenge & Solution" />
          {project.troubleshooting.map((ts, index) => (
            <Fragment key={ts.title}>
              <TroubleShooting troubleShooting={ts} slug={project.slug} />
              {index !== (project?.troubleshooting?.length ?? 0) - 1 && (
                <Separator />
              )}
            </Fragment>
          ))}
        </SectionWrapper>
      )}
    </main>
  );
}
