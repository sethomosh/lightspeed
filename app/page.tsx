import { Metadata } from 'next'
import Link from 'next/link'
import { HeroSection } from "@/components/home/HeroSection"
import { StatsBar } from "@/components/home/StatsBar"
import { ServicesGrid } from "@/components/home/ServicesGrid"
import { WhyChooseSection } from "@/components/home/WhyChooseSection"
import { CTASection } from "@/components/home/CTASection"
import { GoogleReviewsSection } from "@/components/home/GoogleReviewsSection"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { AnimatedAreaBadge } from "@/components/home/AnimatedAreaBadge"
import { MapPin } from "lucide-react"

export const metadata: Metadata = {
    title: "Infrastructure & IT Solutions | Stratum Systems",
    description: "End-to-end network, smart home, security, and DevOps solutions for businesses and homes across Nairobi and Kenya.",
    keywords: 'network solutions Kenya, IT services Kenya, smart home automation, CCTV installation, computer services, WiFi installation Kenya, security systems Kenya',
    authors: [{ name: 'Stratum' }],
    openGraph: {
        title: "Infrastructure & IT Solutions | Stratum Systems",
        description: "End-to-end network, smart home, security, and DevOps solutions for businesses and homes across Nairobi and Kenya.",
        url: 'https://lightspeednet.vercel.app',
        siteName: 'Stratum Systems',
        locale: 'en_KE',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: "Infrastructure & IT Solutions | Stratum Systems",
        description: "End-to-end network, smart home, security, and DevOps solutions for businesses and homes across Nairobi and Kenya.",
    },
    alternates: {
        canonical: 'https://lightspeednet.vercel.app',
    },
}

import { PlasmaBackground } from "@/components/ui/SectionBackgrounds"

export default function Home() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Stratum Systems",
        "description": "End-to-end infrastructure and IT solutions provider. Network design, smart home automation, security systems, DevOps consulting, and computer solutions for businesses and homes across Kenya.",
        "url": "https://lightspeednet.vercel.app",
        "telephone": "+254115217699",
        "email": "stratumsystemsandsolutions@gmail.com",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Nairobi",
            "addressCountry": "KE"
        },
        "areaServed": ["Nairobi", "Westlands", "Karen", "Kilimani", "Lavington", "Kiambu"],
        "serviceType": ["Network Solutions", "Smart Home Automation", "Security Systems", "DevOps Consulting", "Business IT Solutions", "Computer Solutions"]
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <HeroSection />
            <StatsBar />
            <ServicesGrid />
            <WhyChooseSection />

            {/* Location Section — 60/40 desktop split */}
            <section className="py-24 bg-surface border-y border-brand relative z-10 overflow-hidden">
                <PlasmaBackground />
                <div className="container px-4 md:px-6 max-w-6xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-20 items-center">
                        {/* Left: 60% */}
                        <div className="space-y-6">
                            <span className="text-label text-prussian">Locations</span>
                            <h3 className="font-display font-bold text-primary">
                                Serving Nairobi &amp; Across Kenya
                            </h3>
                            <p className="font-body text-[16px] text-text-secondary leading-[1.7] max-w-xl">
                                Stratum Systems is based in Nairobi and provides on-site support across the city and its surroundings. We serve businesses and homeowners in Westlands, Karen, Kilimani, Lavington, Upperhill, Gigiri, Parklands, Kiambu, and the wider Nairobi metro area. Remote support and consulting is available nationally.
                            </p>
                        </div>

                        {/* Right: 40% — area badge cluster with watermark */}
                        <div className="relative">
                            {/* Decorative watermark MapPin */}
                            <MapPin className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120px] h-[120px] text-prussian opacity-5 pointer-events-none" />
                            <div className="flex flex-wrap gap-2 relative z-10">
                                {["Westlands", "Karen", "Kilimani", "Lavington", "Upperhill", "Gigiri", "Parklands", "Kiambu", "Nairobi CBD"].map((area, index) => (
                                    <AnimatedAreaBadge key={area} area={area} index={index} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CTASection />
            <GoogleReviewsSection />

            {/* FAQ Section */}
            <section className="py-16 bg-surface-raised border-t border-brand relative z-10">
                <div className="container px-4 md:px-6 max-w-3xl mx-auto">
                    <div className="text-center mb-16">
                        <h3 className="font-display font-bold text-primary">
                            Common Questions
                        </h3>
                        <p className="font-body text-text-muted-brand mt-4">
                            Anything else — just ask.
                        </p>
                    </div>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1" className="border-b border-brand">
                            <AccordionTrigger className="text-left font-display text-[16px] font-semibold text-primary hover:text-prussian transition-colors py-6 [&[data-state=open]>svg]:rotate-180">
                                Where is Stratum Systems based?
                            </AccordionTrigger>
                            <AccordionContent className="font-body text-[14px] text-text-secondary leading-[1.7] pb-4">
                                We are based in Nairobi, Kenya, and provide on-site services across the city and surrounding areas including Westlands, Karen, Kilimani, Lavington, and Kiambu.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2" className="border-b border-brand">
                            <AccordionTrigger className="text-left font-display text-[16px] font-semibold text-primary hover:text-prussian transition-colors py-6 [&[data-state=open]>svg]:rotate-180">
                                What types of businesses do you work with?
                            </AccordionTrigger>
                            <AccordionContent className="font-body text-[14px] text-text-secondary leading-[1.7] pb-4">
                                We work with SMEs, startups, media companies, schools, and homeowners across Nairobi. Our projects range from small home network setups to enterprise infrastructure deployments.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3" className="border-b border-brand">
                            <AccordionTrigger className="text-left font-display text-[16px] font-semibold text-primary hover:text-prussian transition-colors py-6 [&[data-state=open]>svg]:rotate-180">
                                Do you offer free consultations?
                            </AccordionTrigger>
                            <AccordionContent className="font-body text-[14px] text-text-secondary leading-[1.7] pb-4">
                                Yes. We offer a free 30-minute consultation to assess your needs and recommend the right solution. Book directly through our contact page or WhatsApp.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4" className="border-b border-brand">
                            <AccordionTrigger className="text-left font-display text-[16px] font-semibold text-primary hover:text-prussian transition-colors py-6 [&[data-state=open]>svg]:rotate-180">
                                How long does a typical installation take?
                            </AccordionTrigger>
                            <AccordionContent className="font-body text-[14px] text-text-secondary leading-[1.7] pb-4">
                                Timelines depend on project scope. A home network setup typically takes one day. An enterprise network or full smart home installation is usually completed within 3–7 days.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-5" className="border-b border-brand">
                            <AccordionTrigger className="text-left font-display text-[16px] font-semibold text-primary hover:text-prussian transition-colors py-6 [&[data-state=open]>svg]:rotate-180">
                                Do you provide ongoing support after installation?
                            </AccordionTrigger>
                            <AccordionContent className="font-body text-[14px] text-text-secondary leading-[1.7] pb-4">
                                Yes. We offer ongoing maintenance, remote monitoring, and support packages for all our installations. We are always available via WhatsApp for urgent issues.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </section>
        </>
    )
}
