"use client"

import * as React from "react"
import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import { ChevronDown } from "lucide-react"

const techLogos = [
    { name: "Ubiquiti", slug: "ubiquiti" },
    { name: "Cisco", slug: "cisco" },
    { name: "MikroTik", slug: "mikrotik" },
    { name: "Home Assistant", slug: "homeassistant" },
    { name: "pfSense", slug: "pfsense" },
    { name: "Docker", slug: "docker" },
]

export function HeroSection() {
    const prefersReducedMotion = useReducedMotion()

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
        },
    }

    return (
        <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-base px-6">
            {/* Dot Grid Background */}
            <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: `radial-gradient(circle, #D0CFCA 1px, transparent 1px)`,
                    backgroundSize: '28px 28px',
                    maskImage: `linear-gradient(to bottom, black 40%, transparent 100%)`,
                    WebkitMaskImage: `linear-gradient(to bottom, black 40%, transparent 100%)`,
                }}
            />

            <motion.div 
                className="relative z-10 max-w-5xl mx-auto w-full flex flex-col items-start text-left"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Eyebrow Tag */}
                <motion.div 
                    variants={{
                        hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 16 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                    }}
                    className="bg-blue-light text-prussian text-label px-3 py-1 rounded-full inline-block mb-6"
                >
                    Infrastructure Solutions
                </motion.div>

                {/* H1 */}
                <motion.h1
                    variants={{
                        hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 24 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                    }}
                    className="font-display font-bold text-[32px] md:text-[40px] lg:text-[56px] leading-[1.0] tracking-[-0.03em] text-primary max-w-4xl"
                >
                    Infrastructure built to <span className="text-prussian">last.</span> Systems that actually <span className="text-prussian">works.</span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    variants={{
                        hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 16 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                    }}
                    className="mt-6 font-body font-300 text-[18px] text-text-muted-brand max-w-xl leading-[1.75]"
                >
                    End-to-end network, smart home, security, and DevOps solutions for businesses and homes across Nairobi and Kenya.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 12 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
                    }}
                    className="mt-10 flex flex-wrap gap-4"
                >
                    <Link 
                        href="/contact"
                        className="bg-prussian text-white font-body text-[15px] font-500 px-7 py-3 rounded-full transition-all duration-200 hover:bg-prussian-hover hover:scale-[1.02]"
                    >
                        Start a Project
                    </Link>
                    <Link 
                        href="/portfolio"
                        className="bg-transparent border border-prussian text-prussian font-body text-[15px] font-500 px-7 py-3 rounded-full transition-all duration-200 hover:bg-blue-light"
                    >
                        See Our Work
                    </Link>
                </motion.div>

                {/* Tech Strip */}
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 8 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
                    }}
                    className="mt-20 w-full"
                >
                    <p className="text-text-subtle text-label mb-6">
                        Technologies we work with
                    </p>
                    <div className="flex flex-wrap items-center gap-x-10 gap-y-6">
                        {techLogos.map((logo) => (
                            <div
                                key={logo.name}
                                className="h-[32px] transition-opacity duration-200 opacity-30 hover:opacity-80"
                            >
                                <img
                                    src={`https://cdn.simpleicons.org/${logo.slug}/1B3A6B`}
                                    alt={logo.name}
                                    className="h-full w-auto object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-text-subtle"
                animate={prefersReducedMotion ? {} : { y: [0, 6, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            >
                <ChevronDown size={20} />
            </motion.div>
        </section>
    )
}
