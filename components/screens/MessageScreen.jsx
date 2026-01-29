"use client"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import confetti from "canvas-confetti"
import Image from "next/image"

export default function MessageScreen({ onNext }) {
  const [displayText, setDisplayText] = useState("")
  const fullMessage = "Ruchi, today isn't just another year. It's a celebration of the unique light you bring into the world...\n\n[Full Message Content Here]"
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullMessage.length) { setDisplayText(fullMessage.substring(0, i + 1)); i++; }
      else clearInterval(timer);
    }, 30);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-white">
      <Image src="/gift.gif" alt="Gift" width={80} height={80} unoptimized className="mb-4" />
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl border border-gray-100 flex flex-col h-[80vh]">
        <div className="p-8 overflow-y-auto flex-1">
          <h1 className="text-2xl font-serif italic mb-6">Happy Birthday Dear Ruchi</h1>
          <p className="text-gray-700 font-light leading-relaxed whitespace-pre-wrap">{displayText}</p>
        </div>
        <div className="p-6 border-t flex justify-center">
          <button onClick={onNext} className="px-10 py-4 bg-rose-600 text-white rounded-full text-[10px] font-black tracking-[0.4em]">Start Over</button>