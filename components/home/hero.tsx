import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
    return (
        <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
            <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
                <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
                    Lightspeed Technical Services
                </h1>
                <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
                    Accelerating your business with cutting-edge technical solutions. We build faster, smarter, and scalable systems.
                </p>
                <div className="space-x-4">
                    <Button asChild size="lg">
                        <Link href="/contact">Get Started</Link>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                        <Link href="/portfolio">View Work</Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
