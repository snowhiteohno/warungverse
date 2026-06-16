import { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import Page from '../components/Page'
import TopBar from '../components/TopBar'
import Warung from '../components/Warung'
import { stalls } from '../data/stalls'
import { craftLabels, type Craft, type Stall } from '../data/types'

const TILE_W = 250
const TILE_H = 130

// screen-space isometric projection
const iso = (col: number, row: number) => ({
  x: (col - row) * (TILE_W / 2),
  y: (col + row) * (TILE_H / 2),
})

const crafts: (Craft | 'all')[] = ['all', 'coffee', 'spices', 'textiles', 'crafts']

export default function District() {
  const navigate = useNavigate()
  const [filter, setFilter] = useState<Craft | 'all'>('all')

  const enter = (stall: Stall) => navigate(`/stall/${stall.slug}`)

  // bounds for centering the scene
  const cols = Math.max(...stalls.map((s) => s.col))
  const rows = Math.max(...stalls.map((s) => s.row))

  return (
    <Page intensity={0.9}>
      <TopBar />

      {/* heading */}
      <div className="pointer-events-none fixed left-1/2 top-20 z-20 -translate-x-1/2 text-center">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[11px] uppercase tracking-[0.4em] text-bubble-light/90"
        >
          ♡ the district ♡
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-display text-3xl text-cream sm:text-4xl"
        >
          Seminyak Central
        </motion.h1>
        <p className="mt-1 text-xs text-cream/50">drag to wander · tap a warung to pop in ♡</p>
      </div>

      {/* filter chips */}
      <div className="fixed bottom-6 left-1/2 z-30 flex -translate-x-1/2 flex-wrap justify-center gap-2 px-4">
        {crafts.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`rounded-full px-4 py-2 text-xs font-medium capitalize backdrop-blur transition ${
              filter === c
                ? 'bg-ember text-night-900 shadow-glow'
                : 'glass text-cream/70 hover:text-cream'
            }`}
          >
            {c === 'all' ? 'All crafts' : craftLabels[c].split(' ')[0]}
          </button>
        ))}
      </div>

      {/* draggable isometric scene */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <motion.div
          className="relative cursor-grab active:cursor-grabbing"
          drag
          dragConstraints={{ left: -260, right: 260, top: -180, bottom: 180 }}
          dragElastic={0.12}
          whileTap={{ cursor: 'grabbing' }}
          style={{ width: 1, height: 1 }}
        >
          {/* ground plane — isometric tiles */}
          <div
            className="absolute"
            style={{
              left: -(cols + rows + 2) * (TILE_W / 2) * 0.5,
              top: -60,
              transform: `translate(-50%, -50%)`,
            }}
          >
            {stalls.map((s) => {
              const { x, y } = iso(s.col, s.row)
              return (
                <div
                  key={`tile-${s.id}`}
                  className="absolute"
                  style={{
                    left: x,
                    top: y + 150,
                    width: TILE_W,
                    height: TILE_H,
                    transform: 'translate(-50%, -50%)',
                    background:
                      'linear-gradient(135deg, rgba(94,155,122,0.10), rgba(40,25,15,0.10))',
                    clipPath: 'polygon(50% 0, 100% 50%, 50% 100%, 0 50%)',
                    border: '1px solid rgba(245,199,97,0.07)',
                  }}
                />
              )
            })}
          </div>

          {/* warungs, z-sorted by depth */}
          <div
            className="absolute"
            style={{ transform: 'translate(-50%, -50%)' }}
          >
            {[...stalls]
              .sort((a, b) => a.col + a.row - (b.col + b.row))
              .map((s, i) => {
                const { x, y } = iso(s.col, s.row)
                const dim = filter !== 'all' && s.craft !== filter
                return (
                  <div
                    key={s.id}
                    className="absolute transition-all duration-500"
                    style={{
                      left: x,
                      top: y,
                      zIndex: 100 + (s.col + s.row),
                      transform: 'translate(-50%, -100%)',
                      opacity: dim ? 0.28 : 1,
                      filter: dim ? 'grayscale(0.6)' : 'none',
                      pointerEvents: dim ? 'none' : 'auto',
                    }}
                  >
                    <Warung stall={s} onEnter={enter} delay={0.1 * i} />
                  </div>
                )
              })}
          </div>
        </motion.div>
      </div>
    </Page>
  )
}
