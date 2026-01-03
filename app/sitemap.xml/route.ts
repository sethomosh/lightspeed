export async function GET() {
    const baseUrl = 'https://lightspeednet.vercel.app'

    // Get current date in ISO format
    const lastmod = new Date().toISOString()

    // Define all routes
    const routes = [
        { url: '', priority: '1.0', changefreq: 'weekly' },
        { url: '/about', priority: '0.8', changefreq: 'weekly' },
        { url: '/contact', priority: '0.8', changefreq: 'weekly' },
        { url: '/portfolio', priority: '0.8', changefreq: 'weekly' },
        { url: '/blog', priority: '0.8', changefreq: 'weekly' },
    ]

    const services = [
        'network-solutions',
        'smart-home-automation',
        'security-systems',
        'devops-consulting',
        'business-solutions',
        'computer-solutions',
    ]

    // Build XML sitemap
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${baseUrl}${route.url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
${services.map(service => `  <url>
    <loc>${baseUrl}/services/${service}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>`).join('\n')}
</urlset>`

    return new Response(sitemap, {
        status: 200,
        headers: {
            'Content-Type': 'application/xml; charset=utf-8',
            'Cache-Control': 'public, max-age=3600, s-maxage=3600',
        },
    })
}
