import React from 'react'
import { motion } from 'framer-motion'

export default function Decor() {
  return (
    <>
      <motion.div
        className="absolute -left-32 top-20 w-64 h-64 rounded-full bg-gradient-to-br from-yellow-500/40 to-orange-600/40 opacity-60 blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, -15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute right-[-80px] bottom-32 w-80 h-80 rounded-full bg-gradient-to-br from-red-500/30 to-orange-500/30 opacity-60 blur-3xl"
        animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute left-1/2 top-1/3 w-48 h-48 rounded-full bg-gradient-to-br from-yellow-400/20 to-amber-500/20 opacity-50 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
    </>
  )
}
