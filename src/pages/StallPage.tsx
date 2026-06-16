import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Page from '../components/Page'
import TopBar from '../components/TopBar'
import ItemDetail from '../components/ItemDetail'
import { getStallBySlug } from '../data/stalls'
import { craftLabels, type Item } from '../data/types'
import { formatIDR } from '../store/cart'

// Organic shelving: each item gets a slightly irregular size, offset and tilt
// so the shelf reads dense and hand-arranged rather than gridded.
const shelfStyle = (i: number) => {
  const sizes = ['h-44', 'h-52', 'h-40', 'h-48']
  const tilts = [-1.5, 1, -0.5, 2, -2]
  const offsets = ['mt-0', 'mt-8', 'mt-3', 'mt-10', 'mt-5']
  return {
    size: sizes[i % sizes.length],
    tilt: tilts[i % tilts.length],
    offset: offsets[i % offsets.length],
  }
}

export default function StallPage() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const stall = slug ? getStallBySlug(slug) : undefined
  const [active, setActive] = useState<Item | null>(null)
  const [hovered, setHovered] = useState<string | null>(null)

  if (!stall) {
    return (
      <Page>
        <div className="flex min-h-screen flex-col items-center justify-center gap-4">
          <p className="text-cream/70">This stall has wandered off.</p>
          <button onClick={() => navigate('/street')} className="btn-ghost px-6 py-2">
            Back to the street
          </button>
        </div>
      </Page>
    )
  }

  const a = stall.artisan

  return (
    <Page intensity={0.8}>
      <TopBar backTo="/street" backLabel="The street" />

      <div className="mx-auto max-w-6xl px-5 pb-28 pt-28 sm:px-8">
        {/* stall header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex flex-wrap items-center gap-3">
            <span
              className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold ${
                stall.open ? 'bg-jade/20 text-jade-light' : 'bg-night-600 text-cream/50'
              }`}
            >
              <span className={`h-1.5 w-1.5 rounded-full ${stall.open ? 'bg-jade-light animate-pulse' : 'bg-cream/40'}`} />
              {stall.hours}
            </span>
            <span className="rounded-full bg-cream/5 px-3 py-1 text-[11px] uppercase tracking-wider text-cream/60">
              {craftLabels[stall.craft]}
            </span>
          </div>
          <h1 className="mt-3 font-display text-5xl text-cream sm:text-6xl">{stall.name}</h1>
          <p className="mt-2 max-w-2xl text-balance text-lg text-cream/65">{stall.tagline}</p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
          {/* ORGANIC SHELVING */}
          <div>
            <p className="mb-4 text-[11px] uppercase tracking-[0.3em] text-bubble-light/90">
              the goodies — hover for a little story ♡
            </p>
            <div className="flex flex-wrap items-start gap-5">
              {stall.items.map((item, i) => {
                const sh = shelfStyle(i)
                const beat = item.story[0]
                return (
                  <motion.button
                    key={item.id}
                    onClick={() => setActive(item)}
                    onHoverStart={() => setHovered(item.id)}
                    onHoverEnd={() => setHovered((h) => (h === item.id ? null : h))}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 + i * 0.08, type: 'spring', stiffness: 120, damping: 16 }}
                    whileHover={{ y: -14, scale: 1.06, rotate: [sh.tilt, sh.tilt - 3, sh.tilt + 3, sh.tilt], zIndex: 20, transition: { rotate: { repeat: Infinity, duration: 0.8 } } }}
                    whileTap={{ scale: 0.94 }}
                    className={`glass group relative ${sh.size} ${sh.offset} flex w-[170px] flex-col items-center justify-end overflow-visible rounded-[2rem] p-4 text-center`}
                    style={{ rotate: `${sh.tilt}deg` }}
                  >
                    {/* glow base */}
                    <div
                      className="absolute inset-x-6 bottom-4 h-6 rounded-[50%] blur-lg transition-opacity group-hover:opacity-100"
                      style={{ background: item.accent, opacity: 0.4 }}
                    />
                    {/* the good */}
                    <motion.span
                      className="relative z-10 mb-auto mt-2 text-6xl"
                      style={{ filter: `drop-shadow(0 8px 16px ${item.accent}88)` }}
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut', delay: i * 0.35 }}
                    >
                      {item.glyph}
                    </motion.span>
                    <p className="relative z-10 mt-2 text-sm font-medium leading-tight text-cream">
                      {item.name}
                    </p>
                    <p className="relative z-10 mt-1 text-xs font-semibold text-gold">
                      {formatIDR(item.price)}
                    </p>

                    {/* ambient story whisper on hover */}
                    {hovered === item.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        className="absolute -top-3 left-1/2 z-30 w-48 -translate-x-1/2 -translate-y-full rounded-3xl bg-night-900/95 p-3 text-[11px] italic leading-snug text-cream/90 shadow-lift ring-2 ring-bubble/40"
                      >
                        ♡ {beat.text}
                        <span className="absolute -bottom-1 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 bg-night-900/95" />
                      </motion.div>
                    )}
                  </motion.button>
                )
              })}
            </div>

            {!stall.open && (
              <p className="mt-8 rounded-2xl bg-night-800/60 p-4 text-sm text-cream/55">
                {a.honorific} is away from the stall right now — but you can still browse the craft and add to your basket.
              </p>
            )}
          </div>

          {/* THE MAKER */}
          <motion.aside
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-strong h-fit rounded-3xl p-6 lg:sticky lg:top-28"
          >
            <p className="text-[11px] uppercase tracking-[0.3em] text-bubble-light/90">meet the maker ♡</p>
            <div className="mt-4 flex items-center gap-4">
              <div
                className="flex h-16 w-16 items-center justify-center rounded-2xl text-4xl"
                style={{ background: '#1c1009', boxShadow: `inset 0 0 24px ${stall.lantern}44` }}
              >
                {a.portrait}
              </div>
              <div>
                <p className="font-display text-xl text-cream">{a.honorific}</p>
                <p className="text-xs text-cream/55">{a.name}</p>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3 text-center">
              <div className="rounded-xl bg-cream/5 p-3">
                <p className="font-display text-2xl text-gold">{a.yearsOfCraft}</p>
                <p className="text-[10px] uppercase tracking-wider text-cream/50">Years of craft</p>
              </div>
              <div className="rounded-xl bg-cream/5 p-3">
                <p className="font-display text-2xl text-gold">{stall.items.length}</p>
                <p className="text-[10px] uppercase tracking-wider text-cream/50">Goods on shelf</p>
              </div>
            </div>

            <p className="mt-3 flex items-center gap-1.5 text-xs text-cream/55">
              📍 {a.location}
            </p>

            <div className="rule my-5" />

            <p className="text-sm leading-relaxed text-cream/75">{a.story}</p>

            <blockquote className="mt-5 border-l-2 border-gold/50 pl-4 font-display text-base italic leading-snug text-gold-gradient">
              “{a.voice}”
            </blockquote>
          </motion.aside>
        </div>
      </div>

      <ItemDetail item={active} stall={stall} onClose={() => setActive(null)} />
    </Page>
  )
}
