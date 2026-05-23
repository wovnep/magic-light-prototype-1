import { useState } from "react";
import { Reveal, SectionLabel } from "./Reveal";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative py-32 md:py-44 border-t border-border/40 bg-ink/40 grain">
      <div className="mx-auto max-w-7xl px-6 md:px-10 grid md:grid-cols-12 gap-16">
        <div className="md:col-span-5">
          <Reveal>
            <SectionLabel>Get In Touch</SectionLabel>
            <h2 className="font-display text-5xl md:text-6xl leading-[1.02]">
              Let's frame your <em className="text-gold not-italic">milestone.</em>
            </h2>
            <p className="mt-8 text-foreground/70 leading-relaxed max-w-md">
              Whether it's a university convocation or a private graduation portrait — tell us your
              date and we'll craft the rest.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="mt-12 space-y-6">
            <a href="tel:+94774747096" className="group flex items-start gap-4 text-foreground/85 hover:text-gold transition">
              <Phone className="h-5 w-5 mt-0.5 text-gold" strokeWidth={1.5} />
              <div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-1">Call</div>
                <div className="font-display text-xl">+94 774 747 096</div>
              </div>
            </a>
            <a
              href="https://wa.me/94774747096"
              target="_blank"
              rel="noreferrer"
              className="group flex items-start gap-4 text-foreground/85 hover:text-gold transition"
            >
              <MessageCircle className="h-5 w-5 mt-0.5 text-gold" strokeWidth={1.5} />
              <div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-1">WhatsApp</div>
                <div className="font-display text-xl">Chat with us instantly</div>
              </div>
            </a>
            <a href="mailto:hello@magiclight.lk" className="group flex items-start gap-4 text-foreground/85 hover:text-gold transition">
              <Mail className="h-5 w-5 mt-0.5 text-gold" strokeWidth={1.5} />
              <div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-1">Email</div>
                <div className="font-display text-xl">hello@magiclight.lk</div>
              </div>
            </a>
            <div className="flex items-start gap-4 text-foreground/85">
              <MapPin className="h-5 w-5 mt-0.5 text-gold" strokeWidth={1.5} />
              <div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-1">Studio</div>
                <div className="font-display text-xl">Colombo, Sri Lanka</div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="md:col-span-7">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="bg-background/60 backdrop-blur-sm border border-border/60 p-8 md:p-12 space-y-8"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <Field label="Your Name" name="name" />
              <Field label="Phone / WhatsApp" name="phone" />
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Field label="University" name="uni" />
              <Field label="Ceremony Date" name="date" type="date" />
            </div>
            <Field label="Tell us about your celebration" name="msg" textarea />
            <button
              type="submit"
              className="group w-full md:w-auto inline-flex items-center justify-center gap-3 bg-gold px-10 py-4 text-xs uppercase tracking-[0.3em] text-primary-foreground hover:bg-gold-soft transition-colors"
            >
              {sent ? "Thank You ✓" : "Request a Booking"}
              {!sent && <span className="transition-transform group-hover:translate-x-1">→</span>}
            </button>
          </form>
        </Reveal>
      </div>

      <Reveal className="mx-auto max-w-7xl px-6 md:px-10 mt-20">
        <div className="aspect-[21/9] w-full overflow-hidden border border-border/60">
          <iframe
            title="Magic Light Studio Location"
            src="https://www.openstreetmap.org/export/embed.html?bbox=79.82%2C6.88%2C79.90%2C6.94&layer=mapnik"
            className="h-full w-full grayscale contrast-125"
            loading="lazy"
          />
        </div>
      </Reveal>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  textarea,
}: {
  label: string;
  name: string;
  type?: string;
  textarea?: boolean;
}) {
  const cls =
    "w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 text-base text-foreground placeholder:text-muted-foreground/50 transition-colors";
  return (
    <label className="block">
      <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{label}</span>
      {textarea ? (
        <textarea name={name} rows={4} className={cls + " resize-none mt-2"} />
      ) : (
        <input type={type} name={name} className={cls + " mt-2"} />
      )}
    </label>
  );
}
