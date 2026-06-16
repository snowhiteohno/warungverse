import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import Atmosphere from './Atmosphere'

export default function Page({
  children,
  intensity = 1,
}: {
  children: ReactNode
  intensity?: number
}) {
  return (
    <motion.main
      className="relative min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      <Atmosphere intensity={intensity} />
      {children}
    </motion.main>
  )
}
