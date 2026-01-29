"use client"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import LoaderScreen from "@/components/screens/LoaderScreen"
import IntroScreen from "@/components/screens/IntroScreen"
import CakeScreen from "@/components/screens/CakeScreen"
import PhotosScreen from "@/components/screens/PhotosScreen"
import MessageScreen from "@/components/screens/MessageScreen"

export default function HomePage() {
  const [currentScreen, setCurrentScreen] = useState(0)

  const screens = [
    <LoaderScreen key="loader" onDone={() => setCurrentScreen(1)} />,
    <IntroScreen key="intro" onNext={() => setCurrentScreen(2)} />,
    <CakeScreen key="cake" onNext={() => setCurrentScreen(3)} />,
    <PhotosScreen key="photos" onNext={() => setCurrentScreen(4)} />,
    <MessageScreen key="message" onNext={() => setCurrentScreen(0)} />,
  ]

  return (
    <main className="min-h-screen bg-white overflow-hidden relative font-sans">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-rose-600/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-rose-600/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 flex min-h-screen items-center justify-center p-4 md:p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScreen}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="w-full max-w-4xl"
          >
            {screens[currentScreen]}
          </motion.div>
        </AnimatePresence>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="fixed bottom-6 right-6 text-[10px] tracking-widest text-black font-bold lowercase pointer-events-none z-50"
      >
        made with 🖤 by aashishcse017
      </motion.div>
    </main>
  )
}