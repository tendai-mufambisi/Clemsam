// TODO: Replace all placeholder projects with real Clemsam project data and images
import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

import kitchen from "@/assets/proj-kitchen.jpg";
import ceiling from "@/assets/proj-ceiling.jpg";
import wardrobe from "@/assets/proj-wardrobe.jpg";
import bathroom from "@/assets/proj-bathroom.jpg";
import paving from "@/assets/proj-paving.jpg";
import house from "@/assets/proj-house.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Our Projects | Clemsam Construction Solutions" },
      { name: "description", content: "A portfolio of construction, interior finishing, ceilings, kitchens, tiling, and paving projects delivered by Clemsam across Zimbabwe." },
      { property: "og:title", content: "Our Projects — Clemsam Construction" },
      { property: "og:description", content: "Spaces we've designed, built, and finished across Zimbabwe." },
    ],
  }),
  component: ProjectsPage,
});

const categories = ["All", "Ceilings", "Kitchens & BICs", "Tiling", "Painting", "Building", "Paving"] as const;
type Cat = (typeof categories)[number];

type Project = { img: string; name: string; category: Exclude<Cat, "All">; desc: string };

const projects: Project[] = [
  { img: ceiling, name: "LED Cove Ceiling — Borrowdale", category: "Ceilings", desc: "Custom suspended ceiling with warm LED cove lighting." },
  { img: kitchen, name: "Walnut Family Kitchen", category: "Kitchens & BICs", desc: "Walnut veneer cabinetry with quartz countertops." },
  { img: wardrobe, name: "Master Walk-in Wardrobe", category: "Kitchens & BICs", desc: "Full-height built-in cupboards with internal LED lighting." },
  { img: bathroom, name: "Stone-tiled Ensuite", category: "Tiling", desc: "Large-format porcelain tiling and freestanding bath install." },
  { img: paving, name: "Curved Brick Driveway", category: "Paving", desc: "Interlocking brick pavers with edge restraints." },
  { img: house, name: "Modern Family Home", category: "Building", desc: "Full residential build, handed over on schedule." },
  { img: ceiling, name: "Office Drop Ceiling", category: "Ceilings", desc: "Commercial ceiling fit-out with recessed lighting." },
  { img: kitchen, name: "Compact Apartment Kitchen", category: "Kitchens & BICs", desc: "Space-optimised kitchen with integrated appliances." },
  { img: bathroom, name: "Marble Feature Wall", category: "Tiling", desc: "Bookmatched marble cladding for a feature wall." },
  { img: house, name: "Exterior Repaint", category: "Painting", desc: "Premium-grade exterior paint with weatherproof finish." },
  { img: paving, name: "Pool Surround Paving", category: "Paving", desc: "Slip-resistant paving around an outdoor pool deck." },
  { img: wardrobe, name: "Boys' Bedroom Wardrobes", category: "Kitchens & BICs", desc: "Sliding-door BICs with shoe storage." },
];

function ProjectsPage() {
  const [active, setActive] = useState<Cat>("All");
  const [open, setOpen] = useState<Project | null>(null);

  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
    [active],
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero strip */}
      <section className="relative pt-32 pb-16 bg-primary text-primary-foreground overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-20"
          style={{ backgroundImage: "radial-gradient(ellipse at 70% 30%, oklch(0.66 0.12 185 / 0.6) 0, transparent 60%)" }}
        />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.22em] text-secondary mb-4">
            Portfolio
          </span>
          <h1 className="font-display font-bold text-5xl sm:text-6xl mb-4">Our Projects</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl">
            A portfolio of spaces we've designed, built, and finished across Zimbabwe.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 bg-muted/40">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={cn(
                  "px-5 py-2.5 rounded-full text-sm font-medium transition-all border",
                  active === c
                    ? "bg-primary text-primary-foreground border-primary shadow-[var(--shadow-soft)]"
                    : "bg-background text-foreground border-border hover:border-secondary hover:text-secondary",
                )}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p, i) => (
              <Reveal key={`${p.name}-${i}`} delay={(i % 6) * 0.05}>
                <button
                  onClick={() => setOpen(p)}
                  className="group block w-full text-left relative aspect-[4/5] rounded-3xl overflow-hidden"
                >
                  <img src={p.img} alt={p.name} loading="lazy" className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-primary-foreground">
                    <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.18em] text-secondary mb-2">
                      {p.category}
                    </span>
                    <h3 className="font-display font-semibold text-xl">{p.name}</h3>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!open} onOpenChange={(v) => !v && setOpen(null)}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden bg-card">
          {open && (
            <>
              <div className="aspect-video overflow-hidden bg-muted">
                <img src={open.img} alt={open.name} className="size-full object-cover" />
              </div>
              <div className="p-6 sm:p-8">
                <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.18em] text-secondary mb-2">
                  {open.category}
                </span>
                <DialogTitle className="font-display font-semibold text-2xl mb-2">{open.name}</DialogTitle>
                <p className="text-muted-foreground">{open.desc}</p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}
