import { Instagram, Facebook, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border/40 py-16 bg-ink">
      <div className="mx-auto max-w-7xl px-6 md:px-10 grid md:grid-cols-3 gap-10 items-start">
        <div>
          <div className="font-display text-3xl">Magic Light</div>
          <div className="text-[10px] uppercase tracking-[0.4em] text-gold mt-2">
            Photography · Est. 1994
          </div>
          <p className="mt-6 text-sm text-muted-foreground max-w-xs leading-relaxed">
            Capturing milestones that last forever. Sri Lanka's most trusted graduation
            photographers.
          </p>
        </div>

        <div className="text-sm text-muted-foreground space-y-2 md:text-center">
          <div>+94 774 747 096</div>
          <div>hello@magiclight.lk</div>
          <div>Colombo, Sri Lanka</div>
        </div>

        <div className="flex md:justify-end gap-5">
          {[Instagram, Facebook, Youtube].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="h-10 w-10 grid place-items-center border border-border/60 hover:border-gold hover:text-gold transition-colors"
            >
              <Icon className="h-4 w-4" strokeWidth={1.5} />
            </a>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-10 mt-14 pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between gap-3 text-xs text-muted-foreground">
        <div>© {new Date().getFullYear()} Magic Light Photography. All rights reserved.</div>
        <div className="uppercase tracking-[0.3em]">Crafted with care in Colombo</div>
      </div>
    </footer>
  );
}
