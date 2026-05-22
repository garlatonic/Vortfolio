"use client";

import { resumeData } from "@/data/resume";
import { QuoteIcon } from "lucide-react";
import ResumeAside from "./resume-aside";
import ResumeContent from "./resume-content";
import ResumeHeader from "./resume-header";
import { useIsMobile } from "@/hooks/useIsMobile";
import { Activity } from "react";
import ResumeMobile from "./resume-mobile";

export default function ResumeContainer() {
  const data = resumeData;
  const isMobile = useIsMobile();

  return (
    <>
      <div className="mb-10 flex flex-col items-center gap-3">
        <QuoteIcon
          className="size-5 rotate-180 fill-zinc-900 stroke-transparent"
          aria-hidden="true"
        />
        <blockquote
          className="text-sm"
          dangerouslySetInnerHTML={{ __html: data.slogan }}
        />
      </div>
      <ResumeHeader {...data} />
      <div className="grid gap-8 border-b border-zinc-200 pb-8 md:grid-cols-[210px_1fr] print:grid-cols-[210px_1fr] print:gap-8">
        <Activity mode={isMobile ? "hidden" : "visible"}>
          <ResumeAside {...data} />
          <ResumeContent {...data} />
        </Activity>
        <Activity mode={isMobile ? "visible" : "hidden"}>
          <ResumeMobile {...data} />
        </Activity>
      </div>
      {/* 자기소개 */}
      <div className="space-y-3">
        <h3 className="text-3xs text-muted-foreground/70 leading-none font-medium tracking-widest!">
          자기소개서
        </h3>
        <div className="space-y-6">
          {data.introductionDetail.map((item, idx) => (
            <article key={idx} className="space-y-2">
              {item.title && (
                <h4 className="text-xs font-semibold">{item.title}</h4>
              )}
              <p
                className="text-foreground/90 text-2xs [&>b]:text-foreground leading-relaxed [&>b]:font-medium"
                dangerouslySetInnerHTML={{ __html: item.detail }}
              />
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
