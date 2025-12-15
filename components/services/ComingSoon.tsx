"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Bell, Lock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { toast } from "sonner" // Assuming we have sonner or basic alert

interface ComingSoonProps {
    title: string
    description: string
}

export function ComingSoon({ title, description }: ComingSoonProps) {
    const [email, setEmail] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Mock submission
        if (email) {
            alert("Thanks! We'll notify you when this service launches.")
            setEmail("")
        }
    }

    return (
        <div className="flex flex-col min-h-screen bg-black text-white selection:bg-primary selection:text-white overflow-hidden relative">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-black to-black opacity-50 pointer-events-none" />
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            <header className="container relative z-10 py-6">
                <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-400 hover:text-white transition-colors">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Home
                </Link>
            </header>

            <main className="flex-grow flex flex-col items-center justify-center container relative z-10 px-4 text-center">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8 p-6 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm"
                >
                    <Lock className="w-12 h-12 text-blue-500" />
                </motion.div>

                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                >
                    {title}
                </motion.h1>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <div className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium mb-6 inline-block border border-blue-500/30">
                        Launching Q1 2025
                    </div>
                </motion.div>

                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="max-w-xl text-lg text-gray-400 mb-10 leading-relaxed"
                >
                    {description}
                </motion.p>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="w-full max-w-md space-y-4"
                >
                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                        <Input
                            type="email"
                            placeholder="Enter your email for updates"
                            className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 h-11"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <Button type="submit" className="h-11 bg-blue-600 hover:bg-blue-700 text-white border-0">
                            Notify Me <Bell className="ml-2 h-4 w-4" />
                        </Button>
                    </form>
                    <p className="text-xs text-gray-500">
                        Available for urgent inquiries? <Link href="/contact" className="text-blue-400 hover:underline">Contact us now</Link>
                    </p>
                </motion.div>
            </main>

            <footer className="container relative z-10 py-6 text-center text-sm text-gray-600">
                &copy; 2024 Lightspeed Technical Services
            </footer>
        </div>
    )
}
