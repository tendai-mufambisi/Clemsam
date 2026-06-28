import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { X, Images } from "lucide-react";
import { cn } from "@/lib/utils";

const kitchenGlob = import.meta.glob("../assets/kitchens/*.jpeg", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

const buildingGlob = import.meta.glob("../assets/building/*.jpeg", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

const tilingGlob = import.meta.glob("../assets/tiling/*.jpeg", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

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

const categories = ["All", "Kitchens", "Tiling & Cladding", "Building & Construction"] as const;
type Cat = (typeof categories)[number];

type ProjectGroup = {
  id: string;
  name: string;
  location?: string;
  category: Exclude<Cat, "All">;
  desc: string;
  cover: string;
  images: string[];
};

function buildProjects(): ProjectGroup[] {
  const sorted = (glob: Record<string, string>) =>
    Object.entries(glob).sort(([a], [b]) => a.localeCompare(b)).map(([, url]) => url);

  const kitchenUrls = sorted(kitchenGlob);
  const buildingUrls = sorted(buildingGlob);
  const tilingUrls = sorted(tilingGlob);

  const arlington = kitchenUrls.slice(0, 7);
  const ballantyne = kitchenUrls.slice(7);
  const mid = Math.ceil(tilingUrls.length / 2);
  const tilingA = tilingUrls.slice(0, mid);
  const tilingB = tilingUrls.slice(mid);

  return [
    {
      id: "kitchen-arlington",
      name: "Kitchen Installation",
      location: "Arlington Estate, Harare — February 2026",
      category: "Kitchens",
      desc: "Custom kitchen cabinetry designed, built, and installed at a residence in Arlington Estate, Harare. Clean finishes, quality fittings, and delivered on schedule.",
      cover: arlington[0],
      images: arlington,
    },
    {
      id: "kitchen-ballantyne",
      name: "Kitchen Installation",
      location: "Ambassador Road, Ballantyne",
      category: "Kitchens",
      desc: "Complete kitchen fit-out along Ambassador Road, Ballantyne. Custom cabinetry crafted to the client's layout and style preferences.",
      cover: ballantyne[0],
      images: ballantyne,
    },
    {
      id: "building-project",
      name: "Building & Construction Project",
      category: "Building & Construction",
      desc: "A residential building and construction project managed from foundation through to handover by the Clemsam team.",
      cover: buildingUrls[0],
      images: buildingUrls,
    },
    {
      id: "tiling-a",
      name: "Tiling & Cladding",
      location: "Installation Set A",
      category: "Tiling & Cladding",
      desc: "Precision tiling and wall cladding work showcasing Clemsam's attention to detail and quality of finish.",
      cover: tilingA[0],
      images: tilingA,
    },
    {
      id: "tiling-b",
      name: "Tiling & Cladding",
      location: "Installation Set B",
      category: "Tiling & Cladding",
      desc: "A further selection of tiling and cladding installations by Clemsam's skilled team across different sites.",
      cover: tilingB[0],
      images: tilingB,
    },
  ];
}

const projects = buildProjects();

function ProjectsPage() {
  const [active, setActive] = useState<Cat>("All");
  const [open, setOpen] = useState<ProjectGroup | null>(null);

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
          className="absolute inset-0 opacity-20 [background-image:radial-gradient(ellipse_at_70%_30%,oklch(0.66_0.12_185_/_0.6)_0,transparent_60%)]"
        />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.22em] text-secondary mb-4">
            Portfolio
          </span>
          <h1 className="font-display font-bold text-5xl sm:text-6xl mb-4">Our Projects</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl">
            A portfolio of spaces we've designed, built, and finished across Zimbabwe. Click any project to view the full photo set.
          </p>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="py-12 bg-muted/40">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
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
              <Reveal key={p.id} delay={(i % 6) * 0.05}>
                <button
                  type="button"
                  onClick={() => setOpen(p)}
                  className="group block w-full text-left relative aspect-[4/5] rounded-3xl overflow-hidden"
                >
                  <img
                    src={p.cover}
                    alt={p.name}
                    loading="lazy"
                    className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-primary-foreground">
                    <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.18em] text-secondary mb-1">
                      {p.category}
                    </span>
                    <h3 className="font-display font-semibold text-xl leading-tight">{p.name}</h3>
                    {p.location && (
                      <p className="mt-0.5 text-xs text-white/60">{p.location}</p>
                    )}
                    <div className="mt-3 flex items-center gap-1.5 text-xs text-white/50">
                      <Images className="size-3.5" />
                      {p.images.length} photos — click to view
                    </div>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Full-screen project gallery */}
      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-black/95">
          {/* Header */}
          <div className="flex items-start justify-between px-6 py-5 border-b border-white/10 shrink-0">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-secondary">{open.category}</span>
              <h2 className="font-display font-bold text-2xl text-white mt-0.5">{open.name}</h2>
              {open.location && <p className="text-sm text-white/60 mt-0.5">{open.location}</p>}
              <p className="mt-2 text-sm text-white/50 max-w-lg">{open.desc}</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(null)}
              aria-label="Close gallery"
              className="ml-4 shrink-0 grid place-items-center size-10 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <X className="size-5" />
            </button>
          </div>

          {/* Scrollable photo grid */}
          <div className="flex-1 overflow-y-auto p-6">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {open.images.map((url, i) => (
                <div key={i} className="aspect-[4/3] rounded-2xl overflow-hidden bg-white/5">
                  <img
                    src={url}
                    alt={`${open.name} — photo ${i + 1}`}
                    loading="lazy"
                    className="size-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
