import SectionWrapper from "../common/section-wrapper";
import DescriptionItem from "./description-item";
import Image from "next/image";

export default function Description({
  thumbnail,
  name,
  description,
  detailImages,
  startDate,
  endDate,
  role,
  skills,
}: Pick<
  Project,
  | "thumbnail"
  | "name"
  | "description"
  | "detailImages"
  | "startDate"
  | "endDate"
  | "role"
  | "skills"
>) {
  return (
    <SectionWrapper className="project-detail" isFullWidth>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        <div className="lg:col-span-6">
          <div className="flex flex-col gap-4 lg:gap-8 sticky top-18">
            <div className="w-full aspect-750/500 overflow-hidden relative border group">
              <Image
                src={thumbnail}
                alt={`${name} Main Interface`}
                fill
                className="transition-transform group-hover:scale-105"
              />
            </div>
            {detailImages.length > 0 && (
              <div className="grid grid-cols-2 gap-4 lg:gap-8">
                {detailImages.map((imgSrc, index) => (
                  <div
                    className="aspect-750/500 overflow-hidden border relative group"
                    key={index}
                  >
                    <Image
                      src={imgSrc}
                      className="transition-transform group-hover:scale-105"
                      alt={`Detail ${index + 1}`}
                      fill
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="lg:col-span-6 flex flex-col gap-8 lg:gap-16">
          <DescriptionItem title="프로젝트 소개" description={description} />
          <DescriptionItem
            title="프로젝트 기간"
            description={`${startDate} - ${endDate}`}
          />
          <DescriptionItem
            title="주요 역할"
            description={role}
            listType="list"
          />
          <DescriptionItem
            title="사용 기술"
            description={skills}
            listType="badge"
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
