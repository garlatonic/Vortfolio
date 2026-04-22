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
      <main className="py-10 inner flex flex-col justify-center items-center min-h-screen">
        <h1 className="text-4xl font-bold text-center">
          존재하지 않는 프로젝트입니다.
        </h1>
        <p className="text-center mt-4 text-neutral-600">
          입력하신 URL의 프로젝트를 찾을 수 없습니다. URL이 올바른지
          확인해주세요.
        </p>
        <div className="flex justify-center mt-8">
          <Link
            href="/"
            className="px-6 py-3 border  text-sm font-medium hover:bg-neutral-900 hover:text-white transition-all duration-300"
          >
            Back to Home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="py-30 space-y-10 sm:space-y-20 inner">
      <ProjectDetail project={project} />
    </main>
  );
}
