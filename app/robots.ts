import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/', '/admin/'], // Don't crawl API routes
            },
        ],
        sitemap: 'https://lightspeednet.vercel.app/sitemap.xml',
    }
}
