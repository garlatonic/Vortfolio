import Image from "next/image";
import Link from "next/link";

export default function ResumeHeader({
  name,
  meta,
  introduction,
}: Pick<ResumeData, "name" | "jobTitle" | "meta" | "introduction">) {
  return (
    <div className="border-t-primary space-y-4 border-t-2 border-b py-4">
      <header className="border-b pb-4">
        <div className="flex items-center justify-between gap-6">
          <div className="space-y-1">
            <h1 className="mb-4 text-xl leading-none font-bold">{name}</h1>
            <dl className="flex flex-wrap gap-x-15 gap-y-1">
              {meta.common.map((item) => (
                <div key={item.label} className="text-2xs relative flex gap-2">
                  <dt className="text-muted-foreground w-11 font-medium md:w-auto">
                    {item.label}
                  </dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
            <nav className="space-x-1" aria-label="외부 프로필 링크">
              {meta.links.map((item) => (
                <Link
                  key={item.label}
                  href={item.value}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary text-muted-foreground"
                >
                  {item.icon && <item.icon className="inline-block size-4" />}
                  <p className="sr-only">{item.label}로 이동</p>
                </Link>
              ))}
            </nav>
          </div>
          <Image
            src="/img/img_resume_profile.jpg"
            alt="프로필"
            width={90}
            height={120}
            className="aspect-3/4 h-auto w-22.5 object-cover"
          />
        </div>
      </header>
      <section>
        <h2 className="sr-only">자기소개</h2>
        <div className="space-y-1">
          {introduction.map((paragraph, idx) => (
            <p
              key={idx}
              className="text-2xs leading-normal text-zinc-700"
              dangerouslySetInnerHTML={{ __html: paragraph }}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
