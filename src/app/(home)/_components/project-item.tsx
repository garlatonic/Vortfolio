import Image from "next/image";
import Link from "next/link";

export default function ProjectItem({ project }: { project: Project }) {
  return (
    <li
      key={project.id}
      className="project-item flex shrink-0 flex-col-reverse xl:flex-row gap-y-10 gap-x-15 xl:w-[85dvw]"
    >
      <div className="space-y-5 flex-1">
        <h3 className="project-title text-2xl font-bold uppercase transition-all duration-300 md:text-4xl lg:text-6xl break-keep leading-snug">
          {project.name}
        </h3>
        <p className="project-overview text-lg font-medium text-muted-foreground transition-all duration-300 md:text-xl lg:text-2xl">
          {project.overview}
        </p>
        <div className="project-links flex gap-5">
          {project.link && (
            <Link
              href={project.link}
              target="_blank"
              className="project-link text-sm font-semibold text-foreground underline transition-opacity hover:opacity-70 md:text-base lg:text-lg"
            >
              View Project
            </Link>
          )}
          {project.githubLink && (
            <Link
              href={project.githubLink}
              target="_blank"
              className="project-link text-sm font-semibold text-foreground underline transition-opacity hover:opacity-70 md:text-base lg:text-lg"
            >
              View Code
            </Link>
          )}
        </div>
      </div>
      <Image
        src={project.thumbnail}
        alt={`${project.name} screenshot`}
        width={750}
        height={500}
        className="aspect-750/500 h-auto flex-1.5 rounded-lg object-cover "
        priority
      />
    </li>
  );
}
