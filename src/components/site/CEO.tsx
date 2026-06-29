import { Quote, Mail, Phone, Award, CheckCircle2 } from "lucide-react";
import { Reveal } from "./Reveal";
import { openWhatsapp, EMAIL_INFO } from "@/lib/whatsapp";

const stats = [
  { value: "5+", label: "Years Leading" },
  { value: "100+", label: "Projects Overseen" },
  { value: "50+", label: "Happy Clients" },
  { value: "11", label: "Trade Specialties" },
];

const credentials = [
  "Registered Construction Professional",
  "5+ Years Industry Experience",
  "Zimbabwean Business Owner",
];

export function CEO() {
  return (
    <section id="ceo" className="py-24 sm:py-32 bg-muted/40">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">

          {/* Portrait column */}
          <Reveal>
            <div className="relative">
              {/* Ambient glow */}
              <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-secondary/20 via-primary/10 to-accent/20 blur-2xl" />

              {/* Portrait frame */}
              <div className="relative aspect-[3/4] lg:aspect-auto lg:h-[480px] overflow-hidden rounded-3xl shadow-[var(--shadow-elegant)]">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-secondary/40" />
                {/* Replace this div with an <img> tag when CEO photo is available */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                  <div className="grid size-36 place-items-center rounded-full border-2 border-white/20 bg-white/10 backdrop-blur-sm">
                    <span className="font-display text-6xl font-bold text-white/90">S</span>
                  </div>
                  <span className="text-xs uppercase tracking-[0.22em] text-white/30">
                    Photo coming soon
                  </span>
                </div>
                {/* Name overlay at bottom */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent p-7">
                  <div className="font-display text-2xl font-bold text-white">Mr. Samu</div>
                  <div className="mt-0.5 text-sm font-medium tracking-wide text-secondary">
                    CEO &amp; Founder, Clemsam Construction Solutions
                  </div>
                </div>
              </div>

              {/* Credentials floating card */}
              <div className="absolute -bottom-8 -right-6 hidden sm:block max-w-[210px] rounded-2xl border border-border bg-card p-4 shadow-[var(--shadow-elegant)]">
                <div className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-secondary">
                  Credentials
                </div>
                <ul className="space-y-2">
                  {credentials.map((c) => (
                    <li key={c} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 size-3.5 flex-shrink-0 text-secondary" />
                      <span className="text-[11px] leading-tight text-muted-foreground">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Award badge */}
              <div className="absolute -left-4 -top-4 rounded-2xl bg-accent p-3.5 shadow-lg">
                <Award className="size-5 text-accent-foreground" />
              </div>
            </div>
          </Reveal>

          {/* Content column */}
          <Reveal delay={0.15}>
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.22em] text-secondary mb-4">
              Our Leadership
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl leading-[1.05] mb-2 text-foreground">
              Meet Our CEO,
            </h2>
            <h2 className="font-display font-bold text-4xl sm:text-5xl leading-[1.05] mb-7 text-secondary">
              Mr. Samu.
            </h2>

            <p className="mb-5 text-lg leading-relaxed text-muted-foreground">
              Mr. Samu is the founder and driving force behind Clemsam Construction Solutions.
              With a passion for quality craftsmanship and a deep commitment to Zimbabwe's
              built environment, he established Clemsam with one clear vision: deliver premium
              construction work that Zimbabwean families and businesses can truly be proud of.
            </p>
            <p className="mb-8 text-[15px] leading-relaxed text-muted-foreground">
              Under his leadership, Clemsam has grown from a small finishing team to a
              full-service construction company — handling everything from suspended ceilings
              to complete building projects — while maintaining the hands-on quality control
              he personally oversees on every site.
            </p>

            {/* Pull quote */}
            <blockquote className="relative mb-8 rounded-r-2xl border-l-4 border-secondary bg-secondary/5 px-6 py-5">
              <Quote className="absolute -left-3 -top-3 size-6 fill-secondary/20 text-secondary" />
              <p className="text-[15px] italic leading-relaxed text-foreground/80">
                "We don't just build structures — we build trust. Every project is a commitment
                to our clients, our team, and to Zimbabwe."
              </p>
              <footer className="mt-3 text-xs font-semibold uppercase tracking-wider text-secondary">
                — Mr. Samu, CEO &amp; Founder
              </footer>
            </blockquote>

            {/* Stats grid */}
            <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-border bg-card p-3 text-center"
                >
                  <div className="font-display text-xl font-bold text-primary">{s.value}</div>
                  <div className="mt-0.5 text-[11px] uppercase tracking-wider text-muted-foreground">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() =>
                  openWhatsapp("Hi Mr. Samu, I'd like to discuss a project with you.")
                }
                className="inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary/90"
              >
                <Phone className="size-4" />
                Message Directly
              </button>
              <a
                href={`mailto:${EMAIL_INFO}`}
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-secondary/50 hover:text-secondary"
              >
                <Mail className="size-4" />
                Send an Email
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
