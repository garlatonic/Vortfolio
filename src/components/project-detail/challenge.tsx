import { Fragment } from "react/jsx-runtime";
import SectionTitle from "../common/section-title";
import SectionWrapper from "../common/section-wrapper";
import TroubleShooting from "@/components/project-detail/trouble-shooting";
import { Separator } from "../ui/separator";

export default function Challenge({
  troubleshooting,
  slug,
}: Pick<Project, "troubleshooting" | "slug">) {
  if (!troubleshooting || troubleshooting.length === 0) return null;

  return (
    <SectionWrapper className="project-problem" isFullWidth>
      <SectionTitle title="Challenge & Solution" />
      {troubleshooting.map((ts, index) => (
        <Fragment key={ts.title}>
          <TroubleShooting troubleShooting={ts} slug={slug} />
          {index !== (troubleshooting?.length ?? 0) - 1 && <Separator />}
        </Fragment>
      ))}
    </SectionWrapper>
  );
}
