# WarungVerse, Product Requirements Document

| | |
|---|---|
| **Product** | WarungVerse, The Living Digital Street |
| **Owner** | Mallika Suri |
| **Status** | Draft v1.0 |
| **Last updated** | June 2026 |
| **Related docs** | Technical Architecture, Security and Access, Frontend Spec |

---

## 1. Overview

WarungVerse is an explorable digital street where traditional Indonesian *warung* culture meets premium spatial commerce. Instead of a flat product grid, each shop is a small spatial storefront that carries the artisan's story, their craft, and their goods, laid out the way a real warung is: dense, tactile, and full of character. Visitors wander a district, step into stalls, learn the story behind each maker, and buy directly.

It sits at the intersection of three things: a cultural heritage archive, a discovery experience, and a marketplace. The goal is to make buying a hand-roasted bag of Balinese coffee feel like walking into Bli Made's shop in Seminyak, not like adding an SKU to a cart.

---

## 2. Problem statement

Local artisans and family-run warungs hold deep craft and stories, but their digital presence is either nonexistent or flattened into generic Instagram shops and marketplace listings that strip away identity and context. At the same time:

- Tourists and the global Indonesian diaspora want authentic, traceable goods and the stories behind them, but cannot easily find or trust them online.
- Generic e-commerce optimizes for transaction speed, which actively erases the slow, relational texture that makes warung culture distinctive.
- There is no immersive digital record preserving how these neighborhood economies look and feel.

WarungVerse exists to give artisans a storefront that honors their craft, give buyers an authentic way to discover and purchase, and preserve the cultural texture in the process.

---

## 3. Goals and non-goals

### Goals
- Give each artisan a distinctive spatial storefront that leads with story, not just products.
- Let visitors explore a district and discover stalls through wandering, not just search.
- Preserve cultural texture through the stall's layout, ambient details, and the maker's narrative.
- Deliver a premium, tactile, story-first interface that feels considered in every interaction.
- Enable a real (or realistic) path from discovery to order.

### Non-goals (for MVP)
- An open marketplace with self-serve onboarding for thousands of vendors.
- Native mobile apps (web-first; responsive, but not native).
- Full payments, shipping, and logistics integration (simulated or lightweight at MVP).
- VR or AR experiences.
- Multiplayer or social features beyond a lightweight presence indicator.

---

## 4. Target users

**Maya, the explorer (primary).** A traveler or curious browser who wants authentic goods and the stories behind them. She values discovery and atmosphere over speed. Success for Maya is stumbling into a stall she did not know she wanted.

**Arif, the diaspora buyer.** Lives abroad, has an emotional pull toward home, and wants real Indonesian craft he can trust. He cares about provenance and the maker's story. Success is buying something that feels genuinely connected to home.

**Bli Made, the artisan (secondary, MVP read-only).** A warung owner with decades of craft and a thin digital footprint. He wants a storefront that represents him with dignity and reaches people he could never reach in person. In MVP his shop is curated and built for him; self-service comes later.

**The design and culture enthusiast.** Here for the experience itself. Not a buyer, but a sharer, and an important source of reach.

---

## 5. Core experience

The product is built around one continuous spatial journey:

1. **Arrival.** A short, atmospheric entry ("Enter the Street") sets tone and orients the visitor in Seminyak's central district.
2. **The district.** A navigable isometric street shows warungs as distinct, explorable structures. Visitors move through it and read the place at a glance: which stalls are open, what each one is about.
3. **The stall.** Stepping into a warung reveals its interior, with goods displayed on an "organic shelving" system that mimics the rhythmic, slightly haphazard density of a real warung. Hovering or tapping items triggers ambient storytelling: small moments that reveal the artisan's journey.
4. **The maker.** Each stall surfaces the artisan's profile: years of craft, location, and the story behind what they make.
5. **The exchange.** A visitor can view an item in detail and place an order or inquiry, carrying the same tactile, premium feel through to confirmation.
6. **The living layer.** A subtle real-time presence and activity indicator ("the street engine") makes the district feel inhabited rather than static.

---

## 6. Functional requirements

Priorities: **P0** = MVP must-have, **P1** = should-have, **P2** = future.

### Discovery and navigation
- P0: Explorable district view with multiple navigable warungs.
- P0: Stall entry and exit with a clear sense of place.
- P1: Search and filter by craft type (coffee, textiles, spices, crafts).
- P2: Multiple districts and the ability to travel between them.

### Stall and storefront
- P0: Stall interior view with goods on the organic shelving system.
- P0: Item detail view with image, description, price, and maker attribution.
- P0: Ambient storytelling micro-interactions on items or shelves.
- P1: "Open / closed" status per stall driven by simple availability data.

### Artisan
- P0: Artisan profile (name, location, years of craft, story) attached to each stall.
- P2: Artisan self-onboarding and a stall management dashboard.

