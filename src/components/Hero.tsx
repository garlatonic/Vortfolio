import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-32">
      {/* 상단 인사 */}
      <p className="text-primary font-mono text-sm mb-4 tracking-widest">
        HELLO, I&apos;M
      </p>

      {/* 이름 */}
      <h1 className="text-5xl md:text-7xl font-bold text-zinc-100 mb-6 leading-tight">
        박상아
      </h1>

      {/* 한 줄 소개 */}
      <p className="text-2xl md:text-3xl text-zinc-400 mb-8 font-light">
        사용자의 편의를{" "}
        <span className="text-primary font-medium">설계하는</span> 프론트엔드
        개발자
      </p>

      {/* 핵심 수치 뱃지 */}
      <div className="flex flex-wrap gap-3 mb-12">
        {["3년 실무 경험", "UX 입력 67% 단축", "API 호출 83% 절감"].map(
          (badge) => (
            <span
              key={badge}
              className="px-3 py-1 text-sm border border-primary/30 text-primary rounded-full bg-primary/5"
            >
              {badge}
            </span>
          ),
        )}
      </div>

      {/* CTA 버튼 */}
      <div className="flex gap-4">
        <Link
          href="#projects"
          className="px-6 py-3 bg-primary text-zinc-950 font-semibold rounded-lg hover:bg-primary-hover transition-colors"
        >
          프로젝트 보기
        </Link>
        <Link
          href="https://github.com/garlatonic"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border border-border text-zinc-300 rounded-lg hover:border-primary hover:text-primary transition-colors"
        >
          GitHub
        </Link>
      </div>
    </section>
  );
}
