"use client"
import { motion } from "framer-motion"
import Image from "next/image"

export default function IntroScreen({ onNext }) {
  return (
    <div className="flex flex-col items-center justify-center text-center px-6 min-h-screen bg-white">
      <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="mb-12">
        <Image src="/intro.gif" alt="Bday" width={240} height={240} className="rounded-3xl grayscale hover:grayscale-0 transition-all shadow-2xl" unoptimized priority />
      </motion.div>
      <h1 className="text-5xl md:text-7xl font-serif italic text-gray-900 mb-6 tracking-tight">
        A Moment for you <span className="text-rose-600">Ms. Ruchi.</span>
      </h1>
      <p className="text-lg text-gray-500 mb-12 max-w-lg font-light leading-relaxed">The stars aligned today to celebrate someone truly extraordinary. Ready?</p>
      <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={onNext} className="px-12 py-5 bg-rose-600 text-white rounded-full text-[10px] uppercase tracking-[0.5em] font-black shadow-xl">
        Enter the Magic
      </motion.button>
    </div>
  );
}