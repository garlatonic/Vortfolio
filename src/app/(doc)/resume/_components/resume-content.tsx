import DocItem from "./resume-item";

export default function ResumeContent({
  career,
  projects,
}: Pick<ResumeData, "career" | "projects">) {
  return (
    <div className="space-y-8">
      {/* 경력 */}
      <DocItem title="Experience">
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
      </DocItem>

      {/* 프로젝트 */}
      <DocItem title="Projects">
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
      </DocItem>
    </div>
  );
}
