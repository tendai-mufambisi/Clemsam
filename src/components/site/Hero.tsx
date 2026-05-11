import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, Check } from "lucide-react";
import { motion } from "framer-motion";
import { openWhatsapp } from "@/lib/whatsapp";
import { useVideoInView } from "@/hooks/use-video-in-view";
import heroVideo from "@/assets/videos/hero.mp4";
import heroPoster from "@/assets/hero.jpg";

export function Hero() {
  const videoRef = useVideoInView({ autoPlay: true, threshold: 0.1 });

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          src={heroVideo}
          poster={heroPoster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/75 to-primary/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8 pt-32 pb-24 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-primary-foreground text-xs font-medium uppercase tracking-[0.18em] mb-6">
            <span className="size-1.5 rounded-full bg-secondary" />
            Turning Blueprints Into Reality
          </span>
          <h1 className="text-primary-foreground font-display font-bold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] mb-6">
            Building Spaces<br />
            That <span className="text-secondary italic font-semibold">Inspire.</span>
          </h1>
          <p className="text-lg sm:text-xl text-primary-foreground/85 max-w-2xl leading-relaxed mb-9">
            Premium ceilings, custom kitchens, and full construction services across Zimbabwe.
            Crafted with integrity. Delivered on time.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button
              size="lg"
              className="rounded-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-7 h-12 shadow-[0_15px_40px_-12px_oklch(0.66_0.12_185_/_0.7)]"
              asChild
            >
              <a href="#projects">
                View Our Work <ArrowRight className="size-4 ml-1" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => openWhatsapp("Hello Clemsam, I'd like a free quote for...")}
              className="rounded-full border-white/40 bg-white/5 backdrop-blur-sm text-primary-foreground hover:bg-white/15 hover:text-primary-foreground font-semibold px-7 h-12"
            >
              Get a Free Quote
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-7 gap-y-2 text-sm text-primary-foreground/85">
            {["100+ Projects Delivered", "Based in Harare", "Nationwide Service"].map((t) => (
              <span key={t} className="inline-flex items-center gap-2">
                <Check className="size-4 text-secondary" /> {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      <a
        href="#video"
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-primary-foreground/60 hover:text-secondary transition-colors"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="size-7" />
        </motion.div>
      </a>
    </section>
  );
}
