import { Mail, MapPin, Github, Linkedin } from "lucide-react"
import { SectionHeading } from "./about"

const links = [
  {
    Icon: Mail,
    label: "Email",
    value: "aria.chen@email.com",
    href: "mailto:aria.chen@email.com",
  },
  {
    Icon: Github,
    label: "GitHub",
    value: "github.com/ariachen",
    href: "#",
  },
  {
    Icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/ariachen",
    href: "#",
  },
  {
    Icon: MapPin,
    label: "Location",
    value: "San Francisco, CA",
    href: undefined,
  },
]

export function Contact() {
  return (
    <section id="contact" className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <SectionHeading label="Get in Touch" />
        <p className="mx-auto mb-10 max-w-xl leading-relaxed text-muted-foreground sm:mb-12">
          {"I'm always excited to chat about ML research, collaboration opportunities, or open-source projects. Don't hesitate to reach out!"}
        </p>

        <div className="mx-auto grid max-w-sm gap-3 sm:max-w-none sm:grid-cols-2 sm:gap-4">
          {links.map(({ Icon, label, value, href }, index) => {
            const content = (
              <div key={index} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 text-left transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md sm:p-5">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground sm:h-11 sm:w-11">
                  <Icon size={20} />
                </div>
                <div className="min-w-0">
                  <p className="font-mono text-xs text-muted-foreground">{label}</p>
                  <p className="truncate text-sm font-medium text-foreground">{value}</p>
                </div>
              </div>
            )
            return href ? (
              <a key={index} href={href} className="block">
                {content}
              </a>
            ) : (
              <div key={index}>{content}</div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
