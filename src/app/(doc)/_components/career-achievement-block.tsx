type CareerAchievementBlockProps = {
  achievement: {
    title: string;
    problems: string[];
    solutions: string[];
    results: string[];
  };
};

function ListSection({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="space-y-2">
      <p className="text-3xs font-semibold tracking-[0.16em] text-zinc-500 uppercase">
        {title}
      </p>
      <ul className="text-2xs space-y-0.5 leading-relaxed text-zinc-700">
        {items.map((item, index) => (
          <li
            key={index}
            dangerouslySetInnerHTML={{ __html: item }}
            className="before:mr-1 before:content-['-']"
          />
        ))}
      </ul>
    </section>
  );
}

export default function CareerAchievementBlock({
  achievement,
}: CareerAchievementBlockProps) {
  return (
    <section className="space-y-2">
      <h6 className="text-2xs font-semibold text-zinc-900">
        {achievement.title}
      </h6>
      <div className="space-y-4">
        <ListSection title="문제 인식" items={achievement.problems} />
        <ListSection title="해결 방안" items={achievement.solutions} />
        <ListSection title="결과" items={achievement.results} />
      </div>
    </section>
  );
}
