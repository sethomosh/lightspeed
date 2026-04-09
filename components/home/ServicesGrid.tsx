"use client"

import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowUpRight, Shield, Code2, Cpu } from "lucide-react"

import { cn } from "@/lib/utils"
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

function ServiceCard({ service, index }: { service: any; index: number }) {
    const prefersReducedMotion = useReducedMotion()

    const getIcon = (iconName: string) => {
        if (iconName === "shield") return <Shield size={20} className="text-prussian" />
        if (iconName === "code") return <Code2 size={20} className="text-prussian" />
        if (iconName === "cpu") return <Cpu size={20} className="text-prussian" />
        return (
            <img 
                src={`https://cdn.simpleicons.org/${iconName}/1B3A6B`} 
                alt="" 
                className="w-5 h-5 object-contain"
            />
        )
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="group"
        >
            <div className="relative bg-surface border border-brand rounded-2xl p-6 h-full transition-all duration-[250ms] ease-out hover:border-prussian/30 hover:shadow-[0_8px_32px_rgba(27,58,107,0.08)] hover:-translate-y-[3px] flex flex-col">
                <div className="flex items-center justify-between">
                    <span className="font-body text-[11px] font-600 text-prussian bg-blue-light px-2.5 py-0.5 rounded-full inline-block">
                        {service.number}
                    </span>
                    <div className="w-11 h-11 bg-blue-light rounded-xl flex items-center justify-center shrink-0">
                        {getIcon(service.icon)}
                    </div>
                </div>

                <h3 className="font-display font-600 text-[18px] text-primary mt-6">
                    {service.title}
                </h3>
                
                <p className="font-body text-[13px] text-text-muted-brand mt-2 leading-relaxed">
                    {service.description}
                </p>

                <p className="font-body font-300 text-[13px] text-text-muted-brand/80 mt-3 leading-relaxed">
                    {service.editorial}
                </p>

                <Link 
                    href={`/services/${service.slug}`}
                    className="mt-4 inline-block font-body text-[13px] font-500 text-prussian underline underline-offset-4 hover:text-blue transition-colors w-fit"
                >
                    Learn more
                </Link>

                <div className="mt-auto pt-4 flex justify-end">
                    <ArrowUpRight 
                        size={16} 
                        className="text-prussian transition-all duration-250 opacity-0 transform translate-x-0 group-hover:opacity-100 group-hover:translate-x-1" 
                    />
                </div>
            </div>
        </motion.div>
    )
}

export function ServicesGrid() {
    return (
        <section id="services" className="py-24 bg-base relative z-10">
            <div className="container px-4 md:px-6 max-w-6xl mx-auto">
                <div className="flex flex-col items-start gap-4 mb-16 max-w-2xl">
                    <span className="text-label text-prussian">Solutions</span>
                    <h2 className="font-display font-bold text-primary">What We Build</h2>
                    <p className="font-body text-text-muted-brand">
                        Six solution verticals. One team. No subcontracting.
                    </p>
                    <div className="w-10 h-0.5 bg-prussian mt-2 rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <ServiceCard key={service.slug} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}
