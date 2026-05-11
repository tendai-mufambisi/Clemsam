import { Reveal } from "./Reveal";
// TODO: Swap with actual Clemsam team photo
import teamImg from "@/assets/team.jpg";

const stats = [
  { v: "100+", l: "Projects" },
  { v: "12+", l: "Team Members" },
  { v: "Nationwide", l: "Coverage" },
  { v: "5+ yrs", l: "Building" },
];

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 grid gap-14 lg:grid-cols-2 lg:gap-20 items-center">
        <Reveal>
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.22em] text-secondary mb-4">
            About Clemsam
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl leading-[1.05] mb-6 text-foreground">
            Built In Zimbabwe.<br />
            <span className="text-secondary">Built For Zimbabwe.</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Clemsam Construction Solutions is a Zimbabwean-owned construction and interior finishing
            company based in Harare. We bring together a skilled team of builders, engineers, and
            finishing specialists under one roof — so whether you're renovating a single room or
            putting up an entire home, you deal with one team accountable for the whole result.
            We've earned our reputation through clean work, fair pricing, and projects delivered on time.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-border">
            {stats.map((s) => (
              <div key={s.l}>
                <div className="font-display font-bold text-2xl sm:text-3xl text-primary">{s.v}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-secondary/20 to-accent/20 blur-2xl" />
            <div className="relative rounded-3xl overflow-hidden shadow-[var(--shadow-elegant)] aspect-[4/5]">
              <img
                src={teamImg}
                alt="The Clemsam Construction team on site"
                loading="lazy"
                className="size-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden sm:block bg-primary text-primary-foreground rounded-2xl p-5 shadow-[var(--shadow-elegant)]">
              <div className="font-display font-bold text-3xl text-secondary">Est. 2020</div>
              <div className="text-xs uppercase tracking-widest text-primary-foreground/70">Harare, Zimbabwe</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
