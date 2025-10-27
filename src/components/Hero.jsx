import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="grid md:grid-cols-2 gap-8 items-center">
      <div className="space-y-6">
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-5xl md:text-7xl font-extrabold text-yellow-300 drop-shadow-2xl"
          style={{ textShadow: '0 0 40px rgba(253, 224, 71, 0.6)' }}
        >
          Happy Navaratri
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-xl text-orange-100 max-w-xl"
        >
          Celebrate nine nights of devotion, music, dance and community. Join us for Garba, Dandiya,
          cultural shows and communal feasts.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <a
            href="#about"
            className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold text-lg shadow-2xl transform transition hover:scale-110 hover:shadow-yellow-500/50"
          >
            Celebrate Now
          </a>
        </motion.div>
      </div>

      <div className="flex justify-center md:justify-end">
        <motion.div
          initial={{ rotate: -6, scale: 0.95, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          transition={{ duration: 0.9 }}
          className="w-64 h-64 md:w-80 md:h-80 rounded-3xl bg-gradient-to-br from-yellow-500/30 to-orange-600/30 backdrop-blur-sm p-8 flex items-center justify-center shadow-2xl border-2 border-yellow-400/30"
        >
          <div className="text-9xl">🪔</div>
        </motion.div>
      </div>
    </section>
  )
}
