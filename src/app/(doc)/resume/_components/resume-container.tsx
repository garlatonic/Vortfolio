import { resumeData } from "@/data/resume";
import { QuoteIcon } from "lucide-react";
import ResumeAside from "./resume-aside";
import ResumeContent from "./resume-content";
import ResumeHeader from "./resume-header";

export default function ResumeContainer() {
  const data = resumeData;

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
      <div className="grid grid-cols-[210px_1fr] gap-x-10">
        <ResumeAside {...data} />
        <ResumeContent {...data} />
      </div>
    </>
  );
}
