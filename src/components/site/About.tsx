import portrait from "@/assets/portrait-benil.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal, SectionLabel } from "./Reveal";

const stats = [
  { value: "30+", label: "Years Behind the Lens" },
  { value: "40+", label: "Universities Served" },
  { value: "180k", label: "Graduates Captured" },
  { value: "99%", label: "Five-Star Reviews" },
];

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id="about" ref={ref} className="relative py-32 md:py-44 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-10 grid md:grid-cols-12 gap-12 md:gap-20 items-center">
        <div className="md:col-span-5 relative">
          <motion.div style={{ y }} className="relative aspect-[4/5] overflow-hidden">
            <img
              src={portrait}
              alt="Benil Marcus, founder of Magic Light Photography"
              loading="lazy"
              className="h-full w-full object-cover"
              width={1024}
              height={1280}
            />
            <div className="absolute inset-0 ring-1 ring-gold/20" />
          </motion.div>
          <Reveal className="absolute -bottom-6 -right-6 md:-right-10 bg-background border border-gold/40 px-6 py-5 shadow-elegant">
            <div className="text-[10px] uppercase tracking-[0.3em] text-gold">Founder</div>
            <div className="font-display text-2xl mt-1">Benil Marcus</div>
          </Reveal>
        </div>

        <div className="md:col-span-7">
          <Reveal>
            <SectionLabel>The Studio</SectionLabel>
            <h2 className="font-display text-5xl md:text-7xl leading-[1.02]">
              A lifetime spent <em className="text-gold not-italic">chasing the light</em> of someone's proudest day.
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="hairline my-10 max-w-xs" />
            <p className="text-lg leading-relaxed text-foreground/75 max-w-xl">
              Since 1994, Magic Light has been entrusted by Sri Lanka's leading universities — SLIIT,
              Colombo, NSBM, NIBM, Kotelawala — to honour the moment a robe is lifted, a cap is tossed,
              a parent's eyes well up. We don't take pictures. We frame heirlooms.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={0.2 + i * 0.1}>
                <div>
                  <div className="font-display text-5xl text-gold">{s.value}</div>
                  <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mt-2">
                    {s.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
