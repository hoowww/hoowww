import { ExternalLink, BookOpen } from "lucide-react"
import { SectionHeading } from "./about"
import { Badge } from "@/components/ui/badge"

const papers = [
  {
    title: "Attention-Guided Feature Fusion for Medical Image Segmentation",
    venue: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR)",
    year: "2025",
    authors: "A. Chen, J. Park, S. Liu, M. Rodriguez",
    abstract:
      "We propose a novel attention-guided feature fusion mechanism that significantly improves segmentation accuracy on multi-organ CT scans, achieving state-of-the-art results on three benchmark datasets.",
    tags: ["Computer Vision", "Medical AI", "Attention Mechanisms"],
    link: "#",
  },
  {
    title: "Efficient Fine-Tuning of Large Language Models via Sparse Adapters",
    venue: "Association for Computational Linguistics (ACL)",
    year: "2024",
    authors: "A. Chen, R. Gupta, K. Nakamura",
    abstract:
      "We introduce SparseAdapt, a parameter-efficient fine-tuning method that reduces trainable parameters by 92% while retaining 98.5% of full fine-tuning performance across NLU benchmarks.",
    tags: ["NLP", "LLMs", "Efficient ML"],
    link: "#",
  },
  {
    title: "Explainable Predictions for Climate Modeling with Graph Neural Networks",
    venue: "NeurIPS Workshop on Tackling Climate Change with ML",
    year: "2024",
    authors: "A. Chen, L. Zhang, D. Okonkwo",
    abstract:
      "We apply graph neural networks to regional climate prediction and provide interpretable attribution maps that help scientists understand model decision-making in climate forecasting.",
    tags: ["GNNs", "Climate AI", "Explainability"],
    link: "#",
  },
]

export function Papers() {
  return (
    <section id="papers" className="bg-secondary/50 px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading label="Published Papers" />
        <p className="mx-auto mb-12 max-w-2xl text-center leading-relaxed text-muted-foreground">
          My research sits at the intersection of machine learning theory and real-world applications,
          from healthcare imaging to climate science.
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
