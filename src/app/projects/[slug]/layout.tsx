import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header
        id="header"
        className="fixed top-0 left-0 w-full z-50 px-6 py-6 md:px-12 flex justify-between items-center mix-blend-difference text-white pointer-events-none"
      >
        <Link
          href="/"
          className="pointer-events-auto group flex items-center gap-2 text-sm font-medium tracking-wide hover:opacity-70 transition-opacity"
        >
          <i className="fa-solid fa-arrow-left text-xs transition-transform group-hover:-translate-x-1"></i>
          <span>RETURN TO HOME</span>
        </Link>
      </header>
      {children}
    </>
  );
}
