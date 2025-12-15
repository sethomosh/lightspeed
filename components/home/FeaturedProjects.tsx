import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const projects = [
    {
        title: "Alpstreams Media Infrastructure",
        description: "Designed 100TB video infrastructure with 10GbE networking and secure client portal. Optimized for high-throughput media streaming and low-latency access.",
        tags: ["Hardware", "Network", "Storage", "API"],
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop", // Server room
        href: "/portfolio/alpstreams",
    },
    {
        title: "UNIOSS (Unified Network Intelligence and Optimization Security System)",
        description: "Built complete student management system with real-time features. Includes attendance tracking, grade management, and secure parent portals.",
        tags: ["Full-Stack", "Real-time", "Architecture"],
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop", // Coding / Laptop
        href: "/portfolio/unioss",
    },
]

export function FeaturedProjects() {
    return (
        <section className="py-20 bg-background">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end mb-12">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            Featured Works
                        </h2>
                        <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                            Delivering mission-critical solutions for industry leaders.
                        </p>
                    </div>
                    <Button variant="outline" asChild>
                        <Link href="/portfolio">
                            View All Projects
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <Card
                            key={project.title}
                            className="group overflow-hidden border-border/50 bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary/50 flex flex-col h-full"
                        >
                            <div className="relative aspect-video w-full overflow-hidden bg-muted">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    placeholder="blur"
                                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
                                />
                                <div className="absolute inset-0 bg-black/20 transition-opacity group-hover:opacity-0" />
                            </div>
                            <CardHeader className="space-y-2">
                                <div className="flex flex-wrap gap-2 mb-2">
                                    {project.tags.map((tag) => (
                                        <Badge key={tag} variant="secondary" className="font-normal text-xs uppercase tracking-wide">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                                <CardTitle className="text-2xl font-bold leading-tight group-hover:text-primary transition-colors">
                                    {project.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <CardDescription className="text-base leading-relaxed">
                                    {project.description}
                                </CardDescription>
                            </CardContent>
                            <CardFooter className="pt-4">
                                <Button asChild variant="ghost" className="p-0 hover:bg-transparent hover:text-primary group-hover:translate-x-1 transition-all">
                                    <Link href={project.href}>
                                        View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
