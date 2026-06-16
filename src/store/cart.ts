import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Item, Stall } from '../data/types'

export interface CartLine {
  itemId: string
  stallId: string
  name: string
  stallName: string
  artisan: string
  price: number
  glyph: string
  accent: string
  qty: number
}

interface CartState {
  lines: CartLine[]
  isOpen: boolean
  lastOrderId: string | null
  add: (item: Item, stall: Stall) => void
  remove: (itemId: string) => void
  setQty: (itemId: string, qty: number) => void
  clear: () => void
  open: () => void
  close: () => void
  toggle: () => void
  placeOrder: () => string
  count: () => number
  subtotal: () => number
}

// IDR is displayed; prices stored in "thousands" for readability (165 => Rp 165.000)
export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      lines: [],
      isOpen: false,
      lastOrderId: null,

      add: (item, stall) =>
        set((state) => {
          const existing = state.lines.find((l) => l.itemId === item.id)
          if (existing) {
            return {
              lines: state.lines.map((l) =>
                l.itemId === item.id ? { ...l, qty: l.qty + 1 } : l,
              ),
              isOpen: true,
            }
          }
          const line: CartLine = {
            itemId: item.id,
            stallId: stall.id,
            name: item.name,
            stallName: stall.name,
            artisan: stall.artisan.honorific,
            price: item.price,
            glyph: item.glyph,
            accent: item.accent,
            qty: 1,
          }
          return { lines: [...state.lines, line], isOpen: true }
        }),

      remove: (itemId) =>
        set((state) => ({ lines: state.lines.filter((l) => l.itemId !== itemId) })),

      setQty: (itemId, qty) =>
        set((state) => ({
          lines:
            qty <= 0
              ? state.lines.filter((l) => l.itemId !== itemId)
              : state.lines.map((l) => (l.itemId === itemId ? { ...l, qty } : l)),
        })),

      clear: () => set({ lines: [] }),
      open: () => set({ isOpen: true }),
      close: () => set({ isOpen: false }),
      toggle: () => set((s) => ({ isOpen: !s.isOpen })),

      placeOrder: () => {
        // Simulated order — deterministic-ish id from current cart
        const seed = get()
          .lines.reduce((acc, l) => acc + l.qty + l.itemId.length, 7)
          .toString(36)
          .toUpperCase()
        const id = `WV-${seed}${get().lines.length}K`
        set({ lastOrderId: id, lines: [], isOpen: false })
        return id
      },

      count: () => get().lines.reduce((acc, l) => acc + l.qty, 0),
      subtotal: () => get().lines.reduce((acc, l) => acc + l.qty * l.price, 0),
    }),
    { name: 'warungverse-cart' },
  ),
)

export const formatIDR = (thousands: number): string =>
  'Rp ' + (thousands * 1000).toLocaleString('id-ID')
