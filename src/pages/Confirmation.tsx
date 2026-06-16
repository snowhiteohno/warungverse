import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Page from '../components/Page'
import KawaiiFace from '../components/KawaiiFace'

export default function Confirmation() {
  const navigate = useNavigate()
  const { state } = useLocation() as { state: { id?: string; name?: string } | null }
  const id = state?.id ?? 'WV-PREVIEW'
  const name = state?.name?.split(' ')[0]

  // if someone lands here directly without an order, send them home
  useEffect(() => {
    if (!state?.id) {
      const t = setTimeout(() => navigate('/street'), 50)
      return () => clearTimeout(t)
    }
  }, [state, navigate])

  return (
    <Page intensity={1.1}>
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
        {/* burst of confetti hearts, stars & blossoms */}
        {Array.from({ length: 26 }).map((_, i) => {
          const angle = (i / 26) * Math.PI * 2
          const glyphs = ['♡', '✦', '✿', '♥', '⋆', '❀']
          const colors = ['#ff9ec7', '#ffd08a', '#c3a6f0', '#8ecdf0', '#9be7c4']
          return (
            <motion.span
              key={i}
              className="absolute left-1/2 top-[38%] select-none text-xl"
              style={{ color: colors[i % colors.length] }}
              initial={{ x: 0, y: 0, opacity: 1, scale: 0.6, rotate: 0 }}
              animate={{
                x: Math.cos(angle) * (150 + (i % 5) * 32),
                y: Math.sin(angle) * (150 + (i % 5) * 32),
                opacity: 0,
                scale: 1.2,
                rotate: i % 2 ? 180 : -180,
              }}
              transition={{ duration: 1.6, delay: 0.2, ease: 'easeOut' }}
            >
              {glyphs[i % glyphs.length]}
            </motion.span>
          )
        })}

        <motion.div
          initial={{ scale: 0, rotate: -20 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 14, delay: 0.1 }}
          className="mb-6 flex h-28 w-28 items-center justify-center rounded-blob bg-gradient-to-br from-bubble-light via-gold to-bubble text-5xl shadow-cute"
        >
          <div className="flex flex-col items-center">
            <KawaiiFace size={66} happy />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-[11px] uppercase tracking-[0.4em] text-bubble-light/90"
        >
          all wrapped up ♡
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-3 max-w-2xl text-balance font-display text-4xl leading-tight text-cream sm:text-6xl"
        >
          {name ? `Terima kasih, ${name}.` : 'Terima kasih.'}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-4 max-w-md text-balance text-cream/65"
        >
          your makers are doing a happy little dance right now. they’ll wrap your goodies by hand and send them off with lots of love. ♡
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          className="glass-strong mt-8 rounded-2xl px-6 py-4"
        >
          <p className="text-[10px] uppercase tracking-widest text-cream/45">Order reference</p>
          <p className="font-display text-2xl tracking-wider text-gold-gradient">{id}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <button
            onClick={() => navigate('/street')}
            className="btn-ember px-8 py-3 text-sm uppercase tracking-widest"
          >
            keep wandering ♡
          </button>
          <button
            onClick={() => navigate('/')}
            className="btn-ghost px-8 py-3 text-sm uppercase tracking-widest"
          >
            see you soon ✿
          </button>
        </motion.div>
      </section>
    </Page>
  )
}
