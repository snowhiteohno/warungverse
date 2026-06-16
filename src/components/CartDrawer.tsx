import { AnimatePresence, motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useCart, formatIDR } from '../store/cart'
import KawaiiFace from './KawaiiFace'

export default function CartDrawer() {
  const navigate = useNavigate()
  const { lines, isOpen, close, setQty, remove, subtotal } = useCart()
  const total = subtotal()

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-40 bg-night-900/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          />
          <motion.aside
            className="glass-strong fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 260, damping: 30 }}
          >
            <header className="flex items-center justify-between px-6 pb-4 pt-6">
              <div>
                <p className="text-[11px] uppercase tracking-[0.25em] text-bubble-light/90">your little basket ♡</p>
                <h2 className="font-display text-2xl text-cream">goodies to go</h2>
              </div>
              <button
                onClick={close}
                className="flex h-9 w-9 items-center justify-center rounded-full text-cream/70 transition hover:bg-cream/10 hover:text-cream"
                aria-label="Close basket"
              >
                ✕
              </button>
            </header>
            <div className="rule mx-6" />

            <div className="flex-1 overflow-y-auto px-6 py-4">
              {lines.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center text-cream/55">
                  <motion.div
                    className="mb-5 flex h-24 w-24 items-center justify-center rounded-blob bg-bubble/20 ring-2 ring-bubble/30"
                    animate={{ y: [0, -8, 0], rotate: [-2, 2, -2] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <KawaiiFace size={64} />
                  </motion.div>
                  <p className="max-w-[15rem] text-balance text-sm">
                    your basket is feeling a little lonely… go say hi to the makers and find something cute! ♡
                  </p>
                </div>
              ) : (
                <ul className="space-y-3">
                  <AnimatePresence initial={false}>
                    {lines.map((l) => (
                      <motion.li
                        key={l.itemId}
                        layout
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 30, height: 0 }}
                        className="glass flex items-center gap-3 rounded-2xl p-3"
                      >
                        <div
                          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-2xl"
                          style={{ boxShadow: `inset 0 0 18px ${l.accent}40`, background: '#1c1009' }}
                        >
                          {l.glyph}
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-medium text-cream">{l.name}</p>
                          <p className="truncate text-[11px] text-cream/50">
                            {l.stallName} · {l.artisan}
                          </p>
                          <p className="mt-0.5 text-xs font-semibold text-gold">{formatIDR(l.price)}</p>
                        </div>
                        <div className="flex flex-col items-end gap-1">
                          <div className="flex items-center gap-1 rounded-full bg-night-900/70 px-1">
                            <button
                              onClick={() => setQty(l.itemId, l.qty - 1)}
                              className="h-6 w-6 rounded-full text-cream/70 transition hover:text-gold"
                              aria-label="Decrease quantity"
                            >
                              −
                            </button>
                            <span className="w-5 text-center text-sm tabular-nums">{l.qty}</span>
                            <button
                              onClick={() => setQty(l.itemId, l.qty + 1)}
                              className="h-6 w-6 rounded-full text-cream/70 transition hover:text-gold"
                              aria-label="Increase quantity"
                            >
                              +
                            </button>
                          </div>
                          <button
                            onClick={() => remove(l.itemId)}
                            className="text-[10px] uppercase tracking-wide text-cream/40 transition hover:text-spice-light"
                          >
                            Remove
                          </button>
                        </div>
                      </motion.li>
                    ))}
                  </AnimatePresence>
                </ul>
              )}
            </div>

            {lines.length > 0 && (
              <footer className="border-t border-cream/10 px-6 py-5">
                <div className="mb-4 flex items-end justify-between">
                  <span className="text-sm text-cream/60">Subtotal</span>
                  <span className="font-display text-2xl text-gold-gradient">{formatIDR(total)}</span>
                </div>
                <button
                  onClick={() => {
                    close()
                    navigate('/checkout')
                  }}
                  className="btn-ember w-full py-3.5 text-sm uppercase tracking-widest"
                >
                  take them home ♡
                </button>
                <p className="mt-3 text-center text-[10px] text-cream/40">
                  payment’s just pretend here — nothing gets charged ✿
                </p>
              </footer>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
