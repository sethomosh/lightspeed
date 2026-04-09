import { Zap, MapPin, CheckCircle, DollarSign } from "lucide-react"

const cards = [
    {
        title: "End-to-End Delivery",
        description: "From first site survey to final handover. We own the full project. No handoffs, no gaps.",
        icon: Zap,
    },
    {
        title: "Based in Nairobi",
        description: "On-site when it matters. Remote when it doesn't. Always reachable.",
        icon: MapPin,
    },
    {
        title: "Proven Delivery",
        description: "Real projects, documented outcomes. The portfolio speaks louder than promises.",
        icon: CheckCircle,
    },
    {
        title: "Fixed-Price Quotes",
        description: "Scoped in detail before any work begins. No surprises on the invoice.",
        icon: DollarSign,
    },
]

export function WhyChooseSection() {
    return (
        <section className="py-24 bg-base relative z-10">
            <div className="container px-4 md:px-6 max-w-6xl mx-auto">
                <div className="flex flex-col items-start gap-4 mb-16">
                    <h2 className="font-display font-bold text-primary">How We Work</h2>
                    <p className="font-body text-text-muted-brand">
                        The same principles on every project, regardless of size.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {cards.map((card) => (
                        <div
                            key={card.title}
                            className="bg-surface border-l-4 border-prussian rounded-r-xl rounded-l-none p-5 flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="flex items-center gap-3">
                                <card.icon className="h-5 w-5 text-prussian shrink-0" />
                                <h3 className="font-display font-600 text-[16px] text-primary">
                                    {card.title}
                                </h3>
                            </div>
                            <p className="font-body text-[14px] text-text-muted-brand leading-[1.65]">
                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
