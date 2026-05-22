import CareerItemTitle from "./career-item-title";

export default function CareerItem({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-2.5">
      <CareerItemTitle title={title} />
      {children}
    </section>
  );
}
