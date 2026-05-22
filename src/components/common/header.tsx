import Link from "next/link";
import { twMerge } from "tailwind-merge";
import ThemeButton from "../theme-button";

export default function Header({
  className,
  isMain,
}: {
  className?: string;
  isMain?: boolean;
}) {
  return (
    <header
      className={twMerge(
        "header top-0 right-0 left-0 z-10 py-5",
        className,
        !isMain && "fixed",
        isMain && "absolute w-full",
      )}
    >
      <nav className="gnb flex w-full items-center justify-between">
        <Link href="/" className="logo text-lg font-black tracking-wide">
          garlatonic.cv
        </Link>
        <div className="flex items-center gap-6">
          <Link
            href="/resume"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium transition-opacity hover:opacity-60"
          >
            resume
          </Link>
          <Link
            href="/career"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium transition-opacity hover:opacity-60"
          >
            career
          </Link>
          <ThemeButton />
        </div>
      </nav>
    </header>
  );
}
