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
        "flex flex-col gap-2 md:gap-4 font-medium text-foreground/90 text-base",
        className,
      )}
    >
      <h3 className="text-xs md:text-sm font-bold tracking-widest text-muted-foreground">
        {title}
      </h3>
      {listType === "list" && (
        <ul className="space-y-1 md:space-y-2 text-foreground/90 ml-6 list-disc">
          {(description as string[]).map((d, index) => (
            <li key={index}>{d}</li>
          ))}
        </ul>
      )}
      {listType === "badge" && (
        <div className="flex flex-wrap gap-2 ">
          {(description as string[]).map((d, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-muted-foreground/10 text-sm"
            >
              {d}
            </span>
          ))}
        </div>
      )}
      {!listType && (
        <div className="space-y-2 lg:space-y-4">
          {Array.isArray(description) ? (
            description.map((desc, index) => (
              <p key={index} dangerouslySetInnerHTML={{ __html: desc }} />
            ))
          ) : (
            <p dangerouslySetInnerHTML={{ __html: description }} />
          )}
        </div>
      )}
    </div>
  );
}
