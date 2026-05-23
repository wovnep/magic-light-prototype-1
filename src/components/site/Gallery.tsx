import { motion } from "framer-motion";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import { Reveal, SectionLabel } from "./Reveal";

const items = [
  { src: g1, uni: "University of Colombo", year: "2024", span: "md:col-span-5 md:row-span-2 aspect-[4/5]" },
  { src: g2, uni: "SLIIT Convocation", year: "2024", span: "md:col-span-7 aspect-[16/10]" },
  { src: g3, uni: "NSBM Green University", year: "2023", span: "md:col-span-4 aspect-[4/5]" },
  { src: g5, uni: "Kotelawala Defence", year: "2024", span: "md:col-span-3 aspect-[4/5]" },
  { src: g6, uni: "Family Portraits", year: "2024", span: "md:col-span-5 aspect-[4/3]" },
  { src: g4, uni: "Solo Sessions", year: "2023", span: "md:col-span-7 aspect-[16/10]" },
];

export function Gallery() {
  return (
    <section id="gallery" className="relative py-32 md:py-44 border-t border-border/40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <Reveal>
            <SectionLabel>Signature Work</SectionLabel>
            <h2 className="font-display text-5xl md:text-7xl leading-[1]">
              Moments worth <em className="text-gold not-italic">a lifetime.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <a href="#contact" className="text-xs uppercase tracking-[0.3em] text-gold border-b border-gold/40 pb-1 hover:border-gold transition">
              Full Portfolio →
            </a>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-auto">
          {items.map((it, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative overflow-hidden ${it.span}`}
            >
              <motion.img
                src={it.src}
                alt={`${it.uni} graduation ${it.year}`}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.6s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700" />
              <figcaption className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex items-end justify-between gap-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-700">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-2">
                    {it.year}
                  </div>
                  <div className="font-display text-xl md:text-2xl text-foreground">{it.uni}</div>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-[10px] uppercase tracking-[0.3em] text-foreground/80 border-b border-gold pb-1">
                  View Album
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