### Commerce
- P0: Add to cart and a checkout or order/inquiry flow (payment may be simulated at MVP).
- P1: Order confirmation and a basic order record.
- P2: Real payment processing, shipping options, and logistics.

### Living layer
- P1: Lightweight real-time presence indicator (active visitors, recent activity).
- P2: Richer real-time signals tied to actual commerce events.

### Accounts
- P1: Guest browsing with optional account creation to save items or place orders.
- P2: Separate buyer and artisan account types with distinct permissions.

### System
- P0: A consistent spatial design system applied across every surface (see Frontend Spec).
- P0: Responsive behavior with a defined performance budget on mid-range devices.

---

## 7. Key user flows

**Discover to purchase (happy path).** Arrival → district → enter a stall → browse goods on the shelf → open an item → trigger its story → add to cart → checkout or order → confirmation.

**Pure exploration.** Arrival → wander multiple stalls → read maker stories → leave without buying. This must feel rewarding on its own, since discovery is the core value.

**Targeted search (P1).** Arrival → search "coffee" → filtered stalls → enter Warung Made → purchase.

---

## 8. Scope: MVP versus future

**MVP (solo-buildable).**
- One district, Seminyak Central.
- Five to ten hand-built warungs with real or representative artisan data.
- Explore, stall interior, item detail, ambient storytelling, and an order or inquiry flow (payment simulated).
- Guest browsing.
- The full signature UI and design system.
- An optional lightweight presence indicator.

**Future phases.**
- Real payments and fulfillment.
- Artisan self-onboarding and dashboard.
- Additional districts and search at scale.
- Social and richer real-time layers.
- Mobile apps.

---

## 9. UX and design principles

Detail lives in the Frontend Spec. The guiding principles:

- **Story first.** Every stall leads with the maker and the craft, not a price.
- **Tactile and premium.** Depth, soft lighting, and restrained glassmorphism create a sense of physical material. Interactions should feel responsive and considered.
- **Organic, not gridded.** Layouts echo the dense, rhythmic feel of a real warung rather than a uniform catalog.
- **Calm and low-latency.** The experience should feel inhabited and instant; nothing should feel like it is loading a database.
- **Culturally respectful.** Authentic representation, never caricature. Artisan stories and imagery are treated with care.

---

## 10. Technical considerations

Detail lives in the Technical Architecture doc. The single biggest scoping lever is rendering fidelity:

- **Option A, true 3D isometric** (for example a WebGL stack): highest visual impact, highest effort and performance risk.
- **Option B, illustrated 2.5D isometric** with rich motion and glassmorphism: lower effort, still distinctive, far safer to ship solo.

The recommendation for MVP is to prototype Option B first and reserve true 3D for a flagship stall or a later phase, so the experience ships without the performance risk swallowing the timeline. Final call belongs in the architecture doc.

Performance budget, asset pipeline, data model for stalls and artisans, and the real-time layer are all specified in the architecture doc.

---

## 11. Success metrics

- **Engagement:** average session length and number of stalls entered per visit.
- **Discovery:** items viewed and stories triggered per session.
- **Conversion:** orders or inquiries placed per visit.
- **Reach:** shares and return visits.
- **Qualitative:** does it feel authentic and premium, from both visitors and artisans.

---

## 12. Assumptions, constraints, and risks

**Assumptions.** Web-first is acceptable for the audience. Representative artisan content can be sourced or created for MVP. There is appetite for story-led commerce over pure transaction speed.

**Constraints.** Solo build with a limited timeline. 3D or heavy motion must stay within a performance budget for mid-range devices. Cultural content must be handled sensitively.

**Risks.**
- *Performance:* an over-ambitious 3D scope could blow the timeline. Mitigation: start 2.5D.
- *Scope creep:* the world is infinitely expandable. Mitigation: hard MVP boundary of one district.
- *Authenticity:* representing a living culture carelessly. Mitigation: real stories, respectful framing, real makers where possible.
- *Monetization clarity:* the business model is unproven. Acceptable for MVP; revisit post-launch.

---

## 13. Open questions

- Is the MVP order flow a real transaction or an inquiry/lead to the artisan?
- True 3D or 2.5D for the first release? (Leaning 2.5D.)
- Are the seed artisans real partners or representative personas for the prototype?
- Does the living layer use real presence data or a convincing simulation at MVP?

---

## 14. Appendix: seed stalls

| Stall | Craft | Maker | Detail |
|---|---|---|---|
| Warung Made | Artisan coffee, slow brews | Bli Made | 12 years of craft |
| Warung Sari | Fresh spices, textiles | Ibu Sari | 25 years of craft |
| Warung Bali | Handmade kites | Gus | 6 years of craft |

Additional stalls to be defined during MVP content build.
