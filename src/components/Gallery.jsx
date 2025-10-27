import React from 'react'
import { motion } from 'framer-motion'

const galleryItems = [
  { emoji: '🪔', title: 'Diya Lights' },
  { emoji: '🎭', title: 'Garba Dance' },
  { emoji: '🎪', title: 'Cultural Shows' },
  { emoji: '🎵', title: 'Traditional Music' },
  { emoji: '🌺', title: 'Flower Decorations' },
  { emoji: '🎉', title: 'Celebrations' }
]

export default function Gallery() {
  return (
    <section id="gallery" className="space-y-8">
      <h2 className="text-4xl font-bold text-yellow-300 text-center">Festival Highlights</h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {galleryItems.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05, y: -8 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-orange-700/40 to-red-800/40 backdrop-blur-sm border border-yellow-500/30 p-8 text-center"
          >
            <div className="text-7xl mb-4">{item.emoji}</div>
            <h3 className="text-xl font-bold text-yellow-200">{item.title}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
