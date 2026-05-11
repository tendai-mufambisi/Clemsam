import { Star, Quote } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

// Placeholder testimonials — replace with real client quotes when available
const testimonials = [
  {
    quote: "Clemsam transformed our entire ground floor. The ceiling work alone was worth every cent — and they finished a week ahead of schedule.",
    name: "Tinashe M.",
    location: "Harare",
  },
  {
    quote: "Professional from quote to handover. The fitted kitchen they built for us is genuinely the best room in the house now.",
    name: "Rufaro & Tendai C.",
    location: "Borrowdale",
  },
  {
    quote: "We've used Clemsam for three projects now. They show up, they communicate, they deliver. Rare in this industry.",
    name: "Property Developer",
    location: "Bulawayo",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 sm:py-32 bg-muted/40">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Client Stories"
          title="What our clients say."
          sub="The work speaks for itself — but their words don't hurt either."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <figure className="h-full p-8 rounded-3xl bg-card border border-border relative">
                <Quote className="absolute top-6 right-6 size-8 text-secondary/15" />
                <div className="flex gap-0.5 mb-4 text-accent">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="size-4 fill-current" />
                  ))}
                </div>
                <blockquote className="text-foreground leading-relaxed mb-6">
                  "{t.quote}"
                </blockquote>
                <figcaption className="pt-5 border-t border-border">
                  <div className="font-display font-semibold text-foreground">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.location}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
