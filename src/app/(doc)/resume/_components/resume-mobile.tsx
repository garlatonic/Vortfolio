import ResumeItem from "./resume-item";

export default function ResumeMobile({
  career,
  projects,
  coreCompetencies,
  techStack,
  education,
  certifications,
  portfolio,
}: Pick<
  ResumeData,
  | "career"
  | "projects"
  | "coreCompetencies"
  | "techStack"
  | "education"
  | "certifications"
  | "portfolio"
>) {
  return (
    <div className="space-y-8">
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

      {/* 경력 */}
      <ResumeItem title="Experience">
        {career.map((c) => (
          <article className="space-y-2" key={c.company}>
            <header className="flex justify-between gap-2">
              <div className="space-y-0.5">
                <h3 className="flex-1 text-xs font-bold">{c.company}</h3>
                <p className="text-3xs text-muted-foreground">
                  {c.position.team} · {c.position.grade} · {c.position.term}
                </p>
              </div>
              <span className="text-3xs text-muted-foreground">{c.period}</span>
            </header>
            {c.responsibilities.map((r, i) => (
              <div key={i} className="space-y-1">
                <h4 className="text-3xs text-muted-foreground font-medium">
                  {r.label}
                </h4>
                <ul className="text-2xs">
                  {r.details.map((d, j) => (
                    <li key={j} className="before:mr-1 before:content-['•']">
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </article>
        ))}
      </ResumeItem>

      {/* 프로젝트 */}
      <ResumeItem title="Projects">
        <div className="space-y-4">
          {projects.map((p) => (
            <article
              className="space-y-2 border-dashed not-last:border-b not-last:pb-4"
              key={p.title}
            >
              <header className="flex justify-between gap-2">
                <div className="space-y-0.5">
                  <h3 className="flex-1 text-xs font-bold">{p.title}</h3>
                  <p className="text-3xs text-muted-foreground">
                    {p.affiliation}
                  </p>
                </div>
                <span className="text-3xs text-muted-foreground">
                  {p.period}
                </span>
              </header>
              <p className="text-2xs text-foreground">{p.description}</p>
              <div className="space-y-1">
                <h4 className="text-3xs text-muted-foreground font-medium">
                  담당 역할
                </h4>
                <ul className="text-2xs">
                  {p.role.map((r, i) => (
                    <li key={i} className="before:mr-1 before:content-['•']">
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
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
    </div>
  );
}
