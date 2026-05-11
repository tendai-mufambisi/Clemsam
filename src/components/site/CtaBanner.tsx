import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { openWhatsapp, PHONE_DISPLAY } from "@/lib/whatsapp";

export function CtaBanner() {
  return (
    <section className="relative py-24 bg-primary text-primary-foreground overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 30% 50%, oklch(0.66 0.12 185 / 0.6) 0, transparent 60%)",
        }}
      />
      <Reveal className="relative mx-auto max-w-4xl px-5 lg:px-8 text-center">
        <h2 className="font-display font-bold text-4xl sm:text-5xl mb-4">
          Ready to build something <span className="text-secondary italic">great?</span>
        </h2>
        <p className="text-lg text-primary-foreground/80 max-w-xl mx-auto mb-9">
          Get a free, no-obligation quote within 24 hours.
        </p>
        <div className="flex flex-wrap gap-4 justify-center items-center">
          <Button
            size="lg"
            onClick={() => openWhatsapp("Hello Clemsam, I'd like to start a conversation about a project.")}
            className="rounded-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 h-13 py-3 shadow-[0_15px_40px_-12px_oklch(0.66_0.12_185_/_0.7)]"
          >
            <MessageCircle className="size-5 mr-2" />
            Chat With Us on WhatsApp
          </Button>
          <a
            href={`tel:+${"263783456446"}`}
            className="inline-flex items-center gap-2 text-primary-foreground/85 hover:text-secondary font-medium"
          >
            <Phone className="size-4" />
            Or call us: {PHONE_DISPLAY}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
