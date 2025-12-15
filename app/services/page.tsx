import { Metadata } from "next"

import { ServicesGrid } from "@/components/home/ServicesGrid"
import { CTASection } from "@/components/home/CTASection"

export const metadata: Metadata = {
    title: "Our Services | Lightspeed Technical Services",
    description: "Explore our comprehensive range of technical services including Network Solutions, Smart Home Automation, Security, and more.",
}

export default function ServicesPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Header Section */}
            <section className="py-20 bg-muted/50">
                <div className="container px-4 md:px-6 text-center">
                    <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl mb-4">
                        Our Services
                    </h1>
                    <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                        End-to-end technology solutions tailored to your unique needs.
                        From infrastructure to automation, we have you covered.
                    </p>
                </div>
            </section>

            {/* Reuse the ServicesGrid - it's already built for this! */}
            <ServicesGrid showHeading={false} />

            {/* CTA */}
            <CTASection />
        </div>
    )
}
