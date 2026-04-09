import { MetadataRoute } from 'next'
import { services } from '@/lib/services-data'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://lightspeednet.vercel.app'

    const routes = [
        { url: '', priority: 1.0, changefreq: 'monthly' as const },
        { url: '/about', priority: 0.8, changefreq: 'monthly' as const },
        { url: '/contact', priority: 0.8, changefreq: 'monthly' as const },
        { url: '/portfolio', priority: 0.8, changefreq: 'monthly' as const },
        { url: '/blog', priority: 0.8, changefreq: 'monthly' as const },
    ]

    return [
        ...routes.map(route => ({
            url: `${baseUrl}${route.url}`,
            lastModified: new Date(),
            changeFrequency: route.changefreq,
            priority: route.priority,
        })),
        ...services.map(service => ({
            url: `${baseUrl}/services/${service.slug}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: service.parentService ? 0.6 : 0.8,
        })),
    ]
}
