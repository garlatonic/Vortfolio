import { TYPOGRAPHY } from "@/constants/typography";
import { twMerge } from "tailwind-merge";

export default function DescriptionItem({
  title,
  description,
  className,
  listType,
}: {
  title: string;
  description: string | string[];
  className?: string;
  listType?: "list" | "badge";
}) {
  return (
    <div
      className={twMerge(
        TYPOGRAPHY.description.content,
        "flex flex-col gap-2 md:gap-4",
        className,
      )}
    >
      <h3 className={twMerge(TYPOGRAPHY.description.title)}>{title}</h3>
      {listType === "list" && (
        <ul className={twMerge("space-y-1 md:space-y-2 ml-6 list-disc")}>
          {(description as string[]).map((d, index) => (
            <li key={index}>{d}</li>
          ))}
        </ul>
      )}
      {listType === "badge" && (
        <div className="flex flex-wrap gap-2 ">
          {(description as string[]).map((d, index) => (
            <span key={index} className={TYPOGRAPHY.description.badge}>
              {d}
            </span>
          ))}
        </div>
      )}
      {!listType && (
        <div className="space-y-2 lg:space-y-4">
          {Array.isArray(description) ? (
            description.map((desc, index) => (
              <p key={index} dangerouslySetInnerHTML={{ __html: desc }} className="[&>b]:text-accent-foreground" />
            ))
          ) : (
            <p dangerouslySetInnerHTML={{ __html: description }} className="[&>b]:text-accent-foreground" />
          )}
        </div>
      )}
    </div>
  );
}
