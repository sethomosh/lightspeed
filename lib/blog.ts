import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { sync } from "glob"

const POSTS_PATH = path.join(process.cwd(), "content/blog")

export interface BlogPost {
    slug: string
    title: string
    date: string
    author: string
    description: string
    tags: string[]
    image?: string
    content: string
}

export function getAllPosts(): BlogPost[] {
    // Return empty array if directory doesn't exist yet
    if (!fs.existsSync(POSTS_PATH)) return []

    const paths = sync(`${POSTS_PATH}/**/*.mdx`)

    const posts = paths
        .map((filePath) => {
            const source = fs.readFileSync(filePath, "utf8")
            const { content, data } = matter(source)
            const slug = path.basename(filePath, ".mdx")

            return {
                slug,
                content,
                title: data.title,
                date: data.date instanceof Date ? data.date.toISOString() : data.date,
                author: data.author || "Lightspeed Team",
                description: data.description,
                tags: data.tags || [],
                image: data.image,
            } as BlogPost
        })
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

    return posts
}

export function getPostBySlug(slug: string): BlogPost | null {
    const filePath = path.join(POSTS_PATH, `${slug}.mdx`)

    if (!fs.existsSync(filePath)) {
        return null
    }

    const source = fs.readFileSync(filePath, "utf8")
    const { content, data } = matter(source)

    return {
        slug,
        content,
        title: data.title,
        date: data.date instanceof Date ? data.date.toISOString() : data.date,
        author: data.author || "Lightspeed Team",
        description: data.description,
        tags: data.tags || [],
        image: data.image,
    } as BlogPost
}
