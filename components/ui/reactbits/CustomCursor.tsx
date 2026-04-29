"use client"

import React, { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export function CustomCursor() {
  const [mounted, setMounted] = useState(false)
  const isPointerCoarse = typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches

  // Core dot position matching cursor instantly
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Spring animated ring position 
  const ringX = useSpring(mouseX, { stiffness: 150, damping: 15 })
  const ringY = useSpring(mouseY, { stiffness: 150, damping: 15 })

  useEffect(() => {
    setMounted(true)
    
    if (isPointerCoarse) return

    const handleMouseMove = (e: MouseEvent) => {
      // The cursor dot size is 8x8 (radius 4)
      mouseX.set(e.clientX - 4)
      mouseY.set(e.clientY - 4)
      // The ring is 20x20, we want it perfectly centered with the dot
      // To center a 20x20 ring around a center point (e.clientX), offset by 10
      // But we just use the same coordinates and center via flexbox or margin in CSS.
      // Wait, let's offset directly via state so they share the exact center.
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [isPointerCoarse, mouseX, mouseY])

  if (!mounted || isPointerCoarse) return null

  return (
    <>
      {/* 8px prussian dot */}
      <motion.div
        className="fixed top-0 left-0 w-[8px] h-[8px] bg-prussian rounded-full pointer-events-none z-[9999]"
        style={{
          x: mouseX,
          y: mouseY,
        }}
      />

      {/* 20px signal ring with spring delay. Centering offset relative to the 8px dot is calculated below */}
      <motion.div
        className="fixed top-0 left-0 w-[20px] h-[20px] border-[1.5px] border-signal rounded-full pointer-events-none z-[9998]"
        style={{
          // We must offset the ring by -6px on both axes to perfectly center the 20px ring over the 8px dot 
          // because 20 - 8 = 12 / 2 = 6
          x: ringX,
          y: ringY,
          marginLeft: -6,
          marginTop: -6,
        }}
      />
    </>
  )
}
