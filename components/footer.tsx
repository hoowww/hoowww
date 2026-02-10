import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card px-4 py-6 sm:px-6 sm:py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-2">
        <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
          Crafted with{" "}
          <Heart size={14} className="fill-primary text-primary" />{" "}
          by Aria Chen
        </p>
        <p className="font-mono text-xs text-muted-foreground/60">
          {"© 2025 — All rights reserved"}
        </p>
      </div>
    </footer>
  )
}
