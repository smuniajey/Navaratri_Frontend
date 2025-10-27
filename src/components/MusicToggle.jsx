import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'

export default function MusicToggle() {
  const [playing, setPlaying] = useState(false)
  const audioRef = useRef(null)

  function toggle() {
    if (!audioRef.current) return
    if (playing) {
      audioRef.current.pause()
      setPlaying(false)
    } else {
      audioRef.current.play()
      setPlaying(true)
    }
  }

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={toggle}
        className="p-3 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 transition shadow-2xl transform hover:scale-110"
        aria-label={playing ? 'Pause music' : 'Play music'}
      >
        <motion.span animate={{ rotate: playing ? 360 : 0 }} transition={{ duration: 0.8 }}>
          {playing ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-900" viewBox="0 0 20 20" fill="currentColor">
              <path d="M6 4h2v12H6V4zM12 4h2v12h-2V4z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-900" viewBox="0 0 20 20" fill="currentColor">
              <path d="M6 4l10 6-10 6V4z" />
            </svg>
          )}
        </motion.span>
      </button>

      {/* Audio element - can add src when you have an mp3 file */}
      {/* <audio ref={audioRef} src="/src/assets/bg-music.mp3" loop /> */}
    </div>
  )
}
