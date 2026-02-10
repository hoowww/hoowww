import { ExternalLink, Github } from "lucide-react"
import { SectionHeading } from "./about"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "MedSeg Toolkit",
    description:
      "An open-source library for medical image segmentation with pre-trained attention-guided models. Used by 12+ research labs worldwide.",
    tags: ["PyTorch", "OpenCV", "Docker"],
    github: "#",
    demo: "#",
  },
  {
    title: "LLM Playground",
    description:
      "Interactive web app for experimenting with fine-tuned language models, featuring real-time inference, prompt engineering tools, and model comparison dashboards.",
    tags: ["Next.js", "FastAPI", "Hugging Face"],
    github: "#",
    demo: "#",
  },
  {
    title: "ClimateGraph",
    description:
      "Graph neural network pipeline for regional weather prediction with explainable attribution maps and interactive visualizations.",
    tags: ["PyTorch Geometric", "Streamlit", "GeoJSON"],
    github: "#",
  },
]

export function Projects() {
  return (
    <section id="projects" className="bg-secondary/50 px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading label="Projects" />
        <p className="mx-auto mb-12 max-w-2xl text-center leading-relaxed text-muted-foreground">
          Side projects and open-source work that complement my research.
        </p>

        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-accent-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <span className="font-mono text-sm font-bold">{project.title.charAt(0)}</span>
              </div>

              <h3 className="mb-2 font-semibold text-foreground">{project.title}</h3>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <div className="mb-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="rounded-full text-xs font-normal"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={project.github}
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
                  aria-label={`${project.title} on GitHub`}
                >
                  <Github size={16} />
                  Code
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
                    aria-label={`${project.title} live demo`}
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
