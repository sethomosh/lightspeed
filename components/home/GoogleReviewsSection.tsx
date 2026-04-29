"use client"

import React from "react"
import { motion } from "framer-motion"
import { Star, ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"

const reviews = [
    {
        id: 1,
        stars: 5,
        text: "Stratum delivered our full office network from scratch. From the site survey to final handover, every step was professional and on schedule. The team clearly knows what they're doing — our network has been rock solid since day one.",
        name: "James Mwangi",
        company: "Savanna Capital Group",
        initials: "JM",
        badge: "Network Solutions",
    },
    {
        id: 2,
        stars: 5,
        text: "We had persistent WiFi issues across our facility for months. Stratum came in, diagnosed the problem in one visit, and had everything working properly within two days. Fast, clean, and no unnecessary upselling.",
        name: "Amina Hassan",
        company: "Westlands Medical Centre",
        initials: "AH",
        badge: "Network Solutions",
    },
    {
        id: 3,
        stars: 5,
        text: "The smart home setup Stratum built for us is genuinely impressive. Everything — lighting, security, climate — runs through one dashboard. Installation was clean and the handover training was thorough. Highly recommend.",
        name: "David Kariuki",
        company: "Private Residence, Karen",
        initials: "DK",
        badge: "Smart Home",
    },
]

import { useReducedMotion } from "framer-motion"
import { NoiseBackground } from "@/components/ui/SectionBackgrounds"

function StarRating({ count }: { count: number }) {
    return (
        <div className="flex gap-0.5">
            {[...Array(count)].map((_, i) => (
                <Star key={i} size={16} fill="#F5A623" stroke="#F5A623" />
            ))}
        </div>
    )
}

export function GoogleReviewsSection() {
    const prefersReducedMotion = useReducedMotion()

    return (
        <section className="py-24 bg-surface border-t border-brand relative z-10 overflow-hidden">
            <NoiseBackground />
            <div className="container px-4 md:px-6 max-w-6xl mx-auto relative z-10">
                <div className="flex flex-col items-center text-center mb-16">
                    <span className="text-label text-prussian bg-blue-light px-3 py-1 rounded-full mb-4">
                        CLIENT STORIES
                    </span>
                    <h2 className="font-display font-bold text-primary mb-4">
                        What Our Clients Say
                    </h2>
                    <p className="font-body text-text-muted-brand max-w-2xl">
                        Trusted by businesses across Kenya to deliver infrastructure that works.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reviews.map((review, index) => {
                        const isFeaturedTop = index === 0
                        const isFullWidth = index === 2

                        return (
                            <motion.div
                                key={review.id}
                                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className={cn(
                                    "group relative bg-surface-raised border border-brand rounded-2xl p-6 md:p-8 transition-all duration-200 hover:border-prussian/30 hover:shadow-lg flex flex-col justify-between",
                                    isFeaturedTop && "lg:col-span-2",
                                    isFullWidth && "lg:col-span-3"
                                )}
                            >
                                <div>
                                    <div className="absolute top-4 right-8 font-display text-[80px] leading-none text-prussian/5 pointer-events-none select-none">
                                        &ldquo;
                                    </div>
                                    
                                    <div className="flex flex-col gap-4">
                                        {isFeaturedTop && (
                                            <span className="w-fit bg-blue-light text-prussian text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                                                Featured Review
                                            </span>
                                        )}
                                        <StarRating count={review.stars} />
                                    </div>
                                    
                                    <p className={cn(
                                        "font-body text-text-secondary leading-[1.75] mt-6 relative z-10",
                                        isFeaturedTop ? "text-[17px] font-medium" : "text-[15px]"
                                    )}>
                                        {review.text}
                                    </p>
                                </div>

                                <div className={cn(
                                    "border-t border-brand mt-8 pt-6 flex items-center justify-between",
                                    isFullWidth && "flex-col md:flex-row gap-6"
                                )}>
                                    <div className={cn("flex items-center gap-4", isFullWidth && "md:w-2/3")}>
                                        <div className={cn(
                                            "rounded-full bg-prussian/10 flex items-center justify-center text-prussian font-display font-bold shrink-0",
                                            isFeaturedTop ? "w-[52px] h-[52px] text-lg" : "w-10 h-10 text-sm"
                                        )}>
                                            {review.initials}
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="font-body font-600 text-[14px] text-primary leading-tight">
                                                {review.name}
                                            </span>
                                            <span className="font-body text-[12px] text-text-muted-brand">
                                                {review.company}
                                            </span>
                                        </div>
                                    </div>
                                    <span className={cn(
                                        "bg-blue-light text-prussian text-xs font-body font-500 px-3 py-1 rounded-full whitespace-nowrap",
                                        isFullWidth && "md:self-center"
                                    )}>
                                        {review.badge}
                                    </span>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>

                <div className="mt-16 text-center space-y-6">
                    <p className="font-body text-[14px] text-text-muted-brand max-w-md mx-auto">
                        Had a great experience with us? We&apos;d love to hear from you — share your feedback on Google.
                    </p>
                    <a 
                        href="https://g.page/r/TODO-seth-to-add-gbp-link" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-4 bg-surface-raised border border-brand rounded-full px-6 py-3 transition-all duration-200 hover:border-prussian/40 hover:shadow-md group"
                    >
                        <div className="flex gap-1.5">
                            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "#4285F4" }}></span>
                            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "#EA4335" }}></span>
                            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "#FBBC05" }}></span>
                        </div>
                        <span className="font-body text-[14px] font-500 text-primary">
                            Leave us a review on Google
                        </span>
                        <ExternalLink size={14} className="text-text-muted-brand transition-colors group-hover:text-prussian" />
                    </a>
                </div>
            </div>
        </section>
    )
}
