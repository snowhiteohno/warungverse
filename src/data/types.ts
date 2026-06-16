export type Craft = 'coffee' | 'spices' | 'textiles' | 'crafts'

export interface Artisan {
  id: string
  name: string
  honorific: string
  location: string
  yearsOfCraft: number
  portrait: string // emoji/illustration glyph used in the 2.5D scene
  story: string
  voice: string // a short first-person line
}

export interface StoryBeat {
  id: string
  // a short ambient line revealed on hover/tap
  text: string
}

export interface Item {
  id: string
  name: string
  tagline: string
  description: string
  price: number // in IDR thousands for readability; displayed formatted
  glyph: string // illustrative glyph for the shelf
  accent: string // tailwind-ish hex used for the item's glow
  story: StoryBeat[]
  origin: string
  weight: string
}

export interface Stall {
  id: string
  slug: string
  name: string
  craft: Craft
  tagline: string
  blurb: string
  open: boolean
  hours: string
  // position on the isometric street grid
  col: number
  row: number
  // visual identity
  roofColor: string
  wallColor: string
  awning: string
  lantern: string
  artisan: Artisan
  items: Item[]
}

export const craftLabels: Record<Craft, string> = {
  coffee: 'Coffee & slow brews',
  spices: 'Spices & aromatics',
  textiles: 'Textiles & weaving',
  crafts: 'Handmade crafts',
}

export const craftGlyph: Record<Craft, string> = {
  coffee: '☕',
  spices: '🌶️',
  textiles: '🧵',
  crafts: '🪁',
}
