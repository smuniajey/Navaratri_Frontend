import React from 'react'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="py-12 text-center text-orange-100 border-t border-yellow-500/20"
    >
      <p className="text-2xl font-bold text-yellow-300 mb-3" style={{ textShadow: '0 0 20px rgba(253, 224, 71, 0.4)' }}>
        May Maa Durga bless you and your family. 🙏
      </p>
      <p className="text-lg text-orange-200">Celebrate with joy, devotion and kindness.</p>
    </motion.footer>
  )
}
