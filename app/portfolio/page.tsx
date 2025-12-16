"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ProjectCard, Project } from "@/components/portfolio/ProjectCard"

// --- Project Data ---
const PROJECTS: Project[] = [
    {
        id: "alpstreams",
        title: "Alpstreams Media Infrastructure",
        client: "Alpstreams Media",
        category: "Infrastructure",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80", // Server/Infra
        description: "Implemented high-performance network infrastructure for Alpstreams Media, ensuring low-latency content delivery and 99.99% uptime for their streaming services.",
        tags: ["Fiber Optics", "Cisco Meraki", "Data Center"]
    },
    {
        id: "unioss",
        title: "Unioss University Platform",
        client: "University of Nairobi",
        category: "Software",
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80", // Education/Software
        description: "Developed the United Network Intelligence and Optimization Security System (UNIOSS), a comprehensive campus management platform integrating security, student data, and network monitoring.",
        tags: ["React", "Node.js", "PostgreSQL", "Network Security"]
    },
    {
        id: "janaby",
        title: "Janaby Smart Home",
        client: "Private Residence",
        category: "Smart Home",
        image: "https://images.unsplash.com/photo-1507646227500-4d389b0012be?w=800&q=80", // Smart Home
        description: "A state-of-the-art smart home integration featuring voice-controlled lighting, automated climate control, and advanced perimeter security for the Janaby residence.",
        tags: ["Home Assistant", "IoT", "Smart Lighting", "CCTV"]
    },
    {
        id: "corporate-upgrade",
        title: "Corporate Network Upgrade",
        client: "Confidential Corp",
        category: "Infrastructure",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80", // Corporate Office
        description: "Overhauled the legacy network infrastructure for a leading corporate office, upgrading to WiFi 6E and implementing a zero-trust security architecture.",
        tags: ["WiFi 6E", "Fortinet", "Network Design"]
    },
    {
        id: "retail-security",
        title: "Retail Chain Security",
        client: "QuickMart",
        category: "Infrastructure",
        image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&q=80", // Retail Security
        description: "Deployed an integrated security system across 5 retail branches, including AI-powered video analytics for theft detection and inventory monitoring.",
        tags: ["AI Surveillance", "Access Control", "Remote Monitoring"]
    },
    {
        id: "hospital-network",
        title: "Hospital Network Design",
        client: "MedPlus Hospital",
        category: "Infrastructure",
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80", // Hospital
        description: "Designed and implemented a redundant, HIPAA-compliant network infrastructure for MedPlus Hospital, separating guest, staff, and medical device traffic.",
        tags: ["VLAN Segmentation", "Redundancy", "Healthcare IT"]
    }
]

const CATEGORIES = ["All", "Infrastructure", "Software", "Smart Home"]

export default function PortfolioPage() {
    const [activeCategory, setActiveCategory] = useState("All")

    const filteredProjects = activeCategory === "All"
        ? PROJECTS
        : PROJECTS.filter(project => project.category === activeCategory)

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="bg-primary/5 py-20">
                <div className="container px-4 text-center">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-4">
                        Our Work
                    </h1>
                    <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
                        Explore how we&apos;ve helped businesses and homes transform with technology.
                    </p>
                </div>
            </section>

            {/* Filter & Grid Section */}
            <section className="container px-4 py-12">
                {/* Filter Bar */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {CATEGORIES.map((category) => (
                        <Button
                            key={category}
                            variant={activeCategory === category ? "default" : "outline"}
                            onClick={() => setActiveCategory(category)}
                            className="rounded-full px-6"
                        >
                            {category}
                        </Button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </AnimatePresence>
                </div>

                {filteredProjects.length === 0 && (
                    <div className="text-center py-20 text-muted-foreground">
                        No projects found in this category.
                    </div>
                )}
            </section>
        </div>
    )
}
