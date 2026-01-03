import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://lightspeednet.vercel.app'

    const routes = [
        '',
        '/about',
        '/contact',
        '/portfolio',
        '/blog',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    const services = [
        'network-solutions',
        'smart-home-automation',
        'security-systems',
        'devops-consulting',
        'business-solutions',
        'computer-solutions',
    ].map((service) => ({
        url: `${baseUrl}/services/${service}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.9,
    }))

    return [...routes, ...services]
}

// Next.js automatically sets correct headers for sitemap route
// But if still having issues, we can create a custom route instead
