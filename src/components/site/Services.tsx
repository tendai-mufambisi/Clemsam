import {
  Layers, ChefHat, LayoutGrid, Grid3x3, Paintbrush, Home, Droplets,
  Building2, ClipboardList, KeyRound, Leaf, ArrowUpRight,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const services = [
  { icon: Layers, name: "Suspended & Drop Ceilings", desc: "Modern drop ceilings, LED cove lighting, and statement designs that transform any room." },
  { icon: ChefHat, name: "Kitchen Cabinets", desc: "Custom-built kitchen cabinetry crafted to your space, style, and budget." },
  { icon: LayoutGrid, name: "BICs & TV Cabinets", desc: "Built-in cupboards and bespoke TV units designed and installed to the highest finish." },
  { icon: Grid3x3, name: "Tiling & Cladding", desc: "Precision tiling and wall cladding for kitchens, bathrooms, and feature walls." },
  { icon: Paintbrush, name: "Painting Services", desc: "Interior and exterior painting with premium-grade finishes that stand the test of time." },
  { icon: Home, name: "Roofing", desc: "Roof installations, repairs, and re-sheeting using quality materials suited to Zimbabwean conditions." },
  { icon: Droplets, name: "Plumbing Services", desc: "Complete plumbing installations, repairs, and maintenance for residential and commercial properties." },
  { icon: Building2, name: "Building & Construction", desc: "Residential and commercial builds managed from foundation to handover, on time and on budget." },
  { icon: ClipboardList, name: "Project Management", desc: "End-to-end project coordination — schedules, contractors, quality control, and client reporting." },
  { icon: KeyRound, name: "Property Management", desc: "Ongoing maintenance and management solutions that keep your property in top condition." },
  { icon: Leaf, name: "Landscaping & Paving", desc: "Driveways, walkways, gardens, and outdoor surfaces built to enhance your property's kerb appeal." },
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
