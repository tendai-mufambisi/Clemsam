import { Award, ShieldCheck, Clock, Wallet } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const items = [
  { icon: Award, title: "Quality Craftsmanship", desc: "Every detail handled with precision and pride." },
  { icon: ShieldCheck, title: "Unwavering Integrity", desc: "Honest pricing, honest timelines, honest work." },
  { icon: Clock, title: "On-Time Delivery", desc: "We respect your schedule as much as our own." },
  { icon: Wallet, title: "Budget Management", desc: "Transparent quotes. No surprise costs." },
];

export function Commitments() {
  return (
    <section className="relative py-24 sm:py-32 bg-primary text-primary-foreground overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, oklch(0.66 0.12 185) 0, transparent 40%), radial-gradient(circle at 80% 80%, oklch(0.76 0.11 85) 0, transparent 40%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          invert
          eyebrow="Our Commitment"
          title="Four promises. Every single project."
          sub="Reputation isn't built with words — it's built on delivery. Here's what we hold ourselves to."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.08}>
              <div className="h-full p-7 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="mb-5 grid place-items-center size-14 rounded-2xl bg-secondary text-secondary-foreground">
                  <it.icon className="size-6" />
                </div>
                <h3 className="font-display font-semibold text-xl mb-2">{it.title}</h3>
                <p className="text-primary-foreground/70 leading-relaxed">{it.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
