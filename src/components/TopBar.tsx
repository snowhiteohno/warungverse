import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useCart } from '../store/cart'
import Lantern from './Lantern'

export default function TopBar({ backTo, backLabel }: { backTo?: string; backLabel?: string }) {
  const navigate = useNavigate()
  const { open, count } = useCart()
  const n = count()

  return (
    <header className="fixed inset-x-0 top-0 z-30 flex items-center justify-between px-5 py-4 sm:px-8">
      <div className="flex items-center gap-3">
        {backTo ? (
          <button
            onClick={() => navigate(backTo)}
            className="btn-ghost flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-widest"
          >
            ← {backLabel ?? 'Back'}
          </button>
        ) : (
          <Link to="/street" className="group flex items-center gap-2.5">
            <motion.span animate={{ rotate: [-2, 2, -2] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}>
              <Lantern width={18} />
            </motion.span>
            <span className="font-display text-lg font-semibold tracking-tight text-cream">
              Warung<span className="text-candy-gradient">Verse</span>
            </span>
          </Link>
        )}
      </div>

      <button
        onClick={open}
        className="glass relative flex items-center gap-2 rounded-full px-4 py-2.5 text-sm transition hover:border-gold/40"
        aria-label="Open basket"
      >
        <span>🧺</span>
        <span className="hidden sm:inline text-cream/80">Basket</span>
        {n > 0 && (
          <motion.span
            key={n}
            initial={{ scale: 0.4 }}
            animate={{ scale: 1 }}
            className="absolute -right-1.5 -top-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-ember px-1 text-[11px] font-bold text-night-900"
          >
            {n}
          </motion.span>
        )}
      </button>
    </header>
  )
}
