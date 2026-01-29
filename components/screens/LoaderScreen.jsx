"use client"
import { useEffect } from "react"
import { motion } from "framer-motion"

export default function LoaderScreen({ onDone }) {
  useEffect(() => {
    const timer = setTimeout(() => onDone(), 2500);
    return () => clearTimeout(timer);
  }, [onDone]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-16 h-16 border-2 border-rose-100 border-t-rose-500 rounded-2xl mx-auto mb-8"
        />
        <h2 className="text-sm tracking-[0.4em] font-light text-gray-400 uppercase text-center">Creating Magic</h2>
      </motion.div>
    </div>
  );
}