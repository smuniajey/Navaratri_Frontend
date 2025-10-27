import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="grid md:grid-cols-3 gap-8 items-start">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="md:col-span-2 bg-gradient-to-br from-orange-800/50 to-red-800/50 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-yellow-500/20"
      >
        <h2 className="text-3xl font-bold text-yellow-300 mb-4">About Navaratri</h2>
        <p className="text-orange-100 leading-relaxed text-lg">
          Navaratri is a nine-night festival celebrated across India to honour the Divine Mother,
          Durga. Each day is dedicated to a form of the goddess and features music, dance, fasting
          and community gatherings. Communities come together to celebrate cultural identity and
          spiritual renewal.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="p-8 rounded-3xl bg-gradient-to-br from-yellow-700/30 to-orange-700/30 backdrop-blur-sm shadow-2xl border border-yellow-500/20"
      >
        <h3 className="font-bold text-yellow-300 mb-4 text-xl">Traditions</h3>
        <ul className="list-disc list-inside text-orange-100 space-y-2">
          <li>Garba & Dandiya nights</li>
          <li>Daily Aarti and Bhajans</li>
          <li>Community feasts and cultural shows</li>
        </ul>
      </motion.div>
    </section>
  )
}
