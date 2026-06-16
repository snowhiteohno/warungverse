import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Arrival from './pages/Arrival'
import District from './pages/District'
import StallPage from './pages/StallPage'
import Checkout from './pages/Checkout'
import Confirmation from './pages/Confirmation'
import CartDrawer from './components/CartDrawer'
import PresenceDock from './components/PresenceDock'

export default function App() {
  const location = useLocation()
  const onArrival = location.pathname === '/'

  return (
    <div className="relative min-h-full">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Arrival />} />
          <Route path="/street" element={<District />} />
          <Route path="/stall/:slug" element={<StallPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="*" element={<District />} />
        </Routes>
      </AnimatePresence>

      {/* Global overlays — hidden on the arrival screen for a clean entry */}
      {!onArrival && (
        <>
          <CartDrawer />
          <PresenceDock />
        </>
      )}
    </div>
  )
}
