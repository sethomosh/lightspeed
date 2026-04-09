"use client"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

export function LocationBadge({ area, index }: { area: string, index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.3 }}
        >
            <Badge className="px-3 py-1 rounded-full text-xs font-medium font-body bg-accent/10 border border-accent/20 text-accent hover:bg-accent/20 transition-colors">
                {area}
            </Badge>
        </motion.div>
    )
}
