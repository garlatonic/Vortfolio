import { resumeData } from "@/data/resume";

export default function CareerHeader() {
  const { name, jobTitle, meta } = resumeData;
  const email = meta.common.find((item) => item.label === "이메일");

  return (
    <header className="border-t-primary space-y-3 border-t-2 border-b py-4">
      <div className="flex items-end justify-between gap-4">
        <div className="space-y-2">
          <h1 className="text-xl leading-none font-bold">경력기술서</h1>
          <p className="text-2xs text-zinc-700">
            {name} · {jobTitle}
          </p>
        </div>
        {email && <p className="text-2xs text-zinc-500">{email.value}</p>}
      </div>
    </header>
  );
}
