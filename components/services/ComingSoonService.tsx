"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Bell, Check, Lock, Mail } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export function ComingSoonService() {
    const [email, setEmail] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate API call - replace with actual implementation
        await new Promise(resolve => setTimeout(resolve, 1000))

        setIsSubmitted(true)
        setIsSubmitting(false)
        setEmail("")

        // Reset after 3 seconds
        setTimeout(() => setIsSubmitted(false), 3000)
    }

    const features = [
        "Security audits",
        "Compliance consulting",
        "Security training and awareness",
        "Incident response and recovery",
        "Vulnerability assessments"
    ]

    return (
        <div className="min-h-screen bg-gradient-to-b from-background via-muted/30 to-background">
            {/* Hero Section */}
            <section className="py-20 md:py-32">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="p-6 bg-primary/10 rounded-full text-primary"
                        >
                            <Lock className="w-16 h-16" />
                        </motion.div>

                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="space-y-4"
                        >
                            <Badge variant="outline" className="px-4 py-2 text-sm border-primary/50">
                                Coming Q2 2025
                            </Badge>
                            <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl">
                                Cybersecurity Services
                                <br />
                                <span className="text-primary">Coming Soon</span>
                            </h1>
                            <p className="text-xl text-muted-foreground max-w-[600px]">
                                We&apos;re preparing comprehensive security solutions to protect your digital assets and ensure compliance
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 bg-muted/50">
                <div className="container px-4 md:px-6">
                    <div className="max-w-2xl mx-auto">
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            <h2 className="text-2xl font-bold text-center mb-8">What&apos;s Included</h2>
                            <div className="grid gap-4">
                                {features.map((feature, index) => (
                                    <motion.div
                                        key={feature}
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: 0.4 + index * 0.1 }}
                                        className="flex items-center gap-3 p-4 bg-background rounded-lg border border-border/50 hover:border-primary/50 transition-colors"
                                    >
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                                            <Check className="w-4 h-4 text-primary" />
                                        </div>
                                        <span className="text-base font-medium">{feature}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Email Notification Section */}
            <section className="py-16">
                <div className="container px-4 md:px-6">
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="max-w-xl mx-auto text-center space-y-6"
                    >
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold">Get Notified</h2>
                            <p className="text-muted-foreground">
                                Be the first to know when our cybersecurity services launch
                            </p>
                        </div>

                        {isSubmitted ? (
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="p-6 bg-green-500/10 border border-green-500/50 rounded-lg"
                            >
                                <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                                    <Check className="w-5 h-5" />
                                    <span className="font-medium">Thanks! We&apos;ll notify you when we launch.</span>
                                </div>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                                <div className="flex-1 relative">
                                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                    <Input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="pl-10 h-12"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        disabled={isSubmitting}
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    size="lg"
                                    className="h-12 px-8"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        "Submitting..."
                                    ) : (
                                        <>
                                            Notify Me
                                            <Bell className="ml-2 w-4 h-4" />
                                        </>
                                    )}
                                </Button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-primary/5">
                <div className="container px-4 md:px-6">
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="max-w-2xl mx-auto text-center space-y-6"
                    >
                        <h3 className="text-2xl font-bold">Need Urgent Security Help?</h3>
                        <p className="text-muted-foreground text-lg">
                            While we prepare our comprehensive cybersecurity services, we can still help with urgent security needs
                        </p>
                        <Button asChild size="lg" variant="default">
                            <Link href="/contact">
                                Contact Us Now
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                        </Button>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
