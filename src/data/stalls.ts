import type { Stall } from './types'

export const stalls: Stall[] = [
  {
    id: 'made',
    slug: 'warung-made',
    name: 'Warung Made',
    craft: 'coffee',
    tagline: 'Slow-roasted, hand-poured, single-origin Bali',
    blurb:
      'A four-table coffee warung where the beans are roasted over the same fire every dawn. Bli Made has poured here for twelve years.',
    open: true,
    hours: 'Open · 6am – 10pm',
    col: 0,
    row: 0,
    roofColor: '#c25e1f',
    wallColor: '#341d12',
    awning: '#e8893a',
    lantern: '#f5c761',
    artisan: {
      id: 'bli-made',
      name: 'Made Wijaya',
      honorific: 'Bli Made',
      location: 'Seminyak, Bali',
      yearsOfCraft: 12,
      portrait: '👨🏽‍🍳',
      story:
        'Bli Made learned to roast from his father, who roasted from his. He sources from a single cooperative on the slopes of Mount Batukaru and roasts in small batches before sunrise, so the whole street wakes to the smell of it.',
      voice: 'A good cup should taste like the morning it was made.',
    },
    items: [
      {
        id: 'kintamani',
        name: 'Kintamani Sunrise',
        tagline: 'Bright, citrus-forward washed arabica',
        description:
          'Grown at 1,400m on volcanic soil and intercropped with citrus trees, this lot carries a natural orange-blossom lift. Roasted light to keep its acidity singing.',
        price: 165,
        glyph: '☕',
        accent: '#f4ad5e',
        origin: 'Kintamani highlands',
        weight: '200g whole bean',
        story: [
          { id: 's1', text: 'The citrus trees beside the coffee are no accident — they share their perfume with the cherries.' },
          { id: 's2', text: 'Bli Made cups every batch at dawn before deciding the roast.' },
          { id: 's3', text: 'He still uses his father’s cast-iron drum, seasoned by thirty years of fire.' },
        ],
      },
      {
        id: 'kopi-tubruk',
        name: 'Kopi Tubruk Hitam',
        tagline: 'Bold, unfiltered, the way the street drinks it',
        description:
          'A dark, robust grind built for the traditional tubruk method — boiled, settled, sipped slow. This is the cup Made pours for regulars who sit a while.',
        price: 120,
        glyph: '☕',
        accent: '#c25e1f',
        origin: 'Robusta, East Java',
        weight: '250g ground',
        story: [
          { id: 's1', text: 'Tubruk means “to collide” — the hot water hits the grounds directly in the glass.' },
          { id: 's2', text: 'No filter, no machine. You wait for the grounds to settle, and the waiting is the point.' },
        ],
      },
      {
        id: 'luwak-reserve',
        name: 'Honest Luwak Reserve',
        tagline: 'Ethically gathered, wild-collected micro-lot',
        description:
          'Made refuses caged luwak coffee. This rare reserve is gathered from wild civets on partner farms and roasted only a few kilos at a time.',
        price: 420,
        glyph: '✨',
        accent: '#f5c761',
        origin: 'Wild-collected, Tabanan',
        weight: '100g whole bean',
        story: [
          { id: 's1', text: 'Made walked away from three suppliers before finding one that never cages a civet.' },
          { id: 's2', text: 'Only a handful of jars exist each season. When it’s gone, it’s gone.' },
        ],
      },
    ],
  },
  {
    id: 'sari',
    slug: 'warung-sari',
    name: 'Warung Sari',
    craft: 'spices',
    tagline: 'Fresh-ground spices & handwoven cloth',
    blurb:
      'Ibu Sari has run this corner for twenty-five years. Half spice stall, half textile loom, all warmth.',
    open: true,
    hours: 'Open · 7am – 9pm',
    col: 1,
    row: 0,
    roofColor: '#b5462f',
    wallColor: '#27160d',
    awning: '#d56a48',
    lantern: '#ffe3a3',
    artisan: {
      id: 'ibu-sari',
      name: 'Sari Dewi',
      honorific: 'Ibu Sari',
      location: 'Seminyak, Bali',
      yearsOfCraft: 25,
      portrait: '👩🏽‍🌾',
      story:
        'Ibu Sari grinds her bumbu spice blends fresh each morning on a worn volcanic-stone mortar. Between customers, she weaves at a backstrap loom her mother built. Nothing here is mass-made.',
      voice: 'A blend should smell like the kitchen it’s going home to.',
    },
    items: [
      {
        id: 'bumbu-bali',
        name: 'Bumbu Bali Base Genep',
        tagline: 'The complete Balinese spice paste',
        description:
          'Eleven aromatics — galangal, turmeric, kencur, shallot, candlenut and more — pounded fresh. The foundation of every Balinese dish worth eating.',
        price: 95,
        glyph: '🌶️',
        accent: '#d56a48',
        origin: 'Ground fresh daily',
        weight: '180g jar',
        story: [
          { id: 's1', text: '“Base genep” means complete blend — leave one spice out and Ibu Sari will know.' },
          { id: 's2', text: 'She pounds, never blends. The stone keeps the oils alive.' },
        ],
      },
      {
        id: 'vanilla',
        name: 'Highland Vanilla Pods',
        tagline: 'Hand-pollinated, sun-cured Balinese vanilla',
        description:
          'Each flower is pollinated by hand in a single morning window, then the pods are sweated and sun-cured for months until they turn supple and dark.',
        price: 280,
        glyph: '🌿',
        accent: '#5e9b7a',
        origin: 'Munduk highlands',
        weight: '5 pods',
        story: [
          { id: 's1', text: 'The vanilla flower opens for one morning only. Miss it, and you wait a year.' },
          { id: 's2', text: 'Curing takes months — the dark, glossy skin is the proof.' },
        ],
      },
      {
        id: 'ikat-scarf',
        name: 'Endek Ikat Scarf',
        tagline: 'Handwoven on a backstrap loom',
        description:
          'A length of endek, the resist-dyed Balinese weave. The motif is set by hand-tying the threads before dyeing — a pattern that exists only in Ibu Sari’s memory.',
        price: 340,
        glyph: '🧣',
        accent: '#b5462f',
        origin: 'Woven in-stall',
        weight: 'One length, 180cm',
        story: [
          { id: 's1', text: 'The pattern is dyed into the thread before a single row is woven.' },
          { id: 's2', text: 'A scarf this size is two weeks at the loom, between customers.' },
        ],
      },
    ],
  },
  {
    id: 'bali',
    slug: 'warung-bali',
    name: 'Warung Bali',
    craft: 'crafts',
    tagline: 'Sky-bound kites, made by hand',
    blurb:
      'Gus builds traditional Balinese kites — some small enough for a child, some the size of a boat. Six years in, his janggan kites fly at the festival.',
    open: false,
    hours: 'Closed · back at 8am',
    col: 2,
    row: 1,
    roofColor: '#3c6b54',
    wallColor: '#1c1009',
    awning: '#5e9b7a',
    lantern: '#84c2a1',
    artisan: {
      id: 'gus',
      name: 'Bagus Pratama',
      honorific: 'Gus',
      location: 'Seminyak, Bali',
      yearsOfCraft: 6,
      portrait: '🧑🏽‍🎨',
      story:
        'Gus splits and bends his own bamboo frames and stretches cloth across them by feel. His janggan kites — long-tailed, bird-headed — fly every July at the Bali Kite Festival on Padang Galak beach.',
      voice: 'A kite tells you when it’s balanced. You just have to listen.',
    },
    items: [
      {
        id: 'janggan',
        name: 'Janggan Bird Kite',
        tagline: 'Long-tailed, festival-class flyer',
        description:
          'The classic Balinese janggan: a bird-headed kite with a tail that can run ten metres. Hand-split bamboo spine, hand-painted cloth, balanced to ride a sea breeze.',
        price: 520,
        glyph: '🪁',
        accent: '#5e9b7a',
        origin: 'Built in-stall',
        weight: 'Tail up to 8m',
        story: [
          { id: 's1', text: 'The tail isn’t decoration — it’s the rudder. Gus tunes its length to the wind.' },
          { id: 's2', text: 'Janggan means the bird-spirit. It’s meant to look alive in the sky.' },
        ],
      },
      {
        id: 'mini-kite',
        name: 'Pocket Sky Kite',
        tagline: 'A small kite for a first flight',
        description:
          'A palm-sized version of the festival kites, light enough for a child and bright enough to spot against any sky. Hand-painted, no two alike.',
        price: 85,
        glyph: '🎏',
        accent: '#84c2a1',
        origin: 'Built in-stall',
        weight: '40cm wingspan',
        story: [
          { id: 's1', text: 'Gus paints each one differently — he says identical kites are boring kites.' },
        ],
      },
      {
        id: 'bamboo-bell',
        name: 'Guwang Wind Chime',
        tagline: 'Bamboo chimes tuned by ear',
        description:
          'Between kite commissions, Gus tunes bamboo tubes into a soft pentatonic chime. Hang it where the sea breeze finds it.',
        price: 130,
        glyph: '🎐',
        accent: '#3c6b54',
        origin: 'Built in-stall',
        weight: 'Five tubes',
        story: [
          { id: 's1', text: 'He tunes each tube by ear to a pentatonic scale — no two chimes sound the same.' },
        ],
      },
    ],
  },
  {
    id: 'laut',
    slug: 'warung-laut',
    name: 'Warung Laut',
    craft: 'textiles',
    tagline: 'Natural-dyed indigo & batik',
    blurb:
      'Komang dyes cloth in living indigo vats and draws batik with a copper canting pen. The blues here are grown, not printed.',
    open: true,
    hours: 'Open · 9am – 8pm',
    col: 0,
    row: 1,
    roofColor: '#3c6b54',
    wallColor: '#27160d',
    awning: '#5e9b7a',
    lantern: '#84c2a1',
    artisan: {
      id: 'komang',
      name: 'Komang Ayu',
      honorific: 'Mbak Komang',
      location: 'Seminyak, Bali',
      yearsOfCraft: 9,
      portrait: '👩🏽‍🎨',
      story:
        'Komang keeps three indigo vats alive like sourdough, feeding them weekly. She draws hot wax with a canting pen, dips, and repeats until the cloth holds a story in layers of blue.',
      voice: 'Indigo is alive. You feed it, and it gives you its blue.',
    },
    items: [
      {
        id: 'indigo-sarong',
        name: 'Living Indigo Sarong',
        tagline: 'Dipped seven times in a living vat',
        description:
          'A full sarong dyed in graduated layers of indigo — each dip a shade deeper. The depth of the blue is a record of how many times it met the vat.',
        price: 390,
        glyph: '🟦',
        accent: '#5e9b7a',
        origin: 'Dyed in-stall',
        weight: '2m length',
        story: [
          { id: 's1', text: 'The cloth comes out of the vat green, then turns blue in the air. Komang calls it the breath.' },
          { id: 's2', text: 'Seven dips, seven days. The deepest blue is the most patient one.' },
        ],
      },
      {
        id: 'batik-panel',
        name: 'Canting Batik Panel',
        tagline: 'Hand-drawn wax, framed cloth art',
        description:
          'A square of batik tulis — wax drawn entirely by hand with a canting pen, no stamps. A frangipani motif that took a full week to draw and dye.',
        price: 460,
        glyph: '🖼️',
        accent: '#84c2a1',
        origin: 'Drawn in-stall',
        weight: '50 × 50cm',
        story: [
          { id: 's1', text: 'Batik tulis means written batik — every line is drawn by hand in hot wax.' },
          { id: 's2', text: 'One slip of the canting and the whole panel starts again.' },
        ],
      },
    ],
  },
  {
    id: 'manis',
    slug: 'warung-manis',
    name: 'Warung Manis',
    craft: 'spices',
    tagline: 'Palm sugar, sambals & sweet things',
    blurb:
      'Wayan boils coconut palm nectar into amber gula and jars fierce, bright sambals. The sweetest and the hottest corner of the street.',
    open: true,
    hours: 'Open · 7am – 9pm',
    col: 1,
    row: 1,
    roofColor: '#caa23f',
    wallColor: '#341d12',
    awning: '#f5c761',
    lantern: '#ffe3a3',
    artisan: {
      id: 'wayan',
      name: 'Wayan Putra',
      honorific: 'Pak Wayan',
      location: 'Seminyak, Bali',
      yearsOfCraft: 18,
      portrait: '🧑🏽‍🌾',
      story:
        'Pak Wayan taps coconut palms at dawn and boils the nectar down all morning in a wide wok until it crystallises into gula merah. The sambals are his wife’s recipes, jarred fresh.',
      voice: 'Sweet and fierce — that’s the whole island in one tray.',
    },
    items: [
      {
        id: 'gula-merah',
        name: 'Gula Merah Palm Sugar',
        tagline: 'Coconut-palm nectar, slow-boiled to amber',
        description:
          'Fresh palm nectar reduced for hours into dense, caramel-deep blocks of gula merah. Smoky, floral, nothing like refined sugar.',
        price: 75,
        glyph: '🍯',
        accent: '#caa23f',
        origin: 'Tapped & boiled fresh',
        weight: '300g blocks',
        story: [
          { id: 's1', text: 'Wayan climbs the palms at dawn — the nectar sours by midday if it isn’t boiled.' },
          { id: 's2', text: 'Hours over the wok turn clear sap into this dark, smoky amber.' },
        ],
      },
      {
        id: 'sambal-matah',
        name: 'Sambal Matah',
        tagline: 'Raw lemongrass & chili relish',
        description:
          'The bright, uncooked Balinese sambal — sliced shallot, lemongrass, chili and a squeeze of lime, bound in coconut oil. Made in small jars so it stays fresh.',
        price: 90,
        glyph: '🌶️',
        accent: '#b5462f',
        origin: 'Jarred fresh',
        weight: '150g jar',
        story: [
          { id: 's1', text: 'Matah means raw — nothing is cooked, so every aromatic stays sharp.' },
          { id: 's2', text: 'The lemongrass has to be sliced paper-thin, or it bites back.' },
        ],
      },
    ],
  },
]

export const getStallBySlug = (slug: string): Stall | undefined =>
  stalls.find((s) => s.slug === slug)

export const getStall = (id: string): Stall | undefined =>
  stalls.find((s) => s.id === id)
