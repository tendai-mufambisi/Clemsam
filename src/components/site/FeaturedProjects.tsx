import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { Button } from "@/components/ui/button";

import kitchen from "@/assets/proj-kitchen.jpg";
import ceiling from "@/assets/proj-ceiling.jpg";
import wardrobe from "@/assets/proj-wardrobe.jpg";
import bathroom from "@/assets/proj-bathroom.jpg";
import paving from "@/assets/proj-paving.jpg";
import house from "@/assets/proj-house.jpg";

// TODO: Replace all placeholder images with actual Clemsam project photos from their Facebook page
const projects = [
  { img: ceiling, name: "LED Cove Ceiling", category: "Suspended Ceilings", span: "lg:row-span-2" },
  { img: kitchen, name: "Walnut Family Kitchen", category: "Fitted Kitchens" },
  { img: wardrobe, name: "Master Walk-in Wardrobe", category: "BICs" },
  { img: bathroom, name: "Stone-tiled Ensuite", category: "Tiling", span: "lg:col-span-2" },
  { img: paving, name: "Curved Brick Driveway", category: "Paving" },
  { img: house, name: "Modern Family Home", category: "Building" },
];

export function FeaturedProjects() {
  return (
    <section id="projects" className="py-24 sm:py-32 bg-muted/40">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Recent Work"
          title="A glimpse into the spaces we've built."
          sub="Every project tells a story of craftsmanship, integrity, and on-time delivery."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[280px]">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.05} className={p.span ?? ""}>
              <article className="group relative h-full min-h-[280px] rounded-3xl overflow-hidden cursor-pointer">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-primary-foreground">
                  <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.18em] text-secondary mb-2">
                    {p.category}
                  </span>
                  <h3 className="font-display font-semibold text-xl leading-tight">{p.name}</h3>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-12 font-semibold">
            <Link to="/projects">
              View All Projects <ArrowRight className="size-4 ml-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
