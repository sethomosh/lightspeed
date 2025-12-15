"use client"

import * as React from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDown, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export function HeroSection() {
    const { scrollY } = useScroll()
    const y = useTransform(scrollY, [0, 500], [0, 200])
    const opacity = useTransform(scrollY, [0, 300], [1, 0])

    return (
        <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-background">
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-background opacity-50 blur-3xl" />
                <motion.div
                    className="absolute -top-[25%] -left-[10%] h-[50vh] w-[50vw] rounded-full bg-blue-500/20 blur-[100px]"
                    style={{ y: useTransform(scrollY, [0, 1000], [0, 200]) }}
                    animate={{
                        x: [0, 100, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute top-[20%] -right-[10%] h-[40vh] w-[40vw] rounded-full bg-purple-500/20 blur-[100px]"
                    style={{ y: useTransform(scrollY, [0, 1000], [0, -200]) }}
                    animate={{
                        x: [0, -50, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                    }}
                />
            </div>

            {/* Content Container */}
            <div className="relative z-10 container flex flex-col items-center text-center px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium tracking-wide">
                        Infrastructure Architecture & Solutions
                    </Badge>
                </motion.div>

                <motion.h1
                    className="max-w-4xl text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    Build Technology That{" "}
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400">
                        Actually Works
                    </span>
                </motion.h1>

                <motion.p
                    className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl md:mt-8 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    End-to-end infrastructure solutions for modern businesses and smart homes in Kenya.
                    Reliable, scalable, and secure.
                </motion.p>

                <motion.div
                    className="mt-10 flex flex-col gap-4 w-full sm:w-auto sm:flex-row"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <Button size="lg" className="h-12 px-8 text-base font-semibold rounded-full min-w-[200px]" asChild>
                        <Link href="/contact">
                            Book Free Consultation
                            <ChevronRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                    <Button size="lg" variant="outline" className="h-12 px-8 text-base font-semibold rounded-full min-w-[200px]" asChild>
                        <Link href="/services">View Services</Link>
                    </Button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
                style={{ y, opacity }}
                animate={{
                    y: [0, 10, 0],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                <div className="flex flex-col items-center gap-2 text-muted-foreground/50">
                    <span className="text-sm font-medium uppercase tracking-widest">Scroll</span>
                    <ArrowDown className="h-5 w-5" />
                </div>
            </motion.div>
        </section>
    )
}
