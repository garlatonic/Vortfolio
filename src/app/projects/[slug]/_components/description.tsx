import DescriptionItem from "./description-item";

export default function Description({ project }: { project: Project }) {
  return (
    <div className="lg:col-span-6 flex flex-col gap-16">
      <DescriptionItem
        title="프로젝트 소개"
        description={project?.description}
      />
      <DescriptionItem
        title="프로젝트 기간"
        description={`${project.startDate} - ${project.endDate}`}
      />
      <DescriptionItem title="주요 역할" description={project?.role} listType="list" />
      <DescriptionItem title="사용 기술" description={project?.skills} listType="badge" />
    </div>
  );
}
