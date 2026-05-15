import { projects } from "@/data/projects";
import Link from "next/link";
import ProjectDetail from "@/components/project-detail";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <main className="inner flex min-h-screen flex-col items-center justify-center py-10">
        <h1 className="text-center text-4xl font-bold">
          존재하지 않는 프로젝트입니다.
        </h1>
        <p className="mt-4 text-center text-neutral-600">
          입력하신 URL의 프로젝트를 찾을 수 없습니다. URL이 올바른지
          확인해주세요.
        </p>
        <div className="mt-8 flex justify-center">
          <Link
            href="/"
            className="border px-6 py-3 text-sm font-medium transition-all duration-300 hover:bg-neutral-900 hover:text-white"
          >
            Back to Home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="inner space-y-10 py-30 sm:space-y-20">
      <ProjectDetail project={project} />
    </main>
  );
}
