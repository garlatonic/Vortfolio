"use client";

import Link from "next/link";
import SectionTitle from "@/components/common/section-title";
import SectionWrapper from "@/components/common/section-wrapper";
import { Separator } from "@/components/ui/separator";
import { TYPOGRAPHY } from "@/constants/typography";
import { twMerge } from "tailwind-merge";

const skillGroups = [
  {
    title: "코어",
    description: "주력으로 사용하는 프론트엔드 기본 스택입니다.",
    items: ["React", "TypeScript", "Next.js", "JavaScript"],
  },
  {
    title: "상태 관리",
    description:
      "컴포넌트 간 상태 공유와 서버 상태 관리를 위해 사용하는 도구입니다.",
    items: ["TanStack Query", "Zustand"],
  },
  {
    title: "폼 관리",
    description: "폼 유효성 검사와 관리를 위해 사용하는 도구입니다.",
    items: ["React Hook Form", "zod"],
  },
  {
    title: "스타일링",
    description: "UI 구성과 컴포넌트 스타일링에 사용하는 도구입니다.",
    items: ["Tailwind CSS", "shadcn/ui", "Styled-Components"],
  },
  {
    title: "형상 관리",
    description: "코드 버전 관리와 협업에 사용하는 도구입니다.",
    items: ["Git", "GitHub"],
  },
  {
    title: "협업 도구",
    description: "협업과 커뮤니케이션에 사용하는 도구입니다.",
    items: ["Notion", "Figma", "Slack", "Photoshop", "Swagger"],
  },
];

export default function About({ className }: { className?: string }) {
  return (
    <SectionWrapper className={className}>
      <SectionTitle
        title="About me"
        className="about-section-title sr-only hidden"
      />
      <div className="about-content flex flex-col gap-5 md:gap-10 xl:flex-row xl:gap-30">
        <h3 className="about-title flex flex-col font-extrabold whitespace-nowrap">
          <span className="about-mask block overflow-hidden">
            <span
              className={twMerge(
                TYPOGRAPHY.about.introLead,
                "about-active block h-full",
              )}
            >
              사용자의 편의를 설계하는
            </span>
          </span>
          <span
            className={twMerge(
              TYPOGRAPHY.about.introHighlight,
              "bg-background block",
            )}
          >
            프론트엔드 개발자
          </span>
        </h3>
        <div className="about-body flex-1 space-y-10">
          <div
            className={twMerge(
              TYPOGRAPHY.about.description,
              "space-y-5 lg:[&>p>br]:inline",
            )}
          >
            <p className="about-desc">
              3년간의{" "}
              <span className="about-highlight text-foreground font-bold">
                웹 퍼블리싱 경험
              </span>
              을 통해 사용자 경험이 서비스의 품질을 결정한다는 것을 배웠습니다.
            </p>
            <p className="about-desc">
              이제는 주니어 프론트엔드 개발자로서{" "}
              <span className="about-highlight text-foreground font-bold">
                기술적 완성도와 사용자 중심의 관점
              </span>
              을 함께 고민하며, <br className="hidden lg:block" />더 자연스럽고
              직관적인 사용 경험을 만드는 데 집중하고 있습니다.
            </p>
            <p className="about-desc">
              화면 속 작은 요소 하나까지도 의미 있게 설계하여,{" "}
              <br className="hidden lg:block" />
              <span className="about-highlight text-foreground font-bold">
                사용자가 기술을 의식하지 않고 자연스럽게 몰입할 수 있는 서비스
              </span>
              를 만들고자 합니다.
            </p>
          </div>
          <Separator />
          <div className="space-y-5">
            <div className="flex items-end justify-between gap-4">
              <div className="space-y-1">
                <h3 className="text-foreground text-lg font-bold md:text-xl">
                  기술 스택
                </h3>
              </div>
            </div>
            <ul className="ml-6 list-disc space-y-5">
              {skillGroups.map((group) => (
                <li key={group.title}>
                  <div className="flex flex-col items-start gap-4 md:flex-row md:items-center">
                    <h4 className="font-bold uppercase">{group.title}</h4>
                    <ul className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="border-border/70 bg-background text-foreground rounded-full border px-3 py-1.5 text-sm font-medium"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <Separator />
          <p className="text-muted-foreground text-sm">
            <Link
              href="/resume"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground font-medium underline underline-offset-4"
            >
              이력서
            </Link>
            와{" "}
            <Link
              href="/career"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground font-medium underline underline-offset-4"
            >
              경력사항
            </Link>
            으로 더 자세한 정보를 확인하실 수 있습니다.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
