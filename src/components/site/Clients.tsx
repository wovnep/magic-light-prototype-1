import { motion } from "framer-motion";
import { Reveal, SectionLabel } from "./Reveal";

const unis = [
  "SLIIT", "University of Colombo", "NSBM Green University", "NIBM",
  "Kotelawala Defence", "Sri Jayewardenepura", "Moratuwa", "ICBT Campus",
  "APIIT Sri Lanka", "Horizon Campus", "CINEC", "BCAS",
];

export function Clients() {
  return (
    <section id="clients" className="relative py-28 border-y border-border/40 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal className="text-center mb-14">
          <SectionLabel><span className="mx-auto">Trusted By</span></SectionLabel>
          <h3 className="font-display text-3xl md:text-4xl text-foreground/90">
            Sri Lanka's most prestigious universities
          </h3>
        </Reveal>
      </div>

      <div className="relative flex overflow-hidden mask-fade">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex shrink-0 gap-16 pr-16"
        >
          {[...unis, ...unis].map((u, i) => (
            <div
              key={i}
              className="font-display text-2xl md:text-3xl text-foreground/40 hover:text-gold transition-colors whitespace-nowrap"
            >
              {u}
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .mask-fade {
          mask-image: linear-gradient(90deg, transparent, black 10%, black 90%, transparent);
        }
      `}</style>
    </section>
  );
}
