import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Page from '../components/Page'
import TopBar from '../components/TopBar'
import { useCart, formatIDR } from '../store/cart'

export default function Checkout() {
  const navigate = useNavigate()
  const { lines, subtotal, placeOrder } = useCart()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [note, setNote] = useState('')
  const [placing, setPlacing] = useState(false)

  const total = subtotal()
  const shipping = lines.length ? 45 : 0

  if (lines.length === 0) {
    return (
      <Page>
        <TopBar backTo="/street" backLabel="The street" />
        <div className="flex min-h-screen flex-col items-center justify-center gap-5 text-center">
          <span className="text-6xl opacity-60">🧺</span>
          <p className="max-w-sm text-balance text-cream/65">
            Your basket is empty. Wander the street and gather something with a story.
          </p>
          <button onClick={() => navigate('/street')} className="btn-ember px-8 py-3 text-sm uppercase tracking-widest">
            Back to the street
          </button>
        </div>
      </Page>
    )
  }

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    setPlacing(true)
    // simulate processing
    setTimeout(() => {
      const id = placeOrder()
      navigate('/confirmation', { state: { id, name } })
    }, 1400)
  }

  return (
    <Page intensity={0.7}>
      <TopBar backTo="/street" backLabel="The street" />

      <div className="mx-auto max-w-5xl px-5 pb-24 pt-28 sm:px-8">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
          <p className="text-[11px] uppercase tracking-[0.35em] text-bubble-light/90">almost yours ♡</p>
          <h1 className="mt-1 font-display text-4xl text-cream sm:text-5xl">carry it home ✿</h1>
          <p className="mt-2 text-cream/55">just a few details, and your makers will know it’s going somewhere loved. ♡</p>
        </motion.div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_380px]">
          {/* form */}
          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-strong space-y-5 rounded-3xl p-7"
          >
            <Field label="Your name" value={name} onChange={setName} placeholder="Maya Larasati" required />
            <Field
              label="Email for confirmation"
              value={email}
              onChange={setEmail}
              placeholder="maya@example.com"
              type="email"
              required
            />
            <div>
              <label className="mb-1.5 block text-xs uppercase tracking-wider text-cream/55">
                A note to the makers <span className="text-cream/30">(optional)</span>
              </label>
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                rows={3}
                placeholder="Tell them what drew you in…"
                className="w-full resize-none rounded-xl border border-cream/12 bg-night-900/50 px-4 py-3 text-sm text-cream placeholder:text-cream/30 focus:border-gold/50 focus:outline-none focus:ring-2 focus:ring-gold/20"
              />
            </div>

            <div className="flex items-center gap-3 rounded-xl bg-ember/10 p-3 text-xs text-ember-light">
              <span className="text-lg">🔒</span>
              Payment is simulated for this prototype — no card is charged.
            </div>

            <motion.button
              type="submit"
              disabled={placing}
              whileTap={{ scale: 0.98 }}
              className="btn-ember flex w-full items-center justify-center gap-2 py-4 text-sm uppercase tracking-widest disabled:opacity-80"
            >
              {placing ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-night-900/40 border-t-night-900" />
                  wrapping it up with love…
                </>
              ) : (
                <>send it with love ♡ · {formatIDR(total + shipping)}</>
              )}
            </motion.button>
          </motion.form>

          {/* summary */}
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="glass h-fit rounded-3xl p-6 lg:sticky lg:top-28"
          >
            <p className="mb-4 text-[11px] uppercase tracking-[0.3em] text-gold/70">Your order</p>
            <ul className="space-y-3">
              {lines.map((l) => (
                <li key={l.itemId} className="flex items-center gap-3">
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-xl"
                    style={{ background: '#1c1009', boxShadow: `inset 0 0 16px ${l.accent}40` }}
                  >
                    {l.glyph}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm text-cream">{l.name}</p>
                    <p className="text-[11px] text-cream/45">
                      {l.stallName} · ×{l.qty}
                    </p>
                  </div>
                  <span className="text-sm text-cream/80">{formatIDR(l.price * l.qty)}</span>
                </li>
              ))}
            </ul>

            <div className="rule my-5" />

            <dl className="space-y-2 text-sm">
              <Row label="Subtotal" value={formatIDR(total)} />
              <Row label="Island courier" value={formatIDR(shipping)} />
              <div className="rule my-2" />
              <div className="flex items-center justify-between">
                <dt className="text-cream/70">Total</dt>
                <dd className="font-display text-2xl text-gold-gradient">{formatIDR(total + shipping)}</dd>
              </div>
            </dl>
          </motion.aside>
        </div>
      </div>
    </Page>
  )
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
  required,
}: {
  label: string
  value: string
  onChange: (v: string) => void
  placeholder?: string
  type?: string
  required?: boolean
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs uppercase tracking-wider text-cream/55">{label}</label>
      <input
        type={type}
        value={value}
        required={required}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-cream/12 bg-night-900/50 px-4 py-3 text-sm text-cream placeholder:text-cream/30 focus:border-gold/50 focus:outline-none focus:ring-2 focus:ring-gold/20"
      />
    </div>
  )
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <dt className="text-cream/55">{label}</dt>
      <dd className="text-cream/80">{value}</dd>
    </div>
  )
}
