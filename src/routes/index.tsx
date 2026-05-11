import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/site/Hero";
import { VideoShowcase } from "@/components/site/VideoShowcase";
import { Services } from "@/components/site/Services";
import { FeaturedProjects } from "@/components/site/FeaturedProjects";
import { Commitments } from "@/components/site/Commitments";
import { About } from "@/components/site/About";
import { ProjectReel } from "@/components/site/ProjectReel";
import { Testimonials } from "@/components/site/Testimonials";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Contact } from "@/components/site/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Clemsam Construction Solutions | Premium Construction & Interior Finishing in Zimbabwe" },
      { name: "description", content: "Premium ceilings, fitted kitchens, tiling, painting, and full construction services across Zimbabwe. Built with integrity, delivered on time. Based in Harare." },
      { property: "og:title", content: "Clemsam Construction Solutions — Turning Blueprints Into Reality" },
      { property: "og:description", content: "Premium construction and interior finishing across Zimbabwe. Free quote within 24 hours." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <VideoShowcase />
        <Services />
        <FeaturedProjects />
        <Commitments />
        <About />
        <ProjectReel />
        <Testimonials />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
