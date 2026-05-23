import { Reveal, SectionLabel } from "./Reveal";
import { Camera, Clock, Sparkles, Video, Award, Image as ImageIcon } from "lucide-react";

const items = [
  { Icon: Camera, title: "Cinematic Quality", body: "Award-winning composition, light-led storytelling — every frame engineered to be timeless." },
  { Icon: Clock, title: "Lightning Turnaround", body: "Preview galleries within 48 hours, full edited delivery in two weeks. Always." },
  { Icon: ImageIcon, title: "Premium Prints & Digital", body: "Museum-grade archival prints, custom heirloom albums, and high-resolution digital sets." },
  { Icon: Video, title: "360° Video Booth", body: "Slow-motion 360 capture for graduates and families — an unforgettable keepsake." },
  { Icon: Award, title: "Trusted by Top Universities", body: "Official photographers for SLIIT, NSBM, Colombo, Kotelawala and more for over a decade." },
  { Icon: Sparkles, title: "Three Decades of Craft", body: "Benil and team have framed nearly 200,000 graduates. Experience you can feel." },
];

export function Why() {
  return (
    <section className="relative py-32 md:py-44 border-t border-border/40 bg-ink/40 grain">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal className="max-w-3xl mb-20">
          <SectionLabel>Why Magic Light</SectionLabel>
          <h2 className="font-display text-5xl md:text-7xl leading-[1]">
            Crafted with <em className="text-gold not-italic">obsession.</em><br />
            Delivered with care.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/40">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={(i % 3) * 0.1}>
              <div className="group bg-background h-full p-8 md:p-10 transition-colors duration-500 hover:bg-card relative overflow-hidden">
                <div className="absolute top-0 left-0 h-px w-0 bg-gold group-hover:w-full transition-all duration-700" />
                <it.Icon className="h-7 w-7 text-gold mb-8" strokeWidth={1.2} />
                <h3 className="font-display text-2xl mb-4">{it.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{it.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
