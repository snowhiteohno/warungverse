import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useStreetEngine } from '../store/presence'

const kindGlyph = { enter: '🚶', view: '👀', order: '🛍️', story: '✨' } as const

/**
 * The living layer — a floating dock that shows the district is inhabited:
 * a drifting visitor count and a feed of recent activity (simulated).
 */
export default function PresenceDock() {
  const { visitors, feed } = useStreetEngine()
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="fixed bottom-5 left-5 z-40 select-none">
      <motion.button
        layout
        onClick={() => setExpanded((e) => !e)}
        className="glass-strong flex items-center gap-3 rounded-2xl px-4 py-3 text-left transition hover:border-gold/40"
        whileTap={{ scale: 0.97 }}
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-jade-light opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-jade-light" />
        </span>
        <div className="leading-tight">
          <p className="text-sm font-semibold text-cream">
            <motion.span key={visitors} className="tabular-nums text-bubble-light">
              {visitors}
            </motion.span>{' '}
            cuties wandering ♡
          </p>
          <p className="text-[10px] uppercase tracking-widest text-cream/45">
            the street is buzzing · {expanded ? 'hide' : 'tap to peek'}
          </p>
        </div>
      </motion.button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, y: 10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: 10, height: 0 }}
            className="glass mt-2 w-72 overflow-hidden rounded-2xl p-3"
          >
            <p className="mb-2 px-1 text-[10px] uppercase tracking-widest text-bubble-light/90">
              happening now ✿
            </p>
            <ul className="space-y-1.5">
              <AnimatePresence initial={false}>
                {feed.map((ev) => (
                  <motion.li
                    key={ev.id}
                    layout
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 rounded-lg bg-night-900/50 px-2 py-1.5 text-xs text-cream/75"
                  >
                    <span>{kindGlyph[ev.kind]}</span>
                    <span className="truncate">{ev.text}</span>
                  </motion.li>
                ))}
              </AnimatePresence>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
