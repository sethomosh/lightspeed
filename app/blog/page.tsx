import { getAllPosts } from "@/lib/blog"
import { BlogList } from "@/components/blog/BlogList"

export const metadata = {
    title: 'Blog | Lightspeed',
    description: 'Insights, tutorials, and news about infrastructure, security, and smart home technology.',
}

export default function BlogPage() {
    const posts = getAllPosts()

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero */}
            <section className="bg-primary/5 py-20">
                <div className="container px-4 text-center">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-4">
                        Insights & News
                    </h1>
                    <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
                        Latest updates on technology, infrastructure, and security.
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className="container px-4 py-12">
                <BlogList posts={posts} />
            </section>
        </div>
    )
}
