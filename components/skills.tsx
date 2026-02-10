import { SectionHeading } from "./about"

const skillGroups = [
  {
    category: "Languages",
    skills: ["Python", "C++", "JavaScript", "SQL", "R"],
  },
  {
    category: "ML / DL",
    skills: ["PyTorch", "TensorFlow", "Hugging Face", "scikit-learn", "JAX"],
  },
  {
    category: "Tools & Infra",
    skills: ["Docker", "Git", "Weights & Biases", "MLflow", "AWS SageMaker"],
  },
  {
    category: "Specialties",
    skills: ["NLP", "Computer Vision", "GNNs", "Explainable AI", "LLM Fine-tuning"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading label="Tech Stack" />
        <p className="mx-auto mb-12 max-w-2xl text-center leading-relaxed text-muted-foreground">
          The tools and technologies I use to bring ideas from research papers to production systems.
        </p>

        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
          {skillGroups.map(({ category, skills }) => (
            <div
              key={category}
              className="rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-md"
            >
              <h3 className="mb-4 font-mono text-xs font-bold tracking-widest text-primary uppercase">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border bg-secondary px-3 py-1.5 text-sm text-secondary-foreground transition-colors hover:border-primary/40 hover:bg-accent hover:text-accent-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
