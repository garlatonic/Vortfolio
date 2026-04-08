import Link from "next/link";
import { twMerge } from "tailwind-merge";

export default function Header({ className }: { className: string }) {
  return (
    <header className={twMerge(className, "fixed bottom-0 left-0 right-0")}>
      <Link href="/" className="absolute text-6xl flex flex-col bottom-full">
        <span>GARLA</span>
        <span>TONIC</span>
      </Link>
      <div className="flex justify-between w-full">
        <div className="info flex">
          <div className="contact">
            <p>프론트엔드 개발자</p>
            <p>사용자의 편의를 설계합니다</p>
          </div>
          <nav className="right flex gap-8 text-zinc-500 text-sm">
            <Link
              href="/about"
              className="hover:text-primary transition-colors"
            >
              <span className="number">01</span>about
            </Link>
            <Link
              href="/projects"
              className="hover:text-primary transition-colors"
            >
              <span className="number">02</span>projects
            </Link>
          </nav>
        </div>
        <nav>
          <Link href="">
            <span className="number">01</span>github
          </Link>
          <Link href="">
            <span className="number">01</span>linkedin
          </Link>
        </nav>
      </div>
    </header>
  );
}
