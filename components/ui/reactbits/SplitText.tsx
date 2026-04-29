"use client"

import React from "react"
import { motion, useReducedMotion, Variants } from "framer-motion"

export interface SplitTextProps {
  text: string
  className?: string
  delay?: number
}

export function SplitText({ text, className = "", delay = 0 }: SplitTextProps) {
  const prefersReducedMotion = useReducedMotion()
  const letters = text.split("")

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { 
        staggerChildren: 0.02, 
        delayChildren: delay * i,
      },
    }),
  }

  const childVariants: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  }

  if (prefersReducedMotion) {
    return <span className={className}>{text}</span>
  }

  return (
    <motion.div
      style={{ display: "inline-block", overflow: "hidden" }}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={className}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={childVariants}
          style={{ display: "inline-block" }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  )
}
