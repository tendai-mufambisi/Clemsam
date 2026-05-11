# Clemsam Construction Solutions — Marketing Website

Premium single-page marketing site for **Clemsam Construction Solutions Pvt Ltd**, Harare, Zimbabwe.

## Tech

- TanStack Start (React 19 + TypeScript + Vite)
- Tailwind CSS v4 with brand design tokens in `src/styles.css`
- shadcn/ui components
- framer-motion for scroll animations
- react-hook-form + zod for the contact form
- lucide-react icons

## Routes

- `/` — Home (Hero, Video, Services, Projects, Commitments, About, Testimonials, CTA, Contact)
- `/projects` — Filterable project gallery with lightbox

## Replacing placeholder content

Search the codebase for `TODO:` comments — every spot that needs real client assets is flagged.

### 1. YouTube video

Open `src/components/site/VideoShowcase.tsx`. Replace the `dQw4w9WgXcQ` ID in the iframe `src` with the real YouTube video ID once the client uploads their finished-office video.

### 2. Project images

Replace the placeholder images in `src/assets/`:

- `proj-kitchen.jpg`, `proj-ceiling.jpg`, `proj-wardrobe.jpg`, `proj-bathroom.jpg`, `proj-paving.jpg`, `proj-house.jpg`

Used in:
- `src/components/site/FeaturedProjects.tsx` (homepage 6-tile grid)
- `src/routes/projects.tsx` (full gallery — also update the `projects` array with real names/descriptions)

### 3. Team photo

Replace `src/assets/team.jpg` with the real Clemsam team group shot. Used in `src/components/site/About.tsx`.

### 4. Hero image

Replace `src/assets/hero.jpg` with a hero-quality finished-interior shot. Used in `src/components/site/Hero.tsx`.

### 5. Testimonials

Edit the `testimonials` array in `src/components/site/Testimonials.tsx` once the client supplies real quotes.

### 6. Social links

Update the `href="#"` placeholders in `src/components/site/Footer.tsx` and `src/components/site/Contact.tsx` with real Facebook, Instagram and Twitter/X URLs.

## Brand tokens

All colors live as `oklch` tokens in `src/styles.css`:

- `--primary` — Deep Navy (#0B2545)
- `--secondary` — Teal (#13A89E)
- `--accent` — Soft Gold (#C9A961)

Use `bg-primary`, `text-secondary`, etc. — never hardcode hex values in components.

## Contact form

The contact form **does not** submit to a backend. On submit it formats the input into a WhatsApp message and opens `wa.me/263783456446` in a new tab.

To change the WhatsApp number or email addresses, edit `src/lib/whatsapp.ts`.
