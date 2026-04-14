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
        "header py-5",
        className,
        !isMain && "fixed top-0 left-0 right-0 z-10",
        isMain && "w-full",
      )}
    >
      <nav className="gnb flex justify-between items-center w-full">
        <Link href="/" className="logo font-black text-lg tracking-wide">
          garlatonic.cv
        </Link>
        <ThemeButton />
        {/* <ol>
            <li>
              <Link href="/pages/about.html">about</Link>
            </li>
            <li>
              <Link href="/pages/project.html">project</Link>
            </li>
            <li>
              <Link href="/pages/contact.html">contact</Link>
            </li>
          </ol> */}
      </nav>
    </header>
  );
}
