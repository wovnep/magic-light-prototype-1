import { Reveal, SectionLabel } from "./Reveal";

const services = [
  { n: "01", title: "Graduation Photography Packages", body: "Full-day coverage, multiple looks, individual and group portraits — tailored to your university's traditions." },
  { n: "02", title: "Convocation Coverage", body: "Multi-camera, stage and audience capture, official ceremony documentation for universities." },
  { n: "03", title: "360° Video Booth", body: "Slow-motion bullet-time keepsakes for graduates, families and friends — shareable in minutes." },
  { n: "04", title: "Group & Individual Sessions", body: "Studio and on-location shoots — campus, gardens, or your favourite landmark." },
  { n: "05", title: "Heirloom Albums & Wall Art", body: "Museum-grade printing, custom-bound albums, framed gallery prints crafted to last generations." },
];

export function Services() {
  return (
    <section id="services" className="relative py-32 md:py-44 border-t border-border/40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal className="max-w-2xl mb-20">
          <SectionLabel>Services</SectionLabel>
          <h2 className="font-display text-5xl md:text-7xl leading-[1]">
            Every detail, <em className="text-gold not-italic">considered.</em>
          </h2>
        </Reveal>

        <div className="divide-y divide-border/60 border-y border-border/60">
          {services.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.06}>
              <a
                href="#contact"
                className="group grid grid-cols-12 gap-6 py-8 md:py-10 items-center transition-colors hover:bg-card/40 px-2"
              >
                <div className="col-span-2 md:col-span-1 font-display text-xl text-gold/80">{s.n}</div>
                <div className="col-span-10 md:col-span-4">
                  <h3 className="font-display text-2xl md:text-3xl group-hover:text-gold transition-colors">{s.title}</h3>
                </div>
                <div className="col-span-12 md:col-span-6 text-sm text-muted-foreground leading-relaxed">
                  {s.body}
                </div>
                <div className="hidden md:block col-span-1 text-right text-gold opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                  →
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
