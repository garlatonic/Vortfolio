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
      <div className="space-y-3 border-b pb-8">
        <h3 className="text-3xs text-muted-foreground/70 leading-none font-medium tracking-widest!">
          자기소개서
        </h3>
        <div className="space-y-6">
          {data.introductionDetails.map((i) => (
            <section
              key={i.title}
              className="not-last:border-b not-last:pb-4 border-dashed space-y-4"
            >
              <h4 className="mb-4 text-sm font-semibold leading-none">{i.title}</h4>
              {i.detail.map((d, idx) => (
                <article key={idx} className="space-y-1">
                  {d.title && (
                    <h5 className="text-2xs font-semibold">[{d.title}]</h5>
                  )}
                  <div className="space-y-1">
                    <p
                      className="text-foreground/90 text-2xs [&>b]:text-foreground leading-relaxed [&>b]:font-medium"
                      dangerouslySetInnerHTML={{ __html: d.detail }}
                    />
                  </div>
                </article>
              ))}
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
