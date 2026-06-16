import { motion } from 'framer-motion'
import type { Stall } from '../data/types'
import { craftGlyph } from '../data/types'
import KawaiiFace from './KawaiiFace'

interface Props {
  stall: Stall
  onEnter: (stall: Stall) => void
  delay?: number
}

/**
 * A single explorable warung rendered as an illustrated faux-3D box.
 * Built from layered faces (front, side, roof) + awning + lantern + doorway glow.
 * Position on the isometric street is handled by the parent (District).
 */
export default function Warung({ stall, onEnter, delay = 0 }: Props) {
  const shade = (hex: string, amt: number) => {
    // darken/lighten a hex by amt (-100..100) for the side/roof faces
    const n = parseInt(hex.slice(1), 16)
    let r = (n >> 16) + amt
    let g = ((n >> 8) & 0xff) + amt
    let b = (n & 0xff) + amt
    r = Math.max(0, Math.min(255, r))
    g = Math.max(0, Math.min(255, g))
    b = Math.max(0, Math.min(255, b))
    return `rgb(${r},${g},${b})`
  }

  return (
    <motion.button
      type="button"
      onClick={() => onEnter(stall)}
      className="group relative block w-[210px] cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-2xl"
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, type: 'spring', stiffness: 120, damping: 16 }}
      whileHover={{ y: -12, scale: 1.03 }}
      whileTap={{ scale: 0.98, y: -4 }}
      aria-label={`Enter ${stall.name}`}
    >
      {/* ground shadow */}
      <div
        className="absolute left-1/2 top-[88%] h-10 w-[80%] -translate-x-1/2 rounded-[50%] bg-black/55 blur-xl transition-all duration-300 group-hover:w-[70%] group-hover:bg-black/40"
      />

      {/* lantern hanging from the awning */}
      <div className="pointer-events-none absolute -top-2 right-5 z-30 flex flex-col items-center">
        <div className="h-5 w-px bg-cream/30" />
        <div
          className="h-5 w-4 rounded-full animate-flicker"
          style={{
            background: `radial-gradient(circle at 50% 35%, ${stall.lantern}, ${shade(
              stall.lantern,
              -60,
            )})`,
            boxShadow: stall.open
              ? `0 0 22px 4px ${stall.lantern}aa, 0 0 8px 1px ${stall.lantern}`
              : 'none',
            opacity: stall.open ? 1 : 0.4,
          }}
        />
      </div>

      {/* ROOF */}
      <div className="relative z-20 mx-auto" style={{ perspective: 600 }}>
        <div
          className="mx-auto h-0 w-0"
          style={{
            borderLeft: '105px solid transparent',
            borderRight: '105px solid transparent',
            borderBottom: `34px solid ${shade(stall.roofColor, 28)}`,
            filter: 'drop-shadow(0 -2px 0 rgba(255,255,255,0.12))',
          }}
        />
      </div>

      {/* AWNING — striped, scalloped edge */}
      <div className="relative z-20 -mt-px">
        <div
          className="mx-auto h-7 w-[200px] rounded-t-xl"
          style={{
            backgroundImage: `repeating-linear-gradient(90deg, ${stall.awning} 0 16px, #f6ecd9 16px 32px)`,
            backgroundColor: stall.awning,
            boxShadow: 'inset 0 6px 10px rgba(0,0,0,0.25)',
          }}
        />
        {/* scallop */}
        <div className="mx-auto flex w-[200px] justify-between px-0">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="h-2.5 w-[16px]"
              style={{
                background: i % 2 === 0 ? stall.awning : '#f6ecd9',
                clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
              }}
            />
          ))}
        </div>
      </div>

      {/* BODY — front + right side faces for depth */}
      <div className="relative z-10 mx-auto flex w-[200px] justify-center">
        {/* front face */}
        <div
          className="relative h-[150px] w-[170px] overflow-hidden rounded-b-[1.75rem]"
          style={{
            background: `linear-gradient(160deg, ${shade(stall.wallColor, 22)}, ${stall.wallColor})`,
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)',
          }}
        >
          {/* warm interior glow through the doorway */}
          <div
            className="absolute bottom-0 left-1/2 h-[96px] w-[78px] -translate-x-1/2 rounded-t-[40px]"
            style={{
              background: stall.open
                ? 'linear-gradient(to top, rgba(245,199,97,0.95), rgba(232,137,58,0.5) 60%, transparent)'
                : 'linear-gradient(to top, rgba(40,25,15,0.9), transparent)',
              boxShadow: stall.open
                ? `0 0 30px 6px ${stall.lantern}55`
                : 'none',
            }}
          />
          {/* doorway frame */}
          <div
            className="absolute bottom-0 left-1/2 h-[96px] w-[78px] -translate-x-1/2 rounded-t-[40px] border-x-2 border-t-2"
            style={{ borderColor: shade(stall.wallColor, 40) }}
          />
          {/* a shelf hint (organic dots) inside */}
          {stall.open && (
            <div className="absolute bottom-[70px] left-1/2 flex -translate-x-1/2 gap-1.5">
              {stall.items.slice(0, 3).map((it) => (
                <span
                  key={it.id}
                  className="text-[10px] opacity-80"
                  style={{ filter: `drop-shadow(0 0 4px ${it.accent})` }}
                >
                  {it.glyph}
                </span>
              ))}
            </div>
          )}
          {/* craft emblem plate */}
          <div className="absolute left-1/2 top-2.5 -translate-x-1/2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-night-900/70 text-lg shadow-inner ring-1 ring-cream/15">
              {craftGlyph[stall.craft]}
            </div>
          </div>

          {/* kawaii face — the warung is happy you came! */}
          <div className="absolute left-1/2 top-[42px] -translate-x-1/2 transition-transform duration-300 group-hover:scale-110">
            <KawaiiFace size={58} happy />
          </div>
        </div>

        {/* right side face (depth) */}
        <div
          className="h-[150px] w-[26px] origin-left skew-y-[-30deg] rounded-br-md"
          style={{ background: `linear-gradient(160deg, ${shade(stall.wallColor, -28)}, ${shade(stall.wallColor, -44)})` }}
        />
      </div>

      {/* NAME PLATE */}
      <motion.div
        className="relative z-30 mx-auto -mt-2 w-[180px]"
        whileHover={{ scale: 1.02 }}
      >
        <div className="glass-strong flex items-center justify-between gap-2 rounded-xl px-3 py-2">
          <div className="min-w-0 text-left">
            <p className="truncate font-display text-sm leading-tight text-cream">
              {stall.name}
            </p>
            <p className="truncate text-[10px] text-cream/55">{stall.artisan.honorific}</p>
          </div>
          <span
            className={`flex shrink-0 items-center gap-1 rounded-full px-1.5 py-0.5 text-[9px] font-semibold ${
              stall.open ? 'bg-jade/20 text-jade-light' : 'bg-night-600 text-cream/40'
            }`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${stall.open ? 'bg-jade-light animate-pulse' : 'bg-cream/30'}`}
            />
            {stall.open ? 'OPEN' : 'CLOSED'}
          </span>
        </div>
      </motion.div>

      {/* hover hint */}
      <div className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-night-800/90 px-3.5 py-1 text-[11px] font-medium uppercase tracking-widest text-gold opacity-0 ring-1 ring-gold/20 transition-all duration-300 group-hover:-bottom-9 group-hover:opacity-100">
        Step inside →
      </div>
    </motion.button>
  )
}
