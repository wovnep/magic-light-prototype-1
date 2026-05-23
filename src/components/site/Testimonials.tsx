import { Reveal, SectionLabel } from "./Reveal";

const quotes = [
  {
    q: "They didn't just photograph my graduation — they captured the exact moment my mother let go of my hand. I cry every time I look at it.",
    name: "Tharushi Perera",
    role: "BSc IT, SLIIT 2024",
  },
  {
    q: "Thirty years of experience shows in every single frame. Magic Light made our convocation feel like a film premiere.",
    name: "Prof. R. Wijesinghe",
    role: "Dean of Students, NSBM",
  },
  {
    q: "From the 360° booth to the heirloom album, this was the most thoughtful service we've ever booked as a family.",
    name: "The Fernando Family",
    role: "Class of 2023",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-32 md:py-44">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal className="max-w-2xl mb-20">
          <SectionLabel>Kind Words</SectionLabel>
          <h2 className="font-display text-5xl md:text-6xl leading-[1.05]">
            Stories from the families <em className="text-gold not-italic">we've served.</em>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-px bg-border/40">
          {quotes.map((q, i) => (
            <Reveal key={i} delay={i * 0.15}>
              <figure className="bg-background h-full p-10 flex flex-col gap-8 group hover:bg-card transition-colors duration-500">
                <span className="font-display text-7xl leading-none text-gold/60">"</span>
                <blockquote className="font-display text-xl leading-snug text-foreground/90 -mt-6">
                  {q.q}
                </blockquote>
                <figcaption className="mt-auto pt-6 border-t border-border/60">
                  <div className="text-sm font-medium text-foreground">{q.name}</div>
                  <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mt-1">
                    {q.role}
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
