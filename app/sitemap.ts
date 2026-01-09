import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://lightspeednet.vercel.app'

    const routes = [
        { url: '', priority: 1.0, changefreq: 'weekly' as const },
        { url: '/about', priority: 0.8, changefreq: 'weekly' as const },
        { url: '/contact', priority: 0.8, changefreq: 'weekly' as const },
        { url: '/portfolio', priority: 0.8, changefreq: 'weekly' as const },
        { url: '/blog', priority: 0.8, changefreq: 'weekly' as const },
    ]

    const services = [
        'network-solutions',
        'smart-home-automation',
        'security-systems',
        'devops-consulting',
        'business-solutions',
        'computer-solutions',
    ]

    return [
        ...routes.map(route => ({
            url: `${baseUrl}${route.url}`,
            lastModified: new Date(),
            changeFrequency: route.changefreq,
            priority: route.priority,
        })),
        ...services.map(service => ({
            url: `${baseUrl}/services/${service}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.9,
        })),
    ]
}
