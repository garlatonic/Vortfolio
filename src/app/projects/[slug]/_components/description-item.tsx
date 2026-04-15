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
    <div className={twMerge("flex flex-col gap-5", className)}>
      <h3 className="text-sm font-bold tracking-widest text-muted-foreground">
        {title}
      </h3>
      {listType === "list" && (
        <ul className="space-y-4 text-foreground/90 font-medium ml-6 list-disc ">
          {(description as string[]).map((d, index) => (
            <li key={index}>{d}</li>
          ))}
        </ul>
      )}
      {listType === "badge" && (
        <div className="flex flex-wrap gap-2 text-foreground/90 font-medium">
          {(description as string[]).map((d, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-muted-foreground/10 text-xs md:text-base font-medium"
            >
              {d}
            </span>
          ))}
        </div>
      )}
      {!listType &&
        (Array.isArray(description) ? (
          description.map((desc, index) => (
            <p key={index} dangerouslySetInnerHTML={{ __html: desc }} />
          ))
        ) : (
          <p dangerouslySetInnerHTML={{ __html: description }} />
        ))}
    </div>
  );
}
