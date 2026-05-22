export default function CareerItemTitle({ title }: { title: string }) {
  return (
    <h3 className="text-3xs font-semibold tracking-[0.18em] text-zinc-500 uppercase">
      {title}
    </h3>
  );
}
