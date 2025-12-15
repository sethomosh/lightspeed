import Link from "next/link"
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
    CardFooter,
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

export function ServicesGrid() {
    return (
        <section className="py-20 bg-background/50">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center text-center space-y-4 mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Our Expertise
                    </h2>
                    <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Comprehensive technology solutions designed to scale with your ambition.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => {
                        const Icon = getIcon(service.icon)
                        return (
                            <FadeIn key={service.title} delay={index * 0.1} className="h-full">
                                <Card
                                    className="group relative overflow-hidden border-border/50 bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/50 h-full flex flex-col"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                    <CardHeader>
                                        <div className="mb-4 w-fit rounded-lg bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                                            <Icon className="h-6 w-6" />
                                        </div>
                                        <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex-grow">
                                        <CardDescription className="text-base text-muted-foreground">
                                            {service.description}
                                        </CardDescription>
                                    </CardContent>
                                    <CardFooter>
                                        <Link
                                            href={`/services/${service.slug}`}
                                            className="inline-flex items-center text-sm font-medium text-primary transition-colors hover:text-primary/80"
                                        >
                                            {service.status === 'coming-soon' ? 'Coming Soon' : 'Learn More'}
                                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                        </Link>
                                    </CardFooter>
                                </Card>
                            </FadeIn>
                        )
                    })}

                </div>
            </div >
        </section >
    )
}
