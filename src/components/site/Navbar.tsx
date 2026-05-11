import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X, HardHat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { openWhatsapp } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

const links = [
  { label: "Home", to: "/", hash: "" },
  { label: "Services", to: "/", hash: "#services" },
  { label: "Projects", to: "/projects", hash: "" },
  { label: "About", to: "/", hash: "#about" },
  { label: "Contact", to: "/", hash: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const onHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || !onHome || open;

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        solid ? "bg-primary/95 backdrop-blur-md shadow-[0_2px_20px_-10px_rgba(0,0,0,0.4)]" : "bg-transparent",
      )}
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group" onClick={() => setOpen(false)}>
          <span className="grid place-items-center size-10 rounded-xl bg-secondary text-secondary-foreground transition-transform group-hover:scale-105">
            <HardHat className="size-5" />
          </span>
          <span className="text-primary-foreground font-display font-bold text-lg leading-tight">
            Clemsam
            <span className="block text-[10px] uppercase tracking-[0.2em] text-secondary font-medium">Construction</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => {
            const href = l.hash ? `${l.to}${l.hash}` : l.to;
            return (
              <a
                key={l.label}
                href={href}
                className="px-4 py-2 text-sm font-medium text-primary-foreground/85 hover:text-secondary transition-colors"
              >
                {l.label}
              </a>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button
            onClick={() =>
              openWhatsapp("Hello Clemsam, I'd like to request a quote for...")
            }
            className="rounded-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-6 shadow-[0_8px_20px_-8px_oklch(0.66_0.12_185_/_0.6)]"
          >
            Get a Quote
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          className="lg:hidden text-primary-foreground p-2"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile overlay */}
      {open && (
        <div className="lg:hidden bg-primary/98 backdrop-blur-md border-t border-white/10">
          <nav className="px-5 py-6 flex flex-col gap-1">
            {links.map((l) => {
              const href = l.hash ? `${l.to}${l.hash}` : l.to;
              return (
                <a
                  key={l.label}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="py-3 text-base font-medium text-primary-foreground/90 border-b border-white/5"
                >
                  {l.label}
                </a>
              );
            })}
            <Button
              onClick={() => {
                setOpen(false);
                openWhatsapp("Hello Clemsam, I'd like to request a quote for...");
              }}
              className="mt-4 rounded-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold"
            >
              Get a Quote
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
