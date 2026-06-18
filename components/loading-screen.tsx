"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Zap } from "lucide-react"

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] bg-background flex items-center justify-center"
        >
          <div className="text-center">
            {/* Animated Logo */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative mb-8"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-24 h-24 rounded-full border-2 border-primary/30 border-t-primary mx-auto"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Zap className="h-10 w-10 text-primary" />
              </div>
            </motion.div>

            {/* Brand Text */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <h1 className="text-3xl font-bold">
                <span className="cyyan">DYNEX</span><span className="text-white">IS</span>{" "}
                <span className="text-primary neon-text">SOLUTIONS</span>
              </h1>
              <p className="text-sm text-muted-foreground mt-2">Go Electric. Go Green.</p>
            </motion.div>

            {/* Loading Bar */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
              className="h-1 bg-primary rounded-full mt-8 w-48 mx-auto neon-glow"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
