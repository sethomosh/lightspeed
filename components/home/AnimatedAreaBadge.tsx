"use client"

import { motion } from "framer-motion"

export function AnimatedAreaBadge({ area, index }: { area: string; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.04 }}
            className="bg-blue-light border border-prussian/20 text-prussian font-body text-[12px] font-500 px-3 py-1.5 rounded-full"
        >
            {area}
        </motion.div>
    )
}
