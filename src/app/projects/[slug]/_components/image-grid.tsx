import Image from "next/image";

export default function ImageGrid({ project }: { project: Project }) {
  return (
    <div className="lg:col-span-6">
      <div className="gap-4 space-y-4 lg:space-y-8 sticky top-18">
        <div className="w-full aspect-750/500 overflow-hidden relative border group">
          <Image
            src={project?.thumbnail}
            alt={`${project?.name} Main Interface`}
            fill
            className="transition-transform group-hover:scale-105"
          />
        </div>
        {project?.detailImages && (
          <div className="grid grid-cols-2 gap-4 lg:gap-8">
            {project?.detailImages.map((imgSrc, index) => (
              <div
                className="aspect-750/500 overflow-hidden border relative group"
                key={index}
              >
                <Image
                  src={imgSrc}
                  className="transition-transform group-hover:scale-105"
                  alt={`Detail ${index + 1}`}
                  fill
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
