"use client"

import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowUpRight, Shield, Code2, Cpu } from "lucide-react"

import { cn } from "@/lib/utils"
import { TiltCard } from "@/components/ui/reactbits/TiltCard"
import { SplitText } from "@/components/ui/reactbits/SplitText"
// We use the editorial content provided in the prompt
const services = [
    {
        number: "01",
        slug: "network-solutions",
        title: "Network Solutions",
        description: "Enterprise-grade network design and deployment for businesses and homes.",
        editorial: "Stratum designs and deploys enterprise-grade networks using Ubiquiti, Cisco, and MikroTik hardware. From structured cabling to WiFi coverage.",
        icon: "ubiquiti",
    },
    {
        number: "02",
        slug: "smart-home-automation",
        title: "Smart Home Automation",
        description: "Intelligent, connected environments built around how you actually live.",
        editorial: "We transform homes with Home Assistant and best-in-class smart devices. Automated lighting, climate control, and voice integration.",
        icon: "homeassistant",
    },
    {
        number: "03",
        slug: "security-systems",
        title: "Security Systems",
        description: "IP CCTV grids, NAS-based local recording, and cloud-connected surveillance.",
        editorial: "Our security installations cover local and cloud-connected surveillance accessible from anywhere. Designed for homes and offices.",
        icon: "shield", // Shield icon for security
    },
    {
        number: "04",
        slug: "devops-consulting",
        title: "DevOps & Infrastructure",
        description: "Modernising infrastructure with Docker, Kubernetes, and CI/CD pipelines.",
        editorial: "We help startups scale with automation. Stop managing servers manually — let us build the automation layer your team needs.",
        icon: "docker",
    },
    {
        number: "05",
        slug: "business-solutions",
        title: "Software Solutions",
        description: "Custom API integrations and business process automation.",
        editorial: "Replace manual workflows with reliable, scalable systems. We build the software layer that makes your operations run faster.",
        icon: "code", // Code icon
    },
    {
        number: "06",
        slug: "computer-solutions",
        title: "Computing & Storage",
        description: "Custom workstations, servers, and TrueNAS storage systems.",
        editorial: "Spec'd and optimized for your exact workload. Every build is built for performance — no off-the-shelf compromises.",
        icon: "cpu", // Cpu icon
    },
]

import { EtherBackground } from "@/components/ui/SectionBackgrounds"

