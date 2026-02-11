import { SectionHeading } from "./about"

const skillGroups = [
  {
    category: "Languages",
    skills: ['Python', 'SQL'],
  },
  {
    category: "Machine Learning",
    skills: ["Random Forest", "scikit-learn", "XGBoost", 
      "Logistics Regression", "K-Means Clustering", "SMOTE", 
      "Association Rule Mining (FP-Growth, Apriori)"
    ],
  },
  {
    category: "Data Analysis & Visualization",
    skills: [
      "Predictive Modeling",
      "Classification",
      "Clustering",
      "Model Evaluation",
      "Correlation Analysis",
      "Behavioral Data Analysis"
    ],
  },
  {
    category: "Tools & Infra",
    skills: ["Google Colab", "PowerBI", "Git", "Excel", "RapidMiner"],
  }
]

export function Skills() {
  return (
    <section id="skills" className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading label="Tech Stack" />
        <p className="mx-auto mb-12 max-w-2xl text-center leading-relaxed text-muted-foreground">
          Python-based machine learning workflow including data analysis, feature engineering, predictive modeling with scikit-learn and XGBoost, as well as clustering and association rule mining for behavioral data insights.
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
