import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, X } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { Button } from "@/components/ui/button";

import kitchen1 from "@/assets/kitchens/kitchen-01.jpeg";
import kitchen2 from "@/assets/kitchens/kitchen-08.jpeg";
import building1 from "@/assets/building/building-01.jpeg";
import building2 from "@/assets/building/building-12.jpeg";
import tiling1 from "@/assets/tiling/tiling-01.jpeg";
import tiling2 from "@/assets/tiling/tiling-23.jpeg";

const kitchenGlob = import.meta.glob("../../assets/kitchens/*.jpeg", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

const buildingGlob = import.meta.glob("../../assets/building/*.jpeg", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

const tilingGlob = import.meta.glob("../../assets/tiling/*.jpeg", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

const sorted = (glob: Record<string, string>) =>
  Object.entries(glob).sort(([a], [b]) => a.localeCompare(b)).map(([, url]) => url);

const galleries = {
  "Kitchen Cabinets": sorted(kitchenGlob),
  "Building & Construction": sorted(buildingGlob),
  "Tiling & Cladding": sorted(tilingGlob),
} as const;

type GalleryKey = keyof typeof galleries;

const tiles = [
  { img: kitchen1, name: "Kitchen — Arlington Estate", category: "Kitchen Cabinets" as GalleryKey, span: "lg:row-span-2" },
  { img: building1, name: "Building & Construction", category: "Building & Construction" as GalleryKey },
  { img: tiling1, name: "Tiling & Cladding", category: "Tiling & Cladding" as GalleryKey },
  { img: kitchen2, name: "Kitchen — Ballantyne", category: "Kitchen Cabinets" as GalleryKey, span: "lg:col-span-2" },
  { img: building2, name: "Construction Work", category: "Building & Construction" as GalleryKey },
  { img: tiling2, name: "Tiling Installation", category: "Tiling & Cladding" as GalleryKey },
];

export function FeaturedProjects() {
  const [gallery, setGallery] = useState<GalleryKey | null>(null);

  return (
    <>
      <section id="projects" className="py-24 sm:py-32 bg-muted/40">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Recent Work"
            title="A glimpse into the spaces we've built."
            sub="Every project tells a story of craftsmanship, integrity, and on-time delivery. Click any image to browse the full collection."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[280px]">
            {tiles.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.05} className={p.span ?? ""}>
                <button
                  type="button"
                  onClick={() => setGallery(p.category)}
                  className="group relative w-full h-full min-h-[280px] rounded-3xl overflow-hidden cursor-pointer text-left"
                >
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
                    <span className="mt-2 inline-block text-xs text-white/50">
                      Tap to browse {galleries[p.category].length} photos →
                    </span>
                  </div>
                </button>
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

      {/* Full-screen gallery overlay */}
      {gallery && (
        <div className="fixed inset-0 z-50 flex flex-col bg-black/95">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 shrink-0">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-secondary">Gallery</span>
              <h2 className="font-display font-bold text-xl text-white">{gallery}</h2>
            </div>
            <button
              type="button"
              onClick={() => setGallery(null)}
              aria-label="Close gallery"
              className="grid place-items-center size-10 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <X className="size-5" />
            </button>
          </div>

          {/* Scrollable grid */}
          <div className="flex-1 overflow-y-auto p-6">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {galleries[gallery].map((url, i) => (
                <div key={i} className="aspect-[4/3] rounded-2xl overflow-hidden bg-muted/20">
                  <img
                    src={url}
                    alt={`${gallery} — photo ${i + 1}`}
                    loading="lazy"
                    className="size-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
