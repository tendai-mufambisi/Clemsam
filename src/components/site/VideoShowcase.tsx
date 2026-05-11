import { useRef, useState, useEffect } from "react";
import { Volume2, VolumeX, Play, Pause } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import showcaseVideo from "@/assets/videos/showcase.mp4";

export function VideoShowcase() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(false);

  // Pause when scrolled out of view — don't auto-resume since user controls playback
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (!entry.isIntersecting) video.pause(); },
      { threshold: 0.2 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  };

  const unmute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = false;
    setMuted(false);
    if (video.paused) video.play().catch(() => {});
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  };

  return (
    <section id="video" className="bg-muted/40 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Our Work"
          title="See Our Craftsmanship In Motion"
          sub="A recent finished office fit-out — custom cupboards, fittings, and finishes by our team."
        />
        <Reveal>
          <div className="relative rounded-3xl overflow-hidden shadow-[var(--shadow-elegant)] aspect-video bg-primary group cursor-pointer">
            <video
              ref={videoRef}
              className="absolute inset-0 w-full h-full object-cover"
              src={showcaseVideo}
              muted
              playsInline
              preload="none"
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
            />

            {/* Big centred play button — shown when paused */}
            {!playing && (
              <button
                onClick={togglePlay}
                aria-label="Play video"
                className="absolute inset-0 flex items-center justify-center bg-primary/55 backdrop-blur-[2px] transition-colors hover:bg-primary/45"
              >
                <div className="grid place-items-center size-24 rounded-full bg-white/95 shadow-[0_20px_60px_rgba(0,0,0,0.45)] hover:scale-105 transition-transform">
                  <Play className="size-10 ml-1.5 text-primary" />
                </div>
              </button>
            )}

            {/* ── UNMUTE BANNER ── very prominent, shown while playing & muted ── */}
            {playing && muted && (
              <button
                onClick={unmute}
                aria-label="Unmute video"
                className="absolute top-5 left-1/2 -translate-x-1/2 z-10 flex items-center gap-3 bg-white text-primary font-bold px-7 py-3.5 rounded-full shadow-[0_10px_50px_rgba(0,0,0,0.4)] hover:scale-105 hover:shadow-[0_14px_60px_rgba(0,0,0,0.5)] transition-all select-none"
              >
                <VolumeX className="size-5 shrink-0" />
                <span className="text-base tracking-wide">Tap to Unmute</span>
                {/* Pulsing dot to draw the eye */}
                <span className="relative flex size-3">
                  <span className="animate-ping absolute inline-flex size-full rounded-full bg-primary opacity-60" />
                  <span className="relative inline-flex size-3 rounded-full bg-primary" />
                </span>
              </button>
            )}

            {/* Hover controls bar — appears on hover */}
            <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-5 py-4 bg-gradient-to-t from-black/70 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 pointer-events-none group-hover:pointer-events-auto">
              <button
                onClick={togglePlay}
                aria-label={playing ? "Pause" : "Play"}
                className="grid place-items-center size-9 rounded-full bg-white/20 hover:bg-white/35 text-white transition-colors"
              >
                {playing ? <Pause className="size-4" /> : <Play className="size-4 ml-0.5" />}
              </button>

              <button
                onClick={toggleMute}
                aria-label={muted ? "Unmute" : "Mute"}
                className="flex items-center gap-2 bg-white text-primary text-xs font-bold px-4 py-2 rounded-full hover:bg-white/90 transition-colors shadow-md"
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
