import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";
import { Separator } from "../ui/separator";
import Magnet from "../react-bits/magnet";

export default function Footer() {
  return (
    <footer className="footer bg-primary">
      <div className="inner flex flex-col lg:flex-row py-15 md:py-20 justify-between gap-15">
        <h2 className="uppercase font-black text-6xl md:text-8xl text-accent leading-none flex flex-wrap gap-x-6">
          <span>get in</span>
          <span className="text-transparent text-outline ">touch</span>
        </h2>
        <Separator className="lg:hidden" />
        <div className="flex flex-col gap-6 lg:mt-0 text-accent font-medium text-2xl md:text-4xl [&&>svg]:size-6 xl:[&&>svg]:size-6 lg:flex-none flex-1">
          <Magnet padding={10} magnetStrength={10}>
            <Link
              href="https://velog.io/@garlatonic"
              target="_blank"
              className="inline-flex gap-1"
            >
              Velog
              <ArrowUpRightIcon />
            </Link>
          </Magnet>
          <Magnet padding={10} magnetStrength={10}>
            <Link
              href="https://github.com/garlatonic"
              target="_blank"
              className="inline-flex gap-1"
            >
              Github
              <ArrowUpRightIcon />
            </Link>
          </Magnet>
          <Magnet padding={10} magnetStrength={10}>
            <Link
              href="https://www.linkedin.com/in/sanga-park-495630387/"
              target="_blank"
              className="inline-flex gap-1"
            >
              Linkedin
              <ArrowUpRightIcon />
            </Link>
          </Magnet>
          <Magnet padding={10} magnetStrength={10}>
            <Link
              href="mailto:garlatonic@kakao.com"
              target="_blank"
              className="inline-flex gap-1"
            >
              MailTo
              <ArrowUpRightIcon />
            </Link>
          </Magnet>
        </div>
      </div>
    </footer>
  );
}
