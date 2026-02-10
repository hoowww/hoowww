import Image from "next/image"
import { ArrowDown, FileText, Github, Linkedin, Mail } from "lucide-react"

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-4 pt-20 sm:px-6">
      {/* Decorative background blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/5 blur-3xl sm:h-96 sm:w-96" />
        <div className="absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-accent/40 blur-3xl sm:h-[500px] sm:w-[500px]" />
        <div className="absolute top-1/2 left-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary blur-3xl sm:h-64 sm:w-64" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center gap-8 md:flex-row md:gap-16">
        {/* Avatar */}
        <div className="animate-fade-in-up flex-shrink-0">
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-primary/20 blur-md" />
            <Image
              src="/avatar.jpg"
              alt="Portrait of Aria Chen"
              width={220}
              height={220}
              className="relative h-40 w-40 rounded-full border-4 border-card object-cover shadow-xl sm:h-52 sm:w-52 md:h-[220px] md:w-[220px]"
              priority
            />
            {/* Status dot */}
            <span className="absolute bottom-3 right-3 flex h-4 w-4 items-center justify-center rounded-full border-2 border-card bg-emerald-400 sm:bottom-4 sm:right-4 sm:h-5 sm:w-5">
              <span className="sr-only">Available for opportunities</span>
            </span>
          </div>
        </div>

        {/* Text */}
        <div className="animate-fade-in-up animation-delay-200 text-center md:text-left">
          <p className="mb-2 font-mono text-xs tracking-wide text-primary sm:text-sm">
            {"Hello, I'm"}
          </p>
          <h1 className="mb-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
            <span className="text-balance">Aria Chen</span>
          </h1>
          <p className="mx-auto mb-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg md:mx-0">
            Fresh graduate & AI/ML researcher with{" "}
            <span className="font-semibold text-foreground">3 published papers</span>.
            I build intelligent systems that bridge the gap between theory and real-world impact.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <a
              href="#papers"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-105 active:scale-95"
            >
              <FileText size={16} />
              View Papers
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-2.5 text-sm font-medium text-foreground transition-transform hover:scale-105 active:scale-95"
            >
              <Mail size={16} />
              Get in Touch
            </a>
          </div>

          {/* Social links */}
          <div className="mt-6 flex items-center justify-center gap-4 md:justify-start">
            {[
              { Icon: Github, href: "#", label: "GitHub" },
              { Icon: Linkedin, href: "#", label: "LinkedIn" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <Icon size={20} />
              </a>
            ))}
            <a
              href="#"
              aria-label="Google Scholar"
              className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 14l-8-5.5L12 3l8 5.5z" />
                <path d="M4 8.5v7L12 21l8-5.5v-7" />
                <circle cx="12" cy="14" r="3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground transition-colors hover:text-primary sm:bottom-8"
        aria-label="Scroll down"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  )
}
