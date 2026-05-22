import { Montserrat } from "next/font/google";
import { twMerge } from "tailwind-merge";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function ResumeItemTitle({
  title,
  id,
}: {
  title: string;
  id?: string;
}) {
  return (
    <h2
      id={id}
      className={twMerge(
        "text-3xs mb-3 border-b pb-2 leading-none font-medium tracking-widest! text-zinc-400 uppercase",
        montserrat.className,
      )}
    >
      {title}
    </h2>
  );
}
