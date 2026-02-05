type Props = {
  title: string;
  description: string;
  tech: string[];
};

export default function ProjectCard({ title, description, tech }: Props) {
  return (
    <div className="border p-6 rounded-lg">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2">{description}</p>

      <div className="flex gap-2 mt-3 flex-wrap">
        {tech.map((t, i) => (
          <span key={i} className="text-sm bg-gray-200 px-2 py-1 rounded">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
