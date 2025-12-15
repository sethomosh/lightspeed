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

// Generate metadata for each service page
export function generateMetadata({ params }: PageProps): Metadata {
    const service = services.find((s) => s.slug === params.slug)

    if (!service) {
        return {
            title: "Service Not Found",
        }
    }

    return {
        title: `${service.title} | Lightspeed Infrastructure`,
        description: service.description,
        openGraph: {
            title: `${service.title} | Lightspeed Infrastructure`,
            description: service.description,
            type: 'website',
            url: `https://lightspeed.tech/services/${service.slug}`,
            images: [
                {
                    url: `https://lightspeed.tech/api/og?title=${encodeURIComponent(service.title)}`, // Fallback or dynamic OG
                    width: 1200,
                    height: 630,
                    alt: service.title,
                }
            ],
        }
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
