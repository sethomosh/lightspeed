"use client"

import React from "react"
import { motion, useReducedMotion } from "framer-motion"

/**
 * STATS BAR: Subtle horizontal scan line texture
 */
export function StatsBackground() {
    return (
        <div 
            className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.06] z-0"
            style={{
                backgroundImage: `repeating-linear-gradient(
                    0deg,
                    transparent,
                    transparent 39px,
                    var(--color-border-subtle) 40px
                )`
            }}
        />
    )
}

/**
 * SERVICES SECTION: LIQUID ETHER effect
 * Multiple radial gradients that drift slowly
 */
export function EtherBackground() {
    const prefersReducedMotion = useReducedMotion()

    if (prefersReducedMotion) {
        return <div className="absolute inset-0 bg-surface pointer-events-none z-0" />
    }

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {/* Orb 1: Blue Light */}
            <motion.div
                animate={{
                    x: ["-10%", "110%", "-10%"],
                    y: ["-10%", "110%", "-10%"],
                }}
                transition={{
                    duration: 16,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute w-[800px] h-[800px] rounded-full blur-[120px] opacity-[0.6] dark:opacity-[0.4]"
                style={{
                    background: "radial-gradient(circle, var(--color-blue-light) 0%, transparent 60%)",
                    left: "-400px",
                    top: "-400px",
                }}
            />
            {/* Orb 2: Signal / Warm */}
            <motion.div
                animate={{
                    x: ["110%", "-10%", "110%"],
                    y: ["-10%", "110%", "-10%"],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute w-[600px] h-[600px] rounded-full blur-[100px] opacity-[0.05] dark:opacity-[0.03]"
                style={{
                    background: "radial-gradient(circle, #E8420A 0%, transparent 50%)",
                    right: "-300px",
                    top: "-300px",
                }}
            />
        </div>
    )
}

/**
 * WHY STRATUM: Radial vignette
 */
export function VignetteBackground() {
    return (
        <div 
            className="absolute inset-0 pointer-events-none z-0"
            style={{
                background: "radial-gradient(ellipse at center, var(--color-surface) 0%, var(--color-base) 100%)"
            }}
        />
    )
}

/**
 * LOCATION SECTION: PLASMA background effect
 * SVG Turbulence filter + hue-rotate
 */
export function PlasmaBackground() {
    const prefersReducedMotion = useReducedMotion()

    if (prefersReducedMotion) {
        return <div className="absolute inset-0 bg-surface pointer-events-none z-0" />
    }

    return (
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            <svg style={{ position: 'absolute', width: 0, height: 0 }}>
                <filter id="plasma">
                    <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="4" seed="2">
                        <animate 
                            attributeName="baseFrequency" 
                            values="0.015;0.020;0.015" 
                            dur="8s" 
                            repeatCount="indefinite"
                        />
                    </feTurbulence>
                    <feColorMatrix type="hueRotate">
                        <animate 
                            attributeName="values" 
                            values="0;30;0" 
                            dur="8s" 
                            repeatCount="indefinite"
                        />
                    </feColorMatrix>
                    <feBlend in="SourceGraphic" mode="overlay" />
                </filter>
            </svg>
            <div 
                className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
                style={{
                    filter: 'url(#plasma)',
                    background: 'linear-gradient(to bottom right, var(--color-prussian), var(--color-signal))'
                }}
            />
        </div>
    )
}

/**
 * CTA SECTION: Diagonal light rays
 */
export function RaysBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-[0.03] dark:opacity-[0.05]">
            <div 
                className="absolute inset-0"
                style={{
                    backgroundImage: `repeating-linear-gradient(
                        45deg,
                        transparent,
                        transparent 100px,
                        rgba(255, 255, 255, 1) 100px,
                        rgba(255, 255, 255, 1) 101px
                    )`
                }}
            />
        </div>
    )
}

/**
 * GOOGLE REVIEWS: Noise texture overlay
 */
export function NoiseBackground() {
    return (
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            <svg style={{ position: 'absolute', width: 0, height: 0 }}>
                <filter id="noiseFilter">
                    <feTurbulence 
                        type="turbulence" 
                        baseFrequency="0.65" 
                        numOctaves="3" 
                        stitchTiles="stitch" 
                    />
                </filter>
            </svg>
            <div 
                className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='turbulence' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                }}
            />
        </div>
    )
}
