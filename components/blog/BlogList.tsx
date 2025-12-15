"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { format } from "date-fns"
import { Search } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { BlogPost } from "@/lib/blog"

interface BlogListProps {
    posts: BlogPost[]
}

export function BlogList({ posts }: BlogListProps) {
    const [searchQuery, setSearchQuery] = useState("")
    const [currentPage, setCurrentPage] = useState(1)
    const postsPerPage = 9

    const filteredPosts = posts.filter(post => {
        const query = searchQuery.toLowerCase()
        return (
            post.title.toLowerCase().includes(query) ||
            post.description.toLowerCase().includes(query) ||
            post.tags.some(tag => tag.toLowerCase().includes(query))
        )
    })

    const totalPages = Math.ceil(filteredPosts.length / postsPerPage)
    const startIndex = (currentPage - 1) * postsPerPage
    const currentPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage)

    return (
        <div className="space-y-10">
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                    placeholder="Search articles..."
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => {
                        setSearchQuery(e.target.value)
                        setCurrentPage(1)
                    }}
                />
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence mode="popLayout">
                    {currentPosts.map((post) => (
                        <motion.div
                            key={post.slug}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            layout
                        >
                            <Link href={`/blog/${post.slug}`}>
                                <Card className="h-full flex flex-col hover:shadow-lg transition-shadow overflow-hidden group">
                                    <div className="relative h-48 overflow-hidden">
                                        <div className="absolute inset-0 bg-muted" />
                                        {post.image && (
                                            <Image
                                                src={post.image}
                                                alt={post.title}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                        )}
                                    </div>
                                    <CardHeader className="p-5 pb-2">
                                        <div className="flex gap-2 mb-2">
                                            {post.tags.slice(0, 2).map(tag => (
                                                <Badge key={tag} variant="secondary" className="text-xs">
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>
                                        <h3 className="font-bold text-xl line-clamp-2 group-hover:text-primary transition-colors">
                                            {post.title}
                                        </h3>
                                    </CardHeader>
                                    <CardContent className="p-5 pt-2 flex-grow">
                                        <p className="text-muted-foreground text-sm line-clamp-3">
                                            {post.description}
                                        </p>
                                    </CardContent>
                                    <CardFooter className="p-5 pt-0 mt-auto text-xs text-muted-foreground flex justify-between">
                                        <span>{format(new Date(post.date), 'MMM d, yyyy')}</span>
                                        <span>{post.author}</span>
                                    </CardFooter>
                                </Card>
                            </Link>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {filteredPosts.length === 0 && (
                <div className="text-center py-20 text-muted-foreground">
                    No articles found matching your search.
                </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="flex justify-center gap-2">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${currentPage === page
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-muted hover:bg-muted/80"
                                }`}
                        >
                            {page}
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}
