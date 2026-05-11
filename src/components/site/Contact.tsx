import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Phone, Mail, MapPin, Globe, Clock, Facebook, Instagram, Twitter, MessageCircle, Send } from "lucide-react";
import { toast } from "sonner";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import {
  EMAIL_INFO, EMAIL_SALES, PHONE_DISPLAY, openWhatsapp, whatsappLink,
} from "@/lib/whatsapp";

const services = [
  "Suspended Ceilings",
  "Fitted Kitchens & BICs",
  "Tiling & Cladding",
  "Painting & Finishes",
  "Building Construction",
  "Civil Engineering",
  "Paving",
  "Other",
];

const schema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(80),
  email: z.string().trim().email("Invalid email").max(120),
  phone: z.string().trim().min(7, "Phone is too short").max(30),
  service: z.string().min(1, "Please choose a service"),
  message: z.string().trim().min(10, "Tell us a little more").max(1000),
});

type FormValues = z.infer<typeof schema>;

export function Contact() {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", phone: "", service: "", message: "" },
  });

  const onSubmit = (v: FormValues) => {
    const msg =
      `Hello Clemsam — new enquiry from your website:\n\n` +
      `Name: ${v.name}\nEmail: ${v.email}\nPhone: ${v.phone}\n` +
      `Service: ${v.service}\n\nMessage:\n${v.message}`;
    toast.success("Opening WhatsApp...");
    openWhatsapp(msg);
    form.reset();
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Get in Touch"
          title="Let's talk about your project."
          sub="Send us a message and we'll respond — usually within a few hours during business days."
        />

        <div className="grid gap-12 lg:grid-cols-5">
          <Reveal className="lg:col-span-2 space-y-8">
            <div className="p-8 rounded-3xl bg-primary text-primary-foreground">
              <h3 className="font-display font-semibold text-xl mb-6">Contact Information</h3>
              <ul className="space-y-5 text-[15px]">
                <li className="flex items-start gap-3">
                  <Phone className="size-5 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <div className="text-primary-foreground/60 text-xs uppercase tracking-wider mb-0.5">Phone / WhatsApp</div>
                    <a href={whatsappLink("Hello Clemsam!")} className="hover:text-secondary">{PHONE_DISPLAY}</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="size-5 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <div className="text-primary-foreground/60 text-xs uppercase tracking-wider mb-0.5">Email</div>
                    <a href={`mailto:${EMAIL_INFO}`} className="block hover:text-secondary">{EMAIL_INFO}</a>
                    <a href={`mailto:${EMAIL_SALES}`} className="block hover:text-secondary">{EMAIL_SALES}</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="size-5 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <div className="text-primary-foreground/60 text-xs uppercase tracking-wider mb-0.5">Location</div>
                    Harare, Zimbabwe
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Globe className="size-5 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <div className="text-primary-foreground/60 text-xs uppercase tracking-wider mb-0.5">Website</div>
                    clemsam.co.zw
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="size-5 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <div className="text-primary-foreground/60 text-xs uppercase tracking-wider mb-0.5">Hours</div>
                    Mon–Fri 8am–5pm<br />Sat 8am–1pm
                  </div>
                </li>
              </ul>

              <div className="flex gap-3 mt-8 pt-6 border-t border-white/10">
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
                    className="grid place-items-center size-10 rounded-full bg-white/10 hover:bg-secondary transition-colors"
                  >
                    <Icon className="size-4" />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="p-8 rounded-3xl bg-card border border-border space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <Label htmlFor="name" className="mb-2">Full Name</Label>
                  <Input id="name" placeholder="Jane Moyo" {...form.register("name")} />
                  {form.formState.errors.name && <p className="text-xs text-destructive mt-1.5">{form.formState.errors.name.message}</p>}
                </div>
                <div>
                  <Label htmlFor="email" className="mb-2">Email</Label>
                  <Input id="email" type="email" placeholder="you@example.com" {...form.register("email")} />
                  {form.formState.errors.email && <p className="text-xs text-destructive mt-1.5">{form.formState.errors.email.message}</p>}
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <Label htmlFor="phone" className="mb-2">Phone</Label>
                  <Input id="phone" placeholder="+263 ..." {...form.register("phone")} />
                  {form.formState.errors.phone && <p className="text-xs text-destructive mt-1.5">{form.formState.errors.phone.message}</p>}
                </div>
                <div>
                  <Label className="mb-2">Service Interested In</Label>
                  <Select onValueChange={(v) => form.setValue("service", v, { shouldValidate: true })}>
                    <SelectTrigger><SelectValue placeholder="Choose a service" /></SelectTrigger>
                    <SelectContent>
                      {services.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                    </SelectContent>
                  </Select>
                  {form.formState.errors.service && <p className="text-xs text-destructive mt-1.5">{form.formState.errors.service.message}</p>}
                </div>
              </div>
              <div>
                <Label htmlFor="message" className="mb-2">Message</Label>
                <Textarea id="message" rows={5} placeholder="Tell us about your project, location, and timeline..." {...form.register("message")} />
                {form.formState.errors.message && <p className="text-xs text-destructive mt-1.5">{form.formState.errors.message.message}</p>}
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full rounded-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold h-12 shadow-[0_15px_40px_-12px_oklch(0.66_0.12_185_/_0.6)]"
              >
                <Send className="size-4 mr-2" />
                Send via WhatsApp
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                Your message will open in WhatsApp pre-filled — just hit send.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
