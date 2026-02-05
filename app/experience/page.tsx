import Section from "@/components/Section";
import ExperienceCard from "@/components/ExperienceCard";
import { experience } from "@/data/experience";

export default function ExperiencePage() {
  return (
    <Section>
      <h2 className="text-3xl font-bold mb-6">Experience</h2>

      {experience.map((job, i) => (
        <ExperienceCard key={i} {...job} />
      ))}
    </Section>
  );
}
