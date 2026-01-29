"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCards, Autoplay } from "swiper/modules"
import "swiper/css"; import "swiper/css/effect-cards"

const photos = [
  { src: "/1.jpeg.jpg" }, { src: "/2.jpeg.jpg" }, { src: "/3.jpeg.jpg" }, { src: "/4.jpeg.jpg" }, { src: "/5.jpeg.jpg" }
]

export default function PhotosScreen({ onNext }) {
  return (
    <div className="flex flex-col items-center justify-center text-center px-6 min-h-screen bg-white">
      <h2 className="text-3xl md:text-5xl font-serif italic text-gray-900 mb-12">Precious Memories</h2>
      <div className="w-full max-w-sm mb-12">
        <Swiper effect="cards" grabCursor={true} modules={[EffectCards, Autoplay]} autoplay={{ delay: 2500 }} className="w-full">
          {photos.map((p, i) => (
            <SwiperSlide key={i}>
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border-2 border-gray-100 shadow-2xl">
                <Image src={p.src} alt="pic" fill className="object-cover" unoptimized />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <button onClick={onNext} className="px-12 py-5 bg-rose-600 text-white rounded-full text-[10px] uppercase tracking-[0.5em] font-black shadow-xl">See Your Message</button>
    </div>
  );
}