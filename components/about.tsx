import { GraduationCap, Brain, Sparkles } from "lucide-react"

const highlights = [
  {
    Icon: GraduationCap,
    title: "Education",
    text: "B.S. Computer Science, Minor in Mathematics from Stanford University, Class of 2025.",
  },
  {
    Icon: Brain,
    title: "Research Focus",
    text: "Natural Language Processing, Computer Vision, and Explainable AI applied to healthcare and sustainability.",
  },
  {
    Icon: Sparkles,
    title: "Looking For",
    text: "ML Engineer or Research Scientist roles where I can push the boundaries of applied machine learning.",
  },
]

export function About() {
  return (
    <section id="about" className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading label="About Me" />
        <p className="mx-auto mb-12 max-w-2xl text-center leading-relaxed text-muted-foreground">
          I fell in love with AI when I trained my first neural network on handwritten digits
          and watched it learn patterns I never explicitly taught it. Since then, I have been
          chasing the thrill of building models that understand, generate, and reason.
        </p>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
          {highlights.map(({ Icon, title, text }) => (
            <div
              key={title}
              className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
            >
              <div className="mb-4 inline-flex rounded-xl bg-accent p-3 text-accent-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon size={22} />
              </div>
              <h3 className="mb-2 font-semibold text-foreground">{title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function SectionHeading({ label }: { label: string }) {
  return (
    <div className="mb-8 flex flex-col items-center gap-2">
      <span className="font-mono text-xs tracking-widest text-primary uppercase">{label}</span>
      <div className="h-1 w-10 rounded-full bg-primary" />
    </div>
  )
}
