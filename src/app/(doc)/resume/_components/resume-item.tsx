import ResumeItemTitle from "./resume-item-title";

export default function ResumeItem({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const headingId = `resume-item-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

  return (
    <section className="space-y-2" aria-labelledby={headingId}>
      <ResumeItemTitle title={title} id={headingId} />
      {children}
    </section>
  );
}
