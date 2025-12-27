'use client'

import { getTechLogo } from '@/lib/tech-logos'
import { useState } from 'react'
import { FadeIn } from '@/components/ui/fade-in'

interface TechnologyGridProps {
    technologies: string[]
}

export default function TechnologyGrid({ technologies }: TechnologyGridProps) {
    return (
        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
            {technologies.map((tech, index) => (
                <FadeIn key={tech} delay={index * 0.05} direction="up">
                    <TechCard name={tech} />
                </FadeIn>
            ))}
        </div>
    )
}

function TechCard({ name }: { name: string }) {
    const [imgError, setImgError] = useState(false)

    if (imgError) {
        // Fallback: show text badge if logo fails to load
        return (
            <div className="flex items-center justify-center px-5 py-3 bg-muted/50 border border-border/50 rounded-xl min-w-[120px]">
                <span className="text-sm font-medium text-muted-foreground">
                    {name}
                </span>
            </div>
        )
    }

    return (
        <div className="group flex items-center gap-3 px-5 py-3 bg-card border border-border/50 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            <div className="relative w-6 h-6 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={getTechLogo(name)}
                    alt={`${name} logo`}
                    className="w-full h-full object-contain"
                    onError={() => setImgError(true)}
                    loading="lazy"
                />
            </div>
            <span className="font-medium text-sm text-foreground/80 group-hover:text-foreground transition-colors">
                {name}
            </span>
        </div>
    )
}
