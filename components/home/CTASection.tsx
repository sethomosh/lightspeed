import Link from "next/link"
import { ArrowRight, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
    return (
        <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden relative">
            {/* Background pattern/glow */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            </div>

            <div className="container px-4 md:px-6 relative z-10">
                <div className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Ready to Solve Your Technical Challenge?
                    </h2>
                    <p className="text-gray-300 md:text-xl/relaxed max-w-[600px]">
                        Book a free 30-minute consultation to discuss your needs. We&apos;ll help you architect the right solution.
                    </p>
                    <div className="flex flex-col gap-4 sm:flex-row pt-4">
                        <Button
                            asChild
                            size="lg"
                            className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-primary/25 transition-all"
                        >
                            <Link href="/contact">
                                Book Free Consultation
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                        <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="text-lg px-8 py-6 rounded-full border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white hover:border-[#25D366] shadow-lg hover:shadow-[#25D366]/25 transition-all"
                        >
                            <Link href="https://wa.me/254115217699?text=Hi!%20I%27m%20interested%20in%20Lightspeed%20services.%20I%27d%20like%20to%20discuss:" target="_blank" rel="noopener noreferrer">
                                WhatsApp Us
                                <MessageCircle className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
