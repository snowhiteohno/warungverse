# WarungVerse · The Living Digital Street

An explorable digital street where traditional Indonesian *warung* culture meets premium spatial commerce. Built as a story-first, 2.5D isometric experience: wander a district, step into stalls, hear each maker's story, and carry their craft home.

> MVP vertical slice — implements the full happy path from the [PRD](./WarungVerse-PRD.md): **Arrival → District → Stall → Item + story → Basket → Simulated checkout → Confirmation**, plus the living-layer presence indicator.

## Stack

- **React 18 + TypeScript** (Vite)
- **Tailwind CSS** — custom warm/glassmorphic design system
- **Framer Motion** — page transitions, ambient motion, micro-interactions
- **Zustand** (with `persist`) — cart state, survives reload
- **React Router** — spatial surfaces as routes

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production bundle
npm run preview  # serve the production build
```

## The surfaces

| Route | Surface | Highlights |
|---|---|---|
| `/` | **Arrival** | Atmospheric "Enter the Street" with floating lanterns and drifting embers |
| `/street` | **District** | Drag-to-wander isometric street; 5 warungs; filter by craft; open/closed status |
| `/stall/:slug` | **Stall** | "Organic shelving" (irregular, hand-arranged), hover whispers, the maker's profile |
| *(modal)* | **Item detail** | Cycling ambient storytelling, provenance, add to basket |
| `/checkout` | **The Exchange** | Order summary + simulated payment (no card charged) |
| `/confirmation` | **Confirmation** | Ember-burst celebration, order reference |

The **living layer** (`PresenceDock`, bottom-left) shows a drifting visitor count and a simulated activity feed so the district feels inhabited.

## Design system

The signature material is warm glassmorphism over a volcanic-dusk palette (`ember`, `gold`, `spice`, `jade`, `cream` on `night`). Core tokens live in [tailwind.config.js](./tailwind.config.js); reusable surfaces (`.glass`, `.glass-strong`, `.btn-ember`, `.text-gold-gradient`, grain overlay) in [src/index.css](./src/index.css). Respects `prefers-reduced-motion`.

## Project structure

```
src/
  data/        types + seed stalls, artisans, items, stories
  store/       cart (zustand+persist), presence (street engine sim)
  components/  Warung, Atmosphere, CartDrawer, PresenceDock, TopBar, ItemDetail, Page
  pages/       Arrival, District, StallPage, Checkout, Confirmation
```

## What's simulated (per MVP scope)

- **Payments** — checkout processes a fake order and mints a reference id; no real transaction.
- **The living layer** — visitor count and activity feed are a convincing client-side simulation.
- **Artisan data** — representative makers and goods, sourced for the prototype.

## Notable next steps (from the PRD)

Real payments & fulfillment · artisan self-onboarding dashboard · additional districts & search at scale · richer real-time layer tied to actual commerce · accounts (guest → saved).
