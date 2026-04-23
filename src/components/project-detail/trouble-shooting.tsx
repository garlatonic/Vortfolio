import Image from "next/image";
import { CodeBlock } from "./code-block";
import { TYPOGRAPHY } from "@/constants/typography";
import { Comparison, ComparisonHandle, ComparisonItem } from "../ui/comparison";

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
          <h3 className={TYPOGRAPHY.troubleShooting.title}>문제 정의</h3>
          <p
            className={TYPOGRAPHY.troubleShooting.problem}
            dangerouslySetInnerHTML={{ __html: troubleShooting.problem }}
          />
        </div>
        <div className="space-y-2 md:gap-4">
          <h3 className={TYPOGRAPHY.troubleShooting.title}>해결 방안</h3>
          <p
            className={TYPOGRAPHY.troubleShooting.solution}
            dangerouslySetInnerHTML={{ __html: troubleShooting.solution }}
          />
        </div>
        {troubleShooting.images && troubleShooting.images.length > 0 && (
          <div className="space-y-2 md:gap-4">
            {troubleShooting.images.map((image, index) => (
              <Comparison key={index} className="aspect-750/500 w-full border">
                <ComparisonItem position="left">
                  <Image
                    src={image.before}
                    alt="Before"
                    className="size-full object-cover grayscale"
                    fill
                  />
                </ComparisonItem>
                <ComparisonItem position="right">
                  <Image
                    src={image.after}
                    alt="After"
                    className="size-full object-cover"
                    fill
                  />
                </ComparisonItem>
                <ComparisonHandle />
              </Comparison>
            ))}
          </div>
        )}
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