function ServiceCard({ service, index }: { service: any; index: number }) {
    const prefersReducedMotion = useReducedMotion()

    const getIcon = (iconName: string, color: string = "var(--color-prussian)") => {
        const isSignal = color.includes("signal")
        const hexColor = isSignal ? "E8420A" : "1B3A6B"
        const finalColorClass = isSignal ? "text-signal" : "text-prussian"

        if (iconName === "shield") return <Shield size={20} className={finalColorClass} />
        if (iconName === "code") return <Code2 size={20} className={finalColorClass} />
        if (iconName === "cpu") return <Cpu size={20} className={finalColorClass} />
        return (
            <img 
                src={`https://cdn.simpleicons.org/${iconName}/${hexColor}`} 
                alt="" 
                className="w-5 h-5 object-contain"
            />
        )
    }

    const isWide = index === 0 || index === 5
    const isTall = index === 4

    return (
        <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className={cn(
                "group block h-full w-full",
                index === 0 && "lg:col-span-2",
                index === 1 && "lg:col-span-1",
                index === 2 && "lg:col-span-1",
                index === 3 && "lg:col-span-1",
                index === 4 && "lg:col-span-1 lg:row-span-2",
                index === 5 && "lg:col-span-2"
            )}
        >
            <TiltCard maxTilt={6}>
                <div className="relative bg-surface border border-brand rounded-2xl p-6 md:p-8 h-full transition-all duration-[250ms] ease-out hover:border-prussian/30 hover:shadow-[0_8px_32px_rgba(27,58,107,0.08)] flex flex-col overflow-hidden">
                    {/* Decorative Backgrounds for Wide Cards */}
                    {index === 0 && (
                        <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03] pointer-events-none group-hover:opacity-[0.05] transition-opacity duration-500">
                             <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="200" cy="200" r="1.5" fill="currentColor" />
                                <circle cx="300" cy="150" r="1.5" fill="currentColor" />
                                <circle cx="100" cy="250" r="1.5" fill="currentColor" />
                                <path d="M200 200L300 150M200 200L100 250M300 150L350 200M100 250L50 200" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                            </svg>
                        </div>
                    )}
                    {index === 5 && (
                        <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03] pointer-events-none group-hover:opacity-[0.05] transition-opacity duration-500">
                            <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 100H100V0M100 100H200M200 100V200H300M300 200H400" stroke="currentColor" strokeWidth="1" />
                                <rect x="95" y="95" width="10" height="10" fill="currentColor" />
                                <rect x="195" y="195" width="10" height="10" fill="currentColor" />
                            </svg>
                        </div>
                    )}

                    <div className="flex items-center justify-between relative z-10">
                        <span className={cn(
                            "font-body text-[11px] font-600 px-2.5 py-0.5 rounded-full inline-block",
                            index % 2 === 0 ? "text-prussian bg-blue-light" : "text-signal bg-signal-light"
                        )}>
                            {service.number}
                        </span>
                        <div className={cn(
                            "w-11 h-11 rounded-xl flex items-center justify-center shrink-0",
                            index % 2 === 0 ? "bg-blue-light" : "bg-signal-light"
                        )}>
                            {index % 2 === 0 ? getIcon(service.icon, "var(--color-prussian)") : getIcon(service.icon, "var(--color-signal)")}
                        </div>
                    </div>

                    <div className={cn("mt-6 relative z-10", isWide && "max-w-md")}>
                        <h3 className={cn(
                            "font-display font-600 text-primary",
                            isWide ? "text-[22px] md:text-[24px]" : "text-[18px]"
                        )}>
                            {service.title}
                        </h3>
                        
                        <p className="font-body text-[13px] text-text-muted-brand mt-2 leading-relaxed">
                            {service.description}
                        </p>

                        <p className={cn(
                            "font-body font-300 text-[13px] text-text-muted-brand/80 leading-relaxed",
                            isWide ? "mt-4 text-[14px]" : "mt-3"
                        )}>
                            {service.editorial}
                        </p>
                    </div>

                    <div className="mt-auto pt-6 flex items-center justify-between relative z-10">
                        <Link 
                            href={`/services/${service.slug}`}
                            className="inline-block font-body text-[13px] font-500 text-prussian underline underline-offset-4 hover:text-blue transition-colors w-fit"
                        >
                            Learn more
                        </Link>
                        <ArrowUpRight 
                            size={16} 
                            className="text-prussian transition-all duration-250 opacity-0 transform translate-x-0 group-hover:opacity-100 group-hover:translate-x-1" 
                        />
                    </div>
                </div>
            </TiltCard>
        </motion.div>
    )
}

export function ServicesGrid({ showHeading = true }: { showHeading?: boolean }) {
    return (
        <section id="services" className="py-24 bg-base relative z-10 overflow-hidden">
            <EtherBackground />
            <div className="container px-4 md:px-6 max-w-6xl mx-auto relative z-10">
                {showHeading && (
                    <div className="flex flex-col items-start gap-4 mb-16 max-w-2xl">
                        <span className="text-label text-prussian">Solutions</span>
                        <h2 className="font-display font-bold text-primary">
                            <SplitText text="What We Build" delay={0.2} />
                        </h2>
                        <p className="font-body text-text-muted-brand">
                            Six solution verticals. Building infrastructure that lasts.
                        </p>
                        <div className="w-10 h-0.5 bg-prussian mt-2 rounded-full" />
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
                    {services.map((service, index) => (
                        <ServiceCard key={service.slug} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}
