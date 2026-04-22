import { CodeBlock } from "./code-block";
import { TYPOGRAPHY } from "@/constants/typography";

export default function TroubleShooting({
  troubleShooting,
  slug,
}: {
  troubleShooting: TroubleShooting;
  slug: string;
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 w-full">
      <div className="lg:col-span-1 space-y-24">
        <div className="sticky top-32 space-y-4 leading-normal">
          <h2 className={TYPOGRAPHY.troubleShooting.subject}>
            {troubleShooting.title}
          </h2>
          <div className="h-1 w-12 bg-foreground" />
        </div>
      </div>
      <div className="lg:col-span-2 space-y-8 sm:space-y-12 md:space-y-16 lg:space-y-20">
        <div className="space-y-2 md:gap-4">
          <h3 className={TYPOGRAPHY.troubleShooting.title}>
            문제 정의
          </h3>
          <p
            className={TYPOGRAPHY.troubleShooting.problem}
            dangerouslySetInnerHTML={{ __html: troubleShooting.problem }}
          />
        </div>
        <div className="space-y-2 md:gap-4">
          <h3 className={TYPOGRAPHY.troubleShooting.title}>
            해결 방안
          </h3>
          <p
            className={TYPOGRAPHY.troubleShooting.solution}
            dangerouslySetInnerHTML={{ __html: troubleShooting.solution }}
          />
        </div>
        {troubleShooting.codeSnippet && (
          <CodeBlock
            fileName={`${slug}-solution.js`}
            code={troubleShooting.codeSnippet}
          />
        )}
      </div>
    </div>
  );
}
