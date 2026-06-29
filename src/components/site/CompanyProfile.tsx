import { FileDown, FileText, Shield, Star, Check } from "lucide-react";
import { Reveal } from "./Reveal";

const highlights = [
  "Full overview of our services and specializations",
  "Portfolio highlights from completed projects across Zimbabwe",
  "Team credentials and company certifications",
  "How to get a free quote within 24 hours",
];

export function CompanyProfile() {
  return (
    <section id="company-profile" className="py-24 sm:py-32 bg-primary overflow-hidden relative">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-48 -right-48 size-[640px] rounded-full bg-secondary/10 blur-3xl" />
        <div className="absolute -bottom-48 -left-48 size-[520px] rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">

          {/* Text column */}
          <Reveal>
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.22em] text-secondary mb-4">
              Company Overview
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl leading-[1.05] mb-6 text-primary-foreground">
              Get to Know<br />
              <span className="text-secondary">Clemsam</span> Inside Out.
            </h2>
            <p className="text-primary-foreground/70 text-lg leading-relaxed mb-8">
              Our company profile covers everything — our story, services, portfolio,
              team, and commitment to quality. Download it to share with stakeholders
              or explore at your own pace.
            </p>

            <ul className="space-y-3 mb-10">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0 size-5 rounded-full bg-secondary/20 grid place-items-center">
                    <Check className="size-3 text-secondary" />
                  </span>
                  <span className="text-primary-foreground/75 text-[15px]">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="/Clemsam-Company-Profile.pdf"
              download
              className="group inline-flex items-center gap-3 rounded-full bg-secondary px-8 py-4 font-semibold text-secondary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary/90 hover:shadow-[0_0_40px_rgba(19,168,158,0.45)]"
            >
              <FileDown className="size-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-110" />
              Download Company Profile
              <span className="ml-1 rounded-full bg-white/15 px-2.5 py-0.5 text-xs font-normal">
                PDF
              </span>
            </a>
          </Reveal>

          {/* Document preview card */}
          <Reveal delay={0.15}>
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-secondary/25 to-accent/15 blur-2xl" />

              <div className="relative rounded-3xl border border-white/15 bg-gradient-to-br from-white/10 to-white/5 p-8 shadow-[var(--shadow-elegant)] backdrop-blur-sm">
                {/* Doc header */}
                <div className="mb-8 flex items-start justify-between">
                  <div>
                    <div className="mb-1 text-xs uppercase tracking-[0.2em] text-secondary/80">
                      Company Document
                    </div>
                    <div className="font-display text-2xl font-bold text-primary-foreground">
                      Company Profile
                    </div>
                    <div className="mt-1 text-sm text-primary-foreground/50">
                      Clemsam Construction Solutions
                    </div>
                  </div>
                  <div className="rounded-xl border border-secondary/30 bg-secondary/20 p-3">
                    <FileText className="size-7 text-secondary" />
                  </div>
                </div>

                {/* Skeleton lines — visual document preview */}
                <div className="mb-8 space-y-2.5">
                  <div className="h-2.5 w-full rounded-full bg-white/15" />
                  <div className="h-2.5 w-[85%] rounded-full bg-white/10" />
                  <div className="h-2.5 w-[92%] rounded-full bg-white/10" />
                  <div className="h-2.5 w-[78%] rounded-full bg-white/8" />
                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <div className="h-20 rounded-xl bg-white/8" />
                    <div className="h-20 rounded-xl bg-white/8" />
                  </div>
                  <div className="h-2.5 w-full rounded-full bg-white/8" />
                  <div className="h-2.5 w-[70%] rounded-full bg-white/6" />
                </div>

                {/* File meta row */}
                <div className="flex items-center justify-between border-t border-white/10 pt-6">
                  <div className="flex gap-6">
                    {[
                      { label: "Format", value: "PDF" },
                      { label: "Updated", value: "2025" },
                    ].map(({ label, value }) => (
                      <div key={label}>
                        <div className="text-[10px] uppercase tracking-wider text-primary-foreground/40">
                          {label}
                        </div>
                        <div className="text-sm font-semibold text-primary-foreground/80">{value}</div>
                      </div>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/20 px-3 py-1">
                    <Shield className="size-3 text-accent" />
                    <span className="text-[11px] font-semibold text-accent">Verified</span>
                  </span>
                </div>
              </div>

              {/* Floating premium badge */}
              <div className="absolute -right-4 -top-4 rounded-2xl bg-accent px-4 py-2 shadow-lg">
                <div className="flex items-center gap-1.5">
                  <Star className="size-3.5 fill-current text-accent-foreground" />
                  <span className="text-xs font-bold uppercase tracking-wider text-accent-foreground">
                    Premium
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
