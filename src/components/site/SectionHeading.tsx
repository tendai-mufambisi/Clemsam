import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  sub,
  align = "center",
  invert = false,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  sub?: string;
  align?: "center" | "left";
  invert?: boolean;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-3xl mb-14",
        align === "center" ? "mx-auto text-center" : "text-left",
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "inline-block text-xs font-semibold uppercase tracking-[0.22em] mb-4",
            invert ? "text-secondary" : "text-secondary",
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "font-display font-bold text-4xl sm:text-5xl leading-[1.05] mb-4",
          invert ? "text-primary-foreground" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {sub && (
        <p
          className={cn(
            "text-lg leading-relaxed",
            invert ? "text-primary-foreground/75" : "text-muted-foreground",
          )}
        >
          {sub}
        </p>
      )}
    </Reveal>
  );
}
