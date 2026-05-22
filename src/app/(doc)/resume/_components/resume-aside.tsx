import ResumeItem from "./resume-item";

export default function ResumeAside({
  coreCompetencies,
  techStack,
  education,
  certifications,
  portfolio,
}: Pick<
  ResumeData,
  | "coreCompetencies"
  | "techStack"
  | "education"
  | "certifications"
  | "portfolio"
>) {
  return (
    <aside className="space-y-8">
      {/* 핵심 역량 */}
      <ResumeItem title="Core Competencies">
        <ul className="text-2xs">
          {coreCompetencies.map((c) => (
            <li key={c} className="before:mr-1 before:content-['•']">
              {c}
            </li>
          ))}
        </ul>
      </ResumeItem>
      {/* 기술 스택 */}
      <ResumeItem title="Tech Stack">
        <ul className="flex flex-wrap gap-1">
          {techStack.map((s) => (
            <li key={s}>
              <span className="text-2xs bg-muted text-muted-foreground border px-2 py-1 font-medium">
                {s}
              </span>
            </li>
          ))}
        </ul>
      </ResumeItem>
      {/* 교육 */}
      <ResumeItem title="Education">
        <ul className="space-y-4">
          {education.map((edu) => (
            <li key={edu.title} className="space-y-1">
              <p className="text-2xs font-medium">{edu.title}</p>
              <p className="text-3xs text-muted-foreground">
                {edu.subtitle}
                <br />
                {edu.period}
              </p>
            </li>
          ))}
        </ul>
      </ResumeItem>
      {/* 자격증 */}
      <ResumeItem title="Certificate">
        <ul className="space-y-4">
          {certifications.map((cert) => (
            <li key={cert.title} className="space-y-1">
              <p className="text-2xs font-medium">{cert.title}</p>
              <p className="text-3xs text-muted-foreground">
                {cert.issuer} · {cert.date}
              </p>
            </li>
          ))}
        </ul>
      </ResumeItem>
      {/* 포트폴리오 */}
      <ResumeItem title="Portfolio">
        <ul className="flex flex-col gap-1">
          {portfolio.map((item) => (
            <li key={item.title}>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xs text-muted-foreground hover:text-primary flex items-center gap-1"
              >
                {item.icon && <item.icon className="size-3" />}
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </ResumeItem>
    </aside>
  );
}
