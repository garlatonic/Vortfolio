import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";
import { Separator } from "../ui/separator";
import Magnet from "../react-bits/magnet";
import { twMerge } from "tailwind-merge";
import { TYPOGRAPHY } from "@/constants/typography";

const socialLinks = [
  {
    name: "Velog",
    url: "https://velog.io/@garlatonic",
  },
  {
    name: "Github",
    url: "https://github.com/garlatonic",
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/garlatonic/",
  },
  {
    name: "MailTo",
    url: "mailto:garlatonic@kakao.com",
  },
];

export default function Footer() {
  return (
    <footer className="footer bg-accent/50">
      <div className="inner flex flex-col justify-between gap-15 py-15 md:py-20 lg:flex-row">
        <h2
          className={twMerge(
            TYPOGRAPHY.footer.headline,
            "flex flex-wrap gap-x-6",
          )}
        >
          <span>get in</span>
          <span className="text-outline">touch</span>
        </h2>
        <Separator className="lg:hidden" />
        <div className="flex flex-1 flex-col gap-6 lg:flex-none">
          {socialLinks.map((link) => (
            <Magnet key={link.name} padding={10} magnetStrength={10}>
              <Link
                href={link.url}
                target="_blank"
                className={twMerge(TYPOGRAPHY.footer.link, "inline-flex gap-1")}
              >
                {link.name}
                <ArrowUpRightIcon className="size-6 xl:size-6" />
              </Link>
            </Magnet>
          ))}
        </div>
      </div>
    </footer>
  );
}
