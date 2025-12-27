"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"

import { cn } from "@/lib/utils"
import {
    ArrowRight,
    Check,
    CheckCircle2,
    Circle,
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
    Key,
    ClipboardList,
    PenTool,
    Rocket,
    ShieldCheck
} from "lucide-react"

import TechnologyGrid from "@/components/services/TechnologyGrid"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CTASection } from "@/components/home/CTASection"
import { FadeIn } from "@/components/ui/fade-in"

// Map of icon names to components
const IconMap: Record<string, React.ComponentType<{ className?: string }>> = {
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
    Wrench,
    HardDrive,
    Key,
    ClipboardList,
    PenTool,
    Rocket,
    ShieldCheck
}

interface ServicePageProps {
    title: string
    description: string
    icon: string
    features: Array<{
        title: string
        description?: string
        icon?: string
    }>
    process: Array<{
        step: number
        title: string
        description?: string
    }>
    technologies: string[]
    subServices?: string[]
    pricing?: {
        starter: { price: string; features: string[] }
        professional: { price: string; features: string[] }
        enterprise: { price: string; features: string[] }
    }
    heroImage: string
    imagePosition?: string
    caseStudy?: {
        title: string
        description: string
        image: string
    }
}

// Icon helper
const getIcon = (name?: string): React.ComponentType<{ className?: string }> => {
    if (!name) return Circle
    return IconMap[name] || Circle
}

// Process Step Icon Helper
const getStepIcon = (step: number): React.ComponentType<{ className?: string }> => {
    switch (step) {
        case 1: return MessageSquare // Consultation/Discovery
        case 2: return Map // Planning/Survey
        case 3: return ClipboardList // Design/Selection
        case 4: return Hammer // Installation/Implementation
        case 5: return Settings // Configuration/Testing
        case 6: return Rocket // Launch/Training
        case 7: return ShieldCheck // Support/Maintenance
        default: return Layers
    }
}

