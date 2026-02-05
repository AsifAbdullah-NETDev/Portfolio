type Props = {
  company: string;
  role: string;
  duration: string;
  points: string[];
};

export default function ExperienceCard({
  company,
  role,
  duration,
  points,
}: Props) {
  return (
    <div className="border p-6 rounded-lg mb-6">
      <h3 className="text-xl font-semibold">{role}</h3>
      <p className="text-gray-600">{company}</p>
      <p className="text-sm">{duration}</p>

      <ul className="list-disc ml-6 mt-3">
        {points.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
  );
}
