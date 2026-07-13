import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/site/Hero";
import { VideoShowcase } from "@/components/site/VideoShowcase";
import { Services } from "@/components/site/Services";
import { FeaturedProjects } from "@/components/site/FeaturedProjects";
import { Commitments } from "@/components/site/Commitments";
import { About } from "@/components/site/About";
import { CEO } from "@/components/site/CEO";
// import { Team } from "@/components/site/Team";
import { CompanyProfile } from "@/components/site/CompanyProfile";
import { ProjectReel } from "@/components/site/ProjectReel";
import { Testimonials } from "@/components/site/Testimonials";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Contact } from "@/components/site/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Clemsam Construction Solutions | Ceilings, Kitchens, Tiling & Building — Harare, Zimbabwe" },
      {
        name: "description",
        content:
          "Clemsam Construction Solutions — Harare's trusted builders. Suspended ceilings, kitchen cabinets, tiling & cladding, painting, roofing, plumbing, and full building construction across Zimbabwe. Free quote within 24 hours.",
      },
      { property: "og:title", content: "Clemsam Construction Solutions | Ceilings, Kitchens, Tiling & Building — Harare, Zimbabwe" },
      {
        property: "og:description",
        content:
          "Harare's trusted construction & interior finishing company. Suspended ceilings, kitchen cabinets, tiling, painting, roofing, plumbing & full builds across Zimbabwe.",
      },
      { property: "og:url", content: "https://clemsamconstruction.co.zw/" },
      { property: "og:image", content: "https://clemsamconstruction.co.zw/og.jpg" },
    ],
    links: [
      { rel: "canonical", href: "https://clemsamconstruction.co.zw/" },
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
        <CEO />
        {/* <Team /> */}
        <CompanyProfile />
        <ProjectReel />
        <Testimonials />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
