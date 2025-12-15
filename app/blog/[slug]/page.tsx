import fs from "fs"
import path from "path"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { MDXRemote } from "next-mdx-remote/rsc"
import { format } from "date-fns"
import { ArrowLeft, Share2 } from "lucide-react"
import rehypeHighlight from "rehype-highlight"
import rehypeSlug from "rehype-slug"
import rehypeAutolinkHeadings from "rehype-autolink-headings"

import { Button } from "@/components/ui/button"
import { getPostBySlug, getAllPosts } from "@/lib/blog"
import { Badge } from "@/components/ui/badge"

// --- Custom Components for MDX ---
// You can map HTML tags to custom components here
const components = {
    h1: (props: any) => <h1 className="text-3xl font-bold mt-8 mb-4 hover:underline decoration-primary" {...props} />,
    h2: (props: any) => <h2 className="text-2xl font-semibold mt-8 mb-4" {...props} />,
    img: (props: any) => (
        <div className="relative w-full h-[400px] my-8 rounded-xl overflow-hidden">
            <Image
                src={props.src}
                alt={props.alt || "Blog image"}
                fill
                className="object-cover"
            />
        </div>
    ),
    // Add more custom components (e.g. Callout, CodeBlock)
}

interface BlogPostPageProps {
    params: {
        slug: string
    }
}

export async function generateStaticParams() {
    const posts = getAllPosts()
    return posts.map((post) => ({
        slug: post.slug,
    }))
}

export async function generateMetadata({ params }: BlogPostPageProps) {
    const post = getPostBySlug(params.slug)
    if (!post) return { title: "Post Not Found" }

    const ogImage = post.image || 'https://lightspeed.tech/og.jpg'

    return {
        title: post.title,
        description: post.description,
        openGraph: {
            title: post.title,
            description: post.description,
            type: 'article',
            publishedTime: post.date,
            authors: [post.author],
            url: `https://lightspeed.tech/blog/${params.slug}`,
            images: [
                {
                    url: ogImage,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                }
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.description,
            images: [ogImage],
        }
    }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
    const post = getPostBySlug(params.slug)

    if (!post) {
        notFound()
    }

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.description,
        image: post.image,
        datePublished: post.date,
        author: {
            '@type': 'Person',
            name: post.author
        },
        publisher: {
            '@type': 'Organization',
            name: 'Lightspeed',
            logo: {
                '@type': 'ImageObject',
                url: 'https://lightspeed.tech/logo.png'
            }
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `https://lightspeed.tech/blog/${params.slug}`
        }
    }

    return (
        <article className="min-h-screen pb-20">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {/* Header / Hero */}
            <div className="bg-muted/30 border-b">
                <div className="container px-4 py-12 md:py-16 mx-auto max-w-4xl">
                    <Link href="/blog">
                        <Button variant="ghost" className="mb-8 gap-2 pl-0 hover:pl-2 transition-all">
                            <ArrowLeft className="h-4 w-4" /> Back to Blog
                        </Button>
                    </Link>

                    <div className="flex gap-2 mb-6">
                        {post.tags.map(tag => (
                            <Badge key={tag} variant="secondary">{tag}</Badge>
                        ))}
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                        {post.title}
                    </h1>

                    <div className="flex items-center justify-between text-muted-foreground">
                        <div className="flex items-center gap-4">
                            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                                {post.author.charAt(0)}
                            </div>
                            <div>
                                <p className="font-medium text-foreground">{post.author}</p>
                                <p className="text-sm">{format(new Date(post.date), 'MMMM d, yyyy')}</p>
                            </div>
                        </div>
                        <Button variant="outline" size="icon">
                            <Share2 className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </div>

            {/* Featured Image */}
            {post.image && (
                <div className="container px-4 mx-auto max-w-4xl -mt-8 mb-12">
                    <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg border">
                        <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            )}

            {/* Content */}
            <div className="container px-4 mx-auto max-w-3xl prose prose-neutral dark:prose-invert lg:prose-lg hover:prose-a:text-primary">
                <MDXRemote
                    source={post.content}
                    components={components}
                    options={{
                        mdxOptions: {
                            remarkPlugins: [],
                            rehypePlugins: [
                                rehypeHighlight,
                                rehypeSlug,
                                [rehypeAutolinkHeadings, { behavior: 'wrap' }]
                            ],
                        },
                    }}
                />
            </div>
        </article>
    )
}
