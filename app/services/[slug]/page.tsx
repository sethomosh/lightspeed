import { Metadata } from "next"
import { notFound } from "next/navigation"

import { services } from "@/lib/services-data"
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate"
import { ComingSoon } from "@/components/services/ComingSoon"

interface PageProps {
    params: {
        slug: string
    }
}

// Generate static params for all services (SSG)
export function generateStaticParams() {
    return services.map((service) => ({
        slug: service.slug,
    }))
}

// Generate metadata for each service page with SEO optimization
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const service = services.find((s) => s.slug === params.slug)

    if (!service) {
        return {
            title: "Service Not Found",
        }
    }

    // SEO-optimized titles and descriptions per service
    const seoData: Record<string, { title: string; description: string; keywords: string }> = {
        'network-solutions': {
            title: 'Network Installation & WiFi Solutions in Busia | Lightspeed',
            description: 'Professional network infrastructure services in Busia County. WiFi installation, network optimization, enterprise networking, and connectivity solutions. Free consultation.',
            keywords: 'network installation Busia, WiFi setup Kenya, enterprise networking, internet connectivity, network optimization'
        },
        'smart-home-automation': {
            title: 'Smart Home Automation Services in Kenya | Lightspeed',
            description: 'Transform your home with smart automation. Lighting, climate control, security integration, and home servers. Serving Busia and Western Kenya.',
            keywords: 'smart home Kenya, home automation Busia, smart lighting, home assistant, automated home'
        },
        'security-systems': {
            title: 'CCTV & Security System Installation Busia | Lightspeed',
            description: 'Professional security systems installation. CCTV cameras, alarm systems, access control. Protect your home or business in Busia County.',
            keywords: 'CCTV installation Busia, security cameras Kenya, alarm systems, access control, surveillance'
        },
        'devops-consulting': {
            title: 'DevOps Consulting Services Kenya | Cloud Infrastructure | Lightspeed',
            description: 'Professional DevOps consulting for startups and businesses. Infrastructure automation, CI/CD pipelines, Kubernetes, Docker. Remote services available.',
            keywords: 'DevOps consultant Kenya, cloud infrastructure, Kubernetes, Docker, CI/CD'
        },
        'business-solutions': {
            title: 'Custom Web Development & CTO Services Kenya | Lightspeed',
            description: 'Professional web application development and startup CTO services. Custom software solutions for businesses in Kenya. Free consultation.',
            keywords: 'web development Kenya, custom software, CTO services, business automation'
        },
        'computer-solutions': {
            title: 'Server Setup & Computer Services Busia | NAS Solutions | Lightspeed',
            description: 'Professional computer and server services. Workstation setup, NAS solutions, server building, IT support in Busia County and Western Kenya.',
            keywords: 'server setup Busia, NAS solutions Kenya, computer services, workstation setup, IT support'
        }
    }

    const seo = seoData[params.slug] || {
        title: `${service.title} | Lightspeed`,
        description: service.description,
        keywords: ''
    }

    return {
        title: seo.title,
        description: seo.description,
        keywords: seo.keywords,
        openGraph: {
            title: seo.title,
            description: seo.description,
            url: `https://lightspeednet.vercel.app/services/${params.slug}`,
            type: 'website',
        },
        alternates: {
            canonical: `https://lightspeednet.vercel.app/services/${params.slug}`,
        },
    }
}

export default function ServicePage({ params }: PageProps) {
    const service = services.find((s) => s.slug === params.slug)

    if (!service) {
        notFound()
    }

    // Show ComingSoon component for services with coming-soon status
    if (service.status === 'coming-soon') {
        return <ComingSoon title={service.title} description={service.description} />
    }

    const { pricing } = service
    // Fallback pricing for Schema LD if missing
    const startingPrice = pricing?.starter?.price?.replace(/[^0-9.]/g, '') || "0"

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: service.title,
        description: service.description,
        provider: {
            '@type': 'LocalBusiness',
            name: 'Lightspeed'
        },
        areaServed: {
            '@type': 'Country',
            name: 'Kenya'
        },
        hasOfferCatalog: pricing ? {
            '@type': 'OfferCatalog',
            name: 'Service Tiers',
            itemListElement: [
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Starter Tier'
                    },
                    price: pricing.starter.price.replace(/[^0-9.]/g, ''),
                    priceCurrency: 'KES'
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Professional Tier'
                    },
                    price: pricing.professional.price.replace(/[^0-9.]/g, ''),
                    priceCurrency: 'KES'
                }
            ]
        } : undefined
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ServicePageTemplate {...service} />
        </>
    )
}
