"use client"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import confetti from "canvas-confetti"
import Image from "next/image"

export default function MessageScreen({ onNext }) {
  const [displayText, setDisplayText] = useState("")
  
  const fullMessage = `Today isn't just another year. It's a celebration of the unique light you bring into the world.

May your journey ahead be filled with light, strength, and moments that remind you how special you truly are.

I hope life gives you countless reasons to smile, the courage to chase everything your heart desires, and the calm you deserve in between all the chaos.

I also want to say this from my heart — I'm sorry for anything I may have done knowingly or unknowingly that hurt you, troubled you, or made you feel uncomfortable. It was never my intention, and I genuinely hope you can forgive me. You matter more than any mistake.

This little surprise 🎁 is just a small way of saying how much you are appreciated.Something is on its way to you — I hope it brings a smile when it arrives.
You can track it here whenever you wish:`

  const link = "https://odrtrk.live/trk/366842831463"
  const closing = "\nOnce again, Happy Birthday, Madam ❤️🎂✨\nMay this year be kinder to you, brighter for you, and filled with beautiful moments you'll always remember."
  const signature = "\n~ Aashu"

  useEffect(() => {
    // Celebration confetti
    const end = Date.now() + 4000;
    const colors = ["#a855f7", "#ec4899", "#ffffff"];
    (function frame() {
      confetti({ particleCount: 3, angle: 60, spread: 55, origin: { x: 0 }, colors });
      confetti({ particleCount: 3, angle: 120, spread: 55, origin: { x: 1 }, colors });
      if (Date.now() < end) requestAnimationFrame(frame);
    })();

    // Typewriter effect
    let i = 0
    const timer = setInterval(() => {
      if (i < fullMessage.length) {
        setDisplayText(fullMessage.substring(0, i + 1))
        i++
      } else {
        clearInterval(timer)
      }
    }, 30)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-4 max-w-4xl mx-auto bg-white">
      <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="mb-4">
        <Image src="/gift.gif" alt="Gift" width={160} height={150} className="opacity-90" unoptimized />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white rounded-2xl shadow-2xl border border-gray-100 relative overflow-hidden flex flex-col h-[85vh] md:h-[80vh] mt-[-20px]"
      >
        <div className="p-8 pb-4 text-center">
          <h1 className="text-2xl md:text-3xl font-serif italic text-gray-800 tracking-tight">Happy Birthday Dear Ruchi</h1>
        </div>

        <div className="flex-1 overflow-y-auto px-8 md:px-10 pb-12 custom-scrollbar">
          <div className="text-left space-y-6">
            <p className="text-gray-700 text-base md:text-lg font-light leading-relaxed whitespace-pre-wrap font-sans tracking-wide">
              {displayText}
            </p>
            
            {displayText.length >= fullMessage.length && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                <div className="py-4 border-y border-gray-50">
                  <p className="text-gray-400 text-[9px] uppercase tracking-[0.3em] font-medium mb-2">Track Your Gift</p>
                  <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 font-light break-all hover:text-blue-600 transition-colors text-base md:text-lg block underline">
                    {link}
                  </a>
                </div>
                <p className="text-gray-700 text-base md:text-lg font-light leading-relaxed whitespace-pre-wrap">{closing}</p>
                <p className="text-gray-900 text-xl md:text-2xl font-serif italic text-right">{signature}</p>
              </motion.div>
            )}
          </div>
        </div>

        <div className="p-6 bg-gray-50/30 border-t flex justify-center">
          <button onClick={onNext} className="px-12 py-5 bg-rose-600 text-white rounded-full text-[10px] uppercase tracking-[0.5em] font-black shadow-xl">
            Start Over
          </button>
        </div>
      </motion.div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar { width: 2px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(0, 0, 0, 0.05); border-radius: 10px; }
      `}</style>
    </div>
  )
}
