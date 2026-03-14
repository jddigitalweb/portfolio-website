# JD Digital Web

A premium digital agency portfolio website. This is a **purely static frontend** app — no backend or server-side code.

## Tech Stack

- **React 18** + TypeScript
- **Vite** (dev server & build tool)
- **Tailwind CSS** (styling)
- **Framer Motion** (animations)
- **Wouter** (client-side routing)
- **TanStack Query** (used for contact form mutation state)
- **React Hook Form** + Zod (form validation)
- **Lucide React** (icons)
- **Shadcn/UI** (component library via Radix UI)
- **Space Grotesk** + **Inter** (typography)

## Project Structure

```
client/
  src/
    components/sections/   # All page sections (Navbar, Hero, Services, etc.)
    components/ui/          # Shadcn UI primitives
    hooks/                  # use-contact.ts, use-toast.ts
    lib/                    # queryClient.ts, utils.ts
    pages/                  # Home.tsx
    App.tsx
    index.css
  index.html
vercel.json                 # Vercel deployment config
vite.config.ts              # Vite config (root: client/, host: 0.0.0.0, port: 5000)
tailwind.config.ts
```

## Contact Form

The contact form uses `mailto:` — clicking "Send Message" opens the user's email client with the message pre-filled. No backend required.

To add real form submission, consider integrating Formspree or EmailJS.

## Development

```bash
npx vite          # Start dev server on port 5000
npx vite build    # Build to dist/
```

## Deployment (Vercel)

- **Build command:** `npx vite build`
- **Output directory:** `dist`
- **Rewrites:** All routes → `/index.html` (SPA)

Configured in `vercel.json`.

## Design

- Brand: Dark navy (`#021f53`) + orange/amber gradients (`#ff6500` → `#ff9f1c`)
- Premium glassmorphism cards with blur effects
- Smooth Framer Motion scroll reveals and hover micro-interactions
