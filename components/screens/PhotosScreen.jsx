"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCards, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/effect-cards"

import { useRef, useState, useEffect } from "react"
import { Volume2, VolumeX } from "lucide-react"

const photos = [
  { src: "/1.jpeg" }, 
  { src: "/2.jpeg" },
  { src: "/3.jpeg" },
  { src: "/4.jpeg" },
  { src: "/5.jpeg" },
  { src: "/6.jpeg" },
  { src: "/7.jpeg" },
  { src: "/8.jpeg" },
  { src: "/9.jpeg" }
]

export default function PhotosScreen({ onNext }) {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(true)

  // 🔥 AUTO PLAY when PhotoScreen loads (after Continue click)
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.4
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false))
    }
  }, [])

  // 🔊 SAME volume button behaviour as CakeScreen
  const toggleMusic = () => {
    if (!audioRef.current) return
    if (isPlaying) audioRef.current.pause()
    else audioRef.current.play()
    setIsPlaying(!isPlaying)
  }

  // 🛑 STOP music before going to MessageScreen
  const handleNext = () => {
    audioRef.current?.pause()
    setIsPlaying(false)
    onNext()
  }

  return (
    <div className="flex flex-col items-center justify-center text-center px-6 min-h-screen bg-white">

      {/* 🎵 PHOTO SCREEN MUSIC */}
      <audio ref={audioRef} src="/photos.mp3" loop />

      <h2 className="text-3xl md:text-5xl font-serif italic text-gray-900 mb-12">
        Your Precious Memories
      </h2>

      <div className="w-full max-w-sm mb-12">
        <Swiper
          effect="cards"
          grabCursor
          modules={[EffectCards, Autoplay]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          className="w-full"
        >
          {photos.map((p, i) => (
            <SwiperSlide key={i}>
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border-2 border-gray-100 shadow-2xl">
                <Image
                  src={p.src}
                  alt="pic"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ⬇️ CHANGED HERE */}
      <button
        onClick={handleNext}
        className="px-12 py-5 bg-rose-600 text-white rounded-full
                   text-[10px] uppercase tracking-[0.5em] font-black shadow-xl"
      >
        See My Message
      </button>

    </div>
  )
}
