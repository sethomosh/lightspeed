"use client"

import React, { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { cn } from "@/lib/utils"

export interface GradientTextProps {
  children: React.ReactNode
  className?: string
  colors?: string[]
  animationDuration?: number
}

export function GradientText({
  children,
  className,
  colors = ["#1B3A6B", "#E8420A", "#1B3A6B"], // Default to prussian, signal, prussian
  animationDuration = 3,
}: GradientTextProps) {
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      transition: {
        duration: animationDuration,
        ease: "linear",
        repeat: Infinity,
      },
    })
  }, [controls, animationDuration])

  return (
    <motion.span
      initial={{ backgroundPosition: "0% 50%" }}
      animate={controls}
      className={cn(
        "inline-block text-transparent bg-clip-text",
        className
      )}
      style={{
        backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
        backgroundSize: "200% auto",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      {children}
    </motion.span>
  )
}
