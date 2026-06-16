import { motion } from 'framer-motion'

interface Props {
  size?: number
  /** show an open happy mouth instead of a gentle smile */
  happy?: boolean
  className?: string
}

/**
 * A tiny kawaii face: two blinking eyes, blushing cheeks, a little smile.
 * Dropped onto warungs, the cart, and empty states to make everything adorable.
 */
export default function KawaiiFace({ size = 64, happy = false, className = '' }: Props) {
  const eye = size * 0.12
  return (
    <div
      className={`pointer-events-none relative ${className}`}
      style={{ width: size, height: size * 0.6 }}
    >
      {/* eyes */}
      <span
        className="absolute rounded-full bg-night-900 animate-blink"
        style={{ width: eye, height: eye * 1.3, left: size * 0.24, top: size * 0.12 }}
      >
        <span
          className="absolute rounded-full bg-white"
          style={{ width: eye * 0.4, height: eye * 0.4, left: '15%', top: '12%' }}
        />
      </span>
      <span
        className="absolute rounded-full bg-night-900 animate-blink"
        style={{ width: eye, height: eye * 1.3, right: size * 0.24, top: size * 0.12 }}
      >
        <span
          className="absolute rounded-full bg-white"
          style={{ width: eye * 0.4, height: eye * 0.4, left: '15%', top: '12%' }}
        />
      </span>

      {/* blush */}
      <span
        className="blush absolute"
        style={{ width: size * 0.16, height: size * 0.1, left: size * 0.12, top: size * 0.26 }}
      />
      <span
        className="blush absolute"
        style={{ width: size * 0.16, height: size * 0.1, right: size * 0.12, top: size * 0.26 }}
      />

      {/* mouth */}
      <motion.span
        className="absolute left-1/2 -translate-x-1/2 border-night-900"
        style={
          happy
            ? {
                top: size * 0.3,
                width: size * 0.18,
                height: size * 0.12,
                background: '#3a1b10',
                borderRadius: '0 0 9999px 9999px',
              }
            : {
                top: size * 0.3,
                width: size * 0.22,
                height: size * 0.12,
                borderBottomWidth: 2.5,
                borderRadius: '0 0 9999px 9999px',
              }
        }
      />
    </div>
  )
}
