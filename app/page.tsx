import Section from "@/components/Section";

export default function HomePage() {
  return (
    <Section>
      <h1 className="text-5xl font-bold">Abdullah Al Asif</h1>
      <p className="mt-4 text-xl">
        Software Engineer | ASP.NET | SQL Server | Next.js | React
      </p>

      <div className="mt-6 flex gap-4">
        <a
          href="/resume.pdf"
          className="px-6 py-2 bg-black text-white rounded"
        >
          Download Resume
        </a>
      </div>
    </Section>
  );
}