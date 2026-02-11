import { Coffee } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card px-4 py-6 sm:px-6 sm:py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-2">
        <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
          Built with NextJS, curiosity, and too much
          <Coffee size={14} className="fill-primary text-primary" />{" "}
        </p>
        <p className="font-mono text-xs text-muted-foreground/60">
          {"© 2026 — Hnin Oo Wai"}
        </p>
      </div>
    </footer>
  )
}
