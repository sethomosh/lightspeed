"use client"

import React, { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { cn } from "@/lib/utils"

export interface AuroraProps {
  colorStops: string[]
  amplitude?: number
  blend?: number
  className?: string
}

export function Aurora({ colorStops, className }: AuroraProps) {
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      transition: {
        duration: 8,
        ease: "easeInOut",
        repeat: Infinity,
      },
    })
  }, [controls])

  return (
    <motion.div
      initial={{ backgroundPosition: "0% 50%" }}
      animate={controls}
      className={cn("absolute inset-0 z-0", className)}
      style={{
        background: `linear-gradient(-45deg, ${colorStops.join(", ")})`,
        backgroundSize: "400% 400%",
        opacity: 0.8,
        filter: "blur(40px) saturate(150%)",
        mixBlendMode: "screen",
      }}
    />
  )
}
