import Link from "next/link"
import Image from "next/image"
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
    Key
} from "lucide-react"

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
    Key
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

export function ServicePageTemplate({
    title,
    description,
    icon,
    features,
    process,
    technologies,
    subServices,
    pricing,
    caseStudy,
}: ServicePageProps) {
    const HeroIcon = getIcon(icon)

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="py-20 md:py-28 bg-muted/50">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto">
                        <div className="p-4 bg-primary/10 rounded-full text-primary mb-4">
                            <HeroIcon className="w-12 h-12" />
                        </div>
                        <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl">
                            {title}
                        </h1>
                        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                            {description}
                        </p>
                    </div>
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
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">What's Included</h2>
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
            <section className="py-20 bg-muted/30">
                <div className="container px-4 md:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Process</h2>
                        <p className="text-muted-foreground mt-2">How we deliver excellence.</p>
                    </div>
                    <div className="max-w-4xl mx-auto">
                        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-muted-foreground/20 before:to-transparent">
                            {process.map((step, index) => (
                                <FadeIn key={step.step} delay={index * 0.1} direction={index % 2 === 0 ? "left" : "right"}>
                                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 text-primary font-bold">
                                            {step.step}
                                        </div>
                                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-card rounded-lg border border-border/50 shadow-sm transition-all hover:shadow-md hover:-translate-y-1">
                                            <h3 className="font-bold text-lg mb-1">{step.title}</h3>
                                            <p className="text-muted-foreground text-sm">{step.description}</p>
                                        </div>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Technologies */}
            <section className="py-20 bg-background">
                <div className="container px-4 md:px-6 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8">Technologies We Use</h2>
                    <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
                        {technologies.map((tech, index) => (
                            <FadeIn key={tech} delay={index * 0.05} direction="up">
                                <Badge variant="secondary" className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default">
                                    {tech}
                                </Badge>
                            </FadeIn>
                        ))}
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
