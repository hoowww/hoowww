import { ExternalLink, BookOpen } from "lucide-react"
import { SectionHeading } from "./about"
import { Badge } from "@/components/ui/badge"

const papers = [
  {
    title: "Integrating Machine Learning into Consumer Behaviour Analysis for Insect-Based Protein Supplements",
    venue: "Submitted",
    year: "2026",
    authors: "Nilubon Kurubanjerdjit, Hnin Oo Wai, Nyein Nyein Kyaw, Nyein Pyae Sone, Soontarin Nupap",
    abstract:
      "Used classification, clustering, and association rule mining to analyze consumer behavior in Thailand’s insect-based protein market. Random Forest achieved the highest predictive accuracy (76.11%), while segmentation and FP-Growth analysis revealed key consumer profiles and pricing influences.",
    tags: ["Machine Learning", "Consumer Segmentation", "Insect-Based Protein", "Association Rule Mining",
      "K-Means Clustering"
    ],
    link: "/papers/bugboost.pdf",
  },
  {
    title: "Mining Student Behaviour Patterns for Mental Health Insights using Association Rule Learning",
    venue: "9th International Conference on Information Technology (InCIT), Phuket, Thailand",
    year: "2025",
    authors: "Hnin Oo Wai, Nyein Nyein Kyaw, Zaw Shin Thant, Nilubon Kurubanjerdjit, Soontarin Nupap",
    abstract: "This study applies Association Rule Mining (FP-Growth) to analyze behavioral and lifestyle factors influencing university students’ mental health. Using survey data from 266 Thai students, we identify key protective and risk patterns, including financial support, sleep quality, and digital entertainment habits. The findings provide interpretable, data-driven insights to support evidence-based mental health interventions.",
    tags: ["Mental Health", "Student Behavior", "Association Rule Mining", "Survey Data", "Behavioral Patterns"],
    link: "https://ieeexplore.ieee.org/document/11276048",
  },
  {
    title: "Machine Learning-Driven Prediction and Analysis of Mental Health Risks Among University Students",
    venue: "22nd International Joint Conference on Computer Science and Software Engineering (JCSSE), Chiang Mai, Thailand",
    year: "2025",
    authors: "Soontarin Nupap, Hnin Oo Wai, Nyein Nyein Kyaw, Zaw Shin Thant, Nilubon Kurubanjerdjit",
    abstract:
      "Built a machine learning model to detect mental health risks in university students using survey data (n=266). XGBoost achieved the highest performance (F1-score: 83.90%, accuracy: 90.60%), while correlation and clustering analyses identified key behavioral predictors and risk subgroups.",
    tags: ["Mental Health Risk Prediction", "Machine Learning", "XGBoost", "SMOTE", "Behavioral Data"],
    link: "https://ieeexplore.ieee.org/document/11297942",
  }
]

export function Papers() {
  return (
    <section id="research" className="bg-secondary/50 px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading label="Published Papers" />
        <p className="mx-auto mb-12 max-w-2xl text-center leading-relaxed text-muted-foreground">
          My research lies at the intersection of machine learning, mental health assessment, and e-commerce analytics, with an emphasis on predictive modeling and behavioral insights.
        </p>

        <div className="flex flex-col gap-6">
          {papers.map((paper, i) => (
            <article
              key={i}
              className="group rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg sm:p-6 md:p-8"
            >
              <div className="mb-3 flex flex-col gap-1.5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-2">
                <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 font-mono text-xs font-medium text-primary">
                  <BookOpen size={12} />
                  {paper.year}
                </span>
                <span className="text-xs leading-snug text-muted-foreground">{paper.venue}</span>
              </div>

              <h3 className="mb-2 text-base font-semibold text-foreground transition-colors group-hover:text-primary sm:text-lg">
                {paper.title}
              </h3>

              <p className="mb-1 font-mono text-xs text-muted-foreground">
                {paper.authors}
              </p>

              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                {paper.abstract}
              </p>

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
                <div className="flex flex-wrap gap-2">
                  {paper.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="rounded-full text-xs font-normal"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <a
                  href={paper.link}
                  target="_blank"
                  className="inline-flex w-fit items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                >
                  Read Paper
                  <ExternalLink size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
