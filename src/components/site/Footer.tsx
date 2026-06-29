import { HardHat, Facebook, Instagram, Twitter, MessageCircle, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { EMAIL_INFO, PHONE_DISPLAY, whatsappLink } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <span className="grid place-items-center size-10 rounded-xl bg-secondary text-secondary-foreground">
              <HardHat className="size-5" />
            </span>
            <span className="font-display font-bold text-lg">Clemsam Construction</span>
          </div>
          <p className="text-sm text-primary-foreground/70 leading-relaxed">
            Turning blueprints into reality. Premium construction and interior finishing across Zimbabwe.
          </p>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4 text-secondary">Quick Links</h4>
          <ul className="space-y-2.5 text-sm text-primary-foreground/75">
            <li><Link to="/" className="hover:text-secondary">Home</Link></li>
            <li><a href="/#services" className="hover:text-secondary">Services</a></li>
            <li><Link to="/projects" className="hover:text-secondary">Projects</Link></li>
            <li><a href="/#about" className="hover:text-secondary">About</a></li>
            <li><a href="/#contact" className="hover:text-secondary">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4 text-secondary">Services</h4>
          <ul className="space-y-2.5 text-sm text-primary-foreground/75">
            <li>Suspended & Drop Ceilings</li>
            <li>Kitchen Cabinets</li>
            <li>BICs & TV Cabinets</li>
            <li>Tiling & Cladding</li>
            <li>Painting Services</li>
            <li>Roofing</li>
            <li>Plumbing Services</li>
            <li>Building & Construction</li>
            <li>Project Management</li>
            <li>Property Management</li>
            <li>Landscaping & Paving</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4 text-secondary">Get in Touch</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/75">
            <li className="flex items-center gap-2"><Phone className="size-4 text-secondary" /> {PHONE_DISPLAY}</li>
            <li className="flex items-center gap-2"><Mail className="size-4 text-secondary" /> {EMAIL_INFO}</li>
            <li className="flex items-center gap-2"><MapPin className="size-4 text-secondary" /> Harare, Zimbabwe</li>
          </ul>
          <div className="flex gap-3 mt-5">
            {[
              { Icon: Facebook, href: "#", label: "Facebook" },
              { Icon: Instagram, href: "#", label: "Instagram" },
              { Icon: Twitter, href: "#", label: "Twitter" },
              { Icon: MessageCircle, href: whatsappLink("Hello Clemsam!"), label: "WhatsApp" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="grid place-items-center size-9 rounded-full bg-white/10 hover:bg-secondary transition-colors"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-6 flex flex-col items-center gap-3 text-center">
          <p className="text-xs text-primary-foreground/60">© 2026 Clemsam Construction Solutions Pvt Ltd. All rights reserved.</p>
          <p className="text-base font-semibold text-[orangered]">
            Designed By{" "}
            <a
              href="https://digitsdigital.co.zw"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity underline underline-offset-2"
            >
              Digits Digital
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
