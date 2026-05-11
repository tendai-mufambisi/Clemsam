import { useEffect, useRef } from "react";

export function useVideoInView(options: { autoPlay?: boolean; threshold?: number } = {}) {
  const { autoPlay = true, threshold = 0.25 } = options;
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (autoPlay) {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        } else {
          if (!entry.isIntersecting) video.pause();
        }
      },
      { threshold }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [autoPlay, threshold]);

  return ref;
}
