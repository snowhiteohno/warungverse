import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import Page from '../components/Page'
import Lantern from '../components/Lantern'

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 + i * 0.08, duration: 0.9, ease: [0.2, 0.7, 0.3, 1] },
  }),
}

// drifting paper lanterns, positioned like the mockup
const lanterns = [
  { w: 78, left: '11%', top: '24%', op: 1, dur: 14, dx: 6, dy: -14 },
  { w: 46, left: '84%', top: '30%', op: 0.6, dur: 18, dx: -7, dy: -11 },
  { w: 66, left: '88%', top: '64%', op: 0.85, dur: 16, dx: 6, dy: -13 },
  { w: 40, left: '14%', top: '70%', op: 0.5, dur: 20, dx: -6, dy: -10 },
  { w: 38, left: '67%', top: '18%', op: 0.55, dur: 17, dx: 5, dy: -12 },
]

export default function Arrival() {
  const navigate = useNavigate()

  return (
    <Page intensity={1}>
      {/* drifting lanterns */}
      {lanterns.map((l, i) => (
        <motion.div
          key={i}
          className="pointer-events-none fixed z-[1]"
          style={{ left: l.left, top: l.top, opacity: l.op }}
          animate={{ x: [0, l.dx, 0], y: [0, l.dy, 0], rotate: [-1.5, 1.5, -1.5] }}
          transition={{ duration: l.dur, repeat: Infinity, ease: 'easeInOut' }}
        >
          {/* soft glow pool behind each lantern */}
          <div
            className="absolute left-1/2 top-[46%] -z-10 -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              width: l.w * 3.4,
              height: l.w * 3.4,
              background:
                'radial-gradient(circle, rgba(233,168,87,0.30) 0%, rgba(217,125,134,0.10) 42%, rgba(217,125,134,0) 70%)',
            }}
          />
          <Lantern width={l.w} />
        </motion.div>
      ))}

      <section className="relative z-[2] flex min-h-screen flex-col">
        {/* slim top nav */}
        <nav className="flex items-center justify-between py-7">
          <div className="flex items-center gap-2.5">
            <Lantern width={20} />
            <span className="font-display text-xl font-semibold tracking-tight">
              Warung<span className="text-candy-gradient">Verse</span>
            </span>
          </div>
          <button
            onClick={() => navigate('/street')}
            className="text-[0.82rem] uppercase tracking-[0.14em] text-cream/55 transition-colors hover:text-cream"
          >
            The makers
          </button>
        </nav>

        {/* hero */}
        <main className="flex flex-1 flex-col items-center justify-center px-2 text-center">
          <motion.p
            variants={fadeUp}
            custom={0}
            initial="hidden"
            animate="show"
            className="mb-7 text-[0.78rem] uppercase tracking-[0.42em] text-gold"
          >
            Seminyak Central · Bali
          </motion.p>

          <h1 className="font-display text-[clamp(3rem,9.2vw,7rem)] font-medium leading-[0.98] tracking-[-0.01em]">
            <motion.span variants={fadeUp} custom={1} initial="hidden" animate="show" className="block text-cream">
              The living
            </motion.span>
            <motion.span
              variants={fadeUp}
              custom={2}
              initial="hidden"
              animate="show"
              className="block italic text-candy-gradient"
            >
              digital street
            </motion.span>
          </h1>

          <motion.p
            variants={fadeUp}
            custom={3}
            initial="hidden"
            animate="show"
            className="mx-auto mt-7 max-w-[44ch] text-[clamp(1rem,1.5vw,1.18rem)] leading-relaxed text-cream/60"
          >
            A small warung district where every stall keeps a story. Step inside,{' '}
            <em className="not-italic text-cream">meet the makers</em>, and take home something made by hand.
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={4}
            initial="hidden"
            animate="show"
            className="mt-11 flex flex-col items-center gap-4"
          >
            <button
              onClick={() => navigate('/street')}
              className="btn-ember group flex items-center gap-2.5 px-8 py-[17px] text-[1.02rem]"
            >
              Wander the street
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-[17px] w-[17px] transition-transform duration-300 group-hover:translate-x-1"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>
            <span className="text-[0.84rem] tracking-[0.04em] text-cream/45">No account needed</span>
          </motion.div>
        </main>

        {/* footer meta */}
        <motion.div
          variants={fadeUp}
          custom={5}
          initial="hidden"
          animate="show"
          className="flex flex-wrap items-center justify-center gap-x-[18px] gap-y-2 py-9 text-[0.78rem] uppercase tracking-[0.2em] text-cream/45"
        >
          <span>
            <strong className="font-semibold text-cream">5</strong> warungs
          </span>
          <span className="h-[3px] w-[3px] rounded-full bg-gold/70" />
          <span>
            <strong className="font-semibold text-cream">5</strong> makers
          </span>
          <span className="h-[3px] w-[3px] rounded-full bg-gold/70" />
          <span>Handmade in Bali</span>
        </motion.div>
      </section>
    </Page>
  )
}
