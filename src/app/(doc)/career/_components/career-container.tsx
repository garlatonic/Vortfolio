import { careerData } from "@/data/career";
import CareerHeader from "./career-header";
import CareerItem from "./career-item";
import CareerProjectCard from "./career-project-card";

export default function CareerContainer() {
  const data = careerData;

  return (
    <div className="space-y-8 break-keep">
      <CareerHeader />
      {data.career.map((c, i) => (
        <article
          key={c.company}
          className="grid gap-8 border-b border-zinc-200 pb-8 md:grid-cols-[210px_1fr] print:grid-cols-[210px_1fr] print:gap-8"
        >
          <header className="space-y-3">
            <div className="space-y-0.5">
              <h2 className="text-base leading-none font-bold">{c.company}</h2>
              <p className="text-2xs text-muted-foreground">{c.period}</p>
              <p className="text-2xs text-muted-foreground">
                {c.position.team}
                {!c.isEducation &&
                  ` · ${c.position.grade} · ${c.position.term}`}
              </p>
            </div>
            <p className="text-2xs text-muted-foreground border-t pt-2">
              {c.summary}
            </p>
          </header>
          <div className="space-y-8">
            <CareerItem title={c.isEducation ? "교육 내용" : "담당 업무"}>
              <ul className="text-2xs space-y-0.5 leading-relaxed text-zinc-700">
                {c.responsibilities.map((r, i) => (
                  <li key={i} className="before:mr-1 before:content-['-']">
                    {r}
                  </li>
                ))}
              </ul>
            </CareerItem>
            <CareerItem title={c?.isEducation ? "수료 성과" : "핵심 성과"}>
              <div className="space-y-4">
                {c.keyAchievements.map((k) => (
                  <section key={k.title} className="space-y-1.5">
                    <h4 className="text-2xs font-medium">{k.title}</h4>
                    <ul className="text-2xs space-y-0.5 leading-relaxed text-zinc-700">
                      {k.details.map((d, i) => (
                        <li
                          key={i}
                          className="before:mr-1 before:content-['-']"
                        >
                          {d}
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            </CareerItem>
            <CareerItem title="프로젝트">
              <div className="space-y-4">
                {c.projects.map((p) => (
                  <CareerProjectCard
                    key={p.title}
                    project={p}
                    isEducation={c.isEducation}
                  />
                ))}
              </div>
            </CareerItem>
          </div>
        </article>
      ))}
    </div>
  );
}
