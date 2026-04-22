import SectionWrapper from "../common/section-wrapper";
import Video from "../ui/video";

export default function DemoVideo({
  video,
  videoThumbnail,
}: Pick<Project, "video" | "videoThumbnail">) {
  if (!video) {
    return null;
  }

  return (
    <SectionWrapper className="video-showcase" isFullWidth>
      <Video src={video.src} type={video.type} thumbnail={videoThumbnail} />
    </SectionWrapper>
  );
}
