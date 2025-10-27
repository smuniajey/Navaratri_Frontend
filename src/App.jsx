import React from 'react'
import { motion } from 'framer-motion'
import Hero from './components/Hero'
import About from './components/About'
import Gallery from './components/Gallery'
import MusicToggle from './components/MusicToggle'
import Footer from './components/Footer'
import Decor from './components/Decor'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-900 via-red-900 to-amber-900 text-white relative overflow-hidden">
      <Decor />
      <header className="container mx-auto px-6 pt-6">
        <div className="flex items-center justify-between">
          <motion.h6
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-lg font-bold text-yellow-300 tracking-widest"
          >
            🪔 Navaratri 2025
          </motion.h6>

          <MusicToggle />
        </div>
      </header>

      <main className="container mx-auto px-6 py-10 space-y-16">
        <Hero />
        <About />
        <Gallery />
      </main>

      <Footer />
    </div>
  )
}
