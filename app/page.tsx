import { HeroSection } from "@/components/home/HeroSection"
import { ServicesGrid } from "@/components/home/ServicesGrid"
import { FeaturedProjects } from "@/components/home/FeaturedProjects"
import { WhyChooseSection } from "@/components/home/WhyChooseSection"
import { CTASection } from "@/components/home/CTASection"

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
