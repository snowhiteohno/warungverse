import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import type { Item, Stall } from '../data/types'
import { useCart, formatIDR } from '../store/cart'

interface Props {
  item: Item | null
  stall: Stall
  onClose: () => void
}

export default function ItemDetail({ item, stall, onClose }: Props) {
  const add = useCart((s) => s.add)
  const [beat, setBeat] = useState(0)
  const [added, setAdded] = useState(false)

  // cycle through the ambient story beats
  useEffect(() => {
    if (!item) return
    setBeat(0)
    setAdded(false)
    const t = setInterval(() => {
      setBeat((b) => (b + 1) % item.story.length)
    }, 3800)
    return () => clearInterval(t)
  }, [item])

  return (
    <AnimatePresence>
      {item && (
        <>
          <motion.div
            className="fixed inset-0 z-50 bg-night-900/75 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
            <motion.div
              className="glass-strong relative grid max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-3xl md:grid-cols-[1.1fr_1fr]"
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 220, damping: 26 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={onClose}
                className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-night-900/60 text-cream/70 transition hover:bg-night-900 hover:text-cream"
                aria-label="Close"
              >
                ✕
              </button>

              {/* visual / story side */}
              <div
                className="relative flex min-h-[260px] flex-col items-center justify-center overflow-hidden p-8"
                style={{
                  background: `radial-gradient(circle at 50% 40%, ${item.accent}33, transparent 70%)`,
                }}
              >
                <motion.div
                  className="text-[7rem] leading-none"
                  animate={{ y: [0, -10, 0], rotate: [0, -2, 2, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  style={{ filter: `drop-shadow(0 12px 30px ${item.accent}88)` }}
                >
                  {item.glyph}
                </motion.div>

                {/* ambient storytelling */}
                <div className="absolute inset-x-6 bottom-6">
                  <p className="mb-1 text-[10px] uppercase tracking-[0.3em] text-bubble-light/90">
                    ♡ their little story
                  </p>
                  <div className="relative h-16">
                    <AnimatePresence mode="wait">
                      <motion.p
                        key={beat}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.6 }}
                        className="text-sm italic leading-snug text-cream/85"
                      >
                        “{item.story[beat].text}”
                      </motion.p>
                    </AnimatePresence>
                  </div>
                  <div className="mt-1 flex gap-1.5">
                    {item.story.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setBeat(i)}
                        className={`h-1 rounded-full transition-all ${
                          i === beat ? 'w-6 bg-gold' : 'w-2 bg-cream/25'
                        }`}
                        aria-label={`Story beat ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* detail side */}
              <div className="flex flex-col overflow-y-auto p-7">
                <p className="text-[11px] uppercase tracking-[0.25em] text-gold/70">
                  {stall.name} · {stall.artisan.honorific}
                </p>
                <h2 className="mt-1 font-display text-3xl leading-tight text-cream">{item.name}</h2>
                <p className="mt-1 text-sm italic text-cream/60">{item.tagline}</p>

                <p className="mt-4 text-sm leading-relaxed text-cream/75">{item.description}</p>

                <dl className="mt-5 grid grid-cols-2 gap-3 text-xs">
                  <div className="glass rounded-xl p-3">
                    <dt className="text-cream/45">Origin</dt>
                    <dd className="mt-0.5 text-cream">{item.origin}</dd>
                  </div>
                  <div className="glass rounded-xl p-3">
                    <dt className="text-cream/45">Detail</dt>
                    <dd className="mt-0.5 text-cream">{item.weight}</dd>
                  </div>
                </dl>

                <div className="mt-auto pt-6">
                  <div className="mb-3 flex items-end justify-between">
                    <span className="text-xs text-cream/50">Price</span>
                    <span className="font-display text-3xl text-gold-gradient">
                      {formatIDR(item.price)}
                    </span>
                  </div>
                  <div className="relative">
                    {/* heart pop on add */}
                    <AnimatePresence>
                      {added &&
                        Array.from({ length: 6 }).map((_, i) => (
                          <motion.span
                            key={i}
                            className="pointer-events-none absolute left-1/2 top-1/2 text-lg"
                            initial={{ opacity: 1, x: 0, y: 0, scale: 0.5 }}
                            animate={{
                              opacity: 0,
                              x: (i - 2.5) * 34,
                              y: -60 - (i % 3) * 18,
                              scale: 1.2,
                            }}
                            transition={{ duration: 1, ease: 'easeOut' }}
                          >
                            {['♡', '✿', '✦'][i % 3]}
                          </motion.span>
                        ))}
                    </AnimatePresence>
                    <motion.button
                      onClick={() => {
                        add(item, stall)
                        setAdded(true)
                      }}
                      className="btn-ember w-full py-3.5 text-sm uppercase tracking-widest"
                      whileTap={{ scale: 0.95 }}
                      animate={added ? { scale: [1, 1.06, 1] } : {}}
                    >
                      {added ? 'yay! it’s yours ♡' : 'add to my basket ♡'}
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
