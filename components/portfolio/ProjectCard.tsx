"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export interface Project {
    id: string
    title: string
    client: string
    category: string
    image: string
    description: string
    tags: string[]
}

interface ProjectCardProps {
    project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
        >
            <Card className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow duration-300 group">
                <div className="relative aspect-video overflow-hidden">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
                    />
                    <div className="absolute top-2 right-2">
                        <Badge variant="secondary" className="backdrop-blur-md bg-white/50 text-black">
                            {project.category}
                        </Badge>
                    </div>
                </div>
                <CardHeader className="p-5 pb-2">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-1">
                                {project.client}
                            </p>
                            <h3 className="text-xl font-bold">{project.title}</h3>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-5 pt-2 flex-grow">
                    <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                        {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                                {tag}
                            </Badge>
                        ))}
                    </div>
                </CardContent>
                <CardFooter className="p-5 pt-0 mt-auto">
                    <Button variant="outline" className="w-full gap-2 group/btn">
                        View Case Study
                        <ExternalLink className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                </CardFooter>
            </Card>
        </motion.div>
    )
}
