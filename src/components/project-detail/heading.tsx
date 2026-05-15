import Link from "next/link";
import SectionWrapper from "../common/section-wrapper";
import { Button } from "../ui/button";
import { ExternalLinkIcon, FileTextIcon } from "lucide-react";
import GithubIcon from "../common/github-icon";
import { TYPOGRAPHY } from "@/constants/typography";
import { twMerge } from "tailwind-merge";

export default function Heading({
  number,
  slug,
  category,
  name,
  overview,
  link,
  githubLink,
  isModal = false,
}: Pick<
  Project,
  "number" | "slug" | "category" | "name" | "overview" | "link" | "githubLink"
> & { isModal?: boolean }) {
  return (
    <SectionWrapper className="project-hero" isFullWidth>
      <div className="space-y-5">
        <div className="space-y-2 sm:space-y-4 md:space-y-6 lg:space-y-8">
          <p className={TYPOGRAPHY.heading.category}>
            {number?.toString().padStart(2, "0")} / {category}
          </p>
          <h1 className={TYPOGRAPHY.heading.title}>{name}</h1>
          <p className={TYPOGRAPHY.heading.overview}>{overview}</p>
        </div>
        <div className="flex gap-2 md:gap-4">
          {isModal && (
            <Link href={`/projects/${slug}`}>
              <Button
                variant="outline"
                size="lg"
                className={twMerge(TYPOGRAPHY.ui.button, "rounded-none")}
              >
                <FileTextIcon />
                <span className="sr-only sm:not-sr-only">
                  프로젝트 상세 페이지로 이동
                </span>
              </Button>
            </Link>
          )}
          {link && (
            <Link href={link} target="_blank">
              <Button
                variant="outline"
                size="lg"
                className={twMerge(TYPOGRAPHY.ui.button, "rounded-none")}
              >
                <ExternalLinkIcon />
                <span className="sr-only sm:not-sr-only">
                  배포 사이트로 이동
                </span>
              </Button>
            </Link>
          )}
          {githubLink && (
            <Link href={githubLink} target="_blank">
              <Button
                size="lg"
                className={twMerge(TYPOGRAPHY.ui.button, "rounded-none")}
              >
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
  );
}
