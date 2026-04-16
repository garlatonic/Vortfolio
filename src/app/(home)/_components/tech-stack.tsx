import SectionTitle from "@/components/common/section-title";
import SectionWrapper from "@/components/common/section-wrapper";

const TECH_STACK_LINES = [
  "Next.js / React",
  "TypeScript / JavaScript",
  "Styled Components / Tailwind CSS",
  "TanStack Query / Zustand",
  "SEO / Web Vitals",
  "Git / GitHub",
  "Figma / Adobe XD",
];

export default function TechStack({ className }: { className?: string }) {
  return (
    <SectionWrapper className={className}>
      <SectionTitle title="Tech Stack" className="tech-stack-section-title" />
      <ul className="flex flex-col gap-8 sm:gap-12 md:gap-16 lg:gap-20 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold uppercase">
        {TECH_STACK_LINES.map((line) => (
          <li key={line} className="line leading-none">
            {line}
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
}
