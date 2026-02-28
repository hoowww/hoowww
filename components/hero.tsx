"use client"

import Image from "next/image"
import { ArrowDown, Download, Eye, File, FileText, Github, Linkedin, Mail } from "lucide-react"
import { useState } from "react"

export function Hero() {
  const [isHovered, setIsHovered] = useState(false)
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
            <div 
              className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-card shadow-xl sm:h-52 sm:w-52 md:h-[220px] md:w-[220px]"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Default image */}
              <Image
                src="/images/hninoo2.jpeg"
                alt="Portrait of Hnin Oo Wai"
                fill
                className="scale-[250%] -translate-y-[40%] translate-x-[4%] object-cover transition-opacity duration-300"
                style={{ opacity: isHovered ? 0 : 1 }}
                priority
              />
              {/* Hover image */}
              <Image
                src="/images/hninoo.jpeg"
                alt="Portrait of Hnin Oo Wai"
                fill
                className="absolute inset-0 object-cover transition-opacity duration-300"
                style={{ opacity: isHovered ? 1 : 0 }}
                priority
              />
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="animate-fade-in-up animation-delay-200 text-center md:text-left">
          <p className="mb-2 font-mono text-xs tracking-wide text-primary sm:text-sm">
            {"Hello, I'm"}
          </p>
          <h1 className="mb-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
            <span className="text-balance">Hnin Oo Wai</span>
          </h1>
          <p className="mx-auto mb-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg md:mx-0">
            AI/ML researcher with{" "}
            <span className="font-semibold text-foreground">2 published papers</span>.
            Proficient in Python, with solid experience across end-to-end machine learning and data analysis workflows.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <a
              href="#research"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-105 active:scale-95"
            >
              <FileText size={16} />
              View Research
            </a>
            <a
              target="_blank"
              href="/papers/how-resume.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-2.5 text-sm font-medium text-foreground transition-transform hover:scale-105 active:scale-95"
            >
              <Eye size={16} />
              View Resume
            </a>
          </div>

          {/* Social links */}
          <div className="mt-6 flex items-center justify-center gap-4 md:justify-start">
            {[
              { Icon: Github, href: "https://github.com/hoowww", label: "GitHub" },
              { Icon: Linkedin, href: "https://www.linkedin.com/in/hnin-oo-wai-bbaa53222", label: "LinkedIn" },
            ].map(({ Icon, href, label }) => (
              <a
                target="_blank"
                key={label}
                href={href}
                aria-label={label}
                className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <Icon size={20} />
              </a>
            ))}
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