export function ServicePageTemplate({
    title,
    description,
    icon,
    features,
    process,
    technologies,
    subServices,
    pricing,
    heroImage,
    imagePosition = "center",
    caseStudy,
}: ServicePageProps) {
    const HeroIcon = getIcon(icon)

    return (
        <div className="flex flex-col min-h-screen">
            <section
                className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden"
            >
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src={heroImage || "https://images.unsplash.com/photo-1558494949-ef8b56b3b243"}
                        alt={`${title} background`}
                        fill
                        priority
                        className="object-cover"
                        style={{ objectPosition: imagePosition }}
                        sizes="100vw"
                    />
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/60" />
                </div>

                {/* Hero Content */}
                <div className="container relative z-10 px-4 md:px-6 py-20">
                    <FadeIn direction="up">
                        <div className="flex flex-col items-center text-center space-y-6 max-w-4xl mx-auto text-white">
                            <div className="p-4 bg-primary/20 backdrop-blur-sm rounded-full text-primary mb-6 border border-primary/30 shadow-xl">
                                <HeroIcon className="w-16 h-16" />
                            </div>
                            <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-lg leading-tight">
                                {title}
                            </h1>
                            <p className="mx-auto max-w-[800px] text-zinc-100 md:text-2xl font-medium drop-shadow-md leading-relaxed">
                                {description}
                            </p>
                            <div className="mt-10 pt-4">
                                <Button size="lg" className="text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300" asChild>
                                    <Link href="/contact">Get Free Quote</Link>
                                </Button>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Sub-Services List */}
            {subServices && subServices.length > 0 && (
                <section className="py-12 bg-background border-b">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
                            {subServices.map((sub, index) => (
                                <FadeIn key={sub} delay={index * 0.05} direction="up">
                                    <div className="flex items-center space-x-2 bg-muted/50 px-4 py-2 rounded-full border border-border/50">
                                        <Check className="w-4 h-4 text-primary" />
                                        <span className="text-sm font-medium">{sub}</span>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Features Grid */}
            <section className="py-20 bg-background">
                <div className="container px-4 md:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">What&apos;s Included</h2>
                        <p className="text-muted-foreground mt-2">Everything you need to succeed.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, index) => {
                            const FeatureIcon = getIcon(feature.icon)
                            return (
                                <FadeIn key={feature.title} delay={index * 0.1}>
                                    <Card className="bg-card border-border/50 hover:shadow-lg transition-all h-full">
                                        <CardHeader>
                                            {feature.icon && (
                                                <FeatureIcon className="w-8 h-8 text-primary mb-2" />
                                            )}
                                            <CardTitle className="text-lg">{feature.title}</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            {feature.description && (
                                                <p className="text-sm text-muted-foreground">{feature.description}</p>
                                            )}
                                        </CardContent>
                                    </Card>
                                </FadeIn>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Process Timeline */}
            <section className="py-24 bg-muted/20 relative overflow-hidden">
                <div className="container px-4 md:px-6 relative z-10">
                    <div className="text-center mb-20">
                        <Badge variant="outline" className="mb-4 px-4 py-1 border-primary/20 text-primary bg-primary/5 rounded-full">
                            Workflow
                        </Badge>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Process</h2>
                        <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
                            A clear, structured approach to delivering results, every single time.
                        </p>
                    </div>

                    <div className="max-w-6xl mx-auto relative">
                        {/* Central Line (Desktop) */}
                        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent -translate-x-1/2 hidden md:block" />

                        <div className="space-y-20">
                            {process.map((step, index) => {
                                const isEven = index % 2 === 0
                                return (
                                    <div
                                        key={step.step}
                                        className={cn(
                                            "flex flex-col md:flex-row items-center gap-8 md:gap-0",
                                            !isEven ? "md:flex-row-reverse" : ""
                                        )}
                                    >
                                        {/* Content Side */}
                                        <div className={cn(
                                            "flex-1 w-full md:w-1/2 relative",
                                            isEven ? "md:text-right md:pr-16" : "md:text-left md:pl-16"
                                        )}>
                                            <FadeIn direction={isEven ? "left" : "right"}>
                                                <div className="flex flex-col gap-4 items-center md:items-stretch">
                                                    <div className={cn("hidden md:flex items-center gap-2 mb-2 text-primary font-bold tracking-widest uppercase text-sm", isEven ? "justify-end" : "justify-start")}>
                                                        <span className="w-8 h-px bg-primary"></span>
                                                        Step {step.step}
                                                    </div>
                                                    <h3 className="text-2xl md:text-3xl font-bold">{step.title}</h3>
                                                    <p className="text-muted-foreground text-lg leading-relaxed">{step.description}</p>
                                                    <div className={cn("flex mt-2", isEven ? "md:justify-end" : "md:justify-start")}>
                                                        {step.description && (
                                                            <div className="p-2 bg-background border rounded-lg shadow-sm inline-block">
                                                                <CheckCircle2 className="w-5 h-5 text-green-500" />
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </FadeIn>
                                        </div>

                                        {/* Center Point */}
                                        <div className="relative z-10 flex items-center justify-center">
                                            <div className="w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg md:absolute md:left-1/2 md:-translate-x-1/2 ring-4 ring-primary/10" />
                                        </div>

                                        {/* Visual Side (Icon Illustration) */}
                                        <div className={cn(
                                            "flex-1 w-full md:w-1/2",
                                            isEven ? "md:pl-16" : "md:pr-16"
                                        )}>
                                            <FadeIn direction={isEven ? "right" : "left"} delay={0.2}>
                                                <div className={cn(
                                                    "relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden border border-border/50 bg-gradient-to-br from-primary/5 via-background to-primary/5 p-8 flex items-center justify-center group hover:shadow-2xl transition-all duration-500",
                                                    isEven ? "rounded-bl-[4rem]" : "rounded-br-[4rem]"
                                                )}>
                                                    {/* Decorative Gradients */}
                                                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/20 transition-colors duration-500" />
                                                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 group-hover:bg-blue-500/20 transition-colors duration-500" />

                                                    {/* Ghosted Background Icon */}
                                                    <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-500 pointer-events-none select-none">
                                                        {(() => {
                                                            const StepIcon = getStepIcon(step.step)
                                                            return <StepIcon className="w-64 h-64 rotate-12" />
                                                        })()}
                                                    </div>

                                                    {/* Foreground Icon */}
                                                    <div className="relative z-10 flex flex-col items-center gap-6 group-hover:-translate-y-2 transition-transform duration-500">
                                                        <div className="w-24 h-24 rounded-2xl bg-background border border-border/50 shadow-xl flex items-center justify-center relative overflow-hidden group-hover:scale-110 transition-transform duration-500">
                                                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                                            {(() => {
                                                                const StepIcon = getStepIcon(step.step)
                                                                return <StepIcon className="w-10 h-10 text-primary" />
                                                            })()}
                                                        </div>
                                                        <div className="text-center">
                                                            <span className="text-4xl font-bold text-foreground/10 group-hover:text-primary/20 transition-colors duration-500">
                                                                0{step.step}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </FadeIn>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Technologies */}
            <section className="py-20 bg-background">
                <div className="container px-4 md:px-6 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8">Technologies We Use</h2>
                    <div className="mt-8">
                        <TechnologyGrid technologies={technologies} />
                    </div>
                </div>
            </section>

            {/* Case Study (Optional) */}
            {caseStudy && (
                <section className="py-20 bg-muted/50">
                    <div className="container px-4 md:px-6">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
                                <Image
                                    src={caseStudy.image}
                                    alt={caseStudy.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="space-y-4">
                                <Badge>Success Story</Badge>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                                    {caseStudy.title}
                                </h2>
                                <p className="text-muted-foreground text-lg">
                                    {caseStudy.description}
                                </p>
                                <Button asChild>
                                    <Link href="/portfolio">
                                        Read Full Story <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Pricing */}
            {pricing && (
                <section className="py-20 bg-background">
                    <div className="container px-4 md:px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Investment</h2>
                            <p className="text-muted-foreground mt-2">Packages designed for every stage.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {/* Starter */}
                            <FadeIn delay={0.1}>
                                <div className="flex flex-col p-6 bg-card border border-border rounded-xl shadow-sm hover:shadow-md transition-all h-full">
                                    <h3 className="text-xl font-bold mb-2">Starter</h3>
                                    <div className="text-3xl font-bold mb-6">{pricing.starter.price}</div>
                                    <ul className="space-y-3 mb-6 flex-grow">
                                        {pricing.starter.features.map((feature) => (
                                            <li key={feature} className="flex items-start text-sm text-muted-foreground">
                                                <Check className="mr-2 h-4 w-4 text-green-500 shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <Button variant="outline" className="w-full">Get Started</Button>
                                </div>
                            </FadeIn>
                            {/* Professional */}
                            <FadeIn delay={0.2} className="h-full">
                                <div className="flex flex-col p-6 bg-primary/5 border border-primary/20 rounded-xl shadow-lg relative transform md:-translate-y-4 h-full">
                                    <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">POPULAR</div>
                                    <h3 className="text-xl font-bold mb-2 text-primary">Professional</h3>
                                    <div className="text-3xl font-bold mb-6">{pricing.professional.price}</div>
                                    <ul className="space-y-3 mb-6 flex-grow">
                                        {pricing.professional.features.map((feature) => (
                                            <li key={feature} className="flex items-start text-sm">
                                                <CheckCircle2 className="mr-2 h-4 w-4 text-primary shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <Button className="w-full">Get Started</Button>
                                </div>
                            </FadeIn>
                            {/* Enterprise */}
                            <FadeIn delay={0.3}>
                                <div className="flex flex-col p-6 bg-card border border-border rounded-xl shadow-sm hover:shadow-md transition-all h-full">
                                    <h3 className="text-xl font-bold mb-2">Enterprise</h3>
                                    <div className="text-3xl font-bold mb-6">{pricing.enterprise.price}</div>
                                    <ul className="space-y-3 mb-6 flex-grow">
                                        {pricing.enterprise.features.map((feature) => (
                                            <li key={feature} className="flex items-start text-sm text-muted-foreground">
                                                <Check className="mr-2 h-4 w-4 text-green-500 shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <Button variant="outline" className="w-full">Contact Sales</Button>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </section>
            )}

            <CTASection />
        </div>
    )
}
