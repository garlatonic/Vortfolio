import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer bg-primary">
      <div className="inner flex py-20 justify-between">
        <h2 className="uppercase font-black text-8xl text-accent -tracking-widest leading-none flex flex-col xl:flex-row gap-x-6">
          <span>get in</span>
          <span className="text-transparent text-outline ">touch</span>
        </h2>
        <div className="flex flex-col gap-6 mt-16 lg:mt-0 text-accent  font-medium text-4xl [&&>svg]:size-6 xl:[&&>svg]:size-6">
          <Link href="" target="_blank" className="flex gap-1">
            Velog
            <ArrowUpRightIcon />
          </Link>
          <Link href="" target="_blank" className="flex gap-1">
            Github
            <ArrowUpRightIcon />
          </Link>
          <Link href="" target="_blank" className="flex gap-1">
            Linkedin
            <ArrowUpRightIcon />
          </Link>
        </div>
      </div>
    </footer>
  );
}
