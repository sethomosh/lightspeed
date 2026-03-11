import { Metadata } from 'next'
import { HeroSection } from "@/components/home/HeroSection"
import { ServicesGrid } from "@/components/home/ServicesGrid"
import { FeaturedProjects } from "@/components/home/FeaturedProjects"
import { WhyChooseSection } from "@/components/home/WhyChooseSection"
import { CTASection } from "@/components/home/CTASection"

export const metadata: Metadata = {
    title: 'Lightspeed | Network Solutions, Smart Home & IT Services in Kenya',
    description: 'Professional infrastructure solutions. We offer network installation, smart home automation, security systems, DevOps consulting, and computer services. Free consultation available.',
    keywords: 'network solutions Kenya, IT services Kenya, smart home automation, CCTV installation, computer services, WiFi installation Kenya, security systems Kenya',
    authors: [{ name: 'Lightspeed' }],
    openGraph: {
        title: 'Lightspeed | Infrastructure Solutions in Kenya',
        description: 'Professional network, smart home, and IT services across Kenya.',
        url: 'https://lightspeednet.vercel.app',
        siteName: 'Lightspeed',
        locale: 'en_KE',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Lightspeed | Infrastructure Solutions',
        description: 'Professional network and IT services in Kenya',
    },
    alternates: {
        canonical: 'https://lightspeednet.vercel.app',
    },
}


export default function Home() {
    return (
        <>
            <HeroSection />
            <ServicesGrid />
            <FeaturedProjects />
            <WhyChooseSection />
            <CTASection />
        </>
    )
}
