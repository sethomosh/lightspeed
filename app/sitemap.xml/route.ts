export const dynamic = 'force-dynamic'

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
    // Use explicit concatenation to ensure XML declaration is first
    const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>'
    const urlsetStart = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
    const urlsetEnd = '</urlset>'

    const routesXml = routes.map(route => `
  <url>
    <loc>${baseUrl}${route.url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('')

    const servicesXml = services.map(service => `
  <url>
    <loc>${baseUrl}/services/${service}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>`).join('')

    const sitemap = xmlHeader + '\n' + urlsetStart + routesXml + servicesXml + '\n' + urlsetEnd

    return new Response(sitemap, {
        status: 200,
        headers: {
            'Content-Type': 'application/xml; charset=utf-8',
            'X-Content-Type-Options': 'nosniff',
            'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
            'Pragma': 'no-cache',
            'Expires': '0',
        },
    })
}
