"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import {
    Network,
    Home,
    Shield,
    Briefcase,
    Monitor,
    MessageSquare,
    ArrowRight,
    Map,
    Hammer,
    Server,
    Wifi,
    Activity,
    Mic,
    Lightbulb,
    Thermometer,
    Lock,
    Tv,
    Cpu,
    Smartphone,
    Camera,
    Eye,
    Database,
    Bell,
    Fingerprint,
    Link as LinkIcon,
    Watch,
    Settings,
    GitBranch,
    Code,
    Box,
    Layers,
    DollarSign,
    Book,
    Globe,
    Webhook,
    Cloud,
    Compass,
    TrendingUp,
    Users,
    Laptop,
    Download,
    HelpCircle,
    Save,
    Headphones,
    Wrench,
    HardDrive,
    Key
} from "lucide-react"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { FadeIn } from "@/components/ui/fade-in"
import { services } from "@/lib/services-data"

const AccessIcon = {
    Network,
    Home,
    Shield,
    Briefcase,
    Monitor,
    MessageSquare,
    Map,
    Hammer,
    Server,
    Wifi,
    Activity,
    Mic,
    Lightbulb,
    Thermometer,
    Lock,
    Tv,
    Cpu,
    Smartphone,
    Camera,
    Eye,
    Database,
    Bell,
    Fingerprint,
    Link: LinkIcon,
    Watch,
    Settings,
    GitBranch,
    Code,
    Box,
    Layers,
    DollarSign,
    Book,
    Globe,
    Webhook,
    Cloud,
    Compass,
    TrendingUp,
    Users,
    Laptop,
    Download,
    HelpCircle,
    Save,
    Headphones,
    Tool: Wrench,
    HardDrive,
    Key
}

const getIcon = (name: string) => {
    // @ts-ignore
    return AccessIcon[name] || Activity
}

interface ServicesGridProps {
    showHeading?: boolean
}

export function ServicesGrid({ showHeading = true }: ServicesGridProps) {
    return (
        <section className="py-20 bg-background/50">
            <div className="container px-4 md:px-6">
                {showHeading && (
                    <div className="flex flex-col items-center justify-center text-center space-y-4 mb-12">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            Our Expertise
                        </h2>
                        <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Comprehensive technology solutions designed to scale with your ambition.
                        </p>
                    </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => {
                        const Icon = getIcon(service.icon)
                        return (
                            <FadeIn key={service.title} delay={index * 0.1} className="h-full">
                                <Link
                                    href={`/services/${service.slug}`}
                                    className="block h-full group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg"
                                    tabIndex={0}
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.02, y: -8 }}
                                        transition={{ duration: 0.3, ease: "easeOut" }}
                                        className="h-full"
                                    >
                                        <Card
                                            className="relative overflow-hidden border-border/50 bg-card transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/50 h-full flex flex-col cursor-pointer"
                                        >
                                            {/* Background gradient on hover */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                                            {/* Blue border glow on hover */}
                                            <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_15px_rgba(59,130,246,0.5)]" />

                                            {/* Top-right arrow indicator - appears on hover */}
                                            <motion.div
                                                initial={{ opacity: 0, x: -10 }}
                                                whileHover={{ opacity: 1, x: 0 }}
                                                className="absolute top-4 right-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            >
                                                <ArrowRight className="h-5 w-5" />
                                            </motion.div>

                                            <CardHeader className="relative">
                                                <div className="mb-4 w-fit rounded-lg bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                                                    <Icon className="h-6 w-6" />
                                                </div>
                                                <CardTitle className="text-xl font-bold pr-8">
                                                    {service.title}
                                                </CardTitle>
                                            </CardHeader>

                                            <CardContent className="flex-grow relative">
                                                <CardDescription className="text-base text-muted-foreground">
                                                    {service.description}
                                                </CardDescription>

                                                {/* Status indicator for coming soon */}
                                                {service.status === 'coming-soon' && (
                                                    <div className="mt-4">
                                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                                                            Coming Soon
                                                        </span>
                                                    </div>
                                                )}
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                </Link>
                            </FadeIn>
                        )
                    })}

                </div>
            </div >
        </section >
    )
}
