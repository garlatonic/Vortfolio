import { Separator } from "../ui/separator";
import Heading from "./heading";
import Description from "./description";
import DemoVideo from "./demo-video";
import Challenge from "./challenge";

export default function ProjectDetail({
  project,
  isModal = false,
}: {
  project: Project;
  isModal?: boolean;
}) {
  return (
    <>
      <Heading {...project} isModal={isModal} />
      <Separator />
      <Description {...project} />
      <Separator />
      <DemoVideo {...project} />
      <Challenge {...project} />
    </>
  );
}
