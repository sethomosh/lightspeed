"use client"

import { motion, useReducedMotion } from "framer-motion"

export default function Template({ children }: { children: React.ReactNode }) {
    const shouldReduceMotion = useReducedMotion()

    const variants = {
        initial: { opacity: 0, y: shouldReduceMotion ? 0 : 8 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: shouldReduceMotion ? 0 : -8 }
    }

    return (
        <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.3, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    )
}
