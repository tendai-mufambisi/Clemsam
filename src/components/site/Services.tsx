import {
  Layers, ChefHat, Grid3x3, Paintbrush, Building2, HardHat, Construction, ArrowUpRight,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const services = [
  { icon: Layers, name: "Suspended Ceilings", desc: "Modern drop ceilings, LED mood lighting, and statement designs that transform any room." },
  { icon: ChefHat, name: "Fitted Kitchens & BICs", desc: "Custom-built cabinetry, wardrobes, and kitchens crafted to your space and style." },
  { icon: Grid3x3, name: "Tiling & Cladding", desc: "Precision tiling and wall cladding for kitchens, bathrooms, and feature walls." },
  { icon: Paintbrush, name: "Painting & Finishes", desc: "Interior and exterior painting with premium-grade finishes that last." },
  { icon: Building2, name: "Building Construction", desc: "Residential and commercial builds delivered on time and on budget." },
  { icon: HardHat, name: "Civil Engineering", desc: "Structural and civil works backed by qualified engineering expertise." },
  { icon: Construction, name: "Paving", desc: "Driveways, walkways, and outdoor surfaces built to withstand Zimbabwean conditions." },
];

export function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="What We Do"
          title="End-to-end construction, under one roof."
          sub="From the first slab to the final coat of paint — one accountable team for the entire result."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.05}>
              <div className="group h-full p-7 rounded-3xl bg-card border border-border hover:border-secondary/40 transition-all duration-300 hover:shadow-[var(--shadow-soft)] hover:-translate-y-1">
                <div className="mb-5 grid place-items-center size-14 rounded-2xl bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                  <s.icon className="size-6" />
                </div>
                <h3 className="font-display font-semibold text-xl mb-2 text-foreground">{s.name}</h3>
                <p className="text-muted-foreground leading-relaxed text-[15px] mb-5">{s.desc}</p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-secondary group-hover:gap-2 transition-all"
                >
                  Learn more <ArrowUpRight className="size-4" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
