import { useEffect, useState } from 'react'
import { stalls } from '../data/stalls'

export interface ActivityEvent {
  id: number
  text: string
  stallId: string
  kind: 'enter' | 'view' | 'order' | 'story'
}

const names = ['Maya', 'Arif', 'Putu', 'Sinta', 'Dewi', 'Reza', 'Lina', 'Tom', 'Aiko', 'Niko']

const verbs: Record<ActivityEvent['kind'], (stall: string, item?: string) => string> = {
  enter: (s) => `just stepped into ${s}`,
  view: (s, i) => `is admiring ${i} at ${s}`,
  story: (s) => `uncovered a maker’s story at ${s}`,
  order: (s, i) => `ordered ${i} from ${s}`,
}

let counter = 1

function makeEvent(): ActivityEvent {
  const stall = stalls[Math.floor(pseudoRandom() * stalls.length)]
  const kinds: ActivityEvent['kind'][] = ['enter', 'view', 'story', 'order']
  const kind = kinds[Math.floor(pseudoRandom() * kinds.length)]
  const name = names[Math.floor(pseudoRandom() * names.length)]
  const item = stall.items[Math.floor(pseudoRandom() * stall.items.length)]
  return {
    id: counter++,
    stallId: stall.id,
    kind,
    text: `${name} ${verbs[kind](stall.name, item?.name)}`,
  }
}

// A tiny LCG so we don't depend on Math.random timing for the feel
let seed = 9301
function pseudoRandom() {
  seed = (seed * 9301 + 49297) % 233280
  return seed / 233280
}

/**
 * The street engine — a convincing simulation of a living district.
 * Visitor count drifts; activity events arrive on a gentle cadence.
 */
export function useStreetEngine() {
  const [visitors, setVisitors] = useState(42)
  const [feed, setFeed] = useState<ActivityEvent[]>(() => [makeEvent(), makeEvent(), makeEvent()])

  useEffect(() => {
    const drift = setInterval(() => {
      setVisitors((v) => {
        const delta = Math.round((pseudoRandom() - 0.45) * 6)
        return Math.max(18, Math.min(120, v + delta))
      })
    }, 3200)

    const activity = setInterval(() => {
      setFeed((f) => [makeEvent(), ...f].slice(0, 6))
    }, 4200)

    return () => {
      clearInterval(drift)
      clearInterval(activity)
    }
  }, [])

  return { visitors, feed }
}
