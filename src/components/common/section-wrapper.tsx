import { twMerge } from "tailwind-merge";

export default function SectionWrapper({
  children,
  className,
  ref,
  isFullWidth = false,
}: {
  children: React.ReactNode;
  className?: string;
  ref?: React.Ref<HTMLDivElement>;
  isFullWidth?: boolean;
}) {
  return (
    <section className={className} ref={ref}>
      <div
        className={twMerge(
          "inner relative flex flex-col gap-10 sm:gap-15 md:gap-20 lg:gap-30",
          isFullWidth && "w-full",
        )}
      >
        {children}
      </div>
    </section>
  );
}
