import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import hero from "@/assets/hero-graduation.jpg";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} id="top" className="relative h-[100svh] w-full overflow-hidden">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img
          src={hero}
          alt="Sri Lankan graduates throwing caps at golden hour"
          className="h-full w-full object-cover"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 gradient-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/90 via-ink/20 to-ink/10" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-24 md:px-10 md:pb-48"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] text-gold/90 mb-8"
        >
          <span className="h-px w-12 bg-gold/60" />
          Est. 1994 · Colombo, Sri Lanka
        </motion.div>

        <h1 className="font-display text-[15vw] md:text-[9vw] leading-[0.9] tracking-tight text-foreground">
          {"Your Story,".split("").map((c, i) => (
            <motion.span
              key={`a-${i}`}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 + i * 0.03, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block whitespace-pre"
            >
              {c}
            </motion.span>
          ))}
          <br />
          <span className="italic text-gold font-light">
            {"Perfectly Framed.".split("").map((c, i) => (
              <motion.span
                key={`b-${i}`}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.1 + i * 0.03, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block whitespace-pre"
              >
                {c}
              </motion.span>
            ))}
          </span>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="mt-10 flex flex-col md:flex-row md:items-end md:justify-between gap-8"
        >
          <p className="max-w-md text-sm md:text-base text-foreground/75 leading-relaxed">
            Three decades framing the proudest moments of Sri Lanka's graduates — cinematic,
            timeless, unforgettable.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#gallery"
              className="group inline-flex items-center gap-3 bg-gold px-7 py-4 text-xs uppercase tracking-[0.25em] text-primary-foreground hover:bg-gold-soft transition-colors duration-500"
            >
              View Our Work
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 border border-foreground/30 px-7 py-4 text-xs uppercase tracking-[0.25em] text-foreground hover:border-gold hover:text-gold transition-all duration-500"
            >
              Book Your Convocation
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll prompt */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-foreground/60">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="h-10 w-px bg-gradient-to-b from-gold to-transparent"
        />
      </motion.div>
    </section>
  );
}
