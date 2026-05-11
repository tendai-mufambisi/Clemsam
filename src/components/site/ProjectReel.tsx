import { Reveal } from "./Reveal";
import { useVideoInView } from "@/hooks/use-video-in-view";
import projectVideo from "@/assets/videos/project.mp4";

export function ProjectReel() {
  const videoRef = useVideoInView({ autoPlay: true, threshold: 0.3 });

  return (
    <section className="relative py-24 sm:py-32 bg-primary overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 70% 30%, oklch(0.66 0.12 185) 0, transparent 50%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mb-12 text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.22em] text-secondary mb-4">
            Built With Precision
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-primary-foreground leading-[1.05]">
            Every Detail. Every Time.
          </h2>
          <p className="mt-4 text-primary-foreground/70 text-lg max-w-xl mx-auto">
            This is what a premier construction team looks like in action.
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="relative rounded-3xl overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.6)] aspect-video">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              src={projectVideo}
              muted
              loop
              playsInline
              preload="none"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between pointer-events-none">
              <div>
                <div className="font-display font-bold text-white text-2xl sm:text-3xl drop-shadow-lg">
                  Clemsam Construction
                </div>
                <div className="text-white/80 text-sm tracking-wide">Zimbabwe's Premier Finishing Specialists</div>
              </div>
              <div className="hidden sm:flex items-center gap-2 bg-secondary/90 backdrop-blur-sm text-secondary-foreground text-xs font-semibold px-4 py-2 rounded-full">
                <span className="size-2 rounded-full bg-secondary-foreground animate-pulse" />
                Live Project
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
