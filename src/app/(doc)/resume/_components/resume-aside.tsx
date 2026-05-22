import DocItem from "./resume-item";
import Link from "next/link";

export default function ResumeAside({
  coreCompetencies,
  techStack,
  education,
  certifications,
  portfolio,
}: {
  coreCompetencies: string[];
  techStack: string[];
  education: { title: string; subtitle: string; period: string }[];
  certifications: { title: string; issuer: string; date: string }[];
  portfolio: {
    title: string;
    description: string;
    link: string;
    icon?: React.ComponentType<{ className?: string }>;
    isLink: boolean;
  }[];
}) {
  return (
    <aside className="space-y-8">
      {/* 핵심 역량 */}
      <DocItem title="Core Competencies">
        <ul className="text-2xs">
          {coreCompetencies.map((c) => (
            <li key={c} className="before:mr-1 before:content-['•']">
              {c}
            </li>
          ))}
        </ul>
      </DocItem>
      {/* 기술 스택 */}
      <DocItem title="Tech Stack">
        <ul className="flex flex-wrap gap-1">
          {techStack.map((s) => (
            <li key={s}>
              <span className="text-2xs bg-muted text-muted-foreground border px-2 py-1 font-medium">
                {s}
              </span>
            </li>
          ))}
        </ul>
      </DocItem>
      {/* 교육 */}
      <DocItem title="Education">
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
      </DocItem>
      {/* 자격증 */}
      <DocItem title="Certificate">
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
      </DocItem>
      {/* 포트폴리오 */}
      <DocItem title="Portfolio">
        <ul className="flex flex-col gap-1">
          {portfolio.map((item) => (
            <li key={item.title}>
              <Link
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xs text-muted-foreground hover:text-primary flex items-center gap-1"
              >
                {item.icon && <item.icon className="size-3" />}
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </DocItem>
    </aside>
  );
}
