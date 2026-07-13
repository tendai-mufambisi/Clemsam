import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Toaster } from "@/components/ui/sonner";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

const SITE_URL = "https://clemsamconstruction.co.zw";
const OG_IMAGE = `${SITE_URL}/og.jpg`;
const LOGO_IMAGE = `${SITE_URL}/images/logo.png`;

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: "Clemsam Construction Solutions",
  alternateName: "Clemsam Construction",
  url: SITE_URL,
  image: OG_IMAGE,
  logo: LOGO_IMAGE,
  description:
    "Harare-based construction and interior finishing company specialising in suspended ceilings, kitchen cabinets, tiling, painting, roofing, plumbing, and full building construction across Zimbabwe.",
  telephone: "+263783456446",
  email: "info@clemsam.co.zw",
  foundingDate: "2020",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Harare",
    addressRegion: "Harare Province",
    addressCountry: "ZW",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "-17.8252",
    longitude: "31.0335",
  },
  areaServed: { "@type": "Country", name: "Zimbabwe" },
  priceRange: "$$",
  knowsAbout: [
    "Suspended Ceilings",
    "Kitchen Cabinets",
    "BICs and TV Cabinets",
    "Tiling and Cladding",
    "Painting Services",
    "Roofing",
    "Plumbing Services",
    "Building and Construction",
    "Project Management",
    "Property Management",
    "Landscaping and Paving",
  ],
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "robots", content: "index, follow" },
      { name: "theme-color", content: "#0a2540" },
      { title: "Clemsam Construction Solutions — Harare, Zimbabwe" },
      {
        name: "description",
        content:
          "Harare's trusted construction & interior finishing team. Suspended ceilings, kitchen cabinets, tiling, painting, roofing, plumbing & full builds across Zimbabwe. Get a free quote today.",
      },
      { name: "author", content: "Clemsam Construction Solutions Pvt Ltd" },
      { name: "geo.region", content: "ZW-HA" },
      { name: "geo.placename", content: "Harare, Zimbabwe" },
      { name: "geo.position", content: "-17.8252;31.0335" },
      { name: "ICBM", content: "-17.8252, 31.0335" },
      // Open Graph
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Clemsam Construction Solutions" },
      { property: "og:url", content: SITE_URL },
      { property: "og:title", content: "Clemsam Construction Solutions — Harare, Zimbabwe" },
      {
        property: "og:description",
        content:
          "Premium construction & interior finishing across Zimbabwe. Ceilings, kitchens, tiling, painting, roofing, plumbing & full building projects.",
      },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Clemsam Construction Solutions — Premium Building in Zimbabwe" },
      { property: "og:locale", content: "en_ZW" },
      // Twitter / X
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Clemsam Construction Solutions — Harare, Zimbabwe" },
      {
        name: "twitter:description",
        content:
          "Premium construction & interior finishing across Zimbabwe. Ceilings, kitchens, tiling, painting, roofing & more.",
      },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "canonical", href: SITE_URL },
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16.png" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32.png" },
      { rel: "icon", type: "image/png", sizes: "192x192", href: "/icon-192.png" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-ZW">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
      <FloatingWhatsApp />
      <Toaster richColors position="top-right" />
    </QueryClientProvider>
  );
}
