"use client"
import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import confetti from "canvas-confetti"
import { Volume2, VolumeX, Sparkles } from "lucide-react"

const FLOATING_EMOJIS = ['🎈', '💖', '✨', '🌸', '🎁', '🎂', '🥳', '💗', '🎀', '🦄']

export default function CakeScreen({ onNext }) {
  const [candlesBlown, setCandlesBlown] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) { audioRef.current.pause() } 
      else { audioRef.current.play() }
      setIsPlaying(!isPlaying)
    }
  }

  const blowCandles = () => {
    setCandlesBlown(true)
    if (audioRef.current) {
      audioRef.current.muted = false
      audioRef.current.play()
      setIsPlaying(true)
    }
    
    const duration = 15 * 1000;
    const animationEnd = Date.now() + duration;
    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) { return clearInterval(interval); }
      const particleCount = 60 * (timeLeft / duration);
      confetti({ particleCount, startVelocity: 45, spread: 360, origin: { x: Math.random(), y: Math.random() - 0.2 } });
    }, 250);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12 relative overflow-hidden bg-white">
      <AnimatePresence>
        {candlesBlown && (
          <div className="absolute inset-0 pointer-events-none z-0">
            {[...Array(25)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: '110vh', x: `${Math.random() * 100}vw` }}
                animate={{ opacity: [0, 1, 1, 0], y: '-20vh', rotate: [0, 90] }}
                transition={{ duration: 5 + Math.random() * 8, repeat: Infinity }}
                className="absolute text-3xl md:text-5xl"
              >
                {FLOATING_EMOJIS[i % FLOATING_EMOJIS.length]}
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>

      <motion.div className="max-w-2xl text-center mb-16 relative z-10">
        <h2 className="text-4xl md:text-6xl font-serif italic text-gray-900 mb-6 leading-tight">
          {candlesBlown ? <span className="text-rose-600">A beautiful year awaits you...</span> : "May your journey be as sweet as this moment."}
        </h2>
        <p className="text-gray-400 text-lg font-light tracking-[0.2em]">
          {candlesBlown ? "Happy birthday Ruchi🖤" : "Tap to enter the celebration"}
        </p>
      </motion.div>

      <div className="relative mb-20 z-10" onClick={!candlesBlown ? blowCandles : undefined}>
        <div className="text-[12rem] md:text-[16rem] select-none filter drop-shadow-xl">🎂</div>
        <audio ref={audioRef} src="/wishes.mp3" loop />
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        onClick={candlesBlown ? onNext : blowCandles}
        className="px-14 py-5 bg-rose-600 text-white rounded-full font-black tracking-[0.5em] text-[10px] shadow-xl"
      >
        {candlesBlown ? "CONTINUE" : "START"}
      </motion.button>

      {candlesBlown && (
        <motion.button
          onClick={toggleMusic}
          className="fixed bottom-10 left-10 p-4 bg-white/80 backdrop-blur-xl border border-gray-100 rounded-2xl text-gray-400 z-50 shadow-xl"
        >
          {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
        </motion.button>
      )}
    </div>
  )
}
