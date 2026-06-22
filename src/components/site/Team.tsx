import { Linkedin, Mail } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { EMAIL_INFO } from "@/lib/whatsapp";

type Member = {
  initials: string;
  name: string;
  role: string;
  desc: string;
  tags: string[];
  gradient: string;
};

const team: Member[] = [
  {
    initials: "BC",
    name: "Blessing Chikwanda",
    role: "Project Manager",
    gradient: "from-primary to-primary/80",
    desc: "Coordinates all active projects, keeping timelines, budgets, and quality standards firmly on track from first brief to final handover.",
    tags: ["Planning", "Delivery"],
  },
  {
    initials: "TM",
    name: "Tapiwa Moyo",
    role: "Lead Civil Engineer",
    gradient: "from-secondary/90 to-secondary",
    desc: "Qualified civil engineer overseeing structural design, compliance, and technical execution across residential and commercial builds.",
    tags: ["Structures", "Engineering"],
  },
  {
    initials: "GM",
    name: "Grace Mutendi",
    role: "Interior Design Specialist",
    gradient: "from-accent to-accent/70",
    desc: "Transforms spaces through expert ceiling design, colour consulting, and premium finishing selections that clients fall in love with.",
    tags: ["Interiors", "Ceilings"],
  },
  {
    initials: "DM",
    name: "David Mhuri",
    role: "Senior Site Supervisor",
    gradient: "from-primary/80 to-secondary/70",
    desc: "Runs day-to-day site operations, directs the trade teams on the ground, and enforces the quality standards Clemsam is known for.",
    tags: ["Site Control", "Quality"],
  },
  {
    initials: "SM",
    name: "Solomon Makunde",
    role: "Master Tiler & Finishing Specialist",
    gradient: "from-secondary/70 to-primary/70",
    desc: "Brings precision and artistry to every tiling, cladding, and finishing job — the craftsman who delivers the wow factor.",
    tags: ["Tiling", "Finishes"],
  },
  {
    initials: "RG",
    name: "Ruth Gama",
    role: "Client Relations Manager",
    gradient: "from-accent/80 to-secondary/60",
    desc: "Your first point of contact — managing inquiries, coordinating quotations, and making sure every client feels genuinely taken care of.",
    tags: ["Client Care", "Quoting"],
  },
];

function MemberCard({ m, delay }: { m: Member; delay: number }) {
  return (
    <Reveal delay={delay}>
      <div className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card transition-all duration-500 hover:-translate-y-2 hover:border-secondary/30 hover:shadow-[var(--shadow-elegant)]">
        {/* Gradient avatar block */}
        <div className={`relative h-52 bg-gradient-to-br ${m.gradient} flex items-end p-5`}>
          {/* Large initials */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display text-7xl font-bold text-white/15 select-none">
              {m.initials}
            </span>
          </div>
          {/* Small initials circle */}
          <div className="relative z-10 grid size-16 place-items-center rounded-2xl border-2 border-white/25 bg-white/15 backdrop-blur-sm shadow-lg">
            <span className="font-display text-2xl font-bold text-white">{m.initials}</span>
          </div>
          {/* Decorative corner blob */}
          <div className="absolute -right-6 -top-6 size-28 rounded-full bg-white/10 blur-xl" />
        </div>

        {/* Card body */}
        <div className="p-6">
          <h3 className="mb-0.5 font-display text-lg font-semibold text-foreground">{m.name}</h3>
          <div className="mb-3 text-sm font-semibold text-secondary">{m.role}</div>
          <p className="mb-4 text-[13.5px] leading-relaxed text-muted-foreground">{m.desc}</p>

          {/* Specialty tags */}
          <div className="mb-5 flex flex-wrap gap-1.5">
            {m.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-muted px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wider text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Divider + social links */}
          <div className="flex items-center gap-2 border-t border-border pt-4">
            <a
              href="#"
              aria-label={`${m.name} on LinkedIn`}
              className="grid size-8 place-items-center rounded-full border border-border text-muted-foreground transition-all hover:border-secondary/50 hover:text-secondary"
            >
              <Linkedin className="size-3.5" />
            </a>
            <a
              href={`mailto:${EMAIL_INFO}`}
              aria-label={`Email ${m.name}`}
              className="grid size-8 place-items-center rounded-full border border-border text-muted-foreground transition-all hover:border-secondary/50 hover:text-secondary"
            >
              <Mail className="size-3.5" />
            </a>
            <span className="ml-auto text-[11px] text-muted-foreground/50 group-hover:text-secondary transition-colors duration-300">
              View Profile →
            </span>
          </div>
        </div>

        {/* Bottom accent line — reveals on hover */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-secondary to-accent scale-x-0 transition-transform duration-500 group-hover:scale-x-100 origin-left" />
      </div>
    </Reveal>
  );
}

export function Team() {
  return (
    <section id="team" className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Our Team"
          title={
            <>
              The people who make it{" "}
              <span className="text-secondary">happen.</span>
            </>
          }
          sub="Skilled, passionate, and united by one goal — delivering work that stands out and stands the test of time."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m, i) => (
            <MemberCard key={m.name} m={m} delay={i * 0.07} />
          ))}
        </div>

        {/* Bottom CTA */}
        <Reveal delay={0.3}>
          <div className="mt-16 rounded-3xl border border-border bg-muted/40 p-8 sm:p-10 text-center">
            <div className="mb-1 text-xs font-semibold uppercase tracking-[0.22em] text-secondary">
              Join the Team
            </div>
            <h3 className="mb-3 font-display text-2xl sm:text-3xl font-bold text-foreground">
              Want to build with us?
            </h3>
            <p className="mx-auto mb-6 max-w-md text-muted-foreground text-[15px]">
              We're always looking for skilled tradespeople and professionals who care about
              quality. Get in touch and let's talk.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90"
            >
              Get in Touch
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
