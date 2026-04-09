import Link from "next/link"
import { MapPin } from "lucide-react"

export function CTASection() {
    return (
        <section className="bg-prussian text-white py-24 relative z-10 overflow-hidden">
            <div className="container px-4 md:px-6 max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left: copy + buttons */}
                    <div className="space-y-8">
                        <h2 className="font-display font-bold text-[36px] md:text-[48px] leading-tight text-white">
                            Let&apos;s Build Something That Works.
                        </h2>
                        <p className="font-body font-300 text-[18px] text-white/70 max-w-lg leading-relaxed">
                            Book a free 30-minute call. We&apos;ll tell you exactly what we&apos;d do and what it would cost.
                        </p>
                        <div className="flex flex-wrap gap-4 pt-4">
                            <Link
                                href="/contact"
                                className="bg-white text-prussian font-body text-[15px] font-semibold px-7 py-3 rounded-full transition-all duration-200 hover:bg-signal hover:text-white"
                            >
                                Book a Free Call
                            </Link>
                            <Link
                                href="https://wa.me/254115217699"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-transparent border border-white/40 text-white font-body text-[15px] font-medium px-7 py-3 rounded-full transition-all duration-200 hover:bg-white/10"
                            >
                                WhatsApp Us
                            </Link>
                        </div>
                    </div>

                    {/* Right: Google Maps placeholder */}
                    <div className="relative">
                        <div className="w-full h-64 md:h-80 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm flex flex-col items-center justify-center transition-all duration-300 hover:border-white/20 group">
                            <MapPin className="w-9 h-9 text-white/30 mb-4 group-hover:scale-110 transition-transform duration-300" />
                            <p className="font-body text-sm font-medium text-white/30">Google Maps embed coming soon</p>
                            <p className="font-body text-[12px] text-white/20 mt-2">Nairobi, Kenya</p>
                            {/* TODO: Seth to replace with Google Maps iframe from GBP */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
