import { Layers, MapPin, Award } from "lucide-react"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const benefits = [
    {
        title: "End-to-End Solutions",
        description: "From hardware specification to software deployment - complete solutions tailored to your unique infrastructure needs.",
        icon: Layers,
    },
    {
        title: "Local Expert",
        description: "Based in Nairobi. We provide on-site support when needed and reliable remote assistance always available.",
        icon: MapPin,
    },
    {
        title: "Proven Track Record",
        description: "Real projects, real results. Check our portfolio of completed work delivering value to businesses across Kenya.",
        icon: Award,
    },
]

export function WhyChooseSection() {
    return (
        <section className="py-20 bg-muted/30">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center text-center space-y-4 mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                        Why Choose Lightspeed?
                    </h2>
                    <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                        We combine technical expertise with local understanding to deliver superior results.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {benefits.map((benefit) => (
                        <Card
                            key={benefit.title}
                            className="bg-background border-border/50 transition-all hover:border-primary/50 hover:shadow-md"
                        >
                            <CardHeader className="flex flex-col items-center text-center pb-2">
                                <div className="mb-4 rounded-full bg-primary/10 p-4 text-primary">
                                    <benefit.icon className="h-8 w-8" />
                                </div>
                                <CardTitle className="text-xl font-bold">{benefit.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="text-center">
                                <CardDescription className="text-base text-muted-foreground">
                                    {benefit.description}
                                </CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
