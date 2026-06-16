import { motion } from 'framer-motion'

/**
 * Ambient background — warm dusk gradient, drifting embers, soft light pools.
 * Used behind every spatial surface to give the street its inhabited glow.
 */
export default function Atmosphere({ intensity = 1 }: { intensity?: number }) {
  const embers = Array.from({ length: 10 })
  const sparkles = Array.from({ length: 7 })

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden grain">
      {/* base dusk wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-night-900 via-night-800 to-night-900" />

      {/* warm amber→rose halo from above (mockup bg-warm) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(120% 80% at 50% 8%, rgba(233,168,87,0.16) 0%, rgba(217,125,134,0.06) 32%, rgba(20,16,13,0) 60%)',
          opacity: intensity,
        }}
      />
      {/* warm light pooling up from the street (mockup bg-street) */}
      <div
        className="absolute inset-x-0 bottom-0 h-[46%]"
        style={{
          background:
            'radial-gradient(70% 120% at 50% 118%, rgba(233,168,87,0.22) 0%, rgba(217,125,134,0.10) 40%, rgba(20,16,13,0) 72%)',
          opacity: intensity,
        }}
      />

      {/* drifting embers — warm amber motes */}
      {embers.map((_, i) => {
        const left = (i * 37) % 100
        const delay = (i % 7) * 0.9
        const dur = 7 + (i % 5)
        const size = 2 + (i % 2)
        return (
          <motion.span
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${left}%`,
              bottom: '-10px',
              width: size,
              height: size,
              background: i % 3 === 0 ? '#d97d86' : '#e9a857',
              boxShadow: '0 0 8px currentColor',
              color: i % 3 === 0 ? '#d97d86' : '#e9a857',
              opacity: 0.7 * intensity,
            }}
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: -window.innerHeight * 0.9, opacity: [0, 0.7, 0] }}
            transition={{ duration: dur, delay, repeat: Infinity, ease: 'easeOut' }}
          />
        )
      })}

      {/* a few quiet gold sparkles */}
      {sparkles.map((_, i) => {
        const left = (i * 53 + 11) % 100
        const top = (i * 29 + 13) % 80
        const delay = (i % 5) * 0.8
        return (
          <motion.span
            key={`s-${i}`}
            className="absolute text-gold"
            style={{ left: `${left}%`, top: `${top}%`, fontSize: 9 + (i % 3) * 3, opacity: 0.5 * intensity }}
            animate={{ opacity: [0, 0.6, 0], scale: [0.7, 1.05, 0.7] }}
            transition={{ duration: 3 + (i % 3), delay, repeat: Infinity, ease: 'easeInOut' }}
          >
            ✦
          </motion.span>
        )
      })}

      {/* top vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-night-900/55 via-transparent to-night-900/75" />
    </div>
  )
}
