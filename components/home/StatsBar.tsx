"use client"

import { useRef, useEffect, useState } from "react"
import { animate, motion, useInView, useReducedMotion } from "framer-motion"
import { StatsBackground } from "@/components/ui/SectionBackgrounds"

import { cn } from "@/lib/utils"

interface StatItemProps {
    value: string
    numericValue: number
    suffix: string
    prefix?: string
    label: string
}

function Counter({ numericValue, prefix = "", suffix = "" }: { numericValue: number; prefix?: string; suffix?: string }) {
    const [count, setCount] = useState(0)
    const ref = useRef<HTMLSpanElement>(null)
    const inView = useInView(ref, { once: true, margin: "-50px" })
    const prefersReducedMotion = useReducedMotion()

    useEffect(() => {
        if (!inView) return
        if (prefersReducedMotion) {
            setCount(numericValue)
            return
        }

        const controls = animate(0, numericValue, {
            duration: 1.2,
            ease: "easeOut",
            onUpdate(value) {
                setCount(Math.round(value))
            }
        })
        return () => controls.stop()
    }, [inView, numericValue, prefersReducedMotion])

    return (
        <span ref={ref}>
            {prefix}{count}{suffix}
        </span>
    )
}

function StatItem({ value, numericValue, prefix = "", suffix, label, index }: StatItemProps & { index: number }) {
    return (
        <div className={cn(
            "flex flex-col items-center justify-center py-10 px-4",
            // Mobile: 2 columns. 
            // - Right border on odd items (index 0, 2)
            // - Bottom border on first row (index 0, 1)
            index % 2 === 0 ? "border-r border-brand" : "",
            index < 2 ? "border-b border-brand" : "",
            // Desktop: 4 columns.
            // - Right border on all except last (index 0, 1, 2)
            // - No bottom border
            "md:border-b-0 md:border-r md:last:border-r-0"
        )}>
            <div className={cn(
                "font-display font-bold text-[36px] md:text-[42px] leading-none",
                index % 2 === 0 ? "text-prussian" : "text-signal"
            )}>
                {numericValue > 0 ? (
                    <Counter numericValue={numericValue} prefix={prefix} suffix={suffix} />
                ) : (
                    <span>{value}</span>
                )}
            </div>
            <div className="font-body text-[11px] font-500 uppercase tracking-widest text-text-muted-brand mt-3 text-center">
                {label}
            </div>
        </div>
    )
}


export function StatsBar() {
    const stats = [
        { value: "50+", numericValue: 50, suffix: "+", label: "Projects Delivered" },
        { value: "6", numericValue: 6, suffix: "", label: "Solution Verticals" },
        { value: "24/7", numericValue: 24, suffix: "/7", label: "Support Available" },
        { value: "100%", numericValue: 100, suffix: "%", label: "On-site Capable" },
    ]

    return (
        <section className="relative w-full bg-surface border-y border-brand z-10 overflow-hidden">
            <StatsBackground />
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4">
                    {stats.map((stat, index) => (
                        <StatItem key={index} {...stat} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}
