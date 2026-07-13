import { useRef, useState, useEffect } from "react";
import { Volume2, VolumeX, Play, Pause } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import showcaseVideo from "@/assets/videos/showcase.mp4";

export function VideoShowcase() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        if (entry.isIntersecting) {
          void video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      void video.play().catch(() => {});
    } else {
      video.pause();
    }
  };

  const unmute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = false;
    setMuted(false);
    if (video.paused) void video.play().catch(() => {});
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  };

  return (
    <section id="video" className="bg-muted/40 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-0 sm:px-5 lg:px-8">
        <SectionHeading
          eyebrow="Our Work"
          title="See Our Craftsmanship In Motion"
          sub="A recent kitchen installation — custom cabinetry, fittings, and finishes by our team."
        />
        <Reveal>
          <div className="relative w-full overflow-hidden rounded-none shadow-[var(--shadow-elegant)] aspect-video bg-primary group cursor-pointer sm:rounded-3xl">
            <video
              ref={videoRef}
              className="absolute inset-0 h-full w-full object-cover"
              src={showcaseVideo}
              muted
              playsInline
              preload="metadata"
              loop
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
            />

            {!playing && (
              <button
                onClick={togglePlay}
                aria-label="Play video"
                className="absolute inset-0 flex items-center justify-center bg-primary/55 backdrop-blur-[2px] transition-colors hover:bg-primary/45"
              >
                <div className="grid size-24 place-items-center rounded-full bg-white/95 shadow-[0_20px_60px_rgba(0,0,0,0.45)] transition-transform hover:scale-105">
                  <Play className="ml-1.5 size-10 text-primary" />
                </div>
              </button>
            )}

            {isInView && muted && (
              <button
                onClick={unmute}
                aria-label="Unmute video"
                className="absolute left-1/2 top-4 z-20 flex -translate-x-1/2 items-center gap-3 rounded-full bg-white px-6 py-3 font-bold text-primary shadow-[0_10px_50px_rgba(0,0,0,0.4)] transition-all select-none hover:scale-105 hover:shadow-[0_14px_60px_rgba(0,0,0,0.5)] sm:top-5 sm:px-7 sm:py-3.5"
              >
                <VolumeX className="size-5 shrink-0" />
                <span className="text-sm tracking-wide sm:text-base">Tap to Unmute</span>
                <span className="relative flex size-3">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-60" />
                  <span className="relative inline-flex size-3 rounded-full bg-primary" />
                </span>
              </button>
            )}

            <div className="pointer-events-none absolute bottom-0 left-0 right-0 flex translate-y-full items-center justify-between bg-gradient-to-t from-black/70 to-transparent px-5 py-4 transition-transform duration-300 group-hover:pointer-events-auto group-hover:translate-y-0">
              <button
                onClick={togglePlay}
                aria-label={playing ? "Pause" : "Play"}
                className="grid size-9 place-items-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/35"
              >
                {playing ? <Pause className="size-4" /> : <Play className="ml-0.5 size-4" />}
              </button>

              <button
                onClick={toggleMute}
                aria-label={muted ? "Unmute" : "Mute"}
                className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold text-primary shadow-md transition-colors hover:bg-white/90"
              >
                {muted ? <VolumeX className="size-3.5" /> : <Volume2 className="size-3.5" />}
                {muted ? "Unmute" : "Mute"}
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
